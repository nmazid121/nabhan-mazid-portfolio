'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Comments from './Comments';

interface BlogPostData {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  author: string;
}

interface BlogPostProps {
  post: BlogPostData;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatContent = (content: string) => {
    // Simple markdown-like formatting
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('# ')) {
          return (
            <h1 key={index} className="text-3xl font-bold text-gray-900 mb-6 lowercase">
              {line.substring(2)}
            </h1>
          );
        }
        if (line.startsWith('## ')) {
          return (
            <h2 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-8 lowercase">
              {line.substring(3)}
            </h2>
          );
        }
        if (line.startsWith('- ')) {
          return (
            <li key={index} className="text-gray-700 mb-2 ml-4">
              {line.substring(2)}
            </li>
          );
        }
        if (line.includes('**') && line.includes('**')) {
          const parts = line.split('**');
          return (
            <p key={index} className="text-gray-700 mb-4 leading-relaxed">
              {parts.map((part, i) => 
                i % 2 === 1 ? (
                  <strong key={i} className="font-semibold text-gray-900">
                    {part}
                  </strong>
                ) : (
                  part
                )
              )}
            </p>
          );
        }
        if (line.trim() === '') {
          return <br key={index} />;
        }
        return (
          <p key={index} className="text-gray-700 mb-4 leading-relaxed">
            {line}
          </p>
        );
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
        duration: 0.6
      }
    }
  };

  return (
    <motion.article
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Back button */}
      <motion.div variants={itemVariants}>
        <Link 
          href="/blog"
          className="inline-flex items-center text-gray-600 hover:text-[#007AFF] transition-colors duration-200"
        >
          <span className="mr-2">←</span>
          back to blog
        </Link>
      </motion.div>

      {/* Header */}
      <motion.header variants={itemVariants} className="space-y-4">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <time>{formatDate(post.date)}</time>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span>by {post.author}</span>
        </div>

        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 lowercase">
          {post.title}
        </h1>

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
      </motion.header>

      {/* Content */}
      <motion.div 
        variants={itemVariants}
        className="prose prose-lg max-w-none"
      >
        <div className="space-y-4">
          {formatContent(post.content)}
        </div>
      </motion.div>

      {/* Divider */}
      <motion.div variants={itemVariants}>
        <hr className="border-gray-200" />
      </motion.div>

      {/* Comments Section */}
      <motion.div variants={itemVariants}>
        <Comments postSlug={post.slug} />
      </motion.div>
    </motion.article>
  );
};

export default BlogPost; 