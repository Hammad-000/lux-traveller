import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function TravelLandingPage() {
 
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]); 

  return (
    <div className="min-h-screen bg-gray-50">
   
      <section className="relative h-screen overflow-hidden" >
         <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/main.mp4" type="video/mp4" />
          
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ y }}  // Applied the parallax transform here
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Explore the World
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl mb-8"
          >
            Discover breathtaking destinations and create unforgettable memories.
          </motion.p>
          
          {/* Search Bar */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="bg-white rounded-lg p-4 shadow-lg flex flex-col md:flex-row gap-4 w-full max-w-2xl"
          >
            <input type="text" placeholder="Where to?" className="flex-1 p-2 border rounded" />
            <input type="date" className="flex-1 p-2 border rounded" />
            <button className="bg-blue-600  px-6 py-2 rounded hover:bg-blue-700 transition">Search</button>
          </motion.div> */}
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[

            { name: "Shangrila, Gilgit", img: "https://unsplash.com/photos/a-scenic-view-of-a-lake-surrounded-by-mountains-Y5kB_QFQCRY" },  // Fixed: Direct image URL
            { name: "Tokyo, Japan", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80" },
            { name: "Bali, Indonesia", img: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" },
          ].map((dest, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img src={dest.img} alt={dest.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{dest.name}</h3>
                <p className="text-gray-600">Experience the magic of {dest.name.split(',')[0]}.</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Learn More</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: "✈️", title: "Easy Booking", desc: "Book flights, hotels, and tours in minutes." },
            { icon: "🌍", title: "Global Destinations", desc: "Access to over 1000+ destinations worldwide." },
            { icon: "💰", title: "Best Prices", desc: "Guaranteed lowest prices with exclusive deals." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Travelers Say</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: "Sarah Johnson", review: "Amazing experience! The booking was seamless and the destinations were breathtaking." },
            { name: "Mike Chen", review: "Best travel site ever. Great deals and excellent customer support." },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <p className="text-gray-600 mb-4">"{testimonial.review}"</p>
              <p className="font-semibold">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Travel?</h3>
          <p className="mb-4">Join thousands of happy travelers. Start your adventure today!</p>
          <button className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition">Get Started</button>
          <p className="mt-8 text-sm">© 2023 TravelCo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default TravelLandingPage;