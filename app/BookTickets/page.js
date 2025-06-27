"use client";
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { MdArrowBackIosNew } from "react-icons/md";
import Footer from '../Footer/MainContent/page';

const BookTickets = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const dateParam = searchParams.get('date');
    const [selectedDate, setSelectedDate] = useState('');
    const [adultQty, setAdultQty] = useState(0);
    const [kidsQty, setKidsQty] = useState(0);


    useEffect(() => {
        // Check if there is a date parameter available
        if (dateParam) {
            // Convert the dateParam string into a Date object
            const dateObj = new Date(dateParam);

            // Extract the day, and ensure it's two digits (e.g., '09' instead of '9')
            const day = String(dateObj.getDate()).padStart(2, '0');

            // Extract the month (0-based index), add 1, and ensure two digits
            const month = String(dateObj.getMonth() + 1).padStart(2, '0');

            // Extract the full year (e.g., 2025)
            const year = dateObj.getFullYear();

            // Format the date as 'dd/mm/yyyy'
            const formatted = `${day}/${month}/${year}`;

            // Update the selectedDate state with the formatted date
            setSelectedDate(formatted);
        }
    }, [dateParam]);



    return (
        <>
            {/* Navbar */}
            <div className="flex items-center justify-between bg-[#60236F] px-4 py-2 shadow-md">
                <MdArrowBackIosNew
                    onClick={() => router.back()}
                    className="text-white text-2xl cursor-pointer"
                />
                <img
                    src="/logo-img.jpeg"
                    alt="Logo"
                    className="w-10 h-10 object-cover rounded-full"
                />
                <button
                    onClick={() => router.push("/")}
                    className="bg-gradient-to-r from-[#745b77] to-[#36263a] px-4 py-2 rounded-xl text-white font-semibold hover:opacity-90 transition"
                >
                    Home
                </button>
            </div>



            <div className="bg-gray-50 min-h-screen py-10 px-4">
                <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">

                    {/* Logo */}
                    <img src='/logo.png' className='w-60 h-40 mx-auto mb-5' />

                    {/* Ticket Info */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Available Ticket Types</h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li><strong>Kids Entry:</strong> For children below 12 years, includes access to kids’ zone.</li>
                            <li><strong>General Entry:</strong> Access to all water park rides and pools.</li>
                            <li><strong>VIP Entry:</strong> Includes locker, lunch, and queue-free access.</li>
                        </ul>
                    </section>

                    {/* Divider */}
                    <div className='my-6 flex justify-center'>
                        <img src='/hr_line.png' alt='Divider' className='w-full' />
                    </div>

                    {/* Pricing */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Pricing</h2>
                        <div className="grid grid-cols-2 gap-4 text-gray-700">
                            <div>Kids Ticket:</div>
                            <div>₹599</div>
                            <div>Senior Ticket:</div>
                            <div>₹599</div>
                            <div>Adult Ticket:</div>
                            <div>₹799</div>
                        </div>
                    </section>

                    {/* Quantity Selection */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Select Quantity</h2>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <label htmlFor="adults" className="font-medium">Adults:</label>
                                <input
                                    id="adults"
                                    type="number"
                                    min="0"
                                    value={adultQty}
                                    onChange={(e) => setAdultQty(parseInt(e.target.value) || 0)}
                                    className="w-20 border px-2 py-1 rounded"
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <label htmlFor="kids" className="font-medium">Kids:</label>
                                <input
                                    id="kids"
                                    type="number"
                                    min="0"
                                    value={kidsQty}
                                    onChange={(e) => setKidsQty(parseInt(e.target.value) || 0)}
                                    className="w-20 border px-2 py-1 rounded"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Booking Date */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Visit Date:</h2>
                        <input
                            type='text'
                            value={selectedDate}
                            readOnly
                            className="w-full border px-4 py-2 bg-[#050F34] rounded text-white font-bold"
                        />
                    </section>

                    {/* Proceed Button */}
                    <div className="text-center">
                        <button
                            onClick={() =>
                                router.push("https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction")
                            }
                            disabled={adultQty + kidsQty === 0}
                            className={`font-semibold px-6 py-3 rounded-lg transition
            ${adultQty + kidsQty === 0
                                    ? 'bg-gradient-to-r from-gray-300 to-gray-500 cursor-not-allowed hover:opacity-90 transition'
                                    : 'bg-gradient-to-r from-blue-400 to-blue-800 text-white hover:opacity-90 transition'}
        `}>
                            Proceed to Payment
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer/>
        </>
    );
};

export default BookTickets;
