'use client';

import { useState } from 'react';

export default function BookingPage({ params }) {
  const { quoteId } = params;
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-blue-950' 
        : 'bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100'
    }`}>
      {/* Header */}
      <div className={`backdrop-blur-2xl border-b sticky top-0 z-10 transition-all duration-500 ${
        isDark 
          ? 'bg-slate-900/20 border-white/10 shadow-lg shadow-blue-950/20' 
          : 'bg-white/20 border-white/40 shadow-lg shadow-blue-100/20'
      }`}>
        <div className="max-w-md mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className={`text-xl font-semibold transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-800'
            }`}>
              Book Your Appointment
            </h1>
            <p className={`text-sm mt-1 transition-colors duration-300 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              J L Electrical Services
            </p>
          </div>
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:scale-105 ${
              isDark
                ? 'bg-white/10 border-white/20 text-yellow-300 hover:bg-white/15'
                : 'bg-white/30 border-white/50 text-slate-700 hover:bg-white/40'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        
        {/* Quote Info Card */}
        <div className={`backdrop-blur-3xl rounded-3xl p-6 mb-6 border shadow-2xl relative overflow-hidden transition-all duration-500 ${
          isDark
            ? 'bg-slate-800/20 border-white/10 shadow-blue-950/30'
            : 'bg-white/30 border-white/50 shadow-blue-200/30'
        }`}>
          {/* Glass reflection effect */}
          <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
            isDark
              ? 'bg-gradient-to-br from-white/10 via-transparent to-transparent'
              : 'bg-gradient-to-br from-white/40 via-transparent to-transparent'
          }`}></div>
          <div className="relative z-10">
            <h2 className={`text-lg font-medium mb-3 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-800'
            }`}>
              Your Quote Details
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className={`transition-colors duration-300 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>Quote ID:</span>
                <span className={`font-medium backdrop-blur-sm px-3 py-1 rounded-full border transition-all duration-300 ${
                  isDark
                    ? 'text-white bg-slate-700/40 border-white/20'
                    : 'text-slate-800 bg-white/40 border-white/30'
                }`}>#{quoteId}</span>
              </div>
              <div className="flex justify-between">
                <span className={`transition-colors duration-300 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>Estimated Duration:</span>
                <span className={`font-medium transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-slate-800'
                }`}>Loading...</span>
              </div>
              <div className="flex justify-between">
                <span className={`transition-colors duration-300 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>Service:</span>
                <span className={`font-medium transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-slate-800'
                }`}>Loading...</span>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar Placeholder */}
        <div className={`backdrop-blur-3xl rounded-3xl p-6 mb-6 border shadow-2xl relative overflow-hidden transition-all duration-500 ${
          isDark
            ? 'bg-slate-800/15 border-white/10 shadow-blue-950/30'
            : 'bg-white/25 border-white/50 shadow-blue-200/30'
        }`}>
          {/* Glass reflection effect */}
          <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
            isDark
              ? 'bg-gradient-to-br from-white/5 via-transparent to-blue-950/20'
              : 'bg-gradient-to-br from-white/30 via-transparent to-blue-50/20'
          }`}></div>
          <div className="relative z-10">
            <h3 className={`text-lg font-medium mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-800'
            }`}>
              Choose Your Date & Time
            </h3>
            <div className={`backdrop-blur-xl rounded-2xl p-8 text-center border shadow-inner transition-all duration-500 ${
              isDark
                ? 'bg-slate-700/10 border-white/20'
                : 'bg-white/20 border-white/40'
            }`}>
              <p className={`text-lg transition-colors duration-300 ${
                isDark ? 'text-slate-200' : 'text-slate-700'
              }`}>
                📅 Calendar component will go here
              </p>
              <p className={`text-sm mt-2 transition-colors duration-300 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Step 2: Add 30-day calendar view
              </p>
            </div>
          </div>
        </div>

        {/* Confirm Button (disabled for now) */}
        <button 
          disabled
          className={`w-full backdrop-blur-xl font-medium py-4 rounded-3xl cursor-not-allowed border transition-all duration-500 shadow-lg relative overflow-hidden group ${
            isDark
              ? 'bg-slate-700/10 text-slate-400 border-white/20 shadow-blue-950/20'
              : 'bg-white/20 text-slate-500 border-white/40 shadow-blue-100/20'
          }`}
        >
          <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
            isDark
              ? 'bg-gradient-to-r from-white/5 via-transparent to-transparent'
              : 'bg-gradient-to-r from-white/10 via-transparent to-transparent'
          }`}></div>
          <span className="relative z-10">Select a Time Slot First</span>
        </button>

        {/* Footer */}
        <div className="text-center mt-6 text-xs">
          <p className={`transition-colors duration-300 ${
            isDark ? 'text-slate-500' : 'text-slate-500'
          }`}>
            Secure booking powered by J L Electrical Services
          </p>
        </div>
      </div>
    </div>
  );
}