"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ImCancelCircle } from "react-icons/im";
import { useRouter } from 'next/navigation';

const Maintenance = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    if (!isVisible) return null;

    return (
        <div className='relative flex items-center justify-center'>
            {/* Page overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="fixed min-h-screen inset-0 z-[99] bg-[rgba(0,0,0,0.5)]"
            />

            {/* Popup Box */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] w-80 md:w-96 rounded-xl text-white bg-white shadow-xl py-2 px-4'>
                <div className='flex justify-end mb-2'>
                    <ImCancelCircle
                        className='text-black text-2xl cursor-pointer hover:text-red-500'
                        onClick={() => setIsVisible(false)}
                    />
                </div>
                <img src='/masti.jpg' alt='Maintenance' className='rounded-md w-full h-40 object-cover' />
                <p className="bg-[#6C1E74] p-2 text-sm mt-4 text-center rounded-md">
                    Park will remain closed on 8th July 2025 due to maintenance
                </p>
                <button
                    onClick={() => router.push("https://tickets.dreamasiaworld.com/sale/landing")}
                    className='bg-[#007BFF] text-white text-lg w-full py-2 rounded-md mt-4 hover:bg-blue-600 transition'>
                    Book Now
                </button>
            </motion.div>
        </div>
    );
};

export default Maintenance;
