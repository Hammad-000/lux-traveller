import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Plane, Compass, Sparkles, ArrowRight, Star, ShieldCheck, Headphones, MapPin } from "lucide-react";

function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const destinationSlides = [
    { 
      name: "Tokyo, Japan", 
      img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      description: "Discover amazing pop culture, fashion, shopping, cuisine, and an exciting fusion of the cutting-edge and traditional."
    },
    { 
      name: "Skardu, Pakistan", 
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Shangrila_resort_skardu.jpg/1200px-Shangrila_resort_skardu.jpg",
      description: "Breathtaking landscapes in the Karakoram range, featuring stunning valleys, turquoise lakes, and towering peaks like K2."
    },
    { 
      name: "Bali, Indonesia", 
      img: "https://cdn.audleytravel.com/2478/1770/79/16027396-pura-ulun-danu-bratan-bali.jpg",
      description: "Immerse yourself in a welcoming culture with world-class beaches, ancient temples, and lush tropical rice terraces."
    },
    { 
      name: "Istanbul, Turkey", 
      img: "https://www.hotelgift.com/media/wp/HG/2022/08/blue-mosque-Turkey-where-to-stay-in-istanbul.webp",
      description: "A unique city spanning two continents, featuring a rich history, iconic architecture, and the vibrant Bosphorus Strait."
    },
    { 
      name: "Dubai, UAE", 
      img: "https://t4.ftcdn.net/jpg/03/81/67/75/360_F_381677568_eZaX7u05HIszMcZTTJbfCk0tFoizziFU.jpg",
      description: "A dazzling global city featuring a futuristic skyline, luxury lifestyle, and a blend of modern architecture with rich culture."
    },
    { 
      name: "Kerala, India", 
      img: "https://media.istockphoto.com/id/1160316337/photo/tea-plantations.jpg?s=612x612&w=0&k=20&c=5gj1mezzy3cHlCQcqiOIM8pLBLeMyWoxW3e_R57eyv8=",
      description: "Famed as 'God's Own Country' for its palm-fringed beaches, serene backwaters, and spice-laden green hills."
    },
    { 
      name: "New York, USA",
      img: "https://res.cloudinary.com/shipit-cdn/images/c_scale,w_448,h_299,dpr_2/f_auto,q_auto/v1733410609/wordpress/new-york/new-york.jpg?_i=AA",
      description: "The city that never sleeps, home to iconic global landmarks, towering skyscrapers, and diverse cultural districts."
    },
    { 
      name: "Sydney, Australia",
      img: "https://www.authenticvacations.com/wp-content/uploads/2023/10/Bondi-Beach-Australia-850x450-2.jpg",
      description: "Ranked among the world's most livable cities, offering stunning harbor views, iconic architecture, and vibrant coastal life."
    },
    { 
      name: "Hong Kong, China", 
      img: "https://ca-times.brightspotcdn.com/dims4/default/417a960/2147483647/strip/true/crop/1130x753+35+0/resize/2000x1333!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ffd%2F24%2Fa57f9238405fab82e2c84ff08607%2Fhong-kong-adventure4.jpeg",
      description: "A dynamic metropolis operating under high autonomy, blending futuristic urban design with deep-rooted traditions."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destinationSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [destinationSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % destinationSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + destinationSlides.length) % destinationSlides.length);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {destinationSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                style={{ backgroundImage: `url(${slide.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-slate-950/30" />
            </div>
          ))}
        </div>

        {/* Carousel Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-105"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-105"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <motion.div style={{ y }} className="flex flex-col items-center justify-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-indigo-300 mb-6 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Redefining Luxury Journeys</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
              Discover the World with{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                Lux Traveller
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8 font-light">
              Curated luxury experiences, breathtaking destinations, and seamless journeys crafted exclusively for the modern explorer.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#destinations" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 flex items-center gap-2">
                Explore Destinations <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
          
          {/* Current Active Slide Pill */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-10 z-20 flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 text-white shadow-xl"
          >
            <MapPin className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium">{destinationSlides[currentSlide].name}</span>
          </motion.div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Popular Destinations</h2>
          <p className="text-slate-600 text-lg">Handpicked breathtaking locations waiting for your next unforgettable adventure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationSlides.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden group border border-slate-100 flex flex-col justify-between"
            >
              <div className="relative overflow-hidden h-72">
                <img 
                  src={dest.img} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  Featured
                </span>
              </div>
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">{dest.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">{dest.description}</p>
                </div>
                <button className="w-full bg-slate-900 hover:bg-indigo-600 text-white py-3 rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-b from-white via-indigo-50/40 to-white py-24 px-4 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Why Choose Us?</h2>
            <p className="text-slate-600 text-lg">We deliver absolute excellence and unmatched comfort at every step of your journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Compass className="w-6 h-6 text-indigo-600" />, title: "Easy Booking", desc: "Book flights, hotels, and tours seamlessly with our intuitive platform." },
              { icon: <GlobeWrapper className="w-6 h-6 text-indigo-600" />, title: "Global Destinations", desc: "Access to over 1000+ handpicked destinations worldwide with local experts." },
              { icon: <Sparkles className="w-6 h-6 text-indigo-600" />, title: "Best Prices", desc: "Guaranteed lowest prices with exclusive member-only deals and tailored packages." },
              { icon: <Headphones className="w-6 h-6 text-indigo-600" />, title: "Premium Service", desc: "Dedicated 24/7 concierge service and personalized travel coordination." },
              { icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />, title: "Travel Insurance", desc: "Comprehensive coverage and peace of mind included with every premium booking." },
              { icon: <FamilyIcon className="w-6 h-6 text-indigo-600" />, title: "Family Friendly", desc: "Tailored itineraries, special packages, and child-safe amenities." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">What Our Travelers Say</h2>
          <p className="text-slate-600 text-lg">Real stories and reviews from travelers who experienced the magic.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              name: "Sarah Johnson", 
              review: "Amazing experience! The booking was seamless and destinations were breathtaking. Our guide in Bali was exceptional!", 
              rating: 5,
              trip: "Bali Luxury Getaway"
            },
            { 
              name: "Mike Chen", 
              review: "Best travel site ever. Great deals and top-tier support. They handled our last-minute changes with absolute ease!", 
              rating: 5,
              trip: "European Adventure"
            },
            { 
              name: "Priya Sharma", 
              review: "Lux Traveller made our honeymoon truly magical. Everything was meticulously planned and far exceeded expectations!", 
              rating: 5,
              trip: "Maldives Paradise"
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-base mb-6 leading-relaxed italic">"{testimonial.review}"</p>
              </div>
              <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs text-indigo-600 font-medium mt-0.5">{testimonial.trip}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Floating Icon */}
      <div className="py-12 bg-slate-900 text-white flex flex-col items-center justify-center relative overflow-hidden">
        <div className="animate-bounce mb-4">
          <div className="w-16 h-16 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Plane className="w-8 h-8 text-white transform -rotate-45" />
          </div>
        </div>
        <p className="text-slate-400 text-sm font-medium">Your next big adventure starts here.</p>
      </div>

    </div>
  );
}

// Helper component for missing icon imports
function GlobeWrapper(props) {
  return <Compass {...props} />;
}
function FamilyIcon(props) {
  return <ShieldCheck {...props} />;
}

export default Home;