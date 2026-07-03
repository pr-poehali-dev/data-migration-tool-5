import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import Reveal from "@/components/landing/Reveal"

const benefits = [
  {
    icon: "Waves",
    title: "Отдых и расслабление",
    desc: "Насладишься отдыхом в умиротворяющей природной обстановке, оставишь позади повседневные заботы и восстановишь силы. Найдёшь внутреннюю гармонию и погрузишься в культуру страны.",
  },
  {
    icon: "Sprout",
    title: "Внутренний рост",
    desc: "Удалившись от суеты и шума, ты получишь возможность для самоанализа и личностного развития. Обретёшь новые осознания и переосмыслишь свои жизненные цели.",
  },
  {
    icon: "BrainCircuit",
    title: "Знания о себе",
    desc: "Побывав там, ты сможешь вспомнить многое о себе. Наполнишься энергией и ощутишь баланс между мужским и женским началом.",
  },
  {
    icon: "Users2",
    title: "Расстановки",
    desc: "Сможешь получить свою расстановку и участвовать заместителем в расстановках других — это глубокая работа с подсознанием и родовыми сценариями.",
  },
  {
    icon: "HeartHandshake",
    title: "Новые знакомства и эмоции",
    desc: "Приятная компания, с которой путь к неизведанному будет лёгким и весёлым. Близкие по духу люди, живые эмоции и настоящие связи.",
  },
  {
    icon: "Sparkles",
    title: "Новое мышление",
    desc: "Когда отпуск — это не избегание реальности, а решение многих проблем через изменение мышления. Ты вернёшься другим человеком.",
  },
]

