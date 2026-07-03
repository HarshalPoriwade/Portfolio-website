"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "AI/ML Intern",
    company: "SCRYMZ Private Software Pvt. Ltd.",
    duration: "March 2026 – Present",
    highlights: [
      "Architected a production-grade multi-model Computer Vision pipeline using YOLOv8, Vision Transformers (ViT), and custom CNNs for automated structured data extraction from complex, real-world images.",
      "Trained a custom CNN classifier on heavily stylized graphical elements achieving 99.91% accuracy, entirely bypassing traditional OCR limitations.",
      "Custom-trained a deep learning Vision Transformer-based OCR model on 30,000+ synthetic images achieving 90.16% sequence accuracy and 97.23% character accuracy.",
      "Engineered a FastAPI backend deployed via Gunicorn/Uvicorn exposing 5 modular REST endpoints for asynchronous batch processing validated with Pydantic.",
      "Optimized a 5-model AI pipeline for CPU-only AWS deployment achieving sub-2-second end-to-end latency via tensor batch parallelization.",
    ],
    skills: ["Python", "PyTorch", "TensorFlow", "FastAPI", "YOLOv8", "Vision Transformers", "AWS", "Gunicorn/Uvicorn"],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="relative py-16 md:py-24 bg-muted/40">
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,hsl(188_94%_42%)_1px,transparent_1px),linear-gradient(-45deg,hsl(188_94%_42%)_1px,transparent_1px)] dark:bg-[linear-gradient(45deg,hsl(188_85%_55%)_1px,transparent_1px),linear-gradient(-45deg,hsl(188_85%_55%)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60 dark:from-background/50 dark:via-transparent dark:to-background/50"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto space-y-6"
        >
          {experiences.map((exp) => (
            <motion.div key={exp.id} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 mt-1">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                    <CardDescription className="text-base mt-1">
                      {exp.company} • {exp.duration}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3 text-sm">
                        <span className="text-primary mt-1">▸</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
