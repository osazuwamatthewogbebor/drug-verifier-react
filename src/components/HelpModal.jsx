import React from 'react';
import { X, Phone, MessageSquare, Mail, ShieldQuestion } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HelpModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleAction = (path) => {
    onClose();
    if (path.startsWith('mailto:') || path.startsWith('tel:')) {
      window.location.href = path;
    } else {
      navigate(path);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-[32px] shadow-2xl p-8"
          >
            <button onClick={onClose} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <X size={20} />
            </button>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-healthcare-50 text-healthcare-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldQuestion size={32} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">Help Center</h2>
              <p className="text-slate-500">How can we assist you today?</p>
            </div>

            <div className="space-y-3">
              <button 
                onClick={() => handleAction('tel:+18007233837')}
                className="w-full p-4 bg-slate-50 hover:bg-healthcare-50 border border-slate-100 rounded-2xl flex items-center gap-4 transition-all group"
              >
                <div className="p-2 bg-white rounded-xl text-healthcare-600 shadow-sm group-hover:bg-healthcare-600 group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div className="text-left">
                  <span className="block font-bold text-slate-900">Call Support</span>
                  <span className="text-xs text-slate-500">Available 24/7 for critical alerts</span>
                </div>
              </button>

              <button 
                onClick={() => handleAction('/contact')}
                className="w-full p-4 bg-slate-50 hover:bg-healthcare-50 border border-slate-100 rounded-2xl flex items-center gap-4 transition-all group"
              >
                <div className="p-2 bg-white rounded-xl text-healthcare-600 shadow-sm group-hover:bg-healthcare-600 group-hover:text-white transition-all">
                  <MessageSquare size={20} />
                </div>
                <div className="text-left">
                  <span className="block font-bold text-slate-900">Live Chat</span>
                  <span className="text-xs text-slate-500">Average response time: 2 mins</span>
                </div>
              </button>

              <button 
                onClick={() => handleAction('mailto:help@safeverify.org')}
                className="w-full p-4 bg-slate-50 hover:bg-healthcare-50 border border-slate-100 rounded-2xl flex items-center gap-4 transition-all group"
              >
                <div className="p-2 bg-white rounded-xl text-healthcare-600 shadow-sm group-hover:bg-healthcare-600 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div className="text-left">
                  <span className="block font-bold text-slate-900">Email Inquiry</span>
                  <span className="text-xs text-slate-500">Contact our legal or lab teams</span>
                </div>
              </button>
            </div>

            <p className="mt-8 text-center text-xs text-slate-400">
              SafeVerify Global Support Protocol v2.1
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default HelpModal;
