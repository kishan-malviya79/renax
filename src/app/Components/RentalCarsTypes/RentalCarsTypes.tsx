'use client';

import { carTypes } from '@/components/ui'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

interface CarType {
    src: string;
    title: string;
}

function CarouselItemComponent({ src, title }: CarType) {
    return (
        <CarouselItem className="md:basis-1/2 text-white lg:basis-1/3">
            <div className="flex relative">
                <Image
                    src={src}
                    alt={title}
                    height="500"
                    width="500"
                    className="object-contain rounded-tl-3xl rounded-tr-3xl rounded-bl-none rounded-br-3xl transition-transform duration-300 transform hover:-scale-x-100"
                />
                <div className="absolute top-4 left-0 w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">
                    <div className='absolute top-[1px] left-0 h-8 px-6 py-6 bg-transparent text-white'>
                        <h1 className='font-Outfit font-bold w-[10ch] text-[20px]'>{title}</h1>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 bg-[#1b1b1b] w-[85px] h-[85px] text-center rounded-tr-[40px]">
                    <Button className='absolute top-[15px] left-0 h-8 px-6 py-6 bg-transparent border-[#f5b754] border hover:bg-[#f5b754] rounded-[50px]'>
                        <ArrowUpRight className="text-white" />
                    </Button>
                </div>
            </div>
        </CarouselItem>
    );
}

function RentalCarsTypes() {
    const [selectedSet, setSelectedSet] = useState(1);

    const getVisibleCars = () => {
        if (selectedSet === 1) {
            return carTypes.slice(0, 3);
        } else {
            return carTypes.slice(3, 6);
        }
    };

    return (
        <div className="w-full  bg-[#1b1b1b]">
            <div className="w-full">
                <div className='relative items-center justify-center gap-8  flex-col text-white flex px-36 w-full md:w-[1440px] mx-auto md:py-0'>
                    <span className='w-[1px] flex items-center justify-center bg-[#f5b754] h-12'></span>
                    <div className="">
                        <div className="items-center flex justify-center flex-col gap-4">
                            <h5 className='size-5 flex items-center justify-center right-3 w-full text-[#f5b754] tracking-[6px] text-[12px]'>CATEGORIES</h5>
                            <h1 className='font-Outfit font-bold w-full text-[35px]'>Rental <span className='text-[#f5b754]'>Car Types</span></h1>
                        </div>
                    </div>
                    <Carousel opts={{ align: "start" }} className='w-full'>
                            <CarouselContent className="-ml-1">
                                {getVisibleCars().map((car, index) => (
                                    <CarouselItemComponent key={index} src={car.src} title={car.title} />
                                ))}
                            </CarouselContent>
                        </Carousel>
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex gap-4">
                            <label className="flex items-center  gap-2">
                                <input
                                    type="radio"
                                    name="carSet"
                                    value="1"
                                    checked={selectedSet === 1}
                                    onChange={() => setSelectedSet(1)}
                                    className="appearance-none h-4 w-4 border border-gray-300 rounded-full bg-black checked:bg-yellow-500 hover:bg-yellow-300"
                                />
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="carSet"
                                    value="2"
                                    checked={selectedSet === 2}
                                    onChange={() => setSelectedSet(2)}
                                    
                                    className="appearance-none h-4 w-4 border border-gray-300 rounded-full bg-black checked:bg-yellow-500 hover:bg-yellow-300"
                                />
                              
                            </label>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RentalCarsTypes;
