// src/app/stats/page.tsx
import React from 'react';

const StatsPage = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800">數據</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          這裡是「數據」頁面的佔位符。未來這裡可以放置各種數據排行榜，例如打擊率、防禦率、全壘打王等統計資料。
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

export default StatsPage;
