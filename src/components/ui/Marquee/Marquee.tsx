"use client"
if (typeof window !== 'undefined') {
 
}
import Image from 'next/image';
import React from 'react';

// Import Marquee component
// import Marquee from '@/components/ui/Marquee/Marquee';

// Import client-only if it's used in the client-side code

const HomePage = () => {
  // Array of car logo filenames
  const carLogos = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    
      
    // Add more logo filenames here
  ];

  // Concatenate the array with itself to create a loop effect
  const duplicatedCarLogos = [...carLogos, ...carLogos];

  return (
    <div className="bg-[#222222] py-5  ">

    <div className=' relative items-center justify-center content-center  text-white flex   sm:px-36 w-full md:w-[1440px] mx-auto md:py-0'>

    <div className="flex flex-col  items-center justify-center  ">
      <div className="overflow-hidden w-full">
        {/* Render the duplicated list of car logos */}
        <div className="flex space-x-1   animate-marquee ">
          {duplicatedCarLogos.map((logo, index) => (
            <Image key={index} src={`/${logo}`} alt={`Car Logo ${index + 1}`} className="h-[95px]" />
          ))}
        </div>
        </div>
        </div>
        
      </div>
    </div>
    
  );
};

export default HomePage;

// Tailwind CSS styles

