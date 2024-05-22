import { carDetails } from '@/components/ui';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Briefcase, CarIcon, Usb, UserIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface CarDetails {
  src: string;
  name: string;
  seats: string;
  transmission: string;
  bags: string;
  age: string;
  price: string;
}



const LuxuryCar: React.FC = () => {
  return (
    <div className="bg-red-600 text-white overflow-hidden w-full">
      <div className="w-full h-screen bg-[#1b1b1b]">
        <div className="w-full py-28">
          <div className="relative items-center justify-center text-white flex px-36 w-full md:w-[1440px] mx-auto md:py-0">
            <div className="items-center flex justify-center flex-col gap-4">
              <h5 className="size-5 flex items-center justify-center right-3 w-full text-[#f5b754] tracking-[6px] text-[12px]">SELECT YOUR CAR</h5>
              <h1 className="font-Outfit font-bold w-full text-[35px]">Luxury<span className="text-[#f5b754]"> Car Fleet</span></h1>
            </div>
          </div>
        </div>
        <Carousel>
          <CarouselContent className="gap-6">
            {carDetails.map((car, index) => (
              <CarouselItem key={index} className="md:basis-1/2 text-white lg:basis-1/3">
                <Image
                  src={car.src}
                  alt={car.name}
                  height={1100}
                  width={1100}
                  className="object-contain rounded-2xl"
                />
                <div className="relative -top-7 px-4 py-6 rounded-2xl items-center flex justify-between bg-[#222] mx-3">
                  <div className="flex flex-col">
                    <h1 className="font-Outfit font-bold text-[18px]">{car.name}</h1>
                    <div className="flex gap-4 text-sm items-center opacity-60">
                      <h1 className="flex items-center gap-2"><span className="text-[#f5b754]"><CarIcon /></span> {car.seats}</h1>
                      <h1 className="flex items-center gap-2"><span className="text-[#f5b754]"><Usb /></span> {car.transmission}</h1>
                      <h1 className="flex items-center gap-2"><span className="text-[#f5b754]"><Briefcase /></span> {car.bags}</h1>
                      <h1 className="flex items-center gap-2"><span className="text-[#f5b754]"><UserIcon /></span> {car.age}</h1>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button className="top-[15px] left-0 h-8 px-6 py-6 bg-[#f5b754] border-[#f5b754] border hover:bg-white rounded-[50px]">
                      Details
                    </Button>
                    <div className="flex items-end flex-col justify-center">
                      <h1 className="text-[#f5b754] flex items-start text-2xl font-bold">{car.price}</h1>
                      <span className="text-sm">/Day</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default LuxuryCar;
