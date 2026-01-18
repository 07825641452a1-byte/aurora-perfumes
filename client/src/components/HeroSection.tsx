import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  cta?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  children?: ReactNode;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage = "/images/hero-bg.jpg",
  cta,
  children
}: HeroSectionProps) {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-[zoomPan_25s_infinite_alternate_ease-in-out]"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="border border-gold/30 bg-black/40 backdrop-blur-sm p-8 md:p-16 animate-in fade-in zoom-in duration-1000 relative overflow-hidden">
          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold" />
          
          <h1 className="font-amiri text-6xl md:text-9xl text-gold mb-4 drop-shadow-[0_0_25px_rgba(212,175,55,0.5)]">
            {title}
          </h1>
          <div className="w-24 h-px bg-gold/50 mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-[#F4E29E] uppercase tracking-[0.3em] font-light mb-8">
            {subtitle}
          </p>
          {cta && (
            <Button 
              onClick={cta.onClick}
              className="bg-transparent border border-gold text-gold hover:bg-gold hover:text-black text-lg px-8 py-6 uppercase tracking-widest transition-all duration-500"
            >
              {cta.text}
            </Button>
          )}
          {children}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <span className="text-xs uppercase tracking-widest mb-2 block text-center">تصفح</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent mx-auto" />
      </div>
    </header>
  );
}
