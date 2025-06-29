import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Компания */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <svg
                className="w-6 h-6 text-gray-800"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="text-lg font-medium text-gray-800">
                Apple Store
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Официальные подарочные карты Apple с быстрой доставкой и гарантией
              качества.
            </p>
          </div>

          {/* Продукты */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Продукты</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Подарочные карты
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  App Store
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  iTunes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Apple Music
                </a>
              </li>
            </ul>
          </div>

          {/* Поддержка */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Центр поддержки
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Как использовать
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Возврат и обмен
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Связаться с нами
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-gray-500" />
                <span className="text-gray-600 text-sm">+7 (800) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-gray-500" />
                <span className="text-gray-600 text-sm">
                  support@applestore.ru
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-gray-500" />
                <span className="text-gray-600 text-sm">24/7 поддержка</span>
              </div>
            </div>
          </div>
        </div>

        {/* Разделитель */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-gray-500 text-sm">
                © 2024 Apple Store. Все права защищены.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
                >
                  Политика конфиденциальности
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
                >
                  Условия использования
                </a>
              </div>
            </div>

            {/* Социальные сети */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <Icon name="Twitter" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
