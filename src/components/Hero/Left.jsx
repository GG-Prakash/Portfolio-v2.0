import { FaAws, FaReact, FaDocker, FaGitAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiTerraform, SiKubernetes, SiTailwindcss, SiTypescript, SiJenkins, SiAnsible } from 'react-icons/si'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

const iconBox = "w-14 h-14 md:w-16 md:h-16 bg-slate-900 shadow-[0_4px_6px_rgba(0,0,0,0.4)] text-gray-400 text-2xl flex flex-col items-center justify-center rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.5)] hover:text-cyan-400 group cursor-pointer relative overflow-hidden"

const Left = () => {
    return (
        <div className=' flex flex-col z-10'>
            <motion.div className="px-4 md:px-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}>
                <h3 className=' -ml-1 text-xl md:text-2xl font-medium px-1 text-cyan-400/80 mb-2 uppercase italic tracking-wide'>Hi, i'm</h3>
                <h2 className="-ml-2 text-5xl md:text-7xl lg:text-[4.5rem] text-white font-bold tracking-tight mb-6 drop-shadow-lg leading-tight">
                    Gnana Prakash <span className="text-cyan-400 ]">G</span>
                </h2>
                <div className="text-xl md:text-4xl text-gray-300 font-light flex items-center h-12">
                    <span className="mr-3 text-white/50">a</span>
                    <TypeAnimation
                        sequence={[
                            'Cloud & Infrastructure Engineer',
                            2000,
                            'AWS DevOps Specialist',
                            2000,
                            'CI/CD Pipeline Architect',
                            2000,
                            'Modern Web Developer',
                            2000
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        className="text-cyan-300 font-medium]"
                    />
                </div>
            </motion.div>

            {/* Icons Row */}
            <div className='-ml-2 flex flex-row items-start gap-4 mt-12 px-4 md:px-10'>

                {/* Find Me In — vertical stack, 2 icons */}
                <div className="flex-shrink-0">
                    <h2 className='text-xs tracking-widest uppercase font-semibold mb-4 text-gray-400'>Find me in</h2>
                    <div className="flex flex-col gap-4">
                        <a href="https://github.com/GG-Prakash" target="_blank" rel="noopener noreferrer" className={`${iconBox} text-4xl`}>
                            <FaGithub />
                            <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-b-lg"></span>
                        </a>
                        <a href="https://www.linkedin.com/in/gg-prakash" target="_blank" rel="noopener noreferrer" className={`${iconBox} text-4xl`}>
                            <FaLinkedin />
                            <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-b-lg"></span>
                        </a>
                    </div>
                </div>

                {/* Vertical Divider */}
                <div className="w-px self-stretch bg-slate-700/60 mt-8 mx-2 md:mx-3"></div>

                {/* Best Skills — exactly 5 per row (2 rows of 5) */}
                <div className="flex-1">
                    <h2 className='text-xs tracking-widest uppercase font-semibold mb-4 text-gray-400'>Best Skill On</h2>
                    <div className="grid grid-cols-5 gap-3 md:gap-4" style={{ maxWidth: '360px' }}>
                        <span className={`${iconBox} text-4xl`}><FaAws /><span className="absolute bottom-0 left-0 right-0 h-[3px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-b-lg"></span></span>
                        <span className={`${iconBox} text-4xl`}><FaReact /><span className="absolute bottom-0 left-0 right-0 h-[3px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-b-lg"></span></span>
                        <span className={`${iconBox} text-4xl`}><SiAnsible /><span className="absolute bottom-0 left-0 right-0 h-[3px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-b-lg"></span></span>
                        <span className={`${iconBox} text-4xl`}><FaDocker /><span className="absolute bottom-0 left-0 right-0 h-[3px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-b-lg"></span></span>
                        <span className={`${iconBox} text-4xl`}><SiTerraform /><span className="absolute bottom-0 left-0 right-0 h-[3px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-b-lg"></span></span>
                        <span className={`${iconBox} text-4xl`}><SiKubernetes /><span className="absolute bottom-0 left-0 right-0 h-[3px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-b-lg"></span></span>
                        <span className={`${iconBox} text-4xl`}><SiTailwindcss /><span className="absolute bottom-0 left-0 right-0 h-[3px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-b-lg"></span></span>
                        <span className={`${iconBox} text-4xl`}><SiTypescript /><span className="absolute bottom-0 left-0 right-0 h-[3px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-b-lg"></span></span>
                        <span className={`${iconBox} text-4xl`}><FaGitAlt /><span className="absolute bottom-0 left-0 right-0 h-[3px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-b-lg"></span></span>
                        <span className={`${iconBox} text-4xl`}><SiJenkins /><span className="absolute bottom-0 left-0 right-0 h-[3px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-b-lg"></span></span>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Left;
