'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase, Comment } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';

interface CommentsProps {
  postSlug: string;
}

const Comments: React.FC<CommentsProps> = ({ postSlug }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [newComment, setNewComment] = useState({
    author_name: '',
    content: ''
  });
  const { isAdmin, mounted: authMounted } = useAuth();

  const fetchComments = useCallback(async () => {
    try {
      // First get the post ID from the slug
      const { data: postData, error: postError } = await supabase
        .from('blog_posts')
        .select('id')
        .eq('slug', postSlug)
        .single();

      if (postError) {
        console.error('Error fetching post:', postError);
        setLoading(false);
        return;
      }

      // Then get comments for this post
      const { data: commentsData, error: commentsError } = await supabase
        .from('comments')
        .select('*')
        .eq('post_id', postData.id)
        .order('created_at', { ascending: true });

      if (commentsError) {
        console.error('Error fetching comments:', commentsError);
      } else {
        setComments(commentsData || []);
      }
    } catch (err) {
      console.error('Error in fetchComments:', err);
    } finally {
      setLoading(false);
    }
  }, [postSlug]);

  useEffect(() => {
    setMounted(true);
    fetchComments();
  }, [fetchComments]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.author_name.trim() || !newComment.content.trim()) {
      return;
    }

    setSubmitting(true);

    try {
      // First get the post ID from the slug
      const { data: postData, error: postError } = await supabase
        .from('blog_posts')
        .select('id')
        .eq('slug', postSlug)
        .single();

      if (postError) {
        console.error('Error fetching post:', postError);
        setSubmitting(false);
        return;
      }

      // Insert the new comment
      const { data, error } = await supabase
        .from('comments')
        .insert([
          {
            post_id: postData.id,
            author_name: newComment.author_name.trim(),
            content: newComment.content.trim()
          }
        ])
        .select()
        .single();

      if (error) {
        console.error('Error adding comment:', error);
      } else {
        setComments(prev => [...prev, data]);
        setNewComment({ author_name: '', content: '' });
      }
    } catch (err) {
      console.error('Error in handleSubmit:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    if (!confirm('Are you sure you want to delete this comment?')) return;

    try {
      const { error } = await supabase
        .from('comments')
        .delete()
        .eq('id', commentId);

      if (error) throw error;
      
      setComments(prev => prev.filter(comment => comment.id !== commentId));
    } catch (err) {
      console.error('Error deleting comment:', err);
      alert('Failed to delete comment');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Prevent hydration mismatch by not rendering dynamic content until mounted
  if (!mounted) {
    return (
      <div className="mt-16 pt-8 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 lowercase">
          comments
        </h3>
        <div className="space-y-4 mb-8">
          {[1, 2].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
              <div className="h-16 bg-gray-200 rounded w-full"></div>
            </div>
          ))}
        </div>
        <h4 className="text-lg font-medium text-gray-900 mb-4 lowercase">
          leave a comment
        </h4>
        <div className="space-y-4">
          <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-24 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-12 bg-gray-200 rounded w-32 animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-16 pt-8 border-t border-gray-200"
    >
      <motion.h3 
        variants={itemVariants}
        className="text-2xl font-bold text-gray-900 mb-8 lowercase"
      >
        comments ({comments.length})
      </motion.h3>

      {/* Comments List */}
      <motion.div variants={itemVariants} className="space-y-6 mb-8">
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                <div className="h-16 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </div>
        ) : comments.length === 0 ? (
          <p className="text-gray-500 lowercase">
            no comments yet. be the first to share your thoughts!
          </p>
        ) : (
          <AnimatePresence>
            {comments.map((comment) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 rounded-lg p-6 relative group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900 lowercase">
                    {comment.author_name}
                  </h4>
                  <div className="flex items-center space-x-2">
                    <time className="text-sm text-gray-500">
                      {formatDate(comment.created_at)}
                    </time>
                    {authMounted && isAdmin && (
                      <button
                        onClick={() => handleDeleteComment(comment.id)}
                        className="opacity-0 group-hover:opacity-100 text-[#007AFF] hover:text-blue-600 transition-all text-sm"
                        title="Delete comment"
                      >
                        🗑️
                      </button>
                    )}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed lowercase">
                  {comment.content}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </motion.div>

      {/* Comment Form */}
      <motion.div variants={itemVariants}>
        <h4 className="text-lg font-medium text-gray-900 mb-4 lowercase">
          leave a comment
        </h4>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="your name"
              value={newComment.author_name}
              onChange={(e) => setNewComment(prev => ({ ...prev, author_name: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007AFF] focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
              disabled={submitting}
              required
            />
          </div>
          <div>
            <textarea
              placeholder="share your thoughts..."
              value={newComment.content}
              onChange={(e) => setNewComment(prev => ({ ...prev, content: e.target.value }))}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007AFF] focus:border-transparent transition-all resize-none text-gray-900 placeholder-gray-400"
              disabled={submitting}
              required
            />
          </div>
          <motion.button
            type="submit"
            disabled={submitting || !newComment.author_name.trim() || !newComment.content.trim()}
            className="px-6 py-3 bg-[#007AFF] text-white rounded-lg font-medium lowercase disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            whileHover={{ scale: submitting ? 1 : 1.02 }}
            whileTap={{ scale: submitting ? 1 : 0.98 }}
          >
            {submitting ? 'posting...' : 'post comment'}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Comments; 