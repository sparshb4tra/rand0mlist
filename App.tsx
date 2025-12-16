import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Randomizer from './components/Randomizer';
import Directory from './components/Directory';
import InfoPage from './components/InfoPage';
import { ViewState } from './types';

// Curated list of "brainrot" GIFs
const BRAINROT_GIFS = [
  "https://media1.tenor.com/m/t1k5Yf8sCMAAAAAd/subway-surfers.gif", // Subway surfers
  "https://media1.tenor.com/m/r8r6a1aXU8cAAAAd/minecraft-parkour.gif", // Minecraft parkour
  "https://media1.tenor.com/m/x8v1oXZCm-gAAAAd/spinning-skull-skull.gif", // Skull
  "https://media1.tenor.com/m/l1l8_h6A_iAAAAAd/metal-pipe-falling.gif", // Metal pipe
  "https://media1.tenor.com/m/C38rCqS5qO8AAAAd/family-guy-boring.gif", // Family Guy
  "https://media1.tenor.com/m/u5k6v7a5A4AAAAAd/maxwell-cat.gif", // Maxwell
  "https://media1.tenor.com/m/9m26a0hA4lAAAAAd/skibidi-toilet.gif", // Skibidi
  "https://media1.tenor.com/m/1IssyGqH4E4AAAAd/cat-vibing-cat.gif", // Vibing Cat
  "https://media1.tenor.com/m/P5lD1J8O1rAAAAAd/lobotomy-kaisen.gif", // Lobotomy
];

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [bgGif, setBgGif] = useState<string | null>(null);

  const handleFunClick = () => {
    const randomGif = BRAINROT_GIFS[Math.floor(Math.random() * BRAINROT_GIFS.length)];
    setBgGif(randomGif);
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