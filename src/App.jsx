import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Lookbook from "./components/Lookbook";
import Footer from "./components/Footer";
import './index.css'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Products/>
      <Lookbook/>
      <Footer/>
    </div>
  )
}

export default App;