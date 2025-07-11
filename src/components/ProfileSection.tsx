'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';
import nabhanPfp from '@/Images/Nabhan-pfp.jpeg';

const ProfileSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const fullText = "hey, i'm nabhan ✌";
  const letters = Array.from(fullText);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Typewriter effect for subtitle
  useEffect(() => {
    const text = "software engineer @ cripsro.ai, utilising ai to help prevent cancer";
    if (isInView && currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isInView]);

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

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.3,
      rotate: -10
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        damping: 12,
        stiffness: 200
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        stiffness: 100
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 2
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:space-x-12 space-y-8 lg:space-y-0 max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Text content */}
      <div className="flex-1 order-2 lg:order-1">
        {/* Animated heading with individual letter animations */}
        <div className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6 lowercase">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block cursor-pointer"
              whileHover={{ 
                scale: 1.2,
                color: '#007AFF',
                transition: { duration: 0.2, type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: 1, color: '#374151' }}
              transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>
        
        {/* Typewriter subtitle */}
        <div className="text-base lg:text-lg text-gray-700 mb-4 leading-relaxed lowercase h-12">
          {displayedText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block"
          >
            |
          </motion.span>
        </div>
        
        {/* Main paragraph with interactive red words */}
        <motion.p 
          className="text-base lg:text-lg text-gray-700 mb-4 leading-relaxed lowercase"
          variants={paragraphVariants}
        >
          i'm a cs student @ rutgers, and i'm graduating 2026, {' '}
          <motion.span 
            className="font-medium cursor-pointer relative transition-all duration-150"
            style={{ color: '#007AFF' }}
            whileHover={{ 
              scale: 1.1,
              fontWeight: 900
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.span
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              className="absolute inset-x-0 bottom-0 h-0.5 bg-current origin-left"
              transition={{ duration: 0.15 }}
            />
            doing ML research on quranic Pronunciation
          </motion.span> and building{' '}
          <motion.span 
            className="font-medium cursor-pointer relative transition-all duration-150"
            style={{ color: '#007AFF' }}
            whileHover={{ 
              scale: 1.1,
              fontWeight: 900
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.span
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              className="absolute inset-x-0 bottom-0 h-0.5 bg-current origin-left"
              transition={{ duration: 0.15 }}
            />
            projects on the side
          </motion.span>{' '}
          <motion.span 
            className="font-medium cursor-pointer relative transition-all duration-150"
            style={{ color: '#007AFF' }}
            whileHover={{ 
              scale: 1.1,
              fontWeight: 900
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.span
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              className="absolute inset-x-0 bottom-0 h-0.5 bg-current origin-left"
              transition={{ duration: 0.15 }}
            />
          </motion.span>
        </motion.p>
        
        {/* Final paragraph */}
        <motion.p 
          className="text-base lg:text-lg text-gray-700 lowercase"
          variants={paragraphVariants}
          transition={{ delay: 2.5 }}
        >
          hit me up if you have project ideas or want to collab
        </motion.p>
      </div>
      
      {/* Profile image with enhanced interactions */}
      <motion.div 
        className="flex-shrink-0 order-1 lg:order-2 self-center lg:self-center"
        variants={imageVariants}
      >
        <motion.div 
          className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-gray-200 shadow-lg cursor-pointer"
          whileHover={{ 
            scale: 1.15,
            rotate: [0, -5, 5, 0]
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20,
            rotate: { duration: 0.6 }
          }}
        >
          {/* Animated border effect */}
          <motion.div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(45deg, #007AFF, transparent, #007AFF)',
              padding: '3px'
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full rounded-full bg-gray-100" />
          </motion.div>
          
          <Image
            src={nabhanPfp}
            alt="nabhan mazid"
            className="w-full h-full object-cover relative z-10 rounded-full"
            priority
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProfileSection; 