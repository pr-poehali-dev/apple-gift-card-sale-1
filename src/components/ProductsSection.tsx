import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const cardAmounts = [500, 1000, 5000];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Выберите номинал
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Подарочные карты Apple доступны в различных номиналах для любого
            бюджета
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {cardAmounts.map((amount, index) => (
            <ProductCard key={amount} amount={amount} popular={index === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
