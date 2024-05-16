import { Button } from '@/components/ui/button'
import { ArrowUpRight, CheckCircle2, LucideCheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Rentax() {
  return (
    <div className="bg-black py-28">

    <div className=' relative items-center  justify-between  content-center  text-white flex   px-36 w-full md:w-[1440px] mx-auto md:py-0'>
    <div className=" flex flex-col gap-4">
        <h5 className=' text-[#f5b754] tracking-[6px] text-[12px]'>  RENTAX</h5>
        <h1 className=' font-Outfit, font-bold  text-[35px]'>We Are More Than </h1>
        <h1 className=' text-[35px] leading-5 text-[#f5b754] font-bold '>A Car Rental Company </h1> 
            <p className='w-[70ch] text-xs opacity-50 leading-7 '>Car repair quisque sodales dui ut varius vestibulum drana tortor turpis porttiton tellus eu euismod nisl massa nutodio in the miss volume place urna lacinia eros nunta urna mauris vehicula rutrum in the miss on volume interdum.  </p>
        <div className="flex flex-col gap-4">
            <h1 className=' flex items-center '>
            <LucideCheckCircle2 className="mr-2 h-8 w-8  border-black border rounded-full " />
                Sports and Luxury Cars</h1>
            <h1 className=' flex items-center '>
            <LucideCheckCircle2 className="mr-2 h-8 w-8  border-black border rounded-full " />
            Economy Cars</h1>
          
        </div>
        <div className="">
            
            <Button>
                Read More <ArrowUpRight className=" mr-2 h-4 w-4" />
            </Button>
        </div>
    </div>
    <div className="flex">
    <Image
          src={`/about.jpg`}
          alt="jordans"
          height="500"
          width="500"
          className="object-contain rounded-[24px]  "
        />
    </div>
    </div>
    </div>
  )
}


export default Rentax