import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import Reveal from "@/components/landing/Reveal"

const heroImg =
  "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/files/7cd48099-04cf-4e3f-a75d-6aa76c3d6b62.jpg"

const kidBenefits = [
  { icon: "Focus", title: "Концентрация внимания", desc: "Значительно улучшается способность ребёнка удерживать фокус на задачах." },
  { icon: "BrainCircuit", title: "Память и обработка", desc: "Повышается эффективность запоминания и обработки информации." },
  { icon: "BookOpen", title: "Лёгкая адаптация", desc: "Ребёнку проще осваивать школьную программу без стресса и перегруза." },
  { icon: "HeartHandshake", title: "Здоровая самооценка", desc: "Формируется вера в собственные силы и спокойная уверенность в себе." },
]

const program = [
  { icon: "GraduationCap", title: "Обучение технике Access Bars", desc: "Освоите 32 точки на голове, мягкое прикосновение к которым запускает глубокое расслабление и освобождение." },
  { icon: "Users", title: "Практика в парах", desc: "Родители и дети работают вместе — вы сразу применяете метод друг на друге под руководством ведущего." },
  { icon: "Wind", title: "Снятие стресса и тревог", desc: "Отпускаете накопленное напряжение, страхи и негативные установки прошлого." },
  { icon: "Sparkles", title: "Раскрытие потенциала", desc: "Учитесь поддерживать ресурсное состояние себя и ребёнка в повседневной жизни." },
]

const methodBenefits = [
  "Глубокое расслабление всего за одну сессию",
  "Снижение тревожности и внутреннего напряжения",
  "Улучшение сна, настроения и ясности мышления",
  "Освобождение от ограничивающих убеждений",
  "Больше энергии, лёгкости и радости каждый день",
]

