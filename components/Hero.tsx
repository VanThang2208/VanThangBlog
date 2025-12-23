
import React from 'react';
import { PROFILE } from '../constants';

interface HeroProps {
  onExplorePosts: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplorePosts }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="relative w-56 h-56 md:w-80 md:h-80 flex-shrink-0 animate-fade-in">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-6 opacity-10"></div>
            <img 
              src={PROFILE.avatarUrl} 
              alt={PROFILE.name} 
              className="rounded-3xl object-cover w-full h-full shadow-2xl relative z-10 border-4 border-white"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Kinh nghiệm</p>
                  <p className="text-sm font-bold text-slate-800">5+ Dự án lớn</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Network Programming Specialist
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Kỹ sư <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Lập trình mạng</span> & Bảo mật hạ tầng.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
              Chào mình là <span className="font-bold text-slate-900">{PROFILE.name}</span>. Mình đam mê tối ưu hóa luồng dữ liệu, xây dựng các giải pháp mạng an toàn và chia sẻ kiến thức cộng đồng.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-5">
              <button 
                onClick={onExplorePosts}
                className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 transform hover:-translate-y-1"
              >
                Khám phá Blog
              </button>
              <a 
                href={PROFILE.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                LinkedIn
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
