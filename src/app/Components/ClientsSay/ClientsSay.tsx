'use client';

import { carTypes } from '@/components/ui'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { ArrowUpRight, Star, VenetianMaskIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

interface CarType {
    src: string;
    title: string;
}

function CarouselItemComponent({ src, title }: CarType) {
    return (
        <CarouselItem className="md:basis-1/2 text-white lg:basis-1/3">
            <div className="flex   relative">
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

function ClientsSay() {

    

    return (
        <div className="w-full pt-44  bg-[#1b1b1b]">
            <div className="w-full">
                 <div className='relative items-center justify-center gap-8  leading-7 flex-col text-white flex lg:px-36 w-full lg:w-[1440px] mx-auto md:py-0'>
                    <div className="">
                        <div className="items-center flex justify-center flex-col gap-4">
                            <h5 className='size-5 flex items-center justify-center right-3 w-full text-[#f5b754] tracking-[6px] text-[12px]'>TESTIMONIALS</h5>
                            <h1 className='font-Outfit font-bold w-full text-[35px]'>What Clients Say</h1>
                        </div>
                    </div>
                    <Carousel opts={{ align: "start" }} className='w-full '>
                        <CarouselContent className="-ml-1">
                            <div className="md:basis-1/2  flex gap-12  text-white lg:basis-1/3">
                                <div className="absolute top-4 left-0 w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">

                                </div>
                                <div className="absolute bottom-0 left-0 bg-[#1b1b1b] w-[85px] h-[95px] text-center rounded-tr-[40px]">
                                    {/* <div className='absolute content-center   left-5 h-1 px-2 py-  '>
                                        <Image
                                            src={'/1.jpg'}
                                            alt={'w'}
                                            height="500"
                                            width="500"
                                            className="object-contain  rounded-[50px] "
                                        />
                                    </div> */}
                                </div>

                                <div className="flex flex-col left-5 sm:left-0 bg-[#222222] rounded-tl-3xl rounded-tr-3xl rounded-bl-none rounded-br-3xl p-12 gap-4 pl-10 h-80 w-95 relative">
                                    <div className="absolute top-4 left-0 w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">

                                    </div>
                                    <div className="absolute top-0 right-0 bg-[#1b1b1b] w-[115px] h-[40px] text-center rounded-bl-[22px]">
                                        <div className='absolute content-center gap-1  flex left-0 h-2 px-5 py-3  '>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>

                                        </div>
                                    </div>
                                    <p className=" text-[#f5b754] "><VenetianMaskIcon className=' size-[37px]' /></p>

                                    <p className="object-contain text-[12px] w-[34ch] opacity-60  text-white ">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        nostrum doloribus ut maiores eveniet, obcaecati libero accusamus eligendi placeat doloremque quaerat.</p>
                                    <div className="flex flex-col  relative left-20 top-6">
                                        <h1 className=' text-[14px]'>Dan Martin</h1>
                                        <span className=' text-[12px] opacity-60  '>Customer</span>
                                    </div>
                                    <div className="absolute top-4 left-0 w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">
                                    </div>
                                    <div className="absolute bottom-0 left-0 bg-[#1b1b1b] w-[85px] h-[95px] text-center rounded-tr-[40px]">
                                        <div className='absolute content-cente   left-0 h-1 px-2 py-4  '>
                                            <Image
                                                src={'/1.jpg'}
                                                alt={'w'}
                                                height="500"
                                                width="500"
                                                className="object-contain  rounded-[50px] "
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col bg-[#222222] rounded-tl-3xl rounded-tr-3xl rounded-bl-none rounded-br-3xl p-12 gap-4 pl-10 h-80 w-95 relative">
                                    <div className="absolute top-4 left-0 w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">

                                    </div>
                                    <div className="absolute top-0 right-0 bg-[#1b1b1b] w-[115px] h-[40px] text-center rounded-bl-[22px]">
                                        <div className='absolute content-center gap-1  flex left-0 h-2 px-5 py-3  '>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>

                                        </div>
                                    </div>
                                    <p className=" text-[#f5b754] "><VenetianMaskIcon className=' size-[37px]' /></p>

                                    <p className="object-contain text-[12px] w-[34ch] opacity-60  text-white ">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        nostrum doloribus ut maiores eveniet, obcaecati libero accusamus eligendi placeat doloremque quaerat.</p>
                                    <div className="flex flex-col  relative left-20 top-6">
                                        <h1 className=' text-[14px]'>Emily Martin</h1>
                                        <span className=' text-[12px] opacity-60  '>Customer</span>
                                    </div>
                                    <div className="absolute top-4 left-0 w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">
                                    </div>
                                    <div className="absolute bottom-0 left-0 bg-[#1b1b1b] w-[85px] h-[95px] text-center rounded-tr-[40px]">
                                        <div className='absolute content-cente   left-0 h-1 px-2 py-4  '>
                                            <Image
                                                src={'/6.jpg'}
                                                alt={'w'}
                                                height="500"
                                                width="500"
                                                className="object-contain  rounded-[50px] "
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col bg-[#222222] rounded-tl-3xl rounded-tr-3xl rounded-bl-none rounded-br-3xl p-12 gap-4 pl-10 h-80 w-95 relative">
                                    <div className="absolute top-4 left-0 w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">

                                    </div>
                                    <div className="absolute top-0 right-0 bg-[#1b1b1b] w-[115px] h-[40px] text-center rounded-bl-[22px]">
                                        <div className='absolute content-center gap-1  flex left-0 h-2 px-5 py-3  '>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>

                                        </div>
                                    </div>
                                    <p className=" text-[#f5b754] "><VenetianMaskIcon className=' size-[37px]' /></p>

                                    <p className="object-contain text-[12px] w-[34ch] opacity-60  text-white ">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        nostrum doloribus ut maiores eveniet, obcaecati libero accusamus eligendi placeat doloremque quaerat.</p>
                                    <div className="flex flex-col  relative left-20 top-6">
                                        <h1 className=' text-[14px]'>Olivia Brown</h1>
                                        <span className=' text-[12px] opacity-60  '>Customer</span>
                                    </div>
                                    <div className="absolute top-4 left-0 w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">
                                    </div>
                                    <div className="absolute bottom-0 left-0 bg-[#1b1b1b] w-[85px] h-[95px] text-center rounded-tr-[40px]">
                                        <div className='absolute content-cente   left-0 h-1 px-2 py-4  '>
                                            <Image
                                                src={'/4.jpg'}
                                                alt={'w'}
                                                height="500"
                                                width="500"
                                                className="object-contain  rounded-[50px] "
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col bg-[#222222] rounded-tl-3xl rounded-tr-3xl rounded-bl-none rounded-br-3xl p-12 gap-4 pl-10 h-80 w-95 relative">
                                    <div className="absolute top-4 left-0 w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">

                                    </div>
                                    <div className="absolute top-0 right-0 bg-[#1b1b1b] w-[115px] h-[40px] text-center rounded-bl-[22px]">
                                        <div className='absolute content-center gap-1  flex left-0 h-2 px-5 py-3  '>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>

                                        </div>
                                    </div>
                                    <p className=" text-[#f5b754] "><VenetianMaskIcon className=' size-[37px]' /></p>

                                    <p className="object-contain text-[12px] w-[34ch] opacity-60  text-white ">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        nostrum doloribus ut maiores eveniet, obcaecati libero accusamus eligendi placeat doloremque quaerat.</p>
                                    <div className="flex flex-col  relative left-20 top-6">
                                        <h1 className=' text-[14px]'>Dan Martin</h1>
                                        <span className=' text-[12px] opacity-60  '>Customer</span>
                                    </div>
                                    <div className="absolute top-4 left-0 w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">
                                    </div>
                                    <div className="absolute bottom-0 left-0 bg-[#1b1b1b] w-[85px] h-[95px] text-center rounded-tr-[40px]">
                                        <div className='absolute content-cente   left-0 h-1 px-2 py-4  '>
                                            <Image
                                                src={'/1.jpg'}
                                                alt={'w'}
                                                height="500"
                                                width="500"
                                                className="object-contain  rounded-[50px] "
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col bg-[#222222] rounded-tl-3xl rounded-tr-3xl rounded-bl-none rounded-br-3xl p-12 gap-4 pl-10 h-80 w-95 relative">
                                    <div className="absolute top-4 left-0 w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">

                                    </div>
                                    <div className="absolute top-0 right-0 bg-[#1b1b1b] w-[115px] h-[40px] text-center rounded-bl-[22px]">
                                        <div className='absolute content-center gap-1  flex left-0 h-2 px-5 py-3  '>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>

                                        </div>
                                    </div>
                                    <p className=" text-[#f5b754] "><VenetianMaskIcon className=' size-[37px]' /></p>

                                    <p className="object-contain text-[12px] w-[34ch] opacity-60  text-white ">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        nostrum doloribus ut maiores eveniet, obcaecati libero accusamus eligendi placeat doloremque quaerat.</p>
                                    <div className="flex flex-col  relative left-20 top-6">
                                        <h1 className=' text-[14px]'>Emily Martin</h1>
                                        <span className=' text-[12px] opacity-60  '>Customer</span>
                                    </div>
                                    <div className="absolute top-4 left-0 w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">
                                    </div>
                                    <div className="absolute bottom-0 left-0 bg-[#1b1b1b] w-[85px] h-[95px] text-center rounded-tr-[40px]">
                                        <div className='absolute content-cente   left-0 h-1 px-2 py-4  '>
                                            <Image
                                                src={'/6.jpg'}
                                                alt={'w'}
                                                height="500"
                                                width="500"
                                                className="object-contain  rounded-[50px] "
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col bg-[#222222] rounded-tl-3xl rounded-tr-3xl rounded-bl-none rounded-br-3xl p-12 gap-4 pl-10 h-80 w-95 relative">
                                    <div className="absolute top-4 left-0 w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">

                                    </div>
                                    <div className="absolute top-0 right-0 bg-[#1b1b1b] w-[115px] h-[40px] text-center rounded-bl-[22px]">
                                        <div className='absolute content-center gap-1  flex left-0 h-2 px-5 py-3  '>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>
                                            <p><Star className=' text-[#f5b754] size-[12px]' /></p>

                                        </div>
                                    </div>
                                    <p className=" text-[#f5b754] "><VenetianMaskIcon className=' size-[37px]' /></p>

                                    <p className="object-contain text-[12px] w-[34ch] opacity-60  text-white ">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        nostrum doloribus ut maiores eveniet, obcaecati libero accusamus eligendi placeat doloremque quaerat.</p>
                                    <div className="flex flex-col  relative left-20 top-6">
                                        <h1 className=' text-[14px]'>Olivia Brown</h1>
                                        <span className=' text-[12px] opacity-60  '>Customer</span>
                                    </div>
                                    <div className="absolute top-4 left-0 w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">
                                    </div>
                                    <div className="absolute bottom-0 left-0 bg-[#1b1b1b] w-[85px] h-[95px] text-center rounded-tr-[40px]">
                                        <div className='absolute content-cente   left-0 h-1 px-2 py-4  '>
                                            <Image
                                                src={'/4.jpg'}
                                                alt={'w'}
                                                height="500"
                                                width="500"
                                                className="object-contain  rounded-[50px] "
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                            </div>


                        </CarouselContent>
                    </Carousel>

                </div>
            </div>
        </div>
    );
}

export default ClientsSay;
