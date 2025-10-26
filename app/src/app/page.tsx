import Link from "next/link";

import {
  faqs,
  heroContent,
  landingSections,
  pricingTiers,
  testimonials,
} from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 sm:px-10 lg:px-16">
        <section
          id="hero"
          className="grid gap-10 rounded-3xl bg-white/70 p-10 shadow-soft backdrop-blur transition-all duration-500 hover:shadow-hover"
        >
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              {heroContent.eyebrow}
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              {heroContent.title}
            </h1>
            <p className="max-w-2xl text-lg text-foreground/80">
              {heroContent.description}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href={heroContent.primaryCta.href}
                className="rounded-full bg-primary px-6 py-3 font-semibold text-foreground shadow-hover transition hover:-translate-y-0.5"
              >
                {heroContent.primaryCta.label}
              </Link>
              <Link
                href={heroContent.secondaryCta.href}
                className="rounded-full px-6 py-3 font-semibold text-foreground/80 shadow-soft transition hover:-translate-y-0.5"
              >
                {heroContent.secondaryCta.label}
              </Link>
            </div>
          </div>
          <div className="grid gap-6 rounded-2xl bg-foreground/5 p-6 sm:grid-cols-3">
            {heroContent.metrics.map((metric) => (
              <div key={metric.label} className="space-y-1">
                <p className="text-3xl font-semibold">{metric.value}</p>
                <p className="text-sm text-foreground/60">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8">
          {landingSections.map((section) => (
            <article
              key={section.id}
              className="rounded-3xl border border-transparent bg-white/50 p-8 shadow-soft transition hover:shadow-hover"
            >
              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
                  {section.anchorLabel}
                </p>
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                <p className="text-base text-foreground/70">{section.summary}</p>
              </div>
            </article>
          ))}
        </section>

        <section id="testimonials" className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
              Proof
            </p>
            <h2 className="text-3xl font-semibold">Teams moving faster with Juliet</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex h-full flex-col justify-between rounded-3xl bg-white/70 p-6 shadow-soft"
              >
                <p className="text-lg leading-relaxed text-foreground/80">
                  “{testimonial.quote}”
                </p>
                <div className="pt-6 text-sm font-semibold text-foreground/80">
                  {testimonial.name} · {testimonial.role} @ {testimonial.company}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
              Plans
            </p>
            <h2 className="text-3xl font-semibold">Choose the track that fits your cycle</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <article
                key={tier.name}
                className={`rounded-3xl border border-transparent p-6 shadow-soft ${
                  tier.highlighted ? "bg-primary/10 shadow-hover" : "bg-white/70"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{tier.name}</h3>
                  <p className="text-sm uppercase tracking-[0.2em] text-secondary">
                    {tier.cadence || "Custom"}
                  </p>
                </div>
                <p className="py-4 text-4xl font-semibold">{tier.price}</p>
                <p className="text-sm text-foreground/70">{tier.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
              FAQ
            </p>
            <h2 className="text-3xl font-semibold">Answers for procurement and security</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl bg-white/50 p-6 shadow-soft"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold">
                  {faq.question}
                </summary>
                <p className="pt-3 text-base text-foreground/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
