import React from 'react';

const AnimeCard = ({ movie, onSelect }) => (
  <div className="group cursor-pointer" onClick={() => onSelect(movie)}>
    <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-3 bg-surface-container-high">
      <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={movie.image} alt={movie.movieName} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-3 left-3 bg-secondary-container/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider">
        Episode {movie.episode}
      </div>
    </div>
    <h3 className="font-headline text-sm font-bold text-on-surface group-hover:text-secondary transition-colors truncate">{movie.movieName}</h3>
  </div>
);

export default AnimeCard;
