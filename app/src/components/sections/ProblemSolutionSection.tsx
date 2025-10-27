"use client";

import { motion } from "motion/react";
import { X, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { oldWayPoints, newWayPoints } from "@/lib/constants";

export function ProblemSolutionSection() {
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
            The Old Way vs. The New Way
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dating used to be stressful. We made it better.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Old Way - Muted/Gray Tones */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full bg-gray-50 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-700 flex items-center gap-2">
                  <X className="w-5 h-5 text-gray-500" />
                  The Old Way
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {oldWayPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{point.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* New Way - Vibrant/Primary Colors */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full bg-accent/10 shadow-soft border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  The New Way
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {newWayPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">
                        {point.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
