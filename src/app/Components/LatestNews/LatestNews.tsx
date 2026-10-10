'use client';

import { carNews, carTypes } from '@/components/ui'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { CarouselDots } from '@/components/ui/CarouselDots'
import React, { useState } from 'react'

interface CarNews {
    src: string;
    title: string;
    p:string;
}

function CarouselItemComponent({ src, title, p }: CarNews) {
    return (
        <CarouselItem className="pl-4 md:basis-1/2 text-white lg:basis-1/3">
            <div className="flex relative overflow-hidden rounded-tl-3xl rounded-tr-3xl rounded-bl-none rounded-br-3xl">
                <Image
                    src={src}
                    alt={title}
                    height="500"
                    width="500"
                    className="w-full h-[320px] sm:h-[360px] object-cover transition-transform duration-300 transform hover:-scale-x-100"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-[100px] right-4 flex flex-col gap-2 text-white">
                    <h5 className='text-[#f5b754] tracking-[4px] text-[10px] uppercase'>{title}</h5>
                    <h1 className='font-Outfit font-bold text-base sm:text-lg leading-snug line-clamp-3'>{p}</h1>
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

function LatestNews() {
    const [api, setApi] = useState<CarouselApi>();

    
    return (
        <div className="w-full pt-28 pb-20 bg-[#1b1b1b]">
            <div className="w-full">
                {/* <div className='relative items-center justify-center gap-8  flex-col text-white flex px-36 w-full md:max-w-[1440px] mx-auto md:py-0'> */}
          <div className="relative items-center justify-center text-white gap-8 flex flex-col px-4 lg:px-36 w-full md:max-w-[720px] lg:max-w-[1440px] mx-auto md:py-0">

                    <span className='w-[1px] flex items-center mb-16 justify-center bg-[#f5b754] h-12'></span>
                    <div className="">
                        <div className="items-center flex justify-center flex-col gap-4">
                            <h5 className='size-5 flex items-center justify-center right-3 w-full text-[#f5b754] tracking-[6px] text-[12px]'>OUR BLOG</h5>
                            <h1 className='font-Outfit font-bold w-full text-[35px]'>Latest <span className='text-[#f5b754]'>News</span></h1>
                        </div>
                    </div>
                    <Carousel setApi={setApi} opts={{ align: "start" }} className='w-full'>
                            <CarouselContent className="-ml-4">
                                {carNews.map((car, index) => (
                                    <CarouselItemComponent key={index} src={car.src} title={car.title} p={car.p} />
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

export default LatestNews;
