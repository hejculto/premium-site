import {
  Header,
  Hero,
  TransitionSection,
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
        <TransitionSection />
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
