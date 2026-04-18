'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md bg-[#0f0f0f] rounded-2xl border border-white/10 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface FormModalContentProps {
  plan: {
    id: string
    modalTitle: string
    planLabel: string
  }
  onClose: () => void
}

export function FormModalContent({ plan, onClose }: FormModalContentProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!name.trim()) {
      setError('Indtast dit navn')
      return
    }

    if (!validateEmail(email)) {
      setError('Indtast en gyldig e-mailadresse')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: plan.planLabel,
          name,
          email,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit')
      }

      setIsSuccess(true)
    } catch {
      setError('Noget gik galt. Prøv venligst igen.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center">
        <div className="w-16 h-16 bg-[#ff6a3d] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Tak!</h3>
        <p className="text-neutral-400 mb-6">
          Tak for din interesse. Vi sender dig en mail med mere information hurtigst muligt.
        </p>
        <button
          onClick={onClose}
          className="px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
        >
          Luk
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-xl font-semibold text-white mb-2">
        {plan.modalTitle}
      </h3>
      <p className="text-neutral-400 text-sm mb-6">
        Udfyld dine oplysninger nedenfor, så sender vi dig mere information om denne løsning.
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm text-neutral-300 mb-2">Navn</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Dit navn"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:border-[#ff6a3d] focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm text-neutral-300 mb-2">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="din@email.dk"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:border-[#ff6a3d] focus:outline-none transition-colors"
          />
        </div>
      </div>

      {error && (
        <p className="text-red-400 text-sm mb-4">{error}</p>
      )}

      <p className="text-neutral-500 text-xs mb-6">
        Der bliver ikke foretaget nogen betaling, når du klikker på &quot;Fortsæt&quot;.
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-[#ff6a3d] text-black font-medium rounded-xl hover:bg-[#ff6a3d]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sender...' : 'Fortsæt'}
      </button>
    </form>
  )
}