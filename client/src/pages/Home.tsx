import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Home() {
  const products = [
    {
      name: "بلاك أوركيد",
      type: "Eau de Parfum",
      price: "450 ر.س",
      image: "/images/perfume-1.jpg",
      delay: 0
    },
    {
      name: "عود سيام",
      type: "Extrait de Parfum",
      price: "850 ر.س",
      image: "/images/perfume-2.jpg",
      delay: 200
    },
    {
      name: "مسك الرمان",
      type: "Oil Blend",
      price: "320 ر.س",
      image: "/images/perfume-3.jpg",
      delay: 400
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden font-tajawal selection:bg-gold selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center animate-[zoomPan_25s_infinite_alternate_ease-in-out]"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#050505]" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="border border-gold/30 bg-black/40 backdrop-blur-sm p-8 md:p-16 animate-in fade-in zoom-in duration-1000">
            <h1 className="font-amiri text-6xl md:text-8xl text-gold mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              أورورا
            </h1>
            <p className="text-xl md:text-2xl text-[#F4E29E] uppercase tracking-[0.2em] font-light mb-8">
              حيث يلتقي السحر بالعبق
            </p>
            <Button 
              className="bg-transparent border border-gold text-gold hover:bg-gold hover:text-black text-lg px-8 py-6 uppercase tracking-widest transition-all duration-500"
            >
              اكتشف المجموعة
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <span className="text-xs uppercase tracking-widest mb-2 block text-center">تصفح</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent mx-auto" />
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-24 px-4 relative">
        <div className="container max-w-4xl mx-auto text-center">
          <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block animate-in slide-in-from-bottom-4 duration-700 delay-300">قصتنا</span>
          <h2 className="font-amiri text-4xl md:text-5xl text-white mb-8 leading-relaxed animate-in slide-in-from-bottom-4 duration-700 delay-500">
            نصنع الذكريات من خلال <span className="text-gold italic">روائح</span> تلامس الروح
          </h2>
          <p className="text-white/60 text-lg leading-loose font-light animate-in slide-in-from-bottom-4 duration-700 delay-700">
            في أورورا، نؤمن بأن العطر ليس مجرد رائحة، بل هو توقيع شخصي وبصمة تترك أثراً لا ينسى. 
            نجمع بين أصالة المكونات الشرقية ودقة التصنيع العالمية لنقدم لكم تحفاً عطرية تليق بكم.
          </p>
        </div>
      </section>

      {/* Collection Section */}
      <section className="py-20 px-4 bg-[#080808] relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-amiri text-4xl md:text-5xl text-gold inline-block border-b-2 border-gold/50 pb-4 px-8">
              الإصدارات الخاصة
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 justify-items-center">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="text-center mt-20">
            <Button 
              variant="link" 
              className="text-white hover:text-gold text-lg group"
            >
              عرض جميع المنتجات <ArrowLeft className="mr-2 w-5 h-5 transition-transform group-hover:-translate-x-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/marble-texture.jpg')] bg-cover bg-center opacity-5" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-white/10">
            <div className="p-8">
              <h3 className="font-amiri text-2xl text-gold mb-4">مكونات نادرة</h3>
              <p className="text-white/60">نختار بعناية أندر المكونات من جميع أنحاء العالم لضمان تجربة عطرية فريدة.</p>
            </div>
            <div className="p-8">
              <h3 className="font-amiri text-2xl text-gold mb-4">ثبات طويل</h3>
              <p className="text-white/60">تركيبات مركزة تضمن بقاء العطر معك طوال اليوم بفوحان مميز.</p>
            </div>
            <div className="p-8">
              <h3 className="font-amiri text-2xl text-gold mb-4">تغليف فاخر</h3>
              <p className="text-white/60">كل زجاجة تأتي في علبة مصممة خصيصاً لتكون هدية مثالية لنفسك أو لمن تحب.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
