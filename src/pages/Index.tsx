import { Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
}

const benefits = [
  {
    icon: "Users",
    title: "Единомышленники и новые знакомства",
    desc: "Ты найдёшь настоящих подруг и людей на одной волне — тех, кто понимает, поддерживает и вдохновляет.",
  },
  {
    icon: "Target",
    title: "Путь к своей цели",
    desc: "Распутаем твой клубок вместе — ты обретёшь ясность и найдёшь свой путь к тому, чего действительно хочешь.",
  },
  {
    icon: "Shield",
    title: "Проработка страхов и обид",
    desc: "Прорабатываем страхи, обиды и негативные убеждения, которые мешают тебе двигаться вперёд.",
  },
  {
    icon: "TrendingUp",
    title: "Рост дохода",
    desc: "Ты сможешь начать зарабатывать или увеличить свой доход — внутренние блоки уходят, возможности открываются.",
  },
  {
    icon: "Award",
    title: "Ежемесячный челлендж",
    desc: "Выполняем каждый месяц челлендж вместе — доводим начатое до конца с чувством любви и поддержки.",
  },
  {
    icon: "Gift",
    title: "Выгодные условия клуба",
    desc: "Самые выгодные условия на мои другие продукты — только для участников НЕЙРОФИТНЕС.",
  },
]

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Кому подойдёт проект НЕЙРОФИТНЕС?",
      answer:
        "Проект подойдёт любой женщине, которая хочет расти, меняться и жить в радости. Не важно, на каком этапе ты сейчас — важно желание двигаться вперёд.",
    },
    {
      question: "Как проходит участие в клубе?",
      answer:
        "Каждый месяц — новый фокус: проработка убеждений, челлендж, живые встречи и практики. Всё в поддерживающей атмосфере единомышленниц.",
    },
    {
      question: "Нужен ли опыт в психологии или медитации?",
      answer:
        "Никакого опыта не нужно. Мы работаем с каждой участницей индивидуально — программа адаптируется под тебя.",
    },
    {
      question: "Как присоединиться к проекту?",
      answer:
        "Оставь заявку на этой странице или напиши мне напрямую. Я свяжусь с тобой, отвечу на все вопросы и расскажу про ближайший старт.",
    },
    {
      question: "Есть ли скидки для участниц клуба?",
      answer:
        "Да! Участницы НЕЙРОФИТНЕС получают самые выгодные условия на все мои продукты — ретриты, консультации и интенсивы.",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-[#1a2a2a]" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── HERO ── */}
      <section className="relative min-h-screen overflow-hidden bg-[#f0fafa]">
        {/* Декоративные круги */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2ABCB4]/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2ABCB4]/8 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/70 ring-1 ring-[#2ABCB4]/40 backdrop-blur rounded-full">
            <Icon name="Brain" size={17} className="text-[#2ABCB4]" />
            <span className="font-semibold text-[#1a2a2a] text-sm tracking-wide">НЕЙРОФИТНЕС</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {["О проекте", "Что внутри", "Автор", "FAQ"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-white/60 ring-1 ring-[#2ABCB4]/30 backdrop-blur rounded-full hover:bg-white transition-colors text-sm text-[#1a2a2a]"
              >
                {item}
              </a>
            ))}
          </div>

          <Button
            className="bg-[#2ABCB4] hover:bg-[#1fa8a0] text-white rounded-full px-6 font-medium shadow-lg shadow-[#2ABCB4]/30"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Вступить в клуб
          </Button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-96px)] px-6 md:px-12 pb-12">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2ABCB4]/15 ring-1 ring-[#2ABCB4]/40 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-[#2ABCB4] animate-pulse" />
              <span className="text-sm font-medium text-[#0a7a74] tracking-wide">Онлайн-клуб для женщин</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 text-[#1a2a2a] leading-none">
              НЕЙРО
              <span className="text-[#2ABCB4]">ФИТНЕС</span>
            </h1>

            <p className="text-xl md:text-2xl font-light text-[#4a6060] mb-3 leading-snug">
              Это то, что создаст тебе больше.
            </p>

            <p className="text-lg text-[#4a6060] mb-4 leading-relaxed">
              Любовь к себе на всех уровнях:
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {["ТЕЛО", "ДУША", "РАЗУМ"].map((word) => (
                <span
                  key={word}
                  className="px-5 py-2 bg-white ring-2 ring-[#2ABCB4] text-[#0a7a74] font-bold text-sm rounded-full tracking-widest"
                >
                  {word}
                </span>
              ))}
            </div>

            <p className="text-[#4a6060] leading-relaxed mb-10 max-w-lg text-pretty">
              Мой опыт показывает, что страх часто мешал мне двигаться вперёд. Но преодолев страхи и сомнения, я добилась значительных результатов. Я начала смотреть на новые вызовы как на возможности для роста — и хочу помочь тебе сделать то же самое.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#2ABCB4] hover:bg-[#1fa8a0] text-white rounded-full px-10 py-4 text-lg font-semibold shadow-xl shadow-[#2ABCB4]/30"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Вступить в клуб
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#2ABCB4] text-[#0a7a74] hover:bg-[#2ABCB4]/10 rounded-full px-10 py-4 text-lg bg-transparent"
                onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
              >
                Узнать больше
              </Button>
            </div>
          </div>

          {/* Right — фото медитация */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Декоративный фон */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2ABCB4]/20 to-[#2ABCB4]/5 rounded-3xl transform rotate-3" />
              <img
                src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/files/ded87f46-96c4-4ed5-9f7b-478adf539d98.jpg"
                alt="Медитация — женщины в позе лотоса"
                className="relative z-10 w-full rounded-3xl object-cover shadow-2xl shadow-[#2ABCB4]/20"
                style={{ aspectRatio: "1/1" }}
              />
              {/* Floating badge */}
              <div className="absolute z-20 -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-5 py-4 ring-1 ring-[#2ABCB4]/20">
                <p className="text-xs text-[#4a6060] mb-1">Уже в клубе</p>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {["#2ABCB4", "#0a7a74", "#4a9090"].map((c, i) => (
                      <div key={i} className="w-7 h-7 rounded-full border-2 border-white" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                  <span className="font-bold text-[#1a2a2a] text-sm">100+ женщин</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section id="benefits" className="relative py-24 px-6 md:px-12 bg-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2ABCB4]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2ABCB4]/10 ring-1 ring-[#2ABCB4]/30 rounded-full mb-6">
              <Icon name="Sparkles" size={14} className="text-[#0a7a74]" />
              <span className="text-sm font-medium text-[#0a7a74]">Что тебя ждёт в проекте</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#1a2a2a] mb-4">
              В НЕЙРОФИТНЕС
              <span className="text-[#2ABCB4]"> будет</span>
            </h2>
            <p className="text-lg text-[#4a6060] max-w-xl mx-auto">
              Шесть направлений, которые изменят твою жизнь изнутри
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-[#f0fafa] ring-1 ring-[#2ABCB4]/20 p-8 hover:ring-[#2ABCB4]/50 hover:shadow-lg hover:shadow-[#2ABCB4]/10 transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#2ABCB4]/15 ring-1 ring-[#2ABCB4]/30 mb-6 group-hover:bg-[#2ABCB4]/25 transition-colors">
                  <Icon name={b.icon} size={22} className="text-[#0a7a74]" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#1a2a2a]">{b.title}</h3>
                <p className="text-[#4a6060] leading-relaxed text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTHOR QUOTE ── */}
      <section className="relative py-24 px-6 md:px-12 bg-[#f0fafa] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#2ABCB4]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Фото автора */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2ABCB4]/20 to-transparent rounded-3xl transform -rotate-2" />
              <img
                src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/files/41ce2e9f-3fec-49b4-b58a-1894dffc6bf1.jpg"
                alt="Автор проекта"
                className="relative z-10 w-full max-w-md mx-auto rounded-3xl object-cover shadow-2xl shadow-[#2ABCB4]/15"
                style={{ aspectRatio: "1/1" }}
              />
              {/* Badge */}
              <div className="absolute z-20 -top-4 -right-4 bg-[#2ABCB4] text-white rounded-2xl shadow-xl px-5 py-4">
                <p className="text-xs font-medium opacity-80 mb-1">Опыт работы</p>
                <p className="text-2xl font-black">10+ лет</p>
              </div>
            </div>

            {/* Текст */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white ring-1 ring-[#2ABCB4]/30 rounded-full mb-8">
                <Icon name="Quote" size={14} className="text-[#2ABCB4]" />
                <span className="text-sm font-medium text-[#0a7a74]">Слово автора</span>
              </div>

              <blockquote className="text-2xl md:text-3xl font-light text-[#1a2a2a] leading-relaxed mb-8 text-pretty">
                "Страх часто мешал мне двигаться вперёд. Но я осознала — только преодолев страхи и сомнения, я смогла добиться значительных результатов."
              </blockquote>

              <p className="text-[#4a6060] leading-relaxed mb-8">
                Постепенно набираясь опыта и уверенности, я начала смотреть на новые вызовы как на возможности для роста, а не препятствия. Теперь я хочу пройти этот путь вместе с тобой.
              </p>

              <div className="flex items-center gap-4 p-5 bg-white rounded-2xl ring-1 ring-[#2ABCB4]/20">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2ABCB4] to-[#0a7a74] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  И
                </div>
                <div>
                  <p className="font-bold text-[#1a2a2a]">Абрамова Ирина</p>
                  <p className="text-sm text-[#4a6060]">Психолог · Автор проекта НЕЙРОФИТНЕС</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY ── */}
      <section className="relative py-24 px-6 md:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2ABCB4]/10 ring-1 ring-[#2ABCB4]/30 rounded-full mb-8">
                <Icon name="Heart" size={14} className="text-[#0a7a74]" />
                <span className="text-sm font-medium text-[#0a7a74]">Сообщество</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#1a2a2a] mb-6">
                Ты не одна —<br />
                <span className="text-[#2ABCB4]">мы вместе</span>
              </h2>
              <p className="text-lg text-[#4a6060] leading-relaxed mb-8">
                В НЕЙРОФИТНЕС ты обретёшь единомышленниц — женщин, которые тоже выбирают рост, любовь к себе и движение к мечте. Здесь не бросают начатое. Здесь доводят до конца — с теплом и поддержкой.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Ежемесячные живые практики и встречи",
                  "Поддержка и кураторство на каждом шаге",
                  "Закрытое сообщество единомышленниц",
                  "Доступ к эксклюзивным материалам клуба",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#2ABCB4] flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={13} className="text-white" />
                    </div>
                    <span className="text-[#4a6060]">{item}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-[#2ABCB4] hover:bg-[#1fa8a0] text-white rounded-full px-10 font-semibold shadow-lg shadow-[#2ABCB4]/30"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Стать участницей
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2ABCB4]/15 to-transparent rounded-3xl transform rotate-2" />
              <img
                src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/files/a49d1bfb-ce7a-42b6-b7b9-b3f3ad5ff6ee.jpg"
                alt="Сообщество женщин"
                className="relative z-10 w-full rounded-3xl object-cover shadow-2xl shadow-[#2ABCB4]/15"
                style={{ aspectRatio: "1/1" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative py-24 px-6 md:px-12 bg-[#f0fafa]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#1a2a2a] mb-4">
              Частые вопросы
            </h2>
            <p className="text-lg text-[#4a6060]">Всё, что важно знать перед вступлением в клуб</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-2xl bg-white ring-1 ring-[#2ABCB4]/20 overflow-hidden shadow-sm hover:ring-[#2ABCB4]/40 transition-all">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#f0fafa] transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-base font-semibold pr-4 text-[#1a2a2a]">{faq.question}</h3>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 flex-shrink-0 text-[#2ABCB4]" />
                  ) : (
                    <Plus className="w-5 h-5 flex-shrink-0 text-[#2ABCB4]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-[#4a6060] leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / CTA ── */}
      <section id="contact" className="relative py-24 px-6 md:px-12 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2ABCB4]/8 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2ABCB4]/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="rounded-3xl bg-[#f0fafa] ring-1 ring-[#2ABCB4]/30 p-8 md:p-14 shadow-sm">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#1a2a2a] mb-4">
                Вступить в <span className="text-[#2ABCB4]">НЕЙРОФИТНЕС</span>
              </h2>
              <p className="text-xl text-[#4a6060] max-w-xl mx-auto">
                Оставь заявку — я свяжусь с тобой и расскажу всё о ближайшем старте.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Форма */}
              <div className="bg-white rounded-2xl ring-1 ring-[#2ABCB4]/20 p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-[#1a2a2a]">Оставить заявку</h3>
                <form className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#1a2a2a]">Имя</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#2ABCB4]/20 focus:border-[#2ABCB4] focus:ring-0 outline-none bg-[#f0fafa] text-[#1a2a2a] transition-colors"
                      placeholder="Твоё имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-[#1a2a2a]">Телефон или WhatsApp</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#2ABCB4]/20 focus:border-[#2ABCB4] focus:ring-0 outline-none bg-[#f0fafa] text-[#1a2a2a] transition-colors"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#1a2a2a]">Расскажи о себе</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#2ABCB4]/20 focus:border-[#2ABCB4] focus:ring-0 outline-none resize-none bg-[#f0fafa] text-[#1a2a2a] transition-colors"
                      placeholder="Чего ты хочешь достичь с НЕЙРОФИТНЕС?"
                    />
                  </div>
                  <Button className="w-full bg-[#2ABCB4] hover:bg-[#1fa8a0] text-white rounded-xl py-4 font-semibold text-base shadow-lg shadow-[#2ABCB4]/30">
                    Отправить заявку
                  </Button>
                </form>
              </div>

              {/* Правая колонка */}
              <div className="space-y-8">
                <div className="space-y-4">
                  {[
                    { icon: "MapPin", text: "Онлайн — из любого города мира" },
                    { icon: "Calendar", text: "Старт — каждый месяц, ограниченные места" },
                    { icon: "Users", text: "Камерная группа — максимум внимания каждой" },
                    { icon: "Phone", text: "+7 951 140-83-63" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[#4a6060]">
                      <div className="w-9 h-9 rounded-full bg-[#2ABCB4]/15 flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon} size={15} className="text-[#2ABCB4]" />
                      </div>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Карточка автора */}
                <div className="rounded-2xl bg-white ring-1 ring-[#2ABCB4]/20 overflow-hidden shadow-sm">
                  <div className="w-full h-64 overflow-hidden">
                    <img
                      src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/5dcf05cd-395f-415e-ab0c-a32698b3b434.jpeg"
                      alt="Абрамова Ирина"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center 15%" }}
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-base font-bold text-[#1a2a2a]">Абрамова Ирина</h4>
                    <p className="text-[#4a6060] text-xs mb-4">Психолог · Энерготерапевт · Расстановщик</p>
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

      {/* ── FOOTER ── */}
      <footer className="relative py-12 px-6 bg-[#0a1a1a] text-white/60 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Brain" size={18} className="text-[#2ABCB4]" />
            <span className="font-black text-white tracking-wide">НЕЙРОФИТНЕС</span>
          </div>
          <p className="text-sm text-white/40 mb-1">Онлайн-клуб для женщин · Абрамова Ирина</p>
          <p className="text-sm">
            <a href="tel:+79511408363" className="hover:text-[#2ABCB4] transition-colors">+7 951 140-83-63</a>
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
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
        </div>
      </footer>
    </div>
  )
}

export default Index