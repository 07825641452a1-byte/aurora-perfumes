export interface Product {
  id: string;
  name: string;
  type: string;
  price: string;
  image: string;
  description: string;
  category: "oriental" | "floral" | "woody" | "fresh";
  delay?: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "بلاك أوركيد",
    type: "Eau de Parfum",
    price: "450 ر.س",
    image: "/images/perfume-1.jpg",
    description: "مزيج ساحر من الأوركيد السوداء والتوابل النادرة، يمنحك حضوراً غامضاً وجذاباً.",
    category: "floral",
    delay: 0
  },
  {
    id: "2",
    name: "عود سيام",
    type: "Extrait de Parfum",
    price: "850 ر.س",
    image: "/images/perfume-2.jpg",
    description: "أفخر أنواع العود التايلاندي الممزوج بخشب الصندل والزعفران، لعشاق الفخامة الشرقية.",
    category: "oriental",
    delay: 200
  },
  {
    id: "3",
    name: "مسك الرمان",
    type: "Oil Blend",
    price: "320 ر.س",
    image: "/images/perfume-3.jpg",
    description: "انتعاش الرمان مع نعومة المسك الأبيض، عطر يومي يمنحك شعوراً بالنظافة والحيوية.",
    category: "fresh",
    delay: 400
  },
  {
    id: "4",
    name: "خشب الصندل الملكي",
    type: "Eau de Parfum",
    price: "580 ر.س",
    image: "/images/perfume-1.jpg",
    description: "عبير خشبي دافئ يجمع بين الصندل والباتشولي مع لمسة من الفانيليا.",
    category: "woody",
    delay: 600
  }
  // لإضافة منتج جديد، انسخ الكود أعلاه وألصقه هنا مع تغيير البيانات
  /*
  {
    id: "4",
    name: "اسم العطر الجديد",
    type: "نوع العطر",
    price: "السعر",
    image: "/images/your-image.jpg",
    delay: 600
  }
  */
];
