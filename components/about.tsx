"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
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
            I'm a curious and driven final-year student passionate about technology and problem-solving. I thrive on
            building with Python, FastAPI, and ML, and I'm currently co-authoring a research paper on detecting
            deepfakes. I enjoy learning new things and collaborating on projects that push the boundaries of tech to
            solve real-world challenges.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
