import { useEffect, useRef, useState } from 'react';
import './resume.css';

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({ projects: 0, exp: 0, certs: 0, deploys: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();

          // Animate Stats
          const duration = 1000;
          const steps = 40;
          const targetStats = { projects:10, exp: 1, certs: 5, deploys: 3 };
          let currentStep = 0;

          const interval = setInterval(() => {
            currentStep++;
            setStats({
              projects: Math.round((targetStats.projects / steps) * currentStep),
              exp: Math.round((targetStats.exp / steps) * currentStep),
              certs: Math.round((targetStats.certs / steps) * currentStep),
              deploys: Math.round((targetStats.deploys / steps) * currentStep),
            });
            if (currentStep >= steps) clearInterval(interval);
          }, duration / steps);
        }
      },
      { threshold: 0.20 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
    >
      {/* Background Atmosphere */}
      <div className="resume-blob-1"></div>
      <div className="resume-blob-2"></div>
      

      <div className="relative z-10 w-full max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2"
      style={{
        // Ensure it scales correctly inside tight modal containers while preserving original exact aspect logic implicitly
        padding: 'clamp(30px, 2vw, 40px) clamp(20px, 5vw, 40px)'
      }}>

        {/* Vertical Center Divider (Desktop Only) */}
        <div className="hidden lg:block absolute left-1/2 top-[70px] bottom-[70px] w-px bg-white/5 -translate-x-1/2"></div>


        {/* ========================================================= */}
        {/* 2. LEFT COLUMN */}
        {/* ========================================================= */}
        <div className="flex flex-col justify-center lg:pr-[60px] mb-12 lg:mb-0">

          {/* [A] EYEBROW LABEL */}
          <div
            className="flex items-center gap-[10px] mb-4 opacity-0"
            style={{
              animation: isVisible ? 'resumeFadeUp 450ms ease forwards' : 'none',
              animationDelay: '0ms'
            }}
          >
            <div className="w-[28px] h-[2px] bg-[#00d4cc] rounded-[1px]"></div>
            <span className="font-mono text-[10px] font-semibold text-[#00d4cc] uppercase tracking-[3px]">
              Professional Profile
            </span>
          </div>

          {/* [B] H1 HEADLINE */}
          <h1
            className="text-[44px] font-extrabold text-[#e2eaf4] leading-[1.05] tracking-[-1px] mb-[22px] opacity-0"
            style={{
              animation: isVisible ? 'resumeFadeUp 450ms ease forwards' : 'none',
              animationDelay: '80ms',
              fontFamily: 'Outfit, sans-serif'
            }}
          >
            My<br />
            Resume <span className="text-[#00d4cc]">&</span><br />
            Credentials
          </h1>

          {/* [C] BODY PARAGRAPH */}
          <p
            className="text-[15px] font-light text-[#e2eaf4]/50 leading-[1.75] max-w-[420px] mb-[30px] opacity-0"
            style={{
              animation: isVisible ? 'resumeFadeUp 450ms ease forwards' : 'none',
              animationDelay: '160ms'
            }}
          >
            Cloud & Infrastructure engineer with a passion for building scalable systems. Designing the future, one cloud at a time.
          </p>

          {/* [D] TECH CHIPS */}
          <div
            className="flex flex-wrap gap-2 mb-[28px] opacity-0"
            style={{
              animation: isVisible ? 'resumeFadeUp 450ms ease forwards' : 'none',
              animationDelay: '240ms'
            }}
          >
            {/* Cyan variants */}
            {['AWS Certified', 'DevOps'].map(tech => (
              <span key={tech} className="font-mono text-[11px] font-normal px-[14px] py-[6px] rounded-[20px] tracking-[0.3px] transition-all duration-180 text-[#00d4cc] border border-[#00d4cc]/35 bg-[#00d4cc]/10 hover:bg-[#00d4cc]/20 hover:border-[#00d4cc]/60">
                {tech}
              </span>
            ))}
            {/* Blue variants */}
            {['Kubernetes', 'Terraform'].map(tech => (
              <span key={tech} className="font-mono text-[11px] font-normal px-[14px] py-[6px] rounded-[20px] tracking-[0.3px] transition-all duration-180 text-[#60a5fa] border border-[#60a5fa]/35 bg-[#60a5fa]/10 hover:bg-[#60a5fa]/20 hover:border-[#60a5fa]/60">
                {tech}
              </span>
            ))}
            {/* Purple variant */}
            <span className="font-mono text-[11px] font-normal px-[14px] py-[6px] rounded-[20px] tracking-[0.3px] transition-all duration-180 text-[#a78bfa] border border-[#a78bfa]/35 bg-[#a78bfa]/10 hover:bg-[#a78bfa]/20 hover:border-[#a78bfa]/60">
              Full Stack
            </span>
          </div>

          {/* [E] CTA BUTTON PAIR */}
          <div
            className="flex flex-col sm:flex-row gap-3 mb-[32px] opacity-0"
            style={{
              animation: isVisible ? 'resumeFadeUp 450ms ease forwards' : 'none',
              animationDelay: '320ms'
            }}
          >
            <a
              href="/Gnanaprakash_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 h-[56px] px-[26px] rounded-[10px] bg-[#0b1628] border-[1.5px] border-[#e2eaf4]/20 text-[#e2eaf4] text-[15px] font-bold flex items-center justify-center gap-[9px] transition-all duration-220 hover:border-[#00d4cc]/45 hover:bg-[#0f2040] hover:-translate-y-[2px]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              View Resume
            </a>

            <a
              href="/Gnanaprakash_Resume.pdfc:\Users\mailo\Documents\Resume\experienced\Gnanaprakash_Resume.pdf"
              download="Gnanaprakash.pdf"
              className="flex-1 h-[56px] px-[26px] rounded-[10px] bg-[#0b1628] border-[1.5px] border-[#e2eaf4]/20 text-[#e2eaf4] text-[15px] font-bold flex items-center justify-center gap-[9px] transition-all duration-220 hover:border-[#00d4cc]/45 hover:bg-[#0f2040] hover:-translate-y-[2px]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download PDF
            </a>
          </div>

          {/* [F] HORIZONTAL DIVIDER */}
          <div
            className="w-full h-px bg-white/5 mb-[24px] opacity-0"
            style={{
              animation: isVisible ? 'resumeFadeUp 450ms ease forwards' : 'none',
              animationDelay: '400ms'
            }}
          ></div>

          {/* [G] STATS ROW */}
          <div
            className="flex gap-[28px] opacity-0"
            style={{
              animation: isVisible ? 'resumeFadeUp 450ms ease forwards' : 'none',
              animationDelay: '480ms'
            }}
          >
            {[
              { val: stats.projects, suf: '+', label: 'PROJECTS' },
              { val: stats.exp, suf: '+', label: 'YEARS EXP' },
              { val: stats.certs, suf: '+', label: 'CERTS' },
              { val: stats.deploys, suf: 'k', label: 'CLOUD DEPLOYS' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-[30px] font-extrabold text-[#e2eaf4] leading-none tracking-[-0.5px]">
                    {stat.val}
                  </span>
                  <span className="text-[22px] text-[#00d4cc] font-bold ml-px">{stat.suf}</span>
                </div>
                <span className="font-sans text-[9px] font-normal uppercase text-[#e2eaf4]/30 tracking-[2px] mt-[5px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>


        {/* ========================================================= */}
        {/* 3. RIGHT COLUMN */}
        {/* ========================================================= */}
        <div className="relative flex items-center justify-center lg:pl-[60px] opacity-0"
          style={{
            animation: isVisible ? 'resumeFadeUp 450ms ease forwards' : 'none',
            animationDelay: '600ms'
          }}
        >
          {/* CARD WRAPPER */}
          <div className="relative w-full max-w-[420px]">

            {/* FLOATING BADGE 1 */}
            <div className="absolute top-0 right-[-10px] z-10 bg-[#0d1e35] border border-[#00d4cc]/20 rounded-[10px] px-[15px] py-[9px] flex items-center gap-[8px]" style={{ animation: 'resumeFloat1 3s ease-in-out infinite' }}>
              <div className="w-[7px] h-[7px] rounded-full bg-[#22c55e]" style={{ animation: 'resumePulseGreen 2s ease infinite' }}></div>
              <span className="font-mono text-[11px] text-[#c8daea]/65">Available · 2025</span>
            </div>

            {/* FLOATING BADGE 2 */}
            <div className="absolute bottom-[-16px] left-[-10px] z-10 bg-[#0b1a30] border border-[#3b82f6]/20 rounded-[10px] px-[16px] py-[10px] flex flex-col" style={{ animation: 'resumeFloat2 3.5s ease-in-out infinite 0.5s' }}>
              <span className="font-mono text-[8px] tracking-[2px] uppercase text-[#c8daea]/30 mb-[3px]">UPDATED</span>
              <span className="font-sans text-[15px] font-bold text-[#3b82f6]">Mar 2025</span>
            </div>

            {/* RESUME CARD */}
            <div className="bg-[#0d1e35] border border-white/10 rounded-[16px] overflow-hidden transition-all duration-320 hover:-translate-y-[5px] hover:border-[#00d4cc]/20">

              {/* GRADIENT TOP BAR */}
              <div className="h-[3px] w-full" style={{ background: 'linear-gradient(90deg, #00d4cc 0%, #3b82f6 50%, #8b5cf6 100%)' }}></div>

              {/* CARD HEADER */}
              <div className="flex items-center gap-[12px] p-[18px_20px] border-b border-white/5">
                <div className="w-[40px] h-[40px] rounded-[10px] bg-[#00d4cc]/15 border border-[#00d4cc]/30 flex items-center justify-center font-mono text-[13px] font-bold text-[#00d4cc]">
                  GP
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[14px] font-semibold text-[#e2eaf4]">Gnana Prakash G</span>
                  <span className="font-mono text-[10px] text-[#c8daea]/40">Cloud & Infra Engineer</span>
                </div>
              </div>

              {/* CARD BODY */}
              <div className="flex flex-col gap-[14px] p-[14px_20px] pb-[28px]">

                {/* Description */}
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] tracking-[2.5px] uppercase text-[#00d4cc]/50 mb-[8px]">EXPERIENCE</span>

                  <div className="flex gap-[12px] mb-[12px]">
                    <div className="w-[7px] h-[7px] rounded-full bg-[#00d4cc] mt-[4px] shrink-0"></div>
                    <div className="flex flex-col">
                      <span className="font-sans text-[11px] font-semibold text-white/75">AWS DevOps Engineer</span>
                      <span className="font-mono text-[9px] text-[#c8daea]/35">2023 – Present</span>
                    </div>
                  </div>

                  <div className="flex gap-[12px]">
                    <div className="w-[7px] h-[7px] rounded-full bg-[#3b82f6] mt-[4px] shrink-0"></div>
                    <div className="flex flex-col">
                      <span className="font-sans text-[11px] font-semibold text-white/75">Full Stack Developer</span>
                      <span className="font-mono text-[9px] text-[#c8daea]/35">2022 – 2023</span>
                    </div>
                  </div>
                </div>

                {/* CORE SKILLS SECTION */}
                <div className="flex flex-col mt-2">
                  <span className="font-mono text-[8px] tracking-[2.5px] uppercase text-[#00d4cc]/50 mb-[8px]">CORE SKILLS</span>

                  {[
                    { name: 'AWS / Cloud', pct: '92%', fill: '#00d4cc', delay: '700ms' },
                    { name: 'DevOps', pct: '85%', fill: '#3b82f6', delay: '800ms' },
                    { name: 'React / TS', pct: '88%', fill: '#8b5cf6', delay: '900ms' },
                  ].map((skill, i) => (
                    <div key={i} className="mb-[10px] last:mb-0">
                      <div className="flex justify-between items-center mb-[4px]">
                        <span className="font-sans text-[10px] text-[#c8daea]/60">{skill.name}</span>
                        <span className="font-mono text-[10px]" style={{ color: skill.fill }}>{skill.pct}</span>
                      </div>
                      <div className="h-[4px] w-full bg-white/5 rounded-[4px] overflow-hidden">
                        <div
                          className="h-full rounded-[4px]"
                          style={{
                            backgroundColor: skill.fill,
                            width: isVisible ? skill.pct : '0%',
                            transition: `width 1.2s cubic-bezier(0.23, 1, 0.32, 1) ${skill.delay}`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}

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
