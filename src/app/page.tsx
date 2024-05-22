
import React, { createContext } from 'react';
import Hero from "./Components/Hero/Hero";
import Rentax from './Components/Rentax/Rentax';
import RentalCars from './Components/RentalCars/RentalCars';
import LuxuryCar from './Components/LuxuryCar/LuxuryCar';
import RentalCarsTypes from './Components/RentalCarsTypes/RentalCarsTypes';
import RentalCarsType from './Components/Card/Card';
import CarRentalProcess from './Components/CarRentalProcess/CarRentalProcess';

export default function Home() {
  return (
    <div className="  h-screen w-full ">
      <Hero />
      <Rentax/>
      <RentalCars/>
      <LuxuryCar/>
      <RentalCarsTypes/>
      <CarRentalProcess/>
    </div>
  );
}
