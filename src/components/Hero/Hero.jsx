import React from 'react'
import { motion } from 'framer-motion'
import Left from './Left'

const Hero = () => {
  return (
    <section id="hero" className="w-full min-h-screen flex max-md:flex-col items-center justify-between relative overflow-hidden pt-20 pb-10">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '10s' }}></div>
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '7s' }}></div>

      <div className='w-full md:w-[60%] z-10 mt-10 md:mt-20'>
        <Left />
      </div>

      <div className="w-full md:w-[40%] flex justify-center items-center relative z-10 mt-10 md:mt-0 md:-ml-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent blur-3xl -z-10 rounded-full w-80 h-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <motion.img
          src="/profile normal.png"
          alt="Profile"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-72 md:w-[450px] h-auto object-contain drop-shadow-[0_0_40px_rgba(6,182,212,0.2)]"
        />
      </div>
    </section>
  )
}

export default Hero
