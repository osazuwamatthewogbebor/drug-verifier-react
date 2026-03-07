import React from 'react';
import { Smartphone, Search, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Smartphone className="text-blue-500" />,
    title: "Find the Code",
    desc: "Locate the 12-character verification code on your pill box or bottle label."
  },
  {
    icon: <Search className="text-purple-500" />,
    title: "Verify Instantly",
    desc: "Enter the code exactly as shown into the verification portal above."
  },
  {
    icon: <CheckCircle className="text-emerald-500" />,
    title: "Stay Protected",
    desc: "Receive immediate confirmation of authenticity and drug safety status."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-slate-600 max-w-xl mx-auto">Ensuring your safety in three simple steps using our global pharmaceutical verification network.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
