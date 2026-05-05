// src/app/articles/page.tsx
import React from 'react';
import ArticleListItem from '@/components/ArticleListItem';

const sampleArticles = [
  {
    id: 1,
    title: '视觉小说叙事分析：以《海市蜃楼之馆》为例',
    author: '游戏研究者',
    avatarUrl: 'https://www.cngal.org/background/images/2023/12/28/092048_1f0c237b-0447-4954-a8af-12001c40625a.jpg',
    date: '2024-05-18',
    excerpt: '本文将深入探讨著名视觉小说《海市蜃楼之馆》的叙事结构、角色塑造以及氛围营造，分析其如何在同类作品中脱颖而出。',
    tags: ['叙事分析', '视觉小说', '海市蜃楼之馆'],
  },
  {
    id: 2,
    title: '国产Galgame二十年：从《萤》到新时代的展望',
    author: 'CnGal编辑部',
    avatarUrl: 'https://www.cngal.org/background/images/2024/05/17/bfd3e6c0-7e16-4a4c-8f4e-2d9f4e3a8c1e.jpg',
    date: '2024-05-15',
    excerpt: '回顾国产Galgame从早期探索到如今百花齐放的二十年发展历程，并对未来的发展方向进行展望。',
    tags: ['国产Galgame', '游戏史', '回顾'],
  },
    {
    id: 3,
    title: '《三色绘恋》的本地化与文化共鸣',
    author: '文化译者',
    avatarUrl: 'https://image.cngal.org/entry/2024/04/28/193000_1c1c1c1c-1c1c-1c1c-1c1c-1c1c1c1c1c1c.jpg',
    date: '2024-05-11',
    excerpt: '分析《三色绘恋》在中文语境下的本地化策略，如何通过贴近生活的细节和文化元素引发玩家的深刻共鸣。',
    tags: ['三色绘恋', '本地化', '文化研究'],
  },
];

const ArticlesPage = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">文章列表</h1>
          <p className="text-gray-600 mt-2">阅读、分析与评论</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          {sampleArticles.map((article) => (
            <ArticleListItem key={article.id} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
