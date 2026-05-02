import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const VK_URL = "https://vk.ru/abramova_garmony"

const ContactAndFooter = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Здравствуйте! Хочу в клуб НЕЙРОФИТНЕС.\n\nИмя: ${name || "—"}\nТелефон: ${phone || "—"}\nЧто хочу изменить: ${message || "—"}`
    )
    window.open(`https://vk.me/abramova_garmony?text=${text}`, "_blank")
  }

  return (
    <>
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
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80">Имя</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 focus:border-[#C4748A] focus:ring-0 outline-none bg-white/5 text-white transition-colors placeholder:text-white/30 text-base"
                    placeholder="Как тебя зовут?"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white/80">Телефон или WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 focus:border-[#C4748A] focus:ring-0 outline-none bg-white/5 text-white transition-colors placeholder:text-white/30 text-base"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80">Что хочешь изменить в жизни?</label>
                  <textarea
                    id="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 focus:border-[#C4748A] focus:ring-0 outline-none resize-none bg-white/5 text-white transition-colors placeholder:text-white/30 text-base"
                    placeholder="Напиши коротко — от чего хочешь избавиться и к чему прийти"
                  />
                </div>
                <Button type="submit" className="w-full bg-[#C4748A] hover:bg-[#A35570] text-white rounded-xl font-bold text-base shadow-lg shadow-[#C4748A]/30 min-h-[52px] flex items-center justify-center gap-2">
                  <Icon name="Send" size={16} />
                  Отправить заявку в ВКонтакте
                </Button>
                <p className="text-xs text-center text-white/40">Откроется чат ВКонтакте — там я отвечу лично</p>
              </form>
            </div>

            {/* Правая колонка */}
            <div className="space-y-6">
              {/* Фото медитации */}
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-[#C4748A]/15">
                <img
                  src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/bc2d28c3-6dd7-4159-95f7-e373c2f3c629.jpeg"
                  alt="Ирина в медитации"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A0B] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-bold tracking-[0.3em] text-[#E0A0B0] uppercase mb-2">Внутри тебя есть всё</p>
                  <p className="text-white text-xl leading-snug" style={{fontFamily:"'Playfair Display',serif"}}>
                    Тишина. Ясность. <span className="italic text-[#C4748A]">Ты.</span>
                  </p>
                </div>
              </div>

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
              <div className="rounded-3xl bg-white/4 ring-1 ring-white/10 p-5">
                <h4 className="text-base font-bold text-white mb-1" style={{fontFamily:"'Playfair Display',serif"}}>Абрамова Ирина</h4>
                <p className="text-white/55 text-xs mb-4">Психолог · Энерготерапевт · Расстановщик</p>
                <div className="flex gap-2">
                  <a href="tel:+79511408363" className="flex-1">
                    <Button size="sm" className="w-full bg-[#C4748A] hover:bg-[#A35570] text-white rounded-lg flex items-center justify-center gap-1.5 text-xs min-h-[40px]">
                      <Icon name="Phone" size={13} />
                      Позвонить
                    </Button>
                  </a>
                  <a href={VK_URL} target="_blank" rel="noopener noreferrer" className="flex-1">
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
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative py-10 px-4 sm:px-6 bg-black text-white/60 text-center border-t border-white/10">
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
              href={VK_URL}
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
    </>
  )
}

export default ContactAndFooter
