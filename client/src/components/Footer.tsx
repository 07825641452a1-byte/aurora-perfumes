import { Link } from "wouter";
import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: "url('/images/marble-texture.jpg')", backgroundSize: 'cover' }}></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/">
              <a className="text-3xl font-amiri font-bold text-gold mb-6 block">أورورا</a>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 font-tajawal">
              حيث يلتقي السحر بالعبق. نقدم لكم مجموعة حصرية من العطور الفاخرة المستوحاة من جمال الطبيعة وغموض الليل.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/40 hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-amiri text-lg mb-6">استكشف</h4>
            <ul className="space-y-4">
              <li><Link href="/collection"><a className="text-white/60 hover:text-gold transition-colors text-sm">المجموعة الكاملة</a></Link></li>
              <li><Link href="/new-arrivals"><a className="text-white/60 hover:text-gold transition-colors text-sm">وصل حديثاً</a></Link></li>
              <li><Link href="/best-sellers"><a className="text-white/60 hover:text-gold transition-colors text-sm">الأكثر مبيعاً</a></Link></li>
              <li><Link href="/gifts"><a className="text-white/60 hover:text-gold transition-colors text-sm">الهدايا</a></Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-amiri text-lg mb-6">الشركة</h4>
            <ul className="space-y-4">
              <li><Link href="/story"><a className="text-white/60 hover:text-gold transition-colors text-sm">قصتنا</a></Link></li>
              <li><Link href="/sustainability"><a className="text-white/60 hover:text-gold transition-colors text-sm">الاستدامة</a></Link></li>
              <li><Link href="/careers"><a className="text-white/60 hover:text-gold transition-colors text-sm">الوظائف</a></Link></li>
              <li><Link href="/contact"><a className="text-white/60 hover:text-gold transition-colors text-sm">تواصل معنا</a></Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-amiri text-lg mb-6">النشرة البريدية</h4>
            <p className="text-white/60 text-sm mb-4">اشترك للحصول على آخر الأخبار والعروض الحصرية.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors w-full"
              />
              <button className="bg-gold text-black font-bold py-3 px-4 text-sm hover:bg-white transition-colors uppercase tracking-wider">
                اشترك
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs font-tajawal">
            تصميم حصري لمتجر أورورا &copy; 2025. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">سياسة الخصوصية</a>
            <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
