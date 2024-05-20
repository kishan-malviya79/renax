import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Briefcase, CarIcon, Usb, UserIcon } from 'lucide-react'
import { OPTIMIZED_FONT_PROVIDERS } from 'next/dist/shared/lib/constants'
import Image from 'next/image'
import React from 'react'

function LuxuryCar() {
  return (
    <div className='  bg-red-600   text-white overflow-hidden    w-full '>

      <div className="  w-full h-screen bg-black " >
        <div className="  w-full py-28 " >

          <div className=' relative items-center  justify-center  text-white flex   px-36 w-full md:w-[1440px] mx-auto md:py-0'>
            <div className="  items-center flex justify-center flex-col gap-4">
              <h5 className=' size-5 flex items-center justify-center right-3 w-full text-[#f5b754] tracking-[6px] text-[12px]'> SELECT YOUR CAR</h5>
              <h1 className=' font-Outfit,  font-bold w-full text-[35px]'>Luxury Car Fleet</h1>
            </div>
          </div>
        </div>
        <Carousel>
          <CarouselContent className='gap-6'>
            <CarouselItem className="md:basis-1/2  text-white lg:basis-1/3">

              <Image
                src={`/7.jpg`}
                
                alt="jordans"
                height="1100"
                width="1100"
                className="object-contain rounded-2xl "
              />
              <div className=" relative -top-7  px-4 py-6   rounded-2xl items-center flex justify-between bg-[#222] mx-3">
                <div className="flex flex-col ">

                <h1 className=' font-Outfit, font-bold  text-[18px]'>Lamborghini Urus  </h1>
                <div className="flex gap-4 text-sm items-center opacity-60">
                  <h1 className=' flex items-center gap-2 '> <span className=' text-[#f5b754] '><CarIcon/></span>  4 Seats</h1>
                  <h1 className=' flex items-center gap-2'> <span  className=' text-[#f5b754] '><Usb/></span> Auto</h1>
                  <h1 className=' flex items-center gap-2'> <span  className=' text-[#f5b754] '><Briefcase/></span> 2 Bags</h1>
                  <h1 className=' flex items-center gap-2'> <span  className=' text-[#f5b754]  '><UserIcon/></span>  Age 25</h1>
                </div>
                </div>
                <div className="flex gap-4">
                <Button className=' top-[15px] left-0  h-8 px-6 py-6 bg-[#f5b754] border-[#f5b754] border hover:bg-white rounded-[50px]   '>
               Details
            </Button>
                  <div className="flex items-end flex-col   justify-center ">

                    <h1 className='text-[#f5b754]  flex items-start text-2xl font-bold'>$750 </h1>
                    <span className=' text-sm'>/Day</span>
                  </div>
                </div>

              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2  text-white lg:basis-1/3">

              <Image
                src={`/7.jpg`}
                alt="jordans"
                height="1100"
                width="1100"
                className="object-contain rounded-2xl "
              />
              <div className=" relative -top-7  px-4 py-6   rounded-2xl items-center flex justify-between bg-[#222] mx-3">
                <div className="flex flex-col ">

                <h1 className=' font-Outfit, font-bold  text-[18px]'>Lamborghini Urus  </h1>
                <div className="flex gap-4 text-sm items-center opacity-60">
                  <h1 className=' flex items-center gap-2 '> <span className=' text-[#f5b754] '><CarIcon/></span>  4 Seats</h1>
                  <h1 className=' flex items-center gap-2'> <span  className=' text-[#f5b754] '><Usb/></span> Auto</h1>
                  <h1 className=' flex items-center gap-2'> <span  className=' text-[#f5b754] '><Briefcase/></span> 2 Bags</h1>
                  <h1 className=' flex items-center gap-2'> <span  className=' text-[#f5b754]  '><UserIcon/></span>  Age 25</h1>
                </div>
                </div>
                <div className="flex gap-4">
                <Button className=' top-[15px] left-0  h-8 px-6 py-6 bg-[#f5b754] border-[#f5b754] border hover:bg-white rounded-[50px]   '>
               Details
            </Button>
                  <div className="flex items-end flex-col   justify-center ">

                    <h1 className='text-[#f5b754]  flex items-start text-2xl font-bold'>$750 </h1>
                    <span className=' text-sm'>/Day</span>
                  </div>
                </div>

              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2  text-white lg:basis-1/3">

              <Image
                src={`/7.jpg`}
                alt="jordans"
                height="1100"
                width="1100"
                className="object-contain rounded-2xl "
              />
              <div className=" relative -top-7  px-4 py-6   rounded-2xl items-center flex justify-between bg-[#222] mx-3">
                <div className="flex flex-col ">

                <h1 className=' font-Outfit, font-bold  text-[18px]'>Lamborghini Urus  </h1>
                <div className="flex gap-4 text-sm items-center opacity-60">
                  <h1 className=' flex items-center gap-2 '> <span className=' text-[#f5b754] '><CarIcon/></span>  4 Seats</h1>
                  <h1 className=' flex items-center gap-2'> <span  className=' text-[#f5b754] '><Usb/></span> Auto</h1>
                  <h1 className=' flex items-center gap-2'> <span  className=' text-[#f5b754] '><Briefcase/></span> 2 Bags</h1>
                  <h1 className=' flex items-center gap-2'> <span  className=' text-[#f5b754]  '><UserIcon/></span>  Age 25</h1>
                </div>
                </div>
                <div className="flex gap-4">
                <Button className=' top-[15px] left-0  h-8 px-6 py-6 bg-[#f5b754] border-[#f5b754] border hover:bg-white rounded-[50px]   '>
               Details
            </Button>
                  <div className="flex items-end flex-col   justify-center ">

                    <h1 className='text-[#f5b754]  flex items-start text-2xl font-bold'>$750 </h1>
                    <span className=' text-sm'>/Day</span>
                  </div>
                </div>

              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2  text-white lg:basis-1/3">

              <Image
                src={`/7.jpg`}
                alt="jordans"
                height="1100"
                width="1100"
                className="object-contain rounded-2xl "
              />
              <div className=" relative -top-7  px-4 py-6   rounded-2xl items-center flex justify-between bg-[#222] mx-3">
                <div className="flex flex-col ">

                <h1 className=' font-Outfit, font-bold  text-[18px]'>Lamborghini Urus  </h1>
                <div className="flex gap-4 text-sm items-center opacity-60">
                  <h1 className=' flex items-center gap-2 '> <span className=' text-[#f5b754] '><CarIcon/></span>  4 Seats</h1>
                  <h1 className=' flex items-center gap-2'> <span  className=' text-[#f5b754] '><Usb/></span> Auto</h1>
                  <h1 className=' flex items-center gap-2'> <span  className=' text-[#f5b754] '><Briefcase/></span> 2 Bags</h1>
                  <h1 className=' flex items-center gap-2'> <span  className=' text-[#f5b754]  '><UserIcon/></span>  Age 25</h1>
                </div>
                </div>
                <div className="flex gap-4">
                <Button className=' top-[15px] left-0  h-8 px-6 py-6 bg-[#f5b754] border-[#f5b754] border hover:bg-white rounded-[50px]   '>
               Details
            </Button>
                  <div className="flex items-end flex-col   justify-center ">

                    <h1 className='text-[#f5b754]  flex items-start text-2xl font-bold'>$750 </h1>
                    <span className=' text-sm'>/Day</span>
                  </div>
                </div>

              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2  text-white lg:basis-1/3">

              <Image
                src={`/7.jpg`}
                alt="jordans"
                height="1100"
                width="1100"
                className="object-contain rounded-2xl "
              />
              <div className=" relative -top-7  px-4 py-6   rounded-2xl items-center flex justify-between bg-[#222] mx-3">
                <div className="flex flex-col ">

                <h1 className=' font-Outfit, font-bold  text-[18px]'>Lamborghini Urus  </h1>
                <div className="flex gap-4 text-sm items-center opacity-60">
                  <h1 className=' flex items-center gap-2 '> <span className=' text-[#f5b754] '><CarIcon/></span>  4 Seats</h1>
                  <h1 className=' flex items-center gap-2'> <span  className=' text-[#f5b754] '><Usb/></span> Auto</h1>
                  <h1 className=' flex items-center gap-2'> <span  className=' text-[#f5b754] '><Briefcase/></span> 2 Bags</h1>
                  <h1 className=' flex items-center gap-2'> <span  className=' text-[#f5b754]  '><UserIcon/></span>  Age 25</h1>
                </div>
                </div>
                <div className="flex gap-4">
                <Button className=' top-[15px] left-0  h-8 px-6 py-6 bg-[#f5b754] border-[#f5b754] border hover:bg-white rounded-[50px]   '>
               Details
            </Button>
                  <div className="flex items-end flex-col   justify-center ">

                    <h1 className='text-[#f5b754]  flex items-start text-2xl font-bold'>$750 </h1>
                    <span className=' text-sm'>/Day</span>
                  </div>
                </div>

              </div>
            </CarouselItem>
            
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default LuxuryCar