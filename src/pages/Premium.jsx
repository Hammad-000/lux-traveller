import React from 'react';
import { NavLink } from 'react-router-dom';

function Premium() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center m-10">
          <h2 className="text-5xl font-bold p-6 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
            Premium Experience
          </h2>
          <p className="text-xl text-gray-300  max-w-3xl mx-auto">
            Experience unparalleled luxury and comfort with our exclusive travel classes. 
            From spacious seating to gourmet dining, we redefine premium travel.
          </p>
        </div>

        {/* Class Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Business Class */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-pink-900/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-pink-800 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">✈️</span>
              </div>
              <h3 className="text-3xl font-bold">Business Class</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                <p className="text-gray-300">Priority check-in and boarding</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                <p className="text-gray-300">Extra baggage allowance</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                <p className="text-gray-300">Premium lounge access</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                <p className="text-gray-300">Gourmet dining options</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                <p className="text-gray-300">Lie-flat seats</p>
              </div>
            </div>

            {/* Business Class Image */}
            <div className="mb-6">
              <img 
                className="w-full h-48 object-cover rounded-xl"
                src="https://c.ekstatic.net/ecl/aircraft-interior/business-class/a350/the-emirates-a350-business-class-w768x480.jpg?h=SeZX1PNmRBWVYeCwMrgx2A" 
                alt="Business Class cabin with spacious lie-flat seats" 
              />
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400">Starting from</p>
                <p className="text-2xl font-bold">$5000</p>
              </div>
              <NavLink
                to="/contact"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-600 to-pink-800 text-white font-bold transition-all duration-300 hover:from-pink-700 hover:to-pink-900 hover:shadow-lg"
              >
                Book Now
              </NavLink>
            </div>
          </div>

          {/* First Class */}
          <div className="bg-gradient-to-br from-blue-900/30 to-gray-900 rounded-2xl p-8 shadow-2xl border border-blue-800/30 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-900/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-3xl font-bold">First Class</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <p className="text-gray-300">Private suites with doors</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <p className="text-gray-300">Personal butler service</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <p className="text-gray-300">Fine dining restaurant experience</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <p className="text-gray-300">In-flight shower spa</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <p className="text-gray-300">Chauffeur service</p>
              </div>
            </div>

            {/* First Class Image */}
            <div className="mb-6">
              <img 
                className="w-full h-48 object-cover rounded-xl"
                src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/16/11/first-class-main-suites-02.jpg?quality=75&width=1368&crop=3%3A2%2Csmart&auto=webp" 
                alt="First Class private suite with luxurious amenities" 
              />
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400">Starting from</p>
                <p className="text-2xl font-bold">$14,000</p>
                
              </div>
               <NavLink
                to="/contact"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-600 to-pink-800 text-white font-bold transition-all duration-300 hover:from-pink-700 hover:to-pink-900 hover:shadow-lg"
              >
                Book Now 👑
              </NavLink>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-gray-800/50 rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Class Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4 text-xl">Feature</th>
                  <th className="text-center py-4 px-4 text-xl text-pink-400">Business Class</th>
                  <th className="text-center py-4 px-4 text-xl text-blue-400">First Class</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-4 px-4">Seat Type</td>
                  <td className="text-center py-4 px-4">Lie-flat Bed</td>
                  <td className="text-center py-4 px-4">Private Suite</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-4 px-4">Check-in</td>
                  <td className="text-center py-4 px-4">Priority</td>
                  <td className="text-center py-4 px-4">Private Terminal</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-4 px-4">Dining</td>
                  <td className="text-center py-4 px-4">À la carte</td>
                  <td className="text-center py-4 px-4">Fine Dining Restaurant</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-4 px-4">Entertainment</td>
                  <td className="text-center py-4 px-4">32" Screen</td>
                  <td className="text-center py-4 px-4">40" 4K Screen</td>
                </tr>
                <tr>
                  <td className="py-4 px-4">WiFi</td>
                  <td className="text-center py-4 px-4">High-speed</td>
                  <td className="text-center py-4 px-4">Unlimited Ultra-fast</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-pink-900/30 to-blue-900/30 rounded-2xl p-12">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience Luxury?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book now and enjoy exclusive benefits tailored to your travel needs.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <NavLink
              to="/benefits"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-pink-600 to-blue-600 text-white text-lg font-bold transition-all duration-300 hover:from-pink-700 hover:to-blue-700 hover:shadow-2xl hover:scale-105"
            >
              Explore All Benefits
            </NavLink>
            <NavLink
              to="/booking"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white text-lg font-bold transition-all duration-300 hover:from-gray-800 hover:to-gray-900 hover:shadow-2xl border border-gray-600"
            >
              Book Now
            </NavLink>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <NavLink
            to="/home"
            className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors duration-300 group"
          >
            <svg 
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Premium;