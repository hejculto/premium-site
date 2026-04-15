'use client'

import { motion } from 'framer-motion'
import { footer } from '@/data/content'

export function Footer() {
  return (
    <footer className="py-12 border-t border-foreground/5">
      <div className="container-premium">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <span className="text-xl font-bold tracking-tighter">Studio</span>
            <nav className="flex items-center gap-6">
              {footer.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            {footer.social.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-foreground/5 text-center">
          <p className="text-sm text-muted-foreground">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
