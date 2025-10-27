"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { navigation } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-white/10 transition-shadow duration-300",
        "bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60",
        scrolled
          ? "shadow-[0_12px_40px_-20px_rgba(15,23,42,0.35)]"
          : "shadow-none"
      )}
    >
      <nav className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-4 px-4 py-4 sm:px-6 md:grid-cols-[auto_1fr_auto] md:gap-6 md:py-3 lg:px-8">
        <Link
          href="#hero"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900 transition-colors hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 focus-visible:ring-offset-white"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_10px_30px_-15px_rgba(15,23,42,0.65)]">
            {navigation.logoText[0] ?? "J"}
          </span>
          <span className="leading-tight">{navigation.logoText}</span>
        </Link>

        <div className="flex flex-col items-start gap-3 text-sm font-medium text-slate-600 md:flex-row md:items-center md:justify-center md:gap-8">
          {navigation.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-slate-900 focus-visible:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 focus-visible:ring-offset-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex justify-start md:justify-end">
          <Button className="min-w-[160px]" aria-label={navigation.cta.label}>
            {navigation.cta.label}
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
