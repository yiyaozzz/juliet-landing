import type { MouseEvent } from "react"

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function smoothScrollToHash(event: MouseEvent<HTMLAnchorElement>) {
  const href = event.currentTarget.getAttribute("href")
  if (!href || !href.startsWith("#")) {
    return
  }

  const targetId = href.replace(/^#/, "")
  if (!targetId) {
    return
  }

  const targetElement = document.getElementById(targetId)
  if (!targetElement) {
    return
  }

  event.preventDefault()
  targetElement.scrollIntoView({ behavior: "smooth", block: "start" })
}
