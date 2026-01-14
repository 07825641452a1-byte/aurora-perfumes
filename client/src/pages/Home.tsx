import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden font-tajawal selection:bg-gold selection:text-black">
      <Navbar />

      <HeroSection
        title="أورورا"
        subtitle="حيث يلتقي السحر بالعبق"
        cta={{
          text: "اكتشف المجموعة"
        }}
      />

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
            <SectionHeader title="الإصدارات الخاصة" />
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

      <Newsletter />

      <Footer />
    </div>
  );
}
