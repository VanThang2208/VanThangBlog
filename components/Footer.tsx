
import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 inline-block">
              ThangDao.me
            </span>
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} - Đào Văn Thắng. Thiết kế bởi React & Tailwind.</p>
          </div>
          <div className="flex gap-6">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">Github</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">LinkedIn</a>
            <a href={`mailto:${PROFILE.email}`} className="text-slate-400 hover:text-slate-900 transition-colors">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
