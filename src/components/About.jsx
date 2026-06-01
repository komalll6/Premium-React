function About() {
  return (
    <section className="relative -mt-20 z-20 px-16">
      <div className=" mx-auto bg-[#f8f6f6] shadow-lg">

        {/* Heading */}
        <div className="pt-5 pb-5">
          <h2 className="text-center text-[25px] font-bold uppercase tracking-wider text-[#2e3238]">
            Experience Knot Standard
          </h2>
        </div>

        {/* Top Border */}
        <div className="border-t border-gray-300 mx-8"></div>

        {/* Features */}
        <div className="grid md:grid-cols-3 py-12">

          <div className="px-12 text-center">
            <h3 className="text-[20px] uppercase font-bold text-gray-500 mb-8">
              100% Custom Clothing
            </h3>

            <p className="text-[24px] text-gray-600 leading-relaxed">
              Our custom clothing is made for your exact shape, size,
              and preferences. It's time to get your true custom fit,
              every single time.
            </p>
          </div>

          <div className="px-12 text-center md:border-l md:border-r border-gray-300">
            <h3 className="text-[30px] uppercase font-bold text-gray-500 mb-8">
              Luxury Fabrics
            </h3>

            <p className="text-[24px] text-gray-600 leading-relaxed">
              We use curated fabrics from the best mills in the world,
              including Dormeuil, Loro Piana, Ariston and Thomas Mason.
            </p>
          </div>

          <div className="px-12 text-center">
            <h3 className="text-[30px] uppercase font-bold text-gray-500 mb-8">
              Unrivaled Service
            </h3>

            <p className="text-[24px] text-gray-600 leading-relaxed">
              Precise measurements, endless style advice, and peerless
              client service from anywhere: our expert Style Advisors do it all.
            </p>
          </div>

        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-300 mx-8"></div>

        {/* Button */}
        <div className="flex justify-center py-14">
          <button className="border-[3px] border-black px-20 py-5 uppercase tracking-[4px] font-semibold text-lg hover:bg-black hover:text-white transition-all duration-300">
            Start Your Custom
          </button>
        </div>

      </div>
    </section>
  );
}


export default About;