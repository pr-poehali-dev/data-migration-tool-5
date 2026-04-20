import { Compass, Sparkles, Heart, Sun, Waves, Leaf, Plus, Minus, Mail, MapPin, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
}

const days = [
  {
    num: "01",
    title: "Приветствие и Погружение",
    desc: "Знакомство с участниками, введение в методику работы над мышлением, мастер-класс по фейс-лифтингу Access Bars, медитация у моря.",
  },
  {
    num: "02",
    title: "Исследование Внутреннего Мира",
    desc: "Утренняя йога на пляже, тренинг по трансформации мыслей, замечаем и меняем ограничивающие убеждения.",
  },
  {
    num: "03",
    title: "Возвращение к Себе",
    desc: "Медитация на уверенность, раскрытие потенциала, избавление от страха, практика фейс-лифт, написание личных целей.",
  },
  {
    num: "04",
    title: "Расслабление",
    desc: "Свободное время, плавание и снорклинг, вечер позитивных аффирмаций и обмена опытом.",
  },
  {
    num: "05",
    title: "Принятие и Радость Быть Здесь",
    desc: "Йога с фокусом на радость, пляж и снорклинг, интимная сессия — делимся историями и поднимаем все установки.",
  },
  {
    num: "06",
    title: "Синхронизация с Природой",
    desc: "Осознанная прогулка по пляжу, техника заземления, медитация, вечерняя церемония благодарности.",
  },
  {
    num: "07",
    title: "Интеграция и Завершение",
    desc: "Финальная сессия, интеграция переживаний, планирование действий, фотосессия, прощальный ужин и закрытие ретрита.",
  },
]

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Что входит в стоимость ретрита?",
      answer:
        "В стоимость входят: проживание на Мальдивах на 7 ночей, все питание (завтраки, обеды, ужины), участие во всех сессиях и мастер-классах, медитации, практики фейс-лифтинга по системе Access Bars, йога на пляже и сопровождение куратора на протяжении всего ретрита.",
    },
    {
      question: "Нужна ли специальная подготовка?",
      answer:
        "Никакой специальной подготовки не требуется. Ретрит подходит для всех уровней — важно лишь желание открыться новому опыту и готовность к внутренней работе. Программа гибкая и адаптируется под каждого участника.",
    },
    {
      question: "Сколько человек в группе?",
      answer:
        "Это камерный, интимный формат — группа ограничена небольшим количеством участников. Это обеспечивает персональное внимание, глубокое доверие и настоящую близость в группе.",
    },
    {
      question: "Как забронировать место?",
      answer:
        "Заполните форму на этой странице или напишите нам напрямую. Мы свяжемся с вами в течение одного рабочего дня, ответим на все вопросы и подтвердим бронирование. Количество мест ограничено.",
    },
    {
      question: "Откуда вылет и когда?",
      answer:
        "Вылет из Москвы. Точные даты уточняйте при бронировании — напишите нам, и мы предоставим всю информацию по ближайшим датам и стоимости перелёта.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B1A1E] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/files/bbe2e317-a4fd-42da-9ce0-c0344d566196.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#0B1A1E]" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Compass" size={18} />
            <span className="font-medium">Всё Возможно!</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {["Ретрит", "Программа", "Преимущества", "FAQ", "Записаться"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>

          <Button className="bg-[#2ABCB4] hover:bg-[#1fa8a0] text-white rounded-full px-6 font-medium">
            Записаться
          </Button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-[#2ABCB4]/40 backdrop-blur rounded-full">
            <span className="text-sm font-medium text-[#2ABCB4]">✦ Ретрит на Мальдивах · Вылет из Москвы · 7 дней</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">
            Всё возможно!
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-12 leading-relaxed text-pretty">
            Перезагрузи сознание, открой новые горизонты и позволь себе окунуться в мир гармонии и внутренней свободы на берегу Индийского океана.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              size="lg"
              className="bg-[#2ABCB4] hover:bg-[#1fa8a0] text-white rounded-full px-8 py-4 text-lg font-medium"
            >
              Записаться на ретрит
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Смотреть программу
            </Button>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Star" size={14} className="text-[#2ABCB4]" />
            <span className="text-sm font-medium">Программа гибкая — отдыхай в своём ритме</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#2ABCB4]/20 ring-1 ring-[#2ABCB4]/30 mb-6">
                <Icon name="Sparkles" size={22} className="text-[#2ABCB4]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Трансформация мышления</h3>
              <p className="text-white/70 leading-relaxed text-sm">Снятие внутренних барьеров и ограничивающих убеждений через мощные авторские техники.</p>
            </div>

            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#2ABCB4]/20 ring-1 ring-[#2ABCB4]/30 mb-6">
                <Icon name="Heart" size={22} className="text-[#2ABCB4]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Access Bars Фейс-лифтинг</h3>
              <p className="text-white/70 leading-relaxed text-sm">Мастер-классы по системе Access Bars — мягкое омоложение лица и глубокое расслабление.</p>
            </div>

            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#2ABCB4]/20 ring-1 ring-[#2ABCB4]/30 mb-6">
                <Icon name="Sun" size={22} className="text-[#2ABCB4]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Йога и медитации</h3>
              <p className="text-white/70 leading-relaxed text-sm">Утренняя йога на пляже и вечерние медитации у моря — каждый день в окружении океана.</p>
            </div>

            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#2ABCB4]/20 ring-1 ring-[#2ABCB4]/30 mb-6">
                <Icon name="Waves" size={22} className="text-[#2ABCB4]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Мальдивы и Океан</h3>
              <p className="text-white/70 leading-relaxed text-sm">Снорклинг, купание и бесконечная бирюза Индийского океана как фон для твоей перезагрузки.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                Программа 7 дней
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto text-pretty">
                Задача — не жить по расписанию, а получать удовольствие. Программа гибкая и подстраивается под каждого участника.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {days.map((day) => (
                <div key={day.num} className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 flex flex-col">
                  <div className="text-3xl font-bold text-[#2ABCB4]/60 mb-3">{day.num}.</div>
                  <h3 className="text-base font-semibold mb-3 leading-snug">{day.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm flex-1">{day.desc}</p>
                </div>
              ))}

              {/* CTA card */}
              <div className="rounded-2xl bg-[#2ABCB4]/15 ring-1 ring-[#2ABCB4]/30 backdrop-blur p-6 flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-bold text-[#2ABCB4]/60 mb-3">✦</div>
                  <h3 className="text-base font-semibold mb-3">Мальдивы ждут тебя</h3>
                  <p className="text-white/70 leading-relaxed text-sm">Дай себе шанс на радость, внутреннюю гармонию и лёгкость бытия.</p>
                </div>
                <Button className="mt-6 bg-[#2ABCB4] hover:bg-[#1fa8a0] text-white rounded-full text-sm font-medium">
                  Занять место
                </Button>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-[#2ABCB4] hover:bg-[#1fa8a0] text-white rounded-full px-12 py-4 text-lg font-medium"
              >
                Записаться на ретрит
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/70 leading-relaxed text-pretty">
                  Всё, что нужно знать о ретрите «Всё Возможно!» — от программы до бронирования места.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-base font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0 text-[#2ABCB4]" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0 text-[#2ABCB4]" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/70 leading-relaxed text-sm">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                Записаться на ретрит
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Оставь заявку — мы свяжемся с тобой в течение дня и ответим на все вопросы.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                <form className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Имя</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#2ABCB4] focus:border-transparent outline-none"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Телефон или WhatsApp</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#2ABCB4] focus:border-transparent outline-none"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#2ABCB4] focus:border-transparent outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Вопрос или комментарий</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#2ABCB4] focus:border-transparent outline-none resize-none"
                      placeholder="Расскажи о себе или задай вопрос..."
                    />
                  </div>
                  <Button className="w-full bg-[#2ABCB4] hover:bg-[#1fa8a0] text-white rounded-lg py-3 font-medium text-base">
                    Отправить заявку
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Это ретрит для тех, кто хочет перезагрузиться, найти себя и открыться новым возможностям. Мальдивы — лучшее место для этого путешествия внутрь себя.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/80">
                    <div className="w-8 h-8 rounded-full bg-[#2ABCB4]/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={14} className="text-[#2ABCB4]" />
                    </div>
                    <span>Мальдивы · Вылет из Москвы</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <div className="w-8 h-8 rounded-full bg-[#2ABCB4]/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={14} className="text-[#2ABCB4]" />
                    </div>
                    <span>7 дней / 7 ночей</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <div className="w-8 h-8 rounded-full bg-[#2ABCB4]/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Users" size={14} className="text-[#2ABCB4]" />
                    </div>
                    <span>Камерная группа — ограниченное количество мест</span>
                  </div>
                  <a
                    href="tel:+79511408363"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#2ABCB4]/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={14} className="text-[#2ABCB4]" />
                    </div>
                    <span>+7 951 140-83-63</span>
                  </a>
                </div>

                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-[#2ABCB4]/20 flex items-center justify-center text-2xl">
                      🌊
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Абрамова Ирина</h4>
                      <p className="text-gray-500 text-sm">Психолог · Энерготерапевт · Расстановщик</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a href="tel:+79511408363" className="flex-1">
                      <Button className="w-full bg-[#2ABCB4] hover:bg-[#1fa8a0] text-white rounded-lg flex items-center justify-center gap-2">
                        <Icon name="Phone" size={16} />
                        Позвонить
                      </Button>
                    </a>
                    <a href="https://wa.me/79511408363" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-lg flex items-center justify-center gap-2">
                        <Icon name="MessageCircle" size={16} />
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Icon name="Compass" size={22} className="text-[#2ABCB4]" />
                  <span className="text-xl font-semibold">Всё Возможно!</span>
                </div>
                <p className="text-white/60 leading-relaxed text-sm max-w-xs">
                  Ретрит на Мальдивах для тех, кто готов открыться новым возможностям и обрести внутреннюю гармонию. Мальдивы ждут тебя.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Ретрит</h4>
                <ul className="space-y-3">
                  {["О программе", "7 дней ретрита", "Что включено", "Записаться"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Подписка</h4>
                <p className="text-white/60 text-sm mb-4">Получай вдохновляющие материалы о саморазвитии.</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex-1 bg-white/10 ring-1 ring-white/20 rounded-full px-4 py-2 text-sm placeholder:text-white/40 outline-none focus:ring-[#2ABCB4]/50"
                  />
                  <button className="w-9 h-9 bg-[#2ABCB4] hover:bg-[#1fa8a0] rounded-full flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/40 text-sm">© 2026 Ретрит «Всё Возможно!»</p>
              <p className="text-white/40 text-sm">Мальдивы · Вылет из Москвы · 7 дней</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index