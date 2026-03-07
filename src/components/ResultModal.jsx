import React from 'react';
import { CheckCircle2, AlertCircle, X, Download, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';

const ResultModal = ({ status, onClose }) => {
  const navigate = useNavigate();
  const isSuccess = status === 'success';

  const handleDownload = () => {
    // Simulate a certificate download
    const dummyContent = "SafeVerify Authenticity Certificate\n\nStatus: AUTHENTIC\nID: " + Math.random().toString(36).substring(7).toUpperCase();
    const blob = new Blob([dummyContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SafeVerify_Certificate_${Math.random().toString(36).substring(7)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleReport = () => {
    onClose();
    navigate('/report');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl overflow-hidden"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors z-10"
          >
            <X size={24} />
          </button>

          {/* Inner Content */}
          <div className="pt-12 pb-8 px-8 text-center">
            {/* Animated Icon Container */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.2 }}
              className={cn(
                "w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center",
                isSuccess ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600"
              )}
            >
              {isSuccess ? <CheckCircle2 size={48} /> : <AlertCircle size={48} />}
            </motion.div>

            <h2 className={cn(
              "text-3xl font-bold mb-4",
              isSuccess ? "text-emerald-900" : "text-rose-900"
            )}>
              {isSuccess ? "Verification Successful" : "Security Alert!"}
            </h2>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              {isSuccess 
                ? "This medication is confirmed as authentic. You can safely proceed with your dosage as prescribed."
                : "The code entered does not match any genuine medication in our secure registry. This product may be counterfeit."
              }
            </p>

            {/* Action Cards */}
            <div className="space-y-3">
              {isSuccess ? (
                <button 
                  onClick={handleDownload}
                  className="w-full btn-primary flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 transition-all"
                >
                  <Download size={20} />
                  Download Certificate
                </button>
              ) : (
                <button 
                  onClick={handleReport}
                  className="w-full btn-primary flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 active:scale-95 transition-all"
                >
                  <ShieldAlert size={20} />
                  Report Counterfeit
                </button>
              )}
              <button 
                onClick={onClose}
                className="w-full py-3 text-slate-500 font-semibold hover:text-slate-700 transition-colors"
              >
                Done
              </button>
            </div>
          </div>

          {/* Footer Badge */}
          <div className="bg-slate-50 py-4 px-8 border-t border-slate-100 italic text-[13px] text-slate-400">
            Validated by SafeVerify Global Medical Database • ID: {Math.random().toString(36).substring(7).toUpperCase()}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResultModal;
