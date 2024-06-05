
import Footer from '@/app/Footer/Footer'
import { Mail, MapPin, PhoneCall } from 'lucide-react'
import React from 'react'

function ContactMenu() {
    return (
        <div className="bg-[#1b1b1b] ">
            <div className=' relative items-center  justify-center content-center  text-white flex px-3   sm:px-36 w-full md:w-[1440px] mx-auto md:py-0'>

                <div className=" w-full flex flex-col sm:flex-row bg-[#222]  sm:border-0 border-[.5px] my-28 gap-6  px-6 py-6 sm:items-center justify-between rounded-2xl ">
                    <div className="flex gap-4 items-center ">
                        <div className=' px-5 py-5 bg-[#f5b754]  rounded-[65px] '>
                            <div className=""><PhoneCall className=' text-black opacity-50 size-[23px]' /></div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className=' font-Outfit font-bold'>Call us</h1>
                            <a className=' text-[14px] opacity-80' href="tel:971 52-333-4444">+971 52-333-4444</a>
                        </div>
                    </div>

                    <span className=' w-full  sm:w-[1px] bg-white h-[0.1px] sm:h-16 opacity-20'></span>

                    <div className="flex gap-4 items-center ">
                        <div className=' px-5 py-5 bg-[#f5b754]  rounded-[65px] '>
                            <div className=""><Mail className=' text-black opacity-50 size-[23px]' /></div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className=' font-Outfit font-bold'>Write to us</h1>
                            <a className=' text-[14px] opacity-80' >info@renax.com</a>
                        </div>
                    </div>

                    <span className=' w-full  sm:w-[1px] bg-white h-[0.1px] sm:h-16 opacity-20'></span>
                    <div className="flex gap-4 items-center ">
                        <div className=' px-5 py-5 bg-[#f5b754]  rounded-[65px] '>
                            <div className=""><MapPin className=' text-black opacity-50 size-[23px]' /></div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className=' font-Outfit font-bold'>Address</h1>
                            <a className=' text-[14px] opacity-80' >Dubai, Water Tower, Office 123

                            </a>
                        </div>
                    </div>


                    
                </div>
            </div>
            <Footer/>

        </div>
    )
}

export default ContactMenu  