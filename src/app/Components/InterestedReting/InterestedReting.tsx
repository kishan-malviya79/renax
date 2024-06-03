import { Button } from '@/components/ui/button';
import { ArrowUpRight, MessageCircle, Play } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

function CarPromo() {   
    return (
        <div className="w-full bg-fixed relative">
            <div
                className="w-full sm:bg-fixed bg-cover bg-center  bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${`car22.jpg`})`, // Replace bugatti.jpg with your actual image file name or path
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black overlay */}
                <div className="relative w-full py-28">
                    <div className="relative items-center justify-center text-white flex flex-col px-36 w-full md:w-[1440px] mx-auto md:py-0">
                        <div className="items-center flex flex-col gap-4">
                            <h5 className="text-[#f5b754] tracking-[6px] text-[10px]">RENT YOUR CAR</h5>
                            <h1 className="font-Outfit font-bold   sm:text-[35px] text-[30px]">
                                Interested in Renting?
                            </h1>
                            <h5 className=" text-[14px]">Don't hesitate and send us a message.</h5>
                            <div className="w-full flex gap-3 items-center justify-center rounded-full">
                                <div className="flex  gap-4">

                                    <Button className=' px-8   sm:px-12'>
                                         <MessageCircle className="mr-2 h-4 w-4" />WhatsApp
                                    </Button>
                                    <Button className='   px-8   sm:px-12 bg-transparent border text-white hover:text-black hover:bg-[#f5b754]'>
                                        Rent Now  <ArrowUpRight className="mr-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default CarPromo;
