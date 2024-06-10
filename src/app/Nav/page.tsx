"use client"
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
import { ChevronDown, Menu, PhoneCall } from 'lucide-react';
import { useRouter } from "next/navigation";
import Router from 'next/router';
import { useState } from "react";




function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const router = useRouter();
  return (
    <div className="   bg-transparent   w-full  py-2  sm:py-6">
      <div className="  top-10  items-center  lg:items-center justify-between  text-white flex gap-24 py-6 px-4 md:px-3 lg:px-36  w-full  lg:w-[1440px] mx-auto md:py-0 ">
        <Image
          src={`/Renax-logo.png`}
          alt="jordans"
          height="120"
          width="120"
          className="object-contain  "onClick={() => {
            router.push("/");
          }}
        />
       <div className="text-white">
        <div className="menu-icon cursor-pointer" onClick={toggleMenu}>
          <span className="block h-1 w-6 bg-white mb-1"></span>
          <span className="block h-1 w-6 bg-white mb-1"></span>
          <span className="block h-1 w-6 bg-white mb-1"></span>
        </div>
        {showMenu && (
          <div className="menu absolute top-[72px] left-0 sm:right-4 w-full h-[340px] bg-[#222222] p-4  z-10">
            <Menubar className=" gap-4 sm:flex-row relative items-start justify-start lg:flex-row  md:flex-col flex-col flex" >
            <MenubarMenu>
              <MenubarTrigger>Home <ChevronDown className=" size-[16px]"/></MenubarTrigger> 
               <MenubarContent>
                <MenubarItem>
                  Slider
                </MenubarItem>
                <MenubarItem>Image</MenubarItem>
                <MenubarItem>Video</MenubarItem>
                <MenubarItem>Slidershow</MenubarItem>
                <MenubarSub>
                  <MenubarSubTrigger>Onepage</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Slider</MenubarItem>
                    <MenubarItem>Image</MenubarItem>
                    <MenubarItem>Videos</MenubarItem>
                    <MenubarItem>Sliveshow</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger onClick={() => {
              router.push("/allmenuAbout");
            }}>About </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Services<ChevronDown className=" size-[16px]"/></MenubarTrigger>
            </MenubarMenu>
              <MenubarTrigger>Cars<ChevronDown className=" size-[16px]"/></MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Car Grid</MenubarItem>
                <MenubarItem>Car Listing</MenubarItem>
                <MenubarItem>Car Types 01</MenubarItem>
                <MenubarItem>Car Types 02</MenubarItem>
                <MenubarItem>Car Details 01</MenubarItem>
                <MenubarItem>Car Details 02</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            
            <MenubarMenu>
              <MenubarTrigger>Pages<ChevronDown className=" size-[16px]"/></MenubarTrigger>
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
            <MenubarMenu>
              <MenubarTrigger>Blog<ChevronDown className=" size-[16px]"/></MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Blog Grid
                </MenubarItem>
                <MenubarItem>  Blog List</MenubarItem>
                <MenubarItem>Post Single</MenubarItem>

              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger onClick={() => {
              router.push("/Contact");
            }}>Contact</MenubarTrigger>
            </MenubarMenu>

          </Menubar>
          </div>
        )}
          <div className="lg:flex md:hidden text-white justify-between hidden h-10  lg:gap-4">

            <div className=" border-[1px] rounded-[50%] px-2 py-2 border-[#f5b754] justify-center items-center flex ">
              <PhoneCall />

            </div>
            <div className="flex justify-between flex-col">
              <h1>Need Help?</h1>
              <a href="tel:855 100 4444">855 100 4444</a>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Nav