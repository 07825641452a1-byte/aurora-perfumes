import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-tajawal flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="font-amiri text-9xl md:text-[150px] text-gold drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]">
            404
          </h1>
        </div>
        
        <h2 className="font-amiri text-4xl md:text-5xl text-white mb-4">
          الصفحة غير موجودة
        </h2>
        
        <p className="text-white/60 text-lg mb-8 leading-relaxed">
          عذراً، يبدو أن الصفحة التي تبحث عنها لا توجد. قد تكون قد تم حذفها أو نقل عنوانها.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-gold text-black hover:bg-white transition-colors px-8 py-6 uppercase tracking-wider flex items-center justify-center gap-2">
              العودة للرئيسية
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          
          <Link href="/collection">
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black px-8 py-6 uppercase tracking-wider">
              استكشف المجموعة
            </Button>
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm">
            هل تحتاج مساعدة؟ <Link href="/contact"><a className="text-gold hover:text-white transition-colors">تواصل معنا</a></Link>
          </p>
        </div>
      </div>
    </div>
  );
}
