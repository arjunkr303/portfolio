import { motion } from "motion/react";
import { IconCloudDemo } from "@/app/components/IconCloud";

export function Hero() {

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center bg-slate-50 dark:bg-[#12161f] text-slate-900 dark:text-white pt-24 pb-16 overflow-hidden transition-colors duration-300">
      {/* Spot background design */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-25 dark:opacity-20"></div>
      </div>


      <div className="container mx-auto px-6 max-w-7xl z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[70vh]">
          
          {/* Left Column: Headline */}
          <div className="lg:col-span-6 space-y-8 relative">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-3"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none uppercase" style={{ fontFamily: "'Outfit', 'Space Grotesk', sans-serif" }}>
                <span className="block text-slate-900 dark:text-white font-black">AI & LLM</span>
                <span className="block text-[#00C9A7] font-black mt-1.5">ENGINEER</span>
              </h1>
            </motion.div>
          </div>

          {/* Right Column: Magic UI 3D Interactive Icon Cloud Demo */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative flex items-center justify-center w-full min-h-[400px] sm:min-h-[460px]"
            >
              {/* Radial glow backdrop accent */}
              <div className="absolute w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] bg-gradient-to-r from-teal-500/20 via-cyan-500/15 to-emerald-500/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

              {/* 3D Sphere Interactive Icon Cloud */}
              <IconCloudDemo />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
