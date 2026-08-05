import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

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
            icon: <Phone size={22} />,
            title: "Call Us",
            details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
            description: "Available 24/7 for emergencies"
        },
        {
            icon: <Mail size={22} />,
            title: "Email Us",
            details: ["support@travelwonders.com", "bookings@travelwonders.com"],
            description: "Response within 24 hours"
        },
        {
            icon: <MapPin size={22} />,
            title: "Visit Us",
            details: ["123 Adventure Street, Suite 100", "San Francisco, CA 94107"],
            description: "By appointment only"
        },
        {
            icon: <Clock size={22} />,
            title: "Office Hours",
            details: ["Mon-Fri: 9AM - 7PM", "Sat: 10AM - 4PM", "Sun: 12PM - 5PM"],
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
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white pb-24">
            {/* Hero Section */}
            <div className="relative bg-slate-950 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/50 via-slate-950/80 to-purple-950/40 pointer-events-none" />
                <div className="relative container mx-auto px-4 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-indigo-300 mb-6 text-sm font-medium">
                        <Sparkles className="w-4 h-4" />
                        <span>We're Here to Help</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Get in Touch</h1>
                    <p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Your journey begins with a conversation. Let's plan your next adventure together.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-10 max-w-7xl relative z-10">
                {/* Contact Grid */}
                <div className="grid lg:grid-cols-2 gap-10">
                    
                    {/* Left Column - Contact Info & FAQ */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">Contact Information</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex flex-col justify-between p-6 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all">
                                        <div>
                                            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                                                {item.icon}
                                            </div>
                                            <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                            {item.details.map((detail, idx) => (
                                                <p key={idx} className="text-slate-600 text-sm">{detail}</p>
                                            ))}
                                        </div>
                                        <p className="text-xs text-indigo-600 font-medium mt-4 pt-3 border-t border-slate-100">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQ Preview */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
                            <div className="space-y-4 text-sm">
                                <div className="border-b border-slate-100 pb-3">
                                    <p className="font-semibold text-slate-800">What is your cancellation policy?</p>
                                    <p className="text-slate-600 mt-1">Full refund up to 30 days before departure.</p>
                                </div>
                                <div className="border-b border-slate-100 pb-3">
                                    <p className="font-semibold text-slate-800">Do you offer travel insurance?</p>
                                    <p className="text-slate-600 mt-1">Yes, comprehensive coverage options are available.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-800">Can I modify my booking?</p>
                                    <p className="text-slate-600 mt-1">Changes are allowed up to 48 hours before travel.</p>
                                </div>
                            </div>
                            <a 
                                href="/faq" 
                                className="inline-flex items-center gap-1 mt-6 text-indigo-600 font-semibold text-sm hover:text-indigo-700 transition-colors"
                            >
                                View all FAQs <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">Send us a Message</h2>
                            <p className="text-slate-600 text-sm mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
                        </div>
                        
                        {isSubmitted ? (
                            <div className="text-center py-16 flex-grow flex flex-col items-center justify-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-50 rounded-full mb-6">
                                    <CheckCircle size={40} className="text-emerald-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Sent!</h3>
                                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                                    Thank you for contacting us. Our travel experts will respond to your inquiry within 24 hours.
                                </p>
                                <p className="text-xs text-slate-400 mt-4">
                                    You'll also receive a confirmation email shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-slate-700 text-sm font-semibold mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition text-sm"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-slate-700 text-sm font-semibold mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition text-sm"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-slate-700 text-sm font-semibold mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition text-sm"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-slate-700 text-sm font-semibold mb-2">
                                            Subject *
                                        </label>
                                        <select
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition text-sm"
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
                                    <label className="block text-slate-700 text-sm font-semibold mb-2">
                                        Your Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition resize-none text-sm"
                                        placeholder="Tell us about your travel plans, questions, or concerns..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10 hover:shadow-indigo-600/30"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-slate-400 text-center pt-2">
                                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                                </p>
                            </form>
                        )}
                    </div>
                </div>

                {/* Emergency Assistance CTA */}
                <div className="mt-16 bg-gradient-to-r from-indigo-900 via-slate-900 to-purple-950 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
                    <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Need Immediate Assistance?</h2>
                    <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto font-light">
                        For urgent travel emergencies, call our 24/7 dedicated emergency hotline.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a 
                            href="tel:+15551234567" 
                            className="bg-white hover:bg-indigo-50 text-slate-900 font-bold text-lg py-4 px-8 rounded-2xl transition-all duration-300 inline-flex items-center gap-3 shadow-xl hover:scale-105"
                        >
                            <Phone size={20} className="text-indigo-600" />
                            <span>+1 (555) 123-4567</span>
                        </a>
                    </div>
                    <p className="text-xs text-slate-400 mt-4">Available 24 hours, 7 days a week</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;