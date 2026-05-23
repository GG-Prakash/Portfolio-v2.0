import React from 'react'
import Hero from './Hero/Hero'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import Education from './Education'
const Right = () => {
  return (
    <>
      <section>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </section>
    </>
  )
}

export default Right