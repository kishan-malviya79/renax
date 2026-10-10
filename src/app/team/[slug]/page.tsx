import Image from "next/image";
import { notFound } from "next/navigation";
import PageShell, { Container } from "@/components/PageShell";
import { team } from "@/components/teamData";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export default function TeamSingle({ params }: { params: { slug: string } }) {
  const m = team.find((t) => t.slug === params.slug);
  if (!m) notFound();

  return (
    <PageShell eyebrow="TEAM SINGLE" title={m.name} accent="" image="c2.jpg">
      <Container className="py-20 grid gap-10 lg:grid-cols-2 items-center">
        <div className="overflow-hidden rounded-2xl">
          <Image src={m.src} alt={m.name} width={800} height={800} className="w-full object-cover transition-transform duration-500 ease-out hover:scale-110" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-Outfit font-bold text-[30px]">{m.name}</h2>
          <p className="text-[#f5b754]">{m.role}</p>
          <p className="text-sm opacity-60 leading-7">
            {m.name} has helped Renax grow into a trusted car rental company, focused on honest pricing, clean vehicles and fast support.
          </p>
        </div>
      </Container>
    </PageShell>
  );
}
