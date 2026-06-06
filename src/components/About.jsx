// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function About() {
//   const navigate = useNavigate();

//   return (
//     <section id="about" className="relative mt-5 px-16 scroll-mt-24">
//       <div className="mx-auto bg-[#f8f6f6] shadow-gray-500 shadow-lg">

//         {/* Heading */}
//         <div className="pt-5 pb-5">
//           <h2 className="text-center text-[25px] uppercase tracking-wider text-[#2e3238] font-sans-serif">
//             Experience Knot Standard
//           </h2>
//         </div>

//         {/* Top Border */}
//         <div className="border-t border-gray-300 mx-8 -mt-2"></div>

//         {/* Features */}
//         <div className="grid md:grid-cols-3 py-12 -mt-6">
//           <div className="px-12 text-center">
//             <h3 className="text-[20px] uppercase font-sans-serif font-serif text-gray-500 mb-3">
//               100% Custom Clothing
//             </h3>
//             <p className="text-[14px] text-gray-600 leading-relaxed">
//               Our custom clothing is made for your exact shape, size,
//               and preferences. It's time to get your true custom fit,
//               every single time.
//             </p>
//           </div>

//           <div className="px-12 text-center md:border-l md:border-r border-gray-300">
//             <h3 className="text-[20px] uppercase font-sans-serif font-serif text-gray-500 mb-3">
//               Luxury Fabrics
//             </h3>
//             <p className="text-[14px] text-gray-600 leading-relaxed">
//               We use curated fabrics from the best mills in the world,
//               including <strong>Raymonds, Arvind, Grado, and Italian mills</strong>. Our expert Style Advisors will help you find the perfect fabric for your custom clothing.
//             </p>
//           </div>

//           <div className="px-12 text-center">
//             <h3 className="text-[20px] uppercase font-sans-serif font-serif text-gray-500 mb-3">
//               Unrivaled Service
//             </h3>
//             <p className="text-[14px] text-gray-600 leading-relaxed">
//               Precise measurements, endless style advice, and peerless
//               client service from anywhere: our expert Style Advisors do it all.
//             </p>
//           </div>
//         </div>

//         {/* Bottom Border */}
//         <div className="border-t border-gray-300 mx-5 -mb-10"></div>

//         {/* Button */}
//         <div className="flex justify-center py-14 pb-5">
//           <button 
//             onClick={() => navigate('/showrooms')}
//             className="border-2 border-black px-20 py-3 uppercase tracking-[5px] font-semibold text-lg hover:bg-black hover:text-white transition-all duration-300"
//   >
//             Start Your Custom
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default About;

//responsive
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <section id="about" className="relative mt-8 px-4 sm:px-8 lg:px-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto bg-[#f8f6f6] shadow-md border border-gray-100 rounded-sm">

        <div className="py-6">
          <h2 className="text-center text-xl sm:text-2xl uppercase tracking-widest text-[#2e3238]">
            Experience Knot Standard
          </h2>
        </div>

        <div className="border-t border-gray-200 mx-6 sm:mx-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 px-6 sm:px-12">
          
          <div className="text-center">
            <h3 className="text-[18px] uppercase font-serif text-gray-500 mb-2">100% Custom Clothing</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm mx-auto">
              Our custom clothing is made for your exact shape, size, and preferences. It's time to get your true custom fit, every single time.
            </p>
          </div>

          <div className="text-center md:border-l md:border-r border-gray-200 md:px-4">
            <h3 className="text-[18px] uppercase font-serif text-gray-500 mb-2">Luxury Fabrics</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm mx-auto">
              We use curated fabrics from the best mills in the world, including <strong>Raymonds, Arvind, Grado, and Italian mills</strong>.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-[18px] uppercase font-serif text-gray-500 mb-2">Unrivaled Service</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm mx-auto">
              Precise measurements, endless style advice, and peerless client service from anywhere: our expert Style Advisors do it all.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mx-6 sm:mx-12"></div>

        <div className="flex justify-center py-10">
          <button 
            onClick={() => navigate('/showrooms')}
            className="border border-black px-10 sm:px-16 py-3 uppercase tracking-[3px] text-xs sm:text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300"
          >
            Start Your Custom
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;