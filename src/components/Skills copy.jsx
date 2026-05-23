import React from 'react'
import { FaAws, FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa'
import { FcDocument } from 'react-icons/fc'
import { SiTerraform, SiKubernetes, SiTailwindcss, SiTypescript, SiJenkins, SiAnsible } from 'react-icons/si'


const Skills = () => {
  const skills = [
    { icon: <FaAws size={35} className='group-hover:text-blue-400 text-indigo-600' />, },
    { icon: <FaReact size={35} className='group-hover:text-blue-400 text-indigo-600' />, },
    { icon: <SiAnsible size={35} className='group-hover:text-blue-400 text-indigo-600' />, },
    { icon: <FaDocker size={35} className='group-hover:text-blue-400 text-indigo-600' />, },
    { icon: <SiTerraform size={35} className='group-hover:text-blue-400 text-indigo-600' />, },
    { icon: <SiKubernetes size={35} className='group-hover:text-blue-400 text-indigo-600' />, },
    { icon: <SiTailwindcss size={35} className='group-hover:text-blue-400 text-indigo-600' />, },
    { icon: <SiTypescript size={35} className='group-hover:text-blue-400 text-indigo-600' />, },
    { icon: <FaGitAlt size={35} className='group-hover:text-blue-400 text-indigo-600' />, },
    { icon: <SiJenkins size={35} className='group-hover:text-blue-400 text-indigo-600' />, }
  ]

  return (
    <section id="skills" className="section mt-2 mb-15">

      <h2 className="title  ">Skills and Resume</h2>


      <div className="flex flex-col md:flex-row gap-10  max-w-6xl mx-auto  ">
        <div className=" md:w-3/7">
          <h3 className="text-2xl font-semibold text-blue-950 mb-8 pb-3 border-b border-gray-600/50">
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center py-3 bg-white  rounded-lg 
               backdrop-blur-md shadow-[0_4px_6px_rgba(0,0,0,0.3)] w-16 h-16 transition-all duration-300 ease-in-out transform group hover:shadow-[0_8px_16px_rgba(96,165,250,0.9)] hover:-translate-y-1.5 hover:border-blue-400"
              >
                <div className=" mb-3">
                  {skill.icon}
                </div>
                <h3 className="text-base font-semibold opacity-40  tracking-wide">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block w-0.5 bg-gradient-to-b from-transparent via-gray-600/50 to-transparent mx-6"></div>

        <div className="w-full md:w-2/6  items-start gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-blue-950 pb-3 border-b border-gray-600/50">Professional Profile</h3>
            <div className="flex gap-4">

              <div className="w-72 h-42 mt-7 bg-gray-900/20 rounded-xl border border-gray-600/30 shadow-md">
                <FcDocument className='w-72 h-42' />
              </div>


              <div className='flex flex-col justify-center'>
                <div className="mt-7 flex flex-col items-center space-y-6 ">
                <a
                  href="/Gnanaprakash_Resume.pdf"
                  download="Gnanaprakash.pdf"
                  className="whitespace-nowrap px-2 py-3 text-l  text-indigo-600 rounded-md text-center backdrop-blur-md shadow-[0_4px_6px_rgba(0,0,0,0.3)] w-full h-min transition-all duration-300 ease-in-out transform group hover:shadow-[0_8px_16px_rgba(96,165,250,0.9)] hover:-translate-y-1.5 hover:border-blue-400 hover:text-blue-400"
                >
                  Download Resume
                </a>

                <a
                  href="/Gnanaprakash_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap px-2 py-3 text-l text-indigo-600 text-center rounded-md backdrop-blur-md shadow-[0_4px_6px_rgba(0,0,0,0.3)] w-full h-min transition-all duration-300 ease-in-out transform group hover:shadow-[0_8px_16px_rgba(96,165,250,0.9)] hover:-translate-y-1.5 hover:border-blue-400 hover:text-blue-400"
                >
                  View Resume
                </a>
              </div>
              </div>

              



            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills
