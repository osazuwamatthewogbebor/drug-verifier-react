import React, { useState } from 'react';
import { Search, Globe, ShieldCheck, ExternalLink, Award, CheckCircle2, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const manufacturers = [
  { id: 1, name: 'Pfizer Inc.', region: 'Global - USA', category: 'Biopharma', securityScore: 99, status: 'certified' },
  { id: 2, name: 'Novartis AG', region: 'Global - Switzerland', category: 'Specialty', securityScore: 98, status: 'certified' },
  { id: 3, name: 'Roche Holding', region: 'Global - Switzerland', category: 'Diagnostics', securityScore: 97, status: 'certified' },
  { id: 4, name: 'AstraZeneca', region: 'UK - Cambridge', category: 'Vaccines', securityScore: 96, status: 'certified' },
  { id: 5, name: 'Sanofi', region: 'France - Paris', category: 'Healthcare', securityScore: 95, status: 'certified' },
  { id: 6, name: 'Merck & Co.', region: 'Global - USA', category: 'Oncology', securityScore: 98, status: 'certified' },
  { id: 7, name: 'Johnson & Johnson', region: 'Global - USA', category: 'Consumer Health', securityScore: 94, status: 'certified' },
  { id: 8, name: 'Bayer AG', region: 'Germany - Leverkusen', category: 'Life Sciences', securityScore: 96, status: 'certified' }
];

const Manufacturers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = manufacturers.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApply = () => {
    alert("Thank you for your interest! Our partnership team will contact you within 48 hours with the certification requirements.");
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <header className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16 px-4 md:px-0">
          <div className="max-w-2xl text-left">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-healthcare-50 rounded-full text-healthcare-700 text-xs font-black tracking-widest uppercase mb-6">
                <Award size={14} /> Official Network
             </div>
             <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">Pharmaceutical Partners</h1>
             <p className="text-base md:text-lg text-slate-500 leading-relaxed">
               SafeVerify collaborates with top-tier global manufacturers that integrate our molecular verification technology directly into their production lines.
             </p>
          </div>
          
          <div className="w-full lg:w-96 relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-healthcare-600 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search manufacturers..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-6 py-4 md:py-5 bg-white border border-slate-200 rounded-[24px] shadow-sm outline-none focus:ring-4 focus:ring-healthcare-500/10 focus:border-healthcare-500 transition-all font-medium text-slate-900"
            />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredData.map((m) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm hover:shadow-xl hover:border-healthcare-100 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-healthcare-50 group-hover:text-healthcare-600 transition-colors">
                    <Building2 size={28} />
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1.5 text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full">
                      <CheckCircle2 size={12} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Active</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 truncate group-hover:text-healthcare-600 transition-colors">{m.name}</h3>
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-6 font-medium">
                  <Globe size={14} />
                  {m.region}
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-50">
                   <div className="flex items-center justify-between">
                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Security Score</span>
                     <span className="text-sm font-black text-slate-900">{m.securityScore}%</span>
                   </div>
                   <div className="w-full h-1.5 bg-slate-50 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${m.securityScore}%` }}
                        className="h-full bg-gradient-to-r from-healthcare-500 to-healthcare-400"
                      />
                   </div>
                   <div className="flex items-center justify-between pt-2">
                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{m.category}</span>
                     <button 
                       onClick={() => window.open('https://www.google.com/search?q=' + encodeURIComponent(m.name), '_blank')}
                       className="text-healthcare-600 hover:text-healthcare-700 transition-colors p-2 hover:bg-healthcare-50 rounded-lg"
                     >
                        <ExternalLink size={16} />
                     </button>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredData.length === 0 && (
          <div className="py-32 text-center">
            <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center mx-auto mb-6 text-slate-300">
               <Search size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No partners found</h3>
            <p className="text-slate-500">No manufacturers match your current search criteria.</p>
          </div>
        )}

        <div className="mt-20 p-12 bg-slate-900 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden shadow-2xl shadow-slate-900/20">
           <div className="relative z-10 text-center md:text-left">
             <h3 className="text-3xl font-bold mb-2">Join the Registry</h3>
             <p className="text-slate-400 text-sm max-w-md">Apply to become a certified SafeVerify manufacturer and protect your patients.</p>
           </div>
           <button 
             onClick={handleApply}
             className="relative z-10 bg-healthcare-600 text-white px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-healthcare-500 transition-all shadow-xl shadow-healthcare-600/40 active:scale-95 border-none outline-none"
           >
             Apply Now
           </button>
           <div className="absolute right-0 top-0 w-96 h-full bg-healthcare-600/10 skew-x-12 translate-x-32" />
           <div className="absolute left-0 bottom-0 w-64 h-64 bg-healthcare-600/5 rounded-full -translate-x-32 translate-y-32 blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Manufacturers;
