import { motion } from "motion/react";
import { ExternalLink, Github, BookOpen } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

export function Resources() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#12161f] text-slate-900 dark:text-white relative overflow-hidden border-t border-slate-200 dark:border-slate-800/60 transition-colors duration-300" id="resources">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 dark:opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl z-10 relative space-y-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h2 
            className="text-5xl sm:text-6xl font-black uppercase tracking-tight" 
            style={{ fontFamily: "'Outfit', 'Space Grotesk', sans-serif" }}
          >
            <span className="text-slate-900 dark:text-white font-black">FEATURED </span>
            <span className="text-[#00C9A7] font-black">RESOURCES</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl font-normal font-['Halfre_Sans','Inter',sans-serif]">
            Interactive guides, technical documentation, and production engineering playbooks.
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="group relative bg-white dark:bg-[#151a24] hover:bg-slate-50 dark:hover:bg-[#18202d] border border-slate-200 dark:border-slate-800 hover:border-[#00C9A7]/50 dark:hover:border-[#00C9A7]/40 rounded-2xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl dark:shadow-xl flex flex-col justify-between"
          >
            <div className="p-8 space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-['Halfre_Sans','Inter',sans-serif] font-semibold px-3 py-1 rounded-full border bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30 flex items-center gap-1.5">
                  <BookOpen className="w-3 h-3" /> Interactive Playbook
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#00C9A7] transition-colors leading-snug">
                CI/CD Production Deployment Guide
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-['Halfre_Sans','Inter',sans-serif]">
                An interactive step-by-step guide for mastering CI/CD. Covers GitHub Actions, Vercel, Render, Playwright E2E testing, Vitest/Pytest unit testing, ESLint + Prettier, Dependabot, and BetterStack monitoring.
              </p>

              <div className="flex flex-wrap gap-2 pt-2 font-['Halfre_Sans','Inter',sans-serif]">
                {["GitHub Actions", "Vercel", "Render", "Playwright", "Vitest", "ESLint", "Dependabot"].map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-slate-100 dark:bg-[#1a202c] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 px-2.5 py-0.5 text-xs font-['Halfre_Sans','Inter',sans-serif] font-semibold"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="p-8 pt-0 relative z-10 flex items-center gap-3 font-['Halfre_Sans','Inter',sans-serif]">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 bg-slate-100 dark:bg-[#161c28] hover:bg-slate-200 dark:hover:bg-[#1f2838] border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white font-['Halfre_Sans','Inter',sans-serif] font-semibold cursor-pointer"
                onClick={() => window.open("https://github.com/arjunkr303/cicd-guide", "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                Code Repository
              </Button>
              <Button
                size="sm"
                className="flex-1 bg-[#00C9A7] hover:bg-[#00a3a3] text-slate-950 font-bold border-0 font-['Halfre_Sans','Inter',sans-serif] cursor-pointer"
                onClick={() => window.open("https://cicd-guide.vercel.app/", "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Open Interactive App
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
