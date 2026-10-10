import Image from "next/image";
import Link from "next/link";
import PageShell, { Container, SectionHeading } from "@/components/PageShell";
import { team } from "@/components/teamData";

export default function Team() {
  return (
    <PageShell eyebrow="OUR PEOPLE" title="Our" accent="Team" image="c2.jpg">
      <Container className="py-20 flex flex-col gap-12">
        <SectionHeading eyebrow="MEET THE TEAM" title="Experts Behind" accent="Renax" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <Link key={m.slug} href={`/team/${m.slug}`} className="bg-[#222] rounded-2xl overflow-hidden group">
              <div className="overflow-hidden">
                <Image src={m.src} alt={m.name} width={500} height={500} className="w-full h-[300px] object-cover transition-transform duration-500 ease-out group-hover:scale-110" />
              </div>
              <div className="p-5">
                <h3 className="font-Outfit font-bold text-[18px]">{m.name}</h3>
                <p className="text-sm text-[#f5b754]">{m.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </PageShell>
  );
}
