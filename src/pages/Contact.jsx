import React from 'react';
import { Mail, Phone, MessageSquare, Microscope, Building, Globe, Send } from 'lucide-react';
import { motion } from 'framer-motion';

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Securely!\n\nThank you for reaching out. A representative from the selected department will respond to your inquiry via email within 24 hours.");
    e.target.reset();
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 px-4 md:px-0">Contact Our Network</h1>
        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-6 md:px-0">
          Need legal help, lab analysis, or technical support? Our global teams are ready to assist you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white rounded-[40px] p-6 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <MessageSquare size={24} className="text-healthcare-600" />
            Send a Secure Message
          </h2>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4 text-left">
              <label className="block text-sm font-bold text-slate-700 ml-1">Full Name</label>
              <input required type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-healthcare-500 outline-none transition-all" />
            </div>
            <div className="space-y-4 text-left">
              <label className="block text-sm font-bold text-slate-700 ml-1">Email Address</label>
              <input required type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-healthcare-500 outline-none transition-all" />
            </div>
            <div className="md:col-span-2 space-y-4 text-left">
              <label className="block text-sm font-bold text-slate-700 ml-1">Inquiry Type</label>
              <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-healthcare-500 outline-none transition-all appearance-none cursor-pointer">
                <option>General Support</option>
                <option>Laboratory Analysis Request</option>
                <option>Legal & Compliance</option>
                <option>Manufacturer Partnership</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-4 text-left">
              <label className="block text-sm font-bold text-slate-700 ml-1">Message Content</label>
              <textarea required rows="5" placeholder="Please describe your inquiry in detail..." className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-healthcare-500 outline-none transition-all"></textarea>
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="w-full btn-primary py-4 flex items-center justify-center gap-3 text-lg active:scale-95 transition-all">
                Send Message <Send size={20} />
              </button>
            </div>
          </form>
        </div>

        {/* Quick Contact Info */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-healthcare-500/10 blur-3xl"></div>
             <h3 className="text-xl font-bold mb-8">Support Channels</h3>
             <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/10 rounded-2xl text-healthcare-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-1">24/7 Hotline</span>
                    <span className="text-lg font-bold">+1 (800) SAFE-VERIFY</span>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/10 rounded-2xl text-healthcare-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Email</span>
                    <span className="text-lg font-bold">help@safeverify.org</span>
                  </div>
                </div>
             </div>
          </motion.div>

          {/* Departments */}
          <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-50 pb-4">Global Hubs</h3>
            <div className="flex items-center gap-4 text-slate-600 font-medium">
              <Globe size={20} className="text-healthcare-600" />
              <span>International HQ — Zurich, Switzerland</span>
            </div>
            <div className="flex items-center gap-4 text-slate-600 font-medium">
              <Microscope size={20} className="text-healthcare-600" />
              <span>Diagnostic Lab — London, UK</span>
            </div>
            <div className="flex items-center gap-4 text-slate-600 font-medium">
              <Building size={20} className="text-healthcare-600" />
              <span>Strategic Operations — Washington D.C, USA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
