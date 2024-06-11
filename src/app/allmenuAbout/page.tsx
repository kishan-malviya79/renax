import React from 'react'
import { Button } from '../../components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import OurServices from '@/app/Components/OurServices/OurServices'
import Rentax from '@/app/Components/Rentax/Rentax'
import RentalCars from '@/app/Components/RentalCars/RentalCars'
import LuxuryCar from '@/app/Components/LuxuryCar/LuxuryCar'
import CarRentalProcess from '@/app/Components/CarRentalProcess/CarRentalProcess'
import RentalCars1 from '@/app/Components/CarPromo/CarPromo'
import RentalCarsTypes from '@/app/Components/RentalCarsTypes/RentalCarsTypes'
import ClientsSay from '@/app/Components/ClientsSay/ClientsSay'
import ContactMenu from '../../components/ContactMenu/ContactMenu'
import Footer from '@/app/Footer/page'
import CarPromo from '@/app/Components/InterestedReting/InterestedReting'
import CarMarquee from '@/components/ui/Marquee/Marquee';

import LatestNews from '@/app/Components/LatestNews/LatestNews'
import Nav from '../Nav/page'


function AllMenuBar() {
  return (
   <div className="bg-[#1b1b1b] w-full">
    <Nav />
<div className="w-full  relative">
            <div
                className="w-full h-[600px]  bg-cover bg-center  bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${`car22.jpg`})`, // Replace bugatti.jpg with your actual image file name or path
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black overlay */}
                <div className="relative w-full py-28">
                   
                <div className=' items-center  content-center  text-white flex px-4  lg:px-36    w-full lg:w-[1440px] mx-auto md:py-20'>
                    {/* <div className="relative items-center justify-center text-white flex flex-col px-36 w-full md:w-[1440px] mx-auto md:py-0"> */}
                        <div className="items-start flex flex-col gap-4">
                            <h5 className="text-[#f5b754] tracking-[6px] text-[10px]">RENTAX</h5>
                            <h1 className="font-Outfit font-bold   sm:text-[35px] text-[30px]">
                              About <span className='text-[#f5b754] '> Us</span> 
                            </h1>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <Rentax/>
         <RentalCars1/>
         <ClientsSay/> 
         <LatestNews/>
         <CarPromo/>
         <CarMarquee/>
         <ContactMenu/> 
         <Footer/> 
         </div>
  )
}

export default AllMenuBar