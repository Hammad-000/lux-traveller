import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';
import Footer from './components/Footer';
import './index.css'


function App() {
  

  return (
      <Router>
      <div className=''>
        {/* Redesigned Navigation Bar */}
        <nav className='bg-gradient-to-r from-pink-600 to-blue-800 shadow-lg'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-center items-center h-16'>
              <div className='flex space-x-4 md:space-x-8'>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out ${
                      isActive
                        ? 'bg-white text-purple-600 shadow-md'
                        : 'text-white hover:bg-blue-500 hover:text-white'
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out ${
                      isActive
                        ? 'bg-white text-blue-600 shadow-md'
                        : 'text-white hover:bg-blue-500 hover:text-white'
                    }`
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out ${
                      isActive
                        ? 'bg-white text-blue-600 shadow-md'
                        : 'text-white hover:bg-blue-500 hover:text-white'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
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
<Footer />
    </Router>
  )
}

export default App