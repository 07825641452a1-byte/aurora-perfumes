import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gold/10 to-transparent border-t border-b border-gold/20">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="font-amiri text-3xl text-gold mb-2">النشرة البريدية</h2>
            <p className="text-white/60">اشترك للحصول على آخر الأخبار والعروض الحصرية والإصدارات الجديدة</p>
          </div>

          <form onSubmit={handleSubscribe} className="flex-1 flex gap-2">
            <div className="relative flex-1">
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/50 pointer-events-none" />
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 px-12 py-3 text-white placeholder-white/40 focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>
            <Button
              type="submit"
              className="bg-gold text-black hover:bg-white transition-colors px-6 uppercase tracking-wider font-bold"
            >
              اشترك
            </Button>
          </form>
        </div>

        {subscribed && (
          <div className="mt-4 bg-green-500/20 border border-green-500/50 text-green-300 p-3 text-center text-sm">
            شكراً لك! تم تأكيد اشتراكك بنجاح.
          </div>
        )}
      </div>
    </section>
  );
}
