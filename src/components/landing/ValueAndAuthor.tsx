import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const benefits = [
  {
    icon: "HeartHandshake",
    title: "Полюбишь себя по-настоящему",
    desc: "Уже через 30 дней ты перестанешь критиковать себя в зеркале. Научишься принимать своё тело, ценить себя и говорить «нет» без чувства вины.",
    result: "−80% самокритики",
  },
  {
    icon: "Sparkles",
    title: "Откроешь свою женственность",
    desc: "Практики на раскрытие сексуальности и женской энергии. Ты снова почувствуешь себя желанной, лёгкой и привлекательной — не для кого-то, а для себя.",
    result: "Уже на 1-й неделе",
  },
  {
    icon: "Wind",
    title: "Избавишься от хронического стресса",
    desc: "Конкретные инструменты: дыхательные практики, работа с нервной системой, нейро-упражнения. Сон нормализуется за 2–3 недели.",
    result: "Сон за 2 недели",
  },
  {
    icon: "Target",
    title: "Найдёшь свой путь и цель",
    desc: "Выйдешь из «дня сурка». Поймёшь, чего ты на самом деле хочешь, и составишь конкретный план — не в теории, а в жизни.",
    result: "Ясность за 21 день",
  },
  {
    icon: "Users",
    title: "Обретёшь настоящих подруг",
    desc: "500+ женщин, которые тебя поймут без осуждения. Закрытое сообщество с живыми встречами, поддержкой 24/7 и общими победами.",
    result: "Сообщество 500+",
  },
  {
    icon: "TrendingUp",
    title: "Вырастешь в доходе",
    desc: "Когда убираешь внутренние блоки — деньги приходят легче. Участницы клуба в среднем увеличивают доход на 30–40% за 3 месяца.",
    result: "+30–40% за 3 мес.",
  },
]

const reviews = [
  {
    label: "Похудение без диет",
    img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/5aa714bb-9f1d-4d56-bfe5-5b8cbb17cddc.jpeg",
    quote: "Я заметила, что худею. Объёмы, немного вес. Прям я Рада очень ❤️",
  },
  {
    label: "Здоровье и цикл наладился",
    img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/f5fbe2fd-96c0-4357-bb33-29fd2d7644e5.jpeg",
    quote: "Первый раз за долгое время месячные пришли и идут вообще незаметно 😮 обычно я первый день на нурофене...",
  },
  {
    label: "«Ты гуру, наставник, волшебница»",
    img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/6aeac33e-151b-4169-9c2f-cc523e05d0ee.jpeg",
    quote: "Я теперь к психологам не пойду 😊 это все не то. Ты гуру наставник волшебница 🥰",
  },
  {
    label: "2 месяца — только разгон",
    img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/4476ce3f-56b1-49b0-b1f2-75e6e97762fd.jpeg",
    quote: "Столько инсайтов за всё это время 🙏 Безумно благодарна судьбе, что наши жизненные пути пересеклись. В нужное время.",
  },
]

