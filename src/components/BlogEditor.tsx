'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';

interface BlogEditorProps {
  mode: 'create' | 'edit';
  slug?: string;
}

const BlogEditor: React.FC<BlogEditorProps> = ({ mode, slug }) => {
  const router = useRouter();
  const { isAdmin, mounted, loading: authLoading } = useAuth();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [post, setPost] = useState({
    title: '',
    content: '',
    excerpt: '',
    read_time: '',
    tags: [] as string[],
    published: false
  });
  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    // Wait for auth to be fully loaded before making decisions
    if (!mounted || authLoading) return;

    // If user is not admin after auth is loaded, redirect
    if (!isAdmin) {
      router.replace('/blog');
      return;
    }

    // If we're in edit mode and have a slug, fetch the post
    if (mode === 'edit' && slug) {
      fetchPost();
    }
  }, [mode, slug, isAdmin, router, mounted, authLoading]);

  const fetchPost = async () => {
    if (!slug) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) throw error;
      
      setPost({
        title: data.title,
        content: data.content,
        excerpt: data.excerpt,
        read_time: data.read_time,
        tags: data.tags || [],
        published: data.published
      });
      setTagInput(data.tags?.join(', ') || '');
    } catch (err) {
      console.error('Error fetching post:', err);
      alert('Failed to load post');
      router.replace('/blog');
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  };

  const handleSave = async (publishStatus: boolean) => {
    if (!post.title.trim() || !post.content.trim()) {
      alert('Title and content are required');
      return;
    }

    setSaving(true);
    try {
      const postData = {
        title: post.title.toLowerCase(),
        content: post.content,
        excerpt: post.excerpt || post.content.substring(0, 200) + '...',
        read_time: post.read_time || '5 min read',
        tags: tagInput.split(',').map(tag => tag.trim()).filter(tag => tag),
        published: publishStatus
      };

      if (mode === 'create') {
        const slug = generateSlug(post.title);
        const { error } = await supabase
          .from('blog_posts')
          .insert([{ ...postData, slug }]);

        if (error) throw error;
        
        alert(`Post ${publishStatus ? 'published' : 'saved as draft'} successfully!`);
        router.replace('/blog');
      } else if (mode === 'edit' && slug) {
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('slug', slug);

        if (error) throw error;
        
        alert(`Post ${publishStatus ? 'published' : 'saved as draft'} successfully!`);
        router.replace('/blog');
      }
    } catch (err) {
      console.error('Error saving post:', err);
      alert('Failed to save post');
    } finally {
      setSaving(false);
    }
  };

  // Show loading state while auth is being determined
  if (!mounted || authLoading) {
    return (
      <div className="space-y-8">
        <div className="h-8 bg-gray-200 rounded w-64 animate-pulse"></div>
        <div className="space-y-4">
          <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-96 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  // Don't render if not admin (will redirect)
  if (!isAdmin) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500">Redirecting...</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="h-8 bg-gray-200 rounded w-64 animate-pulse"></div>
        <div className="space-y-4">
          <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-96 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 lowercase">
          {mode === 'create' ? 'create new post' : 'edit post'}
        </h1>
        <button
          onClick={() => router.replace('/blog')}
          className="text-gray-600 hover:text-gray-800 text-sm"
        >
          ← back to blog
        </button>
      </div>

      {/* Editor Form */}
      <div className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 lowercase">
            title
          </label>
          <input
            type="text"
            value={post.title}
            onChange={(e) => setPost(prev => ({ ...prev, title: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007AFF] focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
            placeholder="your post title"
            disabled={saving}
          />
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 lowercase">
            excerpt (optional)
          </label>
          <textarea
            value={post.excerpt}
            onChange={(e) => setPost(prev => ({ ...prev, excerpt: e.target.value }))}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007AFF] focus:border-transparent transition-all resize-none text-gray-900 placeholder-gray-400"
            placeholder="brief description of your post"
            disabled={saving}
          />
        </div>

        {/* Read Time and Tags */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 lowercase">
              read time
            </label>
            <input
              type="text"
              value={post.read_time}
              onChange={(e) => setPost(prev => ({ ...prev, read_time: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007AFF] focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
              placeholder="5 min read"
              disabled={saving}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 lowercase">
              tags (comma separated)
            </label>
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007AFF] focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
              placeholder="ai, healthcare, startup"
              disabled={saving}
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 lowercase">
            content (markdown supported)
          </label>
          <textarea
            value={post.content}
            onChange={(e) => setPost(prev => ({ ...prev, content: e.target.value }))}
            rows={20}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007AFF] focus:border-transparent transition-all resize-none font-mono text-sm text-gray-900 placeholder-gray-400"
            placeholder="# your post title

write your post content here. you can use:

## headings
**bold text**
- bullet points

markdown formatting will be converted to HTML."
            disabled={saving}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
          <motion.button
            onClick={() => handleSave(false)}
            disabled={saving}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg font-medium lowercase disabled:opacity-50 transition-all"
            whileHover={{ scale: saving ? 1 : 1.02 }}
            whileTap={{ scale: saving ? 1 : 0.98 }}
          >
            {saving ? 'saving...' : 'save as draft'}
          </motion.button>
          <motion.button
            onClick={() => handleSave(true)}
            disabled={saving}
            className="px-6 py-3 bg-[#007AFF] text-white rounded-lg font-medium lowercase disabled:opacity-50 transition-all"
            whileHover={{ scale: saving ? 1 : 1.02 }}
            whileTap={{ scale: saving ? 1 : 0.98 }}
          >
            {saving ? 'publishing...' : 'publish post'}
          </motion.button>
        </div>
      </div>

      {/* Help Text */}
      <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
        <p className="font-medium mb-2 lowercase">formatting tips:</p>
        <ul className="space-y-1 text-xs">
          <li>• Use # for main headings, ## for subheadings</li>
          <li>• **bold text** for emphasis</li>
          <li>• - bullet points for lists</li>
          <li>• Leave empty lines between paragraphs</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default BlogEditor; 