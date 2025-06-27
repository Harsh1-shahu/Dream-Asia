import React from 'react';
import Navbar from '../Navbar/MainContent/page';
import Footer from '../Footer/MainContent/page';
import { IoLocation } from "react-icons/io5";
import { MdLocalPhone, MdEmail } from "react-icons/md";

const LostItemsReport = () => {
    return (
        <div className="bg-gray-50">
            <Navbar />

            {/* Banner Section */}
            <div className="relative w-full bg-gradient-to-b from-purple-100 to-purple-400 mt-8">
                <img
                    src="/adventure-1.jpg"
                    alt="Lost Items Banner"
                    className="w-full h-80 object-cover opacity-50"
                />
                {/* Inset Text on Image (optional) */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl font-bold text-white drop-shadow-lg">Lost Item Report</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-10  md:flex gap-8 z-50">
                {/* Contact Form */}
                <form className="w-full md:w-2/2 bg-white p-6 rounded-xl shadow-md mb-10 md:mb-0">
                    <h2 className="text-2xl font-bold mb-6 text-center text-[#6B1E74] font-serif">Write to Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-semibold mb-1">First Name *</label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First name"
                                className="w-full border-2 border-gray-300 rounded p-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">Last Name *</label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last name"
                                className="w-full border-2 border-gray-300 rounded p-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">Contact Number *</label>
                            <input
                                type="tel"
                                name="contact"
                                placeholder="Contact number"
                                className="w-full border-2 border-gray-300 rounded p-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">Email *</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full border-2 border-gray-300 rounded p-2"
                                required
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block font-semibold mb-1">Subject *</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className="w-full border-2 border-gray-300 rounded p-2"
                                required
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block font-semibold mb-1">Message *</label>
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Write your message here..."
                                className="w-full border-2 border-gray-300 rounded p-2"
                                required
                            ></textarea>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="mt-6 bg-gradient-to-r from-[#6B1E74] to-[#3B0D46] font-bold text-white px-6 py-2 rounded-full"
                        >
                            Submit
                        </button>
                    </div>
                </form>

                {/* Contact Details Section */}
                <section className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-2xl font-bold mb-2 text-[#6B1E74]">Contact Details</h2>
                    <p className="text-gray-600 mb-6 font-semibold">Get in touch with us. Feel free to contact us!</p>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3 bg-gray-100 p-3 rounded-md shadow-md">
                            <IoLocation size={28} className="mt-1 text-[#6B1E74]" />
                            <div>
                                <h3 className="font-semibold border-b-1">Address:</h3>
                                <p>Dreamasia Park, Tarabodi, Katol Road, Nagpur, Maharashtra</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-100 p-3 rounded-md shadow-md">
                            <MdLocalPhone size={24} className="mt-1 text-[#6B1E74]" />
                            <div>
                                <h3 className="font-semibold border-b-1">Phone:</h3>
                                <p>9923434333</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-100 p-3 rounded-md shadow-md">
                            <MdEmail size={24} className="mt-1 text-[#6B1E74]" />
                            <div>
                                <h3 className="font-semibold border-b-1">Email:</h3>
                                <p>support@dreamasiaworld.com</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default LostItemsReport;
