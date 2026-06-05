import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/RAJHANS.png'; // Place your RAJHANS.png here

function Navbar() {
  const location = useLocation();

  // Premium feature: Handles routing to homepage + smooth scrolling to top
  const handleLogoClick = (e) => {
    if (location.pathname === '/#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between h-20">
        
        {/* ================= LEFT SIDE: LOGO BRANDING ================= */}
        <Link 
          to="/" 
          onClick={handleLogoClick}

          className="flex items-center h-full overflow-hidden transition-opacity duration-300 hover:opacity-80 group cursor-pointer"
        >
          <img 
            src={logoImg} 
            alt="Rajhans - The Custom Cut" 
            className="h-45 -mb-5 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]" 
          />
        </Link>

        {/* ================= RIGHT SIDE: NAVIGATION LINKS ================= */}
        <ul className="flex items-center gap-12 text-[14px] tracking-[2px] font-medium text-gray-800">

          <li>
            <a
              href="/#about"
              className="hover:text-gray-500 transition-colors duration-200"
            >
              ABOUT
            </a>
          </li>

          {/* Menswear Dropdown */}
          <li className="relative group py-2">
            <button className="uppercase hover:text-gray-500 transition-colors duration-200 cursor-pointer block pb-1">
              MENSWEAR
            </button>

            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 opacity-0 invisible translate-y-2
                transition-all duration-200 ease-out 
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                z-50">
              <ul className="bg-white shadow-xl border border-gray-100 py-2">
                <li>
                  <Link to="/suits" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
                    Suits
                  </Link>
                </li>
                <li>
                  <Link to="/blazers" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
                    Blazers
                  </Link>
                </li>
                <li>
                  <Link to="/shirts" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
                    Shirts
                  </Link>
                </li>
                <li>
                  <Link to="/outerwear" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
                    Outerwear
                  </Link>
                </li>
                <li>
                  <Link to="/knitswear" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
                    Knitswear
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="relative group py-2">
            <button className="uppercase hover:text-gray-500 transition-colors duration-200 cursor-pointer block pb-1">
              WOMENSWEAR
            </button>

            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 opacity-0 invisible translate-y-2
              transition-all duration-200 ease-out 
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
              z-50">
              <ul className="bg-white shadow-xl border border-gray-100 py-2">
                <li>
                  <Link to="/co-ord-sets" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
                    Co-Ord Sets
                  </Link>
                </li>
                <li>
                  <Link to="/womens-blazers" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
                    Women's Blazers
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link
              to="/showrooms"
              className="hover:text-gray-500 transition-colors duration-200"
            >
              WHERE TO BUY
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

// //new
// import { Link, useLocation } from 'react-router-dom';
// import logoImg from '../assets/RAJHANS.png'; 

// function Navbar() {
//   const location = useLocation();

//   const handleLogoClick = (e) => {
//     if (location.pathname === '/') {
//       e.preventDefault();
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };

//   return (
//     <nav className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-gray-200 shadow-sm">
//       <div className="max-w-6xl mx-auto px-8 flex items-center justify-between h-20">
        
//         {/* ================= LEFT SIDE: LOGO BRANDING ================= */}
//         <Link 
//           to="/" 
//           onClick={handleLogoClick}
//           className="flex items-center h-full overflow-hidden transition-opacity duration-300 hover:opacity-80 group cursor-pointer"
//         >
//           <img 
//             src={logoImg} 
//             alt="Rajhans - The Custom Cut" 
//             className="h-45 -mb-5 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]" 
//           />
//         </Link>

//         {/* ================= RIGHT SIDE: NAVIGATION LINKS ================= */}
//         <ul className="flex items-center gap-12 text-[14px] tracking-[2px] font-medium text-gray-800">

//           <li>
//             {/* CHANGED: Turned standard anchor tag into a React Router Link */}
//             <Link
//               to="/#about"
//               className="hover:text-gray-500 transition-colors duration-200"
//             >
//               ABOUT
//             </Link>
//           </li>

//           {/* Menswear Dropdown */}
//           <li className="relative group py-2">
//             <button className="uppercase hover:text-gray-500 transition-colors duration-200 cursor-pointer block pb-1">
//               MENSWEAR
//             </button>

//             <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 opacity-0 invisible translate-y-2
//                 transition-all duration-200 ease-out 
//                 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
//                 z-50">
//               <ul className="bg-white shadow-xl border border-gray-100 py-2">
//                 <li>
//                   <Link to="/suits" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
//                     Suits
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/blazers" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
//                     Blazers
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/shirts" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
//                     Shirts
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/outerwear" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
//                     Outerwear
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/knitswear" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
//                     Knitswear
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </li>

//           <li className="relative group py-2">
//             <button className="uppercase hover:text-gray-500 transition-colors duration-200 cursor-pointer block pb-1">
//               WOMENSWEAR
//             </button>

//             <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 opacity-0 invisible translate-y-2
//               transition-all duration-200 ease-out 
//               group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
//               z-50">
//               <ul className="bg-white shadow-xl border border-gray-100 py-2">
//                 <li>
//                   <Link to="/co-ord-sets" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
//                     Co-Ord Sets
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/womens-blazers" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
//                     Women's Blazers
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </li>

//           <li>
//             <Link
//               to="/showrooms"
//               className="hover:text-gray-500 transition-colors duration-200"
//             >
//               WHERE TO BUY
//             </Link>
//           </li>

//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;