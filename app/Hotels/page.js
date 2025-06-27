"use client"
import React from 'react'
import { Link, Element } from 'react-scroll';
import { GiMagicShield } from "react-icons/gi";
import { TbParkingCircleFilled } from "react-icons/tb";
import { LuTicketsPlane } from "react-icons/lu";
import { RiHotelFill } from "react-icons/ri";
import { SiInformatica } from "react-icons/si";
import { MdLocalHotel } from "react-icons/md";
import Navbar from '../Navbar/MainContent/page'
import Footer from '../Footer/MainContent/page'

const Hotels = () => {
  return (
    <div className='bg-[#F7F7F7] min-h-screen'>
      <Navbar />

      <img src='/hotel.webp'
        className='w-full md:h-80 object-cover' />

      {/* Link to navigate */}
            <div className='px-4'>
              <div className="flex items-center justify-center gap-4 mt-10 bg-white py-6 rounded-xl shadow-xl mx-auto max-w-xl">
      
                {/* Book Hotels button with Icon */}
                <div className="w-40 text-sm md:w-auto md:text-md flex flex-col items-center gap-3 group transition duration-300">
                  <RiHotelFill className="text-yellow-500 text-3xl group-hover:rotate-19 transition-transform duration-300" />
                  <Link to="hotels" smooth={true} duration={600}>
                    <button className="bg-gradient-to-r from-gray-300 to-gray-100 text-black font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-gray-400 transition">
                       Themed Hotels
                    </button>
                  </Link>
                </div>
      
                {/* Information Button with Icon */}
                <div className="w-50 text-sm md:w-auto md:text-md flex flex-col items-center gap-3 group transition duration-300">
                  <SiInformatica className="text-yellow-500 text-3xl group-hover:rotate-19 transition-transform duration-300" />
                  <Link to="information" smooth={true} duration={600}>
                    <button className="bg-gradient-to-r from-gray-300 to-gray-100 text-black font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-gray-400 transition">
                      Practical information
                    </button>
                  </Link>
                </div>
              </div>
            </div>

      <div className='w-full p-5 mt-10 space-y-12'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-3xl font-extrabold text-center mb-4'>Make the magic last around the clock!</h1>
          <p className='text-gray-700 text-center text-lg font-semibold tracking-wider'>
            When you stay at a Dream Asia Hotel, you'll enjoy a fully immersive experience and unique benefits. It's the perfect choice for all ages.
          </p>
        </div>
        <div className='bg-white p-4 max-w-5xl mx-auto shadow-md rounded-md hover:shadow-xl mb-6 flex flex-col md:flex-row gap-4'>
          <img src='/place-to-stay-Hotel.jpg' alt='Place to Stay' className='w-full md:w-1/2 rounded-md object-cover transition-transform duration-300 hover:-translate-y-1' />
          <div>
            <h3 className='text-xl font-bold mb-2'>Discover the newly reimagined Dream Asia Hotel!</h3>
            <p className='text-gray-700'>
              Live the life of royalty at Dream Asia Hotel, the ultimate 5-star royal residence at the entrance to Dream Asia Park. Be our Guest and you’ll be just a few steps from our magical attractions, shows, parades and Dream Asia Character Encounters. It doesn’t get any closer than this!
            </p>
          </div>
        </div>

        <Element name='hotels'>
          <div>
            <h1 className='text-3xl font-extrabold text-center mb-4'>Our themed hotels</h1>
            <p className='text-gray-700 text-center text-lg font-semibold tracking-wider'>Each Dream Asia Hotel immerses you in an iconic theme with its own magical tale to tell. Wonderful worlds await for all ages, budgets and dreams.</p>
            <section className="max-w-5xl mx-auto flex overflow-x-auto gap-4 p-4 mt-5 flex-nowrap">
              <div className="bg-white flex-shrink-0 min-w-[280px] max-w-xs shadow-xl p-4 rounded-md">
                <img src="/lodge.jpg" alt="Commando Activity" className="h-80 object-cover rounded-lg w-80 transition-transform duration-300 hover:-translate-y-1" />
                <h1 className="mt-2 text-lg font-semibold">Dream Asia Sequoia Lodge</h1>
                <p className="text-sm text-gray-700">Relax in a grand lodge designed with a touch of Bambi magic</p>
              </div>
              <div className="bg-white flex-shrink-0 min-w-[280px] max-w-xs shadow-xl p-4 rounded-md">
                <img src="/themed-hotels1.jpg" alt="Zip Line" className="h-80 object-cover rounded-lg w-80 transition-transform duration-300 hover:-translate-y-1" />
                <h1 className="mt-2 text-lg font-semibold">Dream Asia Hotel</h1>
                <p className="text-sm text-gray-700">Celebrate the magic of Dream Asia stories...and write your own!</p>
              </div>
              <div className="bg-white flex-shrink-0 min-w-[280px] max-w-xs shadow-xl p-4 rounded-md">
                <img src="/ngp-hotel.jpg" alt="Bungee Jumping" className="h-80 object-cover rounded-lg w-80 transition-transform duration-300 hover:-translate-y-1" />
                <h1 className="mt-2 text-lg font-semibold">Dream Asia Hotel Nagpur</h1>
                <p className="text-sm text-gray-700">Live the Laxurious life in a contemporary setting.</p>
              </div>
              <div className="bg-white flex-shrink-0 min-w-[280px] max-w-xs shadow-xl p-4 rounded-md">
                <img src="/wooden-lodge.jpeg" alt="Giant Swing" className="h-80 object-cover rounded-lg w-80 transition-transform duration-300 hover:-translate-y-1" />
                <h1 className="mt-2 text-lg font-semibold">Dream Asia Newport Bay Club</h1>
                <p className="text-sm text-gray-700">Wake-up in a world of seaside splendour with a nautical nod to Dream Asia adventures.</p>
              </div>
              <div className="bg-white flex-shrink-0 min-w-[280px] max-w-xs shadow-xl p-4 rounded-md">
                <img src="/hotel-stay.jpg" alt="Giant Wheel" className="h-80 object-cover rounded-lg w-80 transition-transform duration-300 hover:-translate-y-1" />
                <h1 className="mt-2 text-lg font-semibold">Dream Asia Wooden Lodge</h1>
                <p className="text-sm text-gray-700">Relax in a grand Wooden lodge designed with a touch of Bamboo!</p>
              </div>
            </section>
          </div>
        </Element>

        <div className='max-w-5xl mx-auto'>
          <h1 className="text-3xl font-extrabold text-center mb-4">
            Find the ideal accommodation for you!
          </h1>
          <p className="text-gray-700 text-center text-lg font-semibold tracking-wider mb-6">
            Whether you're looking for a room, bungalow or Dream Asia suite, there's something for all tastes and budgets!
          </p>

          {/* Family Rooms and Cabins */}
          <div className="bg-white p-4 shadow-md rounded-md hover:shadow-xl mb-6 flex flex-col md:flex-row gap-4">
            <img
              src="/family-rooms.jpg"
              alt="Hotel Room"
              className="w-full md:w-1/2 rounded-md object-cover transition-transform duration-300 hover:-translate-y-1"
            />
            <div className="flex flex-col gap-10">
              <h3 className="text-xl font-bold mb-2">Family Rooms and Cabins</h3>
              <p className="text-gray-700 mb-2">
                Choose from our family rooms, single rooms, with or without lakeside view or garden terrace, or even a cosy cabin in the forest... whichever you choose, you're sure to enjoy a unique Dream Asia experience!
              </p>
            </div>
          </div>

          {/* Club Rooms and Suites */}
          <div className="bg-white p-4 shadow-md rounded-md hover:shadow-xl mb-6 flex flex-col md:flex-row gap-4 lg:flex-row-reverse">
            <img
              src="/club_rooms.jpg"
              alt="Club Room"
              className="w-full md:w-1/2 rounded-md object-cover transition-transform duration-300 hover:-translate-y-1"
            />
            <div className="flex flex-col gap-10">
              <h3 className="text-xl font-bold mb-2">Club Rooms and Suites</h3>
              <p className="text-gray-700 mb-2">
                Join the club and benefit from premium rooms and exclusive services.
              </p>
              <p className="text-gray-700">
                Choose a Club Room or Suite and enjoy Dream Asia VIP treatment with private check-in, a dedicated lounge, valet services and more!
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-extrabold text-center mb-4">
            Find the ideal accommodation for you!
          </h1>
          <p className="text-gray-700 text-center text-lg font-semibold tracking-wider mb-6">
            Whether you're looking for a room, bungalow or Dream Asia suite, there's something for all tastes and budgets!
          </p>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-4 shadow-md rounded-md hover:shadow-xl flex flex-col items-start">
              <img
                src="/restaurant.avif"
                alt="Dream Asia-themed restaurants"
                className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 hover:-translate-y-1"
              />
              <h2 className="text-xl font-bold mb-2">Dream Asia-themed Restaurants</h2>
              <p className="text-gray-700">
                Enjoy Dream Asia dining in your hotel with uniquely themed restaurants!
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 shadow-md rounded-md hover:shadow-xl flex flex-col items-start">
              <img
                src="/servings.jpg"
                alt="Character Encounters"
                className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 hover:-translate-y-1"
              />
              <h2 className="text-xl font-bold mb-2">Character Encounters in Your Hotel</h2>
              <p className="text-gray-700">
                Meet beloved Dream Asia characters right in your hotel for unforgettable moments. Share smiles, snap photos, and make memories that last a lifetime.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 shadow-md rounded-md hover:shadow-xl flex flex-col items-start">
              <img
                src="/restaurant-view.jpeg"
                alt="Dream Asia Details"
                className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 hover:-translate-y-1"
              />
              <h2 className="text-xl font-bold mb-2">A Feast for the Eyes</h2>
              <p className="text-gray-700">
                Keep your eyes peeled! Our hotels are adorned with subtle Dream Asia-themed details everywhere you look.
              </p>
            </div>
          </section>
        </div>

        <div className='max-w-5xl mx-auto'>
          {/* Dream-Asia Facilities */}
          <div className="bg-white p-4 shadow-md rounded-md hover:shadow-xl mb-6 flex flex-col md:flex-row gap-4">
            <img
              src="/facilities.jpg"
              alt="Facility"
              className="w-full md:w-1/2 rounded-md object-cover transition-transform duration-300 hover:-translate-y-1"
            />
            <div className="flex flex-col gap-10">
              <h3 className="text-xl font-bold mb-2">Take time out in your hotel with exceptional facilities</h3>
              <p className="text-gray-700 mb-2">
                Each hotel is equipped with leisure facilities so you can prolong the magic. From pools, fitness centres, spas to kids corners, the fun never stops!
              </p>
            </div>
          </div>

          {/* Club Rooms and Suites */}
          <div className="bg-white p-4 shadow-md rounded-md hover:shadow-xl mb-6 flex flex-col md:flex-row gap-4 lg:flex-row-reverse">
            <img
              src="/facilities2.jpg"
              alt="Facility"
              className="w-full md:w-1/2 rounded-md object-cover transition-transform duration-300 hover:-translate-y-1"
            />
            <div className="flex flex-col gap-10">
              <h3 className="text-xl font-bold mb-2">Get ready for your trip with our official Website!</h3>
              <p className="text-gray-700 mb-2">
                Find practical information about your stay, check in between 1 and 7 days prior to arrival, and access your digital MagicPass so you can head straight to the Dream Asia Parks when you arrive!
              </p>
            </div>
          </div>
        </div>

        <Element name='information'>
          <h1 className='text-3xl font-extrabold text-center mb-4'>Unlock unique Dream Asia advantages</h1>
          <p className='text-gray-700 text-center text-lg font-semibold tracking-wider'>
            Book a stay in a Dream Asia Hotel and benefit from special advantages that keep you close to the magic night and day!
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
            {/* Extra Magic Time */}
            <section className="p-4 bg-white rounded-md shadow-md hover:shadow-xl text-center flex flex-col items-center">
              <GiMagicShield className="text-6xl text-blue-600 mb-2" />
              <h1 className="text-xl font-bold mt-3">Extra Magic Time</h1>
              <p className="text-gray-700 mt-2">
                Enter the Parks before they open and greet Dream Asia Characters at your hotel.
              </p>
            </section>

            {/* Access to Both Parks */}
            <section className="p-4 bg-white rounded-md shadow-md hover:shadow-xl text-center flex flex-col items-center">
              <LuTicketsPlane className="text-6xl text-green-600 mb-2" />
              <h1 className="text-xl font-bold mt-3">Access to Both Parks</h1>
              <p className="text-gray-700 mt-2">
                Enjoy the Parks from morning until night for every day of your stay.
              </p>
            </section>

            {/* Close to the Parks */}
            <section className="p-4 bg-white rounded-md shadow-md hover:shadow-xl text-center flex flex-col items-center">
              <MdLocalHotel className="text-6xl text-purple-600 mb-2" />
              <h1 className="text-xl font-bold mt-3">Close to the Parks</h1>
              <p className="text-gray-700 mt-2">
                Stay near the fun with easy access to all attractions throughout the day.
              </p>
            </section>

            {/* Free Parking */}
            <section className="p-4 bg-white rounded-md shadow-md hover:shadow-xl text-center flex flex-col items-center">
              <TbParkingCircleFilled className="text-6xl text-red-600 mb-2" />
              <h1 className="text-xl font-bold mt-3">Free Parking</h1>
              <p className="text-gray-700 mt-2">
                Take advantage of free parking right by your accommodation and the Park entrances.
              </p>
            </section>
          </div>
        </Element>
      </div>
      <Footer />
    </div>
  )
}

export default Hotels