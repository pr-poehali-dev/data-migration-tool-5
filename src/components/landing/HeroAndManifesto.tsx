import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const HeroAndManifesto = () => {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen overflow-hidden bg-[#0F1A14]">
        <img
          src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/c72d79a0-41d9-48a9-a9d7-7fa8f6f30953.jpeg"
          alt="Ирина и Вячеслав"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1A14]/50 via-[#0F1A14]/45 to-[#0F1A14]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1A14]/75 to-transparent" />

        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between px-4 sm:px-6 md:px-12 py-5">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Leaf" size={16} className="text-[#A7D28E]" />
            <span className="font-semibold text-white text-sm tracking-widest uppercase" style={{fontFamily:"'Raleway',sans-serif"}}>Ретрит 2026</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "Что получишь", anchor: "benefits" },
              { label: "Ведущие", anchor: "author" },
              { label: "Стоимость", anchor: "offer" },
              { label: "Вопросы", anchor: "faq" },
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
            className="bg-[#7FB069] hover:bg-[#6B9B57] text-[#0F1A14] rounded-full px-5 sm:px-6 text-sm font-bold shadow-lg shadow-[#7FB069]/30 min-h-[44px]"
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
          >
            Забронировать
          </Button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center min-h-[calc(100vh-80px)] px-4 sm:px-6 md:px-12 pb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7FB069]/15 ring-1 ring-[#7FB069]/40 rounded-full mb-6">
              <Icon name="Sparkles" size={14} className="text-[#A7D28E]" />
              <span className="text-sm font-medium text-[#A7D28E]">Турция · 6–7 сентября 2026 · 7 дней</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] mb-6" style={{fontFamily:"'Playfair Display',serif"}}>
              Ретрит
              <span className="block text-[#A7D28E]">«Всё возможно»</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-8 max-w-xl">
              Мы объединились, чтобы создать нечто потрясающее для тела и души. Семь дней, чтобы восстановить силы, найти внутреннюю гармонию и переосмыслить свою жизнь.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                className="h-14 px-8 text-base font-bold bg-[#7FB069] hover:bg-[#6B9B57] text-[#0F1A14] rounded-full shadow-xl shadow-[#7FB069]/30"
              >
                Забронировать место
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
                className="h-14 px-8 text-base font-semibold bg-white/5 border-white/25 text-white hover:bg-white/10 rounded-full"
              >
                Что тебя ждёт
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-10 text-white/65 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-[#A7D28E]" />
                Турция, всё включено
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Users" size={16} className="text-[#A7D28E]" />
                Места ограничены
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Heart" size={16} className="text-[#A7D28E]" />
                Дети до 14 — бесплатно
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#F4F6F2]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7FB069]/12 ring-1 ring-[#7FB069]/30 rounded-full mb-6">
            <Icon name="Compass" size={14} className="text-[#4A7A3A]" />
            <span className="text-sm font-medium text-[#4A7A3A]">Философия ретрита</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E2B22] mb-6" style={{fontFamily:"'Playfair Display',serif"}}>
            Когда отпуск — это не бегство от реальности,
            <span className="text-[#4A7A3A]"> а решение</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#4A5850] leading-relaxed">
            Мы верим: настоящий отдых меняет мышление. Здесь ты не просто отдохнёшь — ты вернёшься к себе, наполнишься энергией и найдёшь баланс между мужским и женским началом. Путь к неизведанному будет лёгким и радостным — в приятной компании близких по духу людей.
          </p>
        </div>
      </section>
    </>
  )
}

export default HeroAndManifesto
