import { Quote } from "lucide-react";
import PageShell, { Container, SectionHeading } from "@/components/PageShell";

const reviews = [
  { name: "John Carter", text: "Smooth booking and a spotless Urus delivered to my hotel. Will rent again." },
  { name: "Maria Lopez", text: "Great prices and friendly staff. The airport pickup was right on time." },
  { name: "Ali Rahman", text: "Best luxury rental experience in Dubai. Transparent and professional." },
  { name: "Emma Watson", text: "The Bentley was perfect for our wedding day. Thank you, Renax." },
  { name: "Daniel Kim", text: "Easy process, no hidden fees. The support team answered at midnight." },
  { name: "Fatima Zahra", text: "Corporate fleet plan saved our company a lot. Highly recommended." },
];

export default function Testimonials() {
  return (
    <PageShell eyebrow="REVIEWS" title="Client" accent="Testimonials" image="orgcar.jpg">
      <Container className="py-20 flex flex-col gap-12">
        <SectionHeading eyebrow="TESTIMONIALS" title="What Clients" accent="Say" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="bg-[#222] rounded-2xl p-8 flex flex-col gap-4 hover:bg-[#f5b754] hover:text-black transition-colors">
              <Quote className="size-8 text-[#f5b754]" />
              <p className="text-sm leading-7 opacity-70">{r.text}</p>
              <h3 className="font-Outfit font-bold">{r.name}</h3>
            </div>
          ))}
        </div>
      </Container>
    </PageShell>
  );
}
