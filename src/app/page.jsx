import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Info } from '@/components/Info'

import { InfoTwo } from '@/components/InfoTwo'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Info />
        <InfoTwo />
        <CallToAction />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
