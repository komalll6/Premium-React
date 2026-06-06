// import React from 'react';
// import suitsData from '../data/suitsData';

// function Suits() {
//   const cleanData = Array.isArray(suitsData) 
//     ? suitsData 
//     : (suitsData && Array.isArray(suitsData.suitsData) ? suitsData.suitsData : []);

//   if (cleanData.length === 0) {
//     return (
//       <div className="pt-32 text-center min-h-screen bg-white text-zinc-800">
//         <p className="tracking-widest uppercase text-sm">No items matching suit specifications found.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen pt-24 pb-24 text-zinc-900 font-sans">
// <div style={{ maxWidth: '1400px' }} className="mx-auto px-12 lg:px-20 -mt-20">        
//         {/* Left-Aligned Clean Section Header */}
//         <div className="mb-14 pl-4">
//           <h1 className="text-[22px] font-bold tracking-[0.18em] uppercase text-zinc-900">
//             Business Suiting- Raymonds, Arvind, Grado, Italian etc...
//           </h1>
//         </div>

//         {/* 4-Column Studio Grid Layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 -mb-20">
//           {cleanData.map((suit) => (
//             <div key={suit.id} className="flex flex-col items-center text-center group cursor-pointer">
              
//               {/* Image Frame */}
//              <div style={{ aspectRatio: '3 / 4' }} className="w-full bg-white overflow-hidden flex items-center justify-center relative">                <img
//                   src={suit.image}
//                   alt={suit.name}
//                   className="w-full h-full object-contain object-center mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-102"
//                   loading="lazy"
//                   onError={(e) => {
//                     e.target.onerror = null; // FIXED: Stops infinite crash loops immediately
//                     e.target.src = "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=500";
//                   }}
//                 />
//               </div>

//               {/* Fabric Label */}
//               <span className="text-[12px] font-bold tracking-[0.15em] text-zinc-900 uppercase mb-1">
//                 {suit.fabricHouse}
//               </span>

//               {/* Product Subtitle */}
//              <h3 style={{ fontSize: '11px', maxWidth: '240px', minHeight: '34px' }} 
//             className="font-normal tracking-widest text-zinc-500 uppercase leading-relaxed mb-1">                
//             {suit.name}
//               </h3>

//               {/* Price Tag */}
//             <span style={{ fontSize: '13px' }} className="font-bold tracking-wider text-zinc-900">                
//               {suit.price}
//               </span>
              
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Suits;

//responsive
import React from 'react';
import suitsData from '../data/suitsData';

function Suits() {
  const cleanData = Array.isArray(suitsData) 
    ? suitsData 
    : (suitsData && Array.isArray(suitsData.suitsData) ? suitsData.suitsData : []);

  if (cleanData.length === 0) {
    return (
      <div className="pt-32 text-center min-h-screen bg-white text-zinc-800">
        <p className="tracking-widest uppercase text-sm px-4">No items matching suit specifications found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-8 pb-14 text-zinc-900 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">        
        
        {/* Left-Aligned Clean Section Header */}
        <div className="mb-10 pl-2">
          <h1 className="text-lg sm:text-xl md:text-[22px] font-bold tracking-[0.18em] uppercase text-zinc-900 leading-snug">
            Business Suiting - Raymonds, Arvind, Grado, Italian etc...
          </h1>
        </div>

        {/* 4-Column Studio Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {cleanData.map((suit) => (
            <div key={suit.id} className="flex flex-col items-center text-center group cursor-pointer w-full">
              
              {/* Image Frame */}
              <div className="w-full aspect-[3/4] bg-white overflow-hidden flex items-center justify-center relative mb-3">                
                <img
                  src={suit.image}
                  alt={suit.name}
                  className="w-full h-full object-contain object-center mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-102"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=500";
                  }}
                />
              </div>

              {/* Fabric Label */}
              <span className="text-[12px] font-bold tracking-[0.15em] text-zinc-900 uppercase mb-1">
                {suit.fabricHouse}
              </span>

              {/* Product Subtitle */}
              <h3 className="font-normal tracking-widest text-zinc-500 uppercase leading-relaxed mb-1 text-[11px] max-w-[240px] min-h-[34px] line-clamp-2">                
                {suit.name}
              </h3>

              {/* Price Tag */}
              <span className="text-[13px] font-bold tracking-wider text-zinc-900 mt-0.5">                
                {suit.price}
              </span>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Suits;