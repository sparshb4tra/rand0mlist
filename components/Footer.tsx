import React from 'react';
import { ViewState } from '../types';

interface FooterProps {
  setView: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="mt-8 border-t border-gray-300 py-6 px-2 bg-white text-center">
      <div className="max-w-[1000px] mx-auto text-[11px] font-helvetica text-gray-600 space-y-3">
        <div className="flex justify-center flex-wrap gap-4">
          <button onClick={() => setView('help')} className="text-blue-800 hover:underline hover:bg-gray-100 px-1">help</button>
          <button onClick={() => setView('safety')} className="text-blue-800 hover:underline hover:bg-gray-100 px-1">safety</button>
          <button onClick={() => setView('privacy')} className="text-blue-800 hover:underline hover:bg-gray-100 px-1">privacy</button>
          <button onClick={() => setView('feedback')} className="text-blue-800 hover:underline hover:bg-gray-100 px-1">feedback</button>
          <button onClick={() => setView('terms')} className="text-blue-800 hover:underline hover:bg-gray-100 px-1">terms</button>
        </div>
        <div>
          Created by <a href="https://sbatra.xyz" target="_blank" rel="noreferrer" className="text-blue-800 hover:underline">Sparsh</a>
        </div>
        <div className="text-gray-400">
          © 2024 randomlist
        </div>
      </div>
    </footer>
  );
};

export default Footer;