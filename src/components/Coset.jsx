import React from 'react';
// FIX: Matches your lowercase filename 'cosetdata.js' perfectly
import cosetData from '../data/cosetData.js'; 

function Coset() {
  const cleanData = Array.isArray(cosetData) 
    ? cosetData 
    : (cosetData && Array.isArray(cosetData.cosetData) ? cosetData.cosetData : []); 

  if (cleanData.length === 0) {
    return (
    <div className="bg-white min-h-screen pt-24 pb-14 text-zinc-900 font-sans">
        <p className="tracking-widest uppercase text-sm">No items matching knitwear specifications found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-24 pb-24 text-zinc-900 font-sans">
    <div style={{ maxWidth: '1400px' }} className="mx-auto px-12 lg:px-20 -mt-20">        
        {/* Left-Aligned Clean Section Header */}
        <div className="mb-14 pl-4">
          <h1 className="text-[22px] font-bold tracking-[0.18em] uppercase text-zinc-900">
            Co-Ord Sets Designs
          </h1>
        </div>

        {/* 4-Column Studio Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-5 -mb-20">
          {cleanData.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center group cursor-pointer">
              
              {/* Image Frame */}
          <div style={{ aspectRatio: '3 / 4' }} className="w-full bg-white overflow-hidden flex items-center justify-center relative">                
          <img
                  src={item.image}
                  alt={item.name}
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
                {item.fabricHouse}
              </span>

              {/* Product Subtitle */}
            <h3 style={{ fontSize: '11px', maxWidth: '240px', minHeight: '34px' }} 
            className="font-normal tracking-widest text-zinc-500 uppercase leading-relaxed mb-1">                
            {item.name}
              </h3>

              {/* Price Tag */}
            <span style={{ fontSize: '13px' }} className="font-bold tracking-wider text-zinc-900">    
            {item.price}
              </span>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Coset;