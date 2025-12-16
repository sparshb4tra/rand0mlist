import React, { useState } from 'react';
import { getRandomSite } from '../data/sites';

const Randomizer: React.FC = () => {
  const [loading, setLoading] = useState(false);
  
  const handleShuffle = () => {
    setLoading(true);
    setTimeout(() => {
      const site = getRandomSite();
      window.open(site.url, '_blank');
      setLoading(false);
    }, 300);
  };

  return (
    <div className="w-full max-w-[600px] mx-auto mt-10 p-4 bg-[#f0f0f0] border border-gray-300 font-helvetica">
      <div className="bg-[#eeeeee] border-b border-gray-300 p-1 mb-8">
        <span className="font-bold text-sm">reply to: </span>
        <a href="#" className="text-blue-700 text-sm hover:underline">randomness</a>
      </div>

      <div className="text-center py-12">
        <h2 className="font-bold text-xl mb-8 text-[#222]">
          random website generator
        </h2>
        
        <div className="border border-gray-400 bg-white p-6 inline-block shadow-sm">
          <p className="mb-6 text-sm">Push button to open random url in new tab.</p>
          <button
            onClick={handleShuffle}
            disabled={loading}
            className="bg-[#eeeeee] border border-gray-400 text-black px-6 py-2 text-base font-bold hover:bg-[#ddd] active:bg-[#ccc]"
          >
            {loading ? 'loading...' : 'shuffle >'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Randomizer;