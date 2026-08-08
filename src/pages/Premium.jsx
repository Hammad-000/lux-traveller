import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sparkles, Crown, Plane, Check, ArrowRight, ArrowLeft, Shield, Wifi, Tv, Coffee } from 'lucide-react';

function Premium() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-pink-500 selection:text-white relative overflow-hidden py-16 px-4">
      {/* Background Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header with Image Background & Glassmorphism */}
        <div className="relative rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-2xl">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center filter brightness-75 scale-105 transition-transform duration-1000"
            style={{ 
              backgroundImage: 'url("https://images5.alphacoders.com/123/1238802.jpg")' 
            }}
          />
          
          {/* Deep Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
          
          {/* Content Overlay */}
          <div className="relative z-10 text-center p-10 md:p-16 lg:p-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-pink-300 text-sm font-medium mb-6 shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span>Elite Travel Classes</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight bg-gradient-to-r from-pink-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
              Premium Experience
            </h2>
            
            <p className="text-slate-300 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
              Experience unparalleled luxury and comfort with our exclusive travel classes. From spacious seating to gourmet dining, we redefine premium travel.
            </p>
          </div>
        </div>

        {/* Class Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Business Class Card */}
          <div className="bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 transition-all duration-300 hover:border-pink-500/30 hover:shadow-pink-600/10 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-pink-800 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-600/20">
                    <Plane className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Business Class</h3>
                    <p className="text-slate-400 text-xs">Modern Luxury & Efficiency</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold rounded-full">
                  Popular
                </span>
              </div>
              
              <div className="space-y-3.5 mb-8">
                {[
                  "Priority check-in and boarding",
                  "Extra baggage allowance",
                  "Premium lounge access",
                  "Gourmet dining options",
                  "Lie-flat seats"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-pink-400" />
                    </div>
                    <p className="text-slate-300 text-sm md:text-base">{feature}</p>
                  </div>
                ))}
              </div>

              {/* Business Class Image */}
              <div className="mb-8 overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                <img 
                  className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                  src="https://c.ekstatic.net/ecl/aircraft-interior/business-class/a350/the-emirates-a350-business-class-w768x480.jpg?h=SeZX1PNmRBWVYeCwMrgx2A" 
                  alt="Business Class cabin with spacious lie-flat seats" 
                />
              </div>
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-white/10">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Starting from</p>
                <p className="text-3xl font-black text-white">$5,000</p>
              </div>
              <NavLink
                to="/contact"
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-pink-600 to-pink-800 hover:from-pink-500 hover:to-pink-700 text-white font-semibold transition-all duration-300 shadow-lg shadow-pink-600/20 flex items-center gap-2 text-sm"
              >
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4" />
              </NavLink>
            </div>
          </div>

          {/* First Class Card */}
          <div className="bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 transition-all duration-300 hover:border-blue-500/30 hover:shadow-blue-600/10 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                    <Crown className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">First Class</h3>
                    <p className="text-slate-400 text-xs">Ultimate Opulence</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold rounded-full flex items-center gap-1">
                  <span>👑</span> Elite
                </span>
              </div>
              
              <div className="space-y-3.5 mb-8">
                {[
                  "Private suites with doors",
                  "Personal butler service",
                  "Fine dining restaurant experience",
                  "In-flight shower spa",
                  "Chauffeur service"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <p className="text-slate-300 text-sm md:text-base">{feature}</p>
                  </div>
                ))}
              </div>

              {/* First Class Image */}
              <div className="mb-8 overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                <img 
                  className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                  src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/16/11/first-class-main-suites-02.jpg?quality=75&width=1368&crop=3%3A2%2Csmart&auto=webp" 
                  alt="First Class private suite with luxurious amenities" 
                />
              </div>
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-white/10">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Starting from</p>
                <p className="text-3xl font-black text-white">$14,000</p>
              </div>
              <NavLink
                to="/contact"
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-600/20 flex items-center gap-2 text-sm"
              >
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4" />
              </NavLink>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-12 mb-16 border border-white/10 shadow-2xl">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-black mb-3">Class Comparison</h3>
            <p className="text-slate-400 text-sm">Compare features side-by-side to choose the ideal tier for your journey.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 text-sm uppercase tracking-wider">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-pink-400">Business Class</th>
                  <th className="text-center py-4 px-4 font-semibold text-blue-400">First Class</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr className="hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 font-medium text-white flex items-center gap-2"><span>💺</span> Seat Type</td>
                  <td className="text-center py-4 px-4">Lie-flat Bed</td>
                  <td className="text-center py-4 px-4 font-medium text-blue-300">Private Suite</td>
                </tr>
                <tr className="hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 font-medium text-white flex items-center gap-2"><span>🎫</span> Check-in</td>
                  <td className="text-center py-4 px-4">Priority</td>
                  <td className="text-center py-4 px-4 font-medium text-blue-300">Private Terminal</td>
                </tr>
                <tr className="hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 font-medium text-white flex items-center gap-2"><span>🍽️</span> Dining</td>
                  <td className="text-center py-4 px-4">À la carte</td>
                  <td className="text-center py-4 px-4 font-medium text-blue-300">Fine Dining Restaurant</td>
                </tr>
                <tr className="hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 font-medium text-white flex items-center gap-2"><span>📺</span> Entertainment</td>
                  <td className="text-center py-4 px-4">32" Screen</td>
                  <td className="text-center py-4 px-4 font-medium text-blue-300">40" 4K Screen</td>
                </tr>
                <tr className="hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 font-medium text-white flex items-center gap-2"><span>📡</span> WiFi</td>
                  <td className="text-center py-4 px-4">High-speed</td>
                  <td className="text-center py-4 px-4 font-medium text-blue-300">Unlimited Ultra-fast</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-pink-950/40 via-purple-950/40 to-blue-950/40 border border-white/10 rounded-3xl p-10 md:p-16 text-center shadow-2xl mb-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Ready to Experience Luxury?</h3>
            <p className="text-slate-300 text-lg mb-8 font-light">
              Book now and enjoy exclusive benefits tailored to your travel needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <NavLink
                to="/benefits"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-500 hover:to-blue-500 text-white font-semibold transition-all duration-300 shadow-xl shadow-pink-600/20 flex items-center justify-center gap-2 text-base"
              >
                <span>Explore All Benefits</span>
                <ArrowRight className="w-5 h-5" />
              </NavLink>
              <NavLink
                to="/contact"
                className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold transition-all duration-300 border border-white/10 hover:border-white/20 flex items-center justify-center gap-2 text-base"
              >
                <span>Book Now</span>
              </NavLink>
            </div>
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
  );
}

export default Premium;