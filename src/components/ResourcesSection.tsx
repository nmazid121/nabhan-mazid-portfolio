'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPlay,
  FaExternalLinkAlt,
  FaCode,
  FaRobot,
  FaVideo,
  FaBook,
  FaTools,
  FaStar,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaDatabase,
  FaCloud,
  FaGithub,
  FaYoutube,
  FaGraduationCap,
  FaLightbulb,
  FaChevronRight
} from 'react-icons/fa';
import { 
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiSupabase,
  SiVercel,
  SiOpenai,
  SiAnthropicai
} from 'react-icons/si';

const ResourcesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const techStacks = {
    "Frontend Development": {
      icon: <FaReact className="text-cyan-500" />,
      tools: [
        {
          name: "React",
          icon: <FaReact className="text-cyan-500" />,
          description: "Modern UI library for building interactive interfaces",
          link: "https://react.dev/",
          category: "Framework"
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-black" />,
          description: "Full-stack React framework with SSR and routing",
          link: "https://nextjs.org/",
          category: "Framework"
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
          description: "Typed JavaScript for better developer experience",
          link: "https://www.typescriptlang.org/",
          category: "Language"
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" />,
          description: "Utility-first CSS framework for rapid styling",
          link: "https://tailwindcss.com/",
          category: "Styling"
        }
      ]
    },
    "Backend & Database": {
      icon: <FaDatabase className="text-green-600" />,
      tools: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-500" />,
          description: "JavaScript runtime for server-side development",
          link: "https://nodejs.org/",
          category: "Runtime"
        },
        {
          name: "Python",
          icon: <FaPython className="text-blue-500" />,
          description: "Versatile language for AI/ML and web development",
          link: "https://python.org/",
          category: "Language"
        },
        {
          name: "Supabase",
          icon: <SiSupabase className="text-green-600" />,
          description: "Open-source Firebase alternative with PostgreSQL",
          link: "https://supabase.com/",
          category: "Database"
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-600" />,
          description: "NoSQL document database for flexible data storage",
          link: "https://mongodb.com/",
          category: "Database"
        }
      ]
    },
    "Deployment & Cloud": {
      icon: <FaCloud className="text-blue-500" />,
      tools: [
        {
          name: "Vercel",
          icon: <SiVercel className="text-black" />,
          description: "Frontend deployment platform optimized for Next.js",
          link: "https://vercel.com/",
          category: "Deployment"
        },
        {
          name: "GitHub",
          icon: <FaGithub className="text-gray-900" />,
          description: "Version control and collaborative development platform",
          link: "https://github.com/",
          category: "Version Control"
        }
      ]
    }
  };

  const aiTools = [
    {
      name: "Cursor",
      description: "AI-powered code editor with intelligent autocompletion",
      image: "/images/resources/cursor.png",
      link: "https://cursor.sh/",
      category: "Development",
      features: ["AI code completion", "Chat with codebase", "Natural language editing"],
      color: "bg-purple-100 border-purple-200"
    },
    {
      name: "Claude",
      description: "Anthropic's AI assistant for coding and writing",
      image: "/images/resources/claude.png",
      link: "https://claude.ai/",
      category: "AI Assistant",
      features: ["Code analysis", "Technical writing", "Problem solving"],
      color: "bg-orange-100 border-orange-200"
    },
    {
      name: "ChatGPT",
      description: "OpenAI's conversational AI for development and learning",
      image: "/images/resources/chatgpt.png",
      link: "https://chat.openai.com/",
      category: "AI Assistant",
      features: ["Code generation", "Debugging help", "Learning assistance"],
      color: "bg-green-100 border-green-200"
    },
    {
      name: "Perplexity",
      description: "AI-powered search engine for research and development",
      image: "/images/resources/perplexity.png",
      link: "https://perplexity.ai/",
      category: "Research",
      features: ["Real-time search", "Source citations", "Technical research"],
      color: "bg-blue-100 border-blue-200"
    },
    {
      name: "Gemini",
      description: "Google's multimodal AI for coding and analysis",
      image: "/images/resources/gemini.png",
      link: "https://gemini.google.com/",
      category: "AI Assistant",
      features: ["Code review", "Multimodal input", "Integration with Google tools"],
      color: "bg-indigo-100 border-indigo-200"
    },
    {
      name: "Hugging Face",
      description: "Open-source platform for machine learning models and datasets",
      image: "/images/resources/Hugging-face.png",
      link: "https://huggingface.co/",
      category: "ML Platform",
      features: ["Pre-trained models", "Dataset hosting", "Model fine-tuning", "Transformers library"],
      color: "bg-yellow-100 border-yellow-200"
    },
    {
      name: "NVIDIA Nemo",
      description: "Toolkit for building conversational AI applications",
      image: "/images/resources/nemo.png",
      link: "https://developer.nvidia.com/nvidia-nemo",
      category: "AI Framework",
      features: ["Speech recognition", "Natural language processing", "Text-to-speech", "GPU optimization"],
      color: "bg-emerald-100 border-emerald-200"
    },
    {
      name: "Tarteel AI",
      description: "AI-powered Quranic recitation and memorization assistant",
      image: "/images/resources/tarteel.png",
      link: "https://www.tarteel.ai/",
      category: "Islamic AI",
      features: ["Quranic speech recognition", "Memorization tracking", "Tajweed feedback", "Prayer assistance"],
      color: "bg-teal-100 border-teal-200"
    }
  ];

  // Function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videos = [
    {
      title: "AI Tools That Actually Make You More Productive",
      creator: "Jeff Su",
      url: "https://www.youtube.com/watch?v=Yq0QkCxoTHM",
      description: "Essential AI tools for productivity and workflow optimization",
      duration: "12:34",
      views: "2.1M",
      category: "Productivity"
    }
    // User can add more videos here
  ];

  const learningResources = [
    {
      title: "React Documentation",
      description: "Official React docs with comprehensive guides and API reference",
      link: "https://react.dev/",
      icon: <FaReact className="text-cyan-500" />,
      type: "Documentation"
    },
    {
      title: "TypeScript Handbook",
      description: "Complete guide to TypeScript features and best practices",
      link: "https://www.typescriptlang.org/docs/",
      icon: <SiTypescript className="text-blue-600" />,
      type: "Documentation"
    },
    {
      title: "Next.js Learn",
      description: "Interactive tutorial for building full-stack applications",
      link: "https://nextjs.org/learn",
      icon: <SiNextdotjs className="text-black" />,
      type: "Tutorial"
    },
    {
      title: "Supabase Docs",
      description: "Complete guide to building with Supabase backend",
      link: "https://supabase.com/docs",
      icon: <SiSupabase className="text-green-600" />,
      type: "Documentation"
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 lowercase">
          resources
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto lowercase">
          curated tools, tutorials, and technologies for modern development
        </p>
      </motion.div>

      {/* AI Tools Section */}
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 lowercase flex items-center space-x-3">
          <FaRobot className="text-purple-600" />
          <span>ai tools</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiTools.map((tool, index) => (
            <motion.div
              key={index}
              className={`${tool.color} rounded-lg p-6 hover:shadow-md transition-all cursor-pointer`}
              whileHover={{ scale: 1.02 }}
              onClick={() => window.open(tool.link, '_blank')}
            >
                             <div className="flex items-center space-x-4 mb-4">
                 <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                   <img 
                     src={tool.image} 
                     alt={`${tool.name} logo`}
                     className={`object-contain ${
                       tool.name === 'NVIDIA Nemo' || tool.name === 'Hugging Face' 
                         ? 'w-11 h-11' 
                         : 'w-8 h-8'
                     }`}
                     onError={(e) => {
                       const target = e.target as HTMLImageElement;
                       console.log(`Failed to load image: ${tool.image} for ${tool.name}`);
                       target.style.display = 'none';
                       target.nextElementSibling!.classList.remove('hidden');
                     }}
                   />
                   <FaRobot className="text-2xl text-gray-600 hidden" />
                 </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{tool.name}</h3>
                  <span className="text-sm text-gray-600">{tool.category}</span>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">{tool.description}</p>
              <div className="space-y-2">
                {tool.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <FaChevronRight className="text-[#007AFF] text-xs" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center text-[#007AFF] text-sm font-medium">
                <span>Try it out</span>
                <FaExternalLinkAlt className="ml-2 text-xs" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tech Stacks Section */}
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 lowercase flex items-center space-x-3">
          <FaCode className="text-blue-600" />
          <span>tech stacks</span>
        </h2>
        <div className="space-y-8">
          {Object.entries(techStacks).map(([category, data]) => (
            <div key={category}>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                {data.icon}
                <span className="lowercase">{category}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => window.open(tool.link, '_blank')}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      {tool.icon}
                      <div>
                        <h4 className="font-bold text-gray-900">{tool.name}</h4>
                        <span className="text-xs text-gray-500">{tool.category}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">{tool.description}</p>
                    <div className="flex items-center text-[#007AFF] text-sm font-medium">
                      <span>Learn more</span>
                      <FaExternalLinkAlt className="ml-2 text-xs" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Videos Section */}
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 lowercase flex items-center space-x-3">
                        <FaVideo className="text-[#007AFF]" />
          <span>helpful videos</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => window.open(video.url, '_blank')}
            >
                             <div className="relative">
                 {(() => {
                   const videoId = getYouTubeVideoId(video.url);
                   if (videoId) {
                     return (
                       <img 
                         src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                         alt={`${video.title} thumbnail`}
                         className="w-full h-48 object-cover"
                         onError={(e) => {
                           const target = e.target as HTMLImageElement;
                           // Try medium quality thumbnail if high quality fails
                           if (target.src.includes('maxresdefault')) {
                             target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                           }
                         }}
                       />
                     );
                   } else {
                     return (
                       <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                         <FaYoutube className="text-4xl text-[#007AFF]" />
                       </div>
                     );
                   }
                 })()}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                  <FaPlay className="text-white text-3xl" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-600 text-sm mb-2">by {video.creator}</p>
                <p className="text-gray-700 text-sm mb-3">{video.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{video.views} views</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">{video.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Learning Resources */}
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 lowercase flex items-center space-x-3">
          <FaBook className="text-green-600" />
          <span>learning resources</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningResources.map((resource, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => window.open(resource.link, '_blank')}
            >
              <div className="flex items-center space-x-4 mb-4">
                {resource.icon}
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{resource.title}</h3>
                  <span className="text-sm text-gray-600">{resource.type}</span>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">{resource.description}</p>
              <div className="flex items-center text-[#007AFF] text-sm font-medium">
                <span>Read docs</span>
                <FaExternalLinkAlt className="ml-2 text-xs" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div variants={itemVariants} className="text-center py-8 border-t border-gray-200">
        <p className="text-gray-700 lowercase font-medium">
          stay curious • keep learning • build amazing things
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ResourcesSection; 