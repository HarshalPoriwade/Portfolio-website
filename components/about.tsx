"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="relative py-20 md:py-32">

      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Computer Science graduate with proven expertise in Machine Learning, Deep Learning, and Computer Vision. 
            Experienced in building and deploying production-grade AI systems using PyTorch, TensorFlow, and FastAPI. 
            Co-authored published research on multi-modal deepfake detection achieving AUC 0.9958. Passionate about 
            solving real-world problems through data-driven solutions, scalable API development, and edge deployment. 
            Currently exploring Large Language Models and transformer-based architectures.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
