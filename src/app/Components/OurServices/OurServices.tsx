'use client';

import { OurS, carTypes } from '@/components/ui'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { CarouselDots } from '@/components/ui/CarouselDots'
import React, { useState } from 'react'

interface OurS {
    src: string;
    title: string;
    num: string;
}

function CarouselItemComponent({ src, title, num }: OurS) {
    return (
        <CarouselItem className="pl-4 md:basis-1/2 text-white lg:basis-1/3">
            <div className="flex relative">
                <div className="overflow-hidden rounded-tl-3xl rounded-tr-3xl rounded-bl-none rounded-br-3xl max-w-full lg:w-full">
                    <Image
                        src={src}
                        alt={title}
                        height="500"
                        width="500"
                        className="object-contain relative right-1 sm:right-0 w-[360px] max-w-full md:w-[530px] lg:w-full transition-transform duration-500 ease-out hover:scale-110"
                    />
                </div>
                <div className="absolute top-4 left-0 w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">
                    <div className='absolute top-[1px] left-0 h-8 px-6 py-6 bg-transparent text-white'>
                        <h1 className='font-Outfit font-bold w-[10ch] text-[20px]'>{title}</h1>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 bg-[#1b1b1b] w-[85px] h-[85px] text-center rounded-tr-[40px]">
                                <div className='absolute content-center  top-[15px] left-0 h-1 px-5 py-7 bg-[#222222]  rounded-[65px]'>
                                    <p className=" relative bottom-3 font-Outfit font-bold text-white  text-[15px]">{num}</p>
                                </div>
                            </div>
            </div>
        </CarouselItem>
    );
}

function OurServices() {
    const [api, setApi] = useState<CarouselApi>();

    
    return (
        <div className="w-full pb-20  bg-[#1b1b1b]">
            <div className="w-full">
          <div className="relative items-center justify-center text-white gap-8 flex flex-col px-4 lg:px-36 w-full md:max-w-[720px] lg:max-w-[1440px] mx-auto md:py-0">
                    <span className='w-[1px] flex items-center justify-center bg-[#f5b754] mb-20 h-12'></span>
                    <div className="">
                        <div className="items-center flex justify-center flex-col gap-4">
                            <h5 className='size-5 flex items-center justify-center right-3 w-full text-[#f5b754] tracking-[6px] text-[12px]'>WHAT WE DO</h5>
                            <h1 className='font-Outfit font-bold w-full text-[35px]'>Our <span className='text-[#f5b754]'>Services</span></h1>
                        </div>
                    </div>
                    <Carousel setApi={setApi} opts={{ align: "start" }} className='w-full'>
                            <CarouselContent className="-ml-4">
                                {OurS.map((car, index) => (
                                    <CarouselItemComponent key={index} src={car.src} title={car.title} num={car.num} />
                                ))}
                            </CarouselContent>
                        </Carousel>
                    <div className="flex flex-col items-center gap-4">
                        <CarouselDots api={api} />
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurServices;
