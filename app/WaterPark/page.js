"use client"
import React from 'react'
import { Link, Element } from 'react-scroll';
import { CgEditHighlight } from "react-icons/cg";
import { SiInformatica } from "react-icons/si";
import Navbar from '../Navbar/MainContent/page'
import Footer from '../Footer/MainContent/page'

const WaterPark = () => {

  const highlights =
    [{ image: '/ticket1.jpg', title: 'Zone 1', desc: 'Wave of Dreams' },
    { image: '/ticket2.jpg', title: 'ZONE 2', desc: 'Aqua Beats' },
    { image: '/ticket3.jpg', title: 'Zone 3', desc: 'Aqua Drift' },
    ]

  const highlights2 = [
    { image: '/big-banner-2.png', title: 'ZONE 4', desc: 'Aqua Treasure Bay' },
    { image: '/ticket5.jpg', title: 'Zone 5', desc: 'Aqua Thrill Zone' }
  ]

  return (
    <div className='bg-[#F7F7F7] min-h-screen'>
      <Navbar />

      <img src='/big-banner-2.png'
        className='w-full md:h-80 object-cover' />

      {/* Link to navigate */}
      <div className='px-4'>
        <div className="flex items-center justify-center gap-4 mt-10 bg-white py-6 rounded-xl shadow-xl mx-auto max-w-xl">

          {/* Park Highlights button with Icon */}
          <div className="w-40 text-sm md:w-auto md:text-md flex flex-col items-center gap-3 group transition duration-300">
            <CgEditHighlight className="text-yellow-500 text-3xl group-hover:rotate-19 transition-transform duration-300" />
            <Link to="highlights" smooth={true} duration={600}>
              <button className="bg-gradient-to-r from-gray-300 to-gray-100 text-black font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-gray-400 transition">
                Park highlights
              </button>
            </Link>
          </div>

          {/* Park information Button with Icon */}
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
          <h1 className='text-3xl font-InspireTWDC font-extrabold text-center mb-4'>Welcome to our destination of dreams</h1>
          <p className='text-gray-700 text-center text-lg font-semibold tracking-wider'>
            Fantasy is reality in Dream Asia, where classic Dream Asia and Star Wars legends are brought to life like nowhere else.
          </p>
        </div>

        {/* Line separator */}
        <div className='my-6 flex justify-center mb-12'>
          <img src='/hr_line.png' alt='Divider' className='w-full' />
        </div>

        <div className='text-center space-y-10'>
          <h1 className='text-2xl font-extrabold'>
            Enter a world of magic that inspires the imagination
          </h1>
          <section className='space-y-6'>
            <img
              src='/waterpark_img.jpg'
              className='w-full h-full object-cover transform transition-transform duration-300 hover:-translate-y-1'
            />
            <p className='text-lg font-bold'>With Sleeping Beauty Castle at the heart of this fairy-tale setting, the attractions, parades and restaurants will immerse you in the Dream Asia magic you know and love.</p>
          </section>
        </div>

        <div className='my-6 flex justify-center mb-12'>
          <img src='/hr_line.png' alt='Divider' className='w-full' />
        </div>

        <Element name='highlights'>
          <div className='max-w-6xl mx-auto'>
            <h1 className='text-2xl font-extrabold text-center mb-8'>Explore at Maharashtra's Biggest Water Park</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {highlights.map((item, index) => (
                <div key={index} className='bg-white rounded-lg shadow-md p-4 text-center hover:shadow-xl'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-48 object-cover rounded-md mb-4 transform transition-transform duration-300 hover:-translate-y-1'
                  />
                  <h3 className='text-xl font-bold'>{item.title}</h3>
                  <p className='text-gray-700 mt-2'>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className='grid gird-cols-1 md:grid-cols-2 gap-8 mt-8'>
              {highlights2.map((item, index) => (
                <div key={index} className='bg-white rounded-lg shadow-md p-4 text-center hover:shadow-xl'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-52 object-cover rounded-md mb-4 transform transition-transform duration-300 hover:-translate-y-1'
                  />
                  <h3 className='text-xl font-bold'>{item.title}</h3>
                  <p className='text-gray-700 mt-2'>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Element>

        <div className='my-6 flex justify-center mb-12'>
          <img src='/hr_line.png' alt='Divider' className='w-full' />
        </div>

        <div className='text-center'>
          <h1 className='text-2xl font-extrabold mb-8'>Fun-Filled Water Park</h1>
          <p className='text-lg font-semibold mb-6'>Step into Dreamasia and experience the thrill of 15+ action-packed game activities
          </p>
          <section className="max-w-6xl mx-auto flex overflow-x-auto gap-4 p-4">
            <img src="/boat.avif" alt="boat theme" className="w-70 h-68 object-cover flex-shrink-0 rounded-lg transform transition-transform duration-300 hover:-translate-y-1" />
            <img src="/slides.jpeg" alt="slides" className="w-70 h-68 object-cover flex-shrink-0 rounded-lg transform transition-transform duration-300 hover:-translate-y-1" />
            <img src="/Fun-Filled2.jpg" alt="Fun Field2" className="w-70 h-68 object-cover flex-shrink-0 rounded-lg transform transition-transform duration-300 hover:-translate-y-1" />
            <img src="/Fun-Filled3.jpg" alt="Fun Field3" className="w-70 h-68 object-cover flex-shrink-0 rounded-lg transform transition-transform duration-300 hover:-translate-y-1" />
            <img src="/images.jpeg" alt="water park theme" className="w-70 h-68 object-cover flex-shrink-0 rounded-lg transform transition-transform duration-300 hover:-translate-y-1" />
          </section>
          <section className='flex flex-col items-center mt-10'>
            <h1 className='text-2xl font-extrabold mb-10'>Find your way around...</h1>
            <img src='/dreamasia-image.jpg'
              className='w-full h-full rounded-xl transform transition-transform duration-300 hover:-translate-y-1' />
          </section>
        </div>

        <div className='my-6 flex justify-center mb-12'>
          <img src='/hr_line.png' alt='Divider' className='w-full' />
        </div>

        <Element name='information'>
          <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-center mb-8">
              Everything you need to know for your visit
            </h1>

            <div className="flex flex-col md:flex-row gap-6 justify-between">

              <section className="flex-1 bg-white shadow-lg rounded-lg hover:shadow-2xl p-4 text-center">
                <img src="/clock-1.png" alt="Opening Hours" className="w-20 h-20 mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2">Opening Hours</h2>
                <p>Check the park opening hours before you come, as they can vary depending on the season!</p>
              </section>

              <section className="flex-1 bg-white shadow-lg rounded-lg hover:shadow-2xl p-4 text-center">
                <img src="/Access.png" alt="Accessibility Services" className="w-20 h-20 mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2">Accessibility Services</h2>
                <p>Learn about our Priority Card, accessibility on our attractions and dedicated transport options.</p>
              </section>

              <section className="flex-1 bg-white shadow-lg rounded-lg hover:shadow-2xl p-4 text-center">
                <img src="/guest-service.jpeg" alt="Guest Services" className="w-20 h-20 mx-auto mb-4 bg-blue-400" />
                <h2 className="text-xl font-semibold mb-2">Guest Services</h2>
                <p>Safety comes first at our park. From strict height requirements on rides to routine safety inspections of all equipment, every measure is taken to ensure a secure and thrilling experience for every guest.</p>
              </section>
            </div>
          </div>
        </Element>
      </div>
      <Footer />
    </div>
  )
}

export default WaterPark