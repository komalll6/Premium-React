// import React from 'react';
// import { Link } from 'react-router-dom';

// function Products() {
//   const products = [
//     {
//       category: "Menswear",
//       title: "OUTERWEAR",
//       image: "https://i.pinimg.com/736x/b9/4e/b8/b94eb8d95a8f816577c3df591d8c4992.jpg",
//       path: "/outerwear",
//     },
//     {
//       category: "Womenswear",
//       title: "BLAZERS",
//       image: "https://i.pinimg.com/736x/5e/b4/c2/5eb4c29787bb0fa6d07343571e2b3307.jpg",
//       path: "/womens-blazers",
//     },
//     {
//       category: "Menswear",
//       title: "FORMAL",
//       image: "https://i.pinimg.com/736x/13/95/20/13952049adf3f8e12d4e9e7f66bae68f.jpg",
//       path: "/formal-lookbook",
//     },
//     {
//       category: "Menswear",
//       title: "SUITS",
//       image: "https://i.pinimg.com/1200x/0f/1c/e5/0f1ce5a0cd950ef33893c006a35b0fff.jpg",
//       path: "/suits",
//     },
//     {
//       category: "Womenswear",
//       title: "CO-ORD SETS",
//       image: "https://i.pinimg.com/1200x/01/d2/f5/01d2f5e682835ba952fc54bca1aedc64.jpg",
//       path: "/co-ord-sets",
//     },
//   ];

//   const Card = ({ item, height }) => (
//     <Link
//       to={item.path}
//       className={`relative ${height} overflow-hidden group cursor-pointer block`}
//     >
//       <img
//         src={item.image}
//         alt={item.title}
//         className="
//           w-full
//           h-full
//           object-cover
//           object-top
//           transition-all
//           duration-700
//           group-hover:scale-105
//         "
//       />
//       <div className="absolute inset-0 bg-black/15"></div>
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
//         <p className="text-[15px] md:text-[18px] font-light mb-2">
//           {item.category}
//         </p>
//         <h2
//           className="
//             font-['Oswald']
//             text-[28px]
//             md:text-[36px]
//             lg:text-[48px]
//             font-light
//             uppercase
//             leading-[0.9]
//             text-center
//             w-full
//             px-4
//             mx-auto
//             tracking-[1px]
//           "
//         >
//           {item.title === "CO-ORD SETS" ? (
//             <>
//               CO-ORD
//               <br />
//               SETS
//             </>
//           ) : (
//             item.title
//           )}
//         </h2>
//       </div>
//     </Link>
//   );

//   return (
//     <section className="bg-[#f5f5f5] py-10">
//       <div style={{ maxWidth: '1180px' }} className="mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-0.5">
//           {/* Left Column */}
//           <div className="grid grid-cols-1 gap-0.5"> {/* Corrected: simplified to stack items */}
//             <Card
//               item={products[0]}
//               height="h-[260px]"
//             />
//             <Card
//               item={products[2]}
//               height="h-[320px]"
//             />
//           </div>

//           {/* Center Column */}
//           <div className="grid grid-cols-1 gap-0.5"> {/* Consistent stacking structure */}
//             <Card
//               item={products[1]}
//               height="h-[290px]"
//             />
//             <Card
//               item={products[3]}
//               height="h-[290px]"
//             />
//           </div>

//           {/* Right Column */}
//           <div className="grid grid-cols-1"> {/* Clean single container */}
//             <Card
//               item={products[4]}
//               height="h-[582px]"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Products;

//responsive
import { Link } from 'react-router-dom';

function Products() {
  const products = [
    { category: "Menswear", title: "OUTERWEAR", image: "https://i.pinimg.com/736x/b9/4e/b8/b94eb8d95a8f816577c3df591d8c4992.jpg", path: "/outerwear" },
    { category: "Womenswear", title: "BLAZERS", image: "https://i.pinimg.com/736x/5e/b4/c2/5eb4c29787bb0fa6d07343571e2b3307.jpg", path: "/womens-blazers" },
    { category: "Menswear", title: "FORMAL", image: "https://i.pinimg.com/736x/13/95/20/13952049adf3f8e12d4e9e7f66bae68f.jpg", path: "/formal-lookbook" },
    { category: "Menswear", title: "SUITS", image: "https://i.pinimg.com/1200x/0f/1c/e5/0f1ce5a0cd950ef33893c006a35b0fff.jpg", path: "/suits" },
    { category: "Womenswear", title: "CO-ORD SETS", image: "https://i.pinimg.com/1200x/01/d2/f5/01d2f5e682835ba952fc54bca1aedc64.jpg", path: "/co-ord-sets" },
  ];

  const Card = ({ item, heightClass }) => (
    <Link to={item.path} className={`relative ${heightClass} w-full overflow-hidden group block`}>
      <img src={item.image} alt={item.title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <p className="text-xs sm:text-sm font-light tracking-widest mb-1 opacity-90">{item.category}</p>
        <h2 className="font-sans text-xl sm:text-2xl md:text-3xl font-light uppercase tracking-[2px]">
          {item.title === "CO-ORD SETS" ? <>CO-ORD<br />SETS</> : item.title}
        </h2>
      </div>
    </Link>
  );

  return (
    <section className="bg-[#f5f5f5] py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          
          {/* Left Column */}
          <div className="flex flex-col gap-2">
            <Card item={products[0]} heightClass="h-[280px] sm:h-[340px] lg:h-[260px]" />
            <Card item={products[2]} heightClass="h-[280px] sm:h-[340px] lg:h-[320px]" />
          </div>

          {/* Center Column */}
          <div className="flex flex-col gap-2">
            <Card item={products[1]} heightClass="h-[280px] sm:h-[340px] lg:h-[290px]" />
            <Card item={products[3]} heightClass="h-[280px] sm:h-[340px] lg:h-[290px]" />
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 lg:col-span-1 flex w-full">
            <Card item={products[4]} heightClass="h-[320px] sm:h-[400px] lg:h-[582px]" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Products;