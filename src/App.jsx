import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnimeGrid from './components/AnimeGrid';
import MobileBottomNav from './components/MobileBottomNav';
import { moviesData } from './data/moviesData';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(moviesData[0]);

  return (
    <div className="bg-background text-on-surface min-h-screen">
      <Navbar />
      <main className="pt-24 pb-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <Hero movie={selectedMovie} />
        <AnimeGrid movies={moviesData} onSelectMovie={setSelectedMovie} />
      </main>
      <MobileBottomNav />
    </div>
  );
}

export default App;
