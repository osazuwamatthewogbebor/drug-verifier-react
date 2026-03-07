import React from 'react';
import { ShieldCheck, Lock, Eye, Database } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="flex items-center gap-4 mb-10 text-healthcare-600">
            <Lock size={40} />
            <h1 className="text-4xl font-extrabold text-slate-900">Privacy Policy</h1>
          </div>

          <div className="space-y-8 prose prose-slate max-w-none">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Eye size={24} className="text-blue-500" />
                Our Commitment to Privacy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                At SafeVerify, we prioritize the privacy and security of our users. We understand the sensitive nature of pharmaceutical verification. Our system is designed from the ground up to verify <strong>medicines</strong>, not <strong>people</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Database size={24} className="text-emerald-500" />
                Data Collection
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We do not collect personal identifiers such as names, IP addresses, or location data without explicit consent. The only data processed during a verification check includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>The verification code provided on the medication packaging.</li>
                <li>The timestamp of the verification attempt.</li>
                <li>Anonymous device type information to improve our portal's performance.</li>
              </ul>
            </section>

            <section className="bg-healthcare-50 p-8 rounded-3xl border border-healthcare-100">
              <h2 className="text-xl font-bold text-healthcare-900 mb-3 flex items-center gap-2">
                <ShieldCheck size={20} />
                No Third-Party Sharing
              </h2>
              <p className="text-healthcare-800 text-sm leading-relaxed">
                SafeVerify never sells or shares your anonymous verification history with third-party advertisers or insurance providers. Aggregated, non-identifiable data may be shared with global health organizations for the purpose of tracking counterfeit trends.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Cookies & Local Storage</h3>
              <p className="text-slate-600 leading-relaxed">
                We use your browser's local storage solely to provide you with a "Verification History" feature. This data stays on your device and is not synchronized with our servers. You can clear this history at any time from the History page.
              </p>
            </section>

            <div className="pt-10 border-t border-slate-100 mt-10 flex justify-between items-center text-xs text-slate-400 font-bold uppercase tracking-widest">
              <span>Last Updated: March 06, 2026</span>
              <span>Effective Globally</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
