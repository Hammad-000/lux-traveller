import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Plane, Sparkles, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { to: "/home", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/benefits", label: "Benefits" },
    { to: "/contact", label: "Contact" },
    { 
      to: "/premium", 
      label: (
        <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span>Premium</span>
        </span>
      ) 
    }
  ];

  return (
    <nav className="bg-slate-950/80 backdrop-blur-xl text-white sticky top-0 z-50 border-b border-white/10 shadow-2xl">
      {/* Top Neon Accent Line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" onClick={closeMenu} className="flex items-center space-x-3 group">
              <div className="w-11 h-11 bg-gradient-to-br from-pink-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-600/20 group-hover:scale-105 transition-transform duration-300 border border-white/20">
                <Plane className="text-white h-5 w-5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-2xl font-black tracking-tight text-white">Lux</span>
                  <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Travel</span>
                </div>
              </div>
            </NavLink>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 bg-white/[0.03] border border-white/10 p-1.5 rounded-2xl backdrop-blur-md shadow-inner">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 flex items-center group ${
                    isActive 
                      ? 'text-white bg-white/10 shadow-lg border border-white/10' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <span className="relative z-10 flex items-center">
                  {item.label}
                </span>
              </NavLink>
            ))}
          </div>

          {/* Desktop Join Button */}
          <div className="hidden md:block">
            <NavLink
              to="/contact"
              className="relative overflow-hidden bg-gradient-to-r from-pink-600 to-blue-600 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 hover:from-pink-500 hover:to-blue-500 hover:shadow-xl hover:shadow-pink-600/25 hover:-translate-y-0.5 border border-white/20 flex items-center gap-2 group"
            >
              <span className="relative z-10">Join Now</span>
            </NavLink>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 focus:outline-none transition-all duration-300 border border-white/10"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-pink-400" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 ${
        isMenuOpen ? 'max-h-[600px] opacity-100 py-6 px-6' : 'max-h-0 opacity-0 overflow-hidden py-0 px-6'
      }`}>
        <div className="space-y-3">
          
          {/* Mobile Navigation Links */}
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-pink-600/20 to-blue-600/20 border border-white/20 text-white shadow-lg' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white border border-transparent'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive && (
                    <div className="w-2 h-2 rounded-full bg-pink-500 animate-ping"></div>
                  )}
                </>
              )}
            </NavLink>
          ))}
          
          {/* Mobile Join Button */}
          <div className="pt-2">
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="block w-full text-center bg-gradient-to-r from-pink-600 to-blue-600 text-white px-4 py-3.5 rounded-xl text-base font-bold shadow-lg shadow-pink-600/20 transition-all duration-300 border border-white/20"
            >
              Join Now
            </NavLink>
          </div>

          {/* Mobile Contact Quick-Info */}
          <div className="pt-4 mt-4 border-t border-white/10 space-y-2.5 text-sm text-slate-400">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-pink-400">
                <Phone className="w-4 h-4" />
              </div>
              <span>+92 311 0250787</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-blue-400">
                <Mail className="w-4 h-4" />
              </div>
              <span>luxtravel@gmail.com</span>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}