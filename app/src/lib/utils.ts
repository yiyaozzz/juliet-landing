import type { MouseEvent } from "react"

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function smoothScrollToHash(event: MouseEvent<HTMLAnchorElement>) {
  const href = event.currentTarget.getAttribute("href")
  if (!href) {
    return
  }

  const targetUrl = new URL(href, window.location.href)
  if (!targetUrl.hash) {
    return
  }

  const isSamePath = targetUrl.pathname === window.location.pathname
  if (!isSamePath) {
    return
  }

  const targetId = targetUrl.hash.replace(/^#/, "")
  if (!targetId) {
    return
  }

  const targetElement = document.getElementById(targetId)
  if (!targetElement) {
    return
  }

  event.preventDefault()
  targetElement.scrollIntoView({ behavior: "smooth", block: "start" })
  window.history.replaceState(null, "", `${targetUrl.pathname}${targetUrl.hash}`)
}
