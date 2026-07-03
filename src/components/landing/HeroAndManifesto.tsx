import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const HeroAndManifesto = () => {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen overflow-hidden bg-[#EFE9E1]">
        <img
          src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/c72d79a0-41d9-48a9-a9d7-7fa8f6f30953.jpeg"
          alt="Ирина и Вячеслав"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-[#EFE9E1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/40 to-transparent" />

        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between px-4 sm:px-6 md:px-12 py-5">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/70 ring-1 ring-black/5 backdrop-blur rounded-full shadow-sm">
            <Icon name="Leaf" size={16} className="text-[#4A7A3A]" />
            <span className="font-semibold text-[#1E2B22] text-sm tracking-widest uppercase" style={{fontFamily:"'Raleway',sans-serif"}}>Ретрит 2026</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "Что получишь", anchor: "benefits" },
              { label: "Ведущие", anchor: "author" },
              { label: "Отзывы", anchor: "reviews" },
              { label: "Стоимость", anchor: "offer" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => document.getElementById(item.anchor)?.scrollIntoView({ behavior: "smooth" })}
                className="px-4 py-2 bg-white/70 ring-1 ring-black/5 backdrop-blur rounded-full hover:bg-white transition-colors text-sm text-[#3A463E] shadow-sm"
              >
                {item.label}
              </button>
            ))}
          </div>

          <Button
            className="bg-[#4A7A3A] hover:bg-[#3C6630] text-white rounded-full px-5 sm:px-6 text-sm font-bold shadow-lg shadow-[#4A7A3A]/25 min-h-[44px]"
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
          >
            Забронировать
          </Button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center min-h-[calc(100vh-80px)] px-4 sm:px-6 md:px-12 pb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 ring-1 ring-[#7FB069]/40 rounded-full mb-6 backdrop-blur shadow-sm">
              <Icon name="Sparkles" size={14} className="text-[#4A7A3A]" />
              <span className="text-sm font-medium text-[#4A7A3A]">Турция · 6–7 сентября 2026 · 7 дней</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#1E2B22] leading-[1.05] mb-6" style={{fontFamily:"'Playfair Display',serif"}}>
              Ретрит
              <span className="block text-[#4A7A3A]">«Всё возможно»</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#3A463E] leading-relaxed mb-8 max-w-xl">
              Мы объединились, чтобы создать нечто потрясающее для тела и души. Семь дней, чтобы восстановить силы, найти внутреннюю гармонию и переосмыслить свою жизнь.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                className="h-14 px-8 text-base font-bold bg-[#4A7A3A] hover:bg-[#3C6630] text-white rounded-full shadow-xl shadow-[#4A7A3A]/25"
              >
                Забронировать место
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
                className="h-14 px-8 text-base font-semibold bg-white/70 border-[#4A7A3A]/30 text-[#1E2B22] hover:bg-white rounded-full backdrop-blur"
              >
                Что тебя ждёт
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-10 text-[#3A463E] text-sm">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-[#4A7A3A]" />
                Турция, всё включено
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Users" size={16} className="text-[#4A7A3A]" />
                Места ограничены
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Heart" size={16} className="text-[#4A7A3A]" />
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