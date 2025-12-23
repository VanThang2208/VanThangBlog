
import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';

interface BlogSectionProps {
  isPage?: boolean;
}

const BlogSection: React.FC<BlogSectionProps> = ({ isPage = false }) => {
  const [filter, setFilter] = useState('Tất cả');
  const categories = ['Tất cả', ...Array.from(new Set(BLOG_POSTS.map(p => p.category)))];

  const displayedPosts = isPage 
    ? (filter === 'Tất cả' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === filter))
    : BLOG_POSTS.slice(0, 3);

  return (
    <section className={`py-20 ${isPage ? 'bg-white' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {isPage ? 'Tất cả bài viết' : 'Kiến thức mới nhất'}
            </h2>
            <p className="text-slate-600 max-w-md">Chia sẻ kinh nghiệm thực tế về Network Programming và Security.</p>
          </div>
          {isPage && (
            <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedPosts.map(post => (
            <article key={post.id} className="group cursor-pointer flex flex-col h-full bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-60 overflow-hidden rounded-t-3xl">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-xl text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center text-xs text-slate-400 font-medium mb-3">
                  <span className="bg-slate-50 px-2 py-1 rounded-md">{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                  <span className="mx-2 opacity-30">•</span>
                  <span>5 phút đọc</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-blue-600 font-bold text-sm group-hover:gap-2 transition-all">
                  Đọc thêm 
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
