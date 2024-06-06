import { Button } from '@/components/ui/button'
import { ArrowUpRight, CheckCircle2, LucideCheck, LucideCheckCircle2, Play } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Rentax() {
  return (
    <div className="bg-[#1b1b1b] py-12 md:py-28">
      <div className="container mx-auto px-6 md:px-36 md:max-w-[1440px] flex flex-col md:flex-row items-center justify-between text-white">

        {/* <div className=' relative items-center  justify-between  content-center  text-white flex   px-36 w-full md:w-[1440px] mx-auto md:py-0'> */}
        <div className=" flex flex-col gap-4">
          <h5 className="text-[#f5b754] tracking-[6px] text-[12px]">RENTAX</h5>
          <h1 className="font-Outfit font-bold text-3xl md:text-4xl lg:text-5xl">We Are More Than</h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-8 text-[#f5b754] font-bold">A Car Rental Company</h1>
          <p className="max-w-prose text-xs md:text-sm opacity-50 leading-7">Car repair quisque sodales dui ut varius vestibulum drana tortor turpis porttiton tellus eu euismod nisl massa nutodio in the miss volume place urna lacinia eros nunta urna mauris vehicula rutrum in the miss on volume interdum. </p>
          <div className="flex flex-col gap-4">
            <h1 className="flex items-center opacity-50 text-sm">
              <LucideCheck className="mr-3 h-8 w-4 text-[#f5b754]" />
              Sports and Luxury Cars
            </h1>
            <h1 className=' flex opacity-50 items-center '>
              <LucideCheck className="mr-3 h-8 w-4 text-[#f5b754]  " />
              Sports and Luxury Cars</h1>
            <h1 className=' flex opacity-50 items-center '>
              <LucideCheck className="mr-3  h-8 w-4 text-[#f5b754]   " />
              Economy Cars</h1>

          </div>
          <div className="">

            <Button>
              Read More <ArrowUpRight className=" mr-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex  relative mt-6 md:mt-0">
          <Image
            src={`/about.jpg`}
            alt="jordans"
            height="500"
            width="500"
            className="object-contain rounded-tl-3xl rounded-tr-3xl  rounded-bl-none rounded-br-3xl transition-transform duration-300 transform hover:scale-110  "
          />
          <div className=" absolute bottom-0 left-0 bg-[#1b1b1b] w-[85px] h-[85px] text-center rounded-tl-none rounded-tr-lg">

            <Button className='absolute top-[15px] left-0  h-8 px-6 py-6 bg-transparent border-[#f5b754] border hover:bg-[#f5b754] rounded-[50px]   '>
              <Play className="text-white" />
            </Button>
          </div>
          <div className="absolute top-[-24px] left-[-1px]  leading-[1]  "></div>
          <div className="absolute bottom-[-1px] right-[-24px]  leading-[1] "></div>
        </div>
      </div>
    </div>
  )
}


export default Rentax


