import Link from "next/link";
import Nav from "@/app/Nav/page";
import Footer from "@/app/Footer/page";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="bg-[#1b1b1b] w-full text-white">
      <Nav />
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center">
        <h1 className="font-Outfit font-bold text-[120px] leading-none text-[#f5b754]">404</h1>
        <h2 className="font-Outfit font-bold text-[28px]">Page Not Found</h2>
        <p className="text-sm opacity-60 max-w-md">The page you are looking for does not exist or has been moved.</p>
        <Link href="/"><Button>Back To Home</Button></Link>
      </div>
      <Footer />
    </div>
  );
}
