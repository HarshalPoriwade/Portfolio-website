"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="relative py-16 md:py-24 bg-muted/40">
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,hsl(188_94%_42%)_1px,transparent_1px),linear-gradient(-45deg,hsl(188_94%_42%)_1px,transparent_1px)] dark:bg-[linear-gradient(45deg,hsl(188_85%_55%)_1px,transparent_1px),linear-gradient(-45deg,hsl(188_85%_55%)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60 dark:from-background/50 dark:via-transparent dark:to-background/50"></div>
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
