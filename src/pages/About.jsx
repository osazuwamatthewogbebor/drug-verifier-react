import React from 'react';
import { ShieldCheck, Lock, Globe, Server, UserCheck, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  { icon: <Lock className="text-healthcare-600" />, title: "End-to-End Security", desc: "Every verification code is cryptographically unique and unforgeable." },
  { icon: <Globe className="text-healthcare-600" />, title: "Global Accessibility", desc: "Accessible from any device, anywhere in the world, at any time." },
  { icon: <UserCheck className="text-healthcare-600" />, title: "Patient Privacy", desc: "No personal data is collected. We verify products, not people." }
];

const About = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mission Section */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block p-4 bg-healthcare-50 rounded-[28px] text-healthcare-600 mb-8"
          >
            <ShieldCheck size={48} />
          </motion.div>
          <h1 className="text-5xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">Our mission is to end counterfeit medication.</h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            SafeVerify was founded in 2026 as a response to the growing global threat of unregulated health products. We believe that everyone, regardless of their location, has the right to know if their medication is safe and authentic.
          </p>
        </div>

        {/* Value Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-32">
          {values.map((v, i) => (
            <div key={i} className="text-center p-12 bg-slate-50 rounded-[48px] border border-transparent hover:border-healthcare-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                {v.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{v.title}</h3>
              <p className="text-slate-500 leading-relaxed font-semibold">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Technology/Infra Section */}
        <div className="bg-slate-900 rounded-[64px] p-12 lg:p-24 text-white flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-healthcare-600/10 blur-[120px]"></div>
          
          <div className="flex-1 relative z-10">
            <h2 className="text-4xl font-extrabold mb-8">Integrated with Global Pharma Infrastructure</h2>
            <div className="space-y-6">
              {[
                "Real-time API connection to 12.5k drug manufacturers",
                "Blockchain-secured serial hash registry",
                "Automated reporting for regional health authorities",
                "ISO 27001 Certified medical data security"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 text-white/70">
                  <div className="w-2 h-2 bg-healthcare-500 rounded-full"></div>
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={() => alert("Our technology whitepaper is currently being updated for v4.2. Please check back in a few days or contact our tech team for the draft.")}
              className="mt-12 px-8 py-4 bg-healthcare-600 hover:bg-healthcare-700 text-white font-bold rounded-2xl transition-all flex items-center gap-3 active:scale-95"
            >
              Learn about our Tech <Server size={20} />
            </button>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full">
            <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-[40px] border border-white/10 text-center">
              <span className="block text-3xl md:text-4xl font-black mb-2">99.9%</span>
              <span className="text-white/40 font-bold uppercase tracking-widest text-[10px]">Registry Uptime</span>
            </div>
            <div className="bg-healthcare-600 p-8 md:p-10 rounded-[40px] text-center shadow-2xl shadow-healthcare-900">
              <span className="block text-3xl md:text-4xl font-black mb-2">0ms</span>
              <span className="text-healthcare-100 font-bold uppercase tracking-widest text-[10px]">Latency Goal</span>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-[40px] text-center text-slate-900">
              <span className="block text-3xl md:text-4xl font-black mb-2">24/7</span>
              <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Live Monitoring</span>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-[40px] border border-white/10 text-center">
              <span className="block text-3xl md:text-4xl font-black mb-2">12M+</span>
              <span className="text-white/40 font-bold uppercase tracking-widest text-[10px]">Checks/Year</span>
            </div>
          </div>
        </div>

        {/* Heart CTA */}
        <div className="py-32 text-center max-w-xl mx-auto">
          <Heart size={40} className="text-rose-500 mx-auto mb-6 animate-pulse" fill="currentColor" />
          <h3 className="text-2xl font-bold text-slate-900 mb-6 italic">"Saving lives through digital transparency, one medication at a time."</h3>
          <p className="text-slate-400 font-bold">- SafeVerify Global Board of Health</p>
        </div>
      </div>
    </div>
  );
};

export default About;
