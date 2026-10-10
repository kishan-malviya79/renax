import { ChevronDown } from "lucide-react";
import PageShell, { Container, SectionHeading } from "@/components/PageShell";

const faqs = [
  { q: "What documents do I need to rent a car?", a: "A valid driving licence, passport or Emirates ID, and a credit card for the deposit." },
  { q: "What is the minimum age to rent?", a: "Most cars require a minimum age of 25. Check the age shown on each car." },
  { q: "Is insurance included?", a: "Yes, all rentals include basic insurance. Full cover is available on Luxury and Supercar plans." },
  { q: "Can you deliver the car to my location?", a: "We deliver to your hotel, home or airport terminal. Delivery is free on selected plans." },
  { q: "How do I check traffic fines?", a: "Contact our support team with your booking number and we will send you the fine details." },
];

export default function FAQ() {
  return (
    <PageShell eyebrow="HELP" title="Frequently Asked" accent="Questions" image="c2.jpg">
      <Container className="py-20 flex flex-col gap-12 max-w-[900px]">
        <SectionHeading eyebrow="FAQ" title="Got" accent="Questions?" />
        <div className="flex flex-col gap-4">
          {faqs.map((f) => (
            <details key={f.q} className="group bg-[#222] rounded-2xl px-6 py-5">
              <summary className="flex items-center justify-between cursor-pointer font-Outfit font-bold list-none">
                {f.q}
                <ChevronDown className="size-5 text-[#f5b754] transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-sm opacity-60 leading-7 mt-4">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </PageShell>
  );
}
