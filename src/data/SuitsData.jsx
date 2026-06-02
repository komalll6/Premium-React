// import React from 'react';
// // Added explicit .js extension to help Vite resolve the path perfectly
// import { suitsData } from './suitsData.jsx';

// function Suits() {
//   console.log("Rendering Suits component, data structure: ", suitsData);

//   if (!suitsData || suitsData.length === 0) {
//     return (
//       <div className="pt-32 text-center min-h-screen bg-white text-zinc-800">
//         <p className="tracking-widest uppercase text-sm">No items matching product data specifications found.</p>
//         <p className="text-xs text-zinc-400 mt-2">Verify array population inside src/data/suitsData.js</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen pt-12 pb-24 text-zinc-900">
//       <div className="text-center mb-16">
//         <h1 className="text-xl md:text-2xl font-semibold tracking-[0.25em] uppercase font-serif text-zinc-900">
//           Business Suiting
//         </h1>
//         <div className="w-12 h-[2px] bg-zinc-400 mx-auto mt-4"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 md:px-12">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
//           {suitsData.map((suit) => (
//             <div key={suit.id} className="flex flex-col items-center group cursor-pointer">
              
//               <div className="w-full h-[400px] bg-zinc-100 overflow-hidden flex items-center justify-center p-2 mb-6 transition-all duration-300 group-hover:bg-zinc-200 relative">
//                 {suit.image ? (
//                   <img
//                     src={suit.image}
//                     alt={suit.name}
//                     className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
//                     onError={(e) => {
//                       e.target.style.opacity = '0';
//                     }}
//                   />
//                 ) : (
//                   <span className="text-[11px] uppercase tracking-widest text-zinc-400">Preview Unavailable</span>
//                 )}
//               </div>

//               <span className="text-[11px] font-bold tracking-[0.2em] text-zinc-800 uppercase text-center mb-1">
//                 {suit.fabricHouse || "PREMIUM TAILORING"}
//               </span>

//               <h3 className="text-[12px] font-normal tracking-[0.15em] text-zinc-500 uppercase text-center min-h-[32px] px-2 leading-relaxed">
//                 {suit.name || "UNNAMED SELECTION ITEM"}
//               </h3>

//               <span className="text-[13px] font-medium tracking-[0.1em] text-zinc-900 mt-2">
//                 {suit.price || "Price Upon Request"}
//               </span>
              
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Suits;

import React from 'react';
// Changed path to correctly target the raw js data array file 
import { suitsData } from './suitsData.js'; 
function Suits() {
  console.log("Rendering Suits component, data structure: ", suitsData);

  if (!suitsData || suitsData.length === 0) {
    return (
      <div className="pt-32 text-center min-h-screen bg-white text-zinc-800">
        <p className="tracking-widest uppercase text-sm">No items matching product data specifications found.</p>
        <p className="text-xs text-zinc-400 mt-2">Verify array population inside src/data/suitsData.js</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-12 pb-24 text-zinc-900">
      <div className="text-center mb-16">
        <h1 className="text-xl md:text-2xl font-semibold tracking-[0.25em] uppercase font-serif text-zinc-900">
          Business Suiting
        </h1>
        <div className="w-12 h-[2px] bg-zinc-400 mx-auto mt-4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
          {suitsData.map((suit) => (
            <div key={suit.id} className="flex flex-col items-center group cursor-pointer">
              
              <div className="w-full h-[400px] bg-zinc-100 overflow-hidden flex items-center justify-center p-2 mb-6 transition-all duration-300 group-hover:bg-zinc-200 relative">
                {suit.image ? (
                  <img
                    src={suit.image}
                    alt={suit.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.opacity = '0';
                    }}
                  />
                ) : (
                  <span className="text-[11px] uppercase tracking-widest text-zinc-400">Preview Unavailable</span>
                )}
              </div>

              <span className="text-[11px] font-bold tracking-[0.2em] text-zinc-800 uppercase text-center mb-1">
                {suit.fabricHouse || "PREMIUM TAILORING"}
              </span>

              <h3 className="text-[12px] font-normal tracking-[0.15em] text-zinc-500 uppercase text-center min-h-[32px] px-2 leading-relaxed">
                {suit.name || "UNNAMED SELECTION ITEM"}
              </h3>

              <span className="text-[13px] font-medium tracking-[0.1em] text-zinc-900 mt-2">
                {suit.price || "Price Upon Request"}
              </span>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Suits;