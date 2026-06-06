// import { Link, useLocation } from 'react-router-dom';
// import logoImg from '../assets/RAJHANS.png'; // Place your RAJHANS.png here

// function Navbar() {
//   const location = useLocation();

//   // Premium feature: Handles routing to homepage + smooth scrolling to top
//   const handleLogoClick = (e) => {
//     if (location.pathname === '/#') {
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
//             <a
//               href="/#about"
//               className="hover:text-gray-500 transition-colors duration-200"
//             >
//               ABOUT
//             </a>
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

//responsive
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/RAJHANS.png';

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        
        {/* LOGO */}
        <Link to="/" onClick={handleLogoClick} className="flex items-center h-full overflow-hidden transition-opacity hover:opacity-80 group">
          <img src={logoImg} alt="Rajhans" className="h-32 sm:h-40 w-auto object-contain" />
        </Link>

        {/* DESKTOP NAVIGATION (Hidden on mobile/tablet) */}
        <ul className="hidden lg:flex items-center gap-10 text-[13px] tracking-[2px] font-medium text-gray-800">
          <li>
            <Link to="/about" className="hover:text-gray-500 transition-colors">ABOUT</Link>
          </li>

          {/* Menswear Dropdown */}
          <li className="relative group py-2">
            <button className="uppercase hover:text-gray-500 transition-colors tracking-[2px] cursor-pointer">MENSWEAR</button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50">
              <ul className="bg-white shadow-xl border border-gray-100 py-2">
                {['Suits', 'Blazers', 'Shirts', 'Outerwear', 'Knitswear'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase()}`} className="block px-6 py-2.5 text-gray-600 hover:text-black hover:bg-gray-50 text-[13px] transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* Womenswear Dropdown */}
          <li className="relative group py-2">
            <button className="uppercase hover:text-gray-500 transition-colors tracking-[2px] cursor-pointer">WOMENSWEAR</button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50">
              <ul className="bg-white shadow-xl border border-gray-100 py-2">
                <li><Link to="/co-ord-sets" className="block px-6 py-2.5 text-gray-600 hover:text-black hover:bg-gray-50 text-[13px] transition-colors">Co-Ord Sets</Link></li>
                <li><Link to="/womens-blazers" className="block px-6 py-2.5 text-gray-600 hover:text-black hover:bg-gray-50 text-[13px] transition-colors">Women's Blazers</Link></li>
              </ul>
            </div>
          </li>

          <li>
            <Link to="/showrooms" className="hover:text-gray-500 transition-colors">WHERE TO BUY</Link>
          </li>
        </ul>

        {/* MOBILE HAMBURGER BUTTON */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-gray-700 hover:text-black focus:outline-none">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE DRAWER OVERLAY */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 border-t border-gray-100 overflow-y-auto px-6 py-8 animate-fadeIn">
          <ul className="flex flex-col gap-6 text-[15px] tracking-[2px] font-medium text-gray-800">
            <li>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 border-b border-gray-50">ABOUT</Link>
            </li>
            
            {/* Menswear Collapsible */}
            <li>
              <button onClick={() => toggleDropdown('mens')} className="w-full flex justify-between items-center py-2 border-b border-gray-50 uppercase">
                MENSWEAR <span>{activeDropdown === 'mens' ? '−' : '+'}</span>
              </button>
              {activeDropdown === 'mens' && (
                <ul className="pl-4 mt-2 space-y-3 bg-gray-50 p-3 rounded">
                  {['Suits', 'Blazers', 'Shirts', 'Outerwear', 'Knitswear'].map((item) => (
                    <li key={item}>
                      <Link to={`/${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="block py-1 text-sm text-gray-600">{item}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Womenswear Collapsible */}
            <li>
              <button onClick={() => toggleDropdown('womens')} className="w-full flex justify-between items-center py-2 border-b border-gray-50 uppercase">
                WOMENSWEAR <span>{activeDropdown === 'womens' ? '−' : '+'}</span>
              </button>
              {activeDropdown === 'womens' && (
                <ul className="pl-4 mt-2 space-y-3 bg-gray-50 p-3 rounded">
                  <li><Link to="/co-ord-sets" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 text-sm text-gray-600">Co-Ord Sets</Link></li>
                  <li><Link to="/womens-blazers" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 text-sm text-gray-600">Women's Blazers</Link></li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/showrooms" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 border-b border-gray-50">WHERE TO BUY</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;