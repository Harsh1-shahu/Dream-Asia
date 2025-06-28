"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const PlaceToStay = () => {
  const router = useRouter();
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-b-2xl flex flex-col md:flex-row items-center justify-center gap-8 p-4">
      <section onClick={()=>router.push('/Hotels')} className="flex flex-col items-center max-w-xs mx-auto bg-gray-100 rounded-md p-2 hover:scale-105">
        <img
          src="/hotels.jpeg"
          alt="Dream Asia Hotels"
          className="w-40 h-28 object-cover rounded-md"
        />
        <h1 className="mt-2 text-xl font-semibold">Dream Asia Hotels</h1>
        <p className="text-center mt-1 text-sm font-mono">Stay in the heart of the magic and enjoy unique advantages.</p>
      </section>
      <section className="flex flex-col items-center border-1 border-blue-200 rounded-md p-2">
        <img
          src="/themed-hotels1.jpg"
          alt="Themed Hotels"
          className="w-full h-36 rounded-2xl hover:scale-102"
        />
        <p className="text-center mt-2 font-mono">Find the perfect moment for your stay!</p>
      </section>
    </div>
  );
};

export default PlaceToStay;
