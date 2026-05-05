// src/app/articles/[id]/page.tsx
import React from 'react';

const ArticleDetailPage = ({ params }: { params: { id: string } }) => {
  
  const article = {
    id: params.id,
    title: '视觉小说叙事分析：以《海市蜃楼之馆》为例',
    author: '游戏研究者',
    avatarUrl: 'https://www.cngal.org/background/images/2023/12/28/092048_1f0c237b-0447-4954-a8af-12001c40625a.jpg',
    date: '2024-05-18',
    tags: ['叙事分析', '视觉小说', '海市蜃楼之馆'],
    content: `
      <p>视觉小说（Visual Novel）作为一种独特的游戏类型，其核心魅力往往在于深刻的叙事和引人入胜的故事情节。《海市蜃楼之馆》无疑是这一类型中的翘楚之作，其复杂而精巧的叙事结构为玩家提供了一场跨越千年的情感盛宴。</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">一、非线性叙事与多重视角</h2>
      <p>游戏并没有采用传统的线性叙事，而是通过多个独立的、看似无关的故事章节，逐步揭示一个庞大而悲惨的家族史诗。玩家在游戏初期会扮演一位失去记忆的“你”，在一座神秘的洋馆中，通过一扇扇门，窥探不同时代发生的悲剧。</p>
      <p>这种碎片化的叙事方式，要求玩家主动参与到故事的重构中。每一个故事都是一个独立的悲剧，但它们之间又通过血缘、诅咒和共同的悲剧命运紧密相连。直到最后，所有的线索汇集在一起，形成一个完整而震撼人心的真相。这种“拼图式”的体验，是《海市蜃楼之馆》叙事上的最大亮点之一。</p>

      <figure class="my-6">
        <img src="https://image.cngal.org/entry/2024/05/17/143526_793335e2-e1c5-4a69-9de8-37f26d36236b.jpg" alt="游戏截图" class="rounded-lg shadow-md mx-auto" />
        <figcaption class="text-center text-sm text-gray-500 mt-2">游戏中的场景氛围营造出色。</figcaption>
      </figure>

      <h2 class="text-2xl font-bold mt-8 mb-4">二、角色塑造的深度</h2>
      <p>游戏中的每一个主要角色都不是简单的善恶二元论可以概括的。他们是环境的产物，是命运的囚徒。无论是白发少女、米歇尔、还是雅各布，他们的行为背后都有着深刻的动机和无法摆脱的过去。游戏通过细腻的心理描写和大量的内心独白，让玩家能够深入角色的内心世界，感受他们的痛苦、挣扎与希望。</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">三、结论</h2>
      <p>综上所述，《海市蜃楼之馆》通过其非线性的叙事结构、多重视角的运用、以及深刻的角色塑造，成功地构建了一个复杂而感人至深的故事世界。它不仅是一部优秀的游戏作品，更是一部值得深入分析的叙事艺术品。</p>
    `
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Article Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">{article.title}</h1>
            <div className="flex items-center justify-center mt-4">
              <img src={article.avatarUrl} alt={article.author} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-semibold text-gray-800">{article.author}</p>
                <p className="text-sm text-gray-500">{article.date}</p>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <article 
            className="prose lg:prose-xl max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <div className="mt-8 pt-6 border-t">
             <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                    <span key={tag} className="bg-pink-100 text-pink-800 text-sm font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
