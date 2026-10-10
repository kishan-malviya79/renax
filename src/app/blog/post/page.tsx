import Image from "next/image";
import PageShell, { Container } from "@/components/PageShell";
import { posts } from "@/components/blogData";

export default function PostSingle({ searchParams }: { searchParams: { slug?: string } }) {
  const post = posts.find((p) => p.slug === searchParams.slug) ?? posts[0];

  return (
    <PageShell eyebrow={post.tag} title="Post" accent="Single" image="blackcar.jpg">
      <Container className="py-20 flex flex-col gap-8 max-w-[900px]">
        <div className="overflow-hidden rounded-2xl">
          <Image src={post.src} alt={post.title} width={1100} height={600} className="w-full object-cover" />
        </div>
        <span className="text-xs opacity-50">{post.date}</span>
        <h2 className="font-Outfit font-bold text-[30px]">{post.title}</h2>
        <p className="text-sm opacity-60 leading-8">
          Renting a car should be simple. Bring a valid licence and ID, compare plans, and confirm your pickup and drop-off locations. Our team is available every day to help with documents, deposits, insurance and any questions along the way.
        </p>
        <p className="text-sm opacity-60 leading-8">
          Always inspect the vehicle before you drive away, take photos of any existing marks, and keep a copy of your rental agreement. Follow local traffic rules to avoid fines and penalties.
        </p>
      </Container>
    </PageShell>
  );
}
