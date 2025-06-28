"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { MdOutlinePermPhoneMsg } from "react-icons/md";

const Footer = () => {
    const router = useRouter();

    return (
        <>
            <div className='p-4'>
                <div className='w-full max-w-7xl mx-auto bg-white p-5 shadow-xl rounded-md'>
                    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 text-center mb-6'>
                        <button
                            onClick={() => router.push('/Footer/Components/AboutUs')}
                            className="hover:underline"
                        >
                            About Us
                        </button>
                        <button
                            onClick={() => router.push('/Footer/Components/ContactUs')}
                            className="hover:underline"
                        >
                            Contact Us
                        </button>
                        <button
                            onClick={() => router.push('/Footer/Components/Booking')}
                            className="hover:underline"
                        >
                            Booking Terms & Conditions
                        </button>
                        <button
                            onClick={() => router.push('/Footer/Components/PrivacyPolicy')}
                            className="hover:underline"
                        >
                            Privacy Policy
                        </button>
                        <button
                            onClick={() => router.push('/Footer/Components/Refund')}
                            className="hover:underline"
                        >
                            Refund & Cancellation
                        </button>
                    </div>

                    <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-6 mt-10'>
                        <div className='text-center'>
                            <h2 className='text-xl font-semibold mb-2'>Stay Connected</h2>
                            <section className='flex justify-center gap-4'>
                                <a
                                    href="https://www.facebook.com/dreamasiaworld/?_rdr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src='/facebook.jpeg' alt='Facebook' className='w-10 h-10 rounded-full object-cover' />
                                </a>
                                <a
                                    href="https://www.instagram.com/dreamasia/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src='/instagram.jpeg' alt='Instagram' className='w-10 h-10 rounded-full object-cover' />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/dreamasia/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src='/linkedin.jpeg' alt='LinkedIn' className='w-10 h-10 rounded-full object-cover' />
                                </a>
                            </section>
                        </div>

                        <div className='text-center'>
                            <p>Any questions about our products or offers?</p>
                            <p>Please call our advisers at:</p>
                            <div className='flex items-center justify-center gap-2 mt-2 font-medium'>
                                <MdOutlinePermPhoneMsg className='text-2xl' />
                                <a href='tel:+919923434333' className='border border-gray-300 rounded-full p-2 hover:border-black'>+91-9923434333</a>
                            </div>
                            <p className='text-xs mt-1 text-gray-700'>
                                International call rates apply. Cost may vary depending on your network.
                            </p>
                        </div>
                    </div>
                </div>

                <footer className='w-full max-w-7xl mx-auto bg-white shadow-xl rounded-md mt-6 p-6 text-center text-sm'>
                    <p>Copyright © 2025 Dreamasia | All Rights Reserved</p>
                    <p>
                        Designed &amp; Developed by  
                         <a href="https://njsofttech.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='text-blue-600 font-bold'> NJ Softtech</a>
                    </p>

                </footer>
            </div>
        </>
    );
};

export default Footer;
