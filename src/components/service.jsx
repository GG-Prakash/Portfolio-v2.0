import clsx from "clsx";
import { motion } from "framer-motion";

const headlineText = "How I Create Digital Impact.";
const headlineHighlight = "Impact";
const headlineHighlightStart = headlineText.indexOf(headlineHighlight);

const headlineContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.026,
    },
  },
};

const headlineLetter = {
  hidden: {
    opacity: 0,
    y: 18,
    clipPath: "inset(0 100% 0 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardsContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.12,
    },
  },
};

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 34,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardStyles = {
  yellow: {
    card:
      "bg-[#F0C020] ",
    tag: "bg-black/10 text-[#5c3c00]",
    title: "text-[#1c1000]",
    description: "text-black",
  },
  white: {
    card:
      "bg-[#fdfcfa] border border-black",
    tag: "bg-black/[0.055] text-[#7a6e5e]",
    title: "text-[#160f04]",
    description: "text-black",
  },
  black: {
    card:
      "bg-[#111009] ",
    tag: "bg-white/[0.09] text-white/50",
    title: "text-[#F0C020]",
    description: "text-white",
  },
};

const services = [
  {
    theme: "yellow",
    tag: "Full-Stack Dev",
    title: (
      <>
        End-to-end Development
      </>
    ),
    description:
      "Craft modern web platforms with React, Next.js, Node.js, SQL/NoSQL databases, REST APIs, and cloud services, optimized for scalability and business impact from concept to deployment.",
    visual: <FullStackVisual />,
  },
  {
    theme: "black",
    tag: "AI Agents",
    title: (
      <>
        Intelligent
        systems
      </>
    ),
    description:
      "Build intelligent AI agents that automate workflows, handle tasks, and deliver context-aware responses to improve business efficiency.",
    visual: <AiAgentsVisual />,
  },
  {
    theme: "white",
    tag: "E-Commerce",
    title: (
      <>
        Custom E-Commerce Solutions
      </>
    ),
    description:
      "Build high-converting online stores with seamless shopping experiences, secure payments, and scalable architecture.",
    visual: <EcommerceVisual />,
  },
  {
    theme: "white",
    tag: "Automation",
    title: (
      <>
        CI/CD System
      </>
    ),
    description:
      "Automating CI/CD pipelines to streamline build, test, and deployment processes, ensuring faster, reliable, and scalable software delivery.",
    visual: <AutomationVisual />,
  },

  {
    theme: "yellow",
    tag: "Cloud Ops",
    title: (
      <>
        Cloud Infra Solutions
      </>
    ),
    description:
      "End-to-end cloud solutions focused on scalability, security, and performance—enabling seamless deployment and modern application delivery by AWS/GCP/AZURE.",
    visual: <CloudOpsVisual />,
  },

];

function ServiceCard({ service }) {
  const styles = cardStyles[service.theme];

  const handleMouseMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = (x / rect.width - 0.5) * 12;
    const rotateX = -(y / rect.height - 0.5) * 12;

    card.style.transform = `perspective(800px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(-5px)`;
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.style.transform =
      "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0)";
  };

  return (
    <article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "group relative flex h-[350px] w-[min(310px,100%)] shrink-0 cursor-pointer flex-col overflow-hidden rounded-4xl px-6 pb-[22px] pt-[26px] transition-transform duration-200 ease-out will-change-transform [transform-style:preserve-3d]",
        styles.card,
      )}

    >
      <span
        className={clsx(
          "mb-4 inline-flex w-fit items-center gap-[5px] rounded-full px-3 py-1 font-['DM_Sans'] text-[10px] font-medium uppercase tracking-[2px]",
          styles.tag,
        )}
      >
        {service.tag}
      </span>

      <h3
        className={clsx(
          "mb-2.5 font-['Sora'] text-2xl font-bold leading-[1.22] tracking-[-0.5px]",
          styles.title,
        )}
      >
        {service.title}
      </h3>

      <p
        className={clsx(
          "max-w-[240px] text-[14px] font-normal leading-[1.7]",
          styles.description,
        )}
      >
        {service.description}
      </p>

      <div className="pointer-events-none absolute bottom-0 right-0 z-[1]">
        {service.visual}
      </div>
    </article>
  );
}

