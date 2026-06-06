// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom' // 1. Import BrowserRouter
// import App from './App.jsx'
// import ScrollToTop from './components/ScrollLookbook.jsx' // 2. Import ScrollToTop component
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <>
//     <BrowserRouter>
//       <ScrollToTop />
//       <App />
//     </BrowserRouter>
//   </>
// )

//responsive
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 
import App from './App.jsx'
import ScrollToTop from './components/ScrollLookbook.jsx' 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </>
)