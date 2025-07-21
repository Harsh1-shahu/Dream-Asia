"use client"
import React, { useState } from 'react';
import Navbar from '../Navbar/MainContent/page';
import Footer from '../Footer/MainContent/page';
import { IoLocation } from "react-icons/io5";
import { MdLocalPhone, MdEmail } from "react-icons/md";
import Maintenance from '../Miantenance/page';

const LostItemsReport = () => {
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contact: '',
        email: '',
        subject: '',
        message: '',
    });

    // Handles input changes, Converts the input name to lowercase.
    // Updates the corresponding field's value while preserving the rest of the state.
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name.toLowerCase()]: e.target.value,
        });
    };


    const validate = () => {
        const newErrors = {};
        // First Name Validation
        if (!formData.firstName.trim()) newErrors.firstName = "Fisrt Name is required.";

        // Last Name Validation
        if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required.";

        // Contact Validation
        if (!formData.contact.trim()) newErrors.contact = "Contact is required.";

        // Email Validation
        if (!formData.email.trim()) newErrors.email = "Email is required.";

        // Subject Validation
        if (!formData.subject.trim()) newErrors.subject = "Subject is required.";

        // Message Validation
        if (!formData.message.trim()) newErrors.message = "Message is required.";

        return newErrors;
    };

    // Submit Button Functionality
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert("Submitted successfully!");
        };
        setFormData({
            firstName: '',
            lastName: '',
            contact: '',
            email: '',
            subject: '',
            message: '',
        });
    };



    return (
        <div className="bg-gray-50">
            <Navbar />
            <Maintenance />

            {/* Banner Section */}
            <div className="relative w-full bg-gradient-to-b from-purple-100 to-purple-400">
                <img
                    src="/dreamasia-image.jpg"
                    alt="Lost Items Banner"
                    className="w-full h-80 object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl font-bold text-white drop-shadow-lg">Lost Item Report</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-10 md:flex gap-8 z-50">

                {/* Report Form */}
                <form
                    onSubmit={handleSubmit}
                    className="w-full md:w-2/2 bg-white p-6 rounded-xl shadow-md mb-10 md:mb-0">
                    <h2 className="text-2xl font-bold mb-6 text-center text-[#6B1E74] font-serif">Write to Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* First Name Section */}
                        <div>
                            <label className="block font-semibold mb-1">First Name *</label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                className="w-full border-2 border-gray-300 rounded p-2"
                                value={formData.firstName}
                                onChange={(e) => {
                                    let value = e.target.value
                                        .replace(/[^a-zA-Z\s]/g, '')   // allow letters and spaces only
                                        .replace(/\s{2,}/g, ' ')       // replace multiple spaces with single
                                        .replace(/^\s/, '');           // no leading space

                                    // Update form state
                                    setFormData((prev) => ({ ...prev, firstName: value }));

                                    // Live validation
                                    if (!value.trim()) {
                                        setErrors((prev) => ({ ...prev, firstName: 'First Name is required.' }));
                                    } else {
                                        setErrors((prev) => {
                                            const { firstName, ...rest } = prev;
                                            return rest;
                                        });
                                    }
                                }}
                                onKeyDown={(e) => {
                                    const isLetter = /^[a-zA-Z]$/.test(e.key);
                                    const isSpace = e.key === ' ';
                                    const allowed = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];

                                    if (
                                        (!isLetter && !allowed.includes(e.key)) ||
                                        (isSpace && (e.target.selectionStart === 0 || e.target.value[e.target.selectionStart - 1] === ' '))
                                    ) {
                                        e.preventDefault();
                                    }
                                }}
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.firstName}</p>
                            )}
                        </div>


                        {/* Last Name Section */}
                        <div>
                            <label className="block font-semibold mb-1">Last Name *</label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                className="w-full border-2 border-gray-300 rounded p-2"
                                value={formData.lastName}
                                onChange={(e) => {
                                    let value = e.target.value
                                        .replace(/[^a-zA-Z\s]/g, '')    // allow letters and spaces only
                                        .replace(/\s{2,}/g, ' ')        // replace multiple spaces with single space
                                        .replace(/^\s/, '');            // no leading space

                                    // Update form data
                                    setFormData(prev => ({ ...prev, lastName: value }));

                                    // Live validation
                                    if (!value.trim()) {
                                        setErrors(prev => ({ ...prev, lastName: 'Last Name is required.' }));
                                    } else {
                                        setErrors(prev => {
                                            const { lastName, ...rest } = prev;
                                            return rest;
                                        });
                                    }
                                }}
                                onKeyDown={(e) => {
                                    const isLetter = /^[a-zA-Z]$/.test(e.key);
                                    const isSpace = e.key === ' ';
                                    const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];

                                    if (
                                        (!isLetter && !allowedKeys.includes(e.key)) ||
                                        (isSpace && (e.target.selectionStart === 0 || e.target.value[e.target.selectionStart - 1] === ' '))
                                    ) {
                                        e.preventDefault();
                                    }
                                }}
                            />
                            {errors.lastName && (
                                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.lastName}</p>
                            )}
                        </div>

                        {/* Contact Section */}
                        <div>
                            <label className="block font-semibold mb-1">Contact *</label>
                            <input
                                type="tel"
                                name="contact"
                                placeholder="Contact No."
                                className="w-full border-2 border-gray-300 rounded p-2"
                                maxLength={10}
                                pattern="\d{10}"
                                value={formData.contact}
                                onChange={(e) => {
                                    // Allow only digits and limit to 10
                                    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
                                    handleChange({ target: { name: 'contact', value: digitsOnly } });
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === ' ') {
                                        e.preventDefault();  // Prevent from space
                                    }
                                }}
                            />
                            {errors.contact && (
                                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.contact}</p>
                            )}
                        </div>

                        {/* Email Section */}
                        <div>
                            <label className="block font-semibold mb-1">Email *</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full border-2 border-gray-300 rounded p-2"
                                value={formData.email}
                                onChange={(e) => {
                                    const value = e.target.value.trimStart(); // remove leading space
                                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                                    // Update form data
                                    setFormData(prev => ({ ...prev, email: value }));

                                    // Live validate email field
                                    if (!value) {
                                        setErrors(prev => ({ ...prev, email: 'Email is required.' }));
                                    } else if (!emailRegex.test(value)) {
                                        setErrors(prev => ({ ...prev, email: 'Enter a valid email address.' }));
                                    } else {
                                        // Remove error if valid
                                        setErrors(prev => {
                                            const { email, ...rest } = prev;
                                            return rest;
                                        });
                                    }
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === ' ') {
                                        e.preventDefault();  // Prevent from space
                                    }
                                }}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>
                            )}
                        </div>


                        {/* Subject Section */}
                        <div className="md:col-span-2">
                            <label className="block font-semibold mb-1">Subject *</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className="w-full border-2 border-gray-300 rounded p-2"
                                value={formData.subject}
                                onChange={(e) => {
                                    // Allow single spaces only, remove extra spaces and trim
                                    const cleanedValue = e.target.value
                                        .replace(/\s+/g, ' ') // Replace multiple spaces with one
                                        .trimStart(); // Keep trailing space if user is still typing
                                    handleChange({ target: { name: 'subject', value: cleanedValue } });
                                }}
                            />
                            {errors.subject && (
                                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.subject}</p>
                            )}
                        </div>

                        {/* Message Section */}
                        <div className="md:col-span-2">
                            <label className="block font-semibold mb-1">Message *</label>
                            <textarea
                                name="message"
                                placeholder="Write your Message here..."
                                className="w-full border-2 border-gray-300 rounded p-2"
                                rows={4}
                                value={formData.message}
                                onChange={(e) => {
                                    // Allow single spaces only, remove extra spaces and trim
                                    const cleanedValue = e.target.value
                                        .replace(/\s+/g, ' ') // Replace multiple spaces with one
                                        .trimStart(); // Keep trailing space if user is still typing
                                    handleChange({ target: { name: 'message', value: cleanedValue } });
                                }} />

                            {errors.message && (
                                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Submit Button Section */}
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
                                <h3 className="font-semibold">Address:</h3>
                                <p>Dreamasia Park, Tarabodi, Katol Road, Nagpur, Maharashtra</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 bg-gray-100 p-3 rounded-md shadow-md">
                            <MdLocalPhone size={24} className="mt-1 text-[#6B1E74]" />
                            <div>
                                <h3 className="font-semibold">Phone:</h3>
                                <p>9923434333</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 bg-gray-100 p-3 rounded-md shadow-md">
                            <MdEmail size={24} className="mt-1 text-[#6B1E74]" />
                            <div>
                                <h3 className="font-semibold">Email:</h3>
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
