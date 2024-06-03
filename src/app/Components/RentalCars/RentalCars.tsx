import { Button } from '@/components/ui/button'
import { ArrowUpRight, ChevronDown, LucideCalendarRange, LucideCheck } from 'lucide-react'
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

function RentalCars() {
  return (

    <div className="w-full relative ">
      <div className="w-full sm:bg-fixed   "
        style={{
          backgroundImage: `url(${`odi2.jpg`})`, // Replace BgOverview with your actual variable name for the background image
          backgroundSize: 'cover', // Adjust as needed
          backgroundPosition: 'center',
          backgroundRepeat: "no-repeat",
          width: "full"

        }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="  w-full py-28 " >

          <div className=' relative items-center  justify-center content-center  text-white flex   px-36 w-full md:w-[1440px] mx-auto md:py-0'>
            <div className="  items-center flex flex-col gap-4">
              <h5 className=' size-5 relative sm:right-3 w-[18ch] text-[#f5b754] tracking-[6px] text-[12px]'> RENT NOW</h5>
              <h1 className=' font-Outfit, font-bold  text-[35px]'>Book Auto Rental</h1>
              <div className=" w-[356px] sm:w-full  bg-[#222] gap-3  flex flex-col  h-[492px] sm:h-auto  sm:flex-row  px-6 py-6 items-center rounded-3xl sm:rounded-full ">
                <Menubar className=' gap-8 sm:gap-6 flex flex-col  h-[400px] sm:h-auto w-full sm:flex-row' >
                  <MenubarMenu  >
                    <MenubarTrigger className=' w-full  px-2 sm:px-0 relative sm:w-[17ch]   justify-between flex ' >Choose Car Type <ChevronDown className=' size-5 relative  text-[#f5b754] ' />  </MenubarTrigger>
                    <MenubarContent className='  w-[320px] right-2 relative sm:w-full  '>

                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>Choose Car Type</MenubarItem>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>All</MenubarItem>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>Luxury Car</MenubarItem>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>Sport Cars</MenubarItem>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>SUVs</MenubarItem>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>Convertible</MenubarItem>

                    </MenubarContent>
                  </MenubarMenu>
                  <span className='w-[1px] bg-white h-16 opacity-20'></span>

                  <MenubarMenu>
                    <MenubarTrigger className=' w-full  px-2 sm:px-0 relative sm:w-[17ch]   justify-between flex'>Pick Up Location<ChevronDown className=' size-5 relative text-[#f5b754] ' /></MenubarTrigger>
                    <MenubarContent className='  w-[320px] right-2 relative sm:w-full  '>

                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>Pick Up Location</MenubarItem>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>Dubai</MenubarItem>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>Abu Dubai</MenubarItem>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>Sharjah</MenubarItem>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>Alain</MenubarItem>

                    </MenubarContent>
                  </MenubarMenu>
                  <span className='w-[1px] sm:sh bg-white h-16 opacity-20'></span>

                  <MenubarMenu>
                    <MenubarTrigger className=' w-full  px-2 sm:px-0 relative sm:w-[17ch]   justify-between flex'>Pick Up Date<LucideCalendarRange className=' size-4 relative  text-[#f5b754] ' /> </MenubarTrigger>
                    <MenubarContent className='  w-[320px] right-2 relative sm:w-full  '>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>Car Grid</MenubarItem>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>Car Listing</MenubarItem>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>Car Types 01</MenubarItem>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>Car Types 02</MenubarItem>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>Car Details 01</MenubarItem>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>Car Details 02</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <span className='w-[1px] bg-white h-16 opacity-20'></span>

                  <MenubarMenu>
                    <MenubarTrigger className=' w-full  px-2 sm:px-0 relative sm:w-[17ch]   justify-between flex'>Drop Of Location<ChevronDown className=' size-5 relative text-[#f5b754] ' /></MenubarTrigger>
                    <MenubarContent className='  w-[320px] right-2 relative sm:w-full  '>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'> Team </MenubarItem>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'> Image Gallery</MenubarItem>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'> Video Gallery</MenubarItem>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>Pricing Plang</MenubarItem>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>FAQ</MenubarItem>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>Testiominals</MenubarItem>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>Team Single</MenubarItem>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>404 error</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <span className='w-[1px] bg-white h-16 opacity-20'></span>

                  <MenubarMenu>
                    <MenubarTrigger className=' w-full  px-2 sm:px-0 relative sm:w-[17ch]   justify-between flex'>Return Date<LucideCalendarRange className='size-4  text-[#f5b754]  relative right-3' /> </MenubarTrigger>
                    <MenubarContent className='  w-[320px] right-2 relative sm:w-full  '>

                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>  Blog List</MenubarItem>
                      <MenubarItem className='  flex items-center  sm:justify-start justify-center'>Post Single</MenubarItem>

                    </MenubarContent>

                  </MenubarMenu>


                </Menubar>
                <div className=" relative  content-center">

                  <Button>
                    Rent Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RentalCars