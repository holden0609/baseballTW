// src/components/Carousel.tsx
"use client"; // This component requires client-side interactivity (e.g., for state)

import React, { useState, useEffect } from 'react';

// Sample data for the carousel, URLs are placeholders from the original site
const slides = [
  {
    image: 'https://www.cngal.org/background/images/2024/05/20/3b4e6b2d-963b-4c4f-9e7f-7a5d3f2b1c8e.jpg',
    title: '墨影书阁 - 水墨风视觉小说游戏',
    subtitle: '探索一款充满艺术气息的国产佳作',
  },
  {
    image: 'https://www.cngal.org/background/images/2024/05/17/bfd3e6c0-7e16-4a4c-8f4e-2d9f4e3a8c1e.jpg',
    title: '憶落謎境 - The Fragment of Memory',
    subtitle: '踏上寻找记忆碎片的解谜之旅',
  },
  {
    image: 'https://www.cngal.org/background/images/2024/05/16/f8c7b9a2-5b1d-4f7e-8c6a-6e5c4d3a2b1c.jpg',
    title: '梦灯花 - SotW',
    subtitle: '在幻想世界中体验一段动人的故事',
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
