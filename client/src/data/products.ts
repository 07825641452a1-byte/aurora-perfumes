export interface Product {
  id: string;
  name: string;
  type: string;
  price: string;
  image: string;
  delay?: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "بلاك أوركيد",
    type: "Eau de Parfum",
    price: "450 ر.س",
    image: "/images/perfume-1.jpg",
    delay: 0
  },
  {
    id: "2",
    name: "عود سيام",
    type: "Extrait de Parfum",
    price: "850 ر.س",
    image: "/images/perfume-2.jpg",
    delay: 200
  },
  {
    id: "3",
    name: "مسك الرمان",
    type: "Oil Blend",
    price: "320 ر.س",
    image: "/images/perfume-3.jpg",
    delay: 400
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
