import React from 'react';

const MobileBottomNav = () => (
  <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-8 pt-3 bg-[#0c0e11]/90 backdrop-blur-xl shadow-[0_-4px_40px_rgba(0,0,0,0.5)] rounded-t-2xl">
    <div className="flex flex-col items-center justify-center bg-indigo-500/20 text-[#f9f9f9] rounded-xl px-5 py-2 scale-110 duration-200">
      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
      <span className="font-headline text-[10px] font-bold uppercase tracking-widest mt-1">Home</span>
    </div>
    <div className="flex flex-col items-center justify-center text-zinc-500 px-5 py-2 hover:text-indigo-300 transition-colors">
      <span className="material-symbols-outlined">explore</span>
      <span className="font-headline text-[10px] font-bold uppercase tracking-widest mt-1">Explore</span>
    </div>
    <div className="flex flex-col items-center justify-center text-zinc-500 px-5 py-2 hover:text-indigo-300 transition-colors">
      <span className="material-symbols-outlined">video_library</span>
      <span className="font-headline text-[10px] font-bold uppercase tracking-widest mt-1">Library</span>
    </div>
    <div className="flex flex-col items-center justify-center text-zinc-500 px-5 py-2 hover:text-indigo-300 transition-colors">
      <span className="material-symbols-outlined">person</span>
      <span className="font-headline text-[10px] font-bold uppercase tracking-widest mt-1">Profile</span>
    </div>
  </nav>
);

export default MobileBottomNav;
