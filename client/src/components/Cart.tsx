import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, X, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (id: string, name: string, price: string, image: string) => {
    const priceNum = parseInt(price.replace(/[^\d]/g, ""));
    const existingItem = items.find(item => item.id === id);

    if (existingItem) {
      setItems(items.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setItems([...items, { id, name, price: priceNum, quantity: 1, image }]);
    }
  };

  const removeFromCart = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setItems(items.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative text-white hover:text-gold transition-colors"
      >
        <ShoppingBag className="w-5 h-5" />
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-gold text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {items.length}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      <div
        className={cn(
          "fixed top-0 right-0 h-screen w-full max-w-md bg-[#0F0F0F] border-l border-gold/20 shadow-2xl transition-transform duration-300 z-50",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gold/20">
          <h2 className="font-amiri text-2xl text-gold">السلة</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 max-h-[calc(100vh-300px)]">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-12 h-12 text-white/20 mx-auto mb-4" />
              <p className="text-white/60">السلة فارغة</p>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-4 bg-white/5 p-4 border border-white/10">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm mb-1">{item.name}</h3>
                  <p className="text-gold text-sm mb-2">{item.price} ر.س</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 bg-white/10 hover:bg-gold hover:text-black transition-colors flex items-center justify-center"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-white text-sm w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 bg-white/10 hover:bg-gold hover:text-black transition-colors flex items-center justify-center"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-white/40 hover:text-red-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gold/20 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white/60">الإجمالي:</span>
              <span className="text-gold font-bold text-lg">{total} ر.س</span>
            </div>
            <Button className="w-full bg-gold text-black hover:bg-white transition-colors py-3 uppercase tracking-wider">
              إتمام الشراء
            </Button>
            <Button
              onClick={() => setIsOpen(false)}
              variant="outline"
              className="w-full border-gold text-gold hover:bg-gold hover:text-black"
            >
              متابعة التسوق
            </Button>
          </div>
        )}
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
