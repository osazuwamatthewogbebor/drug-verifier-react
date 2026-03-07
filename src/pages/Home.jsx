import React from 'react';
import CodeInput from '../components/CodeInput';
import FAQ from '../components/FAQ';
import HowItWorks from '../components/HowItWorks';
import ResultModal from '../components/ResultModal';
import { ShieldCheck, ArrowRight, Activity, HeartPulse, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = ({ onVerify, onClear, result }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-healthcare-100 rounded-full blur-[100px] opacity-40 z-0"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-100 rounded-full blur-[100px] opacity-40 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 mb-8">
                <Sparkles size={16} className="text-amber-500" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Global Safety Registry v4.2</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Instant Drug <br/>
                <span className="text-healthcare-600 italic">Authenticity</span> Check
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Connect directly to our global pharmaceutical registry to verify your medication in seconds. Protect yourself from counterfeit health products.
              </p>
              
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Activity size={20} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">Real-time Data</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <HeartPulse size={20} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">Medical Grade</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="glass-card max-w-lg mx-auto lg:mr-0 border-white/40 shadow-2xl"
            >
              <div className="mb-8 text-center">
                <h3 className="text-xl font-bold text-slate-900">Verification Portal</h3>
                <p className="text-sm text-slate-500 mt-1">Enter your 12-digit security code below</p>
              </div>
              
              <CodeInput onVerify={onVerify} onClear={onClear} isLoading={result?.status === 'loading'} />
              
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-[13px]">
                <span className="text-slate-400">Secure 256-bit encryption</span>
                <button 
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-healthcare-600 font-bold hover:underline flex items-center gap-1"
                >
                  How to find code <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Badge strip */}
      <div className="bg-slate-900 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-8 text-white/60 text-sm font-medium">
          <span>Trusted by 500+ Hospitals</span>
          <span>Verified 12M+ Medications</span>
          <span>24/7 Security Monitoring</span>
          <span>Global FDA Compliance</span>
        </div>
      </div>

      <HowItWorks />
      <FAQ />

      {/* Verification Result Modal */}
      <AnimatePresence>
        {result && result.status !== 'loading' && (
          <ResultModal 
            status={result.status} 
            onClose={onClear} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
