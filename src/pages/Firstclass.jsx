import React from 'react';
import { NavLink } from 'react-router-dom';

function Firstclass() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-6">Welcome to Firstclass!</h2>
      <p className="text-lg mb-4">Experience the luxury of first-class travel. Explore our premium services, exclusive benefits, and much more.</p>
      
      {/* Add a button to navigate somewhere else */}
      <NavLink
        to="/benefits"
        className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-600 to-blue-800 text-white text-lg font-bold transition-all duration-300 hover:from-pink-700 hover:to-blue-900 hover:shadow-lg"
      >
        Explore Benefits
      </NavLink>
      
      {/* Optional: Add other navigation or content */}
      <div className="mt-8">
        <NavLink
          to="/home"
          className="text-pink-400 hover:text-pink-600 transition-colors duration-300"
        >
          Back to Home
        </NavLink>
      </div>
    </div>
  );
}

export default Firstclass;
