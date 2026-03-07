import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "Why should I verify every medication?",
    a: "Counterfeit drugs can be ineffective or dangerous. Verification ensures the product came from an authorized manufacturer."
  },
  {
    q: "Where is the verification code located?",
    a: "Typically under a scratch-off silver panel or printed directly near the batch number and expiry date."
  },
  {
    q: "What if my code returns an 'Invalid' result?",
    a: "Do not consume the medication. Contact your pharmacist immediately or use our 'Report Counterfeit' feature."
  },
  {
    q: "Is my personal data stored during verification?",
    a: "No. Our verification system is completely anonymous and focused solely on the product's serial integrity."
  }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Safety FAQ</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all shadow-sm"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-bold text-slate-800">{faq.q}</span>
                {openIdx === idx ? <ChevronUp size={20} className="text-healthcare-600" /> : <ChevronDown size={20} className="text-slate-400" />}
              </button>
              
              <div className={`px-6 overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
