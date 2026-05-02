import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const HeroAndManifesto = () => {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen overflow-hidden bg-[#0D0A0B]">
        {/* Фон — фото автора */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/06c4c42c-3277-4e4b-9f75-beee825edf06.jpeg')" }}
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

          {/* Right — фото с короной */}
          <div className="relative flex justify-center mt-6 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <div className="absolute -inset-2 bg-gradient-to-br from-[#C4748A]/30 to-[#8B1A4A]/10 rounded-3xl blur-xl" />
              <img
                src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/06c4c42c-3277-4e4b-9f75-beee825edf06.jpeg"
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
                img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/ff043c18-5851-44a9-a12f-ece25e3b2669.jpeg",
                label: "Тайна",
                desc: "Дерзкая, мистическая, недосягаемая",
              },
              {
                img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/06c4c42c-3277-4e4b-9f75-beee825edf06.jpeg",
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
          style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/ff043c18-5851-44a9-a12f-ece25e3b2669.jpeg')" }}
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

      {/* ── ДЕРЗКИЙ БЛОК 2: Главная ложь ── */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 overflow-hidden bg-[#0D0A0B]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/06c4c42c-3277-4e4b-9f75-beee825edf06.jpeg')" }}
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
    </>
  )
}

export default HeroAndManifesto