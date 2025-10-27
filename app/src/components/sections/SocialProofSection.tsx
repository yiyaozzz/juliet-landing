"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/constants";

export function SocialProofSection() {
  // Duplicate testimonials to create seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="social-proof" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
        </motion.div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full shadow-soft hover:shadow-hover transition-all">
                <CardContent className="p-6 space-y-4">
                  <p className="text-gray-700 italic leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="pt-2">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Infinite Marquee */}
        <div className="md:hidden relative overflow-hidden">
          <motion.div
            animate={{
              x: [0, -50 * testimonials.length * 16], // Approximate card width in rem
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-4"
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[300px] shadow-soft"
              >
                <CardContent className="p-6 space-y-4">
                  <p className="text-gray-700 italic leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="pt-2">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
