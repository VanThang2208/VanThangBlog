
import React from 'react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const navItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'blog', label: 'Blog' },
    { id: 'about', label: 'Giới thiệu' },
    { id: 'contact', label: 'Liên hệ' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => setActivePage('home')}>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ThangDao.me
            </span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`transition-colors py-2 px-1 border-b-2 ${
                  activePage === item.id 
                  ? 'text-blue-600 border-blue-600' 
                  : 'text-slate-600 border-transparent hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => setActivePage('assistant')}
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all shadow-md shadow-blue-100"
            >
              Hỏi AI Assistant
            </button>
          </div>
          <div className="md:hidden">
            {/* Mobile menu icon could go here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
