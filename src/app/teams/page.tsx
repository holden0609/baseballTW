// src/app/teams/page.tsx
import React from 'react';

const TeamsPage = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800">球隊</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          這裡是「球隊」列表的佔位符頁面。您可以仿照「球員」頁面的模式，在這裡建立一個展示所有球隊的列表。
        </p>
        <div className="mt-8">
          <a href="/" className="px-6 py-3 bg-[#BC004B] text-white rounded-md text-lg font-medium hover:bg-[#a50042] transition-colors">
            返回首页
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamsPage;