const ValueAndAuthor = () => {
  return (
    <>
      {/* ── BENEFITS ── */}
      <section id="benefits" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0D0A0B] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B1A4A]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C4748A]/10 ring-1 ring-[#C4748A]/25 rounded-full mb-5">
              <Icon name="Sparkles" size={14} className="text-[#E0A0B0]" />
              <span className="text-sm font-medium text-[#E0A0B0]">Конкретные результаты</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4" style={{fontFamily:"'Playfair Display',serif"}}>
              Что ты получишь
              <span className="text-[#C4748A]"> в клубе</span>
            </h2>
            <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto">
              Не абстрактный «личностный рост» — а конкретные изменения с измеримым результатом
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white/4 ring-1 ring-white/10 p-6 sm:p-8 hover:ring-[#C4748A]/40 hover:bg-white/6 transition-all"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#C4748A]/15 ring-1 ring-[#C4748A]/25">
                    <Icon name={b.icon} size={20} className="text-[#E0A0B0]" />
                  </div>
                  <span className="text-xs font-bold text-[#C4748A] bg-[#C4748A]/10 px-3 py-1 rounded-full">{b.result}</span>
                </div>
                <h3 className="text-base font-bold mb-2 text-white leading-snug" style={{fontFamily:"'Playfair Display',serif"}}>{b.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              size="lg"
              className="bg-[#C4748A] hover:bg-[#A35570] text-white rounded-full px-10 font-semibold shadow-xl shadow-[#C4748A]/25 min-h-[52px]"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Хочу эти результаты — записаться
            </Button>
          </div>
        </div>
      </section>

      {/* ── AUTHOR ── */}
      <section id="author" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#100C0D] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#8B1A4A]/12 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Фото — медитация */}
            <div className="relative order-1 lg:order-1">
              <div className="absolute -inset-3 bg-gradient-to-br from-[#C4748A]/30 to-transparent rounded-3xl blur-2xl" />
              <img
                src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/bc2d28c3-6dd7-4159-95f7-e373c2f3c629.jpeg"
                alt="Ирина Абрамова"
                className="relative z-10 w-full max-w-xs sm:max-w-sm mx-auto rounded-3xl object-cover shadow-2xl shadow-[#C4748A]/30 ring-1 ring-white/10"
                style={{ aspectRatio: "3/4", objectPosition: "center top" }}
              />
              <div className="absolute z-20 -top-3 -right-2 sm:-right-4 bg-[#C4748A] text-white rounded-2xl shadow-xl px-4 py-3">
                <p className="text-xs font-medium opacity-80 mb-0.5">Опыт</p>
                <p className="text-xl font-black">5+ лет</p>
              </div>
            </div>

            {/* Текст */}
            <div className="order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 leading-tight" style={{fontFamily:"'Playfair Display',serif"}}>
                Абрамова Ирина
                <span className="block text-[#C4748A] text-xl sm:text-2xl font-light mt-1 italic">Психолог · Энерготерапевт · Расстановщик</span>
              </h2>

              <blockquote className="text-lg sm:text-xl font-light text-white/80 leading-relaxed mb-6 border-l-4 border-[#C4748A] pl-5 italic" style={{fontFamily:"'Playfair Display',serif"}}>
                "Я знаю, каково это — жить в постоянном стрессе и не узнавать себя в зеркале. Я прошла этот путь сама и помогла пройти 2500+ женщинам."
              </blockquote>

              <div className="space-y-3 mb-8">
                {[
                  "Практикующий психолог более 5 лет",
                  "Автор методики работы со стрессом и женской энергией",
                  "Провела более 2500 консультаций",
                  "Спикер женских форумов и ретритов",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#C4748A] flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={11} className="text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-white/60">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-white/50 leading-relaxed text-sm sm:text-base">
                Я не просто психолог — я женщина, которая однажды решила жить по-другому. И теперь хочу помочь тебе сделать то же самое — быстро, практично, с любовью к себе.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY ── */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0D0A0B] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C4748A]/10 ring-1 ring-[#C4748A]/25 rounded-full mb-6">
                <Icon name="Heart" size={14} className="text-[#E0A0B0]" />
                <span className="text-sm font-medium text-[#E0A0B0]">Сообщество</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight" style={{fontFamily:"'Playfair Display',serif"}}>
                Ты не одна —<br />
                <span className="text-[#C4748A]">мы вместе</span>
              </h2>
              <p className="text-base sm:text-lg text-white/55 leading-relaxed mb-7">
                Более 500 женщин уже прошли проекты. Они поддерживают, понимают без слов и радуются твоим победам как своим. Здесь не бросают начатое — доводят до конца с любовью.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { icon: "Video", text: "Живые практики 2–3 раза в неделю (онлайн)" },
                  { icon: "MessageCircle", text: "Закрытый чат поддержки 24/7" },
                  { icon: "Trophy", text: "Ежемесячный групповой челлендж с призами" },
                  { icon: "BookOpen", text: "Библиотека материалов только для участниц" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#C4748A]/15 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={15} className="text-[#C4748A]" />
                    </div>
                    <span className="text-sm sm:text-base text-white/65">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-[#C4748A] hover:bg-[#A35570] text-white rounded-full px-10 font-semibold shadow-lg shadow-[#C4748A]/25 min-h-[52px] w-full sm:w-auto"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Стать участницей клуба
              </Button>
            </div>

            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/96ea61d4-81d8-4d37-8125-9586a57aa74b.jpeg"
                alt="Участницы клуба вместе"
                className="relative z-10 w-full rounded-3xl object-cover shadow-2xl shadow-[#C4748A]/15"
                style={{ aspectRatio: "3/4", objectPosition: "center 20%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRANSFORMATIONS ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#100C0D]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C4748A]/15 ring-1 ring-[#C4748A]/30 rounded-full mb-5">
              <Icon name="Sparkles" size={14} className="text-[#E0A0B0]" />
              <span className="text-sm font-medium text-[#E0A0B0]">Внешние изменения</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight" style={{fontFamily:"'Playfair Display',serif"}}>
              Они изменились<br />
              <span className="italic text-[#C4748A]">снаружи и внутри</span>
            </h2>
            <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto">
              Ушли отёки, снизился вес — а главное появился блеск в глазах
            </p>
          </div>

          {/* Личная трансформация автора — ДО / ПОСЛЕ */}
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1A0F12] to-[#0D0A0B] ring-1 ring-[#C4748A]/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* ДО — монашка */}
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
                <img
                  src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/ff043c18-5851-44a9-a12f-ece25e3b2669.jpeg"
                  alt="Я 4 года назад"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="bg-black/60 backdrop-blur text-white/90 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ring-1 ring-white/20">До</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs font-bold tracking-[0.3em] text-white/70 uppercase mb-1">4 года назад</p>
                  <p className="text-white text-base" style={{fontFamily:"'Playfair Display',serif"}}>Жила в чужих правилах</p>
                </div>
              </div>
              {/* ПОСЛЕ — медитация */}
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-[#C4748A]/40 shadow-2xl shadow-[#C4748A]/20">
                <img
                  src="https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/bc2d28c3-6dd7-4159-95f7-e373c2f3c629.jpeg"
                  alt="Я сегодня"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#C4748A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">После</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs font-bold tracking-[0.3em] text-[#E0A0B0] uppercase mb-1">Сегодня</p>
                  <p className="text-white text-base" style={{fontFamily:"'Playfair Display',serif"}}>Живу в своей энергии</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs font-bold tracking-[0.3em] text-[#E0A0B0] uppercase mb-3">Моя история</p>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight" style={{fontFamily:"'Playfair Display',serif"}}>
                Я была <span className="italic text-[#C4748A]">такой же,</span> как и ты
              </h3>
              <p className="text-white/65 text-base leading-relaxed mb-3 max-w-2xl mx-auto">
                Уставшая, отёчная, со взглядом «ничего не радует». Жила в чужих правилах, не верила в себя, в своё тело, в свою жизнь.
              </p>
              <p className="text-white/65 text-base leading-relaxed max-w-2xl mx-auto">
                Сегодня я живая, дерзкая, чувствую себя женщиной. И провела по этому пути уже 2500+ женщин. Ты следующая.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {[
              {
                img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/3c7d2f5f-13df-459e-b52a-35ae46adebed.png",
                tag: "До и после",
                fit: "contain" as const,
                quote: "«Нашла себя. Впервые за годы посмотрела в зеркало и улыбнулась»",
                changes: ["Ушли отёки с лица", "Снизился вес", "Блеск в глазах вернулся"],
              },
              {
                img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/233a25f0-fc70-4be8-93e0-b7a38e55d036.jpeg",
                tag: "Через месяц",
                fit: "cover" as const,
                quote: "«Полюбила себя. Перестала извиняться за то, что существую»",
                changes: ["Кожа стала свежее", "Ушла отёчность", "Улыбка вернулась"],
              },
              {
                img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/aa178efb-2515-4c3d-8305-11afb8f10626.jpeg",
                tag: "До и после",
                fit: "cover" as const,
                quote: "«Перестала заедать стресс. Еда перестала быть единственной радостью»",
                changes: ["Снизился вес без диет", "Разгладились морщинки", "Глаза горят — жизнь нравится"],
              },
              {
                img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/5982c162-4fe9-4db8-a0fd-bc1b43358d6a.jpeg",
                tag: "Результаты участниц",
                fit: "cover" as const,
                quote: "«Победила себя. Пришла с другим запросом — а постройнела сама собой»",
                changes: ["Постройнели без запроса на вес", "Ушли отёки", "Победа над собой"],
              },
            ].map((p, i) => (
              <div key={i} className="flex flex-col gap-3 group">
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl group-hover:ring-[#C4748A]/50 transition-all bg-black">
                  <img
                    src={p.img}
                    alt={p.tag}
                    className={`w-full aspect-[3/4] ${p.fit === "contain" ? "object-contain" : "object-cover object-top"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#C4748A]/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {p.tag}
                    </span>
                  </div>
                </div>
                <p className="text-[#E0A0B0] text-sm font-medium leading-snug px-1 italic">
                  {p.quote}
                </p>
                <div className="flex flex-col gap-1.5 px-1">
                  {p.changes.map((c, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C4748A] shrink-0" />
                      <span className="text-white/60 text-xs">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#100C0D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C4748A]/15 ring-1 ring-[#C4748A]/30 rounded-full mb-5">
              <Icon name="Star" size={14} className="text-[#E0A0B0]" />
              <span className="text-sm font-medium text-[#E0A0B0]">Истории участниц</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight" style={{fontFamily:"'Playfair Display',serif"}}>
              Они уже изменили<br />
              <span className="italic text-[#C4748A]">свою жизнь</span>
            </h2>
            <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto">
              Реальные истории участниц клуба — без фотошопа и придумок
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="group flex flex-col gap-3">
                {/* Лейбл */}
                <div className="inline-flex items-center gap-2 self-start bg-[#C4748A]/15 ring-1 ring-[#C4748A]/30 rounded-full px-3 py-1.5">
                  <Icon name="MessageCircle" size={12} className="text-[#E0A0B0]" />
                  <span className="text-xs font-semibold text-[#E0A0B0]">{r.label}</span>
                </div>
                {/* Скриншот переписки */}
                <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-xl group-hover:ring-[#C4748A]/40 transition-all">
                  <img
                    src={r.img}
                    alt={r.label}
                    className="w-full object-cover object-top"
                    style={{ maxHeight: "340px" }}
                  />
                </div>
                {/* Цитата под скриншотом */}
                <p className="text-white/50 text-xs leading-relaxed px-1 italic line-clamp-2">
                  {r.quote}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              className="bg-[#C4748A] hover:bg-[#A35570] text-white rounded-full px-10 font-semibold shadow-xl shadow-[#C4748A]/25 min-h-[52px]"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Хочу такой же результат
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ValueAndAuthor
