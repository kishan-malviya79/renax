import Image from "next/image";
import PageShell, { Container, SectionHeading } from "@/components/PageShell";
import { OurS } from "@/components/ui";

const blurbs = [
  "Flexible fleets and monthly plans for companies and their teams.",
  "Professional chauffeurs for meetings, events and city tours.",
  "Long-term leasing with maintenance and insurance included.",
  "Meet-and-greet pickup at every terminal, on time.",
  "Premium vehicles for guests who expect the best.",
  "Door-to-door rides at a fixed, transparent price.",
];

export default function Services() {
  return (
    <PageShell eyebrow="WHAT WE DO" title="Our" accent="Services" image="f2.jpg">
      <Container className="py-20 flex flex-col gap-12">
        <SectionHeading eyebrow="WHAT WE DO" title="Services We" accent="Offer" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {OurS.map((s, i) => (
            <div key={s.num} className="bg-[#222] rounded-2xl overflow-hidden">
              <div className="overflow-hidden">
                <Image src={s.src} alt={s.title} width={500} height={500} className="w-full h-[260px] object-cover transition-transform duration-500 ease-out hover:scale-110" />
              </div>
              <div className="p-6 flex flex-col gap-2">
                <span className="text-[#f5b754] font-bold">{s.num}</span>
                <h3 className="font-Outfit font-bold text-[20px]">{s.title.trim()}</h3>
                <p className="text-sm opacity-60 leading-7">{blurbs[i]}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </PageShell>
  );
}
