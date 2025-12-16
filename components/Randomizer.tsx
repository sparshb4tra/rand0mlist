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
    <div className="w-full max-w-[720px] mx-auto mt-6 p-6 bg-[#f0f0f0] border border-gray-300 font-helvetica">
      <div className="text-center py-8">
        <h2 className="font-bold text-3xl mb-6 text-[#222]">
          random website portal
        </h2>
        
        <div className="border border-gray-400 bg-white p-8 inline-block shadow-sm">
          <p className="mb-6 text-lg">Push button to open a random site in a new tab.</p>
          <button
            onClick={handleShuffle}
            disabled={loading}
            className="bg-[#eeeeee] border border-gray-400 text-black px-8 py-3 text-xl font-bold hover:bg-[#ddd] active:bg-[#ccc]"
          >
            {loading ? 'loading...' : 'shuffle >'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Randomizer;