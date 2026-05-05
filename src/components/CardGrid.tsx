// src/components/CardGrid.tsx
import React from 'react';
import Card from './Card';

const sampleCards = [
  {
    imageUrl: 'https://image.cngal.org/entry/2024/05/17/143526_793335e2-e1c5-4a69-9de8-37f26d36236b.jpg',
    title: '憶落謎境：The Fragment of Memory',
    date: '2024-05-20',
  },
  {
    imageUrl: 'https://image.cngal.org/entry/2023/12/28/092048_1f0c237b-0447-4954-a8af-12001c40625a.jpg',
    title: '墨影书阁',
    date: '2024-05-18',
  },
  {
    imageUrl: 'https://image.cngal.org/entry/2024/02/05/185854_8e2987a0-0958-45e3-942f-c5d01e1f7d5a.jpg',
    title: '制品廠',
    date: '2024-05-16',
  },
  {
    imageUrl: 'https://image.cngal.org/entry/2024/05/16/184136_2d4d5b7a-9c6f-4d2d-8e4a-5c2d1b1f8c3a.jpg',
    title: '梦灯花 - SotW',
    date: '2024-05-15',
  },
   {
    imageUrl: 'https://image.cngal.org/entry/2024/04/24/180237_7c2b6f1e-1b3a-4f2a-8c9d-2e1f7d5a8c1e.jpg',
    title: '夏色弥留',
    date: '2024-05-14',
  },
  {
    imageUrl: 'https://image.cngal.org/entry/2024/01/01/120000_1c1c1c1c-1c1c-1c1c-1c1c-1c1c1c1c1c1c.jpg',
    title: '恋爱绮谭',
    date: '2024-05-13',
  },
  {
    imageUrl: 'https://image.cngal.org/entry/2023/04/28/184852_4a0e7f1e-1b3a-4f2a-8c9d-2e1f7d5a8c1e.jpg',
    title: '火山的女儿',
    date: '2024-05-12',
  },
  {
    imageUrl: 'https://image.cngal.org/entry/2024/04/28/193000_1c1c1c1c-1c1c-1c1c-1c1c-1c1c1c1c1c1c.jpg',
    title: '三色绘恋',
    date: '2024-05-11',
  },
];

const CardGrid = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">最新动态</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sampleCards.map((card, index) => (
            <Card key={index} imageUrl={card.imageUrl} title={card.title} date={card.date} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
