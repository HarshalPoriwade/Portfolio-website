"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <Link href="mailto:hporiwade@gmail.com" className="font-medium hover:text-primary transition-colors">
                    hporiwade@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <Link
                    href="https://www.linkedin.com/in/harshal-poriwade-96a863373/"
                    target="_blank"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    harshal-poriwade-96a863373
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <Link
                    href="https://github.com/HarshalPoriwade"
                    target="_blank"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    HarshalPoriwade
                  </Link>
                </div>
              </div>

              <Button asChild className="w-full">
                <Link href="mailto:hporiwade@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> Send Email
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
