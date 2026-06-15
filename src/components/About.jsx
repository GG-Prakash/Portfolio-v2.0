import { useState, useEffect, useRef } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return isMobile;
}

function useTilt(strength = 12, enabled = true) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) {
      setStyle({});
      return;
    }

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      setStyle({
        transform: `perspective(900px) rotateY(${dx * strength}deg) rotateX(${-dy * strength}deg) translateZ(10px)`,
        transition: "transform 0.08s ease-out",
      });
    };

    const onLeave = () =>
      setStyle({
        transform: "perspective(900px) rotateX(0) rotateY(0)",
        transition: "transform 0.5s ease",
      });

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength, enabled]);

  return { ref, style };
}

function useParallax(enabled = true) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) {
      setMouse({ x: 0, y: 0 });
      return;
    }

    const h = (e) =>
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });

    window.addEventListener("mousemove", h);

    return () => window.removeEventListener("mousemove", h);
  }, [enabled]);

  return mouse;
}

const parallaxStyle = (mouse, depth = 1) => ({
  transform: `translate(${mouse.x * depth * 7}px, ${mouse.y * depth * 5
    }px)`,
  transition: "transform 0.14s ease-out",
});

function useStagger(count, inView, delay = 180, baseDelay = 600) {
  const [visible, setVisible] = useState(Array(count).fill(false));

  useEffect(() => {
    if (!inView) return;
    const timers = [];

    for (let i = 0; i < count; i++) {
      timers.push(
        setTimeout(
          () =>
            setVisible((v) => {
              const n = [...v];
              n[i] = true;
              return n;
            }),
          baseDelay + i * delay
        )
      );
    }

    return () => timers.forEach(clearTimeout);
  }, [inView, count, delay, baseDelay]);

  return visible;
}

const staggerStyle = (visible, extra = {}) => ({
  opacity: visible ? 1 : 0,
  transform: visible
    ? "translateY(0px) scale(1)"
    : "translateY(40px) scale(0.98)",
  transition:
    "opacity 1.4s cubic-bezier(0.22, 1, 0.36, 1), transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)",
  ...extra,
});

const skills = ["UI/UX", "Full Stack", "Cloud", "AI Agent", "Automation"];

const exploring = [
  "AI UX",
  "Motion Systems",
  "Design + Code Fusion",
];

// const DOT_BG = {
//   backgroundImage:
//     "radial-gradient(circle, #00000018 2px, transparent 1px)",
//   backgroundSize: "22px 22px",
// };

const BOX_BG = {
  backgroundImage: `
    linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
  `,
  backgroundSize: "16px 16px",
};


const GHOST_BASE = {
  position: "absolute",
  pointerEvents: "none",
  userSelect: "none",
  whiteSpace: "nowrap",
  fontWeight: 900,
  letterSpacing: "-0.055em",
  lineHeight: 0.88,
  fontFamily: "'DM Sans', sans-serif",
  zIndex: 1,
};

