import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="group flex items-center gap-3">
          <div className="w-11 h-11 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-all font-outfit">
            <span className="text-xl font-black text-primary">SU</span>
          </div>
          <span className="text-xl font-extrabold font-outfit text-slate-900 group-hover:text-primary transition-colors tracking-tight">
            Syed Unas
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-10 text-[13px] font-bold uppercase tracking-widest leading-none">
          <a href="#hero" className="text-slate-500 hover:text-primary transition-colors">Architecture</a>
          <a href="#skills" className="text-slate-500 hover:text-primary transition-colors">Tech Stack</a>
          <a href="#experience" className="text-slate-500 hover:text-primary transition-colors">Operations</a>
          <a href="#contact" className="px-8 py-3.5 bg-primary text-white rounded-[20px] hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center gap-2">
            Build Project
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
