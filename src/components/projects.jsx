import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── project data ─── */
const projectsData = [
  {
    id: 1,
    category: "web",
    catLabel: "Web Development",
    title: "Commerce Dashboard",
    stack: ["React", "Node.js", "PostgreSQL"],
    footer: "Analytics platform",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M3 12h18M3 6h18M3 18h18" />
      </svg>
    ),
  },
  {
    id: 2,
    category: "cloud",
    catLabel: "Cloud",
    title: "Deploy Pipeline",
    stack: ["AWS", "Terraform", "Jenkins"],
    footer: "CI/CD automation",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    id: 3,
    category: "web",
    catLabel: "Web Development",
    title: "Portfolio CMS",
    stack: ["Next.js", "Framer Motion", "Sanity"],
    footer: "Headless site",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    id: 4,
    category: "cloud",
    catLabel: "Cloud",
    title: "Container Orchestration",
    stack: ["Kubernetes", "Docker", "Grafana"],
    footer: "Microservices suite",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 10h16M10 4v16" />
      </svg>
    ),
  },
  {
    id: 5,
    category: "web",
    catLabel: "Web Development",
    title: "Booking Platform UI",
    stack: ["React", "TypeScript", "Tailwind"],
    footer: "Cinema booking app",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M4 4h16v16H4z" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
  },
  {
    id: 6,
    category: "cloud",
    catLabel: "Cloud",
    title: "Infra Monitoring System",
    stack: ["Lambda", "CloudWatch", "SNS"],
    footer: "Serverless alerting",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const tabs = [
  { key: "all", label: "All" },
  { key: "web", label: "Web Development" },
  { key: "cloud", label: "Cloud" },
];

/* ─── single project card ─── */
function ProjectCard({ project }) {
  const cardRef = useRef(null);

  /* 3-D tilt */
  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  }, []);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.97 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group cursor-pointer overflow-hidden bg-white border border-[#e6e4dc] rounded-[18px]
                   transition-[border-color,box-shadow] duration-300 ease-out will-change-transform
                   hover:border-[#F0C020] hover:shadow-[0_0_0_1px_#F0C020]"
        style={{ transformStyle: "preserve3d", transition: "transform .15s ease-out, border-color .3s ease, box-shadow .3s ease" }}
      >
        {/* Thumbnail */}
        <div
          className="h-40 bg-[#f5f5f3] border-b border-[#e6e4dc] flex items-center justify-center"
          style={{ transform: "translateZ(20px)" }}
        >
          <div
            className="w-14 h-14 rounded-[14px] bg-[#0d0d0d] flex items-center justify-center
                        [&_svg]:stroke-[#F0C020]"
          >
            {project.icon}
          </div>
        </div>

        {/* Body */}
        <div className="p-6" style={{ transform: "translateZ(10px)" }}>
          {/* Category label */}
          <span
            className="block mb-2 text-[11px] uppercase tracking-[0.1em] text-[#6f6f6f]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {project.catLabel}
          </span>

          {/* Title */}
          <h3
            className="text-[20px] leading-[1.25] font-extrabold text-[#0d0d0d] mb-3.5"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {project.title}
          </h3>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-[18px]">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] border border-[#e6e4dc] px-2.5 py-[5px] rounded-[6px]
                           text-[#0d0d0d] bg-[#f5f5f3]"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center pt-3.5 border-t border-[#e6e4dc]">
            <span className="text-[13px] text-[#6f6f6f]">{project.footer}</span>
            <div
              className="w-[34px] h-[34px] rounded-full bg-[#0d0d0d] flex items-center justify-center
                          text-[#F0C020] transition-all duration-[250ms] ease-out
                          group-hover:bg-[#F0C020] group-hover:text-[#0d0d0d] group-hover:rotate-45"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── main section ─── */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [flippingKey, setFlippingKey] = useState(null);

  /* compute counts */
  const counts = {
    all: projectsData.length,
    web: projectsData.filter((p) => p.category === "web").length,
    cloud: projectsData.filter((p) => p.category === "cloud").length,
  };

  /* filtered projects */
  const filtered =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  /* tab click */
  const handleTabClick = (key) => {
    if (key === activeFilter) return;
    setFlippingKey(key);
    setActiveFilter(key);
    setTimeout(() => setFlippingKey(null), 350);
  };

  return (
    <section
      className="bg-white w-full"
      style={{ fontFamily: "'DM Sans', Arial, sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto py-[100px] px-12 max-md:px-10 max-sm:py-[60px] max-sm:px-6">
        {/* ── Header ── */}
        <div className="text-center mb-12">
          {/* Eyebrow */}
          <span
            className="block mb-3 text-[13px] uppercase tracking-[0.15em] text-[#6f6f6f]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Lab notes
          </span>

          {/* Title */}
          <h1
            className="text-[52px] max-md:text-[38px] leading-[1.05] font-extrabold text-[#0d0d0d] mb-9"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            My{" "}
            <span
              className="text-[#F0C020]"
              style={{ WebkitTextStroke: "1.5px #0d0d0d" }}
            >
              Projects
            </span>
          </h1>

          {/* Tab pills */}
          <div className="inline-flex gap-2 p-1.5 border border-[#e6e4dc] rounded-full max-sm:flex-wrap max-sm:w-full max-sm:justify-center">
            {tabs.map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => handleTabClick(tab.key)}
                  className={`flex items-center gap-2 border-none px-[22px] py-[11px] rounded-[40px]
                              text-[14px] font-medium cursor-pointer transition-all duration-300 ease-out
                              active:scale-[0.96]
                              ${isActive ? "bg-[#F0C020] text-[#0d0d0d]" : "bg-transparent text-[#0d0d0d]"}`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {tab.label}
                  <span
                    className={`text-[11px] rounded-[20px] px-2 py-[2px] min-w-[22px] text-center
                                transition-all duration-300
                                ${isActive
                                  ? "bg-[#0d0d0d] text-[#F0C020]"
                                  : "bg-[#f5f5f3] text-[#0d0d0d]"
                                }
                                ${flippingKey === tab.key ? "animate-[flip_0.35s_ease]" : ""}`}
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {counts[tab.key]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Grid ── */}
        <motion.div
          layout
          className="grid grid-cols-3 gap-7 max-[900px]:grid-cols-2 max-sm:grid-cols-1"
          style={{ perspective: "1200px" }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Keyframes for flip animation */}
      <style>{`
        @keyframes flip {
          0%   { transform: translateY(0) scale(1);    opacity: 1; }
          45%  { transform: translateY(-6px) scale(.7); opacity: 0; }
          55%  { transform: translateY(6px) scale(.7);  opacity: 0; }
          100% { transform: translateY(0) scale(1);    opacity: 1; }
        }
      `}</style>
    </section>
  );
}
