
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import BlogSection from './components/BlogSection';
import GeminiAssistant from './components/GeminiAssistant';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <>
            <Hero onExplorePosts={() => setActivePage('blog')} />
            <SkillsSection />
            <BlogSection isPage={false} />
          </>
        );
      case 'blog':
        return <BlogSection isPage={true} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'assistant':
        return <GeminiAssistant />;
      default:
        return <Hero onExplorePosts={() => setActivePage('blog')} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-700">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="animate-in fade-in duration-700">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
