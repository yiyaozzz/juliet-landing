"use client"

import { motion, useReducedMotion } from "motion/react"
import { Heart, MessagesSquare, Sparkles, TrendingUp } from "lucide-react"

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { benefits } from "@/lib/constants"

const iconMap = {
  message: MessagesSquare,
  sparkles: Sparkles,
  heart: Heart,
  trending: TrendingUp,
} as const

export function BenefitsSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="benefits"
      aria-labelledby="benefits-heading"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2
          id="benefits-heading"
          className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
        >
          Everything you need to show up ready for the second date
        </h2>
        <p className="mt-4 text-base text-slate-600 sm:text-lg">
          Juliet combines expert feedback, practice partners, and smart tracking
          into a coaching system you can actually stick with.
        </p>
      </div>

      <motion.div
        initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid gap-6 sm:grid-cols-2"
      >
        {benefits.map((benefit) => {
          const Icon = iconMap[benefit.icon]

          return (
            <Card
              key={benefit.title}
              className="group relative overflow-hidden border border-white/40 bg-white/80 p-10 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_35px_45px_-35px_rgba(15,23,42,0.35)]"
            >
              <CardContent className="flex h-full flex-col gap-6">
                <div className="flex size-12 items-center justify-center rounded-full bg-[#fff5b4] text-slate-900 shadow-soft">
                  <Icon className="size-6" aria-hidden />
                </div>
                <div>
                  <CardTitle>{benefit.title}</CardTitle>
                  <CardDescription className="mt-3 text-base text-slate-600">
                    {benefit.description}
                  </CardDescription>
                </div>
              </CardContent>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
                <div className="absolute inset-0 bg-gradient-to-br from-[#f9d544]/20 via-transparent to-transparent" />
              </div>
            </Card>
          )
        })}
      </motion.div>
    </section>
  )
}

export default BenefitsSection
