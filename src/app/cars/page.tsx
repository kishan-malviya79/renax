import PageShell, { Container, SectionHeading } from "@/components/PageShell";
import CarCard from "@/components/CarCard";
import { carDetails } from "@/components/ui";

export default function CarGrid() {
  return (
    <PageShell eyebrow="SELECT YOUR CAR" title="Car" accent="Grid" image="bugatti.jpg">
      <Container className="py-20 flex flex-col gap-12">
        <SectionHeading eyebrow="OUR FLEET" title="Luxury" accent="Car Fleet" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {carDetails.map((car) => (
            <CarCard key={car.name} car={car} />
          ))}
        </div>
      </Container>
    </PageShell>
  );
}
