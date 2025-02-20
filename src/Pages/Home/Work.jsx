import React from 'react'
import { motion } from 'framer-motion' // You'll need to install framer-motion if not already installed

const Work = () => {
  const steps = [
    {
      title: "Pick a Quiz",
      description: "Choose from a variety of categories.",
      icon: "📚" 
    },
    {
      title: "Answer Questions",
      description: "Select the right option before time runs out.",
      icon: "⏱️"
    },
    {
      title: "Get Instant Feedback",
      description: "See if you're right or wrong immediately.",
      icon: "✅"
    },
    {
      title: "View Your Score",
      description: "Track your performance and challenge yourself to improve.",
      icon: "🎯"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full filter blur-[100px] opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-200 rounded-full filter blur-[100px] opacity-30"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/80 border-2 border-transparent p-8 rounded-2xl shadow-xl text-center hover:border-purple-500/20 transition-all duration-300 ease-in-out hover:cursor-pointer hover:scale-105"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
              <h2 className="text-xl font-semibold mb-3 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300 ease-in-out">
                {step.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work