function AnimatedHeadline() {
  return (
    <motion.h2
      id="services-title"
      aria-label={headlineText}
      className="font-['Sora'] text-5xl font-extrabold leading-[1.08] tracking-[-1.5px] text-[#1a1510]"
      variants={headlineContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      <span aria-hidden="true">
        {headlineText.split("").map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            className={clsx(
              "inline-block overflow-hidden",
              index >= headlineHighlightStart &&
                index < headlineHighlightStart + headlineHighlight.length &&
                "text-[#F0C020]",
            )}
            variants={headlineLetter}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </span>
    </motion.h2>
  );
}

function FullStackVisual() {
  return (
    <svg
      width="156"
      height="174"
      viewBox="0 0 156 174"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="78" cy="162" rx="54" ry="8" fill="rgba(0,0,0,0.1)" />
      <rect
        x="28"
        y="90"
        width="112"
        height="68"
        rx="12"
        fill="rgba(0,0,0,0.13)"
      />
      <rect
        x="14"
        y="76"
        width="112"
        height="68"
        rx="12"
        fill="rgba(255,255,255,0.28)"
      />
      <rect
        x="14"
        y="76"
        width="112"
        height="68"
        rx="12"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="0.8"
      />
      <rect
        x="0"
        y="62"
        width="112"
        height="68"
        rx="12"
        fill="rgba(255,255,255,0.72)"
      />
      <rect
        x="0"
        y="62"
        width="112"
        height="68"
        rx="12"
        stroke="rgba(255,255,255,0.85)"
        strokeWidth="1"
      />
      <rect
        x="0"
        y="62"
        width="112"
        height="16"
        rx="12"
        fill="rgba(255,255,255,0.55)"
      />
      <circle cx="12" cy="70" r="3.5" fill="rgba(200,70,50,0.7)" />
      <circle cx="22" cy="70" r="3.5" fill="rgba(230,170,20,0.7)" />
      <circle cx="32" cy="70" r="3.5" fill="rgba(50,170,70,0.7)" />
      <rect x="10" y="86" width="46" height="5" rx="2.5" fill="rgba(0,0,0,0.2)" />
      <rect x="10" y="96" width="30" height="5" rx="2.5" fill="rgba(0,0,0,0.14)" />
      <rect x="10" y="106" width="54" height="5" rx="2.5" fill="rgba(0,0,0,0.2)" />
      <rect x="10" y="116" width="24" height="5" rx="2.5" fill="rgba(0,0,0,0.12)" />
      <rect x="68" y="86" width="32" height="5" rx="2.5" fill="rgba(160,100,0,0.3)" />
      <rect x="68" y="96" width="20" height="5" rx="2.5" fill="rgba(160,100,0,0.22)" />
      <rect x="68" y="106" width="28" height="5" rx="2.5" fill="rgba(160,100,0,0.3)" />
    </svg>
  );
}

function EcommerceVisual() {
  return (
    <svg
      width="150"
      height="180"
      viewBox="0 0 150 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="82" cy="164" rx="50" ry="8" fill="rgba(0,0,0,0.07)" />
      <rect x="36" y="52" width="94" height="114" rx="18" fill="#f0ede8" />
      <rect
        x="36"
        y="52"
        width="94"
        height="114"
        rx="18"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="1.2"
      />
      <rect x="42" y="60" width="82" height="100" rx="12" fill="#fdfcfa" />
      <rect
        x="42"
        y="60"
        width="82"
        height="28"
        rx="12"
        fill="rgba(255,255,255,0.9)"
      />
      <ellipse cx="83" cy="98" rx="22" ry="18" fill="#e8e2d9" />
      <ellipse cx="80" cy="95" rx="10" ry="8" fill="rgba(255,255,255,0.7)" />
      <rect x="50" y="122" width="38" height="6" rx="3" fill="rgba(0,0,0,0.12)" />
      <rect x="50" y="132" width="24" height="5" rx="2.5" fill="rgba(240,190,20,0.7)" />
      <rect x="50" y="143" width="66" height="12" rx="6" fill="#111009" />
      <rect x="62" y="147" width="30" height="4" rx="2" fill="rgba(255,255,255,0.6)" />
      <rect x="67" y="62" width="32" height="5" rx="2.5" fill="rgba(0,0,0,0.06)" />
      <path
        d="M64 60 C64 44 102 44 102 60"
        stroke="#d0ccc4"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <rect x="36" y="52" width="94" height="114" rx="18" fill="url(#sheen-w)" opacity="0.3" />
      <defs>
        <linearGradient id="sheen-w" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function AiAgentsVisual() {
  return (
    <svg
      width="158"
      height="178"
      viewBox="0 0 158 178"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="orb-core" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#f0c01e" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#c89010" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#8a5e00" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="96" cy="106" r="58" fill="rgba(240,192,30,0.06)" />
      <circle cx="96" cy="106" r="44" fill="rgba(240,192,30,0.08)" />
      <ellipse cx="96" cy="106" rx="50" ry="18" stroke="rgba(240,192,30,0.22)" strokeWidth="0.9" fill="none" />
      <ellipse
        cx="96"
        cy="106"
        rx="50"
        ry="18"
        stroke="rgba(240,192,30,0.12)"
        strokeWidth="0.9"
        fill="none"
        transform="rotate(60,96,106)"
      />
      <ellipse
        cx="96"
        cy="106"
        rx="50"
        ry="18"
        stroke="rgba(240,192,30,0.12)"
        strokeWidth="0.9"
        fill="none"
        transform="rotate(-60,96,106)"
      />
      <circle cx="44" cy="106" r="4.5" fill="rgba(240,192,30,0.55)" />
      <circle cx="148" cy="106" r="4.5" fill="rgba(240,192,30,0.55)" />
      <circle cx="96" cy="55" r="3.5" fill="rgba(240,192,30,0.4)" />
      <circle cx="96" cy="157" r="3.5" fill="rgba(240,192,30,0.4)" />
      <circle cx="50" cy="79" r="3" fill="rgba(240,192,30,0.28)" />
      <circle cx="142" cy="133" r="3" fill="rgba(240,192,30,0.28)" />
      <circle cx="96" cy="106" r="24" fill="#1e1c14" />
      <circle cx="96" cy="106" r="24" stroke="rgba(240,192,30,0.25)" strokeWidth="1" />
      <circle cx="96" cy="106" r="22" fill="url(#orb-core)" />
      <ellipse cx="90" cy="98" rx="7" ry="5" fill="rgba(255,255,255,0.18)" />
      <circle cx="96" cy="106" r="5" fill="rgba(240,192,30,0.9)" />
      <circle cx="94" cy="104" r="2" fill="rgba(255,255,255,0.55)" />
    </svg>
  );
}

function CloudOpsVisual() {
  return (
    <svg
      width="200"
      height="180"
      viewBox="0 0 200 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="cloud-g" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#d8cfb8" stopOpacity="0.4" />
        </radialGradient>
      </defs>
      <ellipse cx="118" cy="164" rx="60" ry="9" fill="rgba(0,0,0,0.1)" />
      <circle cx="95" cy="110" r="28" fill="rgba(255,255,255,0.35)" />
      <circle cx="128" cy="100" r="36" fill="rgba(255,255,255,0.3)" />
      <circle cx="154" cy="116" r="24" fill="rgba(255,255,255,0.35)" />
      <ellipse cx="122" cy="124" rx="62" ry="26" fill="url(#cloud-g)" />
      <ellipse cx="122" cy="124" rx="62" ry="26" stroke="rgba(255,255,255,0.85)" strokeWidth="1" />
      <ellipse cx="100" cy="116" rx="30" ry="10" fill="rgba(255,255,255,0.6)" />
      <rect x="94" y="118" width="22" height="4" rx="2" fill="rgba(0,0,0,0.12)" />
      <rect x="94" y="126" width="14" height="4" rx="2" fill="rgba(0,0,0,0.08)" />
      <rect x="126" y="118" width="22" height="4" rx="2" fill="rgba(160,110,0,0.35)" />
      <rect x="126" y="126" width="14" height="4" rx="2" fill="rgba(160,110,0,0.22)" />
      <line x1="48" y1="116" x2="58" y2="120" stroke="rgba(0,0,0,0.22)" strokeWidth="1.5" strokeDasharray="4,3" />
      <circle cx="42" cy="113" r="9" fill="rgba(255,255,255,0.55)" />
      <circle cx="42" cy="113" r="9" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
      <circle cx="42" cy="113" r="4" fill="rgba(0,0,0,0.22)" />
    </svg>
  );
}

function AutomationVisual() {
  return (
    <svg
      width="200"
      height="190"
      viewBox="0 0 200 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="gear-g1" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ccc8c0" stopOpacity="0.3" />
        </radialGradient>
        <radialGradient id="gear-g2" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#fefcf8" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#d0ccc4" stopOpacity="0.25" />
        </radialGradient>
      </defs>
      <ellipse cx="130" cy="174" rx="52" ry="8" fill="rgba(0,0,0,0.06)" />
      <g transform="translate(130,116)">
        <circle cx="0" cy="0" r="40" fill="#eae6e0" />
        <circle cx="0" cy="0" r="40" stroke="rgba(255,255,255,0.85)" strokeWidth="1" />
        <rect x="-5" y="-47" width="10" height="14" rx="3" fill="#ddd8d0" />
        <rect x="-5" y="33" width="10" height="14" rx="3" fill="#ddd8d0" />
        <rect x="33" y="-5" width="14" height="10" rx="3" fill="#ddd8d0" />
        <rect x="-47" y="-5" width="14" height="10" rx="3" fill="#ddd8d0" />
        <rect x="21" y="-44" width="10" height="14" rx="3" fill="#ddd8d0" transform="rotate(45,21,-44)" />
        <rect x="-31" y="30" width="10" height="14" rx="3" fill="#ddd8d0" transform="rotate(45,-31,30)" />
        <rect x="-31" y="-44" width="10" height="14" rx="3" fill="#ddd8d0" transform="rotate(-45,-31,-44)" />
        <rect x="21" y="30" width="10" height="14" rx="3" fill="#ddd8d0" transform="rotate(-45,21,30)" />
        <circle cx="0" cy="0" r="28" fill="url(#gear-g1)" />
        <circle cx="0" cy="0" r="28" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
        <circle cx="0" cy="0" r="12" fill="#d4d0c8" />
        <circle cx="0" cy="0" r="8" fill="#c8c4bc" />
        <ellipse cx="-7" cy="-10" rx="6" ry="4" fill="rgba(255,255,255,0.5)" />
      </g>
      <g transform="translate(82,88)">
        <circle cx="0" cy="0" r="24" fill="#e4e0d8" />
        <circle cx="0" cy="0" r="24" stroke="rgba(255,255,255,0.8)" strokeWidth="1" />
        <rect x="-4" y="-28" width="8" height="10" rx="2.5" fill="#d4d0c8" />
        <rect x="-4" y="18" width="8" height="10" rx="2.5" fill="#d4d0c8" />
        <rect x="18" y="-4" width="10" height="8" rx="2.5" fill="#d4d0c8" />
        <rect x="-28" y="-4" width="10" height="8" rx="2.5" fill="#d4d0c8" />
        <rect x="11" y="-26" width="8" height="10" rx="2.5" fill="#d4d0c8" transform="rotate(45,11,-26)" />
        <rect x="-19" y="16" width="8" height="10" rx="2.5" fill="#d4d0c8" transform="rotate(45,-19,16)" />
        <circle cx="0" cy="0" r="16" fill="url(#gear-g2)" />
        <circle cx="0" cy="0" r="8" fill="#ccc8c0" />
        <circle cx="0" cy="0" r="5" fill="#c0bcb4" />
        <ellipse cx="-4" cy="-6" rx="4" ry="3" fill="rgba(255,255,255,0.5)" />
      </g>
      <rect x="20" y="112" width="36" height="22" rx="8" fill="#eae6e0" />
      <rect x="20" y="112" width="36" height="22" rx="8" stroke="rgba(255,255,255,0.8)" strokeWidth="0.8" />
      <rect x="27" y="119" width="18" height="4" rx="2" fill="rgba(0,0,0,0.12)" />
      <rect x="27" y="126" width="12" height="3" rx="1.5" fill="rgba(0,0,0,0.08)" />
      <path
        d="M58 124 C66 118, 72 110, 78 100"
        stroke="rgba(0,0,0,0.18)"
        strokeWidth="1.5"
        strokeDasharray="4,3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Service() {
  return (
    <section
      id="services"
      // bg-[#f5f3ef] 
      className="relative min-h-[800px] overflow-hidden bg-white px-7 pb-14 pt-15 font-['DM_Sans']"
      aria-labelledby="services-title"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[url('/services-noise.svg')] opacity-60"
      />

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-['Sora'] text-[clamp(4.5rem,14vw,10rem)] font-black leading-none tracking-[-8px] text-black/[0.028]">
        SERVICES
      </div>
      <motion.div
        className="max-w-full text-center flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.65 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >

        <span className="inline-flex items-center gap-2 rounded-2xl border border-[#F0C020] px-6 py-2 shadow-[0_0_20px_rgba(240,192,32,0.12),0_4px_30px_rgba(240,192,32,0.08)] font-['DM_Sans'] text-[11px] font-medium uppercase tracking-[3.5px] text-[#9a8f7e]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F0C020] opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#F0C020] shadow-[0_0_12px_rgba(240,192,32,0.9)]"></span>
          </span>
          Services What I Offer
        </span>

        <AnimatedHeadline />

        <p className="text-xl text-black/60">
          Transforming ideas into high-impact digital products.
        </p>

      </motion.div>


        <motion.div
          className="relative z-[2] flex flex-col mt-8 items-center gap-10"
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-center gap-10">
            {services.slice(0, 3).map((service) => (
              <motion.div key={service.tag} variants={cardReveal}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-10">
            {services.slice(3, 5).map((service) => (
              <motion.div key={service.tag} variants={cardReveal}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </motion.div>


    </section>
  );
}

export default Service;
