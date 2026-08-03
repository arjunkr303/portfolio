import { motion } from "motion/react";
import { Cpu, Database, Server } from "lucide-react";
import { LuBrainCog } from "react-icons/lu";

export function About() {
  const pillars = [
    {
      icon: LuBrainCog,
      title: "Multi-Agent Systems",
      subtitle: "LangGraph & Autonomous Workflows",
      description: "Building resilient multi-agent graphs with state memory, diagnostic repair loops, and tool execution.",
      badge: "LangGraph",
    },
    {
      icon: Cpu,
      title: "LLM Systems & RAG",
      subtitle: "Semantic Retrieval & Local LLMs",
      description: "Architecting high-accuracy RAG pipelines using Llama 3.2, Ollama, ChromaDB, and hybrid vector search.",
      badge: "Llama 3.2",
    },
    {
      icon: Database,
      title: "ML Engineering",
      subtitle: "PyTorch & Deep Learning",
      description: "Developing custom neural architectures, vision transformers, and image-to-text models with PyTorch.",
      badge: "PyTorch",
    },
    {
      icon: Server,
      title: "MLOps Infrastructure",
      subtitle: "Cloud & Microservices",
      description: "Deploying production APIs with FastAPI, Kafka event streams, Docker, Kubernetes, and Prometheus monitoring.",
      badge: "Kubernetes",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#12161f] text-slate-900 dark:text-white relative overflow-hidden border-t border-slate-200 dark:border-slate-800/60 transition-colors duration-300" id="about">
      {/* Structural layout grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 dark:opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Bio */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 
                className="text-5xl sm:text-6xl font-black uppercase tracking-tight" 
                style={{ fontFamily: "'Outfit', 'Space Grotesk', sans-serif" }}
              >
                <span className="text-slate-900 dark:text-white font-black">ABOUT </span>
                <span className="text-[#00C9A7] font-black">ME</span>
              </h2>

              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal pt-2 font-['Halfre_Sans','Inter',sans-serif]">
                I am an <strong className="text-slate-900 dark:text-white font-bold">AI & LLM Engineer</strong> focused on building production-ready intelligent systems. My expertise spans autonomous multi-agent orchestration with LangGraph, scalable RAG architectures, and containerized MLOps pipelines.
              </p>

              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-normal font-['Halfre_Sans','Inter',sans-serif]">
                I design and deploy robust, production-ready intelligent systems using cutting-edge AI and open-source technologies. My work bridges complex machine learning research into high-performance applications, focusing on scalability, reliability, and real-world impact.
              </p>
            </motion.div>

            {/* Quick Stats Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              <div className="bg-white dark:bg-[#161c28] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm dark:shadow-xl">
                <div className="text-3xl font-black text-[#00C9A7]">4+</div>
                <div className="text-xs text-slate-700 dark:text-slate-300 font-['Halfre_Sans','Inter',sans-serif] mt-1 font-semibold">Production AI Projects</div>
              </div>
              <div className="bg-white dark:bg-[#161c28] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm dark:shadow-xl">
                <div className="text-3xl font-black text-[#00C9A7]">100%</div>
                <div className="text-xs text-slate-700 dark:text-slate-300 font-['Halfre_Sans','Inter',sans-serif] mt-1 font-semibold">System Reliability Focus</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-Tech Engineering Pillars Showcase */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="group relative bg-white dark:bg-[#151a24] hover:bg-slate-50 dark:hover:bg-[#18202d] border border-slate-200 dark:border-slate-800 hover:border-[#00C9A7]/50 dark:hover:border-[#00C9A7]/40 rounded-2xl p-6 transition-all duration-300 shadow-md hover:shadow-xl dark:shadow-xl"
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00C9A7]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-[#00C9A7]/10 border border-[#00C9A7]/30 flex items-center justify-center text-[#00C9A7] group-hover:scale-110 transition-transform">
                        <pillar.icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-['Halfre_Sans','Inter',sans-serif] font-semibold px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {pillar.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#00C9A7] transition-colors">
                        {pillar.title}
                      </h3>
                      <div className="text-xs font-['Halfre_Sans','Inter',sans-serif] font-semibold text-[#009b81] dark:text-teal-400 mt-0.5">
                        {pillar.subtitle}
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed font-['Halfre_Sans','Inter',sans-serif]">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
