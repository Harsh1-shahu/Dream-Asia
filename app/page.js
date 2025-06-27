"use client";
import React from 'react'
import { Link, Element } from 'react-scroll';
import { GiCursedStar } from "react-icons/gi";
import { GiStarFormation } from "react-icons/gi";
import Navbar from './Navbar/MainContent/page'
import Footer from './Footer/MainContent/page'
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  return (
    <div className="bg-[#F7F7F7] min-h-screen">
      <Navbar />

      <div className="relative w-full p-4">
        {/* Background Image */}
        <img
          src="/discover2.jpg"
          alt="Dream Asia background"
          className="w-full h-60 md:h-120 object-cover rounded-t-4xl md:rounded-b-[100px]"
        />

        {/* Header Section - centered in image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 
              bg-[#683B66] opacity-90 text-white text-center p-2 md:p-4 rounded-xl shadow-lg md:max-w-2xl">
          <h1 className="text-md md:text-4xl font-bold mb-2">Dream Asia Tickets & Packages</h1>
          <p className="text-sm md:text-lg">
            Planning a trip to the heart of the magic? Explore the different ways to come to Dream Asia!
          </p>
        </div>
      </div>

      {/* Link to navigate */}
      <div className='px-4'>
      <div className="flex items-center justify-center flex-wrap gap-8 mt-10 bg-white py-6 rounded-xl shadow-xl mx-auto max-w-xl">

        {/* Booking Terms Button with Icon */}
        <div className="flex flex-col items-center gap-3 group transition duration-300">
          <GiCursedStar className="text-yellow-500 text-3xl group-hover:rotate-19 transition-transform duration-300" />
          <Link to="peaceOfMind" smooth={true} duration={600}>
            <button className="bg-gradient-to-r from-gray-300 to-gray-100 text-black font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-gray-400 transition">
              Booking Terms
            </button>
          </Link>
        </div>

        {/* Experience Button with Icon */}
        <div className="flex flex-col items-center gap-3 group transition duration-300">
          <GiStarFormation className="text-yellow-500 text-3xl group-hover:rotate-19 transition-transform duration-300" />
          <Link to="Experience" smooth={true} duration={600}>
            <button className="bg-gradient-to-r from-gray-300 to-gray-100 text-black font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-gray-400 transition">
              Experience
            </button>
          </Link>
        </div>
      </div>
      </div>

      {/* Ticket Cards Section */}
      <div className="text-center px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-700 mb-4">
          Book Your Tickets
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-medium">
          Choose the perfect ticket for your dream day at Dream Asia. Whether you're a thrill-seeking adventurer, a family of fun-lovers, or a relaxed explorer — we have something magical for everyone!
        </p>
      </div>

      <section className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 p-6">
        {/* Cool Kid Card */}
        <div className="bg-white p-4 rounded-lg shadow-md w-72 transition hover:shadow-xl">
          <img src="/kool-kid.jpg" alt="Cool Kid" className="w-full h-28 object-cover rounded-md mb-3 transform transition-transform duration-300 hover:-translate-y-1" />
          <h2 className="text-lg font-semibold mb-2 text-center bg-violet-300 py-1 rounded-md font-serif">Cool Kid</h2>
          <p className='text-sm bg-pink-100 rounded-xl mt-3 font-medium mb-3 text-center'>Enjoy the magic for 1 or several days</p>
          <ul className="list-disc pl-4 text-gray-700 mb-4 space-y-1 text-sm font-medium">
            <li>Wavy Wonders & Active Adventure</li>
            <li>Free Entry Below 3.3 Feet in Height</li>
            <li>3.3 Feet to 4.6 Feet in Height</li>
          </ul>
          <div className='md:pt-10'>
            <p className="text-xl font-bold text-center text-indigo-600 bg-indigo-100 w-fit mx-auto px-3 py-1 rounded-full">
              Rs 599.00
            </p>
            <div className="text-center">
              <button
                onClick={() => router.push("/Booking")}
                className="mt-3 bg-gradient-to-l from-blue-800 to-blue-400 text-white px-4 py-2 rounded-md hover:opacity-90 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Awesome Adult Card */}
        <div className="bg-white p-4 rounded-lg shadow-md w-72 transition hover:shadow-xl">
          <img src="/couple.webp" alt="Awesome Adult" className="w-full h-28 object-cover rounded-md mb-3 transform transition-transform duration-300 hover:-translate-y-1" />
          <h2 className="text-lg font-semibold mb-2 text-center bg-violet-300 py-1 rounded-md font-serif">Awesome Adult</h2>
          <p className='text-sm bg-pink-100 rounded-xl mt-3 font-medium mb-3 text-center'>Stay close to the magic!</p>
          <ul className="list-disc pl-4 text-gray-700 mb-4 space-y-1 text-sm font-medium">
            <li>Wavy Wonders & Active Adventure</li>
            <li>Stag Entry Not Allowed</li>
            <li>A high-quality hotel close to the Dream Asia Parks</li>
          </ul>
          <div className='md:pt-5'>
          <p className="text-xl font-bold text-center text-indigo-600 bg-indigo-100 w-fit mx-auto px-3 py-1 rounded-full">
            Rs 599.00
          </p>
          <div className="text-center">
            <button
              onClick={() => router.push("/Booking")}
              className="mt-3 bg-gradient-to-l from-blue-800 to-blue-400 text-white px-4 py-2 rounded-md hover:opacity-90 transition">
              Buy Now
            </button>
            </div>
          </div>
        </div>

        {/* Super Senior Card */}
        <div className="bg-white p-4 rounded-lg shadow-md w-72 transition hover:shadow-xl">
          <img src="/senior.jpg" alt="Super Senior" className="w-full h-28 object-cover rounded-md mb-3 transform transition-transform duration-300 hover:-translate-y-1" />
          <h2 className="text-lg font-semibold mb-2 text-center bg-violet-300 py-1 rounded-md font-serif">Super Senior</h2>
          <p className='text-sm bg-pink-100 rounded-xl mt-3 font-medium mb-3 text-center'>Enjoy the magic for 1 or several days</p>
          <ul className="list-disc pl-4 text-gray-700 mb-4 space-y-1 text-sm font-medium">
            <li>Wavy Wonders & Active Adventure</li>
            <li>Cashless system for all transactions</li>
            <li>Dated tickets can be cancelled up to 3 days before arrival</li>
          </ul>
          <p className="text-xl font-bold text-center text-indigo-600 bg-indigo-100 w-fit mx-auto px-3 py-1 rounded-full">
            Rs 799.00
          </p>
          <div className="text-center">
            <button
              onClick={() => router.push("/Booking")}
              className="mt-3 bg-gradient-to-l from-blue-800 to-blue-400 text-white px-4 py-2 rounded-md hover:opacity-90 transition">
              Buy Now
            </button>
          </div>
        </div>
      </section>
      {/* Separator Image */}
      <img src='/separator.png' />

      {/* Experience at Dreamasia */}
      <Element name="Experience">
      <div className="bg-[#F9FAFB] py-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Experience at Dreamasia</h1>

        <section className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 px-4">

          {/* Water Park */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 transition hover:shadow-xl">
            <img src="/facilities.jpg" alt="Water Park" className="w-full h-40 object-cover transform transition-transform duration-300 hover:-translate-y-1" />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-indigo-700 mb-2">Water Park</h2>
              <p className="text-gray-600 mb-3">Blurring the lines between water rides and reality.</p>
              <button
                onClick={() => router.push("/WaterPark")}
                className="text-blue-600 px-4 py-2 border-2 border-blue-600 font-bold rounded-xl">
                Find Out More
              </button>
            </div>
          </div>

          {/* Amusement Park */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 transition hover:shadow-xl">
            <img src="/slides.jpeg" alt="Amusement Park" className="w-full h-40 object-cover transform transition-transform duration-300 hover:-translate-y-1" />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-indigo-700 mb-2">Amusement Park</h2>
              <p className="text-gray-600 mb-3">We see more in paradise when we come together.</p>
              <button
                onClick={() => router.push("/AmusementPark")}
                className="text-blue-600 px-4 py-2 border-2 border-blue-600 font-bold rounded-xl">
                Find Out More
              </button>
            </div>
          </div>

          {/* Destination Wedding */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 transition hover:shadow-xl">
            <img src="/destinationwedding.jpg" alt="Destination Wedding" className="w-full h-40 object-cover transform transition-transform duration-300 hover:-translate-y-1" />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-indigo-700 mb-2">Destination Wedding</h2>
              <p className="text-gray-600 mb-3">To love, laughter, and happily ever after.</p>
              <button
                onClick={() => router.push("/")}
                className="text-blue-600 px-4 py-2 border-2 border-blue-600 font-bold rounded-xl">
                Find Out More
              </button>
            </div>
          </div>
        </section>
      </div>
      </Element>

      <div className='flex items-center justify-center gap-4 px-4'>
        <button
          onClick={() => router.push("/Booking")}
          className='bg-gradient-to-l from-blue-800 to-blue-400 rounded-full px-4 py-2 shadow-2xl font-bold text-white hover:opacity-90 transition'>
          Book a Hotel + Ticket Package
        </button>
        <button
          onClick={() => router.push("/Booking")}
          className='bg-gradient-to-l from-blue-800 to-blue-400 rounded-full px-4 py-2 shadow-2xl font-bold text-white hover:opacity-90 transition'>
          Buy Tickets
        </button>
      </div>

      <Element name="peaceOfMind">
        {/* Peace of Mind Guarantee */}
        <div className="bg-[#F9FAFB] py-10 px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Peace of Mind Guarantee</h1>
          <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
            Discover our promises to book your stay with confidence.
          </p>

          <section className="max-w-6xl mx-auto flex flex-wrap justify-center gap-5">

            {/* Flexible bookings */}
            <div className="bg-white p-4 rounded-lg shadow-lg w-64 text-center hover:shadow-xl">
              <img src="/FlexibleBookings.jpg" alt="Flexible bookings" className="w-full h-32 object-cover rounded-md mb-3" />
              <h2 className="text-lg font-semibold text-indigo-700 mb-2">Flexible Bookings</h2>
              <p className="text-sm text-gray-600">
                Change your mind? Modify or cancel your booking for free up to 3 days before arrival.
              </p>
            </div>

            {/* Bulk Booking */}
            <div className="bg-white p-4 rounded-lg shadow-md w-64 text-center hover:shadow-xl">
              <img src="/BulkBooking.jpg" alt="Bulk Booking" className="w-full h-32 object-cover rounded-md mb-3" />
              <h2 className="text-lg font-semibold text-indigo-700 mb-2">Bulk Booking</h2>
              <p className="text-sm text-gray-600">
                Group fun starts here! Book bulk water park tickets now for big savings and unforgettable splashes!
              </p>
            </div>

            {/* Zero booking fees */}
            <div className="bg-white p-4 rounded-lg shadow-md w-64 text-center hover:shadow-xl">
              <img src="/Zerobookingfees.jpg" alt="Zero Booking Fees" className="w-full h-32 object-cover rounded-md mb-3" />
              <h2 className="text-lg font-semibold text-indigo-700 mb-2">Zero Booking Fees</h2>
              <p className="text-sm text-gray-600">
                The price you see is the price you pay.
              </p>
            </div>

            {/* Accomodation​ */}
            <div className="bg-white p-4 rounded-lg shadow-md w-64 text-center hover:shadow-xl">
              <img src="/Accomodation.jpg" alt="Accommodation" className="w-full h-32 object-cover rounded-md mb-3" />
              <h2 className="text-lg font-semibold text-indigo-700 mb-2">Accommodation</h2>
              <p className="text-sm text-gray-600">
                Plan your most unforgettable visit with the help of our Dream Asia Experts.
              </p>
            </div>
          </section>
        </div>
      </Element>

      {/* Separator Images */}
      <div className='my-6 flex justify-center'>
        <img src='/hr_line.png' alt='Divider' className='w-full' />
      </div>

      {/* Maharashtra's Biggest Adventure Park​ */}
      <div className="max-w-6xl mx-auto text-center px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          Maharashtra's Biggest Adventure Park
        </h1>
        <p className="text-gray-700 mb-6">
          The park prioritises safety and implements various measures to ensure it, such as height restrictions on rides and regular safety checks on equipment.
        </p>
        <img
          src="/adventure-1.jpg"
          alt="Adventure Park"
          className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-1"
        />

      </div>

      {/* Information About Park​ */}
      <div className='max-w-5xl mx-auto'>
        {/* Dream-Asia Trip Info */}
        <div className="bg-white p-4 shadow-md rounded-md mb-6 flex flex-col md:flex-row gap-4 lg:flex-row-reverse hover:shadow-xl">
          <img
            src="/big-banner-2.png"
            alt="Facility"
            className="w-full md:w-1/2 rounded-md object-cover transform transition-transform duration-300 hover:-translate-y-1"
          />
          <div className="flex flex-col gap-10">
            <h3 className="text-xl font-bold mb-2">Can’t wait for your trip? Important information to know…</h3>
            <p className="text-gray-700 mb-2">
              Your journey to Magic starts right here at Dreamasia Theme Park! Vidarbh’s best destination of fun and adventure. From thrilling activities to chilling family attractions, Dreamasia has it all! This park combines aqua fun and ultimate adventure with Wavy Wonder Water Park and Active Adventure Park. Experience the true thrill with 40+ attractions and 11 Zones! We can't wait to welcome you to Dream Asia!
            </p>
          </div>
        </div>

        {/* Entertainment Info */}
        <div className="bg-white p-4 shadow-md rounded-md mb-6 flex flex-col md:flex-row gap-4 hover:shadow-xl">
          <img
            src="/fire_show.png"
            alt="Fire Show"
            className="w-full md:w-1/2 rounded-md object-cover transform transition-transform duration-300 hover:-translate-y-1"
          />
          <div className="flex flex-col gap-10">
            <h3 className="text-xl font-bold mb-2">Entertainment Guaranteed !!</h3>
            <p className="text-gray-700 mb-2">
              This park offers adrenaline-pumping adventure rides and attractions, thrilling water slides, and family and kid-friendly attractions like the wave pool, lazy river, rain dance, and more! Double up on the entertainment with our special Evening Entertainment show with mesmerizing performances!
            </p>
          </div>
        </div>

        {/* Inbox Info */}
        <div className="bg-white p-4 shadow-md rounded-md mb-6 flex flex-col md:flex-row gap-4 lg:flex-row-reverse hover:shadow-xl">
          <img
            src="/inbox_image.jpg"
            alt="Inbox image"
            className="w-full md:w-1/2 rounded-md object-cover transform transition-transform duration-300 hover:-translate-y-1"
          />
          <div className="flex flex-col gap-10">
            <h3 className="text-xl font-bold mb-2">Sprinkle some magic into your inbox!</h3>
            <p className="text-gray-700 mb-2">
              Sign up for Dream Asia e-mails to receive news, special offers, and updates about Dream Asia, and discover all the latest from across The Walt Dream Asia Family of Companies.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>

  )
}

export default page