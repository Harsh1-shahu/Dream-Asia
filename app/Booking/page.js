"use client";
import React, { useState, forwardRef } from 'react';
import { RiCalendarTodoFill } from "react-icons/ri";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from '../Navbar/MainContent/page';
import Footer from '../Footer/MainContent/page';
import { useRouter } from 'next/navigation';

// Custom input component using forwardRef
const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="flex items-center gap-8 w-full">
        <input
            ref={ref}
            value={value}
            readOnly
            placeholder="dd/mm/yyyy"
            className="w-full p-2 rounded-lg bg-[#050F34] border border-white text-white font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        />
        <RiCalendarTodoFill
            onClick={onClick}
            className="text-3xl cursor-pointer"
            title="Open calendar"
        />
    </div>
));

const Booking = () => {
    const router = useRouter();
    const [startDate, setStartDate] = useState(new Date()); // current date by default

    return (
        <>
            <Navbar />
            <div className='p-4'>
                <div className="max-w-sm mx-auto p-4 flex flex-col items-center justify-center bg-white shadow-2xl rounded-xl">

                    {/* Banner Image */}
                    <img
                        src="/booking_date_banner_1.jpg"
                        alt="Booking Banner"
                        className="rounded-lg mb-4"
                    />

                    {/* Heading */}
                    <p className="text-center text-xl font-semibold text-gray-500 mb-2 mt-2">
                        Please Select Booking Date
                    </p>

                    {/* Date Section */}
                    <section className="mb-5 bg-[#050F34] text-white p-4 rounded-2xl shadow-lg w-full">
                        <h3 className="text-xl font-semibold mb-4 text-center">Booking Date</h3>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date()} // disable past dates
                            customInput={<CustomInput />}
                        />
                    </section>

                    {/* Continue Button */}
                    <button
                        onClick={() => {
                            const formattedDate = startDate.toISOString(); // pass as string
                            router.push(`/BookTickets?date=${encodeURIComponent(formattedDate)}`);
                        }}

                        className="bg-gradient-to-r from-blue-400 to-blue-800 text-white px-6 py-2 rounded hover:opacity-90 transition"
                    >
                        Continue
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Booking;
