"use client";

import { useCallback } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";
import { smoothScrollToHash } from "@/lib/utils";
import { heroContent } from "@/lib/constants";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const handleCtaClick = useCallback(
    (event: ReactMouseEvent<HTMLAnchorElement>) => {
      smoothScrollToHash(event);
    },
    []
  );

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

      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="grid w-full items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-12">
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start gap-6 text-left"
          >
            <div className="space-y-5">
              <p className="text-sm font-semibold tracking-[0.3em] text-slate-500 uppercase">
                {heroContent.eyebrow}
              </p>
              <h1
                id="hero-heading"
                className="text-left text-4xl leading-tight font-bold tracking-tight text-balance text-slate-900 sm:text-5xl lg:text-[3.5rem]"
              >
                {heroContent.title}
              </h1>
              <p className="max-w-xl text-left text-lg text-slate-600 sm:text-xl">
                {heroContent.description}
              </p>
            </div>

            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-5">
              <Button asChild className="min-w-[180px]">
                <Link
                  href={heroContent.primaryCta.href}
                  onClick={handleCtaClick}
                >
                  {heroContent.primaryCta.label}
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="min-w-[180px] border border-black/5 bg-white/60 text-slate-900 backdrop-blur transition hover:bg-white"
              >
                <Link
                  href={heroContent.secondaryCta.href}
                  onClick={handleCtaClick}
                >
                  {heroContent.secondaryCta.label}
                </Link>
              </Button>
            </div>

            <motion.dl
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="flex w-full max-w-xl flex-wrap items-center gap-4 rounded-2xl border border-white/60 bg-white/85 px-5 py-4 text-left shadow-[0_25px_45px_-35px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:gap-6"
            >
              {heroContent.metrics.map((metric) => (
                <div key={metric.label} className="space-y-1">
                  <dt className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
                    {metric.label}
                  </dt>
                  <dd className="text-2xl font-semibold text-slate-900">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 32 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[360px]"
          >
            <div className="relative aspect-[9/18] w-full overflow-hidden">
              <Image
                src="/images/juliet-voice.png"
                alt="Juliet voice interface with conversation controls"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
