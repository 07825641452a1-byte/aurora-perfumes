import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Cart from "@/components/Cart";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "المجموعة", href: "/collection" },
    { name: "قصتنا", href: "/story" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-transparent",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-white/10 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="text-2xl md:text-3xl font-amiri font-bold text-gold tracking-wider hover:opacity-90 transition-opacity">
            أورورا
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-sm uppercase tracking-widest transition-colors duration-300 relative group",
                  location === link.href
                    ? "text-gold"
                    : "text-white/80 hover:text-gold"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full",
                  location === link.href ? "w-full" : ""
                )} />
              </a>
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Cart />
          <Button 
            variant="outline" 
            className="border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 font-tajawal"
          >
            تسوق الآن
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href}>
            <a
              className="text-2xl font-amiri text-white hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          </Link>
        ))}
        <Button 
          variant="outline" 
          className="mt-4 border-gold text-gold hover:bg-gold hover:text-black w-40"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          تسوق الآن
        </Button>
      </div>
    </nav>
  );
}
