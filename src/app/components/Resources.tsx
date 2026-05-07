import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

export function Resources() {
  return (
    <section className="py-24 bg-[#0c1222] border-y border-slate-800/30" id="resources">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Resources
            </span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Interactive guides I have built
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <div className="relative h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10 p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  CI/CD Guide
                </h3>

                <p className="text-slate-300 mb-4 leading-relaxed">
                  An interactive step-by-step guide for mastering CI/CD. Covers GitHub Actions, Vercel, Render, Playwright E2E testing, Vitest/Pytest unit testing, ESLint + Prettier, Dependabot, and BetterStack monitoring.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["GitHub Actions", "Vercel", "Render", "Playwright", "Vitest", "ESLint", "Dependabot"].map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-slate-700/50 text-slate-200 border border-slate-600/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10"
                    onClick={() => window.open("https://github.com/arjunkr303/cicd-guide", "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white border-0"
                    onClick={() => window.open("https://cicd-guide.vercel.app/", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Check Out
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
