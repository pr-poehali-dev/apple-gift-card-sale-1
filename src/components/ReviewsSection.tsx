import { Card, CardContent } from "@/components/ui/card";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Анна К.",
      text: "Отличный подарок! Сын был в восторге от возможности выбрать любимые игры в App Store.",
      rating: 5,
    },
    {
      name: "Михаил П.",
      text: "Удобно и быстро. Купил подарочную карту для жены, она сразу скачала нужные приложения.",
      rating: 5,
    },
    {
      name: "Елена В.",
      text: "Прекрасное решение для подарка. Никаких проблем с активацией и использованием.",
      rating: 5,
    },
  ];

  const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
    </svg>
  );

  return (
    <section id="reviews" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Отзывы покупателей
          </h2>
          <p className="text-xl text-gray-600">
            Что говорят наши клиенты о подарочных картах Apple
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{review.text}"
                </p>

                <p className="font-medium text-gray-900">{review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
