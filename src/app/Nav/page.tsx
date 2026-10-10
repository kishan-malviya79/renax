"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import {
  Book,
  Car,
  ChevronDown,
  Contact,
  Home,
  Menu,
  NotepadText,
  Phone,
  PhoneCall,
  ShieldAlert,
  Wrench,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Router from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
type NavItem = { label: string; href: string };
type NavMenu = { label: string; href?: string; items?: NavItem[] };

const menus: NavMenu[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/allmenuAbout" },
  { label: "Services", href: "/services" },
  {
    label: "Cars",
    items: [
      { label: "Car Grid", href: "/cars" },
      { label: "Car Listing", href: "/cars/listing" },
      { label: "Car Types", href: "/cars/types" },
      { label: "Car Details", href: "/cars/audi-q8" },
    ],
  },
  {
    label: "Pages",
    items: [
      { label: "Team", href: "/team" },
      { label: "Image Gallery", href: "/gallery" },
      { label: "Video Gallery", href: "/video-gallery" },
      { label: "Pricing Plans", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Team Single", href: "/team/ahmed-khan" },
      { label: "404 error", href: "/404-page" },
    ],
  },
  {
    label: "Blog",
    items: [
      { label: "Blog Grid", href: "/blog" },
      { label: "Blog List", href: "/blog/list" },
      { label: "Post Single", href: "/blog/post" },
    ],
  },
  { label: "Contact", href: "/Contact" },
];

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-colors duration-300 ${
        isScrolled ? "bg-[#222222]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* <div className="items-center lg:items-center justify-between  text-white flex gap-24 py-6 px-4 md:px-3 lg:px-36  w-full  lg:max-w-[1440px] mx-auto md:py-0 "> */}
        <Image
          src={`/Renax-logo.png`}
          alt="jordans"
          height="120"
          width="120"
          className="object-contain"
          onClick={() => {
            router.push("/");
          }}
        />
        <nav className="hidden lg:flex space-x-6">
          {/* <Link className="hover:text-yellow-500 flex items-center" href="/">
          Home
          <ChevronDown className="ml-1 h-4 w-4" />
        </Link>
        <Link className="hover:text-yellow-500" href="/about">
          About
        </Link>
        <Link className="hover:text-yellow-500 flex items-center" href="/services">
          Services
          <ChevronDown className="ml-1 h-4 w-4" />
        </Link>
        <Link className="hover:text-yellow-500 flex items-center" href="/cars">
          Cars
          <ChevronDown className="ml-1 h-4 w-4" />
        </Link>
        <Link className="hover:text-yellow-500 flex items-center" href="/team">
          Pages
          <ChevronDown className="ml-1 h-4 w-4" />
        </Link>
        <Link className="hover:text-yellow-500 flex items-center" href="/blog">
          Blog
          <ChevronDown className="ml-1 h-4 w-4" />
        </Link>
        <Link className="hover:text-yellow-500" href="/Contact">
          Contact
        </Link> */}
          <Menubar className="flex left-20 relative gap-8">
            {menus.map((m) => (
              <MenubarMenu key={m.label}>
                {m.items ? (
                  <>
                    <MenubarTrigger>
                      {m.label} <ChevronDown className="size-[16px]" />
                    </MenubarTrigger>
                    <MenubarContent>
                      {m.items.map((item) => (
                        <MenubarItem key={item.label} asChild>
                          <Link href={item.href}>{item.label}</Link>
                        </MenubarItem>
                      ))}
                    </MenubarContent>
                  </>
                ) : (
                  <MenubarTrigger onClick={() => router.push(m.href!)}>
                    {m.label}
                  </MenubarTrigger>
                )}
              </MenubarMenu>
            ))}
          </Menubar>
        </nav>
        <div className="hidden lg:flex items-center">
          <div className="mr-2 text-sm text-yellow-500">Need help?</div>
          <div className="flex items-center border border-yellow-500 rounded-full px-4 py-2">
            <Phone className="h-4 w-4 mr-2 text-yellow-500" />
            <span className="text-sm">855 100 4444</span>
          </div>
        </div>
        <button className="lg:hidden text-white" onClick={toggleMobileMenu}>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 absolute top-full left-0 right-0">
          <nav className="flex flex-col px-4 py-2">
            <Link
              className="py-2 hover:text-yellow-500 flex items-center gap-2"
              href="/"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Separator className="opacity-50" />
            <Link
              className="py-2 hover:text-yellow-500 flex items-center gap-2"
              href="/allmenuAbout"
            >
              <ShieldAlert className="h-4 w-4" />
              About
            </Link>
            <Separator className="opacity-50" />
            <Link
              className="py-2 hover:text-yellow-500 flex items-center gap-2"
              href="/services"
            >
              <Wrench className="h-4 w-4" />
              Services
            </Link>
            <Separator className="opacity-50" />
            <Link
              className="py-2 hover:text-yellow-500 flex items-center gap-2"
              href="/cars"
            >
              <Car className="h-4 w-4" />
              Cars
            </Link>
            <Separator className="opacity-50" />
            <Link
              className="py-2 hover:text-yellow-500 flex items-center gap-2"
              href="/team"
            >
              <NotepadText className="h-4 w-4" />
              Pages
            </Link>
            <Separator className="opacity-50" />
            <Link
              className="py-2 hover:text-yellow-500 flex items-center gap-2"
              href="/blog"
            >
              <Book className="h-4 w-4" />
              Blog
            </Link>
            <Separator className="opacity-50" />
            <Link
              className="py-2 hover:text-yellow-500 flex items-center gap-2"
              href="/Contact"
            >
              <Contact className="h-4 w-4" />
              Contact
            </Link>
            <Separator className="opacity-50" />
          </nav>
        </div>
      )}
    </header>
  );
}

export default Nav;
