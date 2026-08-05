import { NavLink } from 'react-router-dom';
import { Home, Plane, Compass, Map, Search, ArrowLeft, Headphones } from 'lucide-react';

function Error() {
    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-pink-500 selection:text-white relative overflow-hidden flex items-center justify-center">
            {/* Background Ambient Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 right-1/3 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 py-16 relative z-10 max-w-5xl">
                <div className="text-center">
                    {/* Decorative Floating Icons */}
                    <div className="flex justify-center items-center gap-6 mb-8">
                        <div className="w-14 h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center rotate-12 shadow-xl">
                            <Compass className="w-7 h-7 text-pink-400" />
                        </div>
                        <div className="w-18 h-18 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center -rotate-12 shadow-xl">
                            <Map className="w-9 h-9 text-blue-400" />
                        </div>
                        <div className="w-14 h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center rotate-12 shadow-xl">
                            <Plane className="w-7 h-7 text-purple-400" />
                        </div>
                    </div>

                    {/* 404 Number with Layered Effect */}
                    <div className="relative mb-6 select-none">
                        <div className="text-[150px] md:text-[220px] font-black bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent leading-none tracking-tighter">
                            404
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="text-[150px] md:text-[220px] font-black text-slate-900/60 leading-none tracking-tighter">
                                404
                            </div>
                        </div>
                    </div>

                    {/* Main Message */}
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                        <span className="text-white">Destination</span>
                        <span className="text-pink-400"> Not Found</span>
                    </h1>
                    
                    <p className="text-slate-400 text-lg md:text-xl font-light mb-8 max-w-xl mx-auto leading-relaxed">
                        Oops! It seems you've ventured off the map. The page you're looking for has either been moved, deleted, or never existed.
                    </p>

                    {/* Helpful Info Box */}
                    <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl p-6 md:p-8 mb-10 border border-white/10 max-w-xl mx-auto shadow-2xl">
                        <div className="flex items-start gap-4 text-left">
                            <div className="w-12 h-12 bg-pink-500/10 border border-pink-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <Compass className="w-6 h-6 text-pink-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1 text-white">Navigation Tips</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Every great explorer gets lost sometimes. Try verifying the URL, exploring the links below, or heading back to familiar territory.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <NavLink
                            to="/home"
                            className="w-full sm:w-auto bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-500 hover:to-blue-500 text-white px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-300 shadow-lg shadow-pink-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
                        >
                            <Home className="w-5 h-5" />
                            <span>Return Home</span>
                        </NavLink>
                        
                        <button 
                            onClick={() => window.history.back()}
                            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-300 border border-white/10 hover:border-white/20 flex items-center justify-center gap-2.5"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Go Back</span>
                        </button>
                    </div>

                    {/* Useful Quick Links Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
                        <NavLink 
                            to="/home" 
                            className="bg-white/[0.02] hover:bg-white/[0.06] p-5 rounded-2xl transition-all duration-300 group border border-white/5 hover:border-white/10 text-left block"
                        >
                            <div className="w-10 h-10 bg-pink-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <Home className="w-5 h-5 text-pink-400" />
                            </div>
                            <h4 className="font-bold text-base mb-1 text-white">Home Page</h4>
                            <p className="text-slate-400 text-xs">Return to main landing page</p>
                        </NavLink>
                        
                        <NavLink 
                            to="/destinations" 
                            className="bg-white/[0.02] hover:bg-white/[0.06] p-5 rounded-2xl transition-all duration-300 group border border-white/5 hover:border-white/10 text-left block"
                        >
                            <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <Plane className="w-5 h-5 text-blue-400" />
                            </div>
                            <h4 className="font-bold text-base mb-1 text-white">Destinations</h4>
                            <p className="text-slate-400 text-xs">Explore travel options</p>
                        </NavLink>
                        
                        <NavLink 
                            to="/search" 
                            className="bg-white/[0.02] hover:bg-white/[0.06] p-5 rounded-2xl transition-all duration-300 group border border-white/5 hover:border-white/10 text-left block"
                        >
                            <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <Search className="w-5 h-5 text-purple-400" />
                            </div>
                            <h4 className="font-bold text-base mb-1 text-white">Search</h4>
                            <p className="text-slate-400 text-xs">Find what you're looking for</p>
                        </NavLink>
                    </div>

                    {/* Contact Help Link */}
                    <div className="pt-6 border-t border-white/10 max-w-md mx-auto">
                        <p className="text-slate-400 text-sm mb-3">
                            Still having trouble finding your way?
                        </p>
                        <NavLink
                            to="/contact"
                            className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors font-semibold text-sm group"
                        >
                            <Headphones className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span>Contact our support team for help</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Error;