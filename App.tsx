import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Randomizer from './components/Randomizer';
import Directory from './components/Directory';
import InfoPage from './components/InfoPage';
import { ViewState } from './types';

// Curated list of looping GIFs (fallback if Tenor API is unavailable)
const FALLBACK_GIFS = [
  "https://media.giphy.com/media/ka0pMxG6T6h9lEhlgp/giphy.gif",
  "https://media.giphy.com/media/xT9IgusfDcqpPFzjdS/giphy.gif",
  "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif",
  "https://media.giphy.com/media/26tOZ42Mg6pbTUPhw/giphy.gif",
];

// Search terms for the "fun" button - picks random term each time
const FUN_SEARCH_TERMS = [
  // Classic brainrot
  'brainrot', 'sigma', 'skibidi', 'rizz', 'gyatt', 'ohio',
  'fanum tax', 'mewing', 'chad', 'gigachad',
  // Gaming
  'subway surfers', 'minecraft parkour', 'geometry dash', 'counter strike', 'csgo', 'silver', 'brawlhalla', 'among us',
  // Shows
  'family guy funny', 'peter griffin', 'spongebob meme',
  // Anime
  'anime fight scene', 'dragon ball z', 'goku', 'vegeta',
  'naruto run', 'one punch man', 'jojo bizarre', 'attack on titan',
  'demon slayer', 'my hero academia', 'anime explosion',
  // Misc viral
  'cat meme', 'doge', 'dancing meme', 'wholesome meme'

];

// Tenor API config - key loaded from environment variable
const TENOR_API_KEY = import.meta.env.VITE_TENOR_API_KEY || '';
const TENOR_CLIENT_KEY = 'randomlist';

const getRandomGif = async (): Promise<string | null> => {
  if (!TENOR_API_KEY) return null;
  
  try {
    const term = FUN_SEARCH_TERMS[Math.floor(Math.random() * FUN_SEARCH_TERMS.length)];
    const url = `https://tenor.googleapis.com/v2/search?q=${encodeURIComponent(term)}&key=${TENOR_API_KEY}&client_key=${TENOR_CLIENT_KEY}&limit=20`;

    const res = await fetch(url);
    if (!res.ok) return null;
    
    const data = await res.json();
    const results = data.results ?? [];
    if (results.length === 0) return null;

    const chosen = results[Math.floor(Math.random() * results.length)];
    const media = chosen.media_formats || {};
    return media.gif?.url || media.tinygif?.url || null;
  } catch {
    return null;
  }
};

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [bgGif, setBgGif] = useState<string | null>(null);

  const handleFunClick = async () => {
    if (bgGif) {
      setBgGif(null);
      return;
    }

    const tenorGif = await getRandomGif();
    const fallbackGif = FALLBACK_GIFS[Math.floor(Math.random() * FALLBACK_GIFS.length)];
    setBgGif(tenorGif || fallbackGif);
  };

  const renderMainContent = () => {
    switch (view) {
      case 'directory':
        return <Directory />;
      default:
        // Handles help, safety, privacy, feedback, terms
        return <InfoPage type={view} />;
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-helvetica text-[#222] transition-all duration-500 ${
        bgGif ? 'bg-cover bg-center bg-fixed' : 'bg-white'
      }`}
      style={
        bgGif
          ? {
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bgGif})`,
            }
          : {}
      }
    >
      <Header view={view} setView={setView} />

      <div className="flex-1">
        {view === 'home' && <Randomizer />}

        {view !== 'home' && (
          <main className="w-full">{renderMainContent()}</main>
        )}
      </div>

      <Footer 
        setView={setView} 
        onFunClick={handleFunClick} 
        hasBgGif={!!bgGif}
      />
    </div>
  );
};

export default App;