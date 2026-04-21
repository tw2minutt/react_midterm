import React from 'react';

const Hero = ({ movie }) => (
  <>
    <span className="block text-primary font-bold tracking-widest text-lg md:text-xl mb-[20px] uppercase">Explore</span>
    <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-[20px] line-clamp-3">
      What are you gonna watch today ?
    </p>
    <section className="relative w-full mb-16 overflow-hidden rounded-2xl group">
      <div className="relative h-[400px] md:h-[500px] w-full bg-surface-container-low overflow-hidden">
        <img
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          src={movie.image}
          alt={movie.movieName}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 max-w-2xl">
          <h1 className="font-headline text-2xl md:text-5xl font-black mb-4 tracking-tighter text-on-surface">
            {movie.movieName}
          </h1>
          <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed mb-8 line-clamp-4 md:line-clamp-none max-w-xl">
            {movie.description}
          </p>
          <div className="flex gap-4">
            <button className="bg-primary text-on-primary-container font-bold px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-primary-dim transition-all active:scale-95">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Hero;
