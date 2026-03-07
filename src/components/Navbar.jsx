import React, { useState } from 'react';
import { ShieldCheck, Menu, PhoneCall, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onHelp }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Verify', path: '/' },
    { name: 'Safety News', path: '/news' },
    { name: 'History', path: '/history' },
    { name: 'Partners', path: '/manufacturers' },
    { name: 'Lab Network', path: '/labs' },
    { name: 'Report', path: '/report' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-healthcare-600 p-2 rounded-xl text-white group-hover:scale-110 transition-transform">
              <ShieldCheck size={28} />
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tighter">
              Safe<span className="text-healthcare-600">Verify</span>
            </span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                  px-4 py-2 rounded-xl text-sm font-bold transition-all
                  ${isActive 
                    ? 'text-healthcare-600 bg-healthcare-50' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}
                `}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={onHelp}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
            >
              <PhoneCall size={16} />
              Help Center
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name}
                  to={link.path}
                   onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => `
                    block px-4 py-4 rounded-2xl text-base font-bold transition-all
                    ${isActive 
                      ? 'text-healthcare-600 bg-healthcare-50' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}
                  `}
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4">
                <button 
                  onClick={() => {
                    onHelp();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-4 bg-healthcare-600 text-white rounded-2xl text-base font-bold"
                >
                  <PhoneCall size={20} />
                  Help Center
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
