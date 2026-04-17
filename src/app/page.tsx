import {
  Header,
  Hero,
  TransitionSection,
  QuizSection,
  ServicesTransition,
  StrategicCTA,
  Portfolio,
  About,
  Services,
  AdvisoryPlans,
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
        <QuizSection />
        <ServicesTransition />
        <StrategicCTA />
        <Portfolio />
        <About />
        <Services />
        <AdvisoryPlans />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
