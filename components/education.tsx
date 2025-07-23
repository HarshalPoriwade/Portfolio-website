"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>B.E. in Computer Science and Engineering</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">
                  Angadi Institute of Technology and Management, Belgaum, Karnataka
                </p>
                <p className="text-sm font-medium">Dec 2022 – July 2026</p>
              </div>
              <p className="font-medium">CGPA: 7.8</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
