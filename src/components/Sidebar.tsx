'use client';

import React, { useState } from 'react';
import Calendar from './Calendar';
import LoginModal from './LoginModal';
import BookingModal from './BookingModal';
import { useAuth } from '@/contexts/AuthContext';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<number | undefined>(undefined);
  const [selectedMonth, setSelectedMonth] = useState<number | undefined>(undefined);
  const [selectedYear, setSelectedYear] = useState<number | undefined>(undefined);
  const { user, signOut, isAdmin, mounted } = useAuth();

  const navLinks = [
    { name: 'blog', href: '/blog' },
    { name: 'resume', href: '/resume' },
    { name: 'projects', href: '/projects' },
  ];

  const socialLinks = [
    { name: 'linkedin', href: 'https://www.linkedin.com/in/nabhan-mazid/' },
    { name : 'email', href: 'mailto:nabhanmazid@gmail.com'},
    { name: 'github', href: 'https://github.com/nmazid121' },
  ];

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false);
  };

  const handleDateClick = (date: number, month: number, year: number) => {
    setSelectedDate(date);
    setSelectedMonth(month);
    setSelectedYear(year);
    setShowBookingModal(true);
  };

  const closeBookingModal = () => {
    setShowBookingModal(false);
    setSelectedDate(undefined);
    setSelectedMonth(undefined);
    setSelectedYear(undefined);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-100 rounded-md"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <div className={`h-0.5 bg-gray-600 transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`h-0.5 bg-gray-600 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`h-0.5 bg-gray-600 transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </div>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-full w-64 bg-gray-100 p-6 flex flex-col z-40 transition-transform duration-300 ease-in-out
        lg:translate-x-0 
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Name/Homepage button at the top */}
        <div className="mb-8 mt-12 lg:mt-0 pb-6 border-b border-gray-300">
          <a 
            href="/"
            className="group block relative"
            onClick={() => setIsOpen(false)}
          >
            {/* Base gray text */}
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
              nabhan<br />
              mazid
            </h1>
            
            {/* Red overlay positioned on top with higher z-index */}
            <div className="absolute top-0 left-0 w-full h-0 group-hover:h-full transition-all ease-out overflow-hidden z-20" style={{ transitionDuration: '1.5s' }}>
              <h1 className="text-2xl lg:text-3xl font-bold" style={{ color: '#007AFF' }}>
                nabhan<br />
                mazid
              </h1>
            </div>
          </a>
        </div>

        {/* Navigation links */}
        <nav className="mb-8">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  className="group block py-1 px-3 text-gray-700 text-sm transition-colors duration-200 relative"
                  onClick={() => setIsOpen(false)}
                >
                  {/* Red line on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-[#007AFF] transition-all duration-200 rounded-r"></div>
                  
                  {/* Link text */}
                  <span className="relative z-10 group-hover:text-[#007AFF] transition-colors duration-200">
                    {link.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Calendar section */}
        <div className="mb-6">
          <h2 className="font-medium text-sm mb-4" style={{ color: '#007AFF' }}>calendar</h2>
          <Calendar onDateClick={handleDateClick} />
        </div>

        {/* Social links */}
        <div className="flex-1 flex flex-col justify-end pb-4">
          <div className="space-y-4">
            <div>
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#007AFF] transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Admin section - only render after client mount */}
            {mounted && (
              <div className="pt-3 border-t border-gray-300">
                {user ? (
                  <div className="space-y-2">
                    {isAdmin && (
                      <div className="text-xs text-[#007AFF] font-medium lowercase">
                        ✨ admin mode
                      </div>
                    )}
                    <div className="text-xs text-gray-500 lowercase truncate">
                      {user.email}
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="text-gray-600 hover:text-[#007AFF] transition-colors duration-200 text-sm lowercase"
                    >
                      sign out
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setShowLoginModal(true);
                      setIsOpen(false);
                    }}
                    className="text-gray-600 hover:text-[#007AFF] transition-colors duration-200 text-sm lowercase"
                  >
                    admin login
                  </button>
                )}
              </div>
            )}
          </div>
          {/* Attribution */}
          <div className="mt-6 text-xs text-gray-500 lowercase">
            website heavily inspired by{' '}
            <a
              target="_blank" 
              rel="noopener noreferrer" 
            >
              pranav patnaik
            </a>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />

      {/* Booking Modal */}
      <BookingModal 
        isOpen={showBookingModal} 
        onClose={closeBookingModal}
        selectedDate={selectedDate}
        currentMonth={selectedMonth}
        currentYear={selectedYear}
      />
    </>
  );
};

export default Sidebar; 