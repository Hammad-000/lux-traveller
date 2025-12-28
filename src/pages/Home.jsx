import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform,  } from "framer-motion";
import {Plane, } from "lucide-react"

function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const destinationSlides = [
    { 
      name: "Tokyo, Japan", 
      img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      description: "Tokyo is packed with a wealth of tourist attractions, from the cutting-edge to the traditional. Here, you will discover amazing pop culture, fashion, shopping, cuisine, entertainment, and more. The exciting fusion that is Tokyo makes for an unforgettable trip."
    },
    { 
      name: "Skardu, Pakistan", 
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Shangrila_resort_skardu.jpg/1200px-Shangrila_resort_skardu.jpg",
      description: "Skardu is famous for its breathtaking landscapes in Pakistan's Karakoram range, known as the Shangri-La of Pakistan for its stunning valleys, turquoise lakes (Satpara, Kachura), glaciers, and high peaks like K2, attracting trekkers, mountaineers, and nature lovers "
    },
    { 
      name: "Bali, Indonesia", 
      img: "https://cdn.audleytravel.com/2478/1770/79/16027396-pura-ulun-danu-bratan-bali.jpg",
      description: "Bali is famous because of its slightly exotic location compared to much of the Western nations and because it has a welcoming, kind culture and some of the best beaches, surfing, temples, rice terraces, etc. on Earth."
    },
    { 
      name: "Istanbul, Turkey", 
      img: "https://www.hotelgift.com/media/wp/HG/2022/08/blue-mosque-Turkey-where-to-stay-in-istanbul.webp",
      description: "Istanbul is famous for its unique position spanning two continents (Europe & Asia), rich history as the capital of Roman, Byzantine, and Ottoman Empires, iconic landmarks like Hagia Sophia & Blue Mosque, vibrant Grand Bazaar, the scenic Bosphorus Strait, and a unique blend of Eastern and Western cultures"
    },
    { 
      name: "Dubai, UAE", 
      img: "https://t4.ftcdn.net/jpg/03/81/67/75/360_F_381677568_eZaX7u05HIszMcZTTJbfCk0tFoizziFU.jpg",
      description: "Dubai is a dazzling global city in the UAE, famous for its futuristic skyline with the Burj Khalifa, luxury shopping, man-made islands (like Palm Jumeirah), and blend of ultra-modern architecture with historic souks and Islamic culture, serving as a major hub for business, tourism, and transport in the Middle East,"
    },
    { 
      name: "Kerala, India", 
      img: "https://media.istockphoto.com/id/1160316337/photo/tea-plantations.jpg?s=612x612&w=0&k=20&c=5gj1mezzy3cHlCQcqiOIM8pLBLeMyWoxW3e_R57eyv8=",
      description: "Kerala, India's southwestern coastal state, is famed as God's Own Country for its stunning natural beauty, featuring palm-fringed beaches serene backwaters, spice-laden hills of the Western Ghats, and rich biodiversity, alongside a unique culture known for Ayurvedic traditions, vibrant art forms, delicious cuisine,  ",
    },
    { name: "America, New York",
      img: "https://res.cloudinary.com/shipit-cdn/images/c_scale,w_448,h_299,dpr_2/f_auto,q_auto/v1733410609/wordpress/new-york/new-york.jpg?_i=AA",
      description:"The famous city within the state, home to iconic landmarks and the United Nations Headquarters, situated at the mouth of the Hudson River"
    },
    
    
      { name: "Australia, Sydney",
      img: "https://www.authenticvacations.com/wp-content/uploads/2023/10/Bondi-Beach-Australia-850x450-2.jpg",
      description:"Why Move to Sydney? According to the 2024 Livability Index, Sydney is one of the top 10 most livable cities worldwide…"
    },

     { name: "China, Hong Kong", 
       img: "https://ca-times.brightspotcdn.com/dims4/default/417a960/2147483647/strip/true/crop/1130x753+35+0/resize/2000x1333!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ffd%2F24%2Fa57f9238405fab82e2c84ff08607%2Fhong-kong-adventure4.jpeg" ,
        description:"Hong Kong is officially a Special Administrative Region (SAR) of China, operating under the One Country, Two Systems principle, meaning it's part of China but maintains high autonomy "}
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destinationSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [destinationSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destinationSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + destinationSlides.length) % destinationSlides.length);
  };

  // const goToSlide = (index) => {
  //   setCurrentSlide(index);
  // };

  return (
    <div className="min-h-screen bg-gray-50">
    
      <section className="relative h-screen overflow-hidden">
        
        <div className="absolute inset-0 transition-all duration-5000 ease-in-out">
          {destinationSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-3000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="absolute inset-0  bg-center"
                style={{
                  backgroundImage: `url(${slide.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            </div>
          ))}
        </div>

        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>


       


        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <motion.div
            style={{ y }}
            className="flex flex-col items-center justify-center"
          >
            <div className="text-4xl md:text-7xl font-bold mb-6">
              Discover the World with{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Lux Traveller
              </span>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3}}
            className="text-xl md:text-3xl mb-8 mt-4 max-w-4xl leading-relaxed"
          >
            
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mt-8"
          >
           
          </motion.div>

    
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12 flex flex-col items-center gap-2"
          >
         
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-lg font-medium bg-black/30 backdrop-blur-sm   px-6 py-2 rounded-lg"
            >
               <span className=" pb-3.5">{destinationSlides[currentSlide].name}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

  
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {destinationSlides.map((dest, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={dest.img} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{dest.name}</h3>
                <p className="text-gray-600 mb-4">{dest.description}</p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: "✈️", title: "Easy Booking", desc: "Book flights, hotels, and tours in minutes with our intuitive platform." },
            { icon: "🌍", title: "Global Destinations", desc: "Access to over 1000+ destinations worldwide with local experts." },
            { icon: "💰", title: "Best Prices", desc: "Guaranteed lowest prices with exclusive member-only deals and discounts." },
            { icon: "⭐", title: "Premium Service", desc: "24/7 concierge service and personalized travel planning." },
            { icon: "🛡️", title: "Travel Insurance", desc: "Comprehensive coverage included with every premium booking." },
            { icon: "👨‍👩‍👧‍👦", title: "Family Friendly", desc: "Special packages and amenities for family vacations." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

   
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Travelers Say</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              name: "Sarah Johnson", 
              review: "Amazing experience! The booking was seamless and the destinations were breathtaking. Our guide in Bali was exceptional!", 
              rating: 5,
              trip: "Bali Luxury Getaway"
            },
            { 
              name: "Mike Chen", 
              review: "Best travel site ever. Great deals and excellent customer support. They handled our last-minute changes with ease!", 
              rating: 5,
              trip: "European Adventure"
            },
            { 
              name: "Priya Sharma", 
              review: "Lux Traveller made our honeymoon magical. Everything was perfectly planned and exceeded our expectations!", 
              rating: 5,
              trip: "Maldives Paradise"
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-lg mb-6 italic">"{testimonial.review}"</p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-800">- {testimonial.name}</p>
                <p className="text-sm text-gray-500 mt-1">{testimonial.trip}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
   
      
      
     <div className=" bottom-5 left-0 right-0 mb-4">
                <div className="animate-bounce flex justify-center ">
                    <motion.div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg"
             

                    >
                          <Plane className="w-8 h-8 text-white  transform -rotate-45 space-x-10   " />
                    </motion.div>
                </div>
            </div>

    </div>
  );
}

export default Home;