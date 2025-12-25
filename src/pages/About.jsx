import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Video */}
      <section className="relative h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/main.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Lux Traveller</span>
            </div>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              <div className="text-2xl">✈️</div>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-3xl mb-8 max-w-4xl leading-relaxed"
          >
            Where extraordinary journeys begin and memories are crafted for a lifetime
          </motion.p>
        </div>
      </section>

      
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Founded in 2010, Lux Traveller began with a simple mission: to create unforgettable travel 
                  experiences that go beyond the ordinary. What started as a small boutique agency has grown 
                  into a global leader in luxury travel.
                </p>
                <p>
                  Our founder, Sarah Williamson, a seasoned traveler herself, noticed a gap in the market 
                  for truly personalized luxury travel experiences. She envisioned a service that would 
                  handle every detail, allowing travelers to simply enjoy their journey.
                </p>
                <p>
                  Today, we've helped over 50,000 travelers discover the world's most beautiful destinations, 
                  from hidden gems to iconic landmarks, always with the Lux Traveller touch of excellence.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-64 w-64 rounded-2xl absolute -top-6 -left-6"></div>
              <div className="bg-gradient-to-tr from-blue-400 to-purple-500 h-64 w-64 rounded-2xl absolute -bottom-6 -right-6"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl z-10">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To inspire and enable extraordinary travel experiences through personalized service, 
                  expert guidance, and unwavering commitment to excellence.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">50K+</div>
                    <div className="text-sm text-gray-600">Happy Travelers</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">100+</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalization",
                description: "Every journey is uniquely crafted to match your preferences, interests, and dreams.",
                icon: "🎯"
              },
              {
                title: "Excellence",
                description: "We partner only with the finest hotels, airlines, and tour operators worldwide.",
                icon: "⭐"
              },
              {
                title: "Integrity",
                description: "Transparent pricing and honest recommendations are at the core of everything we do.",
                icon: "🤝"
              },
              {
                title: "Sustainability",
                description: "Committed to responsible tourism that benefits local communities and preserves nature.",
                icon: "🌱"
              },
              {
                title: "Innovation",
                description: "Continuously evolving our services with the latest travel technologies and trends.",
                icon: "💡"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock assistance wherever you are in the world, whenever you need us.",
                icon: "📞"
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Meet Our Expert Team</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our team of travel experts brings decades of combined experience and passion for creating perfect journeys.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Williamson",
                role: "Founder & CEO",
                bio: "25+ years in luxury travel, visited 80+ countries",
                specialty: "Luxury & Adventure"
              },
              {
                name: "David Chen",
                role: "Head of Operations",
                bio: "Former hotel general manager, expert in Asian destinations",
                specialty: "Asia Pacific"
              },
              {
                name: "Maria Rodriguez",
                role: "Travel Designer",
                bio: "Specialist in European cultural tours and culinary experiences",
                specialty: "Europe"
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-6xl">
                    👤
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-sm text-gray-500">Specialty:</span>
                    <span className="ml-2 font-medium">{member.specialty}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Write Your Story?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you create the journey of a lifetime. Our travel experts are ready to make your dreams a reality.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Our Experts
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all duration-300">
                View Our Packages
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;