const ValueAndAuthor = () => {
  return (
    <>
      {/* ── BENEFITS ── */}
      <section id="benefits" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0F1A14] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7FB069]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7FB069]/12 ring-1 ring-[#7FB069]/30 rounded-full mb-5">
              <Icon name="Sparkles" size={14} className="text-[#A7D28E]" />
              <span className="text-sm font-medium text-[#A7D28E]">7 дней перемен</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4" style={{fontFamily:"'Playfair Display',serif"}}>
              Что ты получишь
              <span className="text-[#A7D28E]"> от ретрита</span>
            </h2>
            <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto">
              Не просто отпуск — а возвращение к себе, наполнение энергией и переосмысление жизни
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((b, i) => (
              <Reveal key={i} delay={(i % 3) * 120}>
                <div className="group h-full rounded-2xl bg-white/4 ring-1 ring-white/10 p-6 sm:p-8 hover:ring-[#7FB069]/40 hover:bg-white/6 transition-all">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#7FB069]/15 ring-1 ring-[#7FB069]/25 mb-5">
                    <Icon name={b.icon} size={20} className="text-[#A7D28E]" />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-white leading-snug" style={{fontFamily:"'Playfair Display',serif"}}>{b.title}</h3>
                  <p className="text-white/50 leading-relaxed text-sm">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-[#7FB069] hover:bg-[#6B9B57] text-[#0F1A14] rounded-full px-10 font-bold shadow-xl shadow-[#7FB069]/25 min-h-[52px]"
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            >
              Хочу на ретрит
            </Button>
          </div>
        </div>
      </section>

      {/* ── AUTHORS: ИРИНА ── */}
      <section id="author" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#F4F6F2] overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7FB069]/12 ring-1 ring-[#7FB069]/30 rounded-full mb-5">
              <Icon name="Users" size={14} className="text-[#4A7A3A]" />
              <span className="text-sm font-medium text-[#4A7A3A]">Ведущие ретрита</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E2B22]" style={{fontFamily:"'Playfair Display',serif"}}>
              Мы объединились —<span className="text-[#4A7A3A]"> для тебя</span>
            </h2>
          </div>

          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
            <div className="relative order-1">
              <div className="absolute -inset-3 bg-gradient-to-br from-[#7FB069]/25 to-transparent rounded-3xl blur-2xl" />
              <img
                src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/b3cfb7f7-7248-4d55-bf63-abea2fcf1484.jpeg"
                alt="Ирина Абрамова"
                className="relative z-10 w-full max-w-sm mx-auto rounded-3xl object-cover shadow-2xl ring-1 ring-black/5"
                style={{ aspectRatio: "3/4", objectPosition: "center top" }}
              />
              <div className="absolute z-20 -bottom-3 -right-2 sm:-right-4 bg-[#7FB069] text-[#0F1A14] rounded-2xl shadow-xl px-4 py-3">
                <p className="text-xs font-medium opacity-80 mb-0.5">Консультаций</p>
                <p className="text-xl font-black">2000+</p>
              </div>
            </div>

            <div className="order-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1E2B22] mb-2 leading-tight" style={{fontFamily:"'Playfair Display',serif"}}>
                Ирина Абрамова
                <span className="block text-[#4A7A3A] text-lg sm:text-xl font-light mt-1 italic">Психолог · Расстановщик · Фасилитатор Access</span>
              </h3>

              <div className="space-y-3 my-6">
                {[
                  "Дипломированный психолог, работаю с подсознанием",
                  "Создатель практик, медитаций, метафорических карт",
                  "Расстановщик и фасилитатор Access Energetic Facelift",
                  "Провела более 2000 консультаций",
                  "5+ лет собираю близких по духу людей онлайн и офлайн",
                  "Ретриты в Египет и на Мальдивы",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#7FB069] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={11} className="text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-[#4A5850]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── VYACHESLAV ── */}
          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1E2B22] mb-2 leading-tight" style={{fontFamily:"'Playfair Display',serif"}}>
                Вячеслав Домовец
                <span className="block text-[#4A7A3A] text-lg sm:text-xl font-light mt-1 italic">Фитнес-тренер · Инструктор йоги · Массажист</span>
              </h3>

              <p className="text-[#4A5850] leading-relaxed text-sm sm:text-base my-5">
                С 2011 года в йоге и непрерывно обучаюсь: провожу ретриты, йога-туры и семинары. За плечами сертифицированные курсы в Индии, десятки семинаров у именитых мастеров СНГ, Индии и Таиланда.
              </p>

              <p className="text-xs font-bold tracking-widest text-[#4A7A3A] uppercase mb-3">Обучение</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "TTC-200 Ришикеш",
                  "Гимнастика «Хаду»",
                  "Фитнес-тренер",
                  "Классический массаж",
                  "Традиционный тайский",
                  "Ребозо-массаж",
                  "Функциональный массаж",
                ].map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white ring-1 ring-[#7FB069]/30 text-[#4A5850] text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-3 bg-gradient-to-bl from-[#7FB069]/25 to-transparent rounded-3xl blur-2xl" />
              <img
                src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/d582fc37-40a3-4b81-b932-075835baa4cd.png"
                alt="Вячеслав Домовец"
                className="relative z-10 w-full max-w-sm mx-auto rounded-3xl object-cover shadow-2xl ring-1 ring-black/5"
                style={{ aspectRatio: "3/4", objectPosition: "center top" }}
              />
              <div className="absolute z-20 -bottom-3 -left-2 sm:-left-4 bg-[#7FB069] text-[#0F1A14] rounded-2xl shadow-xl px-4 py-3">
                <p className="text-xs font-medium opacity-80 mb-0.5">В йоге</p>
                <p className="text-xl font-black">с 2011</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ATMOSPHERE / COMMUNITY ── */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0F1A14] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7FB069]/12 ring-1 ring-[#7FB069]/30 rounded-full mb-6">
                <Icon name="Heart" size={14} className="text-[#A7D28E]" />
                <span className="text-sm font-medium text-[#A7D28E]">Атмосфера</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight" style={{fontFamily:"'Playfair Display',serif"}}>
                Близкие по духу —<br />
                <span className="text-[#A7D28E]">рядом с тобой</span>
              </h2>
              <p className="text-base sm:text-lg text-white/55 leading-relaxed mb-7">
                Более 5 лет мы собираем людей, с которыми хочется расти. Живые практики, глубокие расстановки, телесная работа и вечера у моря — в тёплой компании, где тебя понимают без слов.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { icon: "Sun", text: "Тренинг по работе с установками" },
                  { icon: "Activity", text: "Телесные и йога-практики каждый день" },
                  { icon: "Users2", text: "Участие заместителем в расстановках" },
                  { icon: "Map", text: "Экскурсия и знакомство с культурой страны" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#7FB069]/15 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={15} className="text-[#A7D28E]" />
                    </div>
                    <span className="text-sm sm:text-base text-white/65">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-[#7FB069] hover:bg-[#6B9B57] text-[#0F1A14] rounded-full px-10 font-bold shadow-lg shadow-[#7FB069]/25 min-h-[52px] w-full sm:w-auto"
                onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              >
                Присоединиться к группе
              </Button>
            </div>

            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/709dff92-4974-471e-8094-b9fa58adaf60.jpeg"
                alt="Группа на ретрите"
                className="relative z-10 w-full rounded-3xl object-cover shadow-2xl"
                style={{ aspectRatio: "3/4", objectPosition: "center center" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ValueAndAuthor