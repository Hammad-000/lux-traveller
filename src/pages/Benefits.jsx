import React from 'react';
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
  Heart
} from 'lucide-react';

function Benefits() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Get 25% Off</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Get 25% off on your next booking when you use our affiliated hotels. This exclusive offer is available for Premium Travel Club members and includes select destinations worldwide. Book now and save big on luxury accommodations, with discounts applied at checkout for stays of up to 7 nights. Subject to availability and terms apply.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-6xl">
        {/* New Travel Offers Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Exclusive Travel Offers</h2>
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
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <img src={offer.image} alt={offer.city} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    25% OFF
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{offer.city}</h3>
                  <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
                  <p className="text-gray-500 text-xs">Book with our affiliated hotels to enjoy this exclusive discount. Valid for stays up to 7 nights, subject to availability.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                More Than An Experience
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Premium Travel Club invites you to discover a world full of new experiences in exclusive resorts, 
                allowing you to escape the daily grind and relax or spend time with your family.
              </p>
              <p className="text-gray-600 mb-6">
                We have everything from all-inclusive resorts in the Caribbean to spacious, refurbished hotels in 
                Spanish beach destinations. Our hotels always meet the highest quality standards and offer amenities 
                and services for our members.
              </p>
              <p className="text-gray-600">
                With Premium Travel Club, you'll have direct access to reservations with a preferential rate at 
                18 resorts that are currently affiliated to the program and you will enjoy additional discounts 
                throughout H10 Hotels, world pass and RCI.
              </p>
            </div>

   
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-teal-400 text-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">18+</div>
                <div className="text-sm">Affiliated Resorts</div>
              </div>
              <div className="bg-gradient-to-br from-teal-500 to-blue-400 text-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">4300+</div>
                <div className="text-sm">RCI Hotels</div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Exclusive Benefits</h2>
              <p className="text-gray-600">Premium privileges designed for exceptional travel experiences</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Variety",
                  description: "You're not tied to the same destination every year. There are up to 8 destinations where you can spend your vacation: Riviera Maya, Punta Cana, Jamaica, Tenerife, Costa del Sol, Lanzarote, Gran Canaria and Fuerteventura.",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: <Calendar className="w-6 h-6" />,
                  title: "Flexibility",
                  description: "Choose when and where you want to go. Our Customer Service will assist you in finding availability for your chosen destination and preferred dates.",
                  color: "from-teal-500 to-teal-600"
                },
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: "Automatic Subscription to RCI",
                  description: "With our external partnership with RCI, you'll be able to enjoy more than 4,300 affiliate hotels in over 100 countries.",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  icon: <Tag className="w-6 h-6" />,
                  title: "Best Price",
                  description: "We guarantee that you will always receive the best market rate for our affiliated hotels as well as in more than 300,000 hotels around the world through Worldpass.",
                  color: "from-green-500 to-green-600"
                },
                {
                  icon: <Award className="w-6 h-6" />,
                  title: "Club H10 Grand Class",
                  description: "Being part of our family means that you'll also get the extra benefit of being a member of club h10 in our grand class vip category, with excellent benefits in more than 66 hotels around the world.",
                  color: "from-orange-500 to-orange-600"
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Customer Service",
                  description: "Paradise is just a phone call away. Our team of professionals exclusive for members is always on hand to help you plan your vacation.",
                  color: "from-pink-500 to-pink-600"
                }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${benefit.color} text-white rounded-lg mb-4`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Premium Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Luxury Resorts</h3>
              <p className="text-gray-600">Exclusive access to premium resorts with world-class amenities and services.</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-600 rounded-full mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Priority Booking</h3>
              <p className="text-gray-600">Get early access to bookings and special reservations during peak seasons.</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Family Friendly</h3>
              <p className="text-gray-600">Special amenities and activities designed for family vacations and bonding.</p>
            </div>
          </div>
        </div>

        
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Premium Benefits?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of satisfied members who trust us with their dream vacations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-bold text-lg py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-3">
                <Phone size={20} />
                <span>Contact Membership</span>
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold text-lg py-4 px-8 rounded-lg hover:bg-white/10 transition-colors">
                View Membership Plans
              </button>
            </div>
            <p className="text-sm opacity-75 mt-6">
              Speak with our membership specialists to learn more about exclusive benefits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;