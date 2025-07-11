import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                <Icon name="Cake" size={20} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-pink-600">Макарон</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                Главная
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                Продукция
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                Галерея
              </a>
              <a
                href="#order"
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                Заказать
              </a>
            </div>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-pink-200 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Кондитерская
                <span className="text-pink-500 block">Макарон</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Создаем сладкие моменты с 2018 года. Торты, пирожные и макароны
                ручной работы из натуральных ингредиентов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3"
                >
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Заказать торт
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-pink-500 text-pink-500 hover:bg-pink-50 px-8 py-3"
                >
                  <Icon name="Images" size={20} className="mr-2" />
                  Посмотреть работы
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-50"></div>
              <img
                src="/img/6ae0da38-310a-4a4f-a466-d09664d0ef6d.jpg"
                alt="Макароны"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Наша продукция
            </h2>
            <p className="text-xl text-gray-600">
              Каждое изделие создается с любовью и вниманием к деталям
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-pink-50 to-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors">
                  <Icon name="Cake" size={32} className="text-pink-500" />
                </div>
                <CardTitle className="text-2xl text-center text-gray-800">
                  Торты
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  Свадебные, детские, корпоративные торты. Любой дизайн и вкус
                  по вашему желанию.
                </CardDescription>
                <p className="text-2xl font-bold text-pink-500 mb-4">
                  от 2 500 ₽
                </p>
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                  Заказать торт
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-pink-50 to-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors">
                  <Icon name="Cookie" size={32} className="text-pink-500" />
                </div>
                <CardTitle className="text-2xl text-center text-gray-800">
                  Пирожные
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  Эклеры, тирамису, чизкейки и другие изысканные десерты для
                  особых моментов.
                </CardDescription>
                <p className="text-2xl font-bold text-pink-500 mb-4">
                  от 180 ₽
                </p>
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                  Выбрать десерт
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-pink-50 to-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors">
                  <Icon name="Heart" size={32} className="text-pink-500" />
                </div>
                <CardTitle className="text-2xl text-center text-gray-800">
                  Макароны
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  Французские макароны с различными начинками. Идеальный подарок
                  и угощение.
                </CardDescription>
                <p className="text-2xl font-bold text-pink-500 mb-4">от 80 ₽</p>
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                  Заказать макароны
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="py-20 bg-gradient-to-br from-pink-50 to-pink-100"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Галерея работ
            </h2>
            <p className="text-xl text-gray-600">
              Посмотрите на наши кулинарные шедевры
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-8">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/img/115101f2-9632-4280-a5fb-d0ab2539ee6b.jpg"
                  alt="Свадебный торт"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">Свадебный торт</h3>
                  <p className="text-sm">Трёхъярусный с живыми цветами</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/img/96000611-8a75-4e78-9192-cf8c817e8d08.jpg"
                  alt="Витрина пирожных"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">Витрина десертов</h3>
                  <p className="text-sm">Ассорти пирожных и тортов</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/img/6ae0da38-310a-4a4f-a466-d09664d0ef6d.jpg"
                  alt="Макароны"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">
                    Французские макароны
                  </h3>
                  <p className="text-sm">Нежные и воздушные</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/img/115101f2-9632-4280-a5fb-d0ab2539ee6b.jpg"
                  alt="Праздничный торт"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">Праздничный торт</h3>
                  <p className="text-sm">Для особых случаев</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/img/96000611-8a75-4e78-9192-cf8c817e8d08.jpg"
                  alt="Детский торт"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">Детский торт</h3>
                  <p className="text-sm">Яркий и вкусный</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/img/6ae0da38-310a-4a4f-a466-d09664d0ef6d.jpg"
                  alt="Макароны ассорти"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">Ассорти макарон</h3>
                  <p className="text-sm">Разные вкусы и цвета</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Как заказать
            </h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Контактная информация
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-pink-50 rounded-lg">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Телефон</p>
                    <p className="text-pink-500">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-pink-50 rounded-lg">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-pink-500">info@makaron.ru</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-pink-50 rounded-lg">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Адрес</p>
                    <p className="text-pink-500">
                      ул. Кондитерская, 15, Москва
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-pink-50 rounded-lg">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Режим работы</p>
                    <p className="text-pink-500">Пн-Вс: 9:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-pink-50 to-white">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-800">
                  Заказать торт
                </CardTitle>
                <CardDescription className="text-center text-gray-600">
                  Оставьте заявку и мы свяжемся с вами в течение 30 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input
                    id="name"
                    placeholder="Как к вам обращаться?"
                    className="border-pink-200 focus:border-pink-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="border-pink-200 focus:border-pink-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product">Что хотите заказать?</Label>
                  <Input
                    id="product"
                    placeholder="Торт, пирожные, макароны..."
                    className="border-pink-200 focus:border-pink-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Дополнительная информация</Label>
                  <Textarea
                    id="message"
                    placeholder="Опишите пожелания по дизайну, вкусу, размеру..."
                    className="border-pink-200 focus:border-pink-500 min-h-[100px]"
                  />
                </div>

                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных
                  данных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                  <Icon name="Cake" size={20} className="text-white" />
                </div>
                <span className="text-2xl font-bold">Макарон</span>
              </div>
              <p className="text-gray-400">
                Создаем сладкие моменты с 2018 года. Качество и вкус — наши
                главные приоритеты.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#home"
                    className="hover:text-pink-400 transition-colors"
                  >
                    Главная
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-pink-400 transition-colors"
                  >
                    Продукция
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="hover:text-pink-400 transition-colors"
                  >
                    Галерея
                  </a>
                </li>
                <li>
                  <a
                    href="#order"
                    className="hover:text-pink-400 transition-colors"
                  >
                    Заказать
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@makaron.ru</li>
                <li>ул. Кондитерская, 15, Москва</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Кондитерская Макарон. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
