// import React from 'react';
// import { Link } from 'react-router-dom'; // 1. Import Link from React Router

// function Lookbook() {
//   const lookbooks = [
//     {
//       id: 1,
//       title: 'View Formal Lookbook',
//       path: '/formal-lookbook', // Unique page URL path
//       image: 'https://i.pinimg.com/736x/55/35/bf/5535bf202bce051ffcb53301faa0ca11.jpg',
//       bgColor: 'bg-[#121c22]',
//     },
//     {
//       id: 2,
//       title: 'View Casual Lookbook',
//       path: '/casual-lookbook', // Unique page URL path
//       image: 'https://i.pinimg.com/736x/bc/41/81/bc4181ea9a80552b158b096cdb82d068.jpg',
//       bgColor: 'bg-[#5c4133]',
//     },
//     {
//       id: 3,
//       title: 'View Business Lookbook',
//       path: '/business-lookbook', // Unique page URL path
//       image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop',
//       bgColor: 'bg-[#374e5d]',
//     },
//   ];

//   return (
//     <section className="bg-[#f3ede4] py-10 px-6 md:px-12 lg:px-24">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Responsive 3-Column Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
//           {lookbooks.map((item) => (
//             <div key={item.id} className="flex flex-col items-center">
              
//               {/* Colored Card Container (Perfect Square) */}
//               <div className={`${item.bgColor} w-full aspect-square flex items-center justify-center p-8 lg:p-12 shadow-sm transition-transform duration-300 hover:scale-[1.01]`}>
                
//                 {/* Image Frame Wrapper */}
//                 <div className="relative w-full h-full overflow-hidden bg-zinc-900">
//                   {/* Lookbook Cover Photo */}
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover object-top"
//                   />
//                 </div>

//               </div>

//               {/* 🔄 Swapped 'a' for React Router 'Link' wrapper */}
//               <Link
//                 to={item.path}
//                 className="mt-6 text-[#070707] text-sm tracking-wider font-medium border-b border-[#1c1c1c] pb-0.5 hover:text-zinc-500 hover:border-zinc-500 transition-colors duration-200 capitalize"
//               >
//                 {item.title}
//               </Link>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Lookbook;

//responsive
import { Link } from 'react-router-dom';

function Lookbook() {
  const lookbooks = [
    { id: 1, title: 'View Formal Lookbook', path: '/formal-lookbook', image: 'https://i.pinimg.com/736x/55/35/bf/5535bf202bce051ffcb53301faa0ca11.jpg', bgColor: 'bg-[#121c22]' },
    { id: 2, title: 'View Casual Lookbook', path: '/casual-lookbook', image: 'https://i.pinimg.com/736x/bc/41/81/bc4181ea9a80552b158b096cdb82d068.jpg', bgColor: 'bg-[#5c4133]' },
    { id: 3, title: 'View Business Lookbook', path: '/business-lookbook', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600', bgColor: 'bg-[#374e5d]' },
  ];

  return (
    <section className="bg-[#f3ede4] py-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {lookbooks.map((item) => (
            <div key={item.id} className="flex flex-col items-center w-full">
              
              <div className={`${item.bgColor} w-full aspect-square flex items-center justify-center p-6 sm:p-8 lg:p-12 shadow-sm transition-transform hover:scale-[1.01]`}>
                <div className="relative w-full h-full overflow-hidden bg-zinc-900">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover object-top" />
                </div>
              </div>

              <Link
                to={item.path}
                className="mt-4 text-[#070707] text-xs sm:text-sm tracking-wider font-medium border-b border-[#1c1c1c] pb-0.5 hover:text-zinc-500 hover:border-zinc-500 transition-colors capitalize"
              >
                {item.title}
              </Link>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Lookbook;