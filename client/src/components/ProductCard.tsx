import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  type: string;
  price: string;
  image: string;
  description: string;
  category: string;
  delay?: number;
}

export default function ProductCard({ name, type, price, image, description, category, delay = 0 }: ProductCardProps) {
  return (
    <div 
      className="group w-full max-w-[350px] mx-auto relative animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image Container */}
      <div className="h-[450px] w-full bg-[#0a0a0a] relative overflow-hidden border border-white/5 group-hover:border-gold/30 transition-colors duration-500">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10" />
        
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 opacity-90 group-hover:opacity-100"
        />
        
        {/* Quick Add Overlay (Desktop) */}
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-[2px]">
          <Button 
            variant="outline" 
            className="border-gold text-gold hover:bg-gold hover:text-black uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
          >
            عرض التفاصيل
          </Button>
        </div>
      </div>

      {/* Product Info - Floating Card Style */}
      <div className="relative -mt-12 mx-4 z-30">
        <div className="bg-[#0F0F0F] border border-gold/20 p-6 text-center shadow-2xl shadow-black/50 backdrop-blur-sm relative overflow-hidden group-hover:border-gold/50 transition-colors duration-500">
          {/* Marble Texture Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/images/marble-texture.jpg')] bg-cover bg-center mix-blend-overlay" />
          
          <div className="relative z-10">
            <h3 className="font-amiri text-2xl text-gold mb-1 group-hover:text-white transition-colors duration-300">{name}</h3>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-[0.1em] text-gold/70 border border-gold/30 px-2 py-0.5 font-tajawal">{category}</span>
              <span className="text-[10px] uppercase tracking-[0.1em] text-white/50 font-tajawal">{type}</span>
            </div>
            
            <p className="text-xs text-white/60 mb-4 line-clamp-2 h-8 leading-relaxed">{description}</p>
            
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="font-cinzel text-lg text-white border border-white/10 px-3 py-1">{price}</span>
            </div>
            
            <Button 
              className="w-full bg-transparent border border-gold text-gold hover:bg-gold hover:text-black uppercase tracking-wider text-xs py-5 transition-all duration-300"
            >
              إضافة للسلة
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
