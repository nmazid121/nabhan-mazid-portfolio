'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { supabase, BlogPost } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';

const BlogSection: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const { isAdmin, mounted: authMounted } = useAuth();

  useEffect(() => {
    setMounted(true);
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogPosts(data || []);
    } catch (err) {
      console.error('Error fetching blog posts:', err);
      setError('Failed to load blog posts');
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async (postId: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', postId);

      if (error) throw error;
      
      setBlogPosts(prev => prev.filter(post => post.id !== postId));
    } catch (err) {
      console.error('Error deleting post:', err);
      alert('Failed to delete post');
    }
  };

  const handleTogglePublished = async (postId: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ published: !currentStatus })
        .eq('id', postId);

      if (error) throw error;
      
      setBlogPosts(prev => prev.map(post => 
        post.id === postId 
          ? { ...post, published: !currentStatus }
          : post
      ));
    } catch (err) {
      console.error('Error updating post:', err);
      alert('Failed to update post');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Prevent hydration mismatch by not rendering dynamic content until mounted
  if (!mounted) {
    return (
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 lowercase">
            blog
          </h1>
          <p className="text-lg text-gray-600 lowercase">
            random thoughts, and documenting the journey
          </p>
        </div>
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-3 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-48"></div>
              <div className="h-8 bg-gray-200 rounded w-full"></div>
              <div className="h-16 bg-gray-200 rounded w-full"></div>
              <div className="flex space-x-2">
                <div className="h-6 bg-gray-200 rounded w-16"></div>
                <div className="h-6 bg-gray-200 rounded w-20"></div>
                <div className="h-6 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="h-10 bg-gray-200 rounded w-32 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded w-96 animate-pulse"></div>
        </div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-3 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-48"></div>
            <div className="h-8 bg-gray-200 rounded w-full"></div>
            <div className="h-16 bg-gray-200 rounded w-full"></div>
            <div className="flex space-x-2">
              <div className="h-6 bg-gray-200 rounded w-16"></div>
              <div className="h-6 bg-gray-200 rounded w-20"></div>
              <div className="h-6 bg-gray-200 rounded w-24"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 lowercase">
            blog
          </h1>
                        <p className="text-lg text-[#007AFF] lowercase">
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 lowercase">
            blog
          </h1>
          {authMounted && isAdmin && (
            <Link href="/blog/new">
              <motion.div
                className="px-4 py-2 bg-[#007AFF] text-white rounded-lg text-sm font-medium lowercase hover:bg-[#7d0600] transition-colors cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                + new post
              </motion.div>
            </Link>
          )}
        </div>
        <p className="text-lg text-gray-600 lowercase">
        random thoughts, and documenting the journey
        </p>
      </motion.div>

      {/* Blog Posts */}
      <motion.div variants={itemVariants} className="space-y-6">
        {blogPosts.length === 0 ? (
          <p className="text-gray-500 lowercase">
            no blog posts found.
          </p>
        ) : (
          blogPosts.map((post) => (
            <motion.article
              key={post.id}
              className="group border-b border-gray-200 pb-6 last:border-b-0"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="space-y-3">
                {/* Date and read time */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <time>{formatDate(post.created_at)}</time>
                    <span>•</span>
                    <span>{post.read_time}</span>
                    {!post.published && (
                      <>
                        <span>•</span>
                        <span className="text-orange-600 font-medium">draft</span>
                      </>
                    )}
                  </div>
                  
                  {/* Admin controls - only show after auth is mounted */}
                  {authMounted && isAdmin && (
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleTogglePublished(post.id, post.published)}
                        className="text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        {post.published ? 'unpublish' : 'publish'}
                      </button>
                      <Link
                        href={`/blog/edit/${post.slug}`}
                        className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
                      >
                        edit
                      </Link>
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
                      >
                        delete
                      </button>
                    </div>
                  )}
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`}>
                  <motion.h2 
                    className="text-xl lg:text-2xl font-bold text-gray-900 lowercase group-hover:text-[#007AFF] transition-colors duration-200 cursor-pointer"
                  >
                    {post.title}
                  </motion.h2>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed lowercase">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full lowercase"
                      whileHover={{ 
                        backgroundColor: '#007AFF',
                        color: 'white',
                        scale: 1.05
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))
        )}
      </motion.div>

      {/* Footer note */}
      <motion.div 
        variants={itemVariants}
        className="text-center py-8"
      >
        <p className="text-gray-500 lowercase">
          {authMounted && isAdmin ? 'admin mode: posts are loaded from supabase database' : 'posts are loaded from supabase database'}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default BlogSection; 