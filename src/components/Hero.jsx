// function Hero() {
//   return (
//     // The main container is relative, taking up the full screen height minus any fixed header constraints
//     <div className="relative h-[calc(100vh-80px)] w-full overflow-hidden bg-black text-white flex items-center justify-center">
      
//       {/* 📸 Background Image Layer */}
//       <img 
//         src="https://i.pinimg.com/1200x/f0/0e/0a/f00e0a05dadcdc893a0397804a4b682f.jpg" 
//         alt="Luxury Tailoring background" 
//         className="absolute top-0 left-0 w-full h-full object-cover z-0 object-center pointer-events-none" 
//       />

//       {/* 🖤 Muted Dark Tint Overlay (Ensures your white text is highly readable) */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10 pointer-events-none" />

//       {/* 🏷️ Foreground Content Layer (Centered over the image) */}
//       <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center">
        
//         {/* Subtle Luxury Brand Tagline */}
//         <p className="text-xs uppercase tracking-[0.4em] mb-4 text-zinc-300 font-light">
//           The Autumn / Winter Collection
//         </p>

//         {/* Correctly Positioned, Centered Main Heading */}
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[0.15em] leading-tight md:leading-snug uppercase text-center">
//         OUR BEST Brands- <strong>Raymonds, Arvind, Grado, Italian etc...</strong><br className="hidden sm:inline" /> LOOKS OF THE SEASON
//         </h1>

//         {/* Luxury Call to Action Button
//         <button className=" cursor-pointer mt-10 px-8 py-3 border border-white text-xs uppercase tracking-[0.25em] bg-transparent text-white hover:bg-white hover:text-black transition-all duration-300 font-light">
//           Explore Best Collection
//         </button> */}

//       </div>

//     </div>
//   );
// }

// export default Hero;

//responsive
function Hero() {
  return (
    <div className="relative h-[calc(100vh-80px)] w-full overflow-hidden bg-black text-white flex items-center justify-center">
      <img 
        src="https://i.pinimg.com/1200x/f0/0e/0a/f00e0a05dadcdc893a0397804a4b682f.jpg" 
        alt="Luxury Tailoring background" 
        className="absolute top-0 left-0 w-full h-full object-cover z-0 object-center pointer-events-none" 
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/45 z-10 pointer-events-none" />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center justify-center">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] mb-4 text-zinc-300 font-light">
          The Autumn / Winter Collection
        </p>

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[0.12em] leading-tight md:leading-snug uppercase text-center">
          OUR BEST Brands-<br className="block sm:hidden"/> <strong className="font-normal text-amber-100">Raymonds, Arvind, Grado, Italian etc...</strong><br /> LOOKS OF THE SEASON
        </h1>
      </div>
    </div>
  );
}

export default Hero;