// function Navbar() {
//   return (
//     <nav className=" text-black p-4 sticky top-0 z-50 bg-white">
//       <ul className="flex gap-30 justify-end">
//         <li><a href="/">ABOUT</a></li>
//         <li><a href="/mens">MENSWEAR</a></li>
//         <li><a href="/women">WOMENSWEAR</a></li>
//          <li><a href="/where">WHERE TO BUY</a></li>
//       </ul>
//     </nav>
//   )
// }

// export default Navbar;

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-8 py-5">

        <ul className="flex justify-end items-center gap-12 text-[14px] tracking-[2px] font-medium">

          <li>
            <a
              href="/"
              className="hover:text-gray-500 transition duration-300"
            >
              ABOUT
            </a>
          </li>

          {/* Menswear Dropdown */}
          <li className="relative group">

            <button className="uppercase hover:text-gray-500 transition duration-300">
              MENSWEAR
            </button>

            <div className="absolute top-full left-0 mt-4 w-64 bg-white shadow-xl opacity-0 invisible translate-y-4
                transition-all  duration-500  ease-out  group-hover:opacity-100  group-hover:visible  group-hover:translate-y-0
                z-50" >
              <ul className="py-4">
                <li>
                  <a
                    href="#" className="block px-6 py-3 hover:bg-gray-100 transition">
                    Suits
                  </a>
                </li>

                <li>
                  <a href="#" className="block px-6 py-3 hover:bg-gray-100 transition">
                    Blazers
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block px-6 py-3 hover:bg-gray-100 transition"
                  >
                    Shirts
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block px-6 py-3 hover:bg-gray-100 transition"
                  >
                    Outerwear
                  </a>
                </li>

              </ul>
            </div>

          </li>

          {/* Womenswear Dropdown */}
          <li className="relative group">

            <button className="uppercase hover:text-gray-500 transition duration-300">
              WOMENSWEAR
            </button>

            <div className="absolute top-full left-0 mt-4 w-64  bg-white  shadow-xl  opacity-0  invisible  translate-y-4
              transition-all  duration-500  ease-out  group-hover:opacity-100  group-hover:visible
                group-hover:translate-y-0 z-50">
              <ul className="py-4">

                <li>
                  <a
                    href="#"
                    className="block px-6 py-3 hover:bg-gray-100 transition"
                  >
                    Co-Ord Sets
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block px-6 py-3 hover:bg-gray-100 transition"
                  >
                    Blazers
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block px-6 py-3 hover:bg-gray-100 transition"
                  >
                    Dresses
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block px-6 py-3 hover:bg-gray-100 transition"
                  >
                    Outerwear
                  </a>
                </li>

              </ul>
            </div>

          </li>

          <li>
            <a
              href="/where"
              className="hover:text-gray-500 transition duration-300"
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