"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Github, Linkedin, Phone } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(60deg,hsl(188_94%_45%)_1px,transparent_1px),linear-gradient(120deg,hsl(188_94%_45%)_1px,transparent_1px)] bg-[size:28px_28px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </div>

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
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <Link href="tel:+918446250363" className="font-medium hover:text-primary transition-colors">
                    +91 8446250363
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
                    href="https://www.linkedin.com/in/harshalporiwade"
                    target="_blank"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    harshalporiwade
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
