'use client';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Star, VenetianMaskIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const testimonials = [
    { name: 'Dan Martin', src: '/1.jpg' },
    { name: 'Emily Martin', src: '/6.jpg' },
    { name: 'Olivia Brown', src: '/4.jpg' },
    { name: 'Dan Martin', src: '/1.jpg' },
    { name: 'Emily Martin', src: '/6.jpg' },
    { name: 'Olivia Brown', src: '/4.jpg' },
];

const quote =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. nostrum doloribus ut maiores eveniet, obcaecati libero accusamus eligendi placeat doloremque quaerat.';

function ClientsSay() {
    return (
        <div className="w-full pt-28 md:pt-44 bg-[#1b1b1b]">
            <div className="w-full">
                <div className='relative items-center justify-center gap-8 md:gap-12 flex-col text-white flex px-4 lg:px-36 w-full md:max-w-[720px] lg:max-w-[1440px] mx-auto md:py-0'>
                    <div className="items-center flex justify-center flex-col gap-4 text-center">
                        <h5 className='text-[#f5b754] tracking-[6px] text-[12px]'>TESTIMONIALS</h5>
                        <h1 className='font-Outfit font-bold text-3xl md:text-[35px]'>What Clients Say</h1>
                    </div>
                    <Carousel opts={{ align: "start" }} className='w-full'>
                        <CarouselContent className="-ml-4">
                            {testimonials.map((t, i) => (
                                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3 text-white">
                                    <div className="relative flex flex-col gap-4 h-full min-h-[300px] bg-[#222222] rounded-tl-3xl rounded-tr-3xl rounded-bl-none rounded-br-3xl p-6 pt-16">
                                        <div className="absolute top-0 right-0 flex items-center gap-1 bg-[#1b1b1b] h-10 px-4 rounded-bl-[22px]">
                                            {Array.from({ length: 5 }).map((_, s) => (
                                                <Star key={s} className='text-[#f5b754] size-[12px]' />
                                            ))}
                                        </div>
                                        <VenetianMaskIcon className='text-[#f5b754] size-[37px] shrink-0' />
                                        <p className="text-sm leading-7 opacity-60 text-white">{quote}</p>
                                        <div className="mt-auto flex items-center gap-4">
                                            <Image
                                                src={t.src}
                                                alt={t.name}
                                                height={500}
                                                width={500}
                                                className="size-14 shrink-0 rounded-full object-cover"
                                            />
                                            <div className="flex flex-col">
                                                <h1 className='text-[15px] font-semibold'>{t.name}</h1>
                                                <span className='text-[12px] opacity-60'>Customer</span>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default ClientsSay;
