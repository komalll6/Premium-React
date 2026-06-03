import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-8 py-3">
        <ul className="flex justify-end items-center gap-12 text-[14px] tracking-[2px] font-medium">

          <li>
            {/* Updated href link destination token right here */}
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

            <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible translate-y-1
                transition-all duration-150 ease-out 
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

          {/* Womenswear Dropdown */}
          <li className="relative group py-2">
            <button className="uppercase hover:text-gray-500 transition-colors duration-200 cursor-pointer block pb-1">
              WOMENSWEAR
            </button>

            <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible translate-y-1
              transition-all duration-150 ease-out 
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
              z-50">
              <ul className="bg-white shadow-xl border border-gray-100 py-2">
                <li>
                  <Link to="/co-ord-sets" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
                    Co-Ord Sets
                  </Link>
                </li>
                <li>
                  <Link to="/blazers" className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-black transition-colors duration-150">
                    Blazers
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link
              to="/where"
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