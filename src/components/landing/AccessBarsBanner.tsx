import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import Reveal from "@/components/landing/Reveal"

const bannerImg =
  "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/files/7cd48099-04cf-4e3f-a75d-6aa76c3d6b62.jpg"

const AccessBarsBanner = () => {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0F1A14] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <img src={bannerImg} alt="Семейный тренинг Access Bars" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F1A14]/95 via-[#0F1A14]/80 to-[#0F1A14]/40" />

            <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7FB069]/20 ring-1 ring-[#7FB069]/40 rounded-full mb-5">
                <Icon name="Sparkles" size={14} className="text-[#A7D28E]" />
                <span className="text-sm font-medium text-[#A7D28E]">Тренинг на ретрите</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight" style={{fontFamily:"'Playfair Display',serif"}}>
                Access Bars<span className="block text-[#A7D28E]">для всей семьи</span>
              </h2>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-8">
                Укрепите связь поколений: освободитесь от внутренних ограничений и раскройте потенциал каждого члена семьи.
              </p>
              <Link to="/access-bars">
                <Button
                  size="lg"
                  className="bg-[#7FB069] hover:bg-[#6B9B57] text-[#0F1A14] rounded-full px-8 font-bold shadow-xl shadow-[#7FB069]/25 min-h-[52px]"
                >
                  Узнать подробнее
                  <Icon name="ArrowRight" size={18} className="ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default AccessBarsBanner