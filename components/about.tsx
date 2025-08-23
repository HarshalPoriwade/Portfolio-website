"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="relative py-16 md:py-24 bg-muted/30">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,hsl(188_94%_45%)_1px,transparent_1px),linear-gradient(-45deg,hsl(188_94%_45%)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50"></div>
      </div>

      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg leading-relaxed">
            Passionate final-year engineering student with a strong foundation in Python, FastAPI, and machine learning.
            Currently co-authoring a research paper on deepfake detection using advanced AI techniques. Interested in
            solving real-world problems through data-driven solutions and collaborative innovation.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
