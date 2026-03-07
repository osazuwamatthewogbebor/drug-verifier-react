import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Bell, Info, ShieldAlert, ArrowRight, ExternalLink, Calendar, Filter } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    type: 'recall',
    title: 'Urgent: Batch 772X Recall - Paracetamol 500mg',
    date: 'March 05, 2026',
    summary: 'Discrepancies in active ingredient concentrations found in regional batch 772X. Immediate return to pharmacy advised.',
    source: 'WHO Health Alert',
    severity: 'critical'
  },
  {
    id: 2,
    type: 'alert',
    title: 'Counterfeit Antimalarials Detected in SE Asia',
    date: 'March 04, 2026',
    summary: 'Increased reports of sophisticated counterfeit packaging for Artether injections. Verify via SafeVerify before use.',
    source: 'Global Pharma Watch',
    severity: 'high'
  },
  {
    id: 3,
    type: 'update',
    title: 'New Security Features for Pfizer Packaging',
    date: 'March 02, 2026',
    summary: 'Pfizer introduces 3D holographic threads for all specialty medications. Verification codes will now include a 3-letter prefix.',
    source: 'Pfizer Media Room',
    severity: 'medium'
  },
  {
    id: 4,
    type: 'recall',
    title: 'Voluntary Recall of Insulin Pen Batch 45-Z',
    date: 'February 28, 2026',
    summary: 'Potential mechanical failure in batch 45-Z of Rapido Insulin pens. Check your expiry and batch number immediately.',
    source: 'EMA Safety Board',
    severity: 'critical'
  },
  {
    id: 5,
    type: 'alert',
    title: 'Security Advisory: Phishing via SMS Codes',
    date: 'February 25, 2026',
    summary: 'Alert regarding SMS messages asking for drug verification codes. SafeVerify will never ask for your code via SMS.',
    source: 'SafeVerify Security',
    severity: 'high'
  },
  {
    id: 6,
    type: 'update',
    title: 'SafeVerify Expands Laboratory Network to Brazil',
    date: 'February 20, 2026',
    summary: 'Three new certified diagnostic labs in São Paulo and Rio are now active in our physical verification network.',
    source: 'Corporate Press',
    severity: 'low'
  },
  {
    id: 7,
    type: 'recall',
    title: 'Blood Pressure Med Batch Warning',
    date: 'February 15, 2026',
    summary: 'Possible trace contamination in Lisinopril batches produced in November 2025. Verify your batch suffix now.',
    source: 'FDA Advisory',
    severity: 'critical'
  }
];

const News = () => {
  const [filter, setFilter] = useState('all');

  const filteredNews = filter === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.type === filter);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    alert(`Success! ${email} has been added to our critical safety alert registry. You will receive emergency recall notices immediately.`);
    e.target.reset();
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Safety News & Alerts</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stay informed with the latest drug recalls, security advisories, and pharmaceutical updates from across the globe.
          </p>
        </header>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100 flex gap-2">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${filter === 'all' ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50 uppercase tracking-wider text-[10px]'}`}
            >
              All Alerts
            </button>
            <button 
              onClick={() => setFilter('recall')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${filter === 'recall' ? 'bg-rose-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50 uppercase tracking-wider text-[10px]'}`}
            >
               <AlertTriangle size={14} />
               Recall Only
            </button>
            <button 
              onClick={() => setFilter('alert')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${filter === 'alert' ? 'bg-amber-500 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50 uppercase tracking-wider text-[10px]'}`}
            >
               <Bell size={14} />
               Advisories
            </button>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredNews.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`flex flex-col bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group`}
              >
                {/* Severity Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    item.type === 'recall' ? 'bg-rose-50 text-rose-600' : 
                    item.type === 'alert' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {item.type}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                    <Calendar size={14} />
                    {item.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-healthcare-600 transition-colors leading-snug">
                  {item.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {item.summary}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div className="text-[11px] font-black text-slate-300 uppercase tracking-widest">
                    Source: {item.source}
                  </div>
                  <button 
                    onClick={() => alert(`Opening full report: "${item.title}"\n\nFull analysis and documentation for this ${item.type} will load in a new secure window.`)}
                    className="p-2 bg-slate-50 text-slate-400 rounded-xl group-hover:bg-healthcare-600 group-hover:text-white transition-all shadow-sm active:scale-90"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>

                {/* Decorative status bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1.5 ${
                   item.severity === 'critical' ? 'bg-rose-500' : 
                   item.severity === 'high' ? 'bg-amber-500' : 
                   item.severity === 'medium' ? 'bg-blue-500' : 'bg-emerald-500'
                }`} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-slate-900 rounded-[40px] p-8 md:p-16 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-healthcare-500/10 blur-[100px]" />
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-6">Never Miss a Critical Update</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
              Subscribe to real-time safety alerts and emergency drug recalls delivered directly to your device.
            </p>
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 px-4 md:px-0">
              <input 
                required
                type="email" 
                placeholder="Enter your medical email..." 
                className="flex-grow px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 outline-none focus:ring-2 focus:ring-healthcare-500 transition-all text-sm"
              />
              <button type="submit" className="bg-healthcare-600 hover:bg-healthcare-500 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-healthcare-600/20 active:scale-95 flex items-center justify-center gap-2">
                Subscribe <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
