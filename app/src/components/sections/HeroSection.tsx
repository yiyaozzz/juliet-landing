"use client"

import { useCallback } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { heroContent } from "@/lib/constants"

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  const handleCtaClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      const href = (event.currentTarget.getAttribute("href") || "").replace(
        /^#/, ""
      )
      if (!href) return

      const target = document.getElementById(href)
      if (target) {
        event.preventDefault()
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    },
    []
  )

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[#fffdf6]"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute inset-x-0 top-[-40%] h-[520px] w-full bg-gradient-to-b from-[#ffe362]/70 via-transparent to-transparent blur-[60px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-[-50%] h-[420px] w-full bg-gradient-to-t from-[#cab5d4]/30 via-transparent to-transparent blur-[90px]" />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center justify-center gap-16 px-4 py-24 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="space-y-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            {heroContent.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="text-balance text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            {heroContent.title}
          </h1>
          <p className="mx-auto max-w-2xl text-balance text-lg text-slate-600 sm:text-xl">
            {heroContent.description}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button asChild className="min-w-[200px]">
              <Link href={heroContent.primaryCta.href} onClick={handleCtaClick}>
                {heroContent.primaryCta.label}
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="min-w-[200px] border border-black/5 bg-white/50 backdrop-blur hover:bg-white"
            >
              <Link href={heroContent.secondaryCta.href} onClick={handleCtaClick}>
                {heroContent.secondaryCta.label}
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.dl
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="grid w-full gap-6 rounded-3xl border border-white/30 bg-white/60 p-8 text-left shadow-[0_35px_50px_-35px_rgba(15,23,42,0.3)] backdrop-blur md:grid-cols-3"
        >
          {heroContent.metrics.map((metric) => (
            <div key={metric.label} className="space-y-2">
              <dt className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
                {metric.label}
              </dt>
              <dd className="text-3xl font-semibold text-slate-900">
                {metric.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}

export default HeroSection
