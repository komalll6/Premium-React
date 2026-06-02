function About() {
  return (
    <section className="relative -mt-20 px-16">
      <div className=" mx-auto bg-[#f8f6f6] shadow-gray-500 shadow-lg">

        {/* Heading */}
        <div className="pt-5 pb-5">
          <h2 className="text-center text-[25px] uppercase tracking-wider text-[#2e3238] font-sans-serif">
            Experience Knot Standard
          </h2>
        </div>

        {/* Top Border */}
        <div className="border-t border-gray-300 mx-8 -mt-2"></div>

        {/* Features */}
        <div className="grid md:grid-cols-3 py-12 -mt-6">

          <div className="px-12 text-center">
            <h3 className="text-[20px] uppercase font-sans-serif font-serif text-gray-500 mb-3">
              100% Custom Clothing
            </h3>

            <p className="text-[14px] text-gray-600 leading-relaxed">
              Our custom clothing is made for your exact shape, size,
              and preferences. It's time to get your true custom fit,
              every single time.
            </p>
          </div>

          <div className="px-12 text-center md:border-l md:border-r border-gray-300">
            <h3 className="text-[20px] uppercase font-sans-serif font-serif text-gray-500 mb-3">
              Luxury Fabrics
            </h3>

            <p className="text-[14px] text-gray-600 leading-relaxed">
              We use curated fabrics from the best mills in the world,
              including Dormeuil, Loro Piana, Ariston and Thomas Mason.
            </p>
          </div>

          <div className="px-12 text-center">
            <h3 className="text-[20px] uppercase font-sans-serif font-serif text-gray-500 mb-3">
              Unrivaled Service
            </h3>

            <p className="text-[14px] text-gray-600 leading-relaxed">
              Precise measurements, endless style advice, and peerless
              client service from anywhere: our expert Style Advisors do it all.
            </p>
          </div>

        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-300 mx-5 -mb-10"></div>

        {/* Button */}
        <div className="flex justify-center py-14 pb-5">
          <button className="border-[2px] border-black px-20 py-3 uppercase tracking-[5px] font-semibold 
          text-lg hover:bg-black hover:text-white transition-all duration-300">
            Start Your Custom
          </button>
        </div>

      </div>
    </section>
  );
}


export default About;