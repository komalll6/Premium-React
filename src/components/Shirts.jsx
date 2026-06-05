import React from 'react';
import shirtsData from '../data/shirtsData'; 

function Shirts() {
  // Now shirtsData matches the imported variable perfectly
  const cleanData = Array.isArray(shirtsData) 
    ? shirtsData 
    : (shirtsData && Array.isArray(shirtsData.shirtsData) ? shirtsData.shirtsData : []); 

  if (cleanData.length === 0) {
    return (
      <div className="pt-32 text-center min-h-screen bg-white text-zinc-800">
        <p className="tracking-widest uppercase text-sm">No items matching shirt specifications found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-24 pb-24 text-zinc-900 font-sans">
    <div style={{ maxWidth: '1400px' }} className="mx-auto px-12 lg:px-20 -mt-20">        
        {/* Left-Aligned Clean Section Header */}
        <div className="pl-4">
          <h1 className="text-[22px] font-bold tracking-[0.18em] uppercase text-zinc-900">
            Business Suiting Designs
          </h1>
        </div>

        {/* 4-Column Studio Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 -mb-20">
          {cleanData.map((shirt) => (
            <div key={shirt.id} className="flex flex-col items-center text-center group cursor-pointer">
              
              {/* Image Frame */}
              <div className="w-full h-96 bg-white overflow-hidden flex items-center justify-center relative">
                <img
                  src={shirt.image}
                  alt={shirt.name}
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
                {shirt.fabricHouse}
              </span>

              {/* Product Subtitle */}
             <h3 style={{ fontSize: '11px', maxWidth: '240px', minHeight: '34px' }} 
            className="font-normal tracking-widest text-zinc-500 uppercase leading-relaxed mb-1">                {shirt.name}
              </h3>

              {/* Price Tag */}
            <span style={{ fontSize: '13px' }} className="font-bold tracking-wider text-zinc-900">                {shirt.price}
              </span>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shirts;