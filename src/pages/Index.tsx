import { Plus, Minus } from "lucide-react"
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
    desc: "Дыхательные практики на пляже, тренинг по трансформации мыслей, замечаем и меняем ограничивающие убеждения.",
  },
  {
    num: "03",
    title: "Возвращение к Себе",
    desc: "Медитация на уверенность, раскрытие потенциала, избавление от страха, практика фейс-лифт, написание личных целей.",
  },
  {
    num: "04",
    title: "Расслабление и Творчество",
    desc: "Свободное время, плавание и снорклинг, вечер позитивных аффирмаций и обмена опытом. Творческий вечер — мастер-класс по арт-практикам.",
  },
  {
    num: "05",
    title: "Принятие и Радость Быть Здесь",
    desc: "Дыхательные практики с фокусом на радость, пляж и снорклинг, интимная сессия — делимся историями и поднимаем все установки.",
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
    <div className="min-h-screen bg-[#fdf0f5] text-[#3d1a2e]">

      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/6d2a8cc0-b6a3-4e57-bbf1-1218997b4d4b.jpeg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#f472b6]/30 via-[#2ABCB4]/20 to-[#fdf0f5]" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/50 ring-1 ring-pink-300/50 backdrop-blur rounded-full">
            <Icon name="Compass" size={18} className="text-[#e91e8c]" />
            <span className="font-medium text-[#3d1a2e]">Всё Возможно!</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {["Ретрит", "Программа", "Преимущества", "FAQ"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-white/50 ring-1 ring-pink-300/40 backdrop-blur rounded-full hover:bg-white/70 transition-colors text-sm text-[#3d1a2e]"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://vk.ru/abramova_garmony"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/50 ring-1 ring-pink-300/40 backdrop-blur rounded-full hover:bg-white/70 transition-colors text-sm text-[#3d1a2e]"
            >
              <Icon name="Users" size={15} className="text-[#0077FF]" />
              <span className="hidden sm:inline">ВКонтакте</span>
            </a>
            <Button
              className="bg-[#e91e8c] hover:bg-[#c4177a] text-white rounded-full px-6 font-medium"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Записаться
            </Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          <div className="mb-6 px-4 py-2 bg-white/50 ring-1 ring-[#0e8a84]/60 backdrop-blur rounded-full">
            <span className="text-sm font-medium text-[#0a7a74]">✦ РЕТРИТ НА МАЛЬДИВАХ · ВЫЛЕТ ИЗ МОСКВЫ · 7 ДНЕЙ</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 text-white drop-shadow-lg uppercase" style={{fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.08em'}}>
            Всё Возможно!
          </h1>

          <p className="text-xl md:text-2xl text-white max-w-3xl mb-12 leading-relaxed text-pretty drop-shadow-lg font-light" style={{fontFamily: "'Cormorant Garamond', serif"}}>
            Этот ретрит — ваш шанс перезагрузить своё сознание и открыть новые горизонты. Позвольте себе окунуться в мир новых возможностей и гармонии. Мальдивы ждут вас!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              size="lg"
              className="bg-[#e91e8c] hover:bg-[#c4177a] text-white rounded-full px-8 py-4 text-lg font-medium shadow-lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Записаться на ретрит
            </Button>
            <Button
              size="lg"
              className="bg-white/50 ring-1 ring-white/60 backdrop-blur border-0 text-[#3d1a2e] hover:bg-white/70 rounded-full px-8 py-4 text-lg"
            >
              Смотреть программу
            </Button>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-white/50 ring-1 ring-pink-300/40 backdrop-blur rounded-full">
            <Icon name="Star" size={14} className="text-[#e91e8c]" />
            <span className="text-sm font-medium text-[#3d1a2e]">Программа гибкая — отдыхай в своём ритме</span>
          </div>
        </div>
      </div>

      {/* Features Section — фото девушек на пляже */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/9b91026e-e6c7-426e-b9e3-5ab61c338ef6.jpeg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdf0f5]/95 via-[#fdf0f5]/80 to-[#fdf0f5]/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-[#3d1a2e] uppercase">
              Что тебя ждёт
            </h2>
            <p className="text-[#0a7a74] text-lg font-medium">Женский ретрит — место силы и радости</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="rounded-2xl bg-white/80 ring-1 ring-pink-200 backdrop-blur p-8 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#2ABCB4]/15 ring-1 ring-[#2ABCB4]/30 mb-6">
                <Icon name="Sparkles" size={22} className="text-[#0a7a74]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#3d1a2e]">Трансформация мышления</h3>
              <p className="text-[#7a4060] leading-relaxed text-sm">Снятие внутренних барьеров и ограничивающих убеждений через мощные авторские техники.</p>
            </div>

            <div className="rounded-2xl bg-white/80 ring-1 ring-pink-200 backdrop-blur p-8 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-pink-100 ring-1 ring-pink-200 mb-6">
                <Icon name="Heart" size={22} className="text-[#e91e8c]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#3d1a2e]">Access Bars Фейс-лифтинг</h3>
              <p className="text-[#7a4060] leading-relaxed text-sm">Мастер-классы по системе Access Bars — мягкое омоложение лица и глубокое расслабление.</p>
            </div>

            <div className="rounded-2xl bg-white/80 ring-1 ring-pink-200 backdrop-blur p-8 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#2ABCB4]/15 ring-1 ring-[#2ABCB4]/30 mb-6">
                <Icon name="Sun" size={22} className="text-[#0a7a74]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#3d1a2e]">Медитации и релакс</h3>
              <p className="text-[#7a4060] leading-relaxed text-sm">Никаких сильных физических нагрузок — только релакс, дыхательные практики и мягкие медитации у моря.</p>
            </div>

            <div className="rounded-2xl bg-white/80 ring-1 ring-pink-200 backdrop-blur p-8 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#2ABCB4]/15 ring-1 ring-[#2ABCB4]/30 mb-6">
                <Icon name="Waves" size={22} className="text-[#0a7a74]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#3d1a2e]">Мальдивы и Океан</h3>
              <p className="text-[#7a4060] leading-relaxed text-sm">Снорклинг, купание и бесконечная бирюза Индийского океана как фон для твоей перезагрузки.</p>
            </div>

            <div className="rounded-2xl bg-white/80 ring-1 ring-pink-200 backdrop-blur p-8 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-pink-100 ring-1 ring-pink-200 mb-6">
                <Icon name="Users" size={22} className="text-[#e91e8c]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#3d1a2e]">Новые знакомства</h3>
              <p className="text-[#7a4060] leading-relaxed text-sm">Камерная группа единомышленниц — здесь рождается настоящая дружба и поддержка на всю жизнь.</p>
            </div>
          </div>

          {/* Фото в халатах */}
          <div className="mt-12 rounded-3xl overflow-hidden h-80 relative">
            <img
              src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/ced06f38-1eb0-44e0-9fdf-b61137ff310f.jpeg"
              alt="Участницы ретрита"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#fdf0f5]/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Program Section — фото в халатах */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/ced06f38-1eb0-44e0-9fdf-b61137ff310f.jpeg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-[#fdf0f5]/95 via-[#fdf0f5]/85 to-[#fdf0f5]/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-[#3d1a2e] uppercase whitespace-nowrap">
              Программа 7 дней
            </h2>
            <p className="text-xl text-[#7a4060] max-w-3xl mx-auto">
              Задача — не жить по расписанию, а получать удовольствие. Программа гибкая и подстраивается под каждого участника.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {days.map((day) => (
              <div key={day.num} className="rounded-2xl bg-white/85 ring-1 ring-pink-200 backdrop-blur p-6 flex flex-col shadow-sm">
                <div className="text-4xl font-light text-[#2ABCB4] mb-4">{day.num}</div>
                <h3 className="text-base font-semibold mb-3 text-[#3d1a2e]">{day.title}</h3>
                <p className="text-[#7a4060] text-sm leading-relaxed flex-1">{day.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-[#e91e8c] hover:bg-[#c4177a] text-white rounded-full px-10 py-4 text-lg font-medium shadow-lg">
              Хочу на ретрит
            </Button>
          </div>
        </div>
      </section>

      {/* Photo banner — девушки на яхте */}
      <section className="relative h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/362883a5-6f91-415e-b7d6-5fe5c4933a94.jpeg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#fdf0f5] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[#e91e8c]/10" />
        </div>
        <div className="relative z-10 flex items-start justify-center h-full pt-12">
          <div className="text-center">
            <p className="text-xl md:text-2xl text-white drop-shadow-lg tracking-widest" style={{fontFamily: "'Playfair Display', serif", fontStyle: "italic"}}>
              Наполняйся. Отдыхай. Сияй.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative py-24 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-80 h-80 bg-pink-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#2ABCB4]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 ring-1 ring-pink-200 rounded-full mb-6">
              <Icon name="Star" size={14} className="text-[#e91e8c]" />
              <span className="text-sm font-medium text-[#e91e8c]">Отзывы участниц</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-[#3d1a2e] uppercase">
              Они уже были там
            </h2>
            <p className="text-lg text-[#7a4060] max-w-2xl mx-auto">
              Живые слова тех, кто прошёл этот путь
            </p>
          </div>

          <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
            {/* Review 1 */}
            <div className="break-inside-avoid rounded-2xl bg-[#fdf0f5] ring-1 ring-pink-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e91e8c] to-[#2ABCB4] flex items-center justify-center text-white font-semibold text-sm">А</div>
                <div>
                  <p className="font-semibold text-[#3d1a2e] text-sm">Участница ретрита</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[1,2,3,4,5].map(i => <Icon key={i} name="Star" size={11} className="text-[#e91e8c]" />)}
                  </div>
                </div>
              </div>
              <p className="text-[#3d1a2e] text-sm leading-relaxed">
                Ирочка, хочу оставить самый честный и тёплый отзыв о нашем ретрите.<br /><br />
                Я до сих пор ловлю себя на мыслях, что всё это было по-настоящему. Первый раз за границей, и сразу — 5 звёзд. Ещё недавно я даже мечтать о таком боялась... а ты взяла и помогла мне разрешить себе эту реальность.<br /><br />
                Этот ретрит стал для меня мощным переходом. Я искренне смеялась, искренне плакала — проживала всё так глубоко, как никогда раньше.
              </p>
            </div>

            {/* Review 2 — сторис результаты */}
            <div className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm ring-1 ring-pink-200">
              <img
                src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/d9bc5317-18ae-4e45-b20f-d739dc986099.jpeg"
                alt="Результаты после ретрита в Египте"
                className="w-full object-cover"
              />
            </div>

            {/* Review 3 */}
            <div className="break-inside-avoid rounded-2xl bg-white ring-1 ring-pink-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2ABCB4] to-[#e91e8c] flex items-center justify-center text-white font-semibold text-sm">М</div>
                <div>
                  <p className="font-semibold text-[#3d1a2e] text-sm">Участница ретрита</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[1,2,3,4,5].map(i => <Icon key={i} name="Star" size={11} className="text-[#e91e8c]" />)}
                  </div>
                </div>
              </div>
              <p className="text-[#3d1a2e] text-sm leading-relaxed">
                Ирина, дорогая!! Я тебе так благодарна за это невероятное путешествие в мир изобилия, роскоши, быстрых трансформаций, где всё решалось по щелчку пальца!!!<br /><br />
                Я даже ретритом это назвать не могу!!! Это было ВОЛШЕБСТВО!! Как ты это всё смогла, всё организовав, сделав всё на высшем уровне ❤️❤️❤️<br /><br />
                Это было полное доверие 🙏🙏🙏
              </p>
            </div>

            {/* Review 4 — скриншот Telegram */}
            <div className="break-inside-avoid rounded-2xl bg-[#fdf0f5] ring-1 ring-pink-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-[#e91e8c] flex items-center justify-center text-white font-semibold text-sm">Н</div>
                <div>
                  <p className="font-semibold text-[#3d1a2e] text-sm">Участница ретрита</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[1,2,3,4,5].map(i => <Icon key={i} name="Star" size={11} className="text-[#e91e8c]" />)}
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 ring-1 ring-pink-100 mb-3">
                <p className="text-xs text-[#888] mb-1 font-medium">Ретрит — это одно из лучших моих в...</p>
                <p className="text-[#3d1a2e] text-sm leading-relaxed">
                  Да, ретрит который у нас был — это то, что невозможно объяснить просто словами, это волшебство на грани фантастики, я бы вот так описала наше путешествие 🧳
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 ring-1 ring-pink-100">
                <p className="text-[#3d1a2e] text-sm leading-relaxed">
                  Ретрит — это одно из лучших моих вложений. Я дорогая...
                </p>
              </div>
            </div>

            {/* Review 5 — CTA карточка */}
            <div className="break-inside-avoid rounded-2xl bg-gradient-to-br from-[#e91e8c] to-[#c4177a] p-6 shadow-sm text-white">
              <Icon name="Quote" size={28} className="text-white/40 mb-4" />
              <p className="text-lg font-light leading-relaxed mb-6">
                Столько любви было вокруг нас, столько всего искреннего! Меня все спрашивали, куда едешь, я отвечала — не знаю, знаю что Египет и всё!!!
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-semibold text-sm">Т</div>
                <div>
                  <p className="font-semibold text-sm">Участница ретрита</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[1,2,3,4,5].map(i => <Icon key={i} name="Star" size={11} className="text-white/80" />)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-[#7a4060] text-sm mb-6">Хочешь стать следующей участницей?</p>
            <Button className="bg-[#e91e8c] hover:bg-[#c4177a] text-white rounded-full px-8 py-3 font-medium shadow">
              Записаться на ретрит
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 px-6 bg-[#fdf0f5]">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white ring-1 ring-pink-200 p-8 md:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-[#3d1a2e]">
                  Вопросы и ответы
                </h2>
                <p className="text-lg text-[#7a4060] mb-8">
                  Всё, что важно знать перед поездкой.
                </p>
                <Button size="lg" className="bg-[#2ABCB4] hover:bg-[#1fa8a0] text-white rounded-full px-8 font-medium shadow">
                  Задать вопрос
                </Button>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="rounded-2xl bg-[#fdf0f5] ring-1 ring-pink-200 overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-pink-50 transition-colors"
                      onClick={() => toggleFaq(index)}
                    >
                      <h3 className="text-base font-semibold pr-4 text-[#3d1a2e]">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0 text-[#e91e8c]" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0 text-[#2ABCB4]" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-[#7a4060] leading-relaxed text-sm">{faq.answer}</p>
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
      <section id="contact" className="relative py-24 px-6 bg-[#fdf0f5]">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white ring-1 ring-pink-200 p-8 md:p-12 shadow-sm">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-[#3d1a2e]">
                Записаться на ретрит
              </h2>
              <p className="text-xl text-[#7a4060] max-w-2xl mx-auto">
                Оставь заявку — мы свяжемся с тобой в течение дня и ответим на все вопросы.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="rounded-2xl bg-[#fdf0f5] ring-1 ring-pink-200 p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-6 text-[#3d1a2e]">Оставить заявку</h3>
                <form className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#3d1a2e]">Имя</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-[#e91e8c] focus:border-transparent outline-none bg-white text-[#3d1a2e]"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-[#3d1a2e]">Телефон или WhatsApp</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-[#e91e8c] focus:border-transparent outline-none bg-white text-[#3d1a2e]"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#3d1a2e]">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-[#e91e8c] focus:border-transparent outline-none bg-white text-[#3d1a2e]"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#3d1a2e]">Вопрос или комментарий</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-[#e91e8c] focus:border-transparent outline-none resize-none bg-white text-[#3d1a2e]"
                      placeholder="Расскажи о себе или задай вопрос..."
                    />
                  </div>
                  <Button className="w-full bg-[#e91e8c] hover:bg-[#c4177a] text-white rounded-lg py-3 font-medium text-base shadow">
                    Отправить заявку
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-xl text-[#7a4060] leading-relaxed text-pretty">
                    Это ретрит для тех, кто хочет перезагрузиться, найти себя и открыться новым возможностям. Мальдивы — лучшее место для этого путешествия внутрь себя.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[#7a4060]">
                    <div className="w-8 h-8 rounded-full bg-[#2ABCB4]/15 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={14} className="text-[#2ABCB4]" />
                    </div>
                    <span>Мальдивы · Вылет из Москвы</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#7a4060]">
                    <div className="w-8 h-8 rounded-full bg-[#2ABCB4]/15 flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={14} className="text-[#2ABCB4]" />
                    </div>
                    <span>7 дней / 7 ночей</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#7a4060]">
                    <div className="w-8 h-8 rounded-full bg-[#2ABCB4]/15 flex items-center justify-center flex-shrink-0">
                      <Icon name="Users" size={14} className="text-[#2ABCB4]" />
                    </div>
                    <span>Камерная группа — ограниченное количество мест</span>
                  </div>
                  <a
                    href="tel:+79511408363"
                    className="flex items-center gap-3 text-[#7a4060] hover:text-[#e91e8c] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={14} className="text-[#e91e8c]" />
                    </div>
                    <span>+7 951 140-83-63</span>
                  </a>
                </div>

                <div className="rounded-2xl bg-[#fdf0f5] ring-1 ring-pink-200 overflow-hidden shadow-sm">
                  <div className="w-full h-72 overflow-hidden">
                    <img src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/13c4c3be-83b0-40dc-afe3-ab7099a953bb.jpeg" alt="Абрамова Ирина" className="w-full h-full object-cover object-top scale-110" style={{objectPosition: "center 20%"}} />
                  </div>
                  <div className="p-4">
                    <h4 className="text-base font-semibold text-[#3d1a2e]">Абрамова Ирина</h4>
                    <p className="text-[#7a4060] text-xs mb-3">Психолог · Энерготерапевт · Расстановщик</p>
                    <div className="flex gap-2">
                      <a href="tel:+79511408363" className="flex-1">
                        <Button size="sm" className="w-full bg-[#2ABCB4] hover:bg-[#1fa8a0] text-white rounded-lg flex items-center justify-center gap-1.5 text-xs">
                          <Icon name="Phone" size={13} />
                          Позвонить
                        </Button>
                      </a>
                      <a href="https://vk.ru/abramova_garmony" target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button size="sm" className="w-full bg-[#0077FF] hover:bg-[#0066dd] text-white rounded-lg flex items-center justify-center gap-1.5 text-xs">
                          <Icon name="Users" size={13} />
                          ВКонтакте
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 bg-[#3d1a2e] text-white/70 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Compass" size={18} className="text-[#e91e8c]" />
            <span className="font-medium text-white">Всё Возможно!</span>
          </div>
          <p className="text-sm text-white/50">Ретрит на Мальдивах · Абрамова Ирина</p>
          <p className="text-sm mt-1">
            <a href="tel:+79511408363" className="hover:text-[#2ABCB4] transition-colors">+7 951 140-83-63</a>
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <a
              href="https://vk.ru/abramova_garmony"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-[#0077FF]/30 rounded-full transition-colors text-sm text-white/70 hover:text-white"
            >
              <Icon name="Users" size={14} className="text-[#0077FF]" />
              ВКонтакте
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index