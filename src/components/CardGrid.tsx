// src/components/CardGrid.tsx
import React from 'react';
import Card from './Card';

const samplePlayers = [
  {
    id: 101,
    imageUrl: 'https://images.unsplash.com/photo-1599589253401-4933a365f57a?q=80&w=1887&auto=format&fit=crop',
    title: '林安可',
    subtext: '外野手 | 統一7-ELEVEn獅',
  },
  {
    id: 102,
    imageUrl: 'https://images.unsplash.com/photo-1629892697833-21c08dbe8377?q=80&w=1887&auto=format&fit=crop',
    title: '王柏融',
    subtext: '外野手 | 台鋼雄鷹',
  },
  {
    id: 103,
    imageUrl: 'https://images.unsplash.com/photo-1633441233620-761a29643110?q=80&w=1887&auto=format&fit=crop',
    title: '江坤宇',
    subtext: '游擊手 | 中信兄弟',
  },
  {
    id: 104,
    imageUrl: 'https://images.unsplash.com/photo-1552318965-6e6a7284b822?q=80&w=1887&auto=format&fit=crop',
    title: '徐若熙',
    subtext: '投手 | 味全龍',
  },
];

const CardGrid = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">焦點球員</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {samplePlayers.map((player) => (
            <Card key={player.id} imageUrl={player.imageUrl} title={player.title} date={player.subtext} entryUrl={`/players/${player.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
