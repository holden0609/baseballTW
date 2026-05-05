// src/components/Carousel.tsx
"use client"; // This component requires client-side interactivity (e.g., for state)

import React, { useState, useEffect } from 'react';

// Sample data for the carousel, with baseball-themed content
const slides = [
  {
    image: 'https://images.unsplash.com/photo-1551022372-3bd9e9858543?q=80&w=2070&auto=format&fit=crop',
    title: '王牌對決：週末龍象大戰',
    subtitle: '兩大強投的正面交鋒，誰能帶領球隊奪下系列賽勝利？',
  },
  {
    image: 'https://images.unsplash.com/photo-1521523823904-e8d11b333457?q=80&w=2070&auto=format&fit=crop',
    title: '新星崛起：年度最佳新人熱門人選',
    subtitle: '年僅20歲的超級新秀，正用他的球棒改寫聯盟歷史。',
  },
  {
    image: 'https://images.unsplash.com/photo-1595299442055-a05b22b1b36a?q=80&w=2070&auto=format&fit=crop',
    title: '經典回顧：總冠軍賽的輝煌時刻',
    subtitle: '重溫那些年我們一起追逐的冠軍夢，感受棒球的純粹魅力。',
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl font-bold">{slide.title}</h2>
            <p className="mt-2 text-lg">{slide.subtitle}</p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
