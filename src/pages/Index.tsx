import { Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

// Палитра — DARK LUXE
// --bg-main:    #0D0A0B   — глубокий чёрный
// --bg-alt:     #100C0D   — графит
// --accent:     #C4748A   — пыльная роза
// --accent-dk:  #8B1A4A   — глубокий бордо
// --accent-lt:  #E0A0B0   — нежный розовый
// --text-main:  #FFFFFF   — белый
// --text-muted: rgba(255,255,255,0.6)

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
    desc: "500+ женщин, которые тебя поймут без осуждения. Закрытое сообщество с живыми встречами, поддержкой 24/7 и общими победами.",
    result: "Сообщество 500+",
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
]

const tariffs = [
  {
    name: "Стандарт",
    price: "15 590 ₽",
    accent: false,
    features: [
      "Участие в клубе 30 дней",
      "Все живые практики и записи",
      "Закрытый чат поддержки",
    ],
  },
  {
    name: "Стандарт+",
    price: "22 590 ₽",
    accent: false,
    features: [
      "Участие в клубе 30 дней",
      "Участие заместителем на расстановках — клубных и клиентских",
      "Без ограничений по количеству участий за месяц",
    ],
  },
  {
    name: "VIP",
    price: "35 000 ₽",
    accent: true,
    features: [
      "Личная расстановка",
      "Участие в клубе 30 дней",
      "Участие заместителем без ограничений",
    ],
  },
  {
    name: "Super VIP",
    price: "44 500 ₽",
    accent: false,
    features: [
      "Участие в клубе 30 дней",
      "Участие заместителем без ограничений",
      "2 расстановки",
      "Моя обратная связь в личных сообщениях весь месяц — разбираем любые ситуации",
    ],
  },
  {
    name: "Super VIP с личным ведением",
    price: "40 000 ₽",
    accent: true,
    features: [
      "Участие в клубе 30 дней",
      "Участие заместителем без ограничений",
      "2 расстановки",
      "2 часовые встречи лично со мной",
      "Личные сообщения 24/7 — отвечаю на любые вопросы",
    ],
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
        "Это формат онлайн в удобное для тебя время — ты можешь читать и слушать когда захочешь. Встречи 1–2 раза в неделю в комфортном режиме для всех. Если не успеваешь — всё доступно в записи.",
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
    <div className="min-h-screen bg-[#0D0A0B] text-[#F5EEE8]">

      {/* ── HERO ── */}
      <section className="relative min-h-screen overflow-hidden bg-[#0D0A0B]">
        {/* Фон — фото автора */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/7d93cc5d-27e5-4278-b67d-60d5765e2f6c.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0A0B]/60 via-[#0D0A0B]/40 to-[#0D0A0B]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B1A4A]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C4748A]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between px-4 sm:px-6 md:px-12 py-5">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Brain" size={16} className="text-[#C4748A]" />
            <span className="font-semibold text-white text-sm tracking-widest uppercase" style={{fontFamily:"'Raleway',sans-serif"}}>Нейрофитнес</span>
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
                className="px-4 py-2 bg-white/5 ring-1 ring-white/15 backdrop-blur rounded-full hover:bg-white/10 transition-colors text-sm text-white/80"
              >
                {item.label}
              </button>
            ))}
          </div>

          <Button
            className="bg-[#C4748A] hover:bg-[#A35570] text-white rounded-full px-5 sm:px-6 text-sm font-semibold shadow-lg shadow-[#C4748A]/30 min-h-[44px]"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Вступить в клуб
          </Button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-80px)] px-4 sm:px-6 md:px-12 pb-10 pt-4">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C4748A]/15 ring-1 ring-[#C4748A]/40 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C4748A] animate-pulse" />
              <span className="text-sm font-medium text-[#E0A0B0] tracking-wide">Онлайн-клуб для женщин 25–45</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 text-white leading-none" style={{fontFamily:"'Playfair Display',serif"}}>
              НЕЙРО
              <span className="text-[#C4748A]">ФИТНЕС</span>
            </h1>

            <p className="text-xl sm:text-2xl font-light text-white/90 mb-3 leading-snug" style={{fontFamily:"'Playfair Display',serif"}}>
              Перестань терпеть стресс.
              <br />
              <span className="text-[#E0A0B0] italic">Начни жить для себя.</span>
            </p>

            <p className="text-base sm:text-lg text-white/60 mb-5 leading-relaxed">
              За 30 дней ты избавишься от хронической тревоги, раскроешь женственность и наконец полюбишь себя — не когда похудеешь, а прямо сейчас.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["БЕЗ ОПЫТА", "ОНЛАЙН", "РЕЗУЛЬТАТ ЗА 7 ДНЕЙ"].map((word) => (
                <span
                  key={word}
                  className="px-4 py-1.5 bg-white/5 ring-1 ring-[#C4748A]/50 text-[#E0A0B0] font-semibold text-xs rounded-full tracking-widest"
                >
                  {word}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-[#C4748A] hover:bg-[#A35570] text-white rounded-full px-8 py-4 text-base font-semibold shadow-xl shadow-[#C4748A]/30 min-h-[52px] w-full sm:w-auto"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Хочу в клуб — занять место
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border border-white/20 text-white/80 hover:bg-white/5 rounded-full px-8 py-4 text-base bg-transparent min-h-[52px] w-full sm:w-auto"
                onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
              >
                Узнать подробнее
              </Button>
            </div>

            {/* Social proof mini */}
            <div className="flex items-center gap-3 mt-6">
              <div className="flex -space-x-2">
                {["#C4748A", "#8B1A4A", "#E0A0B0", "#A35570"].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white/20" style={{ backgroundColor: c }} />
                ))}
              </div>
              <p className="text-sm text-white/60">
                <span className="font-bold text-white">500+ женщин</span> уже прошли проекты
              </p>
            </div>
          </div>

          {/* Right — фото в монашке */}
          <div className="relative flex justify-center mt-6 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <div className="absolute -inset-2 bg-gradient-to-br from-[#C4748A]/30 to-[#8B1A4A]/10 rounded-3xl blur-xl" />
              <img
                src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/96ba750f-8786-42a3-8c3b-12f7d68e9d5c.jpeg"
                alt="Снимаем все запреты"
                className="relative z-10 w-full rounded-3xl object-cover shadow-2xl shadow-[#8B1A4A]/40 ring-1 ring-white/10"
                style={{ aspectRatio: "3/4", objectPosition: "center 20%" }}
              />
              {/* Floating badge */}
              <div className="absolute z-20 -bottom-4 -left-2 sm:-left-4 bg-[#0D0A0B] rounded-2xl shadow-2xl px-4 py-3 ring-1 ring-[#C4748A]/40">
                <p className="text-xs text-white/50 mb-1">Прошли проекты</p>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {["#C4748A", "#8B1A4A", "#E0A0B0"].map((c, i) => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0D0A0B]" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                  <span className="font-bold text-white text-sm">500+ женщин</span>
                </div>
              </div>
              {/* Top badge */}
              <div className="absolute z-20 -top-3 -right-2 sm:-right-4 bg-[#C4748A] text-white rounded-xl px-3 py-2 text-center shadow-lg">
                <p className="text-xs font-medium opacity-90">Результат</p>
                <p className="text-sm font-black">за 7 дней</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── МАНИФЕСТ: СНИМАЕМ ВСЕ ЗАПРЕТЫ ── */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#0D0A0B] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#8B1A4A]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C4748A]/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#8B1A4A]/20 ring-1 ring-[#C4748A]/40 rounded-full mb-6">
              <Icon name="Flame" size={14} className="text-[#E0A0B0]" />
              <span className="text-xs font-bold tracking-[0.3em] text-[#E0A0B0] uppercase">Манифест</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.05] mb-5" style={{fontFamily:"'Playfair Display',serif"}}>
              Снимаем<br />
              <span className="italic text-[#C4748A]">все запреты</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Принятие всех своих сторон — от монашки до невероятной дерзкой красотки. От нежной, ласковой, наслаждающейся, всё любящей — до энергичной ракеты.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/96ba750f-8786-42a3-8c3b-12f7d68e9d5c.jpeg",
                label: "Тайна",
                desc: "Дерзкая, мистическая, недосягаемая",
              },
              {
                img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/0db77fe1-89f9-4bac-89ae-b51b42927fec.jpeg",
                label: "Сила",
                desc: "Уверенная, спокойная, в своей энергии",
              },
              {
                img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/7d93cc5d-27e5-4278-b67d-60d5765e2f6c.jpeg",
                label: "Чувственность",
                desc: "Нежная, наслаждающаяся, любящая",
              },
            ].map((c, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden ring-1 ring-white/10 hover:ring-[#C4748A]/50 transition-all">
                <img src={c.img} alt={c.label} className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A0B] via-[#0D0A0B]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-bold tracking-[0.3em] text-[#C4748A] uppercase mb-2">{c.label}</p>
                  <p className="text-white text-lg leading-snug" style={{fontFamily:"'Playfair Display',serif"}}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ДЕРЗКИЙ БЛОК 1: Серьёзно? ── */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 overflow-hidden bg-[#0D0A0B]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/0db77fe1-89f9-4bac-89ae-b51b42927fec.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0A0B] via-[#0D0A0B]/80 to-[#0D0A0B]/40" />
        <div className="relative max-w-3xl">
          <p className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-relaxed mb-6" style={{fontFamily:"'Playfair Display',serif"}}>
            <span className="italic text-[#C4748A]">Серьёзно?</span> Опять утро, кофе, чтобы просто открыть глаза? Опять заедаешь стресс сладким? Опять день сурка?
          </p>
          <p className="text-lg sm:text-xl text-white/80 mb-6 leading-relaxed">
            Ты не для этого рождена. Твоё тело способно на <span className="text-[#E0A0B0] font-semibold">вау-результаты</span> без химии и БАДов. Твой мозг способен на прорыв без допинга.
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-white" style={{fontFamily:"'Playfair Display',serif"}}>
            Хватит это терпеть. <span className="text-[#C4748A] italic">Смотри дальше.</span>
          </p>
        </div>
      </section>

      {/* ── ДЕРЗКИЙ БЛОК 2: Главная ложь (с деньгами) ── */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 overflow-hidden bg-[#0D0A0B]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/files/4b91ae2b-fa18-46db-93e9-dac27c4c7d6a.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0D0A0B] via-[#0D0A0B]/85 to-[#0D0A0B]/50" />
        <div className="relative max-w-3xl ml-auto text-right">
          <p className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-relaxed mb-6" style={{fontFamily:"'Playfair Display',serif"}}>
            Знаешь, в чём <span className="italic text-[#C4748A]">главная ложь?</span>
          </p>
          <p className="text-lg sm:text-xl text-white/80 mb-6 leading-relaxed">
            В том, что тебе нужен кто-то извне. Священник, который только может правильно молиться за тебя. Фармацевт, который продаст «счастье» в банке.
          </p>
          <p className="text-xl sm:text-2xl text-white/90 mb-6 leading-relaxed" style={{fontFamily:"'Playfair Display',serif"}}>
            Ответы — <span className="text-[#E0A0B0] italic">внутри тебя.</span> Всегда были. Просто твой мозг зашумлён. Твоё тело забито ненужной информацией.
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-white" style={{fontFamily:"'Playfair Display',serif"}}>
            Как это исправить? <span className="text-[#C4748A] italic">Есть система.</span>
          </p>
        </div>
      </section>

      {/* ── ДЕРЗКИЙ БЛОК 3: Представь ── */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 overflow-hidden bg-gradient-to-br from-[#1A0F12] via-[#0D0A0B] to-[#1A0F12]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C4748A]/15 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#C4748A]/15 ring-1 ring-[#C4748A]/40 rounded-full mb-8">
            <Icon name="Sparkles" size={14} className="text-[#E0A0B0]" />
            <span className="text-xs font-bold tracking-[0.3em] text-[#E0A0B0] uppercase">Представь</span>
          </div>
          <p className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-relaxed mb-6" style={{fontFamily:"'Playfair Display',serif"}}>
            Ты просыпаешься <span className="italic text-[#C4748A]">бодрой.</span> Без кофе. Смотришь в зеркало и видишь лёгкость. Ушли отёки.
          </p>
          <p className="text-xl sm:text-2xl text-white/80 mb-6 leading-relaxed">
            В голове — <span className="text-[#E0A0B0] font-semibold">кристальная ясность.</span> Ты видишь возможности, а не проблемы. Клиенты сами находят тебя, потому что чувствуют твою энергию.
          </p>
          <p className="text-xl sm:text-2xl text-white/80 mb-8 leading-relaxed">
            Ты идёшь к целям не из «надо», а из <span className="text-[#C4748A] italic font-semibold">«хочу»</span>.
          </p>
          <p className="text-3xl sm:text-4xl font-black text-white" style={{fontFamily:"'Playfair Display',serif"}}>
            Это не магия. Это <span className="text-[#C4748A]">нейрофитнес.</span>
          </p>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-[#100C0D]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 leading-tight" style={{fontFamily:"'Playfair Display',serif"}}>
            Узнаёшь себя?
          </h2>
          <p className="text-white/50 mb-10 text-base sm:text-lg">Если хотя бы 3 пункта — это про тебя, ты попала по адресу</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {[
              "Засыпаешь с тревогой, просыпаешься без сил",
              "Смотришь в зеркало и не принимаешь себя",
              "Всё делаешь для других, но не для себя",
              "Чувствуешь себя «не женственной» или «невидимой»",
              "Живёшь по инерции — без радости и смысла",
              "Хочешь перемен, но не знаешь с чего начать",
            ].map((pain, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/4 ring-1 ring-white/8 rounded-2xl px-4 py-4">
                <div className="w-5 h-5 rounded-full bg-[#C4748A]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="Check" size={11} className="text-[#E0A0B0]" />
                </div>
                <span className="text-white/75 text-sm sm:text-base">{pain}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[#E0A0B0] font-semibold text-lg" style={{fontFamily:"'Playfair Display',serif"}}>
            Ты заслуживаешь жить иначе. И это возможно.
          </p>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section id="benefits" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0D0A0B] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B1A4A]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C4748A]/10 ring-1 ring-[#C4748A]/25 rounded-full mb-5">
              <Icon name="Sparkles" size={14} className="text-[#E0A0B0]" />
              <span className="text-sm font-medium text-[#E0A0B0]">Конкретные результаты</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4" style={{fontFamily:"'Playfair Display',serif"}}>
              Что ты получишь
              <span className="text-[#C4748A]"> в клубе</span>
            </h2>
            <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto">
              Не абстрактный «личностный рост» — а конкретные изменения с измеримым результатом
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white/4 ring-1 ring-white/10 p-6 sm:p-8 hover:ring-[#C4748A]/40 hover:bg-white/6 transition-all"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#C4748A]/15 ring-1 ring-[#C4748A]/25">
                    <Icon name={b.icon} size={20} className="text-[#E0A0B0]" />
                  </div>
                  <span className="text-xs font-bold text-[#C4748A] bg-[#C4748A]/10 px-3 py-1 rounded-full">{b.result}</span>
                </div>
                <h3 className="text-base font-bold mb-2 text-white leading-snug" style={{fontFamily:"'Playfair Display',serif"}}>{b.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              size="lg"
              className="bg-[#C4748A] hover:bg-[#A35570] text-white rounded-full px-10 font-semibold shadow-xl shadow-[#C4748A]/25 min-h-[52px]"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Хочу эти результаты — записаться
            </Button>
          </div>
        </div>
      </section>

      {/* ── AUTHOR ── */}
      <section id="author" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#100C0D] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#8B1A4A]/12 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Фото на розовом */}
            <div className="relative order-1 lg:order-1">
              <div className="absolute -inset-3 bg-gradient-to-br from-[#C4748A]/30 to-transparent rounded-3xl blur-2xl" />
              <img
                src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/0db77fe1-89f9-4bac-89ae-b51b42927fec.jpeg"
                alt="Ирина Абрамова"
                className="relative z-10 w-full max-w-xs sm:max-w-sm mx-auto rounded-3xl object-cover shadow-2xl shadow-[#C4748A]/30 ring-1 ring-white/10"
                style={{ aspectRatio: "3/4", objectPosition: "center top" }}
              />
              <div className="absolute z-20 -top-3 -right-2 sm:-right-4 bg-[#C4748A] text-white rounded-2xl shadow-xl px-4 py-3">
                <p className="text-xs font-medium opacity-80 mb-0.5">Опыт</p>
                <p className="text-xl font-black">5+ лет</p>
              </div>
            </div>

            {/* Текст */}
            <div className="order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 leading-tight" style={{fontFamily:"'Playfair Display',serif"}}>
                Абрамова Ирина
                <span className="block text-[#C4748A] text-xl sm:text-2xl font-light mt-1 italic">Психолог · Энерготерапевт · Расстановщик</span>
              </h2>

              <blockquote className="text-lg sm:text-xl font-light text-white/80 leading-relaxed mb-6 border-l-4 border-[#C4748A] pl-5 italic" style={{fontFamily:"'Playfair Display',serif"}}>
                "Я знаю, каково это — жить в постоянном стрессе и не узнавать себя в зеркале. Я прошла этот путь сама и помогла пройти 2500+ женщинам."
              </blockquote>

              <div className="space-y-3 mb-8">
                {[
                  "Практикующий психолог более 5 лет",
                  "Автор методики работы со стрессом и женской энергией",
                  "Провела более 2500 консультаций",
                  "Спикер женских форумов и ретритов",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#C4748A] flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={11} className="text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-white/60">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-white/50 leading-relaxed text-sm sm:text-base">
                Я не просто психолог — я женщина, которая однажды решила жить по-другому. И теперь хочу помочь тебе сделать то же самое — быстро, практично, с любовью к себе.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY ── */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0D0A0B] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C4748A]/10 ring-1 ring-[#C4748A]/25 rounded-full mb-6">
                <Icon name="Heart" size={14} className="text-[#E0A0B0]" />
                <span className="text-sm font-medium text-[#E0A0B0]">Сообщество</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight" style={{fontFamily:"'Playfair Display',serif"}}>
                Ты не одна —<br />
                <span className="text-[#C4748A]">мы вместе</span>
              </h2>
              <p className="text-base sm:text-lg text-white/55 leading-relaxed mb-7">
                Более 500 женщин уже прошли проекты. Они поддерживают, понимают без слов и радуются твоим победам как своим. Здесь не бросают начатое — доводят до конца с любовью.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { icon: "Video", text: "Живые практики 2–3 раза в неделю (онлайн)" },
                  { icon: "MessageCircle", text: "Закрытый чат поддержки 24/7" },
                  { icon: "Trophy", text: "Ежемесячный групповой челлендж с призами" },
                  { icon: "BookOpen", text: "Библиотека материалов только для участниц" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#C4748A]/15 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={15} className="text-[#C4748A]" />
                    </div>
                    <span className="text-sm sm:text-base text-white/65">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-[#C4748A] hover:bg-[#A35570] text-white rounded-full px-10 font-semibold shadow-lg shadow-[#C4748A]/25 min-h-[52px] w-full sm:w-auto"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Стать участницей клуба
              </Button>
            </div>

            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/96ea61d4-81d8-4d37-8125-9586a57aa74b.jpeg"
                alt="Участницы клуба вместе"
                className="relative z-10 w-full rounded-3xl object-cover shadow-2xl shadow-[#C4748A]/15"
                style={{ aspectRatio: "3/4", objectPosition: "center 20%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRANSFORMATIONS ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#100C0D]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C4748A]/15 ring-1 ring-[#C4748A]/30 rounded-full mb-5">
              <Icon name="Sparkles" size={14} className="text-[#E0A0B0]" />
              <span className="text-sm font-medium text-[#E0A0B0]">Внешние изменения</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight" style={{fontFamily:"'Playfair Display',serif"}}>
              Они изменились<br />
              <span className="italic text-[#C4748A]">снаружи и внутри</span>
            </h2>
            <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto">
              Ушли отёки, снизился вес — а главное появился блеск в глазах
            </p>
          </div>

          {/* Личная трансформация автора */}
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1A0F12] to-[#0D0A0B] ring-1 ring-[#C4748A]/30 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/96ea61d4-81d8-4d37-8125-9586a57aa74b.jpeg"
                alt="Я 4 года назад и сейчас"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-[#C4748A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Моя история</span>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-[#E0A0B0] uppercase mb-3">Я 4 года назад</p>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight" style={{fontFamily:"'Playfair Display',serif"}}>
                Я была <span className="italic text-[#C4748A]">такой же,</span> как и ты
              </h3>
              <p className="text-white/65 text-base leading-relaxed mb-3">
                Уставшая, отёчная, со взглядом «ничего не радует». Я не верила в себя, в своё тело, в свою жизнь.
              </p>
              <p className="text-white/65 text-base leading-relaxed">
                Сегодня я живая, дерзкая, чувствую себя женщиной. И провела по этому пути уже 2500+ женщин. Ты следующая.
              </p>
            </div>
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
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl group-hover:ring-[#C4748A]/50 transition-all bg-black">
                  <img
                    src={p.img}
                    alt={p.tag}
                    className={`w-full aspect-[3/4] ${p.fit === "contain" ? "object-contain" : "object-cover object-top"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#C4748A]/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {p.tag}
                    </span>
                  </div>
                </div>
                <p className="text-[#E0A0B0] text-sm font-medium leading-snug px-1 italic">
                  {p.quote}
                </p>
                <div className="flex flex-col gap-1.5 px-1">
                  {p.changes.map((c, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C4748A] shrink-0" />
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
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#100C0D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C4748A]/15 ring-1 ring-[#C4748A]/30 rounded-full mb-5">
              <Icon name="Star" size={14} className="text-[#E0A0B0]" />
              <span className="text-sm font-medium text-[#E0A0B0]">Истории участниц</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight" style={{fontFamily:"'Playfair Display',serif"}}>
              Они уже изменили<br />
              <span className="italic text-[#C4748A]">свою жизнь</span>
            </h2>
            <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto">
              Реальные истории участниц клуба — без фотошопа и придумок
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="group flex flex-col gap-3">
                {/* Лейбл */}
                <div className="inline-flex items-center gap-2 self-start bg-[#C4748A]/15 ring-1 ring-[#C4748A]/30 rounded-full px-3 py-1.5">
                  <Icon name="MessageCircle" size={12} className="text-[#E0A0B0]" />
                  <span className="text-xs font-semibold text-[#E0A0B0]">{r.label}</span>
                </div>
                {/* Скриншот переписки */}
                <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-xl group-hover:ring-[#C4748A]/40 transition-all">
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
              className="bg-[#C4748A] hover:bg-[#A35570] text-white rounded-full px-10 font-semibold shadow-xl shadow-[#C4748A]/25 min-h-[52px]"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Хочу такой же результат
            </Button>
          </div>
        </div>
      </section>

      {/* ── ТАРИФЫ ── */}
      <section id="tariffs" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0D0A0B] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#C4748A]/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C4748A]/15 ring-1 ring-[#C4748A]/30 rounded-full mb-5">
              <Icon name="Gem" size={14} className="text-[#E0A0B0]" />
              <span className="text-sm font-medium text-[#E0A0B0]">Тарифы</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight" style={{fontFamily:"'Playfair Display',serif"}}>
              Выбери свой <span className="italic text-[#C4748A]">формат</span>
            </h2>
            <p className="text-base sm:text-lg text-white/55 max-w-xl mx-auto">
              От участия в клубе до личного ведения — каждая найдёт своё
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {tariffs.map((t, i) => (
              <div
                key={i}
                className={`relative flex flex-col rounded-3xl p-7 sm:p-8 ring-1 transition-all hover:-translate-y-1 ${
                  t.accent
                    ? "bg-gradient-to-br from-[#8B1A4A] to-[#A35570] ring-[#C4748A]/60 shadow-2xl shadow-[#C4748A]/30"
                    : "bg-white/4 ring-white/10 hover:ring-[#C4748A]/40"
                }`}
              >
                {t.accent && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#8B1A4A] text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-lg">
                    Хит
                  </div>
                )}
                <div className="mb-5">
                  <h3 className={`text-xl font-bold mb-3 ${t.accent ? "text-white" : "text-white"}`} style={{fontFamily:"'Playfair Display',serif"}}>
                    {t.name}
                  </h3>
                  <div className={`text-3xl sm:text-4xl font-black ${t.accent ? "text-white" : "text-[#C4748A]"}`}>
                    {t.price}
                  </div>
                </div>
                <ul className="space-y-3 mb-6 flex-1">
                  {t.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${t.accent ? "bg-white/20" : "bg-[#C4748A]/20"}`}>
                        <Icon name="Check" size={11} className={t.accent ? "text-white" : "text-[#E0A0B0]"} />
                      </div>
                      <span className={`text-sm leading-relaxed ${t.accent ? "text-white/90" : "text-white/65"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-full font-semibold min-h-[48px] ${
                    t.accent
                      ? "bg-white hover:bg-white/90 text-[#8B1A4A]"
                      : "bg-[#C4748A] hover:bg-[#A35570] text-white"
                  }`}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Выбрать тариф
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OBJECTIONS / Я ЗНАЮ О ЧЁМ ТЫ ДУМАЕШЬ ── */}
      <section id="objections" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#100C0D]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C4748A]/15 ring-1 ring-[#C4748A]/30 rounded-full mb-5">
              <Icon name="ShieldCheck" size={14} className="text-[#E0A0B0]" />
              <span className="text-sm font-medium text-[#E0A0B0]">Отвечаю честно</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4" style={{fontFamily:"'Playfair Display',serif"}}>
              Я знаю, о чём <span className="italic text-[#C4748A]">ты думаешь</span>
            </h2>
            <p className="text-base sm:text-lg text-white/55">Давай честно</p>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: "HelpCircle",
                title: "«А если не поможет?»",
                answer: "Это мой самый востребованный проект. Я собрала там всё, чтобы ты не стояла на месте. Мы работаем с причиной, а не со следствием.",
              },
              {
                icon: "Wallet",
                title: "«Это не окупится...»",
                answer: "Остановка стоит дороже. Подумай, сколько денег и сил ты уже слила на БАДы, кофе и курсы, которые не сработали? Инвестиция в себя — самая выгодная.",
              },
              {
                icon: "Lock",
                title: "«Страшно, что другие узнают обо мне...»",
                answer: "Это твой личный путь. Всё конфиденциально. Мы не будем вывешивать твои скрины без спроса.",
              },
              {
                icon: "Users",
                title: "И главное — не все будут похожи как один ☝️",
                answer: "У каждой своя боль. Тем более участвуя в расстановках заместителем, ты даже можешь не говорить о своих проблемах — всё трансформируется без озвучивания своей боли. Ты работаешь над собой, а не для показухи.",
              },
            ].map((obj, i) => (
              <div key={i} className="rounded-2xl bg-white/4 ring-1 ring-white/10 p-6 sm:p-8 hover:ring-[#C4748A]/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C4748A]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={obj.icon} size={18} className="text-[#C4748A]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-3" style={{fontFamily:"'Playfair Display',serif"}}>{obj.title}</h3>
                    <p className="text-sm sm:text-base text-white/65 leading-relaxed">{obj.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-7 bg-gradient-to-br from-[#8B1A4A] to-[#A35570] rounded-3xl text-center shadow-2xl shadow-[#C4748A]/20">
            <p className="text-white font-bold text-lg mb-2" style={{fontFamily:"'Playfair Display',serif"}}>Гарантия результата</p>
            <p className="text-white/85 text-sm mb-5">Если через 7 дней ты не почувствуешь никакого изменения — вернём деньги без вопросов</p>
            <Button
              className="bg-white hover:bg-white/90 text-[#8B1A4A] rounded-full px-8 font-bold min-h-[48px]"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Попробовать с гарантией
            </Button>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0D0A0B]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{fontFamily:"'Playfair Display',serif"}}>
              Частые <span className="italic text-[#C4748A]">вопросы</span>
            </h2>
            <p className="text-base sm:text-lg text-white/55">Всё, что важно знать перед вступлением</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-2xl bg-white/4 ring-1 ring-white/10 overflow-hidden hover:ring-[#C4748A]/40 transition-all">
                <button
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-5 text-left hover:bg-white/5 transition-colors min-h-[64px]"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-sm sm:text-base font-semibold pr-4 text-white" style={{fontFamily:"'Playfair Display',serif"}}>{faq.question}</h3>
                  <div className="w-8 h-8 rounded-full bg-[#C4748A]/15 flex items-center justify-center flex-shrink-0">
                    {openFaq === index
                      ? <Minus size={15} className="text-[#C4748A]" />
                      : <Plus size={15} className="text-[#C4748A]" />
                    }
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-5 sm:px-6 pb-5">
                    <p className="text-sm sm:text-base text-white/65 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA / CONTACT ── */}
      <section id="contact" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#100C0D] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B1A4A]/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C4748A]/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C4748A]/15 ring-1 ring-[#C4748A]/30 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-[#C4748A] animate-pulse" />
              <span className="text-sm font-medium text-[#E0A0B0]">Мест осталось мало</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight" style={{fontFamily:"'Playfair Display',serif"}}>
              Начни жить <span className="italic text-[#C4748A]">для себя</span><br />
              прямо сейчас
            </h2>
            <p className="text-base sm:text-xl text-white/55 max-w-lg mx-auto">
              Оставь заявку — я свяжусь с тобой в течение 2 часов и расскажу всё про ближайший старт
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Форма */}
            <div className="bg-white/4 rounded-3xl ring-1 ring-white/10 p-6 sm:p-8 backdrop-blur">
              <h3 className="text-xl font-bold mb-5 text-white" style={{fontFamily:"'Playfair Display',serif"}}>Занять место в клубе</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80">Имя</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-white/15 focus:border-[#C4748A] focus:ring-0 outline-none bg-white/5 text-white transition-colors placeholder:text-white/30 text-base"
                    placeholder="Как тебя зовут?"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white/80">Телефон или WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl border border-white/15 focus:border-[#C4748A] focus:ring-0 outline-none bg-white/5 text-white transition-colors placeholder:text-white/30 text-base"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80">Что хочешь изменить в жизни?</label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 focus:border-[#C4748A] focus:ring-0 outline-none resize-none bg-white/5 text-white transition-colors placeholder:text-white/30 text-base"
                    placeholder="Напиши коротко — от чего хочешь избавиться и к чему прийти"
                  />
                </div>
                <Button className="w-full bg-[#C4748A] hover:bg-[#A35570] text-white rounded-xl font-bold text-base shadow-lg shadow-[#C4748A]/30 min-h-[52px]">
                  Хочу в клуб — отправить заявку
                </Button>
                <p className="text-xs text-center text-white/40">Нажимая кнопку, ты соглашаешься на обработку данных. Спама не будет.</p>
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
                  <div key={i} className="flex items-center gap-3 text-white/65">
                    <div className="w-9 h-9 rounded-full bg-[#C4748A]/15 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={15} className="text-[#C4748A]" />
                    </div>
                    <span className="text-sm sm:text-base">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Карточка автора */}
              <div className="rounded-3xl bg-white/4 ring-1 ring-white/10 overflow-hidden">
                <div className="w-full h-56 sm:h-64 overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/0db77fe1-89f9-4bac-89ae-b51b42927fec.jpeg"
                    alt="Ирина Абрамова"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 15%" }}
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-base font-bold text-white" style={{fontFamily:"'Playfair Display',serif"}}>Абрамова Ирина</h4>
                  <p className="text-white/55 text-xs mb-4">Психолог · Энерготерапевт · Расстановщик</p>
                  <div className="flex gap-2">
                    <a href="tel:+79511408363" className="flex-1">
                      <Button size="sm" className="w-full bg-[#C4748A] hover:bg-[#A35570] text-white rounded-lg flex items-center justify-center gap-1.5 text-xs min-h-[40px]">
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
      <footer className="relative py-10 px-4 sm:px-6 bg-[#08060700] bg-black text-white/60 text-center border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Icon name="Brain" size={18} className="text-[#C4748A]" />
            <span className="font-black text-white tracking-widest" style={{fontFamily:"'Playfair Display',serif"}}>НЕЙРОФИТНЕС</span>
          </div>
          <p className="text-sm text-white/40 mb-1">Онлайн-клуб для женщин · Абрамова Ирина</p>
          <p className="text-sm">
            <a href="tel:+79511408363" className="hover:text-[#E0A0B0] transition-colors">+7 951 140-83-63</a>
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