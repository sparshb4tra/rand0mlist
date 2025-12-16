import React from 'react';
import { ViewState } from '../types';

interface FooterProps {
  setView: (view: ViewState) => void;
  onFunClick: () => void;
  hasBgGif: boolean;
}

const Footer: React.FC<FooterProps> = ({ setView, onFunClick, hasBgGif }) => {
  return (
    <footer className={`border-t py-6 px-2 text-center ${hasBgGif ? 'bg-black/50 border-white/20' : 'bg-white border-gray-300'}`}>
      <div className="max-w-[1000px] mx-auto text-xs font-helvetica space-y-3">
        <div className="flex justify-center flex-wrap gap-4">
          <button onClick={() => setView('help')} className={`hover:underline px-1 ${hasBgGif ? 'text-white/90 hover:bg-white/10' : 'text-blue-800 hover:bg-gray-100'}`}>help</button>
          <button onClick={() => setView('safety')} className={`hover:underline px-1 ${hasBgGif ? 'text-white/90 hover:bg-white/10' : 'text-blue-800 hover:bg-gray-100'}`}>safety</button>
          <button onClick={() => setView('privacy')} className={`hover:underline px-1 ${hasBgGif ? 'text-white/90 hover:bg-white/10' : 'text-blue-800 hover:bg-gray-100'}`}>privacy</button>
          <button onClick={() => setView('feedback')} className={`hover:underline px-1 ${hasBgGif ? 'text-white/90 hover:bg-white/10' : 'text-blue-800 hover:bg-gray-100'}`}>feedback</button>
          <button onClick={() => setView('terms')} className={`hover:underline px-1 ${hasBgGif ? 'text-white/90 hover:bg-white/10' : 'text-blue-800 hover:bg-gray-100'}`}>terms</button>
          <button onClick={onFunClick} className={`font-bold hover:underline px-1 ${hasBgGif ? 'text-pink-300 hover:bg-pink-500/20' : 'text-purple-600 hover:bg-purple-100'}`}>{hasBgGif ? 'normal' : 'fun'}</button>
        </div>
        <div className={hasBgGif ? 'text-white/80' : 'text-gray-600'}>
          Created by <a href="https://sbatra.xyz" target="_blank" rel="noreferrer" className={`hover:underline ${hasBgGif ? 'text-white' : 'text-blue-800'}`}>Sparsh</a>
        </div>
        <div className={hasBgGif ? 'text-white/50' : 'text-gray-400'}>
          © 2024 randomlist
        </div>
      </div>
    </footer>
  );
};

export default Footer;