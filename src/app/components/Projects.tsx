import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

export function Projects() {
  const categories = ["AI & LLMs", "Multi-Agent", "MLOps & Infra", "Deep Learning"];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const projects = [
    {
      title: "Advanced RAG Chatbot System",
      category: "AI & LLMs",
      description: "Most RAG chatbots hallucinate when they lack relevant context and have no access control, making them unusable once real documents and multiple users are involved. I built a RAG system that treats trust and access control as core design constraints.",
      tech: ["Python", "FastAPI", "LangChain", "Ollama", "ChromaDB", "MySQL", "JWT"],
      github: "https://github.com/arjunkr303/rag-chatbot",
      live: undefined,
    },
    {
      title: "Multi-LLM MCP Gateway",
      category: "AI & LLMs",
      description: "Developers and coding agents are typically locked into a single model ecosystem. Multi-LLM MCP provides a unified Model Context Protocol gateway enabling IDE agents to dynamically delegate tasks across 5 providers—NVIDIA NIM, Groq, OpenRouter, DeepSeek, and local Ollama models—with connection pooling and fine-grained inference controls.",
      tech: ["Python", "MCP Protocol", "FastAPI", "Ollama", "Groq", "OpenRouter", "DeepSeek"],
      github: "https://github.com/arjunkr303/multi-llm-mcp",
      live: undefined,
    },
    {
      title: "JobPilot - Multi-Agent Job Automation",
      category: "Multi-Agent",
      description: "Manually job hunting across scattered portals, matching resumes to JDs, and re-filling the same application forms doesn't scale. JobPilot automates this end-to-end with five coordinated AI agents: one scrapes job boards and company career pages, one scores resume-JD fit via LLM-based evaluation, and others handle portal login, Playwright-driven application form-filling, and recruiter outreach, all gated by a human review step before submission.",
      tech: ["Python", "Playwright", "JobSpy", "LangChain", "FastAPI", "Docker"],
      github: "https://github.com/arjunkr303/JobPilot",
      live: undefined,
    },
    {
      title: "Campus Event Hub",
      category: "MLOps & Infra",
      description: "Campus Event Hub tackles a systems design problem: how do you build a multi-domain workflow: users, events, registrations, notifications, without one tightly-coupled codebase where a spike in one area risks the whole system? This project decomposes that workflow into 5 independent microservices, each with its own container, port, and config, communicating asynchronously via Apache Kafka so services like Notification aren't directly coupled to the ones that trigger them.",
      tech: ["FastAPI", "PostgreSQL", "Kafka", "Prometheus", "Grafana", "NGINX", "Docker", "Kubernetes"],
      github: "https://github.com/arjunkr303/campus-event-hub",
      live: undefined,
    },
    {
      title: "Inverse Cooking: Recipe Generation",
      category: "Deep Learning",
      description: "Restaurant food is a black box to customers, they see a dish, love it, but have no way to recreate it or order it customized. Inverse Cooking closes that loop: photograph food → get the actual chef's recipe (not a generic web guess) → optionally customize it → order it with the twist applied.",
      tech: ["FastAPI", "REST APIs", "MCP", "Multimodal LLMs", "Prompt Engineering"],
      github: "https://github.com/arjunkr303/inverse-cooking",
      live: undefined,
    },
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#12161f] text-slate-900 dark:text-white relative overflow-hidden border-t border-slate-200 dark:border-slate-800/60 transition-colors duration-300" id="projects">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 dark:opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl z-10 relative space-y-8 sm:space-y-12">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-6"
        >
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight" 
            style={{ fontFamily: "'Outfit', 'Space Grotesk', sans-serif" }}
          >
            <span className="text-slate-900 dark:text-white font-black">MY </span>
            <span className="text-[#00C9A7] font-black">WORKS</span>
          </h2>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 sm:pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold font-['Halfre_Sans','Inter',sans-serif] transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#00C9A7] text-slate-950 shadow-lg shadow-teal-500/20"
                    : "bg-white dark:bg-[#161c28] hover:bg-slate-100 dark:hover:bg-[#1f2838] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white dark:bg-[#151a24] hover:bg-slate-50 dark:hover:bg-[#18202d] border border-slate-200 dark:border-slate-800 hover:border-[#00C9A7]/50 dark:hover:border-[#00C9A7]/40 rounded-2xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl dark:shadow-xl flex flex-col justify-between"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00C9A7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                <div className="p-6 sm:p-8 space-y-4 sm:space-y-5 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#00C9A7] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-normal font-['Halfre_Sans','Inter',sans-serif]">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="bg-slate-100 dark:bg-[#1a202c] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-['Halfre_Sans','Inter',sans-serif] font-semibold"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons Footer */}
                <div className="p-6 sm:p-8 pt-0 relative z-10 flex flex-col sm:flex-row items-center gap-3.5 font-['Halfre_Sans','Inter',sans-serif]">
                  <Button
                    variant="outline"
                    className="w-full sm:flex-1 h-12 sm:h-13 py-3.5 bg-slate-100 dark:bg-[#161c28] hover:bg-slate-200 dark:hover:bg-[#1f2838] border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white font-['Halfre_Sans','Inter',sans-serif] font-bold text-sm sm:text-base rounded-full cursor-pointer shadow-sm transition-all flex items-center justify-center gap-2.5"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </Button>
                  
                  {project.live && (
                    <Button
                      className="w-full sm:flex-1 h-12 sm:h-13 py-3.5 bg-[#00C9A7] hover:bg-[#00a3a3] text-slate-950 font-bold text-sm sm:text-base font-['Halfre_Sans','Inter',sans-serif] rounded-full cursor-pointer shadow-md transition-all flex items-center justify-center gap-2.5"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Space</span>
                    </Button>
                  )}
                </div>


              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
