import HeroAndManifesto from "@/components/landing/HeroAndManifesto"
import ValueAndAuthor from "@/components/landing/ValueAndAuthor"
import OfferAndFAQ from "@/components/landing/OfferAndFAQ"
import ContactAndFooter from "@/components/landing/ContactAndFooter"

// Палитра — DARK LUXE
// --bg-main:    #0D0A0B   — глубокий чёрный
// --bg-alt:     #100C0D   — графит
// --accent:     #C4748A   — пыльная роза
// --accent-dk:  #8B1A4A   — глубокий бордо
// --accent-lt:  #E0A0B0   — нежный розовый

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0D0A0B] text-[#F5EEE8]">
      <HeroAndManifesto />
      <ValueAndAuthor />
      <OfferAndFAQ />
      <ContactAndFooter />
    </div>
  )
}

export default Index
