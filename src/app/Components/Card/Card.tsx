import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { ArrowUpRight, Play } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function RentalCarsType() {
    return (
        <div className="  w-full h-screen bg-[#1b1b1b]  " >
            <div className="  w-full " >

                <div className=' relative items-center  justify-center gap-28 flex-col  text-white flex   px-36 w-full md:w-[1440px] mx-auto md:py-0'>
                    <span className='w-[1px] flex items-center justify-center bg-[#f5b754]  h-12 '></span>
                    <div className="">

                        <div className="  items-center flex justify-center flex-col gap-4">
                            <h5 className=' size-5 flex items-center justify-center right-3 w-full text-[#f5b754] tracking-[6px] text-[12px]'> CATEGORIES</h5>
                            <h1 className=' font-Outfit,  font-bold w-full text-[35px]'>Rental  <span className=' text-[#f5b754]'>Car Types</span></h1>
                        </div>
                    </div>

                    <Carousel>
                        <CarouselContent className='gap-6  '>
                            <CarouselItem className="md:basis-1/2  text-white  lg:basis-1/3">
                                <div className="flex  relative">
                                    <Image
                                        src={`/03.jpg`}
                                        alt="al"
                                        height="500"
                                        width="500"
                                        className="object-contain  rounded-tl-3xl rounded-tr-3xl  rounded-bl-none rounded-br-3xl transition-transform duration-300 transform  hover:-scale-x-100   "
                                    />
                                    <div className=" absolute top-4 left-0  w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">

                                        <div className='absolute top-[1px] left-0   h-8 px-6 py-6 bg-transparent text-white   '>
                                            <h1 className='font-Outfit,  font-bold w-[10ch] text-[20px]'>Luxury Cars</h1>
                                        </div>
                                    </div>
                                    <div className=" absolute bottom-0 left-0 bg-[#1b1b1b]  w-[85px] h-[85px] text-center rounded-tr-[40px] ">

                                        <Button className='absolute top-[15px] left-0  h-8 px-6 py-6 bg-transparent border-[#f5b754] border hover:bg-[#f5b754] rounded-[50px]   '>
                                            <ArrowUpRight className="text-white" />
                                        </Button>
                                    </div>
                                    <div className="absolute top-[-24px] left-[-1px]  leading-[1]  "></div>
                                    <div className="absolute bottom-[-1px] right-[-24px]  leading-[1] "></div>
                                </div>

                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2  text-white lg:basis-1/3">
                            <div className="flex  relative">
                            <Image
                                src={`/04.jpg`}
                                alt="al"
                                height="500"
                                width="500"
                                className="object-contain rounded-tl-3xl rounded-tr-3xl  rounded-bl-none rounded-br-3xl transition-transform duration-300 transform  hover:-scale-x-100   "
                            />
                            <div className=" absolute top-4 left-0  w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">

                                <div className='absolute top-[1px] left-0  h-8 px-6 py-6 bg-transparent text-white   '>
                                    <h1 className='font-Outfit,  font-bold w-[8ch] text-[20px]'>Sport Cars</h1>
                                </div>
                            </div>
                            <div className=" absolute bottom-0 left-0 bg-[#1b1b1b]  w-[85px] h-[85px] text-center rounded-tr-[40px]">

                                <Button className='absolute top-[15px] left-0  h-8 px-6 py-6 bg-transparent border-[#f5b754] border hover:bg-[#f5b754] rounded-[50px]   '>
                                    <ArrowUpRight className="text-white" />
                                </Button>
                            </div>
                            <div className="absolute top-[-24px] left-[-1px]  leading-[1]  "></div>
                            <div className="absolute bottom-[-1px] right-[-24px]  leading-[1] "></div>
                        </div>

                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2  text-white lg:basis-1/3">
                            <div className="flex  relative">
                            <Image
                                src={`/02.jpg`}
                                alt="al"
                                height="500"
                                width="500"
                                className="object-contain rounded-tl-3xl rounded-tr-3xl  rounded-bl-none rounded-br-3xl transition-transform duration-300 transform  hover:-scale-x-100   "
                            />
                            <div className=" absolute top-4 left-0  w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">

                                <div className='absolute top-[1px] left-0  h-8 px-6 py-6 bg-transparent text-white   '>
                                    <h1 className='font-Outfit,  font-bold  text-[20px]'>SUV</h1>
                                </div>
                            </div>
                            <div className=" absolute bottom-0 left-0 bg-[#1b1b1b]  w-[85px] h-[85px] text-center rounded-tr-[40px]">

                                <Button className='absolute top-[15px] left-0  h-8 px-6 py-6 bg-transparent border-[#f5b754] border hover:bg-[#f5b754] rounded-[50px]   '>
                                    <ArrowUpRight className="text-white" />
                                </Button>
                            </div>
                            <div className="absolute top-[-24px] left-[-1px]  leading-[1]  "></div>
                            <div className="absolute bottom-[-1px] right-[-24px]  leading-[1] "></div>
                        </div>

                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2  text-white lg:basis-1/3">
                            <div className="flex  relative">
                            <Image
                                src={`/02.jpg`}
                                alt="al"
                                height="500"
                                width="500"
                                className="object-contain rounded-tl-3xl rounded-tr-3xl  rounded-bl-none rounded-br-3xl transition-transform duration-300 transform  hover:-scale-x-100   "
                            />
                            <div className=" absolute top-4 left-0  w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">

                                <div className='absolute top-[1px] left-0  h-8 px-6 py-6 bg-transparent text-white   '>
                                    <h1 className='font-Outfit,  font-bold  text-[20px]'>SUV</h1>
                                </div>
                            </div>
                            <div className=" absolute bottom-0 left-0 bg-[#1b1b1b]  w-[85px] h-[85px] text-center rounded-tr-[40px]">

                                <Button className='absolute top-[15px] left-0  h-8 px-6 py-6 bg-transparent border-[#f5b754] border hover:bg-[#f5b754] rounded-[50px]   '>
                                    <ArrowUpRight className="text-white" />
                                </Button>
                            </div>
                            <div className="absolute top-[-24px] left-[-1px]  leading-[1]  "></div>
                            <div className="absolute bottom-[-1px] right-[-24px]  leading-[1] "></div>
                        </div>

                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2  text-white lg:basis-1/3">
                            <div className="flex  relative">
                            <Image
                                src={`/02.jpg`}
                                alt="al"
                                height="500"
                                width="500"
                                className="object-contain rounded-tl-3xl rounded-tr-3xl  rounded-bl-none rounded-br-3xl transition-transform duration-300 transform  hover:-scale-x-100   "
                            />
                            <div className=" absolute top-4 left-0  w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">

                                <div className='absolute top-[1px] left-0  h-8 px-6 py-6 bg-transparent text-white   '>
                                    <h1 className='font-Outfit,  font-bold  text-[20px]'>SUV</h1>
                                </div>
                            </div>
                            <div className=" absolute bottom-0 left-0 bg-[#1b1b1b]  w-[85px] h-[85px] text-center rounded-tr-[40px]">

                                <Button className='absolute top-[15px] left-0  h-8 px-6 py-6 bg-transparent border-[#f5b754] border hover:bg-[#f5b754] rounded-[50px]   '>
                                    <ArrowUpRight className="text-white" />
                                </Button>
                            </div>
                            <div className="absolute top-[-24px] left-[-1px]  leading-[1]  "></div>
                            <div className="absolute bottom-[-1px] right-[-24px]  leading-[1] "></div>
                        </div>

                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>


                        
                        

                    </div>
            </div>
        </div>
    )
}

export default RentalCarsType