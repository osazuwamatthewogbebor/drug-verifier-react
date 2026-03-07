import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';

const CodeInput = ({ onVerify, onClear, isLoading }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!code.trim()) {
      setError(true);
      return;
    }
    setError(false);
    onVerify(code.trim());
  };

  const handleClear = () => {
    setCode('');
    setError(false);
    onClear();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={code}
          onChange={(e) => {
            setCode(e.target.value.toUpperCase());
            if (error) setError(false);
          }}
          placeholder="Enter Verification Code"
          className={cn(
            "w-full px-5 py-4 pr-12 text-lg font-medium tracking-wider bg-slate-50 border-2 rounded-2xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-healthcare-500/20",
            error ? "border-healthcare-error animate-shake" : "border-slate-100 focus:border-healthcare-500"
          )}
          disabled={isLoading}
        />
        {code && !isLoading && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={20} />
          </button>
        )}
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          className="flex-1 btn-primary flex items-center justify-center gap-2"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Verifying...
            </>
          ) : (
            <>
              <Search size={20} />
              Verify Drug
            </>
          )}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="btn-secondary"
          disabled={isLoading}
        >
          Clear
        </button>
      </div>
      
      {error && (
        <p className="text-sm font-medium text-healthcare-error text-center mt-2">
          Please enter a valid verification code.
        </p>
      )}
    </form>
  );
};

export default CodeInput;
