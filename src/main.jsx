import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Navbar />
    <Hero/>
    <About/>
  </>
)