function Layout8() {
  const isMobile = useIsMobile();
  const enableMouseEffects = !isMobile;
  const mouse = useParallax(enableMouseEffects);

  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const vis = useStagger(6, inView, 180, 800);

  const t3 = useTilt(9, enableMouseEffects);
  const t4 = useTilt(11, enableMouseEffects);
  const t5 = useTilt(7, enableMouseEffects);
  const t6 = useTilt(10, enableMouseEffects);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-white"
      style={{
        height: "100dvh",
        minHeight: "100dvh",
        fontFamily: "'DM Mono', monospace",
      }}
    >
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500;700;900&display=swap');

        @media (min-width: 768px) and (max-width: 1024px) {
          #about {
            height: 100dvh !important;
            min-height: 100dvh !important;
          }

          #about .about-name {
            top: 6% !important;
            left: 4.5% !important;
          }

          #about .about-name > div > div:first-child {
            font-size: clamp(10px, 1.25vw, 12px) !important;
            letter-spacing: 0.28em !important;
            margin-bottom: 8px !important;
          }

          #about .about-name > div > div:nth-child(2) {
            font-size: clamp(24px, 3.35vw, 34px) !important;
          }

          #about .about-name > div > div:nth-child(3) {
            width: 42px !important;
            margin-top: 8px !important;
            margin-bottom: 8px !important;
          }

          #about .about-name > div > div:nth-child(4) {
            font-size: clamp(10px, 1.25vw, 12px) !important;
            letter-spacing: 0.18em !important;
          }

          #about .about-tagline {
            top: 15% !important;
            right: 4.5% !important;
          }

          #about .about-tagline > div > div:first-child {
            font-size: clamp(43px, 5.6vw, 58px) !important;
          }

          #about .about-tagline > div > div:nth-child(2) {
            font-size: clamp(37px, 4.95vw, 50px) !important;
          }

          #about .about-tagline > div > div:nth-child(3) {
            font-size: clamp(22px, 3.1vw, 30px) !important;
          }

          #about .about-copy {
            top: 28% !important;
            right: 5% !important;
            width: min(450px, 46%) !important;
          }

          #about .about-copy p {
            font-size: clamp(15px, 2vw, 28px) !important;
            line-height: 1.58 !important;
            text-align: right !important;
          }

          #about .about-stats {
            top: 25% !important;
            left: 5% !important;
            width: clamp(160px, 20vw, 190px) !important;
          }

          #about .about-stats-card {
            min-height: clamp(224px, 29vw, 250px) !important;
            padding: 20px !important;
            border-radius: 18px !important;
          }

          #about .about-stats-label {
            font-size: 10px !important;
            letter-spacing: 0.26em !important;
            margin-bottom: 14px !important;
          }

          #about .about-stat-item > div:first-child {
            font-size: clamp(36px, 4.8vw, 44px) !important;
          }

          #about .about-stat-item > div:nth-child(2) {
            font-size: 11px !important;
          }

          #about .about-skills {
            top: 40% !important;
            left: 22% !important;
            width: clamp(218px, 27vw, 248px) !important;
          }

          #about .about-skills > div {
            min-height: clamp(228px, 29vw, 252px) !important;
            padding: 20px !important;
            border-radius: 20px !important;
          }

          #about .about-skills .space-y-5 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 16px !important;
          }

          #about .about-skills span {
            font-size: 14px !important;
          }

          #about .about-skills span:first-child {
            font-size: 10px !important;
          }

          #about .about-exploring {
            bottom: 13% !important;
            left: 5% !important;
            width: clamp(250px, 32vw, 290px) !important;
          }

          #about .about-exploring > div {
            padding: 20px !important;
            border-radius: 20px !important;
          }

          #about .about-exploring .grid {
            gap: 10px !important;
            margin-bottom: 14px !important;
          }

          #about .about-exploring .grid > div:nth-child(2) {
            font-size: 10px !important;
            letter-spacing: 0.22em !important;
          }

          #about .about-exploring span {
            font-size: 13px !important;
          }

          #about .about-exploring span:first-child {
            font-size: 18px !important;
          }

          #about .about-cta {
            bottom: 15% !important;
            right: 6% !important;
            width: clamp(176px, 22vw, 202px) !important;
          }

          #about .about-cta > div {
            padding: 20px !important;
            border-radius: 20px !important;
          }

          #about .about-cta .flex.items-center {
            margin-bottom: 14px !important;
          }

          #about .about-cta .flex.items-center span:nth-child(2) {
            font-size: 8px !important;
            letter-spacing: 0.24em !important;
          }

          #about .about-cta a {
            font-size: 11px !important;
            padding-top: 9px !important;
            padding-bottom: 9px !important;
            border-radius: 10px !important;
          }

          #about .about-ghost-crafting {
            top: 17% !important;
            left: 38% !important;
            font-size: clamp(108px, 15vw, 150px) !important;
          }

          #about .about-ghost-systems {
            top: 28% !important;
            left: 36% !important;
            font-size: clamp(92px, 14vw, 128px) !important;
          }

          #about .about-ghost-humans {
            top: 20% !important;
            right: 26% !important;
            font-size: clamp(72px, 10vw, 104px) !important;
          }

          #about .about-ghost-intelligence {
            top: 48% !important;
            left: 52% !important;
            font-size: clamp(48px, 7.2vw, 64px) !important;
          }
        }
      
        @media (max-width: 767px) {
          #about {
            height: auto !important;
            min-height: 100dvh !important;
            padding: 48px 20px 64px !important;
          }

          #about .about-mobile-stack {
            position: relative !important;
            inset: auto !important;
            top: auto !important;
            right: auto !important;
            bottom: auto !important;
            left: auto !important;
            width: 100% !important;
            max-width: none !important;
            margin: 0 0 28px !important;
            text-align: left !important;
            transform-origin: center left !important;
          }

          #about .about-mobile-stack > div {
            width: 100% !important;
            text-align: left !important;
          }

          #about .about-name {
            margin-bottom: 34px !important;
          }

          #about .about-tagline {
            margin-bottom: 24px !important;
          }

          #about .about-tagline > div > div:first-child {
            font-size: clamp(38px, 13vw, 40px) !important;
          }

          #about .about-tagline > div > div:nth-child(2) {
            font-size: clamp(32px, 11vw, 35px) !important;
          }

          #about .about-tagline > div > div:nth-child(3) {
            font-size: clamp(21px, 7vw, 25px) !important;
          }

          #about .about-copy {
            margin-bottom: 32px !important;
          }

          #about .about-copy p {
            font-size: 17px !important;
            line-height: 1.68 !important;
          }

          #about .about-card {
            margin-bottom: 18px !important;
          }

          #about .about-card > div {
            width: 100% !important;
          }

          #about .about-stats > div,
          #about .about-skills > div {
            min-height: auto !important;
          }

          #about .about-stats-card {
            display: grid !important;
            grid-template-columns: 1fr auto 1fr !important;
            align-items: stretch !important;
            gap: 18px !important;
          }

          #about .about-stats-card > .about-stats-label {
            grid-column: 1 / -1 !important;
            margin-bottom: 0 !important;
          }

          #about .about-stat-divider-top {
            display: none !important;
          }

          #about .about-stat-divider {
            grid-column: 2 !important;
            grid-row: 2 !important;
            width: 1px !important;
            height: auto !important;
            min-height: 72px !important;
          }

          #about .about-stat-item {
            justify-content: flex-start !important;
            min-width: 0 !important;
          }

          #about .about-stat-item:first-of-type {
            grid-column: 1 !important;
            grid-row: 2 !important;
          }

          #about .about-stat-item:last-of-type {
            grid-column: 3 !important;
            grid-row: 2 !important;
          }

          #about .about-cta {
            margin-bottom: 0 !important;
          }

          #about .about-cta a {
            text-align: left !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          #about .about-ghost {
            opacity: 0.045 !important;
            max-width: 100vw !important;
          }
        }
      `}</style>

      {/* DOT GRID */}
        <div className="absolute inset-0" style={BOX_BG} />  


      {/* RULE LINES */}
      {[22, 38, 55, 70, 84].map((pct) => (
        <div
          key={pct}
          className="absolute left-0 right-0 h-px bg-black/[0.04]"
          style={{ top: `${pct}%` }}
        />
      ))}

      {/* GHOST TYPOGRAPHY */}

      <div>
        <div
          className="absolute pointer-events-none select-none whitespace-nowrap font-black leading-[0.88] z-[1]
             top-[18%] text-[clamp(80px,16vw,210px)] left-[40%] translate-x-[-40%] text-black opacity-[0.1]
             tracking-[-0.055em] about-ghost about-ghost-crafting"
          style={{
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Crafting
        </div>
        <div
          className="absolute pointer-events-none select-none whitespace-nowrap 
             font-black leading-[0.88] z-[1]
             top-[38%] left-[37%] translate-x-[-40%]
             text-[clamp(80px,16vw,150px)]
             tracking-[-0.055em] about-ghost about-ghost-systems"
          style={{
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <span className="text-black opacity-[0.1]">
            Systems
          </span>


        </div>
      </div>


      <div
        className="absolute pointer-events-none select-none whitespace-nowrap font-black leading-[0.88] z-[1]
             top-[20%] right-[30%] text-[clamp(58px,11vw,148px)]
             text-black opacity-[0.021] tracking-[-0.045em] about-ghost about-ghost-humans"
        style={{
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        for humans
      </div>

      <div
        className="absolute pointer-events-none select-none whitespace-nowrap font-black z-[1]
             top-[60%] left-[49%] text-[clamp(50px,9.5vw,90px)]
             text-[#F5C200] opacity-[0.4]
             tracking-[-0.04em] leading-[0.92] about-ghost about-ghost-intelligence"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: 0.5,
        }}
      >
        through
        <br />
        intelligence
      </div>

      {/* NAME — LEFT SIDE */}
      <div
        className="about-mobile-stack about-name"
        style={{
          position: "absolute",
          top: "6%",
          left: "5%",
          zIndex: 8,
          textAlign: "left",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.2s, transform 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.2s",
          willChange: "opacity, transform",
        }}
      >
        <div style={parallaxStyle(mouse, 1)}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "14px",
              letterSpacing: "0.34em",
              color: "grey",
              textTransform: "uppercase",
              marginBottom: "10px",

            }}
          >
            Portfolio · 2026
          </div>

          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(26px, 3vw, 45px)",
              letterSpacing: "-0.035em",
              lineHeight: 1,
              color: "#000",
            }}
          >
            GNANAPRAKASH G
          </div>

          <div
            style={{
              height: "3px",
              background: "#F5C200",
              marginTop: "10px",
              width: "50px",
              marginBottom: "10px",
              opacity: 1,
            }}
          />

          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "14px",
              letterSpacing: "0.22em",
              color: "#999",
              textTransform: "uppercase",
            }}
          >
            Full-Stack Designer
          </div>
        </div>
      </div>

      {/* TAGLINE — RIGHT SIDE */}
      <div
        className="about-mobile-stack about-tagline"
        style={{
          position: "absolute",
          top: "12%",
          right: "5%",
          zIndex: 6,
          textAlign: "right",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.4s, transform 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.4s",
          willChange: "opacity, transform",
        }}
      >
        <div style={parallaxStyle(mouse, 0.22)}>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 5.2vw, 75px)",
              letterSpacing: "-0.048em",
              lineHeight: 0.93,
              color: "#000",
            }}
          >
            Crafting systems
          </div>

          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(24px, 4.6vw, 65px)",
              letterSpacing: "-0.044em",
              lineHeight: 0.96,
              color: "#000",
              opacity: 0.68,
              marginTop: "0.06em",
            }}
          >
            for humans
          </div>

          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(17px, 3.1vw, 38px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#F5C200",
              marginTop: "0.18em",
            }}
          >
            through motion & intelligence
          </div>
        </div>
      </div>

      {/* ABOUT — RIGHT SIDE */}
      <div
        className="absolute top-[33%] right-[5%] z-[5] w-[min(520px,48%)] text-left about-mobile-stack about-copy"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.6s, transform 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.6s",
          willChange: "opacity, transform",
        }}
      >
        <div style={parallaxStyle(mouse, 1)}>
          <p
            className="text-[#444] leading-[1.62] tracking-[-0.012em] m-0
                 text-[clamp(16px,1.72vw,24px)] font-normal"
            style={{
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Designer and developer bridging aesthetics with
            engineering — crafting interfaces that feel alive,
            systems that scale intelligently, and AI experiences
            that genuinely help humans navigate a complex world
            with clarity, intent, and purpose.
          </p>
        </div>
      </div>

      {/* STATS */}
      <div
        ref={t3.ref}
        className="absolute top-[30%] left-[6%] z-[8]  w-[210px] about-mobile-stack about-card about-stats"
        style={{
          ...t3.style,
          ...parallaxStyle(mouse, 2),
          ...staggerStyle(vis[0]),
        }}
      >
        <div className="bg-yellow-400 rounded-2xl p-6 shadow-xl cursor-default min-h-[280px] flex flex-col flex-1 about-stats-card">
          <div className="text-[12px] tracking-[0.3em] text-black/50 uppercase mb-4 about-stats-label">
            metrics
          </div>
          {/* space line */}
          <div className="bg-black h-[1px] opacity-5 about-stat-divider about-stat-divider-top"></div>

          <div className="space-y-1 flex-1 flex flex-col justify-center about-stat-item">
            <div
              className="text-5xl font-black text-black"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              3+
            </div>

            <div className="text-[12px] text-black/60">
              Years Experience
            </div>

          </div>

          {/* space line */}
          <div className="bg-black h-[1px] opacity-5 about-stat-divider"></div>

          <div className="space-y-1 flex-1 flex flex-col justify-center about-stat-item">
            <div
              className="text-5xl font-black text-black"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              20+
            </div>

            <div className="text-[12px] text-black/60">
              Projects Shipped
            </div>

          </div>


        </div>
      </div>

      {/* SKILLS */}

      <div
        ref={t4.ref}
        className="absolute top-[38%] left-[34%] z-[10] w-[270px] about-mobile-stack about-card about-skills"
        style={{
          ...t4.style,
          ...staggerStyle(vis[1]),

          // ✅ FIX: safe transform merge
          transform: `${parallaxStyle(mouse, 2)?.transform || ""}`,
          willChange: "transform",
        }}
      >
        <div className="bg-black rounded-3xl p-6 min-h-[280px] shadow-xl cursor-default">

          <div className="text-yellow-400 text-[10px] tracking-[0.3em] uppercase mb-4">
            stack.json
          </div>

          <div className="space-y-5">
            {skills.map((s, i) => (
              <div key={s} className="flex items-center gap-3">

                <span className="text-yellow-400 text-[12px]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span
                  className="text-md font-bold text-white"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {s}
                </span>

                <div className="flex-1 border-b border-white/[0.15]" />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* EXPLORING */}
      <div
        ref={t5.ref}
        className="absolute bottom-[14%] left-[5%] z-[9] w-[320px] about-mobile-stack about-card about-exploring"
        style={{
          ...t5.style,
          ...parallaxStyle(mouse, 1.8),
          ...staggerStyle(vis[2]),
        }}
      >
        <div className="bg-white border-2 border-black rounded-3xl p-6 shadow-lg cursor-default">

          <div className="grid grid-cols-[4px_1fr] items-center gap-3 mb-4">

            <div className="w-[3px] h-5 bg-yellow-400 rounded-full" />

            <div className="text-[12px] tracking-[0.3em] text-gray-400 uppercase">
              currently_exploring.log
            </div>

          </div>


          <div className="space-y-2.5">
            {exploring.map((e) => (
              <div key={e} className="flex items-center gap-3">

                <span className="text-yellow-400 font-bold text-xl">
                  ▸
                </span>

                <span
                  className="text-sm font-bold text-black"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {e}
                </span>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* CTA */}
      <div
        ref={t6.ref}
        className="absolute bottom-[12%] right-[8%] z-[10] w-[220px] about-mobile-stack about-card about-cta"
        style={{
          ...t6.style,
          ...staggerStyle(vis[3]),
          transform: `
      ${parallaxStyle(mouse, 2)?.transform || ""}
      rotate(-3deg)
    `,
          transformOrigin: "bottom right",
        }}
      >
        <div className="bg-yellow-400 rounded-3xl p-6 shadow-xl border border-white cursor-default">

          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />

            <span className="text-[9px] tracking-[0.3em] text-black uppercase font-bold">
              open_to_collab
            </span>
          </div>

          <div className="flex flex-col gap-2">

            <a
              href="#"
              className="block text-xs font-black text-center 
                   bg-black text-yellow-400 rounded-xl py-2.5
                   hover:scale-[1.03] transition-transform"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              LinkedIn ↗
            </a>

            <a
              href="#"
              className="block text-xs font-black text-center
                   bg-white text-black rounded-xl py-2.5
                   hover:scale-[1.03] transition-transform"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Resume ↗
            </a>

          </div>

        </div>
      </div>

        
<div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-8 bg-gradient-to-t from-white to-transparent" />
   
    </section>
  );
}

export default Layout8;
