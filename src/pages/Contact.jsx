import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
    });
    
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsLoading(false);
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: 'General Inquiry',
                message: ''
            });
        }, 3000);
    };

    const contactInfo = [
        {
            icon: <Phone size={24} />,
            title: "Call Us",
            details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
            description: "Available 24/7 for emergencies"
        },
        {
            icon: <Mail size={24} />,
            title: "Email Us",
            details: ["support@travelwonders.com", "bookings@travelwonders.com"],
            description: "Response within 24 hours"
        },
        {
            icon: <MapPin size={24} />,
            title: "Visit Us",
            details: ["123 Adventure Street", "Suite 100", "San Francisco, CA 94107"],
            description: "By appointment only"
        },
        {
            icon: <Clock size={24} />,
            title: "Office Hours",
            details: ["Monday-Friday: 9AM-7PM", "Saturday: 10AM-4PM", "Sunday: 12PM-5PM"],
            description: "Pacific Time Zone"
        }
    ];

    const departments = [
        { value: 'General Inquiry', label: 'General Inquiry' },
        { value: 'Booking Assistance', label: 'Booking Assistance' },
        { value: 'Travel Insurance', label: 'Travel Insurance' },
        { value: 'Flight Changes', label: 'Flight Changes' },
        { value: 'Hotel Reservations', label: 'Hotel Reservations' },
        { value: 'Group Travel', label: 'Group Travel' },
        { value: 'Emergency Support', label: 'Emergency Support' },
        { value: 'Feedback/Complaint', label: 'Feedback/Complaint' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        Your journey begins with a conversation. Let's plan your next adventure together.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Contact Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Column - Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h2>
                        
                        <div className="space-y-6 mb-8">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                                        {item.details.map((detail, idx) => (
                                            <p key={idx} className="text-gray-600">{detail}</p>
                                        ))}
                                        <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* FAQ Preview */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
                            <div className="space-y-3">
                                <div className="border-b pb-3">
                                    <p className="font-medium text-gray-700">What is your cancellation policy?</p>
                                    <p className="text-sm text-gray-600">Full refund up to 30 days before departure.</p>
                                </div>
                                <div className="border-b pb-3">
                                    <p className="font-medium text-gray-700">Do you offer travel insurance?</p>
                                    <p className="text-sm text-gray-600">Yes, comprehensive coverage available.</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-700">Can I modify my booking?</p>
                                    <p className="text-sm text-gray-600">Changes allowed up to 48 hours before travel.</p>
                                </div>
                            </div>
                            <a 
                                href="/faq" 
                                className="inline-block mt-4 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                            >
                                View all FAQs →
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Send us a Message</h2>
                        <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
                        
                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                                    <CheckCircle size={40} className="text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">Message Sent!</h3>
                                <p className="text-gray-600 max-w-md mx-auto">
                                    Thank you for contacting us. Our travel experts will respond to your inquiry within 24 hours.
                                </p>
                                <p className="text-sm text-gray-500 mt-4">
                                    You'll also receive a confirmation email shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Subject *
                                        </label>
                                        <select
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                        >
                                            {departments.map((dept) => (
                                                <option key={dept.value} value={dept.value}>
                                                    {dept.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Your Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="6"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                                        placeholder="Tell us about your travel plans, questions, or concerns..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-teal-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>

                                <p className="text-sm text-gray-500 text-center">
                                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                                </p>
                            </form>
                        )}
                    </div>
                </div>

                {/* Map/CTA Section */}
                <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-8 text-white text-center">
                    <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
                    <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
                        For urgent travel emergencies, call our 24/7 emergency hotline
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                        <a 
                            href="tel:+15551234567" 
                            className="bg-white text-blue-600 font-bold text-xl py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-3"
                        >
                            <Phone size={24} />
                            <span>+1 (555) 123-4567</span>
                        </a>
                        <p className="text-white/80">
                            Available 24 hours, 7 days a week
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;