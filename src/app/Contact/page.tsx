import React from 'react'
import Rentax from '../Components/Rentax/Rentax'
import RentalCars1 from '../Components/CarPromo/CarPromo'
import ContactMenu from '@/components/ContactMenu/ContactMenu'
import CarMarquee from '@/components/ui/Marquee/Marquee';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Footer from '../Footer/page'
import Nav from '../Nav/page'
import CarPromo from '../Components/InterestedReting/InterestedReting';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Timer } from 'lucide-react';
import { ConMails } from '@/components/ui';


interface ContactItem {
    src: React.ReactNode; // Assuming src will contain React components
    title: string;
    p: string;
}

const contactItems: ContactItem[] = [
    {

        src: <Mail className="text-[#f5b754 hover:text-black size-10" />,
        title: 'Email us',
        p: 'info@renax.com',
    },
    {
        src: <MapPin className=" size-10" />,
        title: 'Our address',
        p: 'Dubai, Water Tower, Office 123',
    },
    {
        src: <Timer className=" hover:text-black size-10" />,
        title: 'Opening Hours',
        p: 'Mon-Sun: 8 AM - 7 PM',
    },
    {
        src: <Phone className="text-[#f5b754  hover:text-black size-10" />,
        title: 'Call us',
        p: '+971 52-333-4444',
    },
];

const Contact: React.FC = () => {
    return (
        <div className="bg-[#1b1b1b] w-full ">
            < Nav />
            <div className="w-full  relative">
                <div
                    className="w-full h-[450px] sm:h-[600px]  bg-cover bg-center  bg-no-repeat relative"
                    style={{
                        backgroundImage: `url(${`c2.jpg`})`, // Replace bugatti.jpg with your actual image file name or path
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black overlay */}
                    <div className="relative w-full py-28">

                        {/* <div className=' items-center  content-center  text-white flex px-4  lg:px-36    w-full md:w-[1440px] mx-auto md:py-20'> */}
                        <div className="relative items-center justify-center text-white flex flex-col py-24 sm:px-36 w-full lg:w-[1440px] mx-auto md:py-20">
                            <div className=" items-center  sm:items-start flex flex-col sm:gap-4">
                                <h5 className="text-[#f5b754] tracking-[6px] text-[10px]">GET IN TOUCH</h5>
                                <h1 className="font-Outfit font-bold   sm:text-[35px] text-[42px]">
                                    Contact<span className='text-[#f5b754] '> Us</span>
                                </h1>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="items-start relative -top-7  right-3 sm:right-0  justify-start flex sm:flex-row flex-col  gap-6 sm:gap-0 px-5 lg:px-36 w-full lg:w-[1440px] mx-auto md:py-0">
            {contactItems.map((item, index) => (
        <div key={index} className={`w-full relative px-8 py-16 rounded-2xl sm:items-center flex flex-row justify-between gap-3 sm:gap-0 mx-3 transform   transition-transform ${index === 3 ? 'bg-[#f5b754] text-black hover:scale-110' : 'text-white hover:text-black bg-[#222] hover:bg-[#f5b754] hover:scale-110'}`}>
            <div className="flex flex-col gap-4">
                <div className="text-[#f5b75] hover:text-black">
                    {item.src}
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="font-Outfit font-bold text-[18px]">{item.title}</h1>
                    <p className="text-[12px] opacity-50">{item.p}</p>
                </div>
            </div>
        </div>
    ))}
            </div>
            <div className="items-start relative md:gap-28   justify-between text-white flex  flex-col sm:flex-row md:px-8 lg:px-36 w-[356px] sm:w-full lg:w-[1440px] mx-auto lg:py-20">

                <form className="flex  flex-col gap-5 left-4 relative sm:left-0  max    -w-350px bg-[#1b1b1b] pl-0 pt-20 rounded-lg" >
                    <h1 className="font-Outfit flex items-center justify-center font-bold text-white text-[18px]">Get In Touch</h1>
                    <div className="flex sm:flex-row flex-col  gap-6">
                        <label className="w-full relative">
                            <input placeholder=" Your Name*" type="text" className="input bg-[#222222] text-sm rounded-[40px] sm:w-full w-80 px-2 sm:px-7 py-4 " />
                            <span className="absolute left-0  text-gray-500 text-sm transition-all">    </span>
                        </label>
                        <label className="w-full relative">
                            <input placeholder="Your Email*" type="text" className="input bg-[#222222] text-sm rounded-[40px] sm:w-full w-80 px-2 sm:px-7 py-4 " />
                            <span className="absolute left-0  text-gray-500 text-sm transition-all"></span>
                        </label>
                    </div>
                    <div className="flex sm:flex-row flex-col  gap-6">

                        <label className="w-full relative">
                            <input placeholder=" Your Number*" type="text" className="input bg-[#222222] text-sm rounded-[40px] sm:w-full w-80 px-2 sm:px-7 py-4 " />
                            <span className="absolute left-0  text-gray-500 text-sm transition-all">    </span>
                        </label>
                        <label className="w-full relative">
                            <input placeholder="Subject*" type="text" className="input bg-[#222222] text-sm rounded-[40px] sm:w-full w-80 px-2 sm:px-7 py-4 " />
                            <span className="absolute left-0  text-gray-500 text-sm transition-all"></span>
                        </label>
                    </div>
                    <div className="flex  ">
                        <label className="w-full relative ">
                            <input placeholder="Message*" type="text" className="input bg-[#222222] text-sm rounded-[40px] h-40 sm:w-full w-80 pl-8 p-4 pb-20 " />
                            <span className="absolute left-0   text-gray-500 text-sm transition-all">    </span>
                        </label>

                    </div>
                    <div className="">
                        <Button>
                            Send Message
                        </Button>
                    </div>
                </form>
                <div className="flex flex-col gap-5  max-w-350px pl-0  lg:pb-0 pb-24 pt-20 bg-[#1b1b1b]  rounded-lg" >
                    <h1 className="font-Outfit flex items-center justify-center font-bold text-white text-[18px]">Traffic</h1>
                    <div
                        className=" w-[356px] h-[350px] lg:w-[500px] lg:h-[380px] rounded-[26px] bg-cover bg-center  bg-no-repeat relative"
                        style={{
                            backgroundImage: `url(${`traffic.jpg`})`, // Replace bugatti.jpg with your actual image file name or path
                        }}
                    ></div>
                </div>
            </div>
            <CarPromo />
            <CarMarquee />
            <ContactMenu />
            <Footer />
        </div>
    );
};

export default Contact  