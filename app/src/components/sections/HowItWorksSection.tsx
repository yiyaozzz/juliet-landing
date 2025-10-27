"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { howItWorksSteps } from "@/lib/constants";

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in four simple steps
          </p>
        </motion.div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden max-w-md mx-auto">
          {howItWorksSteps.map((step, index) => (
            <div key={step.number} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4"
              >
                {/* Number Circle */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-soft">
                    <span className="text-xl font-bold text-gray-900">
                      {step.number}
                    </span>
                  </div>
                  {/* Connecting Line */}
                  {index < howItWorksSteps.length - 1 && (
                    <div className="w-0.5 h-16 bg-gray-200 my-2" />
                  )}
                </div>

                {/* Content */}
                <Card className="flex-1 mb-8 shadow-soft">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200" />

            <div className="grid grid-cols-4 gap-4 relative">
              {howItWorksSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  {/* Number Circle */}
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-soft mb-6 relative z-10">
                    <span className="text-xl font-bold text-gray-900">
                      {step.number}
                    </span>
                  </div>

                  {/* Content Card */}
                  <Card className="w-full shadow-soft">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
