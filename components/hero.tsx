"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,var(--primary-50)_0%,transparent_100%)] dark:bg-[radial-gradient(45%_25%_at_50%_50%,rgba(16,185,129,0.05)_0%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">Harshal Poriwade</h1>
            <p className="text-xl md:text-2xl font-medium text-primary">
              Building AI-Powered Solutions with Python & Curiosity
            </p>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Final-year CSE Student | ML Enthusiast | Deepfake Researcher
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button asChild size="lg">
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link
                href="https://drive.google.com/file/d/1xRRRJdJW4_EFoDslJVYIyxNm0gpyujI4/view?usp=sharing"
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
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4"
          >
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/HarshalPoriwade" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/harshal-poriwade-96a863373/" target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
