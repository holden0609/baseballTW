// src/components/ArticleListItem.tsx
import React from 'react';

interface ArticleListItemProps {
  id: number;
  title: string;
  author: string;
  avatarUrl: string;
  date: string;
  excerpt: string;
  tags: string[];
}

const ArticleListItem: React.FC<ArticleListItemProps> = (props) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <img src={props.avatarUrl} alt={props.author} className="w-10 h-10 rounded-full mr-4" />
        <div>
          <p className="font-semibold text-gray-800">{props.author}</p>
          <p className="text-sm text-gray-500">{props.date}</p>
        </div>
      </div>
      <a href={`/articles/${props.id}`} className="block">
        <h2 className="text-2xl font-bold text-gray-900 hover:text-[#BC004B] transition-colors mb-2">{props.title}</h2>
      </a>
      <p className="text-gray-600 mb-4">{props.excerpt}</p>
      <div className="flex flex-wrap gap-2">
        {props.tags.map(tag => (
          <span key={tag} className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ArticleListItem;
