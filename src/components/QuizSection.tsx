'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const questions = [
  {
    id: 'q1',
    question: 'What would you like to improve right now?',
    options: ['Build a new website', 'Improve my current website', 'Get more customers', 'Use AI and automation', 'I\'m not sure yet'],
  },
  {
    id: 'q2',
    question: 'Main goal?',
    options: ['More sales', 'More leads', 'Better conversion', 'Stronger brand', 'Save time'],
  },
  {
    id: 'q3',
    question: "What's the biggest problem?",
    options: ['Low traffic', 'Poor conversion', 'Outdated design', 'No clear strategy'],
  },
  {
    id: 'q4',
    question: 'When do you want to start?',
    options: ['Just exploring', 'Soon', 'This month'],
  },
  {
    id: 'q5',
    question: 'Type of support?',
    options: ['One-time project', 'Ongoing support', 'Full strategy', 'Not sure'],
  },
]

export function QuizSection() {
  const [showQuiz, setShowQuiz] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const toggleOption = (questionId: string, option: string) => {
    setAnswers((prev) => {
      const current = prev[questionId] || []
      if (current.includes(option)) {
        return { ...prev, [questionId]: current.filter((o) => o !== option) }
      }
      return { ...prev, [questionId]: [...current, option] }
    })
  }

  const nextStep = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    console.log('Quiz submitted:', { answers, email })
    setSubmitted(true)
  }

  return (
    <section className="py-24 md:py-32 bg-card/50">
      <div className="container-premium px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!showQuiz ? (
              <motion.div
                key="intro"
                initial={{ opacity: 1, x: 0 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                  Not sure what your business needs to grow?
                </h2>
                <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                  In less than a minute, get a clear direction on what to focus on next — from your website to marketing, ecommerce or AI.
                </p>
                <button
                  onClick={() => setShowQuiz(true)}
                  className="px-10 py-4 text-lg border-2 border-[#ff6a3d] text-[#ff6a3d] rounded-full hover:bg-[#ff6a3d] hover:text-white transition-colors"
                >
                  Get your free plan
                </button>
              </motion.div>
            ) : !submitted ? (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <button
                  onClick={() => {
                    if (currentStep > 0) {
                      prevStep()
                    } else {
                      setShowQuiz(false)
                      setCurrentStep(0)
                    }
                  }}
                  className="text-neutral-500 hover:text-neutral-700 mb-8 inline-block"
                >
                  ← Back
                </button>

                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
                  <div className="flex justify-center mb-8">
                    <div className="flex gap-2">
                      {questions.map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            i === currentStep ? 'bg-[#ff6a3d]' : i < currentStep ? 'bg-[#ff6a3d]/50' : 'bg-neutral-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {currentStep < questions.length ? (
                    <>
                      <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">
                        {questions[currentStep].question}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {questions[currentStep].options.map((option) => (
                          <label
                            key={option}
                            className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                              (answers[questions[currentStep].id] || []).includes(option)
                                ? 'border-[#ff6a3d] bg-[#ff6a3d]/5'
                                : 'border-neutral-200 hover:border-neutral-300'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={(answers[questions[currentStep].id] || []).includes(option)}
                              onChange={() => toggleOption(questions[currentStep].id, option)}
                              className="w-5 h-5 accent-[#ff6a3d]"
                            />
                            <span className="text-lg text-neutral-800">{option}</span>
                          </label>
                        ))}
                      </div>
                      <div className="flex justify-center mt-8">
                        <button
                          onClick={nextStep}
                          className="px-10 py-4 text-lg border-2 border-[#ff6a3d] text-[#ff6a3d] rounded-full hover:bg-[#ff6a3d] hover:text-white transition-colors"
                        >
                          {currentStep === questions.length - 1 ? 'Continue' : 'Next'}
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">
                        Enter your email to get your personalized recommendation
                      </h3>
                      <div className="max-w-md mx-auto">
                        <input
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-6 py-4 text-lg border-2 border-neutral-200 rounded-full focus:border-[#ff6a3d] focus:outline-none mb-6"
                        />
                        <div className="flex justify-center">
                          <button
                            onClick={handleSubmit}
                            className="px-12 py-4 text-lg border-2 border-[#ff6a3d] text-[#ff6a3d] rounded-full hover:bg-[#ff6a3d] hover:text-white transition-colors"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-[#ff6a3d] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">Thank you!</h3>
                <p className="text-lg text-neutral-600">
                  We&apos;ll send your personalized recommendation to {email}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
