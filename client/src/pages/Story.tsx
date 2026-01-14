import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Globe } from "lucide-react";

export default function Story() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-tajawal">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#050505]">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="font-amiri text-5xl md:text-6xl text-gold mb-6">قصتنا</h1>
          <p className="text-white/60 text-lg">رحلة من الشغف والإبداع في عالم العطور الفاخرة</p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: "url('/images/marble-texture.jpg')", backgroundSize: 'cover' }}></div>
        
        <div className="container max-w-4xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-amiri text-3xl text-gold mb-6">البداية</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                بدأت قصة أورورا من حلم بسيط: خلق عطور تروي قصصاً وتثير الذكريات. في عام 2015، اجتمعت مجموعة من عشاق العطور والمبدعين لتحويل هذا الحلم إلى واقع.
              </p>
              <p className="text-white/70 leading-relaxed">
                اخترنا اسم "أورورا" (الفجر) لأنه يمثل البداية الجديدة والأمل، تماماً كما يمثل كل عطر من عطورنا بداية يوم جديد مليء بالسحر والجمال.
              </p>
            </div>
            <div className="bg-white/5 border border-gold/20 p-8 rounded-none">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-gold font-amiri text-lg mb-2">الرؤية</h3>
                    <p className="text-white/60 text-sm">أن نصبح العلامة التجارية الأولى للعطور الفاخرة في الشرق الأوسط</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-gold font-amiri text-lg mb-2">المهمة</h3>
                    <p className="text-white/60 text-sm">تقديم تجارب عطرية فريدة تجمع بين التراث والحداثة</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-gold font-amiri text-lg mb-2">القيم</h3>
                    <p className="text-white/60 text-sm">الجودة والاستدامة والابتكار والشغف</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="border-t border-white/10 pt-20">
            <h2 className="font-amiri text-3xl text-gold mb-12 text-center">رحلتنا عبر السنوات</h2>
            
            <div className="space-y-12">
              {[
                { year: "2015", title: "التأسيس", desc: "ولادة أورورا وإطلاق أول مجموعة من العطور الفاخرة" },
                { year: "2017", title: "التوسع", desc: "فتح أول متجر فيزيائي وتوسيع المجموعة بثلاث عطور جديدة" },
                { year: "2019", title: "الاعتراف الدولي", desc: "الفوز بجوائز عالمية لتصميم الزجاجات والعطور" },
                { year: "2021", title: "الاستدامة", desc: "التزام كامل بالعبوات الصديقة للبيئة والمكونات الطبيعية" },
                { year: "2024", title: "اليوم", desc: "حاضرون في 25 دولة مع ملايين العملاء الراضين" }
              ].map((milestone, index) => (
                <div key={index} className="flex gap-8 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center font-bold text-black mb-4">
                      {index + 1}
                    </div>
                    {index < 4 && <div className="w-1 h-20 bg-gradient-to-b from-gold to-transparent" />}
                  </div>
                  <div className="pb-8">
                    <span className="text-gold font-amiri text-2xl">{milestone.year}</span>
                    <h3 className="text-white text-lg font-semibold mt-2 mb-2">{milestone.title}</h3>
                    <p className="text-white/60">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="border-t border-white/10 pt-20 mt-20">
            <h2 className="font-amiri text-3xl text-gold mb-12 text-center">لماذا أورورا؟</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "الجودة العالية", desc: "نستخدم أفضل المكونات من حول العالم لضمان تجربة فاخرة" },
                { title: "الابتكار المستمر", desc: "فريقنا يعمل بلا توقف لإنشاء روائح جديدة وفريدة" },
                { title: "الاستدامة", desc: "نلتزم بحماية البيئة من خلال ممارسات مسؤولة" }
              ].map((value, index) => (
                <div key={index} className="bg-white/5 border border-gold/20 p-8 text-center hover:border-gold/50 transition-colors duration-300">
                  <h3 className="font-amiri text-xl text-gold mb-4">{value.title}</h3>
                  <p className="text-white/60">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="border-t border-white/10 pt-20 mt-20 text-center">
            <h2 className="font-amiri text-3xl text-gold mb-6">انضم إلى عائلة أورورا</h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              كن جزءاً من رحلتنا واكتشف عالماً من الروائح الفاخرة التي تعكس شخصيتك وذوقك الرفيع
            </p>
            <Button className="bg-gold text-black hover:bg-white transition-colors px-8 py-6 uppercase tracking-wider">
              استكشف المجموعة الآن
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
