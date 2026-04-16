import {
  Header,
  Hero,
  TransitionSection,
  QuizSection,
  ServicesTransition,
  Portfolio,
  Services,
  WhyWorkWithMe,
  AdvisoryPlans,
  About,
  BackToTop,
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
        <WhyWorkWithMe />
        <AdvisoryPlans />
        <About />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
