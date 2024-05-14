import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import { Menu, Menubar, MenubarArrow, MenubarContent, MenubarGroup, MenubarMenu } from "@radix-ui/react-menubar";
import { MenubarSeparator } from "@/components/ui/menubar";
import React, { createContext } from 'react';


export default function Home() {
  return (
    <div className="bg-red-800 h-screen ">
      <Navbar/>
    
    </div>
  );
}
