import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import History from './pages/History.jsx';
import News from './pages/News.jsx';
import Report from './pages/Report.jsx';
import Manufacturers from './pages/Manufacturers.jsx';
import Labs from './pages/Labs.jsx';
import About from './pages/About.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HelpModal from './components/HelpModal.jsx';

const VALID_CODES = [
  "DRG-7A9K-21XQ",
  "MED-4L2P-88ZT",
  "RX-93JK-1QWE",
  "PHM-55TR-9LKD",
  "MED-8XQ1-73PL",
  "DRG-20AB-44CD",
  "RX-7PLM-90QQ",
  "PHM-66GH-21ZX",
  "MED-0KLP-555A",
  "DRG-9ZXC-102M"
];

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [result, setResult] = useState(null);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  
  const handleVerify = async (code) => {
    setResult({ status: 'loading', code });
    await new Promise(resolve => setTimeout(resolve, 1000));
    const formattedCode = code.toUpperCase().trim();
    const isValid = VALID_CODES.includes(formattedCode);
    setResult({ status: isValid ? 'success' : 'error', code: formattedCode });

    const historyEntry = {
      id: Math.random().toString(36).substring(7),
      code: formattedCode,
      isValid,
      timestamp: Date.now()
    };
    
    const existingHistory = JSON.parse(localStorage.getItem('safeVerifyHistory')) || [];
    const updatedHistory = [historyEntry, ...existingHistory].slice(0, 50);
    localStorage.setItem('safeVerifyHistory', JSON.stringify(updatedHistory));
  };

  const handleClear = () => {
    setResult(null);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 font-sans">
        <Navbar onHelp={() => setIsHelpOpen(true)} />
        <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
        <Routes>
          <Route path="/" element={<Home onVerify={handleVerify} onClear={handleClear} result={result} />} />
          <Route path="/history" element={<History />} />
          <Route path="/news" element={<News />} />
          <Route path="/report" element={<Report />} />
          <Route path="/manufacturers" element={<Manufacturers />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
