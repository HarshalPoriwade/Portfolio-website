"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Film, Globe, Headphones, Car } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "DeepFake Detection",
    description:
      "Developed a machine learning-based system for detecting deep-fakes in images and videos. Implemented multiple feature extraction techniques and trained classifiers to differentiate real from manipulated media. Collaborated as a co-author on a research paper, validated models on benchmark datasets, and focused on practical tools for media integrity verification.",
    techStack: ["Python", "Jupyter Notebook", "Scikit-learn", "pandas"],
    github: "https://github.com/HarshalPoriwade/DeepFake-Detection.git",
    icon: <Film className="h-10 w-10 text-primary" />,
  },
  {
    id: 2,
    title: "Car Price Predictor",
    description:
      "Designed and implemented a machine learning model to predict the resale price of used cars based on key features such as brand, model, year, fuel type and more. Used a cleaned data set of car specifications to train regression models, including Linear Regression, optimizing for accuracy and generalization. Integrated the model into an interactive web app using Streamlit for real-time car price predictions.",
    techStack: ["Python", "Jupyter Notebook", "scikit-learn", "pandas", "Streamlit"],
    github: "https://github.com/HarshalPoriwade/car_price_predictor",
    icon: <Car className="h-10 w-10 text-primary" />,
  },
  {
    id: 3,
    title: "Movie Recommendation System",
    description:
      "Developed a machine learning-based recommendation engine for generating personalized movie suggestions. Utilized the TMDB 5000 Movies and Credits datasets for constructing a comprehensive content and metadata-based recommendation pipeline. Implemented multiple feature extraction and preprocessing steps to capture relevant movie attributes for improved recommendations.",
    techStack: ["Python", "Jupyter Notebook", "scikit-learn", "pandas"],
    github: "https://github.com/HarshalPoriwade/MovieRecommendationSystem",
    icon: <Globe className="h-10 w-10 text-primary" />,
  },
  {
    id: 4,
    title: "Audio Translation System",
    description:
      "Designed an audio-to-audio translation tool using speech recognition, TTS, and translation APIs. Supports live input, file upload, and language selection for seamless multilingual communication.",
    techStack: ["Python", "speech recognition APIs", "TTS", "Translation APIs"],
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
    <section id="projects" className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-10 opacity-35 dark:opacity-25">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,hsl(188_94%_42%)_2px,transparent_0)] dark:bg-[radial-gradient(circle_at_2px_2px,hsl(188_85%_55%)_2px,transparent_0)] bg-[size:32px_32px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
      </div>

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
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 rounded-full p-3">{project.icon}</div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
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
