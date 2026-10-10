import Image from "next/image";
import Link from "next/link";
import PageShell, { Container } from "@/components/PageShell";
import { CarSpecs, carSlug } from "@/components/CarCard";
import { Button } from "@/components/ui/button";
import { carDetails } from "@/components/ui";

export default function CarListing() {
  return (
    <PageShell eyebrow="SELECT YOUR CAR" title="Car" accent="Listing" image="bugaati1.jpg">
      <Container className="py-20 flex flex-col gap-6">
        {carDetails.map((car) => (
          <div key={car.name} className="bg-[#222] rounded-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="overflow-hidden md:w-[380px] shrink-0">
              <Image src={car.src} alt={car.name} width={800} height={800} className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110" />
            </div>
            <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
              <div className="flex flex-col gap-3">
                <h3 className="font-Outfit font-bold text-[22px]">{car.name}</h3>
                <CarSpecs car={car} />
              </div>
              <div className="flex items-center gap-5">
                <div className="flex flex-col items-end">
                  <span className="text-[#f5b754] text-2xl font-bold">{car.price}</span>
                  <span className="text-sm">/Day</span>
                </div>
                <Link href={`/cars/${carSlug(car.name)}`}>
                  <Button className="h-8 px-6 py-6 bg-[#f5b754] hover:bg-white rounded-[50px]">Details</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </PageShell>
  );
}
