"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const Parks = () => {
  const router = useRouter();
  return (
    <div className='max-w-5xl mx-auto bg-white shadow-xl rounded-b-2xl flex flex-col md:flex-row items-center justify-center gap-6 p-3'>

      <section onClick={()=>router.push('/AmusementPark')} className='text-center bg-gray-100 rounded-md p-2 hover:scale-105'>
        <img src='/Amusement-Park.jpg' alt='Amusement Park' className='w-full h-32 object-contain rounded-lg' />
        <p className='text-gray-600 font-mono'>Prepare to be inspired and enchanted. Magic is in the air!</p>
      </section>

      <section onClick={()=>router.push('/WaterPark')} className='text-center bg-gray-100 rounded-md p-2 hover:scale-105'>
        <img src='/Water-Park.webp' alt='Water Park' className='w-full h-32 object-contain rounded-lg ' />
        <p className='text-gray-600 font-mono'>Dive into the heart of the action. You're the star!</p>
      </section>

      <section className='max-w-xs mx-auto text-center border-1 border-blue-200 rounded-xl p-2 bg-gray-100'>
        <img src='/tick-1.jpg' alt='Fast Food' className='w-full h-30 rounded-lg hover:scale-102' />
        <p className='text-gray-600 font-semibold font-mono mt-2'>Take your family on an unforgettable trip to a top amusement and water park!</p>
      </section>

    </div>
  );
};

export default Parks;
