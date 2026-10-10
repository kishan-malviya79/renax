import Image from "next/image";
import PageShell, { Container, SectionHeading } from "@/components/PageShell";
import { carTypes } from "@/components/ui";

export default function CarTypes() {
  return (
    <PageShell eyebrow="CATEGORIES" title="Car" accent="Types" image="odi2.jpg">
      <Container className="py-20 flex flex-col gap-12">
        <SectionHeading eyebrow="CATEGORIES" title="Rental" accent="Car Types" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {carTypes.map((t) => (
            <div key={t.title} className="relative overflow-hidden rounded-tl-3xl rounded-tr-3xl rounded-br-3xl">
              <Image src={t.src} alt={t.title} width={500} height={500} className="w-full object-contain transition-transform duration-500 ease-out hover:scale-110" />
              <h3 className="absolute top-4 left-4 font-Outfit font-bold text-[20px] w-[10ch]">{t.title}</h3>
            </div>
          ))}
        </div>
      </Container>
    </PageShell>
  );
}
