"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"

const skills = {
  languages: ["Python", "C++"],
  frameworks: ["TensorFlow", "PyTorch", "FastAPI", "Scikit-learn", "OpenCV", "Pydantic"],
  databases: ["MySQL"],
  tools: ["Git", "GitHub", "Kaggle", "Google Colab", "Postman"],
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Badge variant="default" className="text-base py-1.5 px-3">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Badge variant="default" className="text-base py-1.5 px-3">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Badge variant="default" className="text-base py-1.5 px-3">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Badge variant="default" className="text-base py-1.5 px-3">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
