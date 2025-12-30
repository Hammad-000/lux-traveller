import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';
import Benefits from './pages/Benefits';
import Footer from './components/Footer';
import './index.css';
import { useState } from 'react';
import { Menu, X, Plane } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { to: "/home", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/benefits", label: "Benefits" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Updated Navigation */}
        <nav className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white shadow-xl sticky top-0 z-50 border-b border-gray-700">
          {/* Top Gradient Border */}
          <div className="w-full h-1 bg-gradient-to-r from-pink-600 to-blue-800"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Brand Logo - Updated to match footer */}
              <div className="flex-shrink-0">
                <NavLink to="/" onClick={closeMenu} className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                    <Plane className="text-white h-6 w-6" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-white">Lux</span>
                      <span className="text-2xl font-bold text-pink-400">Travel</span>
                    </div>
                    <span className="text-xs text-gray-400 -mt-1">Club</span>
                  </div>
                </NavLink>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `relative px-6 py-2.5 text-sm font-medium transition-all duration-300 group`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className={`relative z-10 ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                          {item.label}
                        </span>
                        {isActive && (
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-600 to-blue-800 rounded-t-full"></div>
                        )}
                        <div className={`absolute inset-0 bg-gradient-to-r from-pink-600/10 to-blue-800/10 rounded-lg transition-opacity duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}></div>
                      </>
                    )}
                  </NavLink>
                ))}
              </div>

              {/* Desktop Join Button */}
              <div className="hidden md:block">
                <NavLink
                  to="/contact"
                  className="relative overflow-hidden bg-gradient-to-r from-pink-600 to-blue-800 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 hover:from-pink-700 hover:to-blue-900 hover:shadow-lg hover:-translate-y-0.5 group"
                >
                  <span className="relative z-10">Join Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </NavLink>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-gray-800/50 focus:outline-none transition-all duration-300 border border-gray-700 hover:border-gray-600"
                  aria-expanded={isMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="px-4 pt-2 pb-4 space-y-1 bg-gradient-to-b from-gray-900 to-black border-t border-gray-800 shadow-inner">
              {/* Mobile Brand */}
              <div className="px-3 py-4 border-b border-gray-700 mb-2">
                <NavLink to="/" onClick={closeMenu} className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-blue-800 rounded-lg flex items-center justify-center">
                    <Plane className="text-white h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-baseline">
                      <span className="text-xl font-bold text-white">Lux</span>
                      <span className="text-xl font-bold text-pink-400">Travel</span>
                    </div>
                    <span className="text-xs text-gray-400">Club</span>
                  </div>
                </NavLink>
              </div>

              {/* Mobile Navigation Items */}
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3.5 rounded-lg text-base font-medium transition-all duration-300 group ${
                      isActive 
                        ? 'bg-gradient-to-r from-pink-600/20 to-blue-800/20 border-l-4 border-pink-500 text-white' 
                        : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        isActive ? 'bg-gradient-to-r from-pink-600 to-blue-800' : 'bg-gray-600 group-hover:bg-pink-500'
                      }`}></div>
                      <span>{item.label}</span>
                      {isActive && (
                        <div className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-pink-600 to-blue-800 animate-pulse"></div>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
              
              {/* Mobile Join Button */}
              <div className="px-3 pt-4 pb-2">
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center bg-gradient-to-r from-pink-600 to-blue-800 text-white px-4 py-3.5 rounded-lg text-base font-bold hover:from-pink-700 hover:to-blue-900 transition-all duration-300 hover:shadow-lg"
                >
                  Join Now
                </NavLink>
              </div>

              {/* Mobile Contact Info */}
              <div className="px-3 pt-4 mt-4 border-t border-gray-800">
                <div className="text-sm text-gray-400 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-600/20 to-blue-800/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span>+92 311 0250787</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-600/20 to-blue-800/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span>luxtravel@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;