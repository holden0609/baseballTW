// src/app/community/page.tsx
import React from 'react';

const CommunityPage = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800">社区</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          这是一个代表性的占位符页面。在实际的克隆项目中，这里将填充社区、论坛或动态等相关内容。
          我们已经成功地克隆了列表页和详情页的范式，这个页面展示了路由功能已正常工作。
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

export default CommunityPage;
