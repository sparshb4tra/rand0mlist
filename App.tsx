import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Randomizer from './components/Randomizer';
import Directory from './components/Directory';
import InfoPage from './components/InfoPage';
import { ViewState } from './types';

// Curated list of high-availability GIFs (Giphy) to avoid hotlink blocking
const BRAINROT_GIFS = [
  "https://media.giphy.com/media/ka0pMxG6T6h9lEhlgp/giphy.gif", // Subway Surfers Gameplay
  "https://media.giphy.com/media/xT9IgusfDcqpPFzjdS/giphy.gif", // Trippy Abstract
  "https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif", // Minecraft
  "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif", // Spinning Skull
  "https://media.giphy.com/media/l0HlPtbGpcnqa0fja/giphy.gif", // Family Guy
  "https://media.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif", // Vibing Cat
  "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif", // Success Kid / Celebration
  "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif", // Cat typing
  "https://media.giphy.com/media/26tOZ42Mg6pbTUPhw/giphy.gif", // Hypnotic
];

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [bgGif, setBgGif] = useState<string | null>(null);

  const handleFunClick = () => {
    if (bgGif) {
      // If active, turn off (revert to white)
      setBgGif(null);
    } else {
      // If inactive, pick random GIF
      const randomGif = BRAINROT_GIFS[Math.floor(Math.random() * BRAINROT_GIFS.length)];
      setBgGif(randomGif);
    }
  };

  const renderMainContent = () => {
    switch (view) {
      case 'home':
        return <Randomizer />;
      case 'directory':
        return <Directory />;
      default:
        // Handles help, safety, privacy, feedback, terms
        return <InfoPage type={view} />;
    }
  };

  return (
    <div 
      className={`min-h-screen flex flex-col font-helvetica text-[#222] transition-all duration-500 ${bgGif ? 'bg-cover bg-center bg-fixed' : 'bg-white'}`}
      style={bgGif ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgGif})` } : {}}
    >
      <Header 
        view={view} 
        setView={setView} 
      />

      <main className="flex-1 w-full">
        {renderMainContent()}
      </main>

      <Footer setView={setView} onFunClick={handleFunClick} />
    </div>
  );
};

export default App;