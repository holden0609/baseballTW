// src/app/entries/[id]/page.tsx
import React from 'react';

// This is a placeholder for a dynamic page.
// In a real app, you would fetch data based on the `params.id`.
const EntryDetailPage = ({ params }: { params: { id: string } }) => {
  
  // Sample data for a single entry
  const entry = {
    id: params.id,
    title: '憶落謎境：The Fragment of Memory',
    imageUrl: 'https://image.cngal.org/entry/2024/05/17/143526_793335e2-e1c5-4a69-9de8-37f26d36236b.jpg',
    description: '《憶落謎境》是一款結合「解謎」與「劇情」的2D橫向卷軸遊戲。故事講述一位小女孩「彌睿」與神祕的「白色兔子」一同踏上尋找記憶的旅程。玩家將在遊戲中透過操作彌睿來破解一道道謎題，並收集散落的記憶碎片，這些碎片將拼湊出故事的真相，喚醒彌睿深處被遺忘的記憶。',
    tags: ['解谜', '剧情', '2D', '横向卷轴', '独立游戏'],
    releaseDate: '2024-05-20',
    developer: 'Stormscape',
    publisher: 'Astrolabe Games',
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:space-x-8">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{entry.title}</h1>
            <img src={entry.imageUrl} alt={entry.title} className="w-full h-auto rounded-lg shadow-lg mb-6" />
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-3">游戏简介</h2>
              <p>{entry.description}</p>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">标签</h3>
                <div className="flex flex-wrap gap-2">
                    {entry.tags.map(tag => (
                        <span key={tag} className="bg-pink-100 text-pink-800 text-sm font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
                    ))}
                </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 mt-8 lg:mt-0">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">基本信息</h2>
              <ul>
                <li className="flex justify-between py-2 border-b">
                  <span className="font-semibold text-gray-600">发行日期</span>
                  <span className="text-gray-800">{entry.releaseDate}</span>
                </li>
                <li className="flex justify-between py-2 border-b">
                  <span className="font-semibold text-gray-600">开发商</span>
                  <span className="text-gray-800">{entry.developer}</span>
                </li>
                <li className="flex justify-between py-2">
                  <span className="font-semibold text-gray-600">发行商</span>
                  <span className="text-gray-800">{entry.publisher}</span>
                </li>
              </ul>
              <button className="mt-6 w-full bg-[#BC004B] text-white py-2 rounded-lg font-semibold hover:bg-[#a50042] transition-colors">
                访问商店页面
              </button>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default EntryDetailPage;
