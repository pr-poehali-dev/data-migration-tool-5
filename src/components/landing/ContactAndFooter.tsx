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
      `Здравствуйте! Хочу на ретрит «Всё возможно» в Турцию 2026.\n\nИмя: ${name || "—"}\nТелефон: ${phone || "—"}\nВопрос / тариф: ${message || "—"}`
    )
    window.open(`https://vk.me/abramova_garmony?text=${text}`, "_blank")
  }

  return (
    <>
      {/* ── FINAL CTA / BOOKING ── */}
      <section id="booking" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0F1A14] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#7FB069]/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#7FB069]/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7FB069]/15 ring-1 ring-[#7FB069]/40 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-[#7FB069] animate-pulse" />
              <span className="text-sm font-medium text-[#A7D28E]">Мест осталось мало</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight" style={{fontFamily:"'Playfair Display',serif"}}>
              Забронируй место <br />
              <span className="italic text-[#A7D28E]">на ретрит в Турцию</span>
            </h2>
            <p className="text-base sm:text-xl text-white/55 max-w-lg mx-auto">
              Оставь заявку — свяжемся с тобой, ответим на вопросы и расскажем про бронь и оплату частями
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Форма */}
            <div className="bg-white/4 rounded-3xl ring-1 ring-white/10 p-6 sm:p-8 backdrop-blur">
              <h3 className="text-xl font-bold mb-5 text-white" style={{fontFamily:"'Playfair Display',serif"}}>Забронировать место</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80">Имя</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 focus:border-[#7FB069] focus:ring-0 outline-none bg-white/5 text-white transition-colors placeholder:text-white/30 text-base"
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
                    className="w-full px-4 py-3 rounded-xl border border-white/15 focus:border-[#7FB069] focus:ring-0 outline-none bg-white/5 text-white transition-colors placeholder:text-white/30 text-base"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80">Вопрос или выбранный тариф</label>
                  <textarea
                    id="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 focus:border-[#7FB069] focus:ring-0 outline-none resize-none bg-white/5 text-white transition-colors placeholder:text-white/30 text-base"
                    placeholder="Например: участие с расстановкой, вопрос по перелёту"
                  />
                </div>
                <Button type="submit" className="w-full bg-[#7FB069] hover:bg-[#6B9B57] text-[#0F1A14] rounded-xl font-bold text-base shadow-lg shadow-[#7FB069]/30 min-h-[52px] flex items-center justify-center gap-2">
                  <Icon name="Send" size={16} />
                  Отправить заявку в ВКонтакте
                </Button>
                <p className="text-xs text-center text-white/40">Откроется чат ВКонтакте — там мы ответим лично</p>
              </form>
            </div>

            {/* Правая колонка */}
            <div className="space-y-6">
              {/* Фото ведущих */}
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
                <img
                  src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/c72d79a0-41d9-48a9-a9d7-7fa8f6f30953.jpeg"
                  alt="Ирина и Вячеслав"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A14] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-bold tracking-[0.3em] text-[#A7D28E] uppercase mb-2">Всё возможно</p>
                  <p className="text-white text-xl leading-snug" style={{fontFamily:"'Playfair Display',serif"}}>
                    Тело. Душа. <span className="italic text-[#A7D28E]">Баланс.</span>
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { icon: "Plane", text: "Вылет 6–7 сентября 2026 · 7 дней" },
                  { icon: "MapPin", text: "Турция · отель «всё включено»" },
                  { icon: "Users", text: "Камерная группа — максимум внимания" },
                  { icon: "Phone", text: "+7 951 140-83-63" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/65">
                    <div className="w-9 h-9 rounded-full bg-[#7FB069]/15 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={15} className="text-[#A7D28E]" />
                    </div>
                    <span className="text-sm sm:text-base">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Карточка контактов */}
              <div className="rounded-3xl bg-white/4 ring-1 ring-white/10 p-5">
                <h4 className="text-base font-bold text-white mb-1" style={{fontFamily:"'Playfair Display',serif"}}>Ирина Абрамова</h4>
                <p className="text-white/55 text-xs mb-4">Психолог · Расстановщик · Организатор ретрита</p>
                <div className="flex gap-2">
                  <a href="tel:+79511408363" className="flex-1">
                    <Button size="sm" className="w-full bg-[#7FB069] hover:bg-[#6B9B57] text-[#0F1A14] rounded-lg flex items-center justify-center gap-1.5 text-xs min-h-[40px]">
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
      <footer className="relative py-10 px-4 sm:px-6 bg-[#0A140F] text-white/60 text-center border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Icon name="Leaf" size={18} className="text-[#7FB069]" />
            <span className="font-black text-white tracking-widest" style={{fontFamily:"'Playfair Display',serif"}}>РЕТРИТ «ВСЁ ВОЗМОЖНО»</span>
          </div>
          <p className="text-sm text-white/40 mb-1">Турция 2026 · Ирина Абрамова и Вячеслав Домовец</p>
          <p className="text-sm">
            <a href="tel:+79511408363" className="hover:text-[#A7D28E] transition-colors">+7 951 140-83-63</a>
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
          <p className="text-xs text-white/25 mt-5">© 2026 Ретрит «Всё возможно» · Турция</p>
        </div>
      </footer>
    </>
  )
}

export default ContactAndFooter
