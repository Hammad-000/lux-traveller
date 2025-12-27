
import React from 'react';
import { 
  FaUtensils, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPlane 
} from 'react-icons/fa';

function Footer() {
  // Travel-related services
  const services = [
    { icon: <FaPlane />, title: "Global Travel", desc: "Worldwide destinations" },
    { icon: <FaUtensils />, title: "Fine Dining", desc: "Exclusive restaurants" },
    { icon: <FaClock />, title: "24/7 Support", desc: "Always available" },
    { icon: <FaMapMarkerAlt />, title: "VIP Access", desc: "Premium experiences" }
  ];

  // Quick links for travel site
  const quickLinks = [
    { title: "Home", link: "#" },
    { title: "About Us", link: "#" },
    { title: "Destinations", link: "#" },
    { title: "Membership", link: "#" },
    { title: "Benefits", link: "#" },
    { title: "Contact", link: "#" }
  ];

  // Travel destinations instead of branches
  const destinations = [
    { city: "Skardu, Pakistan", address: "Mountain paradise with stunning views", phone: "+92 311 0250787", hours: "24/7 Support" },
    { city: "Dubai, UAE", address: "Luxury city with modern attractions", phone: "+971 50 123 4567", hours: "24/7 Support" },
    { city: "New York, USA", address: "The city that never sleeps", phone: "+1 212 555 1234", hours: "24/7 Support" },
    { city: "Tokyo, Japan", address: "Blend of tradition and innovation", phone: "+81 3 1234 5678", hours: "24/7 Support" }
  ];

  // Social media links
  const socialMedia = [
    { name: "Facebook", icon: <FaFacebookF />, link: "#", color: "hover:bg-blue-600" },
    { name: "Instagram", icon: <FaInstagram />, link: "#", color: "hover:bg-pink-600" },
    { name: "Twitter", icon: <FaTwitter />, link: "#", color: "hover:bg-blue-400" },
    { name: "YouTube", icon: <FaYoutube />, link: "#", color: "hover:bg-red-600" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-600 to-blue-800"></div>
      
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                <FaPlane className="text-white text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  <span className="text-white">Lux</span>
                  <span className="text-pink-400">Travel</span>
                </h2>
                <p className="text-sm text-gray-400">Club</p>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Discover exclusive travel benefits with Lux Travel Club. Access world-class resorts, priority bookings, and unforgettable experiences since 2020.
            </p>
            
            {/* Services Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-700/40 rounded-lg p-3 hover:bg-gray-800 transition-colors">
                  <div className="flex items-center flex-col gap-2 mb-1">
                    <div className="text-pink-400">{service.icon}</div>
                    <span className="text-sm font-semibold">{service.title}</span>
                  </div>
                  <p className="text-xs text-gray-400">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-pink-600 to-blue-800 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.link}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                  >
                    <span className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-pink-500 transition-colors"></span>
                    <span className="group-hover:translate-x-2 transition-transform">{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-pink-500 text-white placeholder-gray-400"
                />
                <button className="w-full px-4 py-3 bg-gradient-to-r from-pink-600 to-blue-800 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-blue-900 transition-all duration-300 hover:shadow-lg">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-pink-600 to-blue-800 rounded-full"></span>
              Popular Destinations
            </h3>
            <div className="space-y-4">
              {destinations.map((destination, index) => (
                <div 
                  key={index}
                  className="group bg-gray-800/30 p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-300 border border-gray-800 hover:border-gray-700"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-600/20 to-blue-800/20 rounded-lg flex items-center justify-center group-hover:from-pink-600/30 group-hover:to-blue-800/30">
                      <FaMapMarkerAlt className="text-pink-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-white group-hover:text-pink-300 transition-colors">
                          {destination.city}
                        </h4>
                        <span className="text-xs bg-gradient-to-r from-pink-600/20 to-blue-800/20 text-pink-300 px-2 py-1 rounded-full">
                          Available
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{destination.address}</p>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <a 
                          href={`tel:${destination.phone}`}
                          className="text-xs text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-1"
                        >
                          <FaPhone className="text-xs" /> {destination.phone}
                        </a>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <FaClock className="text-xs" /> {destination.hours}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-pink-600 to-blue-800 rounded-full"></span>
              Contact Us
            </h3>
            
            <div className="space-y-4 mb-8">
              <a 
                href="tel:+923110250787"
                className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-600/20 to-blue-800/20 rounded-full flex items-center justify-center group-hover:from-pink-600 group-hover:to-blue-800 transition-all">
                  <FaPhone className="text-pink-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call Us Anytime</p>
                  <p className="font-semibold text-lg group-hover:text-pink-300 transition-colors">
                    +92 311 0250787
                  </p>
                </div>
              </a>

              <a 
                href="mailto:luxtravelclub@gmail.com"
                className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-600/20 to-blue-800/20 rounded-full flex items-center justify-center group-hover:from-pink-600 group-hover:to-blue-800 transition-all">
                  <FaEnvelope className="text-pink-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="font-semibold text-lg group-hover:text-pink-300 transition-colors">
                    luxtravelclub@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-600/20 to-blue-800/20 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-pink-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Head Office</p>
                  <p className="font-semibold">
                    11/56 Block B, Area 51<br />
                    <span className="text-sm text-gray-400">Karachi, Pakistan</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex flex-wrap gap-2">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`group relative w-10 h-10 bg-gradient-to-r from-pink-600 to-blue-800 rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1 ${social.color}`}
                    aria-label={`Follow us on ${social.name}`}
                    title={social.name}
                  >
                    <div className="absolute inset-0   rounded-full opacity-0 group-hover:opacity-100  duration-300"></div>
                    <div className="relative text-white  opacity-80 group-hover:opacity-100">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-800/50 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              &copy; 2025 <span className="text-pink-400 font-bold">Lux Travel Club</span>. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Providing premium travel experiences since 2020
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-pink-400 transition-colors px-3 py-1 hover:bg-gray-800/50 rounded-lg">Privacy Policy</a>
            <a href="#" className="hover:text-pink-400 transition-colors px-3 py-1 hover:bg-gray-800/50 rounded-lg">Terms of Service</a>
            <a href="#" className="hover:text-pink-400 transition-colors px-3 py-1 hover:bg-gray-800/50 rounded-lg">Cookie Policy</a>
            <a href="#" className="hover:text-pink-400 transition-colors px-3 py-1 hover:bg-gray-800/50 rounded-lg">Refund Policy</a>
            <a href="#" className="hover:text-pink-400 transition-colors px-3 py-1 hover:bg-gray-800/50 rounded-lg">Sitemap</a>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="text-xs text-gray-500">Accepted Payments:</div>
            <div className="flex gap-1">
              <div className="w-8 h-5 bg-gray-700 rounded text-xs flex items-center justify-center">VISA</div>
              <div className="w-8 h-5 bg-gray-700 rounded text-xs flex items-center justify-center">MC</div>
              <div className="w-8 h-5 bg-gray-700 rounded text-xs flex items-center justify-center">PP</div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer
