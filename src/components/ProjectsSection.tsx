'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCode, 
  FaRobot, 
  FaGraduationCap, 
  FaUtensils,
  FaUsers,
  FaBook,
  FaDesktop,
  FaMusic,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
  FaStar,
  FaEye,
  FaCodeBranch,
  FaCalendarAlt,
  FaFilter,
  FaSearch,
  FaPython,
  FaJs,
  FaJava,
  FaHtml5,
  FaPhp,
  FaReact,
  FaNodeJs
} from 'react-icons/fa';
import { 
  SiRust, 
  SiTypescript, 
  SiMongodb, 
  SiExpress,
  SiTailwindcss,
  SiNextdotjs
} from 'react-icons/si';

const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

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

  const getTechIcon = (tech: string) => {
    const techLower = tech.toLowerCase();
    switch (techLower) {
      case 'python': return <FaPython className="text-blue-500" />;
      case 'javascript': return <FaJs className="text-yellow-500" />;
              case 'java': return <FaJava className="text-[#007AFF]" />;
      case 'html': return <FaHtml5 className="text-orange-500" />;
      case 'php': return <FaPhp className="text-purple-500" />;
      case 'rust': return <SiRust className="text-orange-600" />;
      case 'typescript': return <SiTypescript className="text-blue-600" />;
      case 'react': return <FaReact className="text-cyan-500" />;
      case 'nodejs': return <FaNodeJs className="text-green-500" />;
      case 'express': return <SiExpress className="text-gray-700" />;
      case 'mongodb': return <SiMongodb className="text-green-600" />;
      case 'nextjs': return <SiNextdotjs className="text-black" />;
      case 'tailwind': return <SiTailwindcss className="text-cyan-400" />;
      default: return <FaCode className="text-gray-500" />;
    }
  };

  const projects = [
    {
      id: 'tajweedai',
      name: 'TajweedAI',
      description: 'Personal Research Project - AI Tajweed Assistant - Advanced Arabic speech recognition for Quranic recitation',
      category: 'ai',
      languages: ['Python'],
      techs: ['Python', 'AI/ML', 'Speech Recognition', 'Arabic NLP'],
      github: 'https://github.com/nmazid121/tajweedAI',
      status: 'Public',
      lastUpdated: 'last week',
      icon: <FaRobot className="text-purple-600" />,
      featured: true,
      stars: 0,
      detailed: {
        overview: 'Developing an AI system that helps Muslims perfect their Quranic recitation by analyzing tajweed rules and providing real-time feedback.',
        features: [
          'Real-time Arabic speech recognition',
          'Tajweed rule analysis and feedback',
          'Quranic verse transcription with 90% accuracy',
          'Interactive learning interface',
          'Pronunciation correction suggestions'
        ],
        techStack: ['Python', 'Whisper AI', 'Flask', 'Arabic NLP', 'WebSocket', 'Audio Processing'],
        challenges: 'Handling complex Arabic phonetics and implementing accurate tajweed rule detection',
        impact: 'Helping the global Muslim community improve their Quranic recitation skills'
      }
    },
    {
      id: 'ruthirsty',
      name: 'RU_Thirsty',
      description: 'Full-stack web application for Rutgers students to locate water fountains across campus',
      category: 'web',
      languages: ['JavaScript'],
      techs: ['JavaScript', 'NodeJS', 'React', 'Express', 'MongoDB'],
      github: 'https://github.com/nmazid121/RU_Thirsty',
      status: 'Public',
      lastUpdated: 'Nov 3, 2024',
      icon: <FaGraduationCap className="text-blue-600" />,
      featured: true,
      stars: 1,
      detailed: {
        overview: 'Campus utility app that helps Rutgers students find water fountains with real-time availability and Google Maps integration.',
        features: [
          'Interactive Google Maps integration',
          'Real-time fountain status updates',
          'Building-specific fountain locations',
          'User-friendly mobile interface',
          'Campus navigation assistance'
        ],
        techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Google Maps API', 'Mongoose'],
        challenges: 'Implementing accurate real-time location tracking and optimizing map performance',
        impact: 'Help students track and find nearby water fountains, improving campus navigation experience'
      }
    },
    {
      id: 'aras-hot-chicken',
      name: 'Aras Hot Chicken React',
      description: 'Modern restaurant website with AI chatbot integration for customer service',
      category: 'web',
      languages: ['CSS', 'JavaScript'],
      techs: ['React', 'CSS', 'AI Chatbot', 'Transformers.js'],
      github: 'https://github.com/nmazid121/aras-hot-chicken-React',
      status: 'Public',
      lastUpdated: 'Jun 3',
      icon: <FaUtensils className="text-orange-600" />,
      featured: true,
      stars: 1,
      detailed: {
        overview: 'Complete restaurant website redesign with integrated AI chatbot for customer inquiries and improved user experience.',
        features: [
          'Mobile-first responsive design',
          'AI-powered customer service chatbot',
          'Real-time Q&A functionality',
          'Modern UI/UX with smooth animations',
          'Order management system integration'
        ],
        techStack: ['React', 'HTML/CSS', 'Transformers.js', 'NLP', 'Responsive Design'],
        challenges: 'Implementing lightweight AI model for in-browser chat functionality',
        impact: '30% increase in user engagement and improved customer satisfaction'
      }
    },
    {
      id: 'hifz-tracker',
      name: 'Hifz Tracker Quran Revisor',
      description: 'Digital tool for tracking Quran memorization progress and revision schedules',
      category: 'utility',
      languages: ['Python'],
      techs: ['Python', 'Data Management', 'Scheduling'],
      github: 'https://github.com/nmazid121/hifz_tracker_quran_revisor',
      status: 'Public',
      lastUpdated: 'last week',
      icon: <FaBook className="text-green-600" />,
      featured: false,
      stars: 0,
      detailed: {
        overview: 'Comprehensive tracking system for Quran memorization (Hifz) with intelligent revision scheduling.',
        features: [
          'Progress tracking and analytics',
          'Automated revision scheduling',
          'Performance metrics and insights',
          'Customizable study plans',
          'Progress visualization'
        ],
        techStack: ['Python', 'Data Analytics', 'Scheduling Algorithms', 'GUI Framework'],
        challenges: 'Implementing effective spaced repetition algorithms for optimal memorization',
        impact: 'Helping students maintain consistent Quran memorization practice'
      }
    },
    {
      id: 'java-project-learning',
      name: 'Java Project-Based Learning',
      description: 'Comprehensive collection of Java projects focusing on data structures and algorithms',
      category: 'education',
      languages: ['Java'],
      techs: ['Java', 'Data Structures', 'Algorithms'],
      github: 'https://github.com/nmazid121/Java-Project-Based-Learning',
      status: 'Public',
      lastUpdated: '3 weeks ago',
              icon: <FaGraduationCap className="text-[#007AFF]" />,
      featured: false,
      stars: 0,
      detailed: {
        overview: 'Educational repository demonstrating practical implementation of data structures and algorithms through real-world projects.',
        features: [
          'Comprehensive algorithm implementations',
          'Data structure demonstrations',
          'Performance analysis and optimization',
          'Well-documented code examples',
          'Progressive difficulty levels'
        ],
        techStack: ['Java', 'Data Structures', 'Algorithms', 'Object-Oriented Programming'],
        challenges: 'Balancing theoretical concepts with practical applications',
        impact: 'Strengthening fundamental programming concepts and problem-solving skills'
      }
    },
    {
      id: 'tajweed-bot',
      name: 'Tajweed Bot / Iqra AI',
      description: 'Interactive website for learning Tajweed rules + Surah Fatiha demo',
      category: 'ai',
      languages: ['HTML'],
      techs: ['HTML', 'JavaScript', 'Bot Framework'],
      github: 'https://github.com/MuazAhmad7/Tajweed-bot',
      status: 'Public',
      lastUpdated: 'Jun 4',
      icon: <FaRobot className="text-indigo-600" />,
      featured: false,
      stars: 0,
      detailed: {
        overview: 'Interactive educational bot designed to teach Islamic Tajweed rules through engaging conversations.',
        features: [
          'Interactive Tajweed lessons',
          'Rule-based learning system',
          'Progress tracking',
          'Quiz and assessment features',
          'Personalized learning paths'
        ],
        techStack: ['HTML', 'JavaScript', 'Bot Framework', 'Educational Technology'],
        challenges: 'Making complex Tajweed rules accessible through conversational interface',
        impact: 'Correct your recitation of Surah Fatiha'
      }
    },
    {
      id: 'habit-tracker',
      name: 'Habit Tracker',
      description: 'Personal productivity application for tracking daily habits and building routines',
      category: 'utility',
      languages: ['HTML'],
      techs: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      github: 'https://github.com/nmazid121/Habit-Tracker',
      status: 'Public',
      lastUpdated: 'Feb 20, 2024',
      icon: <FaDesktop className="text-purple-500" />,
      featured: false,
      stars: 0,
      detailed: {
        overview: 'Simple yet effective habit tracking application to help users build positive routines and monitor progress.',
        features: [
          'Daily habit logging',
          'Progress visualization',
          'Streak tracking',
          'Goal setting and reminders',
          'Performance analytics'
        ],
        techStack: ['HTML', 'CSS', 'JavaScript', 'Local Storage', 'Chart.js'],
        challenges: 'Creating intuitive UX for habit formation and maintaining user engagement',
        impact: 'Supporting personal development and productivity improvement'
      }
    },
    {
      id: 'uski',
      name: 'Uski',
      description: 'Forked from ge-naks/Uski - Spotify to YouTube playlist migration tool',
      category: 'utility',
      languages: ['Python'],
      techs: ['Python', 'API Integration', 'Music Streaming'],
      github: 'https://github.com/nmazid121/Uski',
      status: 'Public (Forked)',
      lastUpdated: 'Apr 5, 2023',
      icon: <FaMusic className="text-green-500" />,
      featured: false,
      stars: 0,
      detailed: {
        overview: 'Utility tool for seamlessly migrating music playlists from Spotify to YouTube Music.',
        features: [
          'Playlist migration automation',
          'Music matching algorithms',
          'Batch processing capabilities',
          'Error handling and retry logic',
          'Cross-platform compatibility'
        ],
        techStack: ['Python', 'Spotify API', 'YouTube API', 'Music Data Processing'],
        challenges: 'Handling music metadata matching and API rate limiting',
        impact: 'Simplifying music platform transitions for users'
      }
    },
    {
      id: 'quran-revisor',
      name: 'QuranRevisor',
      description: 'Python GUI to track visual Revision progress with progrss bars',
      category: 'utility',
      languages: ['Python'],
      techs: ['LaTeX', 'Document Generation', 'Python'],
      github: 'https://github.com/nmazid121/QuranReviser',
      status: 'Public',
      lastUpdated: 'May 19, 2023',
      icon: <FaBook className="text-amber-600" />,
      featured: false,
      stars: 0,
      detailed: {
        overview: 'Professional document generation system for creating high-quality Quran study materials and revision guides.',
        features: [
          'Input revision data between Juz and Surahs',
          'View visual process through Progress Bars',
          'Customizable study layouts',
        ],
        techStack: ['Python'],
        challenges: 'Handling complex Arabic typography and automated layout generation',
        impact: 'Providing professional-quality study materials for Quranic education'
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: <FaCode className="text-gray-600" /> },
    { id: 'ai', name: 'AI & Machine Learning', icon: <FaRobot className="text-purple-600" /> },
    { id: 'web', name: 'Web Development', icon: <FaDesktop className="text-blue-600" /> },
    { id: 'education', name: 'Educational', icon: <FaGraduationCap className="text-green-600" /> },
    { id: 'utility', name: 'Utilities & Tools', icon: <FaUsers className="text-orange-600" /> }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.techs.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

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
          projects
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto lowercase">
          developing my skills through projects based learning
        </p>
      </motion.div>

      {/* Search and Filter */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007AFF] focus:border-transparent text-gray-900 placeholder-gray-400"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? 'bg-[#007AFF] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 lowercase flex items-center space-x-2">
            <FaStar className="text-yellow-500" />
            <span>featured projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all flex flex-col"
                whileHover={{ scale: 1.02 }}
                style={{ alignSelf: 'start' }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  {project.icon}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span>{project.status}</span>
                      <span>•</span>
                      <span>{project.lastUpdated}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techs.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.techs.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      +{project.techs.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <FaStar className="text-yellow-500" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {getTechIcon(project.languages[0])}
                      <span>{project.languages[0]}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      className="text-[#007AFF] hover:text-[#7d0600] text-sm font-medium"
                    >
                      {expandedProject === project.id ? 'Less' : 'More'}
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#007AFF] transition-colors"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                  </div>
                </div>
                
                <AnimatePresence>
                  {expandedProject === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { duration: 0.6, ease: "easeInOut" },
                        opacity: { duration: 0.3, delay: 0.2 }
                      }}
                      className="mt-4 pt-4 border-t border-gray-200 overflow-hidden"
                    >
                      <motion.div 
                        className="space-y-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ 
                          opacity: { duration: 0.3, delay: 0.2 },
                          y: { duration: 0.3, delay: 0.2 }
                        }}
                      >
                        <p className="text-gray-700 text-sm">{project.detailed.overview}</p>
                        
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {project.detailed.features.map((feature, index) => (
                              <li key={index} className="text-gray-700 text-sm flex items-start">
                                <span className="text-[#007AFF] mr-2">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.detailed.techStack.map((tech) => (
                              <span key={tech} className="px-2 py-1 bg-[#007AFF] text-white rounded text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Impact:</h4>
                          <p className="text-gray-700 text-sm">{project.detailed.impact}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 lowercase flex items-center space-x-2">
            <FaCodeBranch className="text-gray-600" />
            <span>all projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all flex flex-col"
                whileHover={{ scale: 1.02 }}
                style={{ alignSelf: 'start' }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  {project.icon}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span>{project.status}</span>
                      <span>•</span>
                      <span>{project.lastUpdated}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techs.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.techs.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      +{project.techs.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <FaStar className="text-yellow-500" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {getTechIcon(project.languages[0])}
                      <span>{project.languages[0]}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      className="text-[#007AFF] hover:text-[#7d0600] text-sm font-medium"
                    >
                      {expandedProject === project.id ? 'Less' : 'More'}
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#007AFF] transition-colors"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                  </div>
                </div>
                
                <AnimatePresence>
                  {expandedProject === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { duration: 0.6, ease: "easeInOut" },
                        opacity: { duration: 0.3, delay: 0.2 }
                      }}
                      className="mt-4 pt-4 border-t border-gray-200 overflow-hidden"
                    >
                      <motion.div 
                        className="space-y-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ 
                          opacity: { duration: 0.3, delay: 0.2 },
                          y: { duration: 0.3, delay: 0.2 }
                        }}
                      >
                        <p className="text-gray-700 text-sm">{project.detailed.overview}</p>
                        
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {project.detailed.features.map((feature, index) => (
                              <li key={index} className="text-gray-700 text-sm flex items-start">
                                <span className="text-[#007AFF] mr-2">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.detailed.techStack.map((tech) => (
                              <span key={tech} className="px-2 py-1 bg-[#007AFF] text-white rounded text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Impact:</h4>
                          <p className="text-gray-700 text-sm">{project.detailed.impact}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div variants={itemVariants} className="text-center py-12">
          <FaSearch className="text-gray-400 text-4xl mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
          <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filter settings.</p>
        </motion.div>
      )}

      {/* Footer */}
      <motion.div variants={itemVariants} className="text-center py-8 border-t border-gray-200">
        <p className="text-gray-700 lowercase font-medium">
          locking in and learning
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsSection; 