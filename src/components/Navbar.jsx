import React from 'react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#0c0e11]/80 backdrop-blur-2xl flex justify-between items-center px-6 md:px-12 py-4 md:py-6">
    <div className="flex items-center gap-12">
      <span className="text-xl font-black text-[#f9f9f9] tracking-tighter uppercase font-headline">Anonime</span>
      <div className="hidden md:flex gap-8 items-center">
        <a className="text-[#f9f9f9] border-b-2 border-indigo-500 pb-1 font-headline tracking-tight font-bold transition-all duration-300" href="#">Home</a>
        <a className="text-zinc-400 font-medium font-headline tracking-tight font-bold hover:text-[#f9f9f9] hover:bg-white/5 transition-all duration-300" href="#">List anime</a>
      </div>
    </div>
    <div className="flex items-center gap-6">
      <div className="relative hidden lg:block">
        <input
          className="bg-surface-container-highest border-none rounded-full px-6 py-2 w-80 text-sm focus:ring-2 focus:ring-secondary placeholder-on-surface-variant/50"
          placeholder="Search anime or movie"
          type="text"
        />
      </div>
      <div className="flex gap-4">
        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">notifications</span>
        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">bookmarks</span>
      </div>
    </div>
  </nav>
);

export default Navbar;
