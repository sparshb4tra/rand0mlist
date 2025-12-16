import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Randomizer from './components/Randomizer';
import Directory from './components/Directory';
import InfoPage from './components/InfoPage';
import { ViewState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

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
    <div className="min-h-screen flex flex-col font-helvetica bg-white text-[#222]">
      <Header 
        view={view} 
        setView={setView} 
      />

      <main className="flex-1 w-full">
        {renderMainContent()}
      </main>

      <Footer setView={setView} />
    </div>
  );
};

export default App;