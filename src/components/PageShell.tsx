import React from "react";
import Nav from "@/app/Nav/page";
import Footer from "@/app/Footer/page";
import CarPromo from "@/app/Components/InterestedReting/InterestedReting";
import CarMarquee from "@/components/ui/Marquee/Marquee";
import ContactMenu from "@/components/ContactMenu/ContactMenu";

interface PageShellProps {
  eyebrow: string;
  title: string;
  accent: string;
  image?: string;
  children: React.ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
}: {
  eyebrow: string;
  title: string;
  accent: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 text-white text-center">
      <h5 className="text-[#f5b754] tracking-[6px] text-[12px] uppercase">{eyebrow}</h5>
      <h2 className="font-Outfit font-bold text-[35px]">
        {title} <span className="text-[#f5b754]">{accent}</span>
      </h2>
    </div>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full px-4 md:px-8 lg:px-36 lg:max-w-[1440px] mx-auto text-white ${className}`}>
      {children}
    </div>
  );
}

export default function PageShell({
  eyebrow,
  title,
  accent,
  image = "car22.jpg",
  children,
}: PageShellProps) {
  return (
    <div className="bg-[#1b1b1b] w-full">
      <Nav />
      <div
        className="w-full h-[450px] sm:h-[600px] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(/${image.replace(/^\//, "")})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative w-full py-28">
          <Container className="flex items-center md:py-20 py-24">
            <div className="flex flex-col gap-4 items-start">
              <h5 className="text-[#f5b754] tracking-[6px] text-[10px] uppercase">{eyebrow}</h5>
              <h1 className="font-Outfit font-bold sm:text-[35px] text-[30px]">
                {title} <span className="text-[#f5b754]">{accent}</span>
              </h1>
            </div>
          </Container>
        </div>
      </div>
      {children}
      <CarPromo />
      <CarMarquee />
      <ContactMenu />
      <Footer />
    </div>
  );
}
