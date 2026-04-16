import {
  Header,
  Hero,
  TransitionSection,
  QuizSection,
  ServicesTransition,
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
        <QuizSection />
        <ServicesTransition />
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
