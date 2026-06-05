// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Lookbook from "./components/Lookbook";
import Blazer from './components/Blazer'; 
import Suits from "./components/Suits"; 
import Shirt from "./components/Shirts";
import Outerwear from "./components/Outerwear";
import Knitswear from "./components/Knitswear";
import Womenblazer from "./components/Womenblazer"; 
import Coset from "./components/Coset";
import Showroom from "./components/Showroom";
import Footer from "./components/Footer";
import './index.css';

const MenswearPage = () => <div className="pt-32 text-center min-h-screen bg-[#f3ede4] font-light tracking-widest text-zinc-800">MENSWEAR COLLECTION COMING SOON</div>;
const WomenswearPage = () => <div className="pt-32 text-center min-h-screen bg-[#f3ede4] font-light tracking-widest text-zinc-800">WOMENSWEAR COLLECTION COMING SOON</div>;

const FormalLookbookPage = () => {
  const formalImages = [
    "https://i.pinimg.com/736x/55/35/bf/5535bf202bce051ffcb53301faa0ca11.jpg",
    "https://i.pinimg.com/1200x/83/00/22/83002276181ca8cb7656fa17ccd1e112.jpg",
    "https://i.pinimg.com/1200x/9c/c2/69/9cc269de4bdab084743e1173ab0d726d.jpg",
    "https://i.pinimg.com/736x/24/b9/41/24b941f7d12f06b12650fc50fdaf7283.jpg"
  ];
  return (
    <div className="pt-5 pb-5 bg-[#f3ede4] min-h-screen">
      <div className="text-center max-w-3xl mx-auto px-6 mb-12 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl tracking-[0.2em] text-zinc-900 uppercase">Explore The Formal Lookbook</h1>
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {formalImages.map((src, index) => (
            <div key={index} className="overflow-hidden bg-zinc-200 shadow-sm rounded-sm group">
         <img src={src} 
              alt={`Formal Look ${index + 1}`} 
              style={{ height: '650px' }}
              className="w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105" />            
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-[0.2em] text-zinc-900 uppercase">Explore The Casual Lookbook</h1>
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {casualImages.map((src, index) => (
            <div key={index} className="overflow-hidden bg-zinc-200 shadow-sm rounded-sm group">
<img src={src} alt={`Casual Look ${index + 1}`} style={{ height: '650px' }}
  className="w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105" />            
  </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-[0.2em] text-zinc-900 uppercase">Explore The Business Lookbook</h1>
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {businessImages.map((src, index) => (
            <div key={index} className="overflow-hidden bg-zinc-200 shadow-sm rounded-sm group">
      <img src={src} alt={`Business Look ${index + 1}`} style={{ height: '650px' }}
          className="w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105" />            
  </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="bg-[#f3ede4] min-h-screen flex flex-col justify-between">
      <Navbar />
      
<main className="grow">        
  <Routes>
          {/* Main Landing Page Layout */}
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Products />
              <Lookbook />
            </>
          } />

          {/* Department Categories */}
          <Route path="/menswear" element={<MenswearPage />} />
          <Route path="/womenswear" element={<WomenswearPage />} />
          
          {/* Production Dynamic Views */}
          <Route path="/suits" element={<Suits />} />
          <Route path="/blazer" element={<Blazer />} />
          <Route path="/blazers" element={<Blazer />} />
          <Route path="/shirts" element={<Shirt />} />
          <Route path="/outerwear" element={<Outerwear />} />
          <Route path="/knitswear" element={<Knitswear />} />
          
          <Route path="/coset" element={<Coset />} />
          <Route path="/co-ord-sets" element={<Coset />} />

          <Route path="/womens-blazers" element={<Womenblazer />} />
          <Route path="/women'sblazers" element={<Womenblazer />} />

          {/* FIX: Handled both paths to cleanly route to Showroom component */}
          <Route path="/showrooms" element={<Showroom />} />
          <Route path="/where" element={<Showroom />} />

          {/* Creative Media Portfolios */}
          <Route path="/formal-lookbook" element={<FormalLookbookPage />} />
          <Route path="/casual-lookbook" element={<CasualLookbookPage />} />
          <Route path="/business-lookbook" element={<BusinessLookbookPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;