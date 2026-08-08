import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  CheckCircle, 
  MapPin, 
  Calendar, 
  Globe, 
  Tag, 
  Users, 
  Phone,
  Star,
  Building,
  Shield,
  Award,
  Clock,
  Heart,
  ArrowRight,
  ArrowLeft,
  Sparkles
} from 'lucide-react';

function Benefits() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-pink-500 selection:text-white relative overflow-hidden py-12 px-4">
      {/* Background Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-2xl bg-gradient-to-r from-slate-900 via-purple-950/40 to-slate-900 p-10 md:p-16 lg:p-20 text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-pink-300 text-sm font-medium mb-6 shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span>Exclusive Member Perk</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight bg-gradient-to-r from-pink-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
              Get 25% Off
            </h1>
            
            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
              Get 25% off on your next booking when you use our affiliated hotels. This exclusive offer is available for Premium Travel Club members and includes select destinations worldwide. Book now and save big on luxury accommodations, with discounts applied at checkout for stays of up to 7 nights. Subject to availability and terms apply.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* New Travel Offers Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-black text-center mb-12 tracking-tight">Exclusive Travel Offers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  city: "Skardu, Pakistan",
                  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Shangrila_resort_skardu.jpg/1200px-Shangrila_resort_skardu.jpg",
                  description: "Experience the breathtaking beauty of Skardu with stunning mountains and serene lakes."
                },
                {
                  city: "Dubai, UAE",
                  image: "https://t4.ftcdn.net/jpg/03/81/67/75/360_F_381677568_eZaX7u05HIszMcZTTJbfCk0tFoizziFU.jpg",
                  description: "Dive into luxury and adventure in the vibrant city of Dubai, from skyscrapers to desert safaris."
                },
                {
                  city: "New York, America",
                  image: "https://res.cloudinary.com/shipit-cdn/images/c_scale,w_448,h_299,dpr_2/f_auto,q_auto/v1733410609/wordpress/new-york/new-york.jpg?_i=AA",
                  description: "Explore the bustling streets of New York City, the city that never sleeps."
                },
                {
                  city: "Tokyo, Japan",
                  image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
                  description: "Immerse yourself in the blend of tradition and modernity in Tokyo."
                }
              ].map((offer, index) => (
                <div 
                  key={index} 
                  className="bg-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-pink-500/30 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="overflow-hidden h-48 border-b border-white/10">
                      <img src={offer.image} alt={offer.city} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <div className="bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                        25% OFF
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{offer.city}</h3>
                      <p className="text-slate-400 text-sm mb-4 leading-relaxed">{offer.description}</p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-slate-500 text-xs border-t border-white/5 pt-3">Valid for stays up to 7 nights, subject to availability.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">
            
            <div className="space-y-8">
              <div className="bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-pink-500/10 border border-pink-500/20 rounded-2xl mb-6">
                  <Star className="w-7 h-7 text-pink-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  More Than An Experience
                </h2>
                <p className="text-slate-300 mb-6 text-lg font-light leading-relaxed">
                  Premium Travel Club invites you to discover a world full of new experiences in exclusive resorts, 
                  allowing you to escape the daily grind and relax or spend time with your family.
                </p>
                <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                  We have everything from all-inclusive resorts in the Caribbean to spacious, refurbished hotels in 
                  Spanish beach destinations. Our hotels always meet the highest quality standards and offer amenities 
                  and services for our members.
                </p>
                <p className="text-slate-400 leading-relaxed text-sm">
                  With Premium Travel Club, you'll have direct access to reservations with a preferential rate at 
                  18 resorts that are currently affiliated to the program and you will enjoy additional discounts 
                  throughout H10 Hotels, world pass and RCI.
                </p>
              </div>
       
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center shadow-xl">
                  <div className="text-4xl font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-1">18+</div>
                  <div className="text-slate-400 text-sm font-medium">Affiliated Resorts</div>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center shadow-xl">
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-1">4300+</div>
                  <div className="text-slate-400 text-sm font-medium">RCI Hotels</div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Our Exclusive Benefits</h2>
                <p className="text-slate-400">Premium privileges designed for exceptional travel experiences</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <MapPin className="w-6 h-6" />,
                    title: "Variety",
                    description: "You're not tied to the same destination every year. There are up to 8 destinations where you can spend your vacation: Riviera Maya, Punta Cana, Jamaica, Tenerife, Costa del Sol, Lanzarote, Gran Canaria and Fuerteventura.",
                    color: "from-blue-600 to-blue-800"
                  },
                  {
                    icon: <Calendar className="w-6 h-6" />,
                    title: "Flexibility",
                    description: "Choose when and where you want to go. Our Customer Service will assist you in finding availability for your chosen destination and preferred dates.",
                    color: "from-teal-600 to-teal-800"
                  },
                  {
                    icon: <Globe className="w-6 h-6" />,
                    title: "Automatic Subscription to RCI",
                    description: "With our external partnership with RCI, you'll be able to enjoy more than 4,300 affiliate hotels in over 100 countries.",
                    color: "from-purple-600 to-purple-800"
                  },
                  {
                    icon: <Tag className="w-6 h-6" />,
                    title: "Best Price",
                    description: "We guarantee that you will always receive the best market rate for our affiliated hotels as well as in more than 300,000 hotels around the world through Worldpass.",
                    color: "from-pink-600 to-pink-800"
                  },
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: "Club H10 Grand Class",
                    description: "Being part of our family means that you'll also get the extra benefit of being a member of club h10 in our grand class vip category, with excellent benefits in more than 66 hotels around the world.",
                    color: "from-amber-600 to-amber-800"
                  },
                  {
                    icon: <Phone className="w-6 h-6" />,
                    title: "Customer Service",
                    description: "Paradise is just a phone call away. Our team of professionals exclusive for members is always on hand to help you plan your vacation.",
                    color: "from-indigo-600 to-indigo-800"
                  }
                ].map((benefit, index) => (
                  <div 
                    key={index} 
                    className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${benefit.color} text-white rounded-xl mb-4 shadow-lg`}>
                        {benefit.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Premium Features Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-black text-center mb-12 tracking-tight">Premium Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center shadow-xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-2xl mb-6 shadow-lg">
                  <Building className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Luxury Resorts</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Exclusive access to premium resorts with world-class amenities and services.</p>
              </div>
              <div className="bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center shadow-xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-500/10 border border-teal-500/20 text-teal-400 rounded-2xl mb-6 shadow-lg">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Priority Booking</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Get early access to bookings and special reservations during peak seasons.</p>
              </div>
              <div className="bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center shadow-xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-500/10 border border-pink-500/20 text-pink-400 rounded-2xl mb-6 shadow-lg">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Family Friendly</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Special amenities and activities designed for family vacations and bonding.</p>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="relative overflow-hidden bg-gradient-to-r from-pink-950/40 via-purple-950/40 to-blue-950/40 border border-white/10 rounded-3xl p-10 md:p-16 text-center shadow-2xl mb-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Ready to Experience Premium Benefits?</h2>
              <p className="text-slate-300 text-lg mb-8 font-light leading-relaxed">
                Join thousands of satisfied members who trust us with their dream vacations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NavLink 
                  to="/contact" 
                  className="bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-500 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl shadow-pink-600/20 inline-flex items-center justify-center gap-2 text-base"
                >
                  <Phone className="w-5 h-5" />
                  <span>Contact Membership</span>
                </NavLink>
                <NavLink 
                  to="/premium" 
                  className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 inline-flex items-center justify-center gap-2 text-base"
                >
                  <span>View Membership Plans</span>
                  <ArrowRight className="w-5 h-5" />
                </NavLink>
              </div>
              <p className="text-xs text-slate-400 mt-6">
                Speak with our membership specialists to learn more about exclusive benefits.
              </p>
            </div>
          </div>

          {/* Back to Home Link */}
          <div className="text-center">
            <NavLink
              to="/home"
              className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors duration-300 font-semibold group text-sm"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Benefits;