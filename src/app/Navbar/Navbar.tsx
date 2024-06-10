// // components/Navbar.js

// import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSub, MenubarSubContent, MenubarTrigger } from '@/components/ui/menubar';
// import { MenubarSubTrigger } from '@radix-ui/react-menubar';
// import { ChevronDown } from 'lucide-react';
// import Router from 'next/router';
// import { useState } from 'react';

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//       <nav className="  top-10  items-center  lg:items-center justify-between  text-white flex gap-24 py-6 px-4 md:px-3 lg:px-36  w-full  lg:w-[1440px] mx-auto md:py-0 ">

//       <div className="text-white">
//         <a href="/" className="text-white">Home</a>
//       </div>
//       <div className="text-white">
//         <div className="menu-icon cursor-pointer" onClick={toggleMenu}>
//           <span className="block h-1 w-6 bg-white mb-1"></span>
//           <span className="block h-1 w-6 bg-white mb-1"></span>
//           <span className="block h-1 w-6 bg-white mb-1"></span>
//         </div>
//         {showMenu && (
//           <div className="menu absolute top-12 left-0 sm:right-4 w-full h-[400px] bg-gray-800 p-4 rounded z-10">
//             <Menubar className=" gap-4 sm:flex-row relative items-start justify-start lg:flex-row  md:flex-col flex-col flex" >
//             <MenubarMenu>
//               <MenubarTrigger>Home <ChevronDown className=" size-[16px]"/></MenubarTrigger> 
//                <MenubarContent>
//                 <MenubarItem>
//                   Slider
//                 </MenubarItem>
//                 <MenubarItem>Image</MenubarItem>
//                 <MenubarItem>Video</MenubarItem>
//                 <MenubarItem>Slidershow</MenubarItem>
//                 <MenubarSub>
//                   <MenubarSubTrigger>Onepage</MenubarSubTrigger>
//                   <MenubarSubContent>
//                     <MenubarItem>Slider</MenubarItem>
//                     <MenubarItem>Image</MenubarItem>
//                     <MenubarItem>Videos</MenubarItem>
//                     <MenubarItem>Sliveshow</MenubarItem>
//                   </MenubarSubContent>
//                 </MenubarSub>
//               </MenubarContent>
//             </MenubarMenu>
//             <MenubarMenu>
//               <MenubarTrigger onClick={() => {
//               Router.push("/allmenuAbout");
//             }}>About </MenubarTrigger>
//             </MenubarMenu>
//             <MenubarMenu>
//             <MenubarMenu>
//               <MenubarTrigger>Services<ChevronDown className=" size-[16px]"/></MenubarTrigger>
//             </MenubarMenu>
//               <MenubarTrigger>Cars<ChevronDown className=" size-[16px]"/></MenubarTrigger>
//               <MenubarContent>
//                 <MenubarItem>Car Grid</MenubarItem>
//                 <MenubarItem>Car Listing</MenubarItem>
//                 <MenubarItem>Car Types 01</MenubarItem>
//                 <MenubarItem>Car Types 02</MenubarItem>
//                 <MenubarItem>Car Details 01</MenubarItem>
//                 <MenubarItem>Car Details 02</MenubarItem>
//               </MenubarContent>
//             </MenubarMenu>
            
//             <MenubarMenu>
//               <MenubarTrigger>Pages<ChevronDown className=" size-[16px]"/></MenubarTrigger>
//               <MenubarContent>
//                 <MenubarItem>
//                   Team
//                 </MenubarItem>
//                 <MenubarItem> Image Gallery</MenubarItem>
//                 <MenubarItem> Video Gallery</MenubarItem>
//                 <MenubarItem>Pricing Plang</MenubarItem>
//                 <MenubarItem>FAQ</MenubarItem>
//                 <MenubarItem>Testiominals</MenubarItem>
//                 <MenubarItem>Team Single</MenubarItem>
//                 <MenubarItem>404 error</MenubarItem>
//               </MenubarContent>
//             </MenubarMenu>
//             <MenubarMenu>
//               <MenubarTrigger>Blog<ChevronDown className=" size-[16px]"/></MenubarTrigger>
//               <MenubarContent>
//                 <MenubarItem>
//                   Blog Grid
//                 </MenubarItem>
//                 <MenubarItem>  Blog List</MenubarItem>
//                 <MenubarItem>Post Single</MenubarItem>

//               </MenubarContent>
//             </MenubarMenu>
//             <MenubarMenu>
//               <MenubarTrigger onClick={() => {
//               Router.push("/Contact");
//             }}>Contact</MenubarTrigger>
//             </MenubarMenu>

//           </Menubar>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
