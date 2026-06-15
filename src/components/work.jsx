import {
  Search,
  Lightbulb,
  Target,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion, useSpring, useTransform, useScroll, animate } from "framer-motion";

const cards = [
  {
    id: "01",
    title: "Discover",
    icon: Search,
    bg: "bg-[#F0C020]",
    text: "text-black",
    cut: "right",
    height: "h-[700px]",
    description:
      "Understanding your goals, audience and challenges through in-depth discovery.",
  },
  {
    id: "02",
    title: "Research",
    icon: Lightbulb,
    bg: "bg-white",
    text: "text-black",
    height: "h-[650px]",
    description:
      "Analyzing market, competitors and users to create the right foundation.",
  },
  {
    id: "03",
    title: "Plan",
    icon: Target,
    bg: "bg-black",
    text: "text-white",
    cut: "right",
    height: "h-[700px]",
    description:
      "Defining strategy, structure and roadmap to build scalable solutions.",
  },
  {
    id: "04",
    title: "Build",
    icon: Code2,
    bg: "bg-[#F0C020]",
    text: "text-black",
    height: "h-[650px]",
    description:
      "Crafting clean, performant and scalable products with precision.",
  },
  {
    id: "05",
    title: "Test",
    icon: ShieldCheck,
    bg: "bg-white",
    text: "text-black",
    cut: "left",
    height: "h-[700px]",
    description:
      "Ensuring quality, usability and performance through rigorous testing.",
  },
  {
    id: "06",
    title: "Launch",
    icon: Rocket,
    bg: "bg-black",
    text: "text-white",
    cut: "left",
    height: "h-[650px]",
    description:
      "Deploying confidently and optimizing for continuous growth.",
  },
];

