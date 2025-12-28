import { NavLink } from 'react-router-dom';
import { Home, Plane, Compass, Map } from 'lucide-react';

function Error() {  
    return (    
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-900/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Decorative Icons */}
                    <div className="flex justify-center items-center gap-8 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-600/20 to-blue-800/20 rounded-2xl flex items-center justify-center rotate-12">
                            <Compass className="w-8 h-8 text-pink-400" />
                        </div>
                        <div className="w-20 h-20 bg-gradient-to-br from-pink-600/30 to-blue-800/30 rounded-2xl flex items-center justify-center -rotate-12">
                            <Map className="w-10 h-10 text-blue-400" />
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-600/20 to-blue-800/20 rounded-2xl flex items-center justify-center rotate-12">
                            <Plane className="w-8 h-8 text-purple-400" />
                        </div>
                    </div>

                    {/* 404 Number */}
                    <div className="relative mb-8">
                        <div className="text-[180px] md:text-[240px] font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-none">
                            404
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-[180px] md:text-[240px] font-bold text-gray-800/40 leading-none">
                                404
                            </div>
                        </div>
                    </div>

                    {/* Main Message */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-white">Destination</span>
                        <span className="text-pink-400"> Not Found</span>
                    </h1>
                    
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Oops! It seems you've ventured off the map. The page you're looking for 
                        has either been moved, deleted, or never existed.
                    </p>

                    {/* Decorative Divider */}
                    <div className="flex items-center justify-center gap-4 mb-10">
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent to-pink-600 rounded-full"></div>
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-600 to-blue-800"></div>
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-800 to-purple-600"></div>
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"></div>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-800 to-transparent rounded-full"></div>
                    </div>

                    {/* Helpful Message */}
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-gray-700 max-w-2xl mx-auto">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-pink-600/20 to-blue-800/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Compass className="w-6 h-6 text-pink-400" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-xl font-bold mb-2 text-white">Navigation Tips</h3>
                                <p className="text-gray-300">
                                    Don't worry! Every great explorer gets lost sometimes. 
                                    Try checking the URL, use the navigation menu, or return 
                                    to familiar territory with the button below.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <NavLink
                            to="/home"
                            className="group relative overflow-hidden bg-gradient-to-r from-pink-600 to-blue-800 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:from-pink-700 hover:to-blue-900 hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Home className="w-6 h-6 relative z-10" />
                            <span className="relative z-10">Return Home</span>
                        </NavLink>
                        
                        <button 
                            onClick={() => window.history.back()}
                            className="group bg-gray-800/50 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:bg-gray-700/50 hover:shadow-xl border border-gray-700 hover:border-gray-600 flex items-center gap-3"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Go Back
                        </button>
                    </div>

                    {/* Useful Links */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        <div className="bg-gray-800/30 p-6 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group border border-gray-800 hover:border-gray-700">
                            <div className="w-12 h-12 bg-gradient-to-br from-pink-600/20 to-blue-800/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Home className="w-6 h-6 text-pink-400" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">Home Page</h4>
                            <p className="text-gray-400 text-sm">Return to our main landing page</p>
                        </div>
                        
                        <div className="bg-gray-800/30 p-6 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group border border-gray-800 hover:border-gray-700">
                            <div className="w-12 h-12 bg-gradient-to-br from-pink-600/20 to-blue-800/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Plane className="w-6 h-6 text-blue-400" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">Destinations</h4>
                            <p className="text-gray-400 text-sm">Explore our travel destinations</p>
                        </div>
                        
                        <div className="bg-gray-800/30 p-6 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group border border-gray-800 hover:border-gray-700">
                            <div className="w-12 h-12 bg-gradient-to-br from-pink-600/20 to-blue-800/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-lg mb-2">Search</h4>
                            <p className="text-gray-400 text-sm">Find what you're looking for</p>
                        </div>
                    </div>

                    {/* Contact Help */}
                    <div className="m-12 p-8 border-t border-gray-800/50">
                        <p className="text-gray-400 mb-4">
                            Still having trouble finding your way?
                        </p>
                        <NavLink
                            to="/contact"
                            className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors font-semibold"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Contact our support team for help
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Animated Plane */}
            <div className="absolute bottom-10 left-0 right-0">
                <div className="animate-bounce flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
                        <Plane className="w-8 h-8 text-white transform -rotate-45" />
                    </div>
                </div>
            </div>
        </div>
    ); 
}       

export default Error;