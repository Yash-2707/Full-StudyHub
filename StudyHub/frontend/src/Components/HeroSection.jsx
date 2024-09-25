import React from 'react';
import '../App.css'; // Ensure this CSS file contains the necessary styles

const HeroSection = () => {
  return (
    <div className="hero-container flex flex-col md:flex-row items-center pt-16 h-[70vh]">
      <div className="image-container relative md:h-[70vh] md:w-[60%] w-full h-auto flex items-center justify-center">
        <div className="moving-border-container relative">
          <div className="moving-border-piece-1 absolute inset-0 border-2 border-cyan-400 animate-spin-slow"></div>
          <div className="moving-border-piece-2 absolute inset-0 border-2 border-cyan-400 animate-reverse-spin-slow"></div>
          <img
            src="/main.jpg"
            alt="HeroSection"
            className="glow-effect h-[25rem] text-white relative z-10"
            style={{ boxShadow: '0 0 10px #3fcaca, 0 0 20px #3fcaca' }}
          />
        </div>
      </div>
      <div className="text-container flex-1 flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-5xl font-bold text-white typewriter-effect pb-10 mb-10">
          Unleash Your <span className='text-red-600'>Potential</span>
        </h1>
        <p className="text-white text-2xl pt-6 whitespace-nowrap">Start your journey today.</p>
      </div>
    </div>
  );
};

export default HeroSection;
