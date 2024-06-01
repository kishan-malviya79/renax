import React from 'react'
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, LucideAlignEndVertical } from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Nav from '@/app/Nav/page'
function Hero() {
    return (
        <div className=" w-full overflow-x-hidden bg-[#1b1b1b] " >

            <Nav />
            
            <Carousel>  
                <CarouselContent>
                    <CarouselItem>
                        <div className=" h-screen w-full"

                            style={{
                                backgroundImage: `url(${`bentley.jpg`})`, // Replace BgOverview with your actual variable name for the background image
                                backgroundSize: 'cover', // Adjust as needed
                                backgroundPosition: 'center', // Adjust as needed
                            }}>
                            <div className=' items-center  content-center h-screen text-white flex   px-36 w-full md:w-[1440px] mx-auto md:py-0'>
                                <div className=" flex flex-col gap-5">
                                    <h5 className=' text-[#f5b754] tracking-[6px] text-[12px]'> <span>*</span> PREMIUM</h5>
                                    <h1 className=' font-Outfit, font-bold leading-10 text-[90px]'>Rental Car</h1>
                                    <div className="flex gap-4">
                                        <h2 className='relative'>Bentley Bantayga  </h2>
                                        <div className="flex items-center justify-center">

                                            <h1 className='text-[#f5b754]  flex items-start text-2xl font-bold'>$600 </h1><span>/Day</span>
                                        </div>
                                        
                                    </div>
                                    <div className="flex gap-4">

                                        <Button>
                                            View Details <ArrowUpRight className="mr-2 h-4 w-4" />
                                        </Button>
                                        <Button className=' bg-transparent border text-white hover:text-black hover:bg-[#f5b754]'>
                                            Rent Now  <ArrowUpRight className="mr-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                    <div className=" h-screen w-full "

                        style={{
                            backgroundImage: `url(${`Red-o.jpg`})`, // Replace BgOverview with your actual variable name for the background image
                            backgroundSize: 'cover', // Adjust as needed
                            backgroundPosition: 'center', // Adjust as needed
                        }}>
                        <div className=' items-center relative content-center h-screen text-white flex   px-36 w-full md:w-[1440px] mx-auto md:py-0'>

                            <div className=" flex flex-col gap-5">
                                <h5 className=' text-[#f5b754] tracking-[6px] text-[12px]'> <span>*</span> PREMIUM</h5>
                                <h1 className=' font-Outfit, font-bold leading-10 text-[90px]'>Rental Car</h1>
                                <div className="flex gap-4">
                                    <h2 className='relative'>Audi RS7 Sportback  </h2>
                                    <div className="flex items-center justify-center">

                                        <h1 className='text-[#f5b754]  flex items-start text-2xl font-bold'>$450 </h1><span>/Day</span>
                                    </div>
                                </div>
                                <div className="flex gap-4">

                                    <Button>
                                        View Details <ArrowUpRight className="mr-2 h-4 w-4" />
                                    </Button>
                                    <Button className=' bg-transparent border text-white hover:text-black hover:bg-[#f5b754]'>
                                        Rent Now  <ArrowUpRight className="mr-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </CarouselItem>
                    <CarouselItem>
                    <div className=""

                        style={{
                            backgroundImage: `url(${`12.jpg`})`, // Replace BgOverview with your actual variable name for the background image
                            backgroundSize: 'cover', // Adjust as needed
                            backgroundPosition: 'center', // Adjust as needed
                        }}>
                        <div className=' items-center relative content-center h-screen text-white flex   px-36 w-full md:w-[1440px] mx-auto md:py-0'>

                            <div className=" flex flex-col gap-5">
                                <h5 className=' text-[#f5b754] tracking-[6px] text-[12px]'> <span>*</span> PREMIUM</h5>
                                <h1 className=' font-Outfit, font-bold leading-10 text-[90px]'>Rental Car</h1>
                                <div className="flex gap-4">
                                    <h2 className='relative'>Rolls Royce Cullinan </h2>
                                    <div className="flex items-center justify-center">

                                        <h1 className='text-[#f5b754]  flex items-start text-2xl font-bold'>$900 </h1><span>/Day</span>
                                    </div>
                                </div>
                                <div className="flex gap-4">

                                    <Button>
                                        View Details <ArrowUpRight className="mr-2 h-4 w-4" />
                                    </Button>
                                    <Button className=' bg-transparent border text-white hover:text-black hover:bg-[#f5b754]'>
                                        Rent Now  <ArrowUpRight className="mr-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </CarouselItem>

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default Hero