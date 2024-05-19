
import React, { createContext } from 'react';
import Hero from "./Components/Hero/Hero";
import Rentax from './Components/Rentax/Rentax';
import RentalCars from './Components/RentalCars/RentalCars';

export default function Home() {
  return (
    <div className="  h-screen w-full ">
      <Hero />
      <Rentax/>
      <RentalCars/>
      <Rentax/>
    </div>
  );
}
