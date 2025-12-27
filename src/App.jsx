import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';
import Benefits from './pages/Benefits';
import Footer from './components/Footer';
import './index.css';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { to: "/home", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/benefits", label: "Benefits" }
  ];

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
     
        <nav className="bg-gradient-to-r from-pink-600 to-blue-800 shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0 hidden md:block">
                <NavLink to="/" onClick={closeMenu} className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <span className="bg-gradient-to-r from-pink-600 to-blue-800 bg-clip-text text-transparent font-bold text-xl">
                      LXT
                    </span>
                  </div>
                  <span className="text-white font-bold text-xl hidden lg:inline-block">
                    Lux Traveller
                  </span>
                </NavLink>
              </div>

       
              <div className="hidden md:flex space-x-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out ${
                        isActive
                          ? 'bg-white text-purple-600 shadow-lg'
                          : 'text-white hover:bg-white/20 hover:shadow-sm'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

           
              <div className="hidden md:block">
                <NavLink
                  to="/join"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-2 rounded-full text-sm font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg shadow-md"
                >
                  Join Now
                </NavLink>
              </div>


              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/20 focus:outline-none transition-colors"
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

          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-r from-pink-700 to-blue-900 shadow-inner">
              <div className="px-3 py-4 border-b border-white/20">
                <NavLink to="/" onClick={closeMenu} className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <span className="bg-gradient-to-r from-pink-600 to-blue-800 bg-clip-text text-transparent font-bold text-xl">
                      PTC
                    </span>
                  </div>
                  <span className="text-white font-bold text-xl">
                    Premium Travel Club
                  </span>
                </NavLink>
              </div>

              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-white text-purple-600'
                        : 'text-white hover:bg-white/20'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              
          
              <div className="px-3 py-4">
                <NavLink
                  to="/join"
                  onClick={closeMenu}
                  className="block w-full text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-3 rounded-full text-base font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-md"
                >
                  Join Now
                </NavLink>
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