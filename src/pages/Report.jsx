import React, { useState } from 'react';
import { ShieldAlert, FileText, MapPin, Camera, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Report = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    code: '',
    location: '',
    details: '',
    email: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-rose-100 text-rose-600 rounded-2xl mb-6">
            <ShieldAlert size={32} />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Report Counterfeit</h1>
          <p className="text-slate-500">Your report helps health authorities stop the sale of dangerous fakes.</p>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-between mb-12 px-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                step >= s ? 'bg-rose-600 text-white shadow-lg shadow-rose-200' : 'bg-slate-200 text-slate-500'
              }`}>
                {step > s ? <CheckCircle2 size={18} /> : s}
              </div>
              {s < 3 && <div className={`w-20 md:w-32 h-1 mx-2 rounded ${step > s ? 'bg-rose-600' : 'bg-slate-200'}`}></div>}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100 p-10">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Verification Code (If known)</label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      type="text" 
                      placeholder="e.g. DRG-7A9K-21XQ" 
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Detailed Observation</label>
                  <textarea 
                    rows="4" 
                    placeholder="Describe why you believe this product is counterfeit (smell, packaging, efficacy...)"
                    className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-500"
                  ></textarea>
                </div>
                <button onClick={nextStep} className="w-full btn-primary bg-rose-600 hover:bg-rose-700 mt-4 flex items-center justify-center gap-2">
                  Continue <ArrowRight size={20} />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Purchase Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      type="text" 
                      placeholder="Pharmacy name or Online URL" 
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>
                <div className="p-8 border-2 border-dashed border-slate-200 rounded-3xl text-center hover:border-rose-300 transition-colors group">
                  <Camera className="mx-auto mb-3 text-slate-300 group-hover:text-rose-400" size={32} />
                  <p className="text-sm font-bold text-slate-500 mb-1">Upload Product Photos</p>
                  <p className="text-xs text-slate-400">Packaging, batch numbers, and pills</p>
                </div>
                <div className="flex gap-4">
                  <button onClick={prevStep} className="flex-1 btn-secondary flex items-center justify-center gap-2">
                    <ArrowLeft size={20} /> Back
                  </button>
                  <button onClick={nextStep} className="flex-1 btn-primary bg-rose-600 hover:bg-rose-700 flex items-center justify-center gap-2">
                    Continue <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Report Ready to File</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  Your identity remains protected. We will submit this data to national pharmaceutical regulatory agencies for immediate investigation.
                </p>
                <div className="flex gap-4">
                  <button onClick={prevStep} className="flex-1 btn-secondary">Back</button>
                  <button onClick={() => window.location.href = '/'} className="flex-1 btn-primary bg-rose-600 hover:bg-rose-700">Submit Report</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="mt-8 text-center text-xs text-slate-400 leading-relaxed px-10">
          Disclaimer: Filing a false report is a criminal offense in most jurisdictions. Ensure your information is as accurate as possible.
        </p>
      </div>
    </div>
  );
};

export default Report;
