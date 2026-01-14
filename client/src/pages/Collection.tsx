import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Search, Filter } from "lucide-react";

export default function Collection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("الكل");

  const types = ["الكل", ...Array.from(new Set(products.map(p => p.type)))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.includes(searchTerm) || product.type.includes(searchTerm);
    const matchesType = selectedType === "الكل" || product.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white font-tajawal">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#050505]">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="font-amiri text-5xl md:text-6xl text-gold mb-4">المجموعة الكاملة</h1>
          <p className="text-white/60 text-lg">اكتشف مجموعتنا الفاخرة من العطور المختارة بعناية</p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 bg-[#080808] border-b border-white/5">
        <div className="container max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8 relative">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/50" />
            <input
              type="text"
              placeholder="ابحث عن عطر..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-none px-12 py-4 text-white placeholder-white/40 focus:outline-none focus:border-gold/50 transition-colors"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 items-center">
            <Filter className="w-5 h-5 text-gold/50" />
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300 border ${
                  selectedType === type
                    ? "bg-gold text-black border-gold"
                    : "bg-transparent border-white/20 text-white/70 hover:border-gold/50 hover:text-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mt-6 text-white/50 text-sm">
            تم العثور على <span className="text-gold font-semibold">{filteredProducts.length}</span> منتج
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 justify-items-center">
              {filteredProducts.map((product: typeof products[0], index: number) => (
                <ProductCard key={product.id} {...product} delay={index * 100} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-white/60 text-xl mb-4">لم نجد منتجات تطابق بحثك</p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedType("الكل");
                }}
                className="bg-gold text-black hover:bg-white transition-colors"
              >
                إعادة تعيين الفلاتر
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
