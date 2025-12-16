import React from 'react';
import { ViewState } from '../types';

interface HeaderProps {
  view: ViewState;
  setView: (view: ViewState) => void;
}

const Header: React.FC<HeaderProps> = ({ view, setView }) => {
  return (
    <header className="border-b border-gray-300 bg-[#f5f5f5] w-full">
      <div className="max-w-[1000px] mx-auto px-3 py-3 flex items-center gap-5 text-lg font-helvetica">
        
        {/* Logo / Home Link */}
        <div 
          onClick={() => setView('home')}
          className="cursor-pointer font-bold text-2xl tracking-tight hover:underline text-black"
        >
          randomlist
        </div>
        
        <span className="text-gray-400">&gt;</span>

        {/* Navigation Breadcrumbs */}
        <nav className="flex items-center gap-4">
          <button 
            onClick={() => setView('home')}
            className={`hover:bg-gray-200 px-1 ${view === 'home' ? 'font-bold' : 'text-blue-800'}`}
          >
            randomizer
          </button>

          <span className="text-gray-300">|</span>

          <button 
            onClick={() => setView('directory')}
            className={`hover:bg-gray-200 px-1 ${view === 'directory' ? 'font-bold' : 'text-blue-800'}`}
          >
            directory
          </button>
        </nav>
        
        <div className="ml-auto text-sm text-gray-500 hidden sm:block">
          [ global ]
        </div>
      </div>
    </header>
  );
};

export default Header;