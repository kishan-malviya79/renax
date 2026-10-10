import Image from "next/image";
import PageShell, { Container, SectionHeading } from "@/components/PageShell";

const images = ["/15.jpg", "/7.jpg", "/8.jpg", "/9.jpg", "/bentley.jpg", "/12.jpg", "/13.jpg", "/Red-o.jpg", "/bugatti.jpg"];

export default function Gallery() {
  return (
    <PageShell eyebrow="OUR WORK" title="Image" accent="Gallery" image="orgcar.jpg">
      <Container className="py-20 flex flex-col gap-12">
        <SectionHeading eyebrow="GALLERY" title="Our" accent="Fleet in Pictures" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src) => (
            <div key={src} className="overflow-hidden rounded-2xl">
              <Image src={src} alt="Renax car" width={600} height={600} className="w-full h-[280px] object-cover transition-transform duration-500 ease-out hover:scale-110" />
            </div>
          ))}
        </div>
      </Container>
    </PageShell>
  );
}
