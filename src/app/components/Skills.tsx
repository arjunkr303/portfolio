import { motion } from "motion/react";
import { Code2, Server, Terminal, Brain, Cpu, Database, Network } from "lucide-react";
import { PiShareNetworkDuotone, PiStackBold } from "react-icons/pi";
import { MdOutlineCloud } from "react-icons/md";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages & Core",
      icon: Code2,
      prefix: "</>",
      skills: [
        "Python",
        "TypeScript / JavaScript",
        "Node.js",
        "Express.js",
        "SQL",
        "Bash / Shell Scripting",
      ],
    },
    {
      title: "AI & LLM Stack",
      icon: PiStackBold,
      prefix: "🧠",
      skills: [
        "LangChain & LangGraph",
        "Llama 3.2 & Ollama",
        "OpenAI & Gemini APIs",
        "ChromaDB & RAG Systems",
        "Prompt Engineering",
        "Multi-Agent Workflows",
      ],
    },
    {
      title: "MLOps & Cloud",
      icon: MdOutlineCloud,
      prefix: "☁️",
      skills: [
        "FastAPI & RESTful APIs",
        "Docker & Kubernetes",
        "Kafka Event Streaming",
        "Prometheus & Grafana",
        "AWS & Cloud Hosting",
        "NGINX Gateway",
      ],
    },
    {
      title: "ML & Deep Learning",
      icon: PiShareNetworkDuotone,
      prefix: "⚡",
      skills: [
        "PyTorch & TensorFlow",
        "Transformers & CNNs",
        "HuggingFace Models",
        "Scikit-Learn & Keras",
        "Computer Vision & NLP",
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#12161f] text-white relative overflow-hidden border-t border-slate-800/60" id="skills">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl z-10 relative space-y-12">
        
        {/* Header Section styled like mockup: Technical (white) stack (cyan/teal) */}
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
            <span className="text-white">Technical </span>
            <span className="text-[#00C9A7]">stack</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl font-normal font-['Halfre_Sans','Inter',sans-serif]">
            Specialized toolkit for engineering intelligent multi-agent systems and scalable AI pipelines.
          </p>
        </motion.div>

        {/* 4-Column Category Cards Grid matching the mockup style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative bg-[#1c162b] hover:bg-[#231a38] border border-purple-900/40 hover:border-[#00C9A7]/50 rounded-2xl p-7 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Subtle card glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-teal-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              <div className="relative z-10 space-y-6">
                {/* Category Header with Icon & Prefix */}
                <div className="flex items-center gap-3 border-b border-purple-800/40 pb-4">
                  <div className="text-[#00C9A7] text-lg font-bold flex items-center gap-2 font-['Halfre_Sans','Inter',sans-serif]">
                    <cat.icon className="w-5 h-5 text-[#00C9A7]" />
                    <span className="text-white font-bold text-xl group-hover:text-[#00C9A7] transition-colors font-['Halfre_Sans','Inter',sans-serif]">
                      {cat.title}
                    </span>
                  </div>
                </div>

                {/* Vertical Skills Item List matching mockup */}
                <ul className="space-y-3 text-sm text-slate-300 font-['Halfre_Sans','Inter',sans-serif]">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-['Halfre_Sans','Inter',sans-serif]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00C9A7]/60 group-hover:bg-[#00C9A7] transition-colors"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Subtle Bar Accent */}
              <div className="mt-8 pt-4 border-t border-purple-900/30 text-[11px] font-['Halfre_Sans','Inter',sans-serif] font-medium text-purple-300/80 flex items-center justify-between">
                <span>{cat.skills.length} core skills</span>
                <span className="w-2 h-2 rounded-full bg-[#00C9A7] animate-pulse"></span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

