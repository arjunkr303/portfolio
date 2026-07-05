import { motion } from "motion/react";
import { Badge } from "@/app/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      category: "AI & LLM Stack",
      color: "from-indigo-500 to-violet-500",
      skills: ["LangChain", "LangGraph", "Gemini", "Llama 3", "Groq", "Prompt Engineering", "RAG Pipelines"],
    },
    {
      category: "ML & Deep Learning",
      color: "from-emerald-500 to-teal-500",
      skills: ["Python", "TensorFlow", "PyTorch", "Keras", "Scikit-Learn", "HuggingFace", "NLP", "Computer Vision"],
    },
    {
      category: "Data & Vector DBs",
      color: "from-amber-500 to-orange-500",
      skills: ["ChromaDB", "Pandas", "NumPy", "Matplotlib", "MySQL", "PostgreSQL", "MongoDB", "Supabase"],
    },
    {
      category: "LMOps & Infra",
      color: "from-rose-500 to-pink-500",
      skills: ["Docker", "Kubernetes", "Helm", "CI/CD", "AWS", "FastAPI", "Kafka", "NGINX", "Prometheus", "Grafana", "Model Serving"],
    },
  ];

  return (
    <section className="py-24 bg-slate-950" id="skills">
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
              Technical Skills
            </span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Specialized toolkit for building intelligent, data-driven applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-indigo-500/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full`}></div>
                    <h3 className="text-2xl font-semibold text-white">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge 
                          variant="secondary"
                          className="bg-slate-700/50 text-slate-200 hover:bg-slate-600/50 border border-slate-600/50 hover:border-indigo-500/50 transition-all px-3 py-1 text-sm"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
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