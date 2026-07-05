import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Campus Event Hub",
      description: "A microservices-based campus event platform featuring Kafka event streaming, NGINX gateway routing, Prometheus/Grafana monitoring, and Kubernetes canary deployments.",
      tech: ["FastAPI", "PostgreSQL", "Kafka", "Prometheus", "Grafana", "NGINX", "Docker", "Kubernetes"],
      github: "https://github.com/arjunkr303/campus-event-hub",
      live: undefined,
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Advanced RAG Chatbot System",
      description: "An intelligent RAG chatbot powered by Llama 3.2 with multi-agent orchestration (Source Locator + Detail Extractor), hierarchical RBAC with admin/parent/child roles, real-time streaming via WebSockets, and token quota management with built-in analytics.",
      tech: ["Python", "FastAPI", "LangChain", "Ollama", "ChromaDB", "MySQL", "JWT"],
      github: "https://github.com/arjunkr303/rag-chatbot",
      live: undefined,
      gradient: "from-indigo-500/20 to-violet-500/20",
    },
    {
      title: "SQL Repair Environment",
      description: "AI agents learn to diagnose and fix broken SQL through multi-turn interaction. Features diagnostic mode, execution diffs, progress rewards, and anti-hack grading.",
      tech: ["Python", "FastAPI", "Pydantic", "OpenEnv", "SQL", "Docker"],
      github: "https://github.com/arjunkr303/openenv-project",
      live: "https://arjunkr303-sql-repair-env.hf.space/",
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "Inverse Cooking: Recipe Generation",
      description: "An image-to-text model that looks at a food image and generates step-by-step cooking instructions. Uses a pre-trained ResNet18 encoder with a Transformer decoder trained on 13K+ recipes.",
      tech: ["Python", "PyTorch", "CNN", "ResNet18", "Transformer", "NLP"],
      github: "https://github.com/arjunkr303/inverse-cooking",
      live: undefined,
      gradient: "from-amber-500/20 to-orange-500/20",
    },
  ];

  return (
    <section className="py-24 bg-slate-900" id="projects">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            A selection of projects showcasing my expertise in AI & LLMOps development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="secondary"
                          className="bg-slate-700/50 text-slate-200 border border-slate-600/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      {project.live && (
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white border-0"
                          onClick={() => window.open(project.live, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Check Out
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}