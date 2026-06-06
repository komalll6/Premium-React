// // src/components/Blazer.jsx
// import React from 'react';
// import blazerData from '../data/blazerData.js'; 

// function Blazer() {
//   if (!blazerData || blazerData.length === 0) {
//     return (
//       <div className="pt-32 text-center min-h-screen bg-white text-zinc-800">
//         <p className="tracking-widest uppercase text-sm">No items matching blazer specifications found.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen pt-20 pb-24 text-zinc-900 font-sans">
// <div style={{ maxWidth: '1400px' }} className="mx-auto px-12 lg:px-20 -mt-20">        
//         {/* Left-Aligned Elegant Title Header */}
//         <div className="mb-14 pl-4">
//           <h1 className="text-[22px] font-bold tracking-[0.18em] uppercase text-zinc-900  -mb-5  mt-5">
//             Cool Weather Blazers Designs
//           </h1>
//         </div>

//         {/* 4-Column Ghost Mannequin Grid Layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-5 -mb-20">
//           {blazerData.map((blazer) => (
//             <div key={blazer.id} className="flex flex-col items-center text-center group cursor-pointer">
              
//               {/* Isolated Studio White Background Frame */}
//          <div style={{ aspectRatio: '3 / 4' }} className="w-full bg-white overflow-hidden flex items-center justify-center relative">                <img
//                   src={blazer.image}
//                   alt={blazer.name}
//                   className="w-full h-full object-contain object-center mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-102"
//                   loading="lazy"
//                   onError={(e) => {
//                     e.target.onerror = null; // FIXED: Stops infinite crash loops immediately
//                     e.target.src = "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=500";
//                   }}
//                 />
//               </div>

//               {/* Fabric House Label */}
//               <span className="text-[12px] font-bold tracking-[0.15em] text-zinc-900 uppercase mb-1">
//                 {blazer.fabricHouse}
//               </span>

//               {/* Blazer Product Subtitle */}
//             <h3 style={{ fontSize: '11px', maxWidth: '240px', minHeight: '34px' }} className="font-normal tracking-widest text-zinc-500 uppercase leading-relaxed mb-1">                {blazer.name}
//               </h3>

//               {/* Price Tag */}
//            <span style={{ fontSize: '13px' }} className="font-bold tracking-wider text-zinc-900">                
//             {blazer.price}
//               </span>
              
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Blazer;

//responsive
import React from 'react';
import blazerData from '../data/blazerData.js'; // अपनी रिस्पेक्टिव डेटा फाइल इम्पोर्ट करें

function Blazer() {
  if (!blazerData || blazerData.length === 0) {
    return (
      <div className="pt-32 text-center min-h-screen bg-white">
        <p className="tracking-widest uppercase text-xs sm:text-sm text-zinc-500">No items matching specifications found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-24 pb-14 text-zinc-900 font-sans">
    <div style={{ maxWidth: '1400px' }} className="mx-auto px-12 lg:px-20 -mt-20">        
        {/* Left-Aligned Clean Section Header */}
        <div className="mb-14 pl-4">
          <h1 className="text-[22px] font-bold tracking-[0.18em] uppercase text-zinc-900">
            Cool Weather Collection Designs
          </h1>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {blazerData.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center group cursor-pointer w-full">
              
              {/* Image Frame */}
              <div className="w-full aspect-[3/4] bg-gray-50 overflow-hidden flex items-center justify-center relative mb-3">                
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=500";
                  }}
                />
              </div>

              {/* Details */}
              <span className="text-[11px] font-bold tracking-[0.12em] text-zinc-900 uppercase mb-1">
                {item.fabricHouse}
              </span>

              <h3 className="text-[11px] max-w-[220px] tracking-widest text-zinc-500 uppercase min-h-[32px] line-clamp-2">                
                {item.name}
              </h3>

              <span className="text-xs font-bold tracking-wider text-zinc-900 mt-1">                
                {item.price}
              </span>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blazer;