import React from 'react';
import { FileText, ShieldCheck, Scale, AlertCircle } from 'lucide-react';

const Terms = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="flex items-center gap-4 mb-10 text-slate-900">
            <FileText size={40} className="text-healthcare-600" />
            <h1 className="text-4xl font-extrabold">Terms of Service</h1>
          </div>

          <div className="space-y-8 text-slate-600 leading-relaxed">
            <p>
              Welcome to the SafeVerify Global Registry. By using this platform, you agree to the following terms and conditions. Please read them carefully to understand our role in your medication safety.
            </p>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Scale size={20} className="text-blue-500" />
                1. Nature of Service
              </h2>
              <p>
                SafeVerify provides a digital verification service based on manufacturer-provided hashes. We do not manufacture medication, nor are we a pharmacy. Our tool is intended as a <strong>security layer</strong> and should not replace professional medical advice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck size={20} className="text-emerald-500" />
                2. Authenticity Guarantee
              </h2>
              <p>
                Current verification status is based on our real-time database. While our technology is highly accurate, a "Successful" result does not account for secondary manipulation of contents (e.g., refilling authentic bottles with counterfeit pills). Always inspect the physical integrity of packaging.
              </p>
            </section>

            <section className="bg-rose-50 p-6 rounded-2xl border border-rose-100 flex gap-4">
              <AlertCircle size={24} className="text-rose-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-rose-900 mb-1">User Responsibility</h3>
                <p className="text-sm text-rose-800">
                  Users agree not to use this service for illegal purposes, including the reverse-engineering of security codes. Misuse of the reporting tool for filing false claims is strictly prohibited.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">3. Limitation of Liability</h2>
              <p>
                In no event shall SafeVerify or its partners be liable for any direct, indirect, or incidental damages resulting from the use or inability to use this verification platform.
              </p>
            </section>

            <div className="pt-8 border-t border-slate-100 flex justify-between text-[11px] font-bold text-slate-400 tracking-widest uppercase">
              <span>Jurisdiction: International Maritime Law</span>
              <span>v.4.1.0-March2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
