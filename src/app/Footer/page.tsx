import { ArrowUpRight, Facebook, MessageCircle, PhoneCall, YoutubeIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'





function Footer() {
    return (
        <div className="bg-[#1b1b1b]  ">
            <div className=' relative items-start  justify-start content-center gap-28  text-white flex flex-col px-3   sm:px-36 w-full md:w-[1440px] mx-auto md:py-0'>
                <div className=" w-full flex flex-col sm:flex-row  gap-32  sm:gap-6    sm:items-center justify-between rounded-2xl ">
                    <div className="flex ">
                        <div className=" flex  justify-between flex-col gap-6   ">
                            <Image
                                src={`/Renax-logo.png`}
                                alt="jordans"
                                height="140"
                                width="140"
                                className="object-contain  "
                            />
                            <p className="object-contain text-[13px] leading-8 sm:w-[45ch] opacity-80  text-white ">Rent a car imperdiet sapien porttito the bibenum ellentesue the commodo erat nesuen.</p>
                            <div className="flex  gap-2">
                                <div className=" border-[1px] rounded-[50%] px-3 py-3 border-[#f5b754]   justify-center items-center flex ">
                                    <MessageCircle className=' size-[17px]' />
                                </div>
                                <div className=" border-[1px] rounded-[50%] px-3 py-3 border-[#f5b754] justify-center items-center flex ">
                                    <Facebook className=' size-[17px]' />
                                </div>
                                <div className=" border-[1px] rounded-[50%] px-3 py-3 border-[#f5b754] justify-center items-center flex ">
                                    <YoutubeIcon className=' size-[17px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col  items-start  justify-start gap-8">
                        <h1 className='font-Outfit font-bold w-full  text-[20px]'>Quick Links</h1>
                        <ul className=' text-[#f5b754] list-disc justify-cente flex flex-col gap-2 relative left-4	'   >
                            <li className=' text-[14px] opacity-90 text-[#f5b754]'> <a className='text-white' href="Contact">About</a></li>
                            <li className=' text-[14px] opacity-90text-[#f5b754]'> <a className='text-white' href="Contact">Car</a></li>
                            <li className=' text-[14px] opacity-90text-[#f5b754]'> <a className='text-white' href="Contact">Car type</a></li>
                            <li className=' text-[14px] opacity-90text-[#f5b754]'> <a className='text-white' href="Contact">Team</a></li>
                            <li className=' text-[14px] opacity-90 text-[#f5b754]'> <a className='text-white' href="Contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="flex ">
                        <div className=" flex  justify-between flex-col gap-6   ">
                            <h1 className='font-Outfit font-bold w-full text-[20px]'>Subscribe</h1>

                            <p className="object-contain text-[13px] leading-8 sm:w-[50ch] opacity-80  text-white ">Want to be notified about our services. Just sign up and we'll send you a notification by email.

                            </p>
                            <div className="flex   gap-2">
                                <div className=" border-[1px] rounded-[40px] sm:w-full w-80 px-2 sm:px-2 py-2 border-[#f5b754]   justify-between flex-row items-center flex ">
                                    <form >
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder=" Email Address"
                                            required 
                                            className=' bg-transparent '
                                        />
                                    </form>
                                        <button className=" border-[1px] rounded-[50%] px-3 py-3  text-black bg-[#f5b754] hover:bg-white  justify-center items-center flex ">
                                        <ArrowUpRight className=' size-[17px] hover:rotate-90 ' />
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <p className=' pb-7 text-[11px] opacity-50  text-white  ' >©2024  <span className=' text-white opacity-100' >DuruThemes</span> All rights reserved.</p>
            </div>

        </div>
    )
}

export default Footer