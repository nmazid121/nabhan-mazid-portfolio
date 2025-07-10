'use client';

import React, { useState } from 'react';

interface CalendarProps {
  onDateClick?: (date: number, month: number, year: number) => void;
}

const Calendar: React.FC<CalendarProps> = ({ onDateClick }) => {
  const [currentMonth, setCurrentMonth] = useState(6); // July (0-indexed)
  const [currentYear, setCurrentYear] = useState(2025);
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  
  // Generate calendar days for current month
  const generateCalendarDays = () => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = (firstDay.getDay() + 6) % 7; // Adjust for Monday start
    
    const days = [];
    
    // Previous month days
    const prevMonth = new Date(currentYear, currentMonth, 0);
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({ day: prevMonth.getDate() - i, isCurrentMonth: false });
    }
    
    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({ day, isCurrentMonth: true });
    }
    
    // Next month days to fill grid
    const remainingSlots = 42 - days.length; // 6 rows × 7 days
    for (let day = 1; day <= remainingSlots; day++) {
      days.push({ day, isCurrentMonth: false });
    }
    
    return days;
  };
  
  const calendarDays = generateCalendarDays();
  const monthYear = `${months[currentMonth]} ${currentYear}`;
  const today = new Date();
  const isCurrentMonthToday = currentMonth === today.getMonth() && currentYear === today.getFullYear();
  const todayDate = today.getDate();

  // Function to check if a date is bookable (weekdays in current month, not in past)
  const isBookableDate = (dayObj: { day: number; isCurrentMonth: boolean }, index: number) => {
    if (!dayObj.isCurrentMonth) return false;
    
    // Get day of week (0 = Sunday, 1 = Monday, etc.)
    const dayOfWeek = index % 7;
    const isWeekday = dayOfWeek >= 0 && dayOfWeek <= 4; // Monday to Friday
    
    // Only future dates or future months
    const isFutureDate = !isCurrentMonthToday || dayObj.day > todayDate;
    const isFutureMonth = currentYear > today.getFullYear() || 
                         (currentYear === today.getFullYear() && currentMonth > today.getMonth());
    
    return isWeekday && (isFutureDate || isFutureMonth);
  };

  // Handle booking click
  const handleBookingClick = (day: number) => {
    onDateClick?.(day, currentMonth, currentYear);
  };

  // Navigation handlers
  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
      <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm w-full">
        {/* Header with navigation */}
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={goToPreviousMonth}
            className="text-gray-400 hover:text-[#007AFF] transition-colors p-1 text-lg font-bold"
          >
            ‹
          </button>
          <span className="font-bold text-gray-900 text-base">{monthYear}</span>
          <button 
            onClick={goToNextMonth}
            className="text-gray-400 hover:text-[#007AFF] transition-colors p-1 text-lg font-bold"
          >
            ›
          </button>
        </div>
        
        {/* Days of week header */}
        <div className="grid grid-cols-7 gap-1 mb-3">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center text-gray-500 font-bold text-xs">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((dayObj, index) => {
            const isToday = dayObj.isCurrentMonth && 
                           isCurrentMonthToday && 
                           dayObj.day === todayDate;
            const isBookable = isBookableDate(dayObj, index);
            
            return (
              <div
                key={index}
                className={`
                  h-5 flex items-center justify-center text-center text-sm rounded relative font-bold
                  ${dayObj.isCurrentMonth ? 'text-gray-900' : 'text-gray-300'}
                  ${isToday ? 'text-white' : ''}
                  ${isBookable ? 'hover:bg-[#007AFF] hover:text-white cursor-pointer transition-colors duration-200' : 'hover:bg-gray-100 cursor-default'}
                  ${!isBookable && !isToday ? 'cursor-default' : 'cursor-pointer'}
                `}
                style={{
                  backgroundColor: isToday ? '#007AFF' : 'transparent'
                }}
                onClick={() => isBookable ? handleBookingClick(dayObj.day) : undefined}
                title={isBookable ? 'Click to book a meeting' : undefined}
              >
                {dayObj.day}
                {/* Small dot indicator for bookable dates */}
                {isBookable && (
                  <div 
                    className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: '#007AFF' }}
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default Calendar; 