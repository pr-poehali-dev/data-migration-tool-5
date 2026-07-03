import HeroAndManifesto from "@/components/landing/HeroAndManifesto"
import ValueAndAuthor from "@/components/landing/ValueAndAuthor"
import OfferAndFAQ from "@/components/landing/OfferAndFAQ"
import ContactAndFooter from "@/components/landing/ContactAndFooter"

// Палитра — RETREAT NATURE
// --bg-dark:    #0F1A14   — глубокий лесной зелёный
// --bg-light:   #F4F6F2   — тёплый белый
// --accent:     #7FB069   — свежий зелёный
// --accent-dk:  #4A7A3A   — глубокий зелёный
// --accent-lt:  #A7D28E   — светло-зелёный

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0F1A14] text-[#F4F6F2]">
      <HeroAndManifesto />
      <ValueAndAuthor />
      <OfferAndFAQ />
      <ContactAndFooter />
    </div>
  )
}

export default Index