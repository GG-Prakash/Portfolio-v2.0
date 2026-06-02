import { motion } from "framer-motion";

export default function WorkflowAutomationCard() {
  return (
    <div className="w-full max-w-4xl rounded-3xl bg-white shadow-xl border border-gray-100 p-10 flex items-center justify-between overflow-hidden relative">
      
      {/* LEFT CONTENT */}
      <div className="w-1/2 pr-8 z-10">
        <h2 className="text-3xl font-semibold text-gray-900 leading-tight">
          Workflow Automation
        </h2>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Automate repetitive tasks and streamline processes to improve efficiency
          and save time.
        </p>
      </div>

      {/* RIGHT VISUAL AREA */}
      <div className="w-1/2 relative h-[320px]">
        
        {/* Soft background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl" />

        {/* SVG PIPELINE STRUCTURE */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 300"
          fill="none"
        >
          {/* Base white pipe */}
          <path
            d="M40 240 C120 180, 160 260, 220 200 S320 120, 360 80"
            stroke="#EAEAEA"
            strokeWidth="18"
            strokeLinecap="round"
          />

          {/* Highlight yellow flow path */}
          <path
            d="M40 240 C120 180, 160 260, 220 200 S320 120, 360 80"
            stroke="#F5C542"
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>

        {/* MOVING DATA BLOCKS */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-5 h-5 bg-yellow-400 rounded-md shadow-md"
            style={{
              offsetPath:
                "path('M40 240 C120 180, 160 260, 220 200 S320 120, 360 80')",
              offsetRotate: "0deg",
            }}
            animate={{
              offsetDistance: ["0%", "100%"],
              opacity: [0, 1, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.2,
            }}
          />
        ))}

        {/* Floating cubes (static depth objects) */}
        <motion.div
          className="absolute top-[40px] right-[60px] w-8 h-8 bg-yellow-100 border border-yellow-200 rounded-md shadow-sm"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <motion.div
          className="absolute top-[150px] right-[140px] w-6 h-6 bg-yellow-50 border border-yellow-200 rounded-md"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />

        <motion.div
          className="absolute bottom-[60px] right-[90px] w-7 h-7 bg-yellow-100 border border-yellow-200 rounded-md"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.2, repeat: Infinity }}
        />
      </div>

      {/* SOFT CARD GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-yellow-50 opacity-40 pointer-events-none" />
    </div>
  );
}