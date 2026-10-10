import Image from "next/image";
import { notFound } from "next/navigation";
import PageShell, { Container } from "@/components/PageShell";
import { CarSpecs, carSlug } from "@/components/CarCard";
import { Button } from "@/components/ui/button";
import { carDetails } from "@/components/ui";

export function generateStaticParams() {
  return carDetails.map((c) => ({ slug: carSlug(c.name) }));
}

export default function CarDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const car = carDetails.find((c) => carSlug(c.name) === slug);
  if (!car) notFound();

  return (
    <PageShell eyebrow="CAR DETAILS" title={car.name} accent="" image="bugatti1.jpg">
      <Container className="py-20 grid gap-10 lg:grid-cols-2 items-start">
        <div className="overflow-hidden rounded-2xl">
          <Image src={car.src} alt={car.name} width={1100} height={1100} className="w-full object-contain transition-transform duration-500 ease-out hover:scale-110" />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="font-Outfit font-bold text-[30px]">{car.name}</h2>
          <p className="text-sm opacity-60 leading-7">
            Drive the {car.name} with full insurance, free delivery and 24/7 support. Book for a day, a week or a month at a transparent daily rate.
          </p>
          <CarSpecs car={car} />
          <div className="flex items-end gap-2">
            <span className="text-[#f5b754] text-4xl font-bold">{car.price}</span>
            <span className="text-sm">/Day</span>
          </div>
          <div>
            <Button>Rent Now</Button>
          </div>
        </div>
      </Container>
    </PageShell>
  );
}
