import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Suits from "./data/SuitsData";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Lookbook from "./components/Lookbook";
import Footer from "./components/Footer";
import './index.css';

// Existing sub-page placeholders
const MenswearPage = () => <div className="pt-32 text-center min-h-screen bg-[#f3ede4] font-light tracking-widest text-zinc-800">MENSWEAR COLLECTION COMING SOON</div>;
const WomenswearPage = () => <div className="pt-32 text-center min-h-screen bg-[#f3ede4] font-light tracking-widest text-zinc-800">WOMENSWEAR COLLECTION COMING SOON</div>;

/* ----------------------------------------------------
   👔 DEDICATED LOOKBOOK GALLERY PAGES
---------------------------------------------------- */

// 1. Formal Lookbook View Layout
const FormalLookbookPage = () => {
  const formalImages = [
    "https://i.pinimg.com/736x/55/35/bf/5535bf202bce051ffcb53301faa0ca11.jpg",
    "https://i.pinimg.com/1200x/83/00/22/83002276181ca8cb7656fa17ccd1e112.jpg",
    "https://i.pinimg.com/1200x/9c/c2/69/9cc269de4bdab084743e1173ab0d726d.jpg",
    "https://i.pinimg.com/736x/24/b9/41/24b941f7d12f06b12650fc50fdaf7283.jpg"
  ];

  return (
    <div className="pt-5 pb-5 bg-[#f3ede4] min-h-screen">
      {/* Editorial Header Section */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-12 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl tracking-[0.2em] text-zinc-900 uppercase">
          Explore The Formal Lookbook
        </h1>
        <p className="mt-4 text-sm font-light text-zinc-600 tracking-wide leading-relaxed">
          Step into sophistication with our Formalwear Lookbook, showcasing refined evening styles built to impress. From velvet dinner jackets in bold tones to timeless black-tie tailoring, each look highlights luxurious fabrics, sharp details, and elevated design.
        </p>
        <button className="mt-6 bg-[#1a1a1a] text-white text-[11px] font-light tracking-[0.3em] uppercase px-8 py-3.5 hover:bg-zinc-800 transition duration-300">
          Book Appointment &gt;
        </button>
      </div>

      {/* Luxury Lookbook Photo Display Matrix Layout */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {formalImages.map((src, index) => (
            <div key={index} className="overflow-hidden bg-zinc-200 shadow-sm rounded-sm group">
              <img 
                src={src} 
                alt={`Formal Look ${index + 1}`} 
                className="w-full h-[650px] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 2. Casual Lookbook View Layout
const CasualLookbookPage = () => {
  const casualImages = [
    "https://i.pinimg.com/736x/bc/41/81/bc4181ea9a80552b158b096cdb82d068.jpg",
    "https://i.pinimg.com/1200x/6f/aa/44/6faa4436c7b8645cdd78fbdb80142b3c.jpg",
    "https://i.pinimg.com/736x/5f/8f/12/5f8f12e28a9328ae0b2fb41794ad0a5e.jpg",
    "https://i.pinimg.com/736x/48/c0/09/48c009ee1c18ce7311c57d72e55ff0d4.jpg"
  ];

  return (
    <div className="pt-5 pb-5 bg-[#f3ede4] min-h-screen">
      <div className="text-center max-w-3xl mx-auto px-6 mb-12 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-[0.2em] text-zinc-900 uppercase">
          Explore The Casual Lookbook
        </h1>
        <p className="mt-4 text-sm font-light text-zinc-600 tracking-wide leading-relaxed">
          Handcrafted everyday luxury styling. Discover premium knitwear overlays, unstructured blazers, and custom tailored chinos curated for off-duty refinement and effortless style execution.
        </p>
        <button className="mt-6 bg-[#1a1a1a] text-white text-[11px] font-light tracking-[0.3em] uppercase px-8 py-3.5 hover:bg-zinc-800 transition duration-300">
          Book Appointment &gt;
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {casualImages.map((src, index) => (
            <div key={index} className="overflow-hidden bg-zinc-200 shadow-sm rounded-sm group">
              <img 
                src={src} 
                alt={`Casual Look ${index + 1}`} 
                className="w-full h-[650px] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 3. Business Lookbook View Layout
const BusinessLookbookPage = () => {
  const businessImages = [
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop",
    "https://i.pinimg.com/736x/9a/73/40/9a7340d6ab1fa74f332656b49b1c28a2.jpg",
    "https://i.pinimg.com/1200x/9f/78/e4/9f78e4bb731331e06241a3fa9c7bb3fa.jpg",
    "https://i.pinimg.com/736x/83/00/22/83002276181ca8cb7656fa17ccd1e112.jpg"
  ];

  return (
    <div className="pt-5 pb-5 bg-[#f3ede4] min-h-screen">
      <div className="text-center max-w-3xl mx-auto px-6 mb-12 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-[0.2em] text-zinc-900 uppercase">
          Explore The Business Lookbook
        </h1>
        <p className="mt-4 text-sm font-light text-zinc-600 tracking-wide leading-relaxed">
          Impeccable executive power suiting built to fit perfectly. Explore our lineup of custom double-breasted suits, pristine pinstripes, and premium Egyptian cotton shirts designed for the modern boardroom leader.
        </p>
        <button className="mt-6 bg-[#1a1a1a] text-white text-[11px] font-light tracking-[0.3em] uppercase px-8 py-3.5 hover:bg-zinc-800 transition duration-300">
          Book Appointment &gt;
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {businessImages.map((src, index) => (
            <div key={index} className="overflow-hidden bg-zinc-200 shadow-sm rounded-sm group">
              <img 
                src={src} 
                alt={`Business Look ${index + 1}`} 
                className="w-full h-[650px] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


/* ----------------------------------------------------
   📱 MAIN APPLICATION MAIN CONTROLLER
---------------------------------------------------- */
function App() {
  return (
    <div className="bg-[#f3ede4] min-h-screen flex flex-col justify-between">
      {/* Navbar fixed across all routes */}
      <Navbar />
      
      {/* Router Switch Engine mapping paths to structural components */}
      <main className="flex-grow">
        <Routes>
          {/* Base Root Homepage Route View */}
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Products />
              <Lookbook />
            </>
          } />

          {/* Core Navigation Pathways */}
          <Route path="/menswear" element={<MenswearPage />} />
          <Route path="/womenswear" element={<WomenswearPage />} />

        {/* New Suiting Route Engine Link Mapping Hooked Here */}
          <Route path="/suits" element={<Suits />} />

          {/* Dynamic Interactive Lookbook Landing Pathways */}
          <Route path="/formal-lookbook" element={<FormalLookbookPage />} />
          <Route path="/casual-lookbook" element={<CasualLookbookPage />} />
          <Route path="/business-lookbook" element={<BusinessLookbookPage />} />
        </Routes>
      </main>

      {/* Footer fixed across all routes */}
      <Footer />
    </div>
  );
}

export default App;