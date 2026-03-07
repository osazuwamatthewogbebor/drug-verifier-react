import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const ResultMessage = ({ status }) => {
  if (status === 'loading') return null;

  const isSuccess = status === 'success';

  return (
    <div className={cn(
      "p-5 rounded-2xl flex items-start gap-4 transition-all duration-300",
      isSuccess 
        ? "bg-emerald-50 border-2 border-emerald-100 text-emerald-800 shadow-sm shadow-emerald-100" 
        : "bg-rose-50 border-2 border-rose-100 text-rose-800 shadow-sm shadow-rose-100"
    )}>
      <div className={cn(
        "p-2 rounded-xl mt-0.5",
        isSuccess ? "bg-emerald-500 text-white" : "bg-rose-500 text-white"
      )}>
        {isSuccess ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-1">
          {isSuccess ? "Drug is Authentic" : "Invalid Code"}
        </h3>
        <p className="text-sm font-medium opacity-90 leading-relaxed">
          {isSuccess 
            ? "This medication has been verified as genuine and safe according to our database." 
            : "This drug code is invalid or may be counterfeit. Please do not consume and contact the pharmacy."}
        </p>
      </div>
    </div>
  );
};

export default ResultMessage;
