// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function Showroom() {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-[#fcfcfc] min-h-screen font-sans pt-0 animate-fadeIn">
//       {/* Showroom Header Navigation */}
//       <div className="px-16 py-6 border-b border-gray-100 flex justify-between items-center bg-white">
//         <button 
//           onClick={() => navigate('/')}
//           className="text-sm tracking-widest uppercase text-gray-500 hover:text-black transition-colors duration-300 font-medium cursor-pointer"
//         >
//           ← Back to Overview
//         </button>
//       </div>

//       {/* Main Map Block */}
//       <div className="max-w-7xl mx-auto px-16 py-16 -mt-15">
//         <div className="text-center mb-5">
//           <h3 className="text-[22px] uppercase tracking-[4px] text-[#2e3238] font-medium font-serif">
//             Where to Visit Us
//           </h3>
//           <div className="w-12 h-[2px] bg-black mx-auto mt-3 mb-4"></div>
//           <p className="text-base text-gray-900 font-medium tracking-wide">RAJHANS TAILOR SHOWROOM</p>
//           <p className="text-sm text-gray-500 mt-2 uppercase tracking-widest max-w-xl mx-auto leading-loose">
//             Shop No # 7b, Market, near Shivani Sharma Park, Model Town, Jalandhar, Punjab 144001
//           </p>
//         </div>

//         {/* Immersive Embedded Interactive Map */}
//         <div className="w-full h-[550px] shadow-xl rounded-sm border border-gray-200 overflow-hidden bg-white">
//           <iframe
//             title="Jalandhar Flagship Showroom Map"
//             src="https://maps.google.com/maps?q=SHOP%20NO%20%23%207b%2C%20Market%2C%20near%20Shivani%20Sharma%20Park%2C%20Model%20Town%2C%20Jalandhar%2C%20Punjab%20144001&t=&z=16&ie=UTF8&iwloc=&output=embed"
//             width="100%"
//             height="100%"
//             style={{ border: 0, filter: "contrast(105%) brightness(98%)" }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>

//         {/* Location & Appointment Metadata Grid */}
//         <div className="grid md:grid-cols-2 gap-12 mt-16 max-w-4xl mx-auto border-t border-gray-100 pt-12">
//           <div>
//             <h4 className="text-sm uppercase tracking-widest font-semibold text-gray-800 mb-3 font-serif">Showroom Timing Guidelines</h4>
//             <p className="text-sm text-gray-600 leading-relaxed">Monday – Saturday: 10:00 AM – 9:00 PM</p>
//             <p className="text-sm text-gray-600 leading-relaxed">Sunday Availability: 2:00 PM – 9:00 PM</p>
//           </div>
//           <div>
//             <h4 className="text-sm uppercase tracking-widest font-semibold text-gray-800 mb-3 font-serif">Personal Consultations</h4>
//             <p className="text-sm text-gray-600 leading-relaxed">
//               Walk-in wardrobe viewings are available daily. Dedicated one-on-one custom design sessions with our elite Style Advisors are prioritized via scheduling.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Showroom;

//responsive
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Showroom() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans pt-0 animate-fadeIn">
      {/* Showroom Header Navigation */}
      <div className="px-4 sm:px-8 md:px-16 py-5 border-b border-gray-100 flex justify-between items-center bg-white">
        <button 
          onClick={() => navigate('/')}
          className="text-xs sm:text-sm tracking-widest uppercase text-gray-500 hover:text-black transition-colors duration-300 font-medium cursor-pointer"
        >
          ← Back to Overview
        </button>
      </div>

      {/* Main Map Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-10 md:py-16">
        <div className="text-center mb-8">
          <h3 className="text-lg sm:text-xl md:text-[22px] uppercase tracking-[4px] text-[#2e3238] font-medium font-serif">
            Where to Visit Us
          </h3>
          <div className="w-12 h-[2px] bg-black mx-auto mt-3 mb-4"></div>
          <p className="text-sm sm:text-base text-gray-900 font-medium tracking-wide">RAJHANS TAILOR SHOWROOM</p>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 uppercase tracking-widest max-w-xl mx-auto leading-loose px-2">
            Shop No # 7b, Market, near Shivani Sharma Park, Model Town, Jalandhar, Punjab 144001
          </p>
        </div>

        {/* Immersive Embedded Interactive Map */}
        <div className="w-full h-[320px] sm:h-[420px] md:h-[550px] shadow-xl rounded-sm border border-gray-200 overflow-hidden bg-white">
          <iframe
            title="Jalandhar Flagship Showroom Map"
            src="https://maps.google.com/maps?q=SHOP%20NO%20%23%207b%2C%20Market%2C%20near%20Shivani%20Sharma%20Park%2C%20Model%20Town%2C%20Jalandhar%2C%20Punjab%20144001&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "contrast(105%) brightness(98%)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Location & Appointment Metadata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 max-w-4xl mx-auto border-t border-gray-100 pt-10">
          <div className="text-center md:text-left">
            <h4 className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-gray-800 mb-2.5 font-serif">Showroom Timing Guidelines</h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Monday – Saturday: 10:00 AM – 9:00 PM</p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Sunday Availability: 2:00 PM – 9:00 PM</p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-gray-800 mb-2.5 font-serif">Personal Consultations</h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Walk-in wardrobe viewings are available daily. Dedicated one-on-one custom design sessions with our elite Style Advisors are prioritized via scheduling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showroom;