
import React, { createContext } from 'react';
import Hero from "./Components/Hero/Hero";
import Rentax from './Components/Rentax/Rentax';
import RentalCars from './Components/RentalCars/RentalCars';
import LuxuryCar from './Components/LuxuryCar/LuxuryCar';
import RentalCarsTypes from './Components/RentalCarsTypes/RentalCarsTypes';
import RentalCarsType from './Components/Card/Card';
import CarRentalProcess from './Components/CarRentalProcess/CarRentalProcess';
import RentalCars1 from './Components/CarPromo/CarPromo';
import ClientsSay from './Components/ClientsSay/ClientsSay';
import LatestNews from './Components/LatestNews/LatestNews';
import CarPromo from './Components/InterestedReting/InterestedReting';
import CarMarquee from '@/components/ui/Marquee/Marquee';
import ContactMenu from '@/components/ContactMenu/ContactMenu';
import Footer from './Footer/page';
import OurServices from './Components/OurServices/OurServices';
import AllMenuBar from '@/app/allmenuAbout/page';

export default function Home() {
  return (
    <div className=" bg-[#1b1b1b]  h-screen w-full ">
      <Hero />
      <Rentax/>
      <OurServices/>
      <RentalCars/>
      <LuxuryCar/>
      <RentalCarsTypes/>
      <CarRentalProcess/>
      <RentalCars1/>
      <ClientsSay/> 
      <LatestNews/>
      <CarPromo/>
      <CarMarquee/>
      <ContactMenu/> 
      <Footer/> 
    </div>
  );
}
