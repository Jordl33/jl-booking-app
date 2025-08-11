'use client';

import { useState } from 'react';

export default function BookingPage({ params }) {
  const { quoteId } = params;
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen transition-all duration-500 relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-950' 
        : 'bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100'
    }`}>
      
      {/* Animated background overlay */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${
        isDark ? 'opacity-30' : 'opacity-20'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 animate-pulse"></div>
      </div>

      {/* Header */}
      <div className={`backdrop-blur-xl border-b sticky top-0 z-20 transition-all duration-500 shadow-lg relative overflow-hidden ${
        isDark 
          ? 'bg-white/5 border-purple-400/20 shadow-purple-900/30' 
          : 'bg-white/25 border-purple-300/50 shadow-purple-500/30'
      }`} style={{
        backdropFilter: 'blur(35px) saturate(150%) hue-rotate(10deg)',
        WebkitBackdropFilter: 'blur(35px) saturate(150%) hue-rotate(10deg)'
      }}>
        {/* Glass reflection overlay for header */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-transparent to-pink-400/30"></div>
        
        <div className="max-w-md mx-auto px-4 py-4 flex justify-between items-center relative z-10">
          <div>
            <h1 className={`text-xl font-semibold transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-purple-900'
            }`}>
              Book Your Appointment
            </h1>
            <p className={`text-sm mt-1 transition-colors duration-300 ${
              isDark ? 'text-purple-200' : 'text-purple-700'
            }`}>
              J L Electrical Services
            </p>
          </div>
          
          {/* Theme Toggle Button with cosmic styling */}
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-2xl border transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg relative overflow-hidden ${
              isDark
                ? 'bg-white/10 border-purple-400/40 text-yellow-300 hover:bg-white/15 shadow-purple-500/20'
                : 'bg-white/30 border-purple-400/50 text-purple-800 hover:bg-white/40 shadow-purple-600/30'
            }`}
            style={{
              backdropFilter: 'blur(35px) saturate(150%) hue-rotate(10deg)',
              WebkitBackdropFilter: 'blur(35px) saturate(150%) hue-rotate(10deg)'
            }}
            aria-label="Toggle theme"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-pink-500/20 rounded-2xl"></div>
            <span className="relative z-10 text-lg">{isDark ? '☀️' : '🌙'}</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 py-6 relative z-10">
        
        {/* Quote Info Card with Cosmic Prism styling */}
        <div className={`rounded-3xl p-6 mb-6 border shadow-2xl relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-purple-500/30 ${
          isDark
            ? 'bg-white/10 border-purple-400/40 shadow-purple-900/30'
            : 'bg-white/20 border-pink-300/60 shadow-purple-600/30'
        }`} style={{
          backdropFilter: 'blur(35px) saturate(150%) hue-rotate(10deg)',
          WebkitBackdropFilter: 'blur(35px) saturate(150%) hue-rotate(10deg)'
        }}>
          {/* Cosmic glass reflection */}
          <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
            isDark
              ? 'bg-gradient-to-br from-purple-400/20 via-transparent to-pink-400/20'
              : 'bg-gradient-to-br from-purple-300/40 via-transparent to-pink-300/40'
          }`}></div>
          
          <div className="relative z-10">
            <h2 className={`text-lg font-medium mb-3 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-purple-900'
            }`}>
              Your Quote Details
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className={`transition-colors duration-300 ${
                  isDark ? 'text-purple-200' : 'text-purple-700'
                }`}>Quote ID:</span>
                <span className={`font-medium px-3 py-1 rounded-full border transition-all duration-300 shadow-lg ${
                  isDark
                    ? 'text-white bg-gradient-to-r from-purple-500/25 to-pink-500/25 border-purple-400/50 shadow-purple-500/20'
                    : 'text-purple-900 bg-gradient-to-r from-purple-200/60 to-pink-200/60 border-purple-400/60 shadow-purple-400/30'
                }`} style={{
                  backdropFilter: 'blur(25px) saturate(120%)',
                  WebkitBackdropFilter: 'blur(25px) saturate(120%)'
                }}>#{quoteId}</span>
              </div>
              <div className="flex justify-between">
                <span className={`transition-colors duration-300 ${
                  isDark ? 'text-purple-200' : 'text-purple-700'
                }`}>Estimated Duration:</span>
                <span className={`font-medium transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-purple-900'
                }`}>Loading...</span>
              </div>
              <div className="flex justify-between">
                <span className={`transition-colors duration-300 ${
                  isDark ? 'text-purple-200' : 'text-purple-700'
                }`}>Service:</span>
                <span className={`font-medium transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-purple-900'
                }`}>Loading...</span>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar Card with enhanced cosmic styling */}
        <div className={`rounded-3xl p-6 mb-6 border shadow-2xl relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-purple-500/40 ${
          isDark
            ? 'bg-white/8 border-purple-400/30 shadow-purple-900/40'
            : 'bg-white/15 border-pink-300/50 shadow-purple-600/40'
        }`} style={{
          backdropFilter: 'blur(35px) saturate(150%) hue-rotate(10deg)',
          WebkitBackdropFilter: 'blur(35px) saturate(150%) hue-rotate(10deg)'
        }}>
          {/* Enhanced cosmic reflection */}
          <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
            isDark
              ? 'bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/15'
              : 'bg-gradient-to-br from-blue-400/20 via-transparent to-purple-400/25'
          }`}></div>
          
          <div className="relative z-10">
            <h3 className={`text-lg font-medium mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-purple-900'
            }`}>
              Choose Your Date & Time
            </h3>
            <div className={`rounded-2xl p-8 text-center border shadow-inner transition-all duration-500 ${
              isDark
                ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-400/30'
                : 'bg-gradient-to-br from-purple-200/30 to-blue-200/30 border-purple-300/50'
            }`} style={{
              backdropFilter: 'blur(25px) saturate(120%)',
              WebkitBackdropFilter: 'blur(25px) saturate(120%)'
            }}>
              <p className={`text-lg transition-colors duration-300 ${
                isDark ? 'text-purple-100' : 'text-purple-800'
              }`}>
                📅 Calendar component will go here
              </p>
              <p className={`text-sm mt-2 transition-colors duration-300 ${
                isDark ? 'text-purple-300' : 'text-purple-600'
              }`}>
                Step 2: Add 30-day calendar view
              </p>
            </div>
          </div>
        </div>

        {/* Cosmic Confirm Button */}
        <button 
          disabled
          className={`w-full font-medium py-4 rounded-3xl cursor-not-allowed border transition-all duration-500 shadow-lg relative overflow-hidden group hover:-translate-y-1 ${
            isDark
              ? 'bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-blue-500/15 text-purple-300 border-purple-400/40 shadow-purple-900/30'
              : 'bg-gradient-to-r from-purple-300/25 via-pink-300/25 to-blue-300/25 text-purple-700 border-purple-400/50 shadow-purple-500/40'
          }`}
          style={{
            backdropFilter: 'blur(35px) saturate(150%) hue-rotate(10deg)',
            WebkitBackdropFilter: 'blur(35px) saturate(150%) hue-rotate(10deg)'
          }}
        >
          {/* Prismatic button reflection */}
          <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
            isDark
              ? 'bg-gradient-to-r from-purple-400/10 via-transparent to-blue-400/10'
              : 'bg-gradient-to-r from-purple-400/20 via-transparent to-pink-400/20'
          }`}></div>
          <span className="relative z-10">Select a Time Slot First</span>
        </button>

        {/* Footer */}
        <div className="text-center mt-6 text-xs">
          <p className={`transition-colors duration-300 ${
            isDark ? 'text-purple-400' : 'text-purple-600'
          }`}>
            Secure booking powered by J L Electrical Services
          </p>
        </div>
      </div>
    </div>
  );
}