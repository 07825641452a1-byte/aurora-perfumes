import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-tajawal">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#050505]">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="font-amiri text-5xl md:text-6xl text-gold mb-6">تواصل معنا</h1>
          <p className="text-white/60 text-lg">نحن هنا للإجابة على جميع استفساراتك</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Phone, title: "الهاتف", content: "+966 50 123 4567", color: "text-blue-400" },
              { icon: Mail, title: "البريد الإلكتروني", content: "info@aurora.sa", color: "text-purple-400" },
              { icon: MapPin, title: "العنوان", content: "الرياض، المملكة العربية السعودية", color: "text-red-400" },
              { icon: Clock, title: "ساعات العمل", content: "السبت - الخميس: 10ص - 10م", color: "text-green-400" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white/5 border border-gold/20 p-6 text-center hover:border-gold/50 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-gold mx-auto mb-4" />
                  <h3 className="font-amiri text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.content}</p>
                </div>
              );
            })}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white/5 border border-gold/20 p-8">
              <h2 className="font-amiri text-2xl text-gold mb-8">أرسل لنا رسالة</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/70 text-sm mb-2">الاسم</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="اسمك الكامل"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="بريدك الإلكتروني"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">الموضوع</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="موضوع الرسالة"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">الرسالة</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gold text-black hover:bg-white transition-colors py-3 uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  إرسال الرسالة
                </Button>

                {submitted && (
                  <div className="bg-green-500/20 border border-green-500/50 text-green-300 p-4 text-center">
                    شكراً لك! تم استقبال رسالتك بنجاح. سنرد عليك قريباً.
                  </div>
                )}
              </form>
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              <div className="bg-white/5 border border-gold/20 p-8">
                <h3 className="font-amiri text-2xl text-gold mb-4">معلومات إضافية</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  نحن نقدر تواصلك معنا. فريقنا المتخصص جاهز للإجابة على جميع أسئلتك حول منتجاتنا والخدمات التي نقدمها.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-gold font-semibold mb-2">أوقات الرد السريع:</h4>
                    <p className="text-white/60 text-sm">نرد على جميع الرسائل خلال 24 ساعة</p>
                  </div>
                  <div>
                    <h4 className="text-gold font-semibold mb-2">قنوات التواصل:</h4>
                    <p className="text-white/60 text-sm">البريد الإلكتروني • الهاتف • وسائل التواصل الاجتماعي</p>
                  </div>
                  <div>
                    <h4 className="text-gold font-semibold mb-2">الدعم الفني:</h4>
                    <p className="text-white/60 text-sm">متوفر لمساعدتك في أي استفسارات عن المنتجات</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 p-8">
                <h3 className="font-amiri text-xl text-gold mb-4">تابعنا على وسائل التواصل</h3>
                <div className="flex gap-4">
                  {["Instagram", "Twitter", "Facebook", "TikTok"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-12 h-12 bg-white/5 border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300"
                    >
                      <span className="text-xs font-bold">{social.slice(0, 2)}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
