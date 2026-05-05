// src/app/entries/page.tsx
import React from 'react';
import Card from '@/components/Card';

// Using a larger set of sample data for the list page
const allEntries = [
  { id: 1, imageUrl: 'https://image.cngal.org/entry/2024/05/17/143526_793335e2-e1c5-4a69-9de8-37f26d36236b.jpg', title: '憶落謎境：The Fragment of Memory', date: '2024-05-20' },
  { id: 2, imageUrl: 'https://image.cngal.org/entry/2023/12/28/092048_1f0c237b-0447-4954-a8af-12001c40625a.jpg', title: '墨影书阁', date: '2024-05-18' },
  { id: 3, imageUrl: 'https://image.cngal.org/entry/2024/02/05/185854_8e2987a0-0958-45e3-942f-c5d01e1f7d5a.jpg', title: '制品廠', date: '2024-05-16' },
  { id: 4, imageUrl: 'https://image.cngal.org/entry/2024/05/16/184136_2d4d5b7a-9c6f-4d2d-8e4a-5c2d1b1f8c3a.jpg', title: '梦灯花 - SotW', date: '2024-05-15' },
  { id: 5, imageUrl: 'https://image.cngal.org/entry/2024/04/24/180237_7c2b6f1e-1b3a-4f2a-8c9d-2e1f7d5a8c1e.jpg', title: '夏色弥留', date: '2024-05-14' },
  { id: 6, imageUrl: 'https://image.cngal.org/entry/2024/01/01/120000_1c1c1c1c-1c1c-1c1c-1c1c-1c1c1c1c1c1c.jpg', title: '恋爱绮谭', date: '2024-05-13' },
  { id: 7, imageUrl: 'https://image.cngal.org/entry/2023/04/28/184852_4a0e7f1e-1b3a-4f2a-8c9d-2e1f7d5a8c1e.jpg', title: '火山的女儿', date: '2024-05-12' },
  { id: 8, imageUrl: 'https://image.cngal.org/entry/2024/04/28/193000_1c1c1c1c-1c1c-1c1c-1c1c-1c1c1c1c1c1c.jpg', title: '三色绘恋', date: '2024-05-11' },
  { id: 9, imageUrl: 'https://image.cngal.org/entry/2023/10/01/000001_placeholder.jpg', title: 'Another Placeholder Game 1', date: '2024-05-10' },
  { id: 10, imageUrl: 'https://image.cngal.org/entry/2023/10/01/000002_placeholder.jpg', title: 'Another Placeholder Game 2', date: '2024-05-09' },
  { id: 11, imageUrl: 'https://image.cngal.org/entry/2023/10/01/000003_placeholder.jpg', title: 'Another Placeholder Game 3', date: '2024-05-08' },
  { id: 12, imageUrl: 'https://image.cngal.org/entry/2023/10/01/000004_placeholder.jpg', title: 'Another Placeholder Game 4', date: '2024-05-07' },
];

const EntriesPage = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">所有词条</h1>
          <p className="text-gray-600 mt-2">探索所有收录的游戏和作品</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allEntries.map((entry, index) => (
            <Card key={index} imageUrl={entry.imageUrl} title={entry.title} date={entry.date} entryUrl={`/entries/${entry.id}`} />
          ))}
        </div>
        {/* Simple Pagination Placeholder */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-2">
            <a href="#" className="px-4 py-2 text-gray-500 bg-white rounded-md hover:bg-gray-100">上一页</a>
            <a href="#" className="px-4 py-2 text-white bg-[#BC004B] rounded-md">1</a>
            <a href="#" className="px-4 py-2 text-gray-700 bg-white rounded-md hover:bg-gray-100">2</a>
            <a href="#" className="px-4 py-2 text-gray-700 bg-white rounded-md hover:bg-gray-100">3</a>
            <span className="px-4 py-2 text-gray-500">...</span>
            <a href="#" className="px-4 py-2 text-gray-700 bg-white rounded-md hover:bg-gray-100">10</a>
            <a href="#" className="px-4 py-2 text-gray-700 bg-white rounded-md hover:bg-gray-100">下一页</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default EntriesPage;
