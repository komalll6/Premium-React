// function Navbar() {
//   return (
//     <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">

//       <div className="max-w-7xl mx-auto px-8 py-5">

//         <ul className="flex justify-end items-center gap-12 text-[14px] tracking-[2px] font-medium">

//           <li>
//             <a
//               href="/"
//               className="hover:text-gray-500 transition duration-300"
//             >
//               ABOUT
//             </a>
//           </li>

//           {/* Menswear Dropdown */}
//           <li className="relative group">

//             <button className=" uppercase hover:text-gray-500 transition duration-300 cursor-pointer ">
//               MENSWEAR
//             </button>

//             <div className="absolute top-full left-0 mt-4 w-64 bg-white shadow-xl opacity-0 invisible translate-y-4
//                 transition-all  duration-500  ease-out  group-hover:opacity-100  group-hover:visible  group-hover:translate-y-0
//                 z-50" >
//               <ul className="py-4">
//                 <li>
//                   <a
//                     href="#" className="block px-6 py-3 hover:bg-gray-100 transition">
//                     Suits
//                   </a>
//                 </li>

//                 <li>
//                   <a href="#" className="block px-6 py-3 hover:bg-gray-100 transition">
//                     Blazers
//                   </a>
//                 </li>

//                 <li>
//                   <a
//                     href="#"
//                     className="block px-6 py-3 hover:bg-gray-100 transition"
//                   >
//                     Shirts
//                   </a>
//                 </li>

//                 <li>
//                   <a
//                     href="#"
//                     className="block px-6 py-3 hover:bg-gray-100 transition"
//                   >
//                     Outerwear
//                   </a>
//                 </li>

//                 <a
//                     href="#"
//                     className="block px-6 py-3 hover:bg-gray-100 transition"
//                   >
//                     Pants
//                   </a>
          
//                <a
//                     href="#"
//                     className="block px-6 py-3 hover:bg-gray-100 transition"
//                   >
//                     Knitswear
//                   </a>

//               </ul>
//             </div>

//           </li>

//           {/* Womenswear Dropdown */}
//           <li className="relative group">

//             <button className="uppercase hover:text-gray-500 transition duration-300 cursor-pointer">
//               WOMENSWEAR
//             </button>

//             <div className="absolute top-full left-0 mt-4 w-64  bg-white  shadow-xl  opacity-0  invisible  translate-y-4
//               transition-all  duration-500  ease-out  group-hover:opacity-100  group-hover:visible
//                 group-hover:translate-y-0 z-50">
//               <ul className="py-4">

//                 <li>
//                   <a
//                     href="#"
//                     className="block px-6 py-3 hover:bg-gray-100 transition"
//                   >
//                     Co-Ord Sets
//                   </a>
//                 </li>

//                 <li>
//                   <a
//                     href="#"
//                     className="block px-6 py-3 hover:bg-gray-100 transition"
//                   >
//                     Blazers
//                   </a>
//                 </li>

//                 <li>
//                   <a
//                     href="#"
//                     className="block px-6 py-3 hover:bg-gray-100 transition"
//                   >
//                     Dresses
//                   </a>
//                 </li>

//                 <li>
//                   <a
//                     href="#"
//                     className="block px-6 py-3 hover:bg-gray-100 transition"
//                   >
//                     Outerwear
//                   </a>

//                   <a
//                     href="#"
//                     className="block px-6 py-3 hover:bg-gray-100 transition"
//                   >
//                    Tops
//                   </a>

//                   <a
//                     href="#"
//                     className="block px-6 py-3 hover:bg-gray-100 transition"
//                   >
//                     Pants
//                   </a>

//                   <a
//                     href="#"
//                     className="block px-6 py-3 hover:bg-gray-100 transition"
//                   >
//                     Knitswear
//                   </a>

//                    <a
//                     href="#"
//                     className="block px-6 py-3 hover:bg-gray-100 transition"
//                   >
//                     Traditionalwaer
//                   </a>
//                 </li>

//               </ul>
//             </div>

//           </li>

//           <li>
//             <a
//               href="/where"
//               className="hover:text-gray-500 transition duration-300"
//             >
//               WHERE TO BUY
//             </a>
//           </li>

//         </ul>

//       </div>

//     </nav>
//   );
// }

// export default Navbar;


function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-8 py-3">
        <ul className="flex justify-end items-center gap-12 text-[14px] tracking-[2px] font-medium">

          <li>
            <a
              href="/"
              className="hover:text-gray-500 transition-colors duration-200"
            >
              ABOUT
            </a>
          </li>

          {/* Menswear Dropdown */}
          <li className="relative group py-2"> {/* Added py-2 to extend the hover trigger zone */}
            <button className="uppercase hover:text-gray-500 transition-colors duration-200 cursor-pointer block pb-1">
              MENSWEAR
            </button>

            {/* Dropdown Container — Instant appearance, clean connection bridge */}
            <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible translate-y-1
                transition-all duration-150 ease-out 
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                z-50">
              <ul className="bg-white shadow-xl border border-gray-100 py-2">
                <li>
                  <a href="#" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
                    Suits
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
                    Blazers
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
                    Shirts
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
                    Outerwear
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
                    Pants
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
                    Knitswear
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* Womenswear Dropdown */}
          <li className="relative group py-2"> {/* Added py-2 to extend the hover trigger zone */}
            <button className="uppercase hover:text-gray-500 transition-colors duration-200 cursor-pointer block pb-1">
              WOMENSWEAR
            </button>

            {/* Dropdown Container — Instant appearance, clean connection bridge */}
            <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible translate-y-1
              transition-all duration-150 ease-out 
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
              z-50">
              <ul className="bg-white shadow-xl border border-gray-100 py-2">
                <li>
                  <a href="#" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
                    Co-Ord Sets
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
                    Blazers
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
                    Dresses
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
                    Outerwear
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
                    Tops
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
                    Pants
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
                    Knitswear
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
                    Traditionalwear
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a
              href="/where"
              className="hover:text-gray-500 transition-colors duration-200"
            >
              WHERE TO BUY
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;