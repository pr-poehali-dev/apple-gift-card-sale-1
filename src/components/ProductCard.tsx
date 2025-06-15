import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  amount: number;
  popular?: boolean;
}

const ProductCard = ({ amount, popular = false }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card
      className={`relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
        popular ? "ring-2 ring-blue-500 shadow-xl" : "shadow-lg"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Популярная
          </span>
        </div>
      )}

      <CardContent className="p-8 text-center">
        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
          <svg
            className="w-10 h-10 text-gray-700"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
        </div>

        <h3 className="text-3xl font-light text-gray-900 mb-2">
          {formatPrice(amount)}
        </h3>

        <p className="text-gray-600 mb-6">Подарочная карта Apple</p>
      </CardContent>

      <CardFooter className="p-8 pt-0">
        <Button
          className={`w-full py-3 rounded-full font-medium transition-all duration-200 ${
            popular
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-900 hover:bg-gray-800 text-white"
          }`}
        >
          Купить сейчас
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
