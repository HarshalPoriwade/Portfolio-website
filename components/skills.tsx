"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"

const skills = {
  languages: ["Python"],
  deepLearning: ["PyTorch", "TensorFlow", "Keras", "TFLite", "Vision Transformers (ViT)", "YOLOv8", "EfficientNet", "U-Net", "Grad-CAM (XAI)"],
  machinelearning: ["Scikit-learn", "SHAP", "Ensemble Learning", "Feature Engineering", "Hyperparameter Tuning"],
  frameworks: ["FastAPI", "Gunicorn", "Uvicorn", "OpenCV", "Librosa", "HuggingFace Transformers", "Pandas", "NumPy"],
  deployment: ["TFLite Quantization", "AWS", "Edge Deployment", "Model Optimization", "Pydantic", "Swagger UI"],
  tools: ["Git", "GitHub", "Roboflow", "Google Colab", "Kaggle", "Jupyter Notebook", "Postman"],
  databases: ["MySQL"],
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
    <section id="skills" className="relative py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-8 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Skills</h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto space-y-8"
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
            <h3 className="text-xl font-semibold">Deep Learning & Computer Vision</h3>
            <div className="flex flex-wrap gap-2">
              {skills.deepLearning.map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Badge variant="default" className="text-base py-1.5 px-3">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Machine Learning</h3>
            <div className="flex flex-wrap gap-2">
              {skills.machinelearning.map((skill) => (
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
            <h3 className="text-xl font-semibold">Deployment & Optimization</h3>
            <div className="flex flex-wrap gap-2">
              {skills.deployment.map((skill) => (
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
        </motion.div>
      </div>
    </section>
  )
}
