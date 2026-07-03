import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const HeroAndManifesto = () => {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen overflow-hidden bg-[#0F1A14]">
        {/* Совместное фото */}
        <img
          src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/c72d79a0-41d9-48a9-a9d7-7fa8f6f30953.jpeg"
          alt="Ирина и Вячеслав"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Лёгкое затемнение для читабельности */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/60" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between px-4 sm:px-6 md:px-12 py-5">
          <div className="flex items-center gap-1.5">
            <span className="text-[#A7D28E] text-lg font-black tracking-tight" style={{fontFamily:"'Playfair Display',serif"}}>Всё</span>
            <span className="text-white text-lg font-black tracking-widest uppercase" style={{fontFamily:"'Raleway',sans-serif"}}>возможно</span>
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
                className="px-4 py-2 bg-white/10 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-white/20 transition-colors text-sm text-white/90"
              >
                {item.label}
              </button>
            ))}
          </div>

          <Button
            className="bg-[#2F5233] hover:bg-[#264428] text-white rounded-full px-5 sm:px-6 text-sm font-bold shadow-lg shadow-[#2F5233]/30 min-h-[44px]"
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
          >
            Забронировать
          </Button>
        </nav>

        {/* Hero Content — смещён вниз, чтобы лица были видны */}
        <div className="relative z-10 flex flex-col items-center justify-end text-center min-h-[calc(100vh-80px)] px-4 sm:px-6 md:px-12 pb-16 sm:pb-20">
          <h1 className="leading-none mb-6" style={{fontFamily:"'Playfair Display',serif"}}>
            <span className="block text-4xl sm:text-5xl md:text-6xl font-light italic text-white">Всё</span>
            <span className="block text-3xl sm:text-5xl md:text-6xl font-black tracking-wide uppercase text-white">возможно</span>
          </h1>

          <p className="text-lg sm:text-2xl text-white/85 leading-relaxed mb-10 max-w-2xl">
            Ретрит для тела и души. Психология, йога, расстановки и телесные практики в едином потоке — 7 дней у моря.
          </p>

          <div className="flex flex-col items-center gap-4 w-full max-w-md">
            <Button
              size="lg"
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              className="h-16 w-full text-lg font-bold bg-[#2F5233] hover:bg-[#264428] text-white rounded-full shadow-xl shadow-[#2F5233]/30"
            >
              Забронировать место
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
              className="h-14 w-full text-base font-semibold bg-transparent border-white/40 text-white hover:bg-white/10 rounded-full"
            >
              Программа
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-10 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={16} className="text-[#A7D28E]" />
              Турция · 6–7 сентября 2026
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