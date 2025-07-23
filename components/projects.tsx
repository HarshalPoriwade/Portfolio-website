"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Film, Globe, Headphones } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "DeepFake Detection",
    description:
      "Developed a machine learning system to detect deepfakes in images and videos using feature extraction and ensemble classifiers. Co-authored a related research paper.",
    techStack: ["Python", "Scikit-learn", "Jupyter Notebook", "pandas"],
    github: "https://github.com/HarshalPoriwade/DeepFake-Detection.git",
    icon: <Film className="h-10 w-10 text-primary" />,
  },
  {
    id: 2,
    title: "Movie Recommendation System",
    description:
      "Built a personalized recommendation engine using TMDB datasets and ML techniques to suggest relevant movies.",
    techStack: ["Python", "scikit-learn", "pandas", "Jupyter Notebook"],
    github: "https://github.com/HarshalPoriwade/MovieRecommendationSystem",
    icon: <Globe className="h-10 w-10 text-primary" />,
  },
  {
    id: 3,
    title: "Audio Translation System",
    description:
      "Designed an audio-to-audio translation tool using speech recognition, TTS, and translation APIs. Supports live input, file upload, and language selection.",
    techStack: ["Python", "speech recognition APIs"],
    github: "https://github.com/HarshalPoriwade/Audio_Translation.git",
    icon: <Headphones className="h-10 w-10 text-primary" />,
  },
]

export default function Projects() {
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
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-muted rounded-full p-3">{project.icon}</div>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                    <Link href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" /> View on GitHub
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
