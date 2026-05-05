// src/components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              {/* Placeholder for a new baseball logo */}
              <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M4.874 15.126A8.966 8.966 0 0112 4.5a8.966 8.966 0 017.126 10.626m-14.252 0A8.966 8.966 0 0112 19.5a8.966 8.966 0 017.126-4.374m-14.252 0h14.252" />
              </svg>
              <span className="text-xl font-semibold text-gray-700">臺灣棒球大聯盟</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="/teams" className="text-gray-600 hover:text-[#BC004B] transition-colors">球隊</a>
            <a href="/players" className="text-gray-600 hover:text-[#BC004B] transition-colors">球員</a>
            <a href="/stats" className="text-gray-600 hover:text-[#BC004B] transition-colors">數據</a>
            <a href="/news" className="text-gray-600 hover:text-[#BC004B] transition-colors">新聞</a>
          </div>

          {/* Search and Login */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                className="border border-gray-300 rounded-full py-1 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f06292]"
                placeholder="搜索..." 
              />
            </div>
            <button className="px-4 py-1.5 bg-[#BC004B] text-white rounded-md text-sm font-medium hover:bg-[#a50042] transition-colors">
              登录
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
