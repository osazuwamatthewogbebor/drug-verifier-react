import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle2, AlertCircle, Trash2, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('safeVerifyHistory')) || [];
    setHistory(savedHistory);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem('safeVerifyHistory');
    setHistory([]);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Verification History</h1>
            <p className="text-slate-500">Your recent authenticity checks stored locally on this device.</p>
          </div>
          {history.length > 0 && (
            <button 
              onClick={clearHistory}
              className="flex items-center gap-2 text-sm font-semibold text-rose-600 hover:text-rose-700 transition-colors"
            >
              <Trash2 size={16} />
              Clear All Logs
            </button>
          )}
        </div>

        {history.length === 0 ? (
          <div className="bg-white rounded-[32px] p-16 text-center border border-slate-100 shadow-sm">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
              <Clock size={40} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No verification logs yet</h3>
            <p className="text-slate-500 mb-8 max-w-xs mx-auto">Once you start verifying medications, your results will appear here for easy access.</p>
            <a href="/" className="btn-primary inline-flex">Go to Home</a>
          </div>
        ) : (
          <div className="space-y-4">
            <AnimatePresence>
              {history.map((item, idx) => (
                <motion.div 
                  key={item.id || idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm flex items-center justify-between group hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-5">
                    <div className={`p-3 rounded-2xl ${item.isValid ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                      {item.isValid ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-mono font-bold text-slate-900 text-lg tracking-wider">{item.code}</span>
                        <span className={`text-[11px] uppercase font-black px-2 py-0.5 rounded-full ${item.isValid ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
                          {item.isValid ? 'Authentic' : 'Invalid'}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 font-medium">{new Date(item.timestamp).toLocaleString()}</span>
                    </div>
                  </div>
                  <button className="p-2 text-slate-300 group-hover:text-healthcare-600 transition-colors">
                    <ExternalLink size={20} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        <div className="mt-12 p-6 bg-blue-50/50 rounded-2xl border border-blue-100 flex gap-4 items-start">
          <Clock size={20} className="text-blue-500 mt-1 flex-shrink-0" />
          <p className="text-sm text-blue-800 leading-relaxed italic">
            Privacy Note: This history is stored exclusively in your browser's local storage. SafeVerify does not transmit this history to any external servers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
