import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
    return (
        <div className="min-h-screen pt-24 pb-12 px-6 md:px-12 bg-transparent flex flex-col items-center">

            {/* Header */}
            <h1 className="text-4xl font-bold text-brand-dark uppercase tracking-widest text-center mb-4">
                Get in Touch
            </h1>
            <p className="text-brand-brown/80 text-center max-w-2xl mb-16">
                We'd love to hear from you. Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
            </p>

            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Contact Info Section */}
                <div className="flex flex-col gap-8">
                    <div className="bg-white/50 p-8 rounded-2xl border border-brand-brown/10 hover:border-brand-brown/30 transition-colors">
                        <h3 className="text-2xl font-bold text-brand-dark mb-6">Contact Information</h3>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-dark text-white rounded-full">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-dark">Visit Us</h4>
                                    <p className="text-brand-brown/80 mt-1">
                                        123, Innovation Tower, Tech Park,<br />
                                        Bangalore, India - 560001
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-dark text-white rounded-full">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-dark">Email Us</h4>
                                    <p className="text-brand-brown/80 mt-1">hello@snenterprises.com</p>
                                    <p className="text-brand-brown/80">support@snenterprises.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-dark text-white rounded-full">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-dark">Call Us</h4>
                                    <p className="text-brand-brown/80 mt-1">+91 98765 43210</p>
                                    <p className="text-brand-brown/80">Mon - Fri, 9am - 6pm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Mini Section */}
                    <div className="bg-brand-dark text-white p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-4">Need immediate help?</h3>
                        <p className="text-white/80 mb-6">
                            Check out our FAQ section for quick answers to common questions about shipping, returns, and product details.
                        </p>
                        <button className="px-6 py-2 bg-white text-brand-dark rounded-full font-bold hover:bg-brand-cream transition-colors">
                            Visit FAQ
                        </button>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-brand-brown/5 border border-brand-brown/10">
                    <h3 className="text-2xl font-bold text-brand-dark mb-6">Send us a Message</h3>

                    <form className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-brand-dark uppercase tracking-wider">Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full p-3 bg-brand-bg/30 border border-brand-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-brown/50 transition-all"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-brand-dark uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full p-3 bg-brand-bg/30 border border-brand-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-brown/50 transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-brand-dark uppercase tracking-wider">Subject</label>
                            <input
                                type="text"
                                placeholder="How can we help you?"
                                className="w-full p-3 bg-brand-bg/30 border border-brand-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-brown/50 transition-all"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-brand-dark uppercase tracking-wider">Message</label>
                            <textarea
                                rows="5"
                                placeholder="Write your message here..."
                                className="w-full p-3 bg-brand-bg/30 border border-brand-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-brown/50 transition-all resize-none"
                            ></textarea>
                        </div>

                        <button className="mt-2 bg-brand-dark text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-brown transition-all duration-300 flex items-center justify-center gap-2 group">
                            <span>Send Message</span>
                            <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
