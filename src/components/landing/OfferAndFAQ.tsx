import { Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
}

const tariffs = [
  {
    name: "Участие",
    price: "40 000 ₽",
    accent: false,
    features: [
      "Тренинг по работе с установками",
      "Телесные и йога-практики",
      "Участие заместителем в расстановках",
      "Проживание, перелёт и экскурсия — отдельно",
    ],
  },
  {
    name: "Со своей расстановкой",
    price: "52 000 ₽",
    accent: true,
    features: [
      "Всё из тарифа «Участие»",
      "Личная расстановка — глубокая работа с запросом",
      "Тренинг по работе с установками",
      "Телесные и йога-практики каждый день",
    ],
  },
  {
    name: "Отель, перелёт, всё вкл.",
    price: "~79 000 ₽ / чел.",
    accent: false,
    features: [
      "Отель «всё включено»",
      "Перелёт из Москвы (из другого города — по вашему городу)",
      "Экскурсия и трансфер",
      "Итог зависит от размещения в номере и курса доллара",
    ],
  },
]

const OfferAndFAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Когда и на сколько летим?",
      answer:
        "Вылет 6–7 сентября 2026 года на 7 дней. Направление — Турция, размещение в отеле «всё включено».",
    },
    {
      question: "Что входит в стоимость ретрита?",
      answer:
        "Тариф «Участие» (40 000 ₽) включает тренинг по работе с установками, телесные практики и участие заместителем в расстановках. Тариф со своей расстановкой — 52 000 ₽. Отель, перелёт, экскурсия и трансфер оплачиваются отдельно (~79 000 ₽/чел.).",
    },
    {
      question: "Как забронировать место?",
      answer:
        "Для брони достаточно 5 000–10 000 ₽. Есть возможность оплаты частями — подробности обсудим в личных сообщениях после заявки.",
    },
    {
      question: "Можно ли с детьми?",
      answer:
        "Да! Дети до 14 лет — бесплатно. Ретрит создан в тёплой и безопасной атмосфере.",
    },
    {
      question: "Нужен ли опыт в йоге или психологии?",
      answer:
        "Нет. Практики подходят для любого уровня. Участвуя в расстановках заместителем, ты можешь даже не озвучивать свою ситуацию — трансформация происходит через включённость.",
    },
    {
      question: "Много ли мест?",
      answer:
        "Места ограничены — группа небольшая, чтобы каждый получил внимание. Рекомендуем бронировать заранее.",
    },
  ]

  return (
    <>
      {/* ── ТАРИФЫ ── */}
      <section id="offer" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0F1A14] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#7FB069]/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7FB069]/12 ring-1 ring-[#7FB069]/30 rounded-full mb-5">
              <Icon name="Ticket" size={14} className="text-[#A7D28E]" />
              <span className="text-sm font-medium text-[#A7D28E]">Стоимость</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight" style={{fontFamily:"'Playfair Display',serif"}}>
              Выбери свой <span className="italic text-[#A7D28E]">формат</span>
            </h2>
            <p className="text-base sm:text-lg text-white/55 max-w-xl mx-auto">
              Вылет 6–7 сентября 2026 · 7 дней · Турция. Места ограничены
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {tariffs.map((t, i) => (
              <div
                key={i}
                className={`relative flex flex-col rounded-3xl p-7 sm:p-8 ring-1 transition-all hover:-translate-y-1 ${
                  t.accent
                    ? "bg-gradient-to-br from-[#4A7A3A] to-[#6B9B57] ring-[#7FB069]/60 shadow-2xl shadow-[#7FB069]/30"
                    : "bg-white/4 ring-white/10 hover:ring-[#7FB069]/40"
                }`}
              >
                {t.accent && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#4A7A3A] text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-lg">
                    Популярно
                  </div>
                )}
                <div className="mb-5">
                  <h3 className="text-xl font-bold mb-3 text-white" style={{fontFamily:"'Playfair Display',serif"}}>
                    {t.name}
                  </h3>
                  <div className={`text-3xl sm:text-4xl font-black ${t.accent ? "text-white" : "text-[#A7D28E]"}`}>
                    {t.price}
                  </div>
                </div>
                <ul className="space-y-3 mb-6 flex-1">
                  {t.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${t.accent ? "bg-white/20" : "bg-[#7FB069]/20"}`}>
                        <Icon name="Check" size={11} className={t.accent ? "text-white" : "text-[#A7D28E]"} />
                      </div>
                      <span className={`text-sm leading-relaxed ${t.accent ? "text-white/90" : "text-white/65"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-full font-bold min-h-[48px] ${
                    t.accent
                      ? "bg-white hover:bg-white/90 text-[#4A7A3A]"
                      : "bg-[#7FB069] hover:bg-[#6B9B57] text-[#0F1A14]"
                  }`}
                  onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Забронировать
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-3xl mx-auto rounded-2xl bg-white/4 ring-1 ring-[#7FB069]/25 p-5 sm:p-6 flex items-start gap-3">
            <Icon name="Info" size={18} className="text-[#A7D28E] flex-shrink-0 mt-0.5" />
            <p className="text-white/60 text-sm leading-relaxed">
              Для брони нужно всего 5 000–10 000 ₽. Есть возможность оплаты частями. Дети до 14 лет — бесплатно. Все подробности — в личных сообщениях.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#F4F6F2]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#1E2B22] mb-4" style={{fontFamily:"'Playfair Display',serif"}}>
              Частые <span className="italic text-[#4A7A3A]">вопросы</span>
            </h2>
            <p className="text-base sm:text-lg text-[#4A5850]">Всё, что важно знать перед поездкой</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-2xl bg-white ring-1 ring-black/5 overflow-hidden hover:ring-[#7FB069]/40 transition-all">
                <button
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-5 text-left hover:bg-[#7FB069]/5 transition-colors min-h-[64px]"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-sm sm:text-base font-semibold pr-4 text-[#1E2B22]" style={{fontFamily:"'Playfair Display',serif"}}>{faq.question}</h3>
                  <div className="w-8 h-8 rounded-full bg-[#7FB069]/15 flex items-center justify-center flex-shrink-0">
                    {openFaq === index
                      ? <Minus size={15} className="text-[#4A7A3A]" />
                      : <Plus size={15} className="text-[#4A7A3A]" />
                    }
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-5 sm:px-6 pb-5">
                    <p className="text-sm sm:text-base text-[#4A5850] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OfferAndFAQ
