import { Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

// Палитра
// --bg-main:    #FAF7F5   — тёплый молочный фон
// --bg-alt:     #F3EEE9   — пудровый
// --accent:     #B07A8A   — пыльная роза
// --accent-dk:  #8C5C6B   — тёмная роза
// --text-main:  #2C2320   — шоколад
// --text-muted: #7A6A64   — тёплый серый

interface FAQ {
  question: string
  answer: string
}

const benefits = [
  {
    icon: "HeartHandshake",
    title: "Полюбишь себя по-настоящему",
    desc: "Уже через 30 дней ты перестанешь критиковать себя в зеркале. Научишься принимать своё тело, ценить себя и говорить «нет» без чувства вины.",
    result: "−80% самокритики",
  },
  {
    icon: "Sparkles",
    title: "Откроешь свою женственность",
    desc: "Практики на раскрытие сексуальности и женской энергии. Ты снова почувствуешь себя желанной, лёгкой и привлекательной — не для кого-то, а для себя.",
    result: "Уже на 1-й неделе",
  },
  {
    icon: "Wind",
    title: "Избавишься от хронического стресса",
    desc: "Конкретные инструменты: дыхательные практики, работа с нервной системой, нейро-упражнения. Сон нормализуется за 2–3 недели.",
    result: "Сон за 2 недели",
  },
  {
    icon: "Target",
    title: "Найдёшь свой путь и цель",
    desc: "Выйдешь из «дня сурка». Поймёшь, чего ты на самом деле хочешь, и составишь конкретный план — не в теории, а в жизни.",
    result: "Ясность за 21 день",
  },
  {
    icon: "Users",
    title: "Обретёшь настоящих подруг",
    desc: "200+ женщин, которые тебя поймут без осуждения. Закрытое сообщество с живыми встречами, поддержкой 24/7 и общими победами.",
    result: "Сообщество 200+",
  },
  {
    icon: "TrendingUp",
    title: "Вырастешь в доходе",
    desc: "Когда убираешь внутренние блоки — деньги приходят легче. Участницы клуба в среднем увеличивают доход на 30–40% за 3 месяца.",
    result: "+30–40% за 3 мес.",
  },
]

const reviews = [
  {
    label: "Похудение без диет",
    img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/5aa714bb-9f1d-4d56-bfe5-5b8cbb17cddc.jpeg",
    quote: "Я заметила, что худею. Объёмы, немного вес. Прям я Рада очень ❤️",
  },
  {
    label: "Здоровье и цикл наладился",
    img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/f5fbe2fd-96c0-4357-bb33-29fd2d7644e5.jpeg",
    quote: "Первый раз за долгое время месячные пришли и идут вообще незаметно 😮 обычно я первый день на нурофене...",
  },
  {
    label: "«Ты гуру, наставник, волшебница»",
    img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/6aeac33e-151b-4169-9c2f-cc523e05d0ee.jpeg",
    quote: "Я теперь к психологам не пойду 😊 это все не то. Ты гуру наставник волшебница 🥰",
  },
  {
    label: "2 месяца — только разгон",
    img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/4476ce3f-56b1-49b0-b1f2-75e6e97762fd.jpeg",
    quote: "Столько инсайтов за всё это время 🙏 Безумно благодарна судьбе, что наши жизненные пути пересеклись. В нужное время.",
  },
  {
    label: "Вышла из токсичных отношений",
    img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/15216d44-2dce-4c6d-bf4e-1543459c1c71.jpeg",
    quote: "Прошло около полугода после расстановок... Фу, пишу, и аж не верю что это была я 😂 И вот 2025 — год очищения 😊",
  },
]

const objections = [
  {
    icon: "Clock",
    title: "«У меня нет времени на себя»",
    answer:
      "Именно поэтому этот клуб и создан. Все форматы — онлайн, 2–3 раза в неделю по 30–60 минут. Можно смотреть в любое удобное время. Многие участницы — мамы и работающие женщины.",
  },
  {
    icon: "BadgeQuestion",
    title: "«Психология — это не для меня»",
    answer:
      "Никаких сложных терминов и теории ради теории. Только практики, которые дают результат уже на первой неделе. Никакого опыта не нужно — начинаем с нуля.",
  },
  {
    icon: "Wallet",
    title: "«Дорого и непонятно, будет ли результат»",
    answer:
      "Стоимость — от 2 990 ₽/месяц. Это меньше одного похода к психологу. А результат ты почувствуешь через 7 дней или вернём деньги — это наша гарантия.",
  },
]

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Кому подойдёт НЕЙРОФИТНЕС?",
      answer:
        "Женщинам 25–45 лет, которые устали жить «на автопилоте», хотят избавиться от стресса, полюбить себя и почувствовать себя женственной и желанной. Без опыта в психологии.",
    },
    {
      question: "Как проходят занятия?",
      answer:
        "Онлайн, 2–3 раза в неделю. Живые практики, разборы, нейро-упражнения и закрытый чат поддержки. Каждый месяц — новая тема и групповой челлендж.",
    },
    {
      question: "Нужен ли опыт в медитации или психологии?",
      answer:
        "Нет. Программа создана для начинающих. Всё объясняем с нуля, каждая участница получает индивидуальное внимание.",
    },
    {
      question: "Когда ждать первых результатов?",
      answer:
        "Большинство участниц отмечают изменения уже через 7–14 дней: лучше сон, меньше тревожности, больше энергии и принятие себя.",
    },
    {
      question: "Как вступить в клуб?",
      answer:
        "Оставь заявку ниже — я свяжусь с тобой в течение 2 часов, отвечу на вопросы и расскажу про ближайший старт. Мест немного.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#FAF7F5] text-[#2C2320]" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── HERO ── */}
      <section className="relative min-h-screen overflow-hidden bg-[#F3EEE9]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B07A8A]/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B07A8A]/8 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between px-4 sm:px-6 md:px-12 py-5">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 ring-1 ring-[#B07A8A]/30 backdrop-blur rounded-full">
            <Icon name="Brain" size={16} className="text-[#B07A8A]" />
            <span className="font-semibold text-[#2C2320] text-sm tracking-wide">НЕЙРОФИТНЕС</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "О проекте", anchor: "benefits" },
              { label: "Автор", anchor: "author" },
              { label: "Отзывы", anchor: "objections" },
              { label: "FAQ", anchor: "faq" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => document.getElementById(item.anchor)?.scrollIntoView({ behavior: "smooth" })}
                className="px-4 py-2 bg-white/70 ring-1 ring-[#B07A8A]/20 backdrop-blur rounded-full hover:bg-white transition-colors text-sm text-[#2C2320]"
              >
                {item.label}
              </button>
            ))}
          </div>

          <Button
            className="bg-[#B07A8A] hover:bg-[#8C5C6B] text-white rounded-full px-5 sm:px-6 text-sm font-semibold shadow-lg shadow-[#B07A8A]/25 min-h-[44px]"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Вступить в клуб
          </Button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-80px)] px-4 sm:px-6 md:px-12 pb-10 pt-4">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B07A8A]/12 ring-1 ring-[#B07A8A]/35 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#B07A8A] animate-pulse" />
              <span className="text-sm font-medium text-[#8C5C6B] tracking-wide">Онлайн-клуб для женщин 25–45</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 text-[#2C2320] leading-none">
              НЕЙРО
              <span className="text-[#B07A8A]">ФИТНЕС</span>
            </h1>

            <p className="text-xl sm:text-2xl font-light text-[#2C2320] mb-3 leading-snug">
              Перестань терпеть стресс.
              <br />
              <span className="text-[#B07A8A]">Начни жить для себя.</span>
            </p>

            <p className="text-base sm:text-lg text-[#7A6A64] mb-5 leading-relaxed">
              За 30 дней ты избавишься от хронической тревоги, раскроешь женственность и наконец полюбишь себя — не когда похудеешь, а прямо сейчас.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["БЕЗ ОПЫТА", "ОНЛАЙН", "РЕЗУЛЬТАТ ЗА 7 ДНЕЙ"].map((word) => (
                <span
                  key={word}
                  className="px-4 py-1.5 bg-white ring-2 ring-[#B07A8A]/50 text-[#8C5C6B] font-bold text-xs rounded-full tracking-widest"
                >
                  {word}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-[#B07A8A] hover:bg-[#8C5C6B] text-white rounded-full px-8 py-4 text-base font-semibold shadow-xl shadow-[#B07A8A]/25 min-h-[52px] w-full sm:w-auto"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Хочу в клуб — занять место
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#B07A8A]/50 text-[#8C5C6B] hover:bg-[#B07A8A]/8 rounded-full px-8 py-4 text-base bg-transparent min-h-[52px] w-full sm:w-auto"
                onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
              >
                Узнать подробнее
              </Button>
            </div>

            {/* Social proof mini */}
            <div className="flex items-center gap-3 mt-6">
              <div className="flex -space-x-2">
                {["#B07A8A", "#8C5C6B", "#C49AA6", "#D4A8B4"].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white" style={{ backgroundColor: c }} />
                ))}
              </div>
              <p className="text-sm text-[#7A6A64]">
                <span className="font-bold text-[#2C2320]">200+ женщин</span> уже изменили свою жизнь
              </p>
            </div>
          </div>

          {/* Right — фото */}
          <div className="relative flex justify-center mt-6 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B07A8A]/15 to-[#B07A8A]/5 rounded-3xl transform rotate-3" />
              <img
                src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/55508f1c-2bfb-4ec9-9c75-73c535e43541.jpeg"
                alt="Участницы клуба НЕЙРОФИТНЕС"
                className="relative z-10 w-full rounded-3xl object-cover shadow-2xl shadow-[#B07A8A]/15"
                style={{ aspectRatio: "3/4", objectPosition: "center 20%" }}
              />
              {/* Floating badge */}
              <div className="absolute z-20 -bottom-4 -left-2 sm:-left-4 bg-white rounded-2xl shadow-xl px-4 py-3 ring-1 ring-[#B07A8A]/15">
                <p className="text-xs text-[#7A6A64] mb-1">Уже в клубе</p>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {["#B07A8A", "#8C5C6B", "#C49AA6"].map((c, i) => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-white" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                  <span className="font-bold text-[#2C2320] text-sm">200+ женщин</span>
                </div>
              </div>
              {/* Top badge */}
              <div className="absolute z-20 -top-3 -right-2 sm:-right-4 bg-[#B07A8A] text-white rounded-xl px-3 py-2 text-center shadow-lg">
                <p className="text-xs font-medium opacity-90">Результат</p>
                <p className="text-sm font-black">за 7 дней</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS (ATTENTION→INTEREST) ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-[#2C2320]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
            Узнаёшь себя?
          </h2>
          <p className="text-white/60 mb-10 text-base sm:text-lg">Если хотя бы 3 пункта — это про тебя, ты попала по адресу</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {[
              "Засыпаешь с тревогой, просыпаешься без сил",
              "Смотришь в зеркало и не принимаешь себя",
              "Всё делаешь для других, но не для себя",
              "Чувствуешь себя «не женственной» или «невидимой»",
              "Живёшь по инерции — без радости и смысла",
              "Хочешь перемен, но не знаешь с чего начать",
            ].map((pain, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl px-4 py-4">
                <div className="w-5 h-5 rounded-full bg-[#B07A8A]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="Check" size={11} className="text-[#C49AA6]" />
                </div>
                <span className="text-white/80 text-sm sm:text-base">{pain}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[#C49AA6] font-semibold text-lg">
            Ты заслуживаешь жить иначе. И это возможно.
          </p>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section id="benefits" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#FAF7F5] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B07A8A]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B07A8A]/10 ring-1 ring-[#B07A8A]/25 rounded-full mb-5">
              <Icon name="Sparkles" size={14} className="text-[#8C5C6B]" />
              <span className="text-sm font-medium text-[#8C5C6B]">Конкретные результаты</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#2C2320] mb-4">
              Что ты получишь
              <span className="text-[#B07A8A]"> в клубе</span>
            </h2>
            <p className="text-base sm:text-lg text-[#7A6A64] max-w-xl mx-auto">
              Не абстрактный «личностный рост» — а конкретные изменения с измеримым результатом
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white ring-1 ring-[#B07A8A]/15 p-6 sm:p-8 hover:ring-[#B07A8A]/40 hover:shadow-lg hover:shadow-[#B07A8A]/8 transition-all"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#B07A8A]/10 ring-1 ring-[#B07A8A]/25 group-hover:bg-[#B07A8A]/18 transition-colors">
                    <Icon name={b.icon} size={20} className="text-[#8C5C6B]" />
                  </div>
                  <span className="text-xs font-bold text-[#B07A8A] bg-[#B07A8A]/10 px-3 py-1 rounded-full">{b.result}</span>
                </div>
                <h3 className="text-base font-bold mb-2 text-[#2C2320] leading-snug">{b.title}</h3>
                <p className="text-[#7A6A64] leading-relaxed text-sm">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              size="lg"
              className="bg-[#B07A8A] hover:bg-[#8C5C6B] text-white rounded-full px-10 font-semibold shadow-xl shadow-[#B07A8A]/25 min-h-[52px]"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Хочу эти результаты — записаться
            </Button>
          </div>
        </div>
      </section>

      {/* ── AUTHOR ── */}
      <section id="author" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#F3EEE9] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#B07A8A]/8 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Фото */}
            <div className="relative order-1 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B07A8A]/15 to-transparent rounded-3xl transform -rotate-2" />
              <img
                src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/413ab4b9-44bb-4e99-a81b-79ee338da27d.jpeg"
                alt="Ирина Абрамова"
                className="relative z-10 w-full max-w-xs sm:max-w-sm mx-auto rounded-3xl object-cover shadow-2xl shadow-[#B07A8A]/12"
                style={{ aspectRatio: "2/3", objectPosition: "center top" }}
              />
              <div className="absolute z-20 -top-3 -right-2 sm:-right-4 bg-[#B07A8A] text-white rounded-2xl shadow-xl px-4 py-3">
                <p className="text-xs font-medium opacity-80 mb-0.5">Опыт</p>
                <p className="text-xl font-black">10+ лет</p>
              </div>
            </div>

            {/* Текст */}
            <div className="order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white ring-1 ring-[#B07A8A]/25 rounded-full mb-6">
                <Icon name="Quote" size={14} className="text-[#B07A8A]" />
                <span className="text-sm font-medium text-[#8C5C6B]">Твой проводник</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2C2320] mb-4 leading-tight">
                Абрамова Ирина
                <span className="block text-[#B07A8A] text-xl sm:text-2xl font-light mt-1">Психолог · Энерготерапевт · Расстановщик</span>
              </h2>

              <blockquote className="text-lg sm:text-xl md:text-2xl font-light text-[#2C2320] leading-relaxed mb-6 text-pretty border-l-4 border-[#B07A8A] pl-5">
                "Я знаю, каково это — жить в постоянном стрессе и не узнавать себя в зеркале. Я прошла этот путь сама и помогла пройти 200+ женщинам."
              </blockquote>

              <div className="space-y-3 mb-8">
                {[
                  "Практикующий психолог с 10-летним опытом",
                  "Автор методики работы со стрессом и женской энергией",
                  "Провела 500+ индивидуальных консультаций",
                  "Спикер женских форумов и ретритов",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#B07A8A] flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={11} className="text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-[#7A6A64]">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-[#7A6A64] leading-relaxed text-sm sm:text-base">
                Я не просто психолог — я женщина, которая однажды решила жить по-другому. И теперь хочу помочь тебе сделать то же самое — быстро, практично, с любовью к себе.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY ── */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#FAF7F5] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B07A8A]/10 ring-1 ring-[#B07A8A]/25 rounded-full mb-6">
                <Icon name="Heart" size={14} className="text-[#8C5C6B]" />
                <span className="text-sm font-medium text-[#8C5C6B]">Сообщество</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#2C2320] mb-5 leading-tight">
                Ты не одна —<br />
                <span className="text-[#B07A8A]">мы вместе</span>
              </h2>
              <p className="text-base sm:text-lg text-[#7A6A64] leading-relaxed mb-7">
                200+ женщин уже в клубе. Они поддерживают, понимают без слов и радуются твоим победам как своим. Здесь не бросают начатое — доводят до конца с любовью.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { icon: "Video", text: "Живые практики 2–3 раза в неделю (онлайн)" },
                  { icon: "MessageCircle", text: "Закрытый чат поддержки 24/7" },
                  { icon: "Trophy", text: "Ежемесячный групповой челлендж с призами" },
                  { icon: "BookOpen", text: "Библиотека материалов только для участниц" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#B07A8A]/12 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={15} className="text-[#B07A8A]" />
                    </div>
                    <span className="text-sm sm:text-base text-[#7A6A64]">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-[#B07A8A] hover:bg-[#8C5C6B] text-white rounded-full px-10 font-semibold shadow-lg shadow-[#B07A8A]/25 min-h-[52px] w-full sm:w-auto"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Стать участницей клуба
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B07A8A]/12 to-transparent rounded-3xl transform rotate-2" />
              <img
                src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/96ea61d4-81d8-4d37-8125-9586a57aa74b.jpeg"
                alt="Участницы клуба вместе"
                className="relative z-10 w-full rounded-3xl object-cover shadow-2xl shadow-[#B07A8A]/12"
                style={{ aspectRatio: "3/4", objectPosition: "center 20%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRANSFORMATIONS ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#1A1210]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 ring-1 ring-white/20 rounded-full mb-5">
              <Icon name="Sparkles" size={14} className="text-[#C49AA6]" />
              <span className="text-sm font-medium text-[#C49AA6]">Внешние изменения</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Они изменились<br />
              <span className="text-[#C49AA6]">снаружи и внутри</span>
            </h2>
            <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto">
              Ушли отёки, снизился вес — а главное появился блеск в глазах
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {[
              {
                img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/3c7d2f5f-13df-459e-b52a-35ae46adebed.png",
                tag: "До и после",
                fit: "contain" as const,
                quote: "«Нашла себя. Впервые за годы посмотрела в зеркало и улыбнулась»",
                changes: ["Ушли отёки с лица", "Снизился вес", "Блеск в глазах вернулся"],
              },
              {
                img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/233a25f0-fc70-4be8-93e0-b7a38e55d036.jpeg",
                tag: "Через месяц",
                fit: "cover" as const,
                quote: "«Полюбила себя. Перестала извиняться за то, что существую»",
                changes: ["Кожа стала свежее", "Ушла отёчность", "Улыбка вернулась"],
              },
              {
                img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/aa178efb-2515-4c3d-8305-11afb8f10626.jpeg",
                tag: "До и после",
                fit: "cover" as const,
                quote: "«Перестала заедать стресс. Еда перестала быть единственной радостью»",
                changes: ["Снизился вес без диет", "Разгладились морщинки", "Глаза горят — жизнь нравится"],
              },
              {
                img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/5982c162-4fe9-4db8-a0fd-bc1b43358d6a.jpeg",
                tag: "Результаты участниц",
                fit: "cover" as const,
                quote: "«Победила себя. Пришла с другим запросом — а постройнела сама собой»",
                changes: ["Постройнели без запроса на вес", "Ушли отёки", "Победа над собой"],
              },
            ].map((p, i) => (
              <div key={i} className="flex flex-col gap-3 group">
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl group-hover:ring-[#B07A8A]/50 transition-all bg-black">
                  <img
                    src={p.img}
                    alt={p.tag}
                    className={`w-full aspect-[3/4] ${p.fit === "contain" ? "object-contain" : "object-cover object-top"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#B07A8A]/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {p.tag}
                    </span>
                  </div>
                </div>
                <p className="text-[#C49AA6] text-sm font-medium leading-snug px-1 italic">
                  {p.quote}
                </p>
                <div className="flex flex-col gap-1.5 px-1">
                  {p.changes.map((c, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C49AA6] shrink-0" />
                      <span className="text-white/60 text-xs">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#2C2320]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 ring-1 ring-white/20 rounded-full mb-5">
              <Icon name="Star" size={14} className="text-[#C49AA6]" />
              <span className="text-sm font-medium text-[#C49AA6]">Истории участниц</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Они уже изменили<br />
              <span className="text-[#C49AA6]">свою жизнь</span>
            </h2>
            <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto">
              Реальные истории участниц клуба — без фотошопа и придумок
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="group flex flex-col gap-3">
                {/* Лейбл */}
                <div className="inline-flex items-center gap-2 self-start bg-[#B07A8A]/20 ring-1 ring-[#B07A8A]/30 rounded-full px-3 py-1.5">
                  <Icon name="MessageCircle" size={12} className="text-[#C49AA6]" />
                  <span className="text-xs font-semibold text-[#C49AA6]">{r.label}</span>
                </div>
                {/* Скриншот переписки */}
                <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-xl group-hover:ring-[#B07A8A]/40 transition-all">
                  <img
                    src={r.img}
                    alt={r.label}
                    className="w-full object-cover object-top"
                    style={{ maxHeight: "340px" }}
                  />
                </div>
                {/* Цитата под скриншотом */}
                <p className="text-white/50 text-xs leading-relaxed px-1 italic line-clamp-2">
                  {r.quote}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              className="bg-[#B07A8A] hover:bg-[#8C5C6B] text-white rounded-full px-10 font-semibold shadow-xl shadow-[#B07A8A]/25 min-h-[52px]"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Хочу такой же результат
            </Button>
          </div>
        </div>
      </section>

      {/* ── OBJECTIONS ── */}
      <section id="objections" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#F3EEE9]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B07A8A]/10 ring-1 ring-[#B07A8A]/25 rounded-full mb-5">
              <Icon name="ShieldCheck" size={14} className="text-[#8C5C6B]" />
              <span className="text-sm font-medium text-[#8C5C6B]">Отвечаем честно</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#2C2320] mb-4">
              «Но у меня есть сомнения...»
            </h2>
            <p className="text-base sm:text-lg text-[#7A6A64]">Мы слышали это раньше — и готовы ответить</p>
          </div>

          <div className="space-y-4">
            {objections.map((obj, i) => (
              <div key={i} className="rounded-2xl bg-white ring-1 ring-[#B07A8A]/15 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#B07A8A]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={obj.icon} size={18} className="text-[#B07A8A]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#2C2320] mb-3">{obj.title}</h3>
                    <p className="text-sm sm:text-base text-[#7A6A64] leading-relaxed">{obj.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-[#B07A8A] rounded-2xl text-center">
            <p className="text-white font-bold text-lg mb-2">Гарантия результата</p>
            <p className="text-white/80 text-sm mb-5">Если через 7 дней ты не почувствуешь никакого изменения — вернём деньги без вопросов</p>
            <Button
              className="bg-white hover:bg-[#F3EEE9] text-[#8C5C6B] rounded-full px-8 font-bold min-h-[48px]"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Попробовать с гарантией
            </Button>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#FAF7F5]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#2C2320] mb-4">
              Частые вопросы
            </h2>
            <p className="text-base sm:text-lg text-[#7A6A64]">Всё, что важно знать перед вступлением</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-2xl bg-white ring-1 ring-[#B07A8A]/15 overflow-hidden shadow-sm hover:ring-[#B07A8A]/35 transition-all">
                <button
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-5 text-left hover:bg-[#FAF7F5] transition-colors min-h-[64px]"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-sm sm:text-base font-semibold pr-4 text-[#2C2320]">{faq.question}</h3>
                  <div className="w-8 h-8 rounded-full bg-[#B07A8A]/10 flex items-center justify-center flex-shrink-0">
                    {openFaq === index
                      ? <Minus size={15} className="text-[#B07A8A]" />
                      : <Plus size={15} className="text-[#B07A8A]" />
                    }
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-5 sm:px-6 pb-5">
                    <p className="text-sm sm:text-base text-[#7A6A64] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA / CONTACT ── */}
      <section id="contact" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#F3EEE9] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#B07A8A]/8 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B07A8A]/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B07A8A]/12 ring-1 ring-[#B07A8A]/30 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-[#B07A8A] animate-pulse" />
              <span className="text-sm font-medium text-[#8C5C6B]">Мест осталось мало</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#2C2320] mb-4 leading-tight">
              Начни жить <span className="text-[#B07A8A]">для себя</span><br />
              прямо сейчас
            </h2>
            <p className="text-base sm:text-xl text-[#7A6A64] max-w-lg mx-auto">
              Оставь заявку — я свяжусь с тобой в течение 2 часов и расскажу всё про ближайший старт
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Форма */}
            <div className="bg-white rounded-2xl ring-1 ring-[#B07A8A]/15 p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-5 text-[#2C2320]">Занять место в клубе</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#2C2320]">Имя</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#B07A8A]/20 focus:border-[#B07A8A] focus:ring-0 outline-none bg-[#FAF7F5] text-[#2C2320] transition-colors placeholder:text-[#7A6A64]/50 text-base"
                    placeholder="Как тебя зовут?"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-[#2C2320]">Телефон или WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#B07A8A]/20 focus:border-[#B07A8A] focus:ring-0 outline-none bg-[#FAF7F5] text-[#2C2320] transition-colors placeholder:text-[#7A6A64]/50 text-base"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#2C2320]">Что хочешь изменить в жизни?</label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#B07A8A]/20 focus:border-[#B07A8A] focus:ring-0 outline-none resize-none bg-[#FAF7F5] text-[#2C2320] transition-colors placeholder:text-[#7A6A64]/50 text-base"
                    placeholder="Напиши коротко — от чего хочешь избавиться и к чему прийти"
                  />
                </div>
                <Button className="w-full bg-[#B07A8A] hover:bg-[#8C5C6B] text-white rounded-xl font-bold text-base shadow-lg shadow-[#B07A8A]/25 min-h-[52px]">
                  Хочу в клуб — отправить заявку
                </Button>
                <p className="text-xs text-center text-[#7A6A64]/70">Нажимая кнопку, ты соглашаешься на обработку данных. Спама не будет.</p>
              </form>
            </div>

            {/* Правая колонка */}
            <div className="space-y-6">
              <div className="space-y-3">
                {[
                  { icon: "MapPin", text: "Онлайн — из любой точки мира" },
                  { icon: "Calendar", text: "Старт — каждый месяц, мест немного" },
                  { icon: "Users", text: "Камерная группа — максимум внимания" },
                  { icon: "ShieldCheck", text: "Гарантия результата за 7 дней" },
                  { icon: "Phone", text: "+7 951 140-83-63" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#7A6A64]">
                    <div className="w-9 h-9 rounded-full bg-[#B07A8A]/12 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={15} className="text-[#B07A8A]" />
                    </div>
                    <span className="text-sm sm:text-base">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Карточка автора */}
              <div className="rounded-2xl bg-white ring-1 ring-[#B07A8A]/15 overflow-hidden shadow-sm">
                <div className="w-full h-56 sm:h-64 overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/55508f1c-2bfb-4ec9-9c75-73c535e43541.jpeg"
                    alt="Ирина Абрамова"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 15%" }}
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-base font-bold text-[#2C2320]">Абрамова Ирина</h4>
                  <p className="text-[#7A6A64] text-xs mb-4">Психолог · Энерготерапевт · Расстановщик</p>
                  <div className="flex gap-2">
                    <a href="tel:+79511408363" className="flex-1">
                      <Button size="sm" className="w-full bg-[#B07A8A] hover:bg-[#8C5C6B] text-white rounded-lg flex items-center justify-center gap-1.5 text-xs min-h-[40px]">
                        <Icon name="Phone" size={13} />
                        Позвонить
                      </Button>
                    </a>
                    <a href="https://vk.ru/abramova_garmony" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" className="w-full bg-[#0077FF] hover:bg-[#0066dd] text-white rounded-lg flex items-center justify-center gap-1.5 text-xs min-h-[40px]">
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
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative py-10 px-4 sm:px-6 bg-[#2C2320] text-white/60 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Icon name="Brain" size={18} className="text-[#B07A8A]" />
            <span className="font-black text-white tracking-wide">НЕЙРОФИТНЕС</span>
          </div>
          <p className="text-sm text-white/40 mb-1">Онлайн-клуб для женщин · Абрамова Ирина</p>
          <p className="text-sm">
            <a href="tel:+79511408363" className="hover:text-[#C49AA6] transition-colors">+7 951 140-83-63</a>
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <a
              href="https://vk.ru/abramova_garmony"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-[#0077FF]/30 rounded-full transition-colors text-sm text-white/60 hover:text-white"
            >
              <Icon name="Users" size={14} className="text-[#0077FF]" />
              ВКонтакте
            </a>
          </div>
          <p className="text-xs text-white/25 mt-5">© 2025 НЕЙРОФИТНЕС · Абрамова Ирина</p>
        </div>
      </footer>
    </div>
  )
}

export default Index