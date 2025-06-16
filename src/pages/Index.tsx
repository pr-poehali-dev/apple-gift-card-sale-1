import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import ReviewsSection from "@/components/ReviewsSection";
import SupportSection from "@/components/SupportSection";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <ProductsSection />
        <ReviewsSection />
        <SupportSection />
      </div>
    </CartProvider>
  );
};

export default Index;
