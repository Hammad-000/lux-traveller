
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';

import './index.css'

function App() {
  

  return (
      <Router>
      <div className=''>
        <nav className='flex p-2 bg-gray-400 justify-center gap-4'>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <div>
      </div>
    </Router>
  )
}

export default App
