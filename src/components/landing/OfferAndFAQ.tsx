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
    name: "Стандарт",
    price: "15 590 ₽",
    accent: false,
    features: [
      "Участие в клубе 30 дней",
      "Все живые практики и записи",
      "Закрытый чат поддержки",
    ],
  },
  {
    name: "Стандарт+",
    price: "22 590 ₽",
    accent: false,
    features: [
      "Участие в клубе 30 дней",
      "Участие заместителем на расстановках — клубных и клиентских",
      "Без ограничений по количеству участий за месяц",
    ],
  },
  {
    name: "VIP",
    price: "48 500 ₽",
    accent: true,
    features: [
      "Личная расстановка",
      "Участие в клубе 30 дней",
      "Участие заместителем без ограничений",
    ],
  },
  {
    name: "Super VIP",
    price: "35 000 ₽",
    accent: false,
    features: [
      "Участие в клубе 30 дней",
      "Участие заместителем без ограничений",
      "2 расстановки",
      "Моя обратная связь в личных сообщениях весь месяц — разбираем любые ситуации",
    ],
  },
  {
    name: "Super VIP с личным ведением",
    price: "40 000 ₽",
    accent: true,
    features: [
      "Участие в клубе 30 дней",
      "Участие заместителем без ограничений",
      "2 расстановки",
      "2 часовые встречи лично со мной",
      "Личные сообщения 24/7 — отвечаю на любые вопросы",
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
      question: "Кому подойдёт НЕЙРОФИТНЕС?",
      answer:
        "Женщинам 25–45 лет, которые устали жить «на автопилоте», хотят избавиться от стресса, полюбить себя и почувствовать себя женственной и желанной. Без опыта в психологии.",
    },
    {
      question: "Как проходят занятия?",
      answer:
        "Это формат онлайн в удобное для тебя время — ты можешь читать и слушать когда захочешь. Встречи 1–2 раза в неделю в комфортном режиме для всех. Если не успеваешь — всё доступно в записи.",
    },
    {
      question: "Нужен ли опыт в медитации или психологии?",
      answer:
        "Нет. Программа создана для начинающих. Всё объясняем с нуля, каждая участница получает индивидуальное внимание.",
    },
    {
      question: "Когда ждать первых результатов?",
      answer:
        "Большинство участниц отмечают изменения уже через 7–14 дней: лучше сон, меньше тревожности, больше энергии и принятие себя.",
    },
    {
      question: "Как вступить в клуб?",
      answer:
        "Оставь заявку ниже — я свяжусь с тобой в течение 2 часов, отвечу на вопросы и расскажу про ближайший старт. Мест немного.",
    },
  ]

  return (
    <>
      {/* ── ТАРИФЫ ── */}
      <section id="tariffs" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0D0A0B] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#C4748A]/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C4748A]/15 ring-1 ring-[#C4748A]/30 rounded-full mb-5">
              <Icon name="Gem" size={14} className="text-[#E0A0B0]" />
              <span className="text-sm font-medium text-[#E0A0B0]">Тарифы</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight" style={{fontFamily:"'Playfair Display',serif"}}>
              Выбери свой <span className="italic text-[#C4748A]">формат</span>
            </h2>
            <p className="text-base sm:text-lg text-white/55 max-w-xl mx-auto">
              От участия в клубе до личного ведения — каждая найдёт своё
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {tariffs.map((t, i) => (
              <div
                key={i}
                className={`relative flex flex-col rounded-3xl p-7 sm:p-8 ring-1 transition-all hover:-translate-y-1 ${
                  t.accent
                    ? "bg-gradient-to-br from-[#8B1A4A] to-[#A35570] ring-[#C4748A]/60 shadow-2xl shadow-[#C4748A]/30"
                    : "bg-white/4 ring-white/10 hover:ring-[#C4748A]/40"
                }`}
              >
                {t.accent && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#8B1A4A] text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-lg">
                    Хит
                  </div>
                )}
                <div className="mb-5">
                  <h3 className={`text-xl font-bold mb-3 ${t.accent ? "text-white" : "text-white"}`} style={{fontFamily:"'Playfair Display',serif"}}>
                    {t.name}
                  </h3>
                  <div className={`text-3xl sm:text-4xl font-black ${t.accent ? "text-white" : "text-[#C4748A]"}`}>
                    {t.price}
                  </div>
                </div>
                <ul className="space-y-3 mb-6 flex-1">
                  {t.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${t.accent ? "bg-white/20" : "bg-[#C4748A]/20"}`}>
                        <Icon name="Check" size={11} className={t.accent ? "text-white" : "text-[#E0A0B0]"} />
                      </div>
                      <span className={`text-sm leading-relaxed ${t.accent ? "text-white/90" : "text-white/65"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-full font-semibold min-h-[48px] ${
                    t.accent
                      ? "bg-white hover:bg-white/90 text-[#8B1A4A]"
                      : "bg-[#C4748A] hover:bg-[#A35570] text-white"
                  }`}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Выбрать тариф
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OBJECTIONS / Я ЗНАЮ О ЧЁМ ТЫ ДУМАЕШЬ ── */}
      <section id="objections" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#100C0D]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C4748A]/15 ring-1 ring-[#C4748A]/30 rounded-full mb-5">
              <Icon name="ShieldCheck" size={14} className="text-[#E0A0B0]" />
              <span className="text-sm font-medium text-[#E0A0B0]">Отвечаю честно</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4" style={{fontFamily:"'Playfair Display',serif"}}>
              Я знаю, о чём <span className="italic text-[#C4748A]">ты думаешь</span>
            </h2>
            <p className="text-base sm:text-lg text-white/55">Давай честно</p>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: "HelpCircle",
                title: "«А если не поможет?»",
                answer: "Это мой самый востребованный проект. Я собрала там всё, чтобы ты не стояла на месте. Мы работаем с причиной, а не со следствием.",
              },
              {
                icon: "Wallet",
                title: "«Это не окупится...»",
                answer: "Остановка стоит дороже. Подумай, сколько денег и сил ты уже слила на БАДы, кофе и курсы, которые не сработали? Инвестиция в себя — самая выгодная.",
              },
              {
                icon: "Lock",
                title: "«Страшно, что другие узнают обо мне...»",
                answer: "Это твой личный путь. Всё конфиденциально. Мы не будем вывешивать твои скрины без спроса.",
              },
              {
                icon: "Users",
                title: "«Не стоит боятся нового!»",
                answer: "У каждой своя боль. Тем более участвуя в расстановках заместителем, ты даже можешь не говорить о своих проблемах — всё трансформируется без озвучивания своей боли. Ты работаешь над собой, а не для показухи.",
              },
            ].map((obj, i) => (
              <div key={i} className="rounded-2xl bg-white/4 ring-1 ring-white/10 p-6 sm:p-8 hover:ring-[#C4748A]/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C4748A]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={obj.icon} size={18} className="text-[#C4748A]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-3" style={{fontFamily:"'Playfair Display',serif"}}>{obj.title}</h3>
                    <p className="text-sm sm:text-base text-white/65 leading-relaxed">{obj.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0D0A0B]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{fontFamily:"'Playfair Display',serif"}}>
              Частые <span className="italic text-[#C4748A]">вопросы</span>
            </h2>
            <p className="text-base sm:text-lg text-white/55">Всё, что важно знать перед вступлением</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-2xl bg-white/4 ring-1 ring-white/10 overflow-hidden hover:ring-[#C4748A]/40 transition-all">
                <button
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-5 text-left hover:bg-white/5 transition-colors min-h-[64px]"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-sm sm:text-base font-semibold pr-4 text-white" style={{fontFamily:"'Playfair Display',serif"}}>{faq.question}</h3>
                  <div className="w-8 h-8 rounded-full bg-[#C4748A]/15 flex items-center justify-center flex-shrink-0">
                    {openFaq === index
                      ? <Minus size={15} className="text-[#C4748A]" />
                      : <Plus size={15} className="text-[#C4748A]" />
                    }
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-5 sm:px-6 pb-5">
                    <p className="text-sm sm:text-base text-white/65 leading-relaxed">{faq.answer}</p>
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