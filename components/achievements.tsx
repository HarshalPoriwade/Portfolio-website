"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"

const achievements = [
  {
    id: 1,
    title: "1st Place – Tech Project Showcase",
    organization: "SGBIT",
    date: "March 2025",
    certificateUrl: "https://drive.google.com/file/d/1hJq4GFThRMG_KisQcOFbKBct3dPa8NFb/view?usp=sharing",
  },
  {
    id: 2,
    title: "2nd Place – IEEE Project Exhibition, INGENIOUS",
    organization: "AITM",
    date: "April 2025",
    certificateUrl: "https://drive.google.com/file/d/1QZGePNx-RmDZCjRzYU_Rps_tCG_95kJM/view?usp=sharing",
  },
  {
    id: 3,
    title: "3rd Place – 24-Hour Hackathon, TCS Git",
    organization: "GIT",
    date: "June 2025",
    certificateUrl: "https://drive.google.com/file/d/1Sqf9Z3xZtH-DZFme1IAh1kIpUF_I8zlu/view?usp=sharing",
  },
  {
    id: 4,
    title: "Co-Author – Multi-Modal DeepFake Detection using Ensemble Learning",
    organization: "Published in Journal of Cyber Security",
    date: "2025",
    certificateUrl: "#",
  },
]

export default function Achievements() {
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
    <section id="achievements" className="relative py-16 md:py-24 bg-muted/40">
      <div className="absolute inset-0 -z-10 opacity-25 dark:opacity-15">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(188_94%_42%)_1px,transparent_1px)] dark:bg-[radial-gradient(ellipse_at_center,hsl(188_85%_55%)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-transparent to-background/70 dark:from-background/60 dark:via-transparent dark:to-background/60"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">Achievements</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {achievements.map((achievement) => (
            <motion.div key={achievement.id} variants={itemVariants}>
              <Card className="h-full flex flex-col bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base">{achievement.organization}</CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">{achievement.date}</p>
                </CardContent>
                {achievement.id !== 4 && (
                  <CardFooter>
                    <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                      <Link href={achievement.certificateUrl} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" /> View Certificate
                      </Link>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