const AccessBars = () => {
  const scrollToForm = () =>
    document.getElementById("family-cta")?.scrollIntoView({ behavior: "smooth" })

  return (
    <div className="min-h-screen bg-[#0F1A14] text-[#F4F6F2]">
      {/* ── HERO ── */}
      <section className="relative min-h-screen overflow-hidden bg-[#0F1A14]">
        <img src={heroImg} alt="Семейный тренинг Access Bars" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F1A14]" />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

        <nav className="relative z-10 flex items-center justify-between px-4 sm:px-6 md:px-12 py-5">
          <div className="flex items-center gap-2 px-4 py-2 bg-black/30 ring-1 ring-white/15 backdrop-blur rounded-full shadow-lg">
            <Icon name="Sparkles" size={16} className="text-[#A7D28E]" />
            <span className="text-white text-sm font-semibold tracking-widest uppercase" style={{fontFamily:"'Raleway',sans-serif"}}>Access Bars</span>
          </div>
          <Button
            className="bg-[#2F5233] hover:bg-[#264428] text-white rounded-full px-5 sm:px-6 text-sm font-bold shadow-lg shadow-[#2F5233]/30 min-h-[44px]"
            onClick={scrollToForm}
          >
            Записаться
          </Button>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-end text-center min-h-[calc(100vh-80px)] px-4 sm:px-6 md:px-12 pb-12 sm:pb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7FB069]/15 ring-1 ring-[#7FB069]/30 rounded-full mb-6 animate-fade-up">
            <Icon name="Star" size={14} className="text-[#A7D28E]" />
            <span className="text-sm font-medium text-[#A7D28E]">Тренинг для всей семьи</span>
          </div>
          <h1 className="mb-6 animate-fade-up" style={{fontFamily:"'Playfair Display',serif", lineHeight: '1'}}>
            <span className="block text-3xl sm:text-5xl md:text-6xl font-black text-white">Укрепляем связь</span>
            <span className="block text-3xl sm:text-5xl md:text-6xl font-black text-[#A7D28E]">поколений</span>
          </h1>
          <p className="text-lg sm:text-2xl text-white/85 leading-relaxed mb-10 max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Освойте технику Access Bars — освобождение от внутренних ограничений и развитие потенциала каждого члена семьи.
          </p>
          <Button
            size="lg"
            className="bg-[#7FB069] hover:bg-[#6B9B57] text-[#0F1A14] rounded-full px-10 font-bold shadow-xl shadow-[#7FB069]/25 min-h-[52px] animate-fade-up"
            style={{ animationDelay: '0.3s' }}
            onClick={scrollToForm}
          >
            Прийти всей семьёй
          </Button>
        </div>
      </section>

      {/* ── ИНТРО ── */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#F4F6F2] overflow-hidden">
        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7FB069]/12 ring-1 ring-[#7FB069]/30 rounded-full mb-5">
              <Icon name="Heart" size={14} className="text-[#4A7A3A]" />
              <span className="text-sm font-medium text-[#4A7A3A]">Атмосфера теплоты и понимания</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E2B22] mb-6" style={{fontFamily:"'Playfair Display',serif"}}>
              Особенный тренинг<span className="text-[#4A7A3A]"> для всей семьи</span>
            </h2>
            <p className="text-base sm:text-lg text-[#4A5850] leading-relaxed">
              Присоединяйтесь и окунитесь в атмосферу, где каждый найдёт ответы на волнующие вопросы и откроет для себя эффективные методы улучшения качества жизни.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── ЧТО БУДЕТ НА ТРЕНИНГЕ ── */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0F1A14] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7FB069]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7FB069]/12 ring-1 ring-[#7FB069]/30 rounded-full mb-5">
              <Icon name="CalendarCheck" size={14} className="text-[#A7D28E]" />
              <span className="text-sm font-medium text-[#A7D28E]">Программа</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white" style={{fontFamily:"'Playfair Display',serif"}}>
              Что будет<span className="text-[#A7D28E]"> на тренинге</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {program.map((p, i) => (
              <Reveal key={i} delay={(i % 2) * 120}>
                <div className="flex gap-4 h-full rounded-2xl bg-white/4 ring-1 ring-white/10 p-6 sm:p-8 hover:ring-[#7FB069]/40 transition-all">
                  <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#7FB069]/15 ring-1 ring-[#7FB069]/25">
                    <Icon name={p.icon} size={22} className="text-[#A7D28E]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-white leading-snug" style={{fontFamily:"'Playfair Display',serif"}}>{p.title}</h3>
                    <p className="text-white/55 leading-relaxed text-sm">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ЧЕМ ПОЛЕЗЕН МЕТОД ── */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#F4F6F2] overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7FB069]/12 ring-1 ring-[#7FB069]/30 rounded-full mb-5">
              <Icon name="Zap" size={14} className="text-[#4A7A3A]" />
              <span className="text-sm font-medium text-[#4A7A3A]">Польза метода</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E2B22] mb-5" style={{fontFamily:"'Playfair Display',serif"}}>
              Чем полезен<span className="text-[#4A7A3A]"> Access Bars</span>
            </h2>
            <p className="text-base sm:text-lg text-[#4A5850] leading-relaxed">
              Мягкая техника прикосновения к 32 точкам на голове помогает «перезагрузить» нервную систему и вернуть внутренний баланс.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {methodBenefits.map((b, i) => (
              <Reveal key={i} delay={(i % 2) * 100}>
                <div className="flex items-center gap-3 rounded-2xl bg-white ring-1 ring-black/5 p-5 shadow-sm">
                  <Icon name="CircleCheck" size={22} className="shrink-0 text-[#4A7A3A]" />
                  <span className="text-[#1E2B22] font-medium leading-snug">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ПАМЯТЬ И УСПЕВАЕМОСТЬ ── */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0F1A14] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7FB069]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7FB069]/12 ring-1 ring-[#7FB069]/30 rounded-full mb-5">
              <Icon name="Brain" size={14} className="text-[#A7D28E]" />
              <span className="text-sm font-medium text-[#A7D28E]">Память и успеваемость</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6" style={{fontFamily:"'Playfair Display',serif"}}>
              Как Access Bars влияет<span className="text-[#A7D28E]"> на ребёнка</span>
            </h2>
            <p className="text-base sm:text-lg text-white/55 leading-relaxed">
              Регулярные сессии помогают усилить когнитивные способности ребёнка. Устраняя психологические барьеры и снижая тревожность, дети эффективнее усваивают материал, становятся внимательнее, увереннее и готовы справиться с любыми учебными задачами.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── ПРЕИМУЩЕСТВА ДЛЯ ДЕТЕЙ ── */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#F4F6F2] overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7FB069]/12 ring-1 ring-[#7FB069]/30 rounded-full mb-5">
              <Icon name="Smile" size={14} className="text-[#4A7A3A]" />
              <span className="text-sm font-medium text-[#4A7A3A]">Преимущества для детей</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E2B22]" style={{fontFamily:"'Playfair Display',serif"}}>
              Что получит<span className="text-[#4A7A3A]"> ваш ребёнок</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {kidBenefits.map((b, i) => (
              <Reveal key={i} delay={(i % 4) * 120}>
                <div className="group h-full rounded-2xl bg-white ring-1 ring-black/5 p-6 sm:p-8 shadow-sm hover:ring-[#7FB069]/40 transition-all">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#7FB069]/15 ring-1 ring-[#7FB069]/25 mb-5">
                    <Icon name={b.icon} size={20} className="text-[#4A7A3A]" />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-[#1E2B22] leading-snug" style={{fontFamily:"'Playfair Display',serif"}}>{b.title}</h3>
                  <p className="text-[#4A5850] leading-relaxed text-sm">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ОСВОБОЖДЕНИЕ ОТ СТРАХОВ ── */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0F1A14] overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <Reveal>
            <div className="rounded-3xl bg-white/4 ring-1 ring-white/10 p-8 sm:p-12">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#7FB069]/15 ring-1 ring-[#7FB069]/25 mb-6">
                <Icon name="Unlock" size={26} className="text-[#A7D28E]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-5 leading-tight" style={{fontFamily:"'Playfair Display',serif"}}>
                Освобождение от страхов<span className="text-[#A7D28E]"> и негативных установок</span>
              </h2>
              <p className="text-base sm:text-lg text-white/60 leading-relaxed">
                Мы фокусируемся на освобождении от родительских страхов и убеждений, которые бессознательно передаются следующим поколениям. Вместо того чтобы передавать тревоги детям, методика позволяет родителям освободиться от груза прошлого и подарить ребёнку свободу развивать собственный потенциал.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="family-cta" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#F4F6F2] overflow-hidden">
        <div className="relative max-w-2xl mx-auto text-center">
          <Reveal>
            <div className="text-5xl mb-6">🎉</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E2B22] mb-5" style={{fontFamily:"'Playfair Display',serif"}}>
              Приходите всей семьёй!
            </h2>
            <p className="text-base sm:text-lg text-[#4A5850] leading-relaxed mb-10">
              Создайте прочную основу для счастливого будущего вашего ребёнка. Запишитесь на семейный тренинг Access Bars уже сегодня.
            </p>
            <Button
              size="lg"
              className="bg-[#7FB069] hover:bg-[#6B9B57] text-[#0F1A14] rounded-full px-10 font-bold shadow-xl shadow-[#7FB069]/25 min-h-[52px]"
              onClick={() => window.open("https://t.me/", "_blank")}
            >
              Записаться на тренинг
            </Button>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#0F1A14] text-white/40 text-center text-sm py-8 px-4">
        © 2026 Всё возможно · Семейный тренинг Access Bars
      </footer>
    </div>
  )
}

export default AccessBars