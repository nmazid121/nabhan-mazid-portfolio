'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCalendarAlt } from 'react-icons/fa';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate?: number;
  currentMonth?: number;
  currentYear?: number;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, selectedDate, currentMonth, currentYear }) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, type: "spring" as const, stiffness: 300 }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <FaCalendarAlt className="text-[#007AFF] text-xl" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900 lowercase">
                    book a meeting
                  </h2>
                  {selectedDate && (
                    <p className="text-sm text-gray-600 lowercase">
                      {months[currentMonth || 0].toLowerCase()} {selectedDate}, {currentYear || new Date().getFullYear()}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <FaTimes className="text-gray-400 hover:text-gray-600" />
              </button>
            </div>
            
            {/* Cal.com Embed */}
            <div className="h-[600px] overflow-hidden">
              <iframe
                src="https://cal.com/nabhan-mazid"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 'none' }}
                loading="lazy"
                title="Book a meeting with Nabhan Mazid"
                className="w-full h-full"
              />
            </div>
            
            {/* Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 lowercase">
                  choose between 15-minute or 30-minute meetings
                </p>
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors text-sm lowercase"
                >
                  close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal; 