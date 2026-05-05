// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Column 1: About */}
          <div>
            <h3 className="font-bold text-lg mb-4">关于我们</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-pink-400 transition-colors text-gray-300">CnGal</a></li>
              <li className="mb-2"><a href="#" className="hover:text-pink-400 transition-colors text-gray-300">发展历程</a></li>
              <li className="mb-2"><a href="#" className="hover:text-pink-400 transition-colors text-gray-300">加入我们</a></li>
              <li className="mb-2"><a href="#" className="hover:text-pink-400 transition-colors text-gray-300">Staff</a></li>
            </ul>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">相关链接</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-pink-400 transition-colors text-gray-300">友情链接</a></li>
              <li className="mb-2"><a href="#" className="hover:text-pink-400 transition-colors text-gray-300">开发文档</a></li>
              <li className="mb-2"><a href="#" className="hover:text-pink-400 transition-colors text-gray-300">API</a></li>
            </ul>
          </div>

          {/* Column 3: Community */}
          <div>
            <h3 className="font-bold text-lg mb-4">交流</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-pink-400 transition-colors text-gray-300">QQ群</a></li>
              <li className="mb-2"><a href="#" className="hover:text-pink-400 transition-colors text-gray-300">Discord</a></li>
              <li className="mb-2"><a href="#" className="hover:text-pink-400 transition-colors text-gray-300">微博</a></li>
              <li className="mb-2"><a href="#" className="hover:text-pink-400 transition-colors text-gray-300">Bilibili</a></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">声明</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-pink-400 transition-colors text-gray-300">版权声明</a></li>
              <li className="mb-2"><a href="#" className="hover:text-pink-400 transition-colors text-gray-300">隐私政策</a></li>
              <li className="mb-2"><a href="#" className="hover:text-pink-400 transition-colors text-gray-300">用户协议</a></li>
            </ul>
          </div>

        </div>
        <div className="mt-10 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} CnGal. All Rights Reserved. </p>
          <p className="mt-2">本站是一个非盈利的，由爱好者共同搭建的开源项目。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
