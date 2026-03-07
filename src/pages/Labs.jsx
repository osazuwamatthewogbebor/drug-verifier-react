import React, { useState } from 'react';
import { Microscope, MapPin, Phone, Mail, Award, Navigation, Search, FlaskConical } from 'lucide-react';
import { motion } from 'framer-motion';

const labPartners = [
  { 
    id: 1, 
    name: 'Zurich Mol-Analysis Hub', 
    location: 'Zurich, Switzerland', 
    services: ['DNA Tagging', 'Chemical Purity', 'Blockchain Sync'],
    specialty: 'High-Precision Diagnostics',
    rating: '5.0 Excellence'
  },
  { 
    id: 2, 
    name: 'London Forensic Laboratory', 
    location: 'London, UK', 
    services: ['Packaging Analysis', 'Counterfeit Origin Tracking'],
    specialty: 'Legal Forensics',
    rating: '4.9 Premier'
  },
  { 
    id: 3, 
    name: 'Singapore Biotech Center', 
    location: 'Singapore', 
    services: ['Batch Validation', 'Stability Testing'],
    specialty: 'Distribution Security',
    rating: '4.9 Gold'
  },
  { 
    id: 4, 
    name: 'Mayo Clinic Advanced Diagnostics', 
    location: 'Rochester, USA', 
    services: ['Molecular Fingerprinting', 'Mass Spectrometry'],
    specialty: 'Immuno-Security',
    rating: '5.0 Platinum'
  },
  { 
    id: 5, 
    name: 'Tokyo Pharma Integrity Lab', 
    location: 'Tokyo, Japan', 
    services: ['Active Ingredient Assay', 'Thermal Stability'],
    specialty: 'API Integrity',
    rating: '4.8 Global'
  }
];

const Labs = () => {
  const [activeRegion, setActiveRegion] = useState('All Regions');

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Sidebar: Info & Search */}
          <div className="lg:w-1/3">
             <div className="sticky top-32">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-healthcare-50 rounded-full text-healthcare-700 text-[10px] font-black tracking-widest uppercase mb-8">
                   <Award size={14} /> Diagnostic Network
                </div>
                <h1 className="text-5xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">Certified Laboratories</h1>
                <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                  Our network of high-precision diagnostic laboratories performs physical chemical analysis on suspected counterfeit medication.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Regional Filtering</h3>
                  {['All Regions', 'Europe', 'North America', 'Asia-Pacific'].map(region => (
                    <button 
                      key={region}
                      onClick={() => setActiveRegion(region)}
                      className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 group ${
                        activeRegion === region 
                        ? 'bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-200' 
                        : 'bg-white border-slate-100 text-slate-600 hover:border-healthcare-300'
                      }`}
                    >
                      <span className="font-bold text-sm">{region}</span>
                      <Navigation size={16} className={activeRegion === region ? 'text-healthcare-400' : 'text-slate-300 group-hover:text-healthcare-500'} />
                    </button>
                  ))}
                </div>
             </div>
          </div>

          {/* Right Content: Lab Cards */}
          <div className="lg:w-2/3 space-y-8">
             {labPartners.map((lab, index) => (
                <motion.div
                  key={lab.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-[40px] p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:border-healthcare-100 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8">
                     <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-300 group-hover:bg-healthcare-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                        <FlaskConical size={28} />
                     </div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                       <span className="px-3 py-1 bg-healthcare-50 text-healthcare-600 rounded-lg text-[10px] font-black uppercase tracking-widest">{lab.specialty}</span>
                       <div className="h-1 w-1 bg-slate-200 rounded-full" />
                       <span className="text-[11px] font-bold text-slate-400">{lab.rating}</span>
                    </div>

                    <h2 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-healthcare-600 transition-colors leading-tight">
                      {lab.name}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10">
                       <div className="space-y-6">
                          <div className="flex items-start gap-4 text-slate-500 text-sm">
                            <MapPin className="text-healthcare-600 mt-1" size={18} />
                            <div className="font-medium">{lab.location}</div>
                          </div>
                          <div className="flex items-start gap-4 text-slate-500 text-sm">
                            <Microscope className="text-healthcare-600 mt-1" size={18} />
                            <div>
                               <span className="block font-bold text-slate-900 mb-2">Diagnostic Services:</span>
                               <div className="flex flex-wrap gap-2">
                                  {lab.services.map(s => (
                                     <span key={s} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-bold text-slate-600 tracking-tight italic">
                                        {s}
                                     </span>
                                  ))}
                               </div>
                            </div>
                          </div>
                       </div>

                       <div className="flex flex-col justify-end gap-3">
                          <button 
                            onClick={() => window.location.href = 'tel:+18005550199'}
                            className="w-full py-4 bg-slate-50 border border-slate-100 text-slate-900 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-all"
                          >
                             <Phone size={16} /> Contact Hub
                          </button>
                          <button 
                            onClick={() => window.location.href = 'mailto:labs@safeverify.org?subject=Analysis Request for ' + encodeURIComponent(lab.name)}
                            className="w-full py-4 bg-healthcare-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-healthcare-500 transition-all shadow-lg shadow-healthcare-600/20 active:scale-95"
                          >
                             <Mail size={16} /> Secure Analysis Request
                          </button>
                       </div>
                    </div>
                  </div>
                </motion.div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labs;
