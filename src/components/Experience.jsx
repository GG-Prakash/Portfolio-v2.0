import React from "react";
import Card from "./Card";

const Experience = () => {
  return (
    <section id="experience" className="section relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col items-center mb-16 pt-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight text-center">Professional Experience</h2>
          <div className="w-24 h-1 bg-cyan-500 rounded-full mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
          </div>
          <p className="md:text-lg text-base text-center max-w-2xl">
            Engineering student with AWS DevOps focus and strong interest in cloud technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Intranet Application Developer"
            des="Developed a dynamic intranet website for Apollo Hospitals, implementing an advanced admin panel for unit management, editable URLs, and seamless data handling, enhancing operational efficiency. Technology used: Python (Flask), HTML, CSS, JavaScript"
            logo="/apollo.png"
          />
          <Card
            title="Client-Side Developer"
            des="Designed and implemented responsive UI/UX with HTML5, CSS3, and JavaScript. Optimized cross-platform performance for web apps across varying screen dimensions."
            logo="/internpe.png"
          />
          <Card
            title="Digital Marketing"
            des="Assisted in various digital marketing initiatives, gaining proficiency with tools and analytics to measure campaign effectiveness."
            logo="/plus 91.jpeg"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
