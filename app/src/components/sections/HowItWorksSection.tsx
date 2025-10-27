"use client"

import { motion, useReducedMotion } from "motion/react"

import { howItWorksSteps } from "@/lib/constants"

export function HowItWorksSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="bg-[#fff7e6]/60 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2
            id="how-it-works-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            How Juliet keeps you date-ready
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            A coaching loop that moves you from anxious to intentional in just a
            few minutes a day.
          </p>
        </div>

        <motion.ol
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 32 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative grid gap-8 md:grid-cols-4"
        >
          <div className="hidden md:block md:absolute md:inset-x-0 md:top-8 md:h-0.5 md:bg-gradient-to-r md:from-[#cab5d4] md:via-[#f9d544] md:to-[#ffe362]" aria-hidden />

          {howItWorksSteps.map((step) => (
            <li key={step.number} className="relative flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-full bg-[#f9d544] text-lg font-semibold text-slate-900 shadow-soft">
                  {step.number}
                </span>
                <span className="hidden text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 md:inline">
                  Step {step.number}
                </span>
              </div>
              <div className="pl-0 md:pl-2">
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-base text-slate-600">{step.description}</p>
              </div>
              <div className="absolute left-6 top-12 -z-10 h-[calc(100%+1.5rem)] w-px bg-gradient-to-b from-[#cab5d4] via-[#f9d544] to-transparent md:hidden" aria-hidden />
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}

export default HowItWorksSection
