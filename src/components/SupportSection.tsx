import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const SupportSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
    // Здесь будет логика отправки формы
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const faqItems = [
    {
      question: "Как активировать подарочную карту Apple?",
      answer:
        "Откройте App Store, iTunes Store или Apple Books. Прокрутите вниз и нажмите «Погасить». Войдите в систему с помощью Apple ID и пароля. Введите код с подарочной карты или используйте камеру для сканирования.",
    },
    {
      question: "Где я могу использовать подарочную карту?",
      answer:
        "Подарочные карты Apple можно использовать в App Store, iTunes Store, Apple Books, а также для покупки подписок Apple Music, iCloud+ и других сервисов Apple.",
    },
    {
      question: "Есть ли срок действия у подарочных карт?",
      answer:
        "Подарочные карты Apple не имеют срока действия. Вы можете использовать их в любое время после активации.",
    },
    {
      question: "Можно ли вернуть подарочную карту?",
      answer:
        "Возврат возможен в течение 14 дней с момента покупки при наличии чека. Активированные карты возврату не подлежат.",
    },
  ];

  return (
    <section id="support" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Поддержка</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы готовы помочь вам с любыми вопросами о подарочных картах Apple
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Форма обратной связи */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-light text-gray-900 mb-6">
              Свяжитесь с нами
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-700">
                  Имя
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 border-gray-200 focus:border-blue-500"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 border-gray-200 focus:border-blue-500"
                />
              </div>
              <div>
                <Label htmlFor="subject" className="text-gray-700">
                  Тема обращения
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 border-gray-200 focus:border-blue-500"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-700">
                  Сообщение
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 border-gray-200 focus:border-blue-500"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
              >
                Отправить сообщение
              </Button>
            </form>
          </div>

          {/* Контакты и FAQ */}
          <div className="space-y-8">
            {/* Контактная информация */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-light text-gray-900 mb-6">
                Контакты
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-blue-600" />
                  <span className="text-gray-700">8 (800) 555-0199</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-blue-600" />
                  <span className="text-gray-700">support@applestore.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-blue-600" />
                  <span className="text-gray-700">Пн-Пт: 9:00 - 18:00</span>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-light text-gray-900 mb-6">
                Частые вопросы
              </h3>
              <Accordion type="single" collapsible className="space-y-2">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-gray-200"
                  >
                    <AccordionTrigger className="text-left text-gray-800 hover:text-blue-600">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pt-2">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
