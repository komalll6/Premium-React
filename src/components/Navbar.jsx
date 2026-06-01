function Navbar() {
  return (
    <nav className=" text-black p-4 sticky top-0 m-2  bg-white">
      <ul className="flex gap-30 justify-end">
        <li><a href="/">ABOUT</a></li>
        <li><a href="/mens">MENSWEAR</a></li>
        <li><a href="/women">WOMENSWEAR</a></li>
         <li><a href="/where">WHERE TO BUY</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;