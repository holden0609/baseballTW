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
              <img 
                className="h-8 w-auto" 
                src="https://app.cngal.org/_content/CnGalWebSite.Shared/images/logo.png" 
                alt="CnGal Logo" 
              />
              <span className="text-xl font-semibold text-gray-700">CnGal</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#" className="text-gray-600 hover:text-[#BC004B] transition-colors">首页</a>
            <a href="/entries" className="text-gray-600 hover:text-[#BC004B] transition-colors">词条</a>
            <a href="/articles" className="text-gray-600 hover:text-[#BC004B] transition-colors">文章</a>
            <a href="#" className="text-gray-600 hover:text-[#BC004B] transition-colors">动态</a>
            <a href="/community" className="text-gray-600 hover:text-[#BC004B] transition-colors">社区</a>
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
