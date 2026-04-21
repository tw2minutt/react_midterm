import React from 'react';
import AnimeCard from './AnimeCard';

const AnimeGrid = ({ movies, onSelectMovie }) => {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="font-headline text-2xl md:text-3xl font-extrabold tracking-tight">New Release</h2>
          <p className="text-on-surface-variant text-sm mt-1">Discover the latest episodes from your favorite series</p>
        </div>
        <button className="text-secondary font-bold text-sm hover:underline">View All</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {movies.map((movie) => (
          <AnimeCard key={movie.id} movie={movie} onSelect={onSelectMovie} />
        ))}
      </div>
    </section>
  );
};

export default AnimeGrid;
