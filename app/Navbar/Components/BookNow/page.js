import React from 'react'
import { useRouter } from 'next/navigation';

const BookNow = () => {
  const router = useRouter();
  return (
    <div className='max-w-5xl mx-auto bg-white shadow-xl rounded-b-2xl flex flex-col md:flex-row items-center justify-center gap-6 p-4'>
      <section 
      onClick={() => router.push("/Booking")}
      className='text-center bg-gray-100 rounded-md p-2 hover:scale-105'>
        <img src='/discover1.jpg' 
        className='w-full h-30 rounded-md'/>
        <p className='text-gray-600 font-mono mt-2'>
          Dream Asia Dated Tickets & Hotel Packages</p>
      </section>

      <section className='max-w-sm text-center bg-gray-100 border-1 border-blue-200 rounded-md p-2'>
        <img src='/Super_Senior.jpg' 
        className='w-full h-30 rounded-md hover:scale-102'/>
        <p className='text-gray-600 font-semibold font-mono mt-2'>Visit Dream Asia for an unforgettable adventure and endless fun!</p>
      </section>
    </div>
  )
}

export default BookNow;