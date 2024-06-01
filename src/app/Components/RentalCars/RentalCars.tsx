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
    
    <div className="w-full bg-fixed relative ">
    <div className="w-full bg-fixed   "
     style={{
        backgroundImage: `url(${`o.jpg`})`, // Replace BgOverview with your actual variable name for the background image
        backgroundSize: 'cover', // Adjust as needed
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat",
        width:"full"

    }}>
       <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="  w-full py-28 " >

    <div className=' relative items-center  justify-center content-center  text-white flex   px-36 w-full md:w-[1440px] mx-auto md:py-0'>
    <div className="  items-center flex flex-col gap-4">
        <h5 className=' size-5 relative right-3 w-[18ch] text-[#f5b754] tracking-[6px] text-[12px]'> RENT NOW</h5>
        <h1 className=' font-Outfit, font-bold  text-[35px]'>Book Auto Rental</h1>
        <div className=" w-full flex bg-[#222] gap-3  px-6 py-6 items-center rounded-full ">
          <Menubar >
            <MenubarMenu>
              <MenubarTrigger className=' w-[17ch]' >Choose Car Type </MenubarTrigger> <ChevronDown className=' size-5 relative right-3 text-[#f5b754] '/> 
               <MenubarContent>
                
                <MenubarItem>Choose Car Type</MenubarItem>
                <MenubarItem>All</MenubarItem>
                <MenubarItem>Luxury Car</MenubarItem>
                <MenubarItem>Sport Cars</MenubarItem>
                <MenubarItem>SUVs</MenubarItem>
                <MenubarItem>Convertible</MenubarItem>

              </MenubarContent>
            </MenubarMenu>
            <span className='w-[1px] bg-white h-16 opacity-20'></span>

            <MenubarMenu>
              <MenubarTrigger className=' w-[17ch]'>Pick Up Location</MenubarTrigger><ChevronDown className=' size-5 relative right-3 text-[#f5b754] '/> 
            </MenubarMenu>
            <span className='w-[1px] bg-white h-16 opacity-20'></span>

            <MenubarMenu>
              <MenubarTrigger className=' w-[17ch]'>Pick Up Date</MenubarTrigger><LucideCalendarRange className=' size-4 relative right-3  text-[#f5b754] '/> 
              <MenubarContent>
                <MenubarItem>Car Grid</MenubarItem>
                <MenubarItem>Car Listing</MenubarItem>
                <MenubarItem>Car Types 01</MenubarItem>
                <MenubarItem>Car Types 02</MenubarItem>
                <MenubarItem>Car Details 01</MenubarItem>
                <MenubarItem>Car Details 02</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <span className='w-[1px] bg-white h-16 opacity-20'></span>
            
            <MenubarMenu>
              <MenubarTrigger className=' w-[17ch]'>Drop Of Location</MenubarTrigger><ChevronDown className=' size-5 relative right-3 text-[#f5b754] '/> 
              <MenubarContent>
                <MenubarItem>
                  Team
                </MenubarItem>
                <MenubarItem> Image Gallery</MenubarItem>
                <MenubarItem> Video Gallery</MenubarItem>
                <MenubarItem>Pricing Plang</MenubarItem>
                <MenubarItem>FAQ</MenubarItem>
                <MenubarItem>Testiominals</MenubarItem>
                <MenubarItem>Team Single</MenubarItem>
                <MenubarItem>404 error</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <span className='w-[1px] bg-white h-16 opacity-20'></span>

            <MenubarMenu>
              <MenubarTrigger className=' w-[17ch]'>Return Date</MenubarTrigger><LucideCalendarRange className='size-4  text-[#f5b754]  relative right-3'/> 
              <MenubarContent>
                
                <MenubarItem>  Blog List</MenubarItem>
                <MenubarItem>Post Single</MenubarItem>

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