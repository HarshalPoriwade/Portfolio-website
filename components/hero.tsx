"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative py-24 md:py-40 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Harshal Poriwade</h1>
            <p className="text-2xl md:text-3xl font-light text-muted-foreground leading-relaxed">
              AI/ML Engineer specializing in Computer Vision, Deep Learning, and production-grade systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Building intelligent systems with Python, PyTorch, TensorFlow, and FastAPI. Currently exploring Large Language Models and transformer architectures.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button asChild size="lg" className="px-8">
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8" asChild>
              <Link
                href="https://drive.google.com/file/d/1loBpei3D-Bx1olkMB5tK1RjOY-JlTE9I/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-6 pt-4"
          >
            <Button variant="ghost" size="lg" asChild className="text-base">
              <Link href="https://github.com/HarshalPoriwade" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> GitHub
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild className="text-base">
              <Link href="https://www.linkedin.com/in/harshalporiwade" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
