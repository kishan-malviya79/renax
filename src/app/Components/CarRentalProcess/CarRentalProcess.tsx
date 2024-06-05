
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { ArrowUpRight } from 'lucide-react'
import { title } from 'process';
import React, { useState } from 'react'





function CarRentalProcess() {


    return (
        <div className="w-full sm:h-[80%]  bg-[#1b1b1b]">
            <div className="w-full  ">
                <div className='relative items-center  gap-8 top-28  flex-col text-white flex px- w-full md:w-[1440px] mx-auto md:py-0'>
                    <span className='w-[1px] flex items-center justify-center bg-[#f5b754] h-12'></span>
                    <div className="">
                        <div className="items-center flex justify-center flex-col gap-4">
                            <h5 className='size-5 flex items-center justify-center right-3 w-full text-[#f5b754] tracking-[6px] text-[12px]'>STEPS</h5>
                            <h1 className='font-Outfit font-bold w-full text-[35px]'>  Car Rental <span className='text-[#f5b754]'>  Process</span></h1>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="-ml-1">
                        </div>
                    </div>
                    <div className="md:basis-1/2  flex flex-col sm:flex-row  gap-6 text-white lg:basis-1/3">
                        <div className="flex flex-col bg-[#222222] rounded-tl-3xl rounded-tr-3xl rounded-bl-none rounded-br-3xl p-14 gap-4 pl-12 h-60 w-90 relative">


                            <p className="font-Outfit font-bold text-white w-[10ch] text-[20px]">Choose A Car</p>
                            <p className="object-contain text-[12px] w-[34ch] opacity-60  text-white ">View our range of cars, find your perfect car for the coming days.</p>
                            <div className="absolute top-4 left-0 w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">

                            </div>
                            <div className="absolute bottom-0 left-0 bg-[#1b1b1b] w-[85px] h-[85px] text-center rounded-tr-[40px]">
                                <div className='absolute content-center  top-[15px] left-0 h-1 px-4 py-7 bg-[#222222]  rounded-[65px]'>
                                    <p className=" relative bottom-3 font-Outfit font-bold text-white  text-[15px]">01.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col bg-[#222222] rounded-tl-3xl rounded-tr-3xl rounded-bl-none rounded-br-3xl p-14 gap-4 pl-12 h-60 w-90 relative">


                            <p className="font-Outfit font-bold text-white w-[13ch] text-[20px]">Come In Contact</p>
                            <p className="object-contain text-[12px] w-[34ch]  opacity-60  text-white ">Our advisor team is ready to help you with the booking process or any questions.</p>
                            <div className="absolute top-4 left-0 w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">

                            </div>
                            <div className="absolute bottom-0 left-0 bg-[#1b1b1b] w-[85px] h-[85px] text-center rounded-tr-[40px]">
                                <div className='absolute content-center top-[15px] left-0 h-1 px-4 py-7 bg-[#222222]  rounded-[65px]'>
                                    <p className="  relative bottom-3 font-Outfit font-bold text-white  text-[15px]">02.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col bg-[#222222] rounded-tl-3xl rounded-tr-3xl rounded-bl-none rounded-br-3xl p-14 gap-4 pl-12 h-60 w-90 relative">


                            <p className="font-Outfit font-bold text-white w-[10ch] text-[20px]">Enjoy Driving</p>
                            <p className="object-contain text-[12px] w-[34ch] opacity-60  text-white ">Receive the key and enjoy your car. We treat all our cars with respect.</p>
                            <div className="absolute top-4 left-0 w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">

                            </div>
                            <div className="absolute bottom-0 left-0 bg-[#1b1b1b] w-[85px] h-[85px] text-center rounded-tr-[40px]">
                                <div className='absolute content-center top-[15px] left-0 h-8 px-4 py-7 bg-[#222222]  rounded-[65px]'>
                                    <p className="  relative bottom-3 font-Outfit font-bold text-white   text-[15px]">03.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 px-4 sm:px-0 items-start sm:items-center pb-56 justify-center">
                        <span className="font-mono text-white  px-[7px] py-[1px] bg-[#444444]  rounded-[50px]  text-[12px]">i</span>
                        <p className="object-contain text-[12px]   text-center opacity-60  text-white ">If you ve never rented a car before, we ll guide you through the process.</p>
                    </div>  


                </div>
            </div>
        </div>
    );
}

export default CarRentalProcess;

  