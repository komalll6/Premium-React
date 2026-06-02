// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import Navbar from './components/Navbar.jsx'
// import Hero from './components/Hero.jsx'
// import About from './components/About.jsx'
// import Products from './components/Products.jsx'
// import Lookbook from './components/Lookbook.jsx'
// import Footer from './components/Footer.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <>
//     <Navbar />
//     <Hero/>
//     <About/>
//     <Products/>
//     <Lookbook/>
//     <Footer/>
//   </>
// )


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)