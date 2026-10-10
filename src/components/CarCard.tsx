import Image from "next/image";
import Link from "next/link";
import { Briefcase, CarIcon, Usb, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface CarData {
  src: string;
  name: string;
  seats: string;
  transmission: string;
  bags: string;
  age: string;
  price: string;
}

export const carSlug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function CarSpecs({ car }: { car: CarData }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm items-center opacity-60">
      <span className="flex items-center gap-2"><CarIcon className="size-5 text-[#f5b754]" />{car.seats}</span>
      <span className="flex items-center gap-2"><Usb className="size-5 text-[#f5b754]" />{car.transmission}</span>
      <span className="flex items-center gap-2"><Briefcase className="size-5 text-[#f5b754]" />{car.bags}</span>
      <span className="flex items-center gap-2"><UserIcon className="size-5 text-[#f5b754]" />{car.age}</span>
    </div>
  );
}

export default function CarCard({ car }: { car: CarData }) {
  return (
    <div className="text-white">
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={car.src}
          alt={car.name}
          width={1100}
          height={1100}
          className="object-contain w-full transition-transform duration-500 ease-out hover:scale-110"
        />
      </div>
      <div className="relative -top-7 mx-3 px-4 py-6 rounded-2xl flex flex-col gap-3 bg-[#222]">
        <h3 className="font-Outfit font-bold text-[18px]">{car.name}</h3>
        <CarSpecs car={car} />
        <div className="flex items-center justify-between gap-5">
          <Link href={`/cars/${carSlug(car.name)}`}>
            <Button className="h-8 px-6 py-6 bg-[#f5b754] border-[#f5b754] border hover:bg-white rounded-[50px]">
              Details
            </Button>
          </Link>
          <div className="flex flex-col items-end">
            <span className="text-[#f5b754] text-2xl font-bold">{car.price}</span>
            <span className="text-sm">/Day</span>
          </div>
        </div>
      </div>
    </div>
  );
}
