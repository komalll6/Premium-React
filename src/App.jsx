import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import './index.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Products/>
    </div>
  )
}

export default App;