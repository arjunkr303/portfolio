import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Code2, Layers, Cpu, Server } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "AI & LLMs", "Multi-Agent", "MLOps & Infra", "Deep Learning"];

  const projects = [
    {
      title: "Advanced RAG Chatbot System",
      category: "AI & LLMs",
      description: "Most RAG chatbots hallucinate when they lack relevant context and have no access control, making them unusable once real documents and multiple users are involved. I built a RAG system that treats trust and access control as core design constraints.",
      tech: ["Python", "FastAPI", "LangChain", "Ollama", "ChromaDB", "MySQL", "JWT"],
      github: "https://github.com/arjunkr303/rag-chatbot",
      live: undefined,
      badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/30",
    },
    {
      title: "JobPilot - Multi-Agent Job Automation",
      category: "Multi-Agent",
      description: "Manually job hunting across scattered portals, matching resumes to JDs, and re-filling the same application forms doesn't scale. JobPilot automates this end-to-end with five coordinated AI agents: one scrapes job boards and company career pages, one scores resume-JD fit via LLM-based evaluation, and others handle portal login, Playwright-driven application form-filling, and recruiter outreach, all gated by a human review step before submission.",
      tech: ["Python", "Playwright", "JobSpy", "LangChain", "FastAPI", "Docker"],
      github: "https://github.com/arjunkr303/JobPilot",
      live: undefined,
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    },
    {
      title: "Campus Event Hub",
      category: "MLOps & Infra",
      description: "Campus Event Hub tackles a systems design problem: how do you build a multi-domain workflow: users, events, registrations, notifications, without one tightly-coupled codebase where a spike in one area risks the whole system? This project decomposes that workflow into 5 independent microservices, each with its own container, port, and config, communicating asynchronously via Apache Kafka so services like Notification aren't directly coupled to the ones that trigger them.",
      tech: ["FastAPI", "PostgreSQL", "Kafka", "Prometheus", "Grafana", "NGINX", "Docker", "Kubernetes"],
      github: "https://github.com/arjunkr303/campus-event-hub",
      live: undefined,
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    },
    {
      title: "Inverse Cooking: Recipe Generation",
      category: "Deep Learning",
      description: "Restaurant food is a black box to customers, they see a dish, love it, but have no way to recreate it or order it customized. Inverse Cooking closes that loop: photograph food → get the actual chef's recipe (not a generic web guess) → optionally customize it → order it with the twist applied.",
      tech: ["FastAPI", "REST APIs", "MCP", "Multimodal LLMs", "Prompt Engineering", ],
      github: "https://github.com/arjunkr303/inverse-cooking",
      live: undefined,
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    },
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-[#12161f] text-white relative overflow-hidden border-t border-slate-800/60" id="projects">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl z-10 relative space-y-12">
        
        {/* Header Section styled like mockup: My (white) works (cyan/teal) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 
            className="text-5xl sm:text-6xl font-black uppercase tracking-tight" 
            style={{ fontFamily: "'Outfit', 'Space Grotesk', sans-serif" }}
          >
            <span className="text-white">My </span>
            <span className="text-[#00C9A7]">works</span>
          </h2>

          {/* Category Filter Tabs matching mockup rounded pill style */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold font-['Halfre_Sans','Inter',sans-serif] transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#00C9A7] text-slate-950 shadow-lg shadow-teal-500/20"
                    : "bg-[#161c28] hover:bg-[#1f2838] text-slate-300 border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-[#151a24] hover:bg-[#18202d] border border-slate-800 hover:border-[#00C9A7]/40 rounded-xl overflow-hidden transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00C9A7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                <div className="p-8 space-y-5 relative z-10">
                  {/* Category Badge & Title */}
                  <div className="flex items-center justify-between gap-4">
                    <span className={`text-[11px] font-['Halfre_Sans','Inter',sans-serif] font-medium px-3 py-1 rounded-full border ${project.badgeColor}`}>
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-[#00C9A7] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed font-normal font-['Halfre_Sans','Inter',sans-serif]">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="bg-[#1a202c] text-slate-300 border border-slate-700/80 px-2.5 py-0.5 text-xs font-['Halfre_Sans','Inter',sans-serif] font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons Footer */}
                <div className="p-8 pt-0 relative z-10 flex items-center gap-3 font-['Halfre_Sans','Inter',sans-serif]">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-[#161c28] hover:bg-[#1f2838] border-slate-700 text-slate-200 hover:text-white font-['Halfre_Sans','Inter',sans-serif] font-medium cursor-pointer"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  
                  {project.live && (
                    <Button
                      size="sm"
                      className="flex-1 bg-[#00C9A7] hover:bg-[#00a3a3] text-slate-950 font-bold font-['Halfre_Sans','Inter',sans-serif] cursor-pointer"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Space
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