// 5-col × 3-row decorative dot grid
function CornerDotGrid({ position, cardBg }) {
  const cols = 5;
  const rows = 3;
  const colGap = 20;
  const rowGap = 25;
  const dotSize = 4;

  const dotColor =
    cardBg === "bg-black"
      ? "rgba(255,255,255,0.25)"
      : cardBg === "bg-[#F0C020]"
        ? "rgba(0,0,0,0.22)"
        : "rgba(0,0,0,0.18)";

  const gridW = (cols - 1) * colGap + dotSize;
  const gridH = (rows - 1) * rowGap + dotSize;
  const edgePad = 25;

  const positionStyle =
    position === "bottom-left"
      ? { bottom: edgePad, left: edgePad }
      : { bottom: edgePad, right: edgePad };

  return (
    <div
      className="absolute pointer-events-none"
      style={{ ...positionStyle, width: gridW, height: gridH }}
      aria-hidden="true"
    >
      <svg
        width={gridW}
        height={gridH}
        viewBox={`0 0 ${gridW} ${gridH}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: rows }).map((_, row) =>
          Array.from({ length: cols }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col * colGap + dotSize / 2}
              cy={row * rowGap + dotSize / 2}
              r={dotSize / 2}
              fill={dotColor}
            />
          ))
        )}
      </svg>
    </div>
  );
}

function DiagonalSlashLines({ cardBg }) {
  const strokeColor =
    cardBg === "bg-black"
      ? "rgba(255,255,255,0.18)"
      : cardBg === "bg-[#F0C020]"
        ? "rgba(0,0,0,0.12)"
        : "rgba(0,0,0,0.10)";

  const W = 110;
  const H = 130;
  const bleed = 22;
  const count = 6;

  const lines = [];
  for (let i = 0; i < count; i++) {
    const b = (i / (count - 1)) * (W + H);
    const x1 = b <= W ? b : W;
    const y1 = b <= W ? 0 : b - W;
    let x2, y2;
    if (i === 3) {
      x2 = b - (H + bleed);
      y2 = H + bleed;
    } else {
      x2 = b >= H ? b - H : 0;
      y2 = b >= H ? H : b;
    }
    lines.push([x1, y1, x2, y2]);
  }

  const svgH = H + bleed;

  return (
    <div
      className="absolute pointer-events-none"
      style={{ bottom: 22, right: 18, overflow: "visible" }}
      aria-hidden="true"
    >
      <svg
        width={W}
        height={svgH}
        viewBox={`0 0 ${W} ${svgH}`}
        style={{ overflow: "visible" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {lines.map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={strokeColor}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  );
}

function ProcessCard({ card, isRevealed }) {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const { width: W, height: H } = size;

  const N = 120;
  const Rf = 30;
  const cornerRadius = 20;
  const Rm = N - 2 * Rf;

  const isNoNotch = card.id === "04";
  const isLeft = card.cut === "left";
  const isTopRight = card.id === "02";

  let pathData = "";
  if (W > 0 && H > 0) {
    if (isNoNotch) {
      pathData = `
        M ${cornerRadius}, 0
        L ${W - cornerRadius}, 0
        A ${cornerRadius}, ${cornerRadius} 0 0, 1 ${W}, ${cornerRadius}
        L ${W}, ${H - cornerRadius}
        A ${cornerRadius}, ${cornerRadius} 0 0, 1 ${W - cornerRadius}, ${H}
        L ${cornerRadius}, ${H}
        A ${cornerRadius}, ${cornerRadius} 0 0, 1 0, ${H - cornerRadius}
        L 0, ${cornerRadius}
        A ${cornerRadius}, ${cornerRadius} 0 0, 1 ${cornerRadius}, 0
        Z
      `;
    } else if (isTopRight) {
      pathData = `
        M ${cornerRadius}, 0
        L ${W - N}, 0
        A ${Rf}, ${Rf} 0 0, 1 ${W - N + Rf}, ${Rf}
        A ${Rm}, ${Rm} 0 0, 0 ${W - Rf}, ${N - Rf}
        A ${Rf}, ${Rf} 0 0, 1 ${W}, ${N}
        L ${W}, ${H - cornerRadius}
        A ${cornerRadius}, ${cornerRadius} 0 0, 1 ${W - cornerRadius}, ${H}
        L ${cornerRadius}, ${H}
        A ${cornerRadius}, ${cornerRadius} 0 0, 1 0, ${H - cornerRadius}
        L 0, ${cornerRadius}
        A ${cornerRadius}, ${cornerRadius} 0 0, 1 ${cornerRadius}, 0
        Z
      `;
    } else if (isLeft) {
      pathData = `
        M ${cornerRadius}, 0
        L ${W - cornerRadius}, 0
        A ${cornerRadius}, ${cornerRadius} 0 0, 1 ${W}, ${cornerRadius}
        L ${W}, ${H - cornerRadius}
        A ${cornerRadius}, ${cornerRadius} 0 0, 1 ${W - cornerRadius}, ${H}
        L ${N}, ${H}
        A ${Rf}, ${Rf} 0 0, 1 ${N - Rf}, ${H - Rf}
        A ${Rm}, ${Rm} 0 0, 0 ${Rf}, ${H - N + Rf}
        A ${Rf}, ${Rf} 0 0, 1 0, ${H - N}
        L 0, ${cornerRadius}
        A ${cornerRadius}, ${cornerRadius} 0 0, 1 ${cornerRadius}, 0
        Z
      `;
    } else {
      pathData = `
        M ${cornerRadius}, 0
        L ${W - cornerRadius}, 0
        A ${cornerRadius}, ${cornerRadius} 0 0, 1 ${W}, ${cornerRadius}
        L ${W}, ${H - N}
        A ${Rf}, ${Rf} 0 0, 1 ${W - Rf}, ${H - N + Rf}
        A ${Rm}, ${Rm} 0 0, 0 ${W - N + Rf}, ${H - Rf}
        A ${Rf}, ${Rf} 0 0, 1 ${W - N}, ${H}
        L ${cornerRadius}, ${H}
        A ${cornerRadius}, ${cornerRadius} 0 0, 1 0, ${H - cornerRadius}
        L 0, ${cornerRadius}
        A ${cornerRadius}, ${cornerRadius} 0 0, 1 ${cornerRadius}, 0
        Z
      `;
    }
  }

  const Icon = card.icon;

  const shadowFilter =
    card.bg === "bg-white"
      ? "drop-shadow(0 2px 6px rgba(0,0,0,0.07)) drop-shadow(0 8px 20px rgba(0,0,0,0.06))"
      : "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.08))";

  return (
    <motion.div
      className="relative flex-shrink-0"
      style={{ filter: shadowFilter }}
      initial={{ x: 120, opacity: 0 }}
      animate={
        isRevealed
          ? { x: 0, opacity: 1 }
          : { x: 120, opacity: 0 }
      }
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 18,
        mass: 1,
      }}
    >
      <div
        ref={ref}
        className={`relative w-[220px] ${card.height} ${card.bg} ${card.text} overflow-hidden`}
        style={{
          clipPath: pathData
            ? `path('${pathData.replace(/\s+/g, " ").trim()}')`
            : "none",
        }}
      >
        {/* Top-right 3×3 dot grid */}
        <div className="absolute top-10 right-10 grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`w-1 h-1 rounded-full ${
                card.bg === "bg-black" ? "bg-white/80" : "bg-black/70"
              }`}
            />
          ))}
        </div>

        {/* 5×3 corner dot grids */}
        {card.id === "02" && (
          <CornerDotGrid position="bottom-left" cardBg={card.bg} />
        )}
        {card.id === "04" && (
          <CornerDotGrid position="bottom-right" cardBg={card.bg} />
        )}

        {/* Diagonal slash lines — card 05 only */}
        {card.id === "05" && <DiagonalSlashLines cardBg={card.bg} />}

        {/* content */}
        <div className="p-8 h-full flex flex-col relative z-10">
          <div className="flex flex-col mb-16">
            <span
              className={`text-[25px] leading-none font-medium tracking-tight ${
                card.bg === "bg-black" ? "text-[#F0C020]" : "text-black"
              }`}
            >
              {card.id}
            </span>
            <div
              className={`mt-6 w-9 h-0.5 ${
                card.bg === "bg-black" ? "bg-[#F0C020]" : "bg-black"
              }`}
            />
          </div>

          <div
            className={`w-[100px] h-[100px] rounded-full flex items-center justify-center
              ${
                card.bg === "bg-[#F0C020]"
                  ? "bg-[#F0C020] border-t border-l border-white/30 shadow-[4px_4px_10px_rgba(0,0,0,0.18)]"
                  : card.bg === "bg-black"
                    ? "bg-[#111] border-t border-l border-white/10 shadow-[4px_4px_10px_rgba(0,0,0,0.4)]"
                    : "bg-white border-t border-l border-white shadow-[4px_4px_10px_rgba(0,0,0,0.12)]"
              }
            `}
          >
            <Icon
              size={45}
              strokeWidth={1.5}
              className={`${
                card.bg === "bg-black" ? "text-[#F0C020]" : "text-black"
              }`}
            />
          </div>

          <div className="mt-5 mb-24">
            <h3
              className={`${
                card.bg === "bg-black" ? "text-[#F0C020]" : "text-black"
              } text-2xl font-bold mb-4`}
            >
              {card.title}
            </h3>
            <p
              className={`text-[18px] leading-relaxed font-light ${
                card.bg === "bg-black" ? "text-white/80" : "text-black/90"
              }`}
            >
              {card.description}
            </p>
          </div>
        </div>

        {/* Curve accent rings */}
        {["01", "03", "06"].includes(card.id) &&
          [1, 2, 3].map((ring) => {
            const radius = Rm + ring * 22;
            const size = radius * 2;
            const offset = radius - Rf;

            return (
              <div
                key={ring}
                className={`absolute rounded-full border-[1px] ${
                  card.bg === "bg-black"
                    ? "border-white/30"
                    : "border-black/45"
                }`}
                style={{
                  width: size,
                  height: size,
                  bottom: -offset,
                  ...(isLeft ? { left: -offset } : { right: -offset }),
                }}
              />
            );
          })}
      </div>
    </motion.div>
  );
}



export default function Work() {
  // How many scroll px to dedicate per card reveal
  const STEP = 300;
  const TOTAL_CARDS = cards.length;

  const containerRef = useRef(null);
  const [revealedCount, setRevealedCount] = useState(0);

  // We need the section to be sticky while cards reveal, then release.
  // Total scroll budget: STEP * TOTAL_CARDS px of "pinned" scrolling.
  const scrollHeight = `calc(100vh + ${STEP * TOTAL_CARDS}px)`;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      // rect.top goes negative as we scroll past the container's natural top.
      // When rect.top === 0: we're exactly at the section's top.
      // We start revealing cards as soon as the section sticks (rect.top <= 0).
      const scrolledPast = -rect.top; // positive when scrolled into the sticky zone

      if (scrolledPast < 0) {
        setRevealedCount(0);
        return;
      }

      // Each STEP px reveals one more card
      const count = Math.min(
        TOTAL_CARDS,
        Math.floor(scrolledPast / STEP) + 1
      );
      setRevealedCount(count);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Outer container: tall enough to absorb the sticky scroll budget
    <div
      ref={containerRef}
      style={{ height: scrollHeight }}
      className="relative bg-white"
    >
      {/* Sticky inner panel */}
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <div className="max-w-[1400px] mx-auto px-8 w-full">
          {/* Heading */}
          <div className="mb-20 text-center">
            <motion.p
              className="text-[#F0C020] uppercase tracking-[4px] text-sm font-semibold"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Process
            </motion.p>
            <motion.h2
              className="text-black text-6xl font-bold mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              How I <span className="text-[#F0C020]">Work</span> ?
            </motion.h2>
          </div>

          {/* Cards row */}
          <div className="flex gap-8 items-end justify-center flex-wrap xl:flex-nowrap">
            {cards.map((card, index) => (
              <ProcessCard
                key={card.id}
                card={card}
                isRevealed={index < revealedCount}
              />
            ))}
          </div>


        </div>
      </div>
    </div>
  );
}