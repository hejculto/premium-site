import {
  Header,
  Hero,
  Services,
  WhyWorkWithMe,
  Portfolio,
  AdvisoryPlans,
  About,
  FinalCTA,
  Footer,
} from '@/components'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyWorkWithMe />
        <Portfolio />
        <AdvisoryPlans />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
