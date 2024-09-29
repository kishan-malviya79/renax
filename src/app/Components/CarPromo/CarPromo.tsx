import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

function RentalCars1() {
  return (
    <div className="w-full bg-fixed relative">
      <div
        className="w-full   lg:bg-fixed bg-cover sm:bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${`bugatti1.jpg`})`, // Replace bugatti.jpg with your actual image file name or path
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black overlay */}
        <div className="relative w-full py-28">
          
          <div className="relative items-center justify-center text-white flex flex-col sm:px-36 md:px-24  w-full lg:w-[1440px] mx-auto md:py-0">
            
            <div className="items-center flex flex-col gap-4">
              <h5 className="text-[#f5b754] tracking-[6px] text-[10px]">EXPLORE</h5>
              <h1 className="font-Outfit font-bold    text-[30px] sm:text-[35px]">
                Car <span className="text-[#f5b754]">Promo</span> Video
              </h1>
              <div className="w-full flex gap-3 items-center justify-center rounded-full">
                <Button className="h-12 px-11 py-14 bg-transparent hover:bg-transparent border-[#f5b754] border rounded-[65px]">
                  <Play className="text-white hover:text-[#f5b754] text-[2px]" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default RentalCars1;




