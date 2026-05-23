import React from 'react'
import { motion } from 'framer-motion'
import { FaServer, FaCodeBranch, FaCloud } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="sectioneven relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">About Me</h2>
          <div className="w-24 h-1 bg-cyan-500 rounded-full mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
          </div>
          <p className="italic text-center text-cyan-400/80 md:text-xl text-lg font-light">
            "Designing the Future, One Cloud at a Time."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          {/* Left Metrics/Callouts */}
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <motion.div
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 text-2xl">
                <FaCloud />
              </div>
              <div>
                <h4 className="text-white font-bold text-xl">Cloud Native</h4>
                <p className="text-gray-400 text-sm">AWS Specialized</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl">
                <FaServer />
              </div>
              <div>
                <h4 className="text-white font-bold text-xl">Infrastructure</h4>
                <p className="text-gray-400 text-sm">Scalable & Secure</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-2xl">
                <FaCodeBranch />
              </div>
              <div>
                <h4 className="text-white font-bold text-xl">CI/CD</h4>
                <p className="text-gray-400 text-sm">Automated Workflows</p>
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 order-1 md:order-2">
            <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl"></div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 leading-relaxed">
                AWS DevOps Enthusiast <span className="text-cyan-500 font-black px-2">|</span>
                Dedicated to Harnessing AWS Services <span className="text-indigo-500 font-black px-2">|</span>
                CI/CD Practitioner
              </h3>

              <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed relative z-10">
                <p>
                  I specialize in AWS DevOps, cloud computing, and automation, building reliable and scalable infrastructure with a focus on efficiency. As a fresher, I’m driven to deliver seamless CI/CD pipelines and highly available cloud solutions that drive business value.
                </p>
                <p>
                  In addition, I bring strong skills in modern web development to complement my DevOps expertise. This dual perspective enables me to understand applications from the code level up to the infrastructure, allowing me to contribute end-to-end to full-stack cloud projects. I’m deeply passionate about continuous learning and tackling complex, real-world architectural challenges.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
