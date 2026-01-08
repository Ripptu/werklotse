import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg border-b border-gray-100/50 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src="https://i.postimg.cc/rm91BzCf/123.png" 
            alt="WERKLOTSE Logo" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-charcoal">
          <a href="#" className="hover:text-navy transition-colors">Leistungen</a>
          <a href="#" className="hover:text-navy transition-colors">So funktioniert's</a>
          <a href="#" className="hover:text-navy transition-colors">Für Fachbetriebe</a>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-navy text-white px-6 py-2.5 rounded-sm flex items-center gap-2 hover:bg-navy-800 transition-colors font-medium"
          >
            Beratung anfordern
            <ArrowRight size={16} />
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-navy">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl md:hidden z-50"
        >
          <a href="#" className="text-charcoal font-medium">Leistungen</a>
          <a href="#" className="text-charcoal font-medium">So funktioniert's</a>
          <a href="#" className="text-charcoal font-medium">Für Fachbetriebe</a>
          <button className="bg-navy text-white px-4 py-3 rounded-sm w-full flex justify-center items-center gap-2 font-medium">
            Beratung anfordern
            <ArrowRight size={14} />
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;