import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const DOT_BG = {
  backgroundImage:
    "radial-gradient(circle, #00000018 2px, transparent 1px)",
  backgroundSize: "22px 22px",
};
const BOX_BG = {
  backgroundImage: `
    linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
  `,
  backgroundSize: "20px 20px",
};

  return (
    <section className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">

{/*       
     <div className="absolute inset-0" style={BOX_BG} />  */}
      
      {/* BACKGROUND TEXT */}
      <motion.h1
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.4,
          delay: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute top-1/2 -translate-y-[93%] text-[280px] font-extrabold text-[#F0C020] z-0"
        style={{
          fontFamily: "'Noto Serif', serif",
          fontStretch: "condensed",
        }}
      >
        ABOUT ME
      </motion.h1>

      {/* IMAGE */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        src="/Herobannerimage.png"
        alt="herobanner"
        className="relative z-10 max-w-2xl object-cover"
      />

      {/* HOLLOW TEXT */}
      <motion.h1
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.4,
          delay: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute top-[112px] text-[180px] md:text-[280px] font-extrabold text-transparent z-20"
        style={{
          fontFamily: "'Noto Serif', serif",
          fontStretch: "condensed",
          WebkitTextStroke: "2px white",
        }}
      >
        ABOUT ME
      </motion.h1>

      {/* LEFT TEXT */}
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute left-[10%] -translate-y-[100%]"
      >
        <h2
          className="text-2xl md:text-4xl font-semibold text-black tracking-wide"
          style={{
            fontFamily: "'Noto Serif', serif",
          }}
        >
          Software Engineer
        </h2>
      </motion.div>

      {/* RIGHT TEXT */}
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute right-[10%] -translate-y-[100%]"
      >
        <h2
          className="text-2xl md:text-4xl font-semibold text-black tracking-wide"
          style={{
            fontFamily: "'Noto Serif', serif",
          }}
        >
          Project Creator
        </h2>
      </motion.div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-25 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
