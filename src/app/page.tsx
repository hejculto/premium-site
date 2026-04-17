import {
  Header,
  Hero,
  TransitionSection,
  QuizSection,
  ServicesTransition,
  Portfolio,
  Services,
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
        <QuizSection />
        <ServicesTransition />
        <Portfolio />
        <Services />
        <AdvisoryPlans />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
