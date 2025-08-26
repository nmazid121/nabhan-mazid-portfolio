'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaProjectDiagram, 
  FaUsers, 
  FaCode, 
  FaDatabase, 
  FaCloud, 
  FaRobot,
  FaTools,
  FaReact,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaPrint,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaAward,
  FaLink,
  FaStar
} from 'react-icons/fa';

const ResumeSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

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

  const experiences = [
    {
      company: "Crispro.ai",
      position: "Software Engineer Intern / AI & Data Engineering Intern",
      location: "Holmdel, NJ",
      period: "June 2025 - Present",
      achievements: [
        "Architected an end-to-end ETL pipeline to ingest 540,000+ clinical trials from the NCI ClinicalTrials.gov API",
        "Scaled data input by 2,500% and reduced update latency from months to <24 hours",
        "Built a database system with AstraDB vector search using Sentence-Transformer embeddings",
        "Improved semantic match accuracy for AI-powered patient-to-trial matching"
      ],
      tech: ["Python", "AstraDB", "ETL", "Vector Search", "Transformers", "CRISPR R&D"],
      description: "Working on cutting-edge AI solutions for cancer detection and treatment optimization."
    },
    {
      company: "Sub360",
      position: "Software Engineering Intern",
      location: "Remote",
      period: "January 2024 - May 2024",
      achievements: [
        "Developed comprehensive automated test suites using JEST",
        "25% improvement in code coverage and 40% increase in bug detection",
        "Designed modular React components for internal tools",
        "40% reduction in load time and 30% increase in user engagement"
      ],
      tech: ["React", "JEST", "JavaScript", "Testing", "UI/UX"],
      description: "Enhanced construction workflow optimization platform through robust testing and efficient React components."
    },
    {
      company: "Aras Hot Chicken LLC",
      position: "Software Developer",
      location: "Highland Park, NJ",
      period: "December 2023 - Present",
      achievements: [
        "Boosted user traction by 30% in 2 months",
        "Redesigned business website frontend using React, HTML, and CSS",
        "Deployed AI chatbot using Xenova's Transformers.js",
        "Enabled real-time Q&A for restaurant-related customer inquiries"
      ],
      tech: ["React", "HTML/CSS", "Transformers.js", "NLP", "UI/UX"],
      description: "Full-stack development and AI integration for restaurant business optimization."
    },
    {
      company: "ArrayIndex Inc.",
      position: "Software Development Intern",
      location: "Remote",
      period: "December 2022 - February 2023",
      achievements: [
        "Designed company website frontend using HTML5 template",
        "Increased user traction by 30%",
        "Configured MongoDB for persistent backend data storage",
        "Deployed site on Heroku for seamless cloud accessibility"
      ],
      tech: ["HTML5", "MongoDB", "Heroku", "Cloud Deployment"],
      description: "Early experience in full-stack web development and cloud deployment."
    }
  ];

  const projects = [
    {
      title: "TajweedAI - Quranic Speech Recognition System",
      period: "May 2025",
      role: "Project Lead - 'Iqra AI'",
      achievements: [
        "Developed specialized Arabic speech recognition using fine-tuned Whisper models",
        "Achieved ~90% transcription accuracy for Quranic verses",
        "Implemented real-time audio processing with WebSocket streaming",
        "Engineered dual-model architecture with dynamic model selection",
        "Built scalable Flask backend with Arabic text normalization"
      ],
      tech: ["Whisper", "Python", "Flask", "WebSocket", "Arabic NLP", "Audio Processing"],
      description: "Revolutionary AI system for accurate Quranic recitation analysis and tajweed assessment."
    },
    {
      title: "Rutgers Water Fountain Finder",
      period: "November 2023",
      role: "Full-Stack Developer",
      link: "https://github.com/nmazid121/RU_Thirsty",
      achievements: [
        "Developed 'RUThirsty' full-stack web application",
        "Enhanced campus navigation with real-time water fountain locations",
        "Reached 100 monthly users",
        "35% increase in user engagement through React frontend",
        "50% reduction in data-retrieval time with optimized backend"
      ],
      tech: ["React", "ExpressJS", "MongoDB", "CSS", "Node.js"],
      description: "Campus utility app solving real student problems with elegant design and efficient data management."
    }
  ];

  const skills = {
    "Programming Languages": {
      icon: <FaCode className="text-blue-600" />,
      items: ["Java", "JavaScript", "Python", "HTML/CSS", "C", "SQL"]
    },
    "Frameworks & Libraries": {
      icon: <FaReact className="text-cyan-600" />,
      items: ["React", "Node.js", "Express", "MongoDB", "JEST", "Flask", "Whisper", "HuggingFace Transformers"]
    },
    "Developer Tools": {
      icon: <FaTools className="text-gray-700" />,
      items: ["Git", "Docker", "Firebase", "AWS", "Azure", "VS Code"]
    },
    "AI/ML Technologies": {
      icon: <FaRobot className="text-purple-600" />,
      items: ["Vector Search", "NLP", "Speech Recognition", "Transformers", "Embeddings"]
    },
    "Databases": {
      icon: <FaDatabase className="text-green-600" />,
      items: ["MongoDB", "AstraDB", "Vector Databases", "SQL"]
    },
    "Cloud & DevOps": {
      icon: <FaCloud className="text-blue-500" />,
      items: ["AWS", "Azure", "Heroku", "Docker", "CI/CD"]
    }
  };

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
          resume
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto lowercase">
          software engineer & passionate about building ai solutions and tech
        </p>
        
        {/* PDF Download */}
        <motion.div
          className="flex justify-center space-x-4"
          variants={itemVariants}
        >
                     <motion.a
             href="/resume.pdf"
             target="_blank"
             rel="noopener noreferrer"
             className="px-6 py-3 bg-[#007AFF] text-white rounded-lg font-medium lowercase hover:bg-[#0056b3] transition-colors flex items-center space-x-2"
             whileHover={{ scale: 1.02 }}
             whileTap={{ scale: 0.98 }}
           >
             <FaDownload className="text-lg" />
             <span>download pdf</span>
           </motion.a>
           <motion.button
             onClick={() => window.print()}
             className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-medium lowercase hover:bg-gray-200 transition-colors flex items-center space-x-2"
             whileHover={{ scale: 1.02 }}
             whileTap={{ scale: 0.98 }}
           >
             <FaPrint className="text-lg" />
             <span>print</span>
           </motion.button>
        </motion.div>
      </motion.div>

             {/* Contact Info */}
       <motion.div variants={itemVariants} className="bg-gray-50 rounded-lg p-6">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
           <div className="flex items-center justify-center space-x-2">
             <FaEnvelope className="text-[#007AFF] text-lg" />
             <span className="text-sm text-gray-800 font-medium">nabhanmazid@gmail.com</span>
           </div>
           <div className="flex items-center justify-center space-x-2">
             <FaPhone className="text-[#007AFF] text-lg" />
             <span className="text-sm text-gray-800 font-medium">+1 (732)-318-9400</span>
           </div>
           <div className="flex items-center justify-center space-x-2">
             <FaLinkedin className="text-[#007AFF] text-lg" />
             <a href="https://linkedin.com/in/nabhan-mazid" className="text-sm text-gray-800 hover:text-[#007AFF] transition-colors font-medium">LinkedIn</a>
           </div>
           <div className="flex items-center justify-center space-x-2">
             <FaGithub className="text-[#007AFF] text-lg" />
             <a href="https://github.com/nmazid121" className="text-sm text-gray-800 hover:text-[#007AFF] transition-colors font-medium">GitHub</a>
           </div>
         </div>
       </motion.div>

             {/* Education */}
       <motion.div variants={itemVariants}>
         <h2 className="text-3xl font-bold text-gray-900 mb-6 lowercase flex items-center space-x-3">
           <FaGraduationCap className="text-[#007AFF]" />
           <span>education</span>
         </h2>
         <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
             <div>
               <h3 className="text-xl font-bold text-gray-900">Rutgers University</h3>
               <p className="text-lg text-[#007AFF] font-medium">Bachelor of Science, Computer Science</p>
               <div className="flex items-center space-x-2 mt-1">
                 <FaMapMarkerAlt className="text-gray-500 text-sm" />
                 <p className="text-gray-700 font-medium">New Brunswick, NJ</p>
               </div>
             </div>
             <div className="text-right mt-2 lg:mt-0">
               <div className="flex items-center space-x-2 justify-end">
                 <FaCalendarAlt className="text-gray-500 text-sm" />
                 <p className="text-gray-700 font-medium"></p>
               </div>
             </div>
           </div>
           <div>
             <h4 className="font-medium text-gray-900 mb-2">Relevant Coursework:</h4>
             <div className="flex flex-wrap gap-2">
               {["Data Structures", "Analytical Physics", "Intro to Computer Science", "Discrete Structures", "Computer Architecture", "Linear Algebra"].map((course) => (
                 <span key={course} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                   {course}
                 </span>
               ))}
             </div>
           </div>
         </div>
       </motion.div>

             {/* Experience */}
       <motion.div variants={itemVariants}>
         <h2 className="text-3xl font-bold text-gray-900 mb-6 lowercase flex items-center space-x-3">
           <FaBriefcase className="text-[#007AFF]" />
           <span>experience</span>
         </h2>
         <div className="space-y-6">
           {experiences.map((exp, index) => (
             <motion.div
               key={index}
               className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
               onClick={() => setActiveSection(activeSection === `exp-${index}` ? null : `exp-${index}`)}
               whileHover={{ scale: 1.01 }}
             >
               <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                 <div>
                   <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                   <p className="text-lg text-[#007AFF] font-medium">{exp.position}</p>
                   <div className="flex items-center space-x-2 mt-1">
                     <FaMapMarkerAlt className="text-gray-500 text-sm" />
                     <p className="text-gray-700 font-medium">{exp.location}</p>
                   </div>
                 </div>
                 <div className="text-right mt-2 lg:mt-0">
                   <div className="flex items-center space-x-2 justify-end">
                     <FaCalendarAlt className="text-gray-500 text-sm" />
                     <p className="text-gray-700 font-medium">{exp.period}</p>
                   </div>
                 </div>
               </div>
               
               <p className="text-gray-800 mb-4 font-medium">{exp.description}</p>
               
               <div className="space-y-3">
                 <div>
                   <h4 className="font-medium text-gray-900 mb-2 flex items-center space-x-2">
                     <FaAward className="text-[#007AFF] text-sm" />
                     <span>Key Achievements:</span>
                   </h4>
                   <ul className="space-y-1">
                     {exp.achievements.map((achievement, i) => (
                       <li key={i} className="text-gray-800 text-sm flex items-start">
                         <span className="text-[#007AFF] mr-2">•</span>
                         {achievement}
                       </li>
                     ))}
                   </ul>
                 </div>
                 
                 <div>
                   <h4 className="font-medium text-gray-900 mb-2 flex items-center space-x-2">
                     <FaTools className="text-[#007AFF] text-sm" />
                     <span>Technologies:</span>
                   </h4>
                   <div className="flex flex-wrap gap-2">
                     {exp.tech.map((tech) => (
                       <span key={tech} className="px-2 py-1 bg-[#007AFF] text-white rounded text-xs font-medium">
                         {tech}
                       </span>
                     ))}
                   </div>
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
       </motion.div>

             {/* Projects */}
       <motion.div variants={itemVariants}>
         <h2 className="text-3xl font-bold text-gray-900 mb-6 lowercase flex items-center space-x-3">
           <FaProjectDiagram className="text-[#007AFF]" />
           <span>projects</span>
         </h2>
         <div className="space-y-6">
           {projects.map((project, index) => (
             <motion.div
               key={index}
               className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
               whileHover={{ scale: 1.01 }}
             >
               <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                 <div>
                   <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                   <p className="text-lg text-[#007AFF] font-medium">{project.role}</p>
                   {project.link && (
                     <div className="flex items-center space-x-2 mt-1">
                       <FaLink className="text-blue-600 text-sm" />
                       <a href={project.link} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                         {project.link}
                       </a>
                     </div>
                   )}
                 </div>
                 <div className="text-right mt-2 lg:mt-0">
                   <div className="flex items-center space-x-2 justify-end">
                     <FaCalendarAlt className="text-gray-500 text-sm" />
                     <p className="text-gray-700 font-medium">{project.period}</p>
                   </div>
                 </div>
               </div>
               
               <p className="text-gray-800 mb-4 font-medium">{project.description}</p>
               
               <div className="space-y-3">
                 <div>
                   <h4 className="font-medium text-gray-900 mb-2 flex items-center space-x-2">
                     <FaStar className="text-[#007AFF] text-sm" />
                     <span>Key Features & Achievements:</span>
                   </h4>
                   <ul className="space-y-1">
                     {project.achievements.map((achievement, i) => (
                       <li key={i} className="text-gray-800 text-sm flex items-start">
                         <span className="text-[#007AFF] mr-2">•</span>
                         {achievement}
                       </li>
                     ))}
                   </ul>
                 </div>
                 
                 <div>
                   <h4 className="font-medium text-gray-900 mb-2 flex items-center space-x-2">
                     <FaTools className="text-[#007AFF] text-sm" />
                     <span>Technologies:</span>
                   </h4>
                   <div className="flex flex-wrap gap-2">
                     {project.tech.map((tech) => (
                       <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                         {tech}
                       </span>
                     ))}
                   </div>
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
       </motion.div>

             {/* Leadership */}
       <motion.div variants={itemVariants}>
         <h2 className="text-3xl font-bold text-gray-900 mb-6 lowercase flex items-center space-x-3">
           <FaUsers className="text-[#007AFF]" />
           <span>leadership</span>
         </h2>
         <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
             <div>
               <h3 className="text-xl font-bold text-gray-900">Rutgers Muslim Student Association</h3>
               <p className="text-lg text-[#007AFF] font-medium">Vice President</p>
             </div>
             <div className="text-right mt-2 lg:mt-0">
               <div className="flex items-center space-x-2 justify-end">
                 <FaCalendarAlt className="text-gray-500 text-sm" />
                 <p className="text-gray-700 font-medium">Spring 2025 - Present</p>
               </div>
             </div>
           </div>
           
           <div className="space-y-3">
             <ul className="space-y-2">
               <li className="text-gray-800 flex items-start">
                 <span className="text-[#007AFF] mr-2">•</span>
                 Organize weekly events averaging 50+ attendees, increasing overall participation by over 50%
               </li>
               <li className="text-gray-800 flex items-start">
                 <span className="text-[#007AFF] mr-2">•</span>
                 Lead the Brothers Social team of 15+ members, overseeing planning and execution of social events and mentorship programs
               </li>
             </ul>
             
             <div className="mt-4">
               <p className="text-gray-700 italic font-medium">
                 Building community and fostering leadership development while balancing academic excellence and professional growth.
               </p>
             </div>
           </div>
         </div>
       </motion.div>

             {/* Skills */}
       <motion.div variants={itemVariants}>
         <h2 className="text-3xl font-bold text-gray-900 mb-6 lowercase flex items-center space-x-3">
           <FaCode className="text-[#007AFF]" />
           <span>skills</span>
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {Object.entries(skills).map(([category, skillData]) => (
             <motion.div
               key={category}
               className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
               whileHover={{ scale: 1.02 }}
             >
               <h3 className="text-lg font-bold text-gray-900 mb-4 lowercase flex items-center space-x-3">
                 {skillData.icon}
                 <span>{category}</span>
               </h3>
               <div className="space-y-2">
                 {skillData.items.map((skill) => (
                   <div key={skill} className="flex items-center space-x-2">
                     <div className="w-2 h-2 bg-[#007AFF] rounded-full"></div>
                     <span className="text-gray-800 text-sm font-medium">{skill}</span>
                   </div>
                 ))}
               </div>
             </motion.div>
           ))}
         </div>
       </motion.div>

             {/* Footer */}
       <motion.div variants={itemVariants} className="text-center py-8 border-t border-gray-200">
         <p className="text-gray-700 lowercase font-medium">
           hire me &lt;3
         </p>
       </motion.div>
    </motion.div>
  );
};

export default ResumeSection; 
