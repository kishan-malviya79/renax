import { Check } from "lucide-react";
import Link from "next/link";
import PageShell, { Container, SectionHeading } from "@/components/PageShell";
import { Button } from "@/components/ui/button";

const plans = [
  { name: "Economy", price: "$150", features: ["Small & sedan cars", "200 km / day", "Basic insurance", "24/7 support"] },
  { name: "Luxury", price: "$450", features: ["Luxury SUVs & sedans", "300 km / day", "Full insurance", "Free delivery", "24/7 support"], featured: true },
  { name: "Supercar", price: "$900", features: ["Sport & exotic cars", "250 km / day", "Full insurance", "Free delivery", "Personal concierge"] },
];

export default function Pricing() {
  return (
    <PageShell eyebrow="PRICING" title="Pricing" accent="Plans" image="bugatti1.jpg">
      <Container className="py-20 flex flex-col gap-12">
        <SectionHeading eyebrow="CHOOSE A PLAN" title="Simple" accent="Daily Rates" />
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl p-8 flex flex-col gap-6 ${p.featured ? "bg-[#f5b754] text-black" : "bg-[#222]"}`}>
              <h3 className="font-Outfit font-bold text-[20px]">{p.name}</h3>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className="text-sm">/Day</span>
              </div>
              <ul className="flex flex-col gap-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check className="size-4" />{f}</li>
                ))}
              </ul>
              <Link href="/Contact"><Button className={p.featured ? "bg-black text-white hover:bg-[#222]" : ""}>Book Now</Button></Link>
            </div>
          ))}
        </div>
      </Container>
    </PageShell>
  );
}
