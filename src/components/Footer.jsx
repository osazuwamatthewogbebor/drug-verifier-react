import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white border-t border-slate-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-10 h-10 bg-healthcare-600 rounded-xl flex items-center justify-center text-white">
            <ShieldCheck size={24} />
          </div>
          <span className="text-xl font-black text-slate-900 tracking-tight italic">SafeVerify<span className="text-healthcare-600">.</span></span>
        </div>
        <p className="max-w-md mx-auto text-slate-500 text-sm mb-10 leading-relaxed">
          Our mission is to end the circulation of counterfeit medication globally. Data provided is for verification purposes only.
        </p>
        <div className="flex justify-center flex-wrap gap-x-8 gap-y-4 text-sm font-semibold text-slate-400">
          <Link to="/privacy" className="py-2 hover:text-healthcare-600 transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="py-2 hover:text-healthcare-600 transition-colors">Terms of Service</Link>
          <Link to="/contact" className="py-2 hover:text-healthcare-600 transition-colors">Contact Lab</Link>
          <Link to="/about" className="py-2 hover:text-healthcare-600 transition-colors">Organization</Link>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-50 text-[11px] font-bold text-slate-300 uppercase tracking-[0.2em]">
          &copy; 2026 SafeVerify Global Registry &bull; Protected by Molecular Blockchain
        </div>
      </div>
    </footer>
  );
};

export default Footer;
