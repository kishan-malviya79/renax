import Image from "next/image";
import Link from "next/link";
import PageShell, { Container } from "@/components/PageShell";
import { posts } from "@/components/blogData";

export default function BlogList() {
  return (
    <PageShell eyebrow="LATEST NEWS" title="Blog" accent="List" image="blackcar.jpg">
      <Container className="py-20 flex flex-col gap-6">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/post?slug=${p.slug}`} className="bg-[#222] rounded-2xl overflow-hidden flex flex-col md:flex-row group">
            <div className="overflow-hidden md:w-[360px] shrink-0">
              <Image src={p.src} alt={p.title} width={600} height={400} className="w-full h-full min-h-[220px] object-cover transition-transform duration-500 ease-out group-hover:scale-110" />
            </div>
            <div className="p-6 flex flex-col justify-center gap-2">
              <span className="text-[#f5b754] tracking-[4px] text-[10px] uppercase">{p.tag}</span>
              <h3 className="font-Outfit font-bold text-[22px]">{p.title}</h3>
              <span className="text-xs opacity-50">{p.date}</span>
              <p className="text-sm opacity-60 leading-7">Everything you need to know before you book, explained clearly by the Renax team.</p>
            </div>
          </Link>
        ))}
      </Container>
    </PageShell>
  );
}
