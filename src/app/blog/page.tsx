import Image from "next/image";
import Link from "next/link";
import PageShell, { Container, SectionHeading } from "@/components/PageShell";
import { posts } from "@/components/blogData";

export default function BlogGrid() {
  return (
    <PageShell eyebrow="LATEST NEWS" title="Blog" accent="Grid" image="blackcar.jpg">
      <Container className="py-20 flex flex-col gap-12">
        <SectionHeading eyebrow="OUR BLOG" title="Latest" accent="News" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/post?slug=${p.slug}`} className="bg-[#222] rounded-2xl overflow-hidden group">
              <div className="overflow-hidden">
                <Image src={p.src} alt={p.title} width={600} height={400} className="w-full h-[240px] object-cover transition-transform duration-500 ease-out group-hover:scale-110" />
              </div>
              <div className="p-6 flex flex-col gap-2">
                <span className="text-[#f5b754] tracking-[4px] text-[10px] uppercase">{p.tag}</span>
                <h3 className="font-Outfit font-bold text-[18px]">{p.title}</h3>
                <span className="text-xs opacity-50">{p.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </PageShell>
  );
}
