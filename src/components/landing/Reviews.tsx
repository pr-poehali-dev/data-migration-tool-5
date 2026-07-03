import Icon from "@/components/ui/icon"

const screenshots = [
  {
    img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/9493bd22-923f-4168-8336-cb2a64ee57f4.jpeg",
    quote: "Первый раз за границей — и сразу 5 звёзд. Расстановки развернули меня к самой себе",
  },
  {
    img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/1dd7772f-bded-4749-ae82-7c9a27ba44c4.jpeg",
    quote: "Это было не путешествие, а ВОЛШЕБСТВО. Столько любви и всего искреннего вокруг",
  },
  {
    img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/d8929f99-49b1-4711-994e-fb8c3fd84453.jpeg",
    quote: "Результаты после ретрита: меняешься ты — и твой муж автоматически. Кайфую от себя такой",
  },
  {
    img: "https://cdn.poehali.dev/projects/922ca72b-539f-438b-87ac-72a0a0d3577f/bucket/d579cbc4-5200-4102-9477-5410552dbfd0.jpeg",
    quote: "Волшебство на грани фантастики — вот так я бы описала наше путешествие",
  },
]

const shortQuotes = [
  "Ретрит — это одно из лучших моих вложений. Я дорогая",
  "Я искренне смеялась и искренне плакала — проживала всё так глубоко, как никогда раньше",
  "Полное доверие: я даже не знала, куда еду. И это было лучшее решение",
]

const Reviews = () => {
  return (
    <section id="reviews" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#F4F6F2] overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7FB069]/12 ring-1 ring-[#7FB069]/30 rounded-full mb-5">
            <Icon name="MessageCircleHeart" size={14} className="text-[#4A7A3A]" />
            <span className="text-sm font-medium text-[#4A7A3A]">Отзывы участниц</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E2B22] mb-4" style={{fontFamily:"'Playfair Display',serif"}}>
            Что говорят те,<span className="text-[#4A7A3A]"> кто уже съездил</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A5850] max-w-xl mx-auto">
            Настоящие сообщения участниц ретрита — без прикрас и придумок
          </p>
        </div>

        {/* Скриншоты */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-14">
          {screenshots.map((s, i) => (
            <div key={i} className="group flex flex-col gap-3">
              <div className="rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-xl bg-white group-hover:ring-[#7FB069]/40 transition-all">
                <img
                  src={s.img}
                  alt="Отзыв участницы"
                  className="w-full object-cover object-top"
                  style={{ maxHeight: "360px" }}
                />
              </div>
              <p className="text-[#4A5850] text-sm leading-relaxed px-1 italic">
                «{s.quote}»
              </p>
            </div>
          ))}
        </div>

        {/* Короткие цитаты */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {shortQuotes.map((q, i) => (
            <div key={i} className="rounded-2xl bg-white ring-1 ring-black/5 p-6 shadow-sm hover:ring-[#7FB069]/40 transition-all">
              <Icon name="Quote" size={22} className="text-[#7FB069] mb-3" />
              <p className="text-[#1E2B22] leading-relaxed" style={{fontFamily:"'Playfair Display',serif"}}>
                {q}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
