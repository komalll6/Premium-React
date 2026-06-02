function Footer() {
  return (
    <footer className="bg-[#111111] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16 ">

        <div className="grid md:grid-cols-4 gap-10 -mt-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-light tracking-[4px] uppercase mb-5">
              Premium
            </h2>

            <p className="text-gray-400 leading-7 text-sm ">
              Elevating modern luxury fashion with timeless craftsmanship,
              premium fabrics, and exceptional style for men and women.
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="uppercase tracking-[5px] text-lg mb-2">
              About
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Our Story
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Craftsmanship
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Sustainability
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="uppercase tracking-[5px] text-lg mb-2">
              Information
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Shipping & Returns
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="uppercase tracking-[5px] text-lg mb-2">
              Contact
            </h3>

            <div className="space-y-2 text-gray-400">
              <p>support@rajhuntailor.com</p>
              <p>+91 99882 92944</p>
              <p>Model Town Near Shivani Park, Jalandhar City, Punjab, India</p>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 -mt-10">

        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © 2026 RajHuns Tailor. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-gray-500 text-sm">
            {/* <a href="#" className="hover:text-white transition">
              Instagram
            </a>

            <a href="#" className="hover:text-white transition">
              Facebook
            </a>

            <a href="#" className="hover:text-white transition">
              Pinterest
            </a> */}
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;