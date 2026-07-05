import { motion } from "motion/react";
import { Brain, Files, Code, Rocket } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Brain,
      title: "AI Agents",
      description: "Building multi-agent architectures and LangGraph workflows for autonomous decision-making",
    },
    {
      icon: Files,
      title: "LLM Systems",
      description: "Integrating Gemini, Llama 3, and Mistral with advanced RAG pipelines and semantic search",
    },
    {
      icon: Code,
      title: "ML Engineering",
      description: "Developing predictive models using TensorFlow, PyTorch, and Scikit-Learn for real-world impact",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Bridging raw data to autonomous intelligent solutions through open-source innovation",
    },
  ];

  return (
    <section className="py-24 bg-slate-900" id="about">
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
              About Me
            </span>
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            I'm a passionate AI & LLMOps Engineer dedicated to building intelligent systems. 
            From autonomous agents to scalable RAG pipelines, I focus on bridging the gap 
            between data and intelligent action.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}