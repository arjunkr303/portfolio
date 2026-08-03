import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { IconCloudDemo } from "@/app/components/IconCloud";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-slate-50 dark:bg-[#12161f] text-slate-900 dark:text-white pt-24 pb-16 overflow-hidden transition-colors duration-300">
      {/* Spot background design */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-25 dark:opacity-20"></div>
      </div>


      <div className="container mx-auto px-6 max-w-7xl z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[70vh]">
          
          {/* Left Column: Headline */}
          <div className="lg:col-span-6 space-y-8 relative">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-700 dark:text-teal-300 text-xs font-['Halfre_Sans','Inter',sans-serif] font-semibold tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-teal-500 dark:bg-teal-400 animate-pulse"></span>
              <span>TEACHING MACHINES TO THINK, ACT, AND OPTIMIZE.</span>
            </motion.div>

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

        {/* Bottom Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center pt-10"
        >
          <button
            onClick={() => scrollToSection("#about")}
            className="w-12 h-12 bg-white dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 border border-slate-300 dark:border-slate-700/60 rounded-xl flex items-center justify-center transition-all duration-200 group cursor-pointer shadow-md"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
