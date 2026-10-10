import Image from "next/image";
import { Play } from "lucide-react";
import PageShell, { Container, SectionHeading } from "@/components/PageShell";

const videos = [
  { src: "/about.jpg", title: "Welcome to Renax" },
  { src: "/odi2.jpg", title: "Desert Drive" },
  { src: "/bugatti.jpg", title: "Supercar Experience" },
  { src: "/o.jpg", title: "Airport Transfers" },
];

export default function VideoGallery() {
  return (
    <PageShell eyebrow="WATCH" title="Video" accent="Gallery" image="odi2.jpg">
      <Container className="py-20 flex flex-col gap-12">
        <SectionHeading eyebrow="VIDEOS" title="Watch Our" accent="Stories" />
        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((v) => (
            <div key={v.title} className="relative overflow-hidden rounded-2xl group">
              <Image src={v.src} alt={v.title} width={800} height={500} className="w-full h-[300px] object-cover transition-transform duration-500 ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="w-16 h-16 rounded-full border border-[#f5b754] flex items-center justify-center group-hover:bg-[#f5b754] transition-colors">
                  <Play className="text-white" />
                </span>
              </div>
              <h3 className="absolute bottom-4 left-4 font-Outfit font-bold text-lg">{v.title}</h3>
            </div>
          ))}
        </div>
      </Container>
    </PageShell>
  );
}
