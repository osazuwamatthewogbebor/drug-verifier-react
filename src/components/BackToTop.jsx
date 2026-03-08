import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[90] p-4 bg-white text-healthcare-600 rounded-2xl shadow-2xl border border-slate-100 flex items-center justify-center hover:bg-healthcare-50 transition-colors group"
          aria-label="Back to top"
        >
          <ChevronUp 
            size={24} 
            className="group-hover:-translate-y-1 transition-transform duration-300" 
          />
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-healthcare-600/5 blur-xl group-hover:bg-healthcare-600/10 transition-colors -z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
