function Hero() {
  return (
    // The main container is relative, taking up the full screen height minus any fixed header constraints
    <div className="relative h-[calc(100vh-80px)] w-full overflow-hidden bg-black text-white flex items-center justify-center">
      
      {/* 📸 Background Image Layer */}
      <img 
        src="https://i.pinimg.com/1200x/f0/0e/0a/f00e0a05dadcdc893a0397804a4b682f.jpg" 
        alt="Luxury Tailoring background" 
        className="absolute top-0 left-0 w-full h-full object-cover z-0 object-center pointer-events-none" 
      />

      {/* 🖤 Muted Dark Tint Overlay (Ensures your white text is highly readable) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10 pointer-events-none" />

      {/* 🏷️ Foreground Content Layer (Centered over the image) */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center">
        
        {/* Subtle Luxury Brand Tagline */}
        <p className="text-xs uppercase tracking-[0.4em] mb-4 text-zinc-300 font-light">
          The Autumn / Winter Collection
        </p>

        {/* Correctly Positioned, Centered Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[0.15em] leading-tight md:leading-snug uppercase text-center">
        OUR BEST Brands- <strong>Raymonds, Arvind, Grado, Italian etc...</strong><br className="hidden sm:inline" /> LOOKS OF THE SEASON
        </h1>

        {/* Luxury Call to Action Button
        <button className=" cursor-pointer mt-10 px-8 py-3 border border-white text-xs uppercase tracking-[0.25em] bg-transparent text-white hover:bg-white hover:text-black transition-all duration-300 font-light">
          Explore Best Collection
        </button> */}

      </div>

    </div>
  );
}

export default Hero;

// import React from 'react';
// import video from './assets/hero-video.mp4';

// function Hero() {
//   return (
//     <div className="relative h-screen w-full overflow-hidden bg-black text-white flex items-center justify-center">
      
//       {/* 🎥 Background Video Element */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="auto"
//         className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
//       >
//         {/* A live, high-end production menswear tailoring video link */}
//         <source 
//           src={video} 
//           type="video/mp4" 
//         />
//         Your browser does not support the video tag.
//       </video>

//       {/* 🖤 Premium Dark Overlay Tint */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black/45 z-10 pointer-events-none" />

//       {/* 🏷️ Foreground Hero Content */}
//       <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        
//         {/* Subtle Brand Tagline */}
//         <p className="text-xs uppercase tracking-[0.4em] mb-4 text-zinc-300 font-light">
//           The Autumn / Winter Collection
//         </p>

//         {/* Hero Main Heading */}
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[0.15em] leading-tight md:leading-snug uppercase">
//           Discover Our 5 Best <br className="hidden sm:inline" /> Looks of the Season
//         </h1>

//         {/* Elegant Luxury Call to Action Button */}
//         <button className="mt-10 px-8 py-3 border border-white text-xs uppercase tracking-[0.25em] bg-transparent text-white hover:bg-white hover:text-black transition-all duration-300 font-light">
//           Explore Lookbook
//         </button>

//       </div>

//       {/* 🧭 Micro Scroll Indicator */}
//       <div className="absolute bottom-8 left-0 right-0 mx-auto text-center z-20 animate-pulse hidden md:block">
//         <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-light">
//           Scroll to Explore
//         </span>
//       </div>

//     </div>
//   );
// }

// export default Hero;