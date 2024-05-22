import { Button } from '@/components/ui/button'
import { ArrowUpRight, ChevronDown, LucideCalendarRange, LucideCheck, Play } from 'lucide-react'
import React from 'react'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import Image from "next/image"
  import { PhoneCall } from 'lucide-react';

function RentalCars1() {
  return (
    <div className="w-full bg-fixed relative ">
    <div className="w-full bg-fixed    bg-[#1b1b1b]  before:contain-none  z-10 opacity-80"
     style={{
        backgroundImage: `url(${`bugatti.jpg`})`, // Replace BgOverview with your actual variable name for the background image
        backgroundSize: 'cover', // Adjust as needed
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat",
        width:"full"

    }}>
    <div className="  w-full py-28 " >

    <div className=' relative items-center  justify-center content-center  text-white flex   px-36 w-full md:w-[1440px] mx-auto md:py-0'>
    <div className="  items-center flex flex-col gap-4">
        <h5 className=' size-5 relative right-3 w-[18ch] text-[#f5b754] tracking-[6px] text-[12px]'> EXPLORE</h5>
        <h1 className=' font-Outfit, font-bold  text-[35px]'>Car Promo Video</h1>
        <div className=" w-full flex  gap-3   items-center justify-center rounded-full ">
        <Button className='   h-12 px-11 py-14  bg-transparent border-[#f5b754] border hover:bg-[#f5b754] rounded-[65px]   '>
          <Play className="text-white text-[2px]" />
            </Button>
          
        </div>
        </div>
        </div> 
    </div>
    </div>
    </div>
  )
}

export default RentalCars1