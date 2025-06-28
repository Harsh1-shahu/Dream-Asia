"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { GiTicket } from "react-icons/gi";
import { LuTickets } from "react-icons/lu";
import { MdHome } from "react-icons/md";
import Parks from '../Components/Parks/page';
import PlaceToStay from '../Components/PlaceToStay/page';
import BookNow from '../Components/BookNow/page';
import { useRouter } from 'next/navigation';

const ButtonWithClickEffect = ({ children, color, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    if (onClick) onClick();
    setTimeout(() => setClicked(false), 400);
  };

  return (
    <button
      onClick={handleClick}
      className='relative overflow-hidden px-4 py-1 rounded-md text-white'
      style={{ backgroundColor: color }}
    >
      <AnimatePresence>
        {clicked && (
          <motion.div
            className='absolute bottom-0 left-0 w-full z-0'
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ backgroundColor: 'rgba(139, 92, 246, 1)' }}
          />
        )}
      </AnimatePresence>
      <span className='relative z-10'>{children}</span>
    </button>
  );
};

const Navbar = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleMouseEnter = (section) => setHoveredSection(section);
  const handleMouseLeave = () => setHoveredSection(null);

  return (
    <div className='w-full px-6 py-2 bg-white shadow-xl rounded-b-xl relative z-50'>
      {/* Logo and Menu Button */}
      <div className='flex items-center max-w-2xl mx-auto justify-between xl:justify-center'>
        <button onClick={() => setMenuOpen(prev => !prev)} className='text-3xl xl:hidden'>
          <IoMenu />
          <h1 className='text-xs font-semibold'>Menu</h1>
        </button>
        <img src='/logo.png' alt='Dreamasia Logo' className='h-14 xl:h-22 w-auto mx-4 xl:mx-0' />
        <div className='w-6 xl:hidden' />
      </div>


      {/* Desktop item */}
      <div className='absolute top-4 right-4 hidden xl:flex flex-col gap-12'>
        {/* Home Button */}
        <div
          onClick={() => router.push("/")}
          className='cursor-pointer bg-gradient-to-r from-blue-100 to-blue-300 rounded-full px-4 py-2 w-26 flex items-center gap-2'
        >
          <MdHome className='text-xl' />
          <h1 className='font-bold'>Home</h1>
        </div>
        {/* Ticket Buttons */}
        <div className='flex gap-2 text-white'>
          <button
            onClick={() => router.push("/Booking")}
            className='bg-gradient-to-r from-[#6B1E74] to-[#3B0D46] cursor-pointer rounded-full px-4 py-2 flex items-center gap-2'
          >
            <GiTicket />
            <h1 className='font-bold'>Tickets</h1>
          </button>
          <button
            onClick={() => router.push("/Booking")}
            className='bg-gradient-to-r from-[#6B1E74] to-[#3B0D46] cursor-pointer rounded-full px-4 py-2 flex items-center gap-2'
          >
            <LuTickets />
            <h1 className='font-bold'>Hotels + Tickets</h1>
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden xl:flex flex-wrap gap-6 justify-center items-center mt-4 relative'>
        {/* Parks Dropdown */}
        <div onMouseEnter={() => handleMouseEnter('parks')} onMouseLeave={handleMouseLeave} className='relative'>
          <ButtonWithClickEffect color="#3B82F6">Our 2 Parks</ButtonWithClickEffect>
          <AnimatePresence>
            {hoveredSection === 'parks' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className='absolute top-full left-[-120] mt-2 bg-white shadow-xl rounded-xl z-40 w-[50rem] p-4'
              >
                <Parks />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Places to Stay Dropdown */}
        <div onMouseEnter={() => handleMouseEnter('places')} onMouseLeave={handleMouseLeave} className='relative'>
          <ButtonWithClickEffect color='#3B82F6'>Places to Stay</ButtonWithClickEffect>
          <AnimatePresence>
            {hoveredSection === 'places' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className='absolute top-full left-[-250] right-0 mt-2 bg-white shadow-xl rounded-xl z-40 w-[50rem] p-4'
              >
                <PlaceToStay />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Book Now Dropdown */}
        <div onMouseEnter={() => handleMouseEnter('booknow')} onMouseLeave={handleMouseLeave} className='relative'>
          <ButtonWithClickEffect color='#22C55E'>Book Now</ButtonWithClickEffect>
          <AnimatePresence>
            {hoveredSection === 'booknow' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className='absolute top-full left-[-400] mt-2 bg-white shadow-xl rounded-xl z-40 w-[50rem] p-4'
              >
                <BookNow />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Static Route Link */}
        <ButtonWithClickEffect
          color='#6B7280'
          onClick={() => router.push('/Footer/Components/ContactUs')}
        >
          Contact Us
        </ButtonWithClickEffect>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed top-0 left-0 w-4/4 h-full bg-white shadow-xl z-50 p-6 flex flex-col gap-4 xl:hidden'
          >

            {/* logo image */}
            <div className='flex justify-center'>
              <img src='/logo.png'
                className='w-50' />
            </div>

            {/* Home Button */}
            <div
              onClick={() => router.push("/")}
              className='bg-gradient-to-r from-blue-100 to-blue-300 rounded-full px-4 py-2 w-26 flex items-center gap-2'
            >
              <MdHome className='text-xl' />
              <h1 className='font-bold'>Home</h1>
            </div>

            {/* Ticket Buttons */}
            <div className='flex gap-2 text-white'>
              <button
                onClick={() => router.push("/Booking")}
                className='bg-gradient-to-r from-[#6B1E74] to-[#3B0D46] rounded-full px-4 py-2 flex items-center gap-2'
              >
                <GiTicket />
                <h1 className='font-bold'>Tickets</h1>
              </button>
              <button
                onClick={() => router.push("/Booking")}
                className='bg-gradient-to-r from-[#6B1E74] to-[#3B0D46] rounded-full px-4 py-2 flex items-center gap-2'
              >
                <LuTickets />
                <h1 className='font-bold'>Hotels + Tickets</h1>
              </button>
            </div>

            {/* Close Button inside sidebar (optional) */}
            <button
              className='absolute self-end text-2xl mb-4'
              onClick={() => setMenuOpen(false)}
            >
              <RxCross2 />
            </button>

            {/* Parks */}
            <div className='flex flex-col'>
              <ButtonWithClickEffect
                color='#3B82F6'
                onClick={() =>
                  setHoveredSection(prev => (prev === 'parks' ? null : 'parks'))
                }
              >
                Our 2 Parks
              </ButtonWithClickEffect>
              <AnimatePresence>
                {hoveredSection === 'parks' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className='bg-white p-4 rounded-xl shadow'
                  >
                    <Parks />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Places to Stay */}
            <div className='w-full flex flex-col'>
              <ButtonWithClickEffect
                color='#3B82F6'
                onClick={() =>
                  setHoveredSection(prev => (prev === 'places' ? null : 'places'))
                }
              >
                Places to Stay
              </ButtonWithClickEffect>
              <AnimatePresence>
                {hoveredSection === 'places' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className='bg-white p-4 rounded-xl shadow'
                  >
                    <PlaceToStay />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Book Now */}
            <div className='w-full flex flex-col'>
              <ButtonWithClickEffect
                color='#22C55E'
                onClick={() =>
                  setHoveredSection(prev => (prev === 'booknow' ? null : 'booknow'))
                }
              >
                Book Now
              </ButtonWithClickEffect>
              <AnimatePresence>
                {hoveredSection === 'booknow' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className='bg-white p-4 rounded-xl shadow'
                  >
                    <BookNow />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Us */}
            <ButtonWithClickEffect
              color='#6B7280'
              onClick={() => {
                setMenuOpen(false);
                router.push('/Footer/Components/ContactUs');
              }}
            >
              Contact Us
            </ButtonWithClickEffect>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
