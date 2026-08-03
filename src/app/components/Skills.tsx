import { motion } from "motion/react";

export function Skills() {
  const row1Skills = [
    { name: "LangChain", highlight: true },
    { name: "LangGraph", highlight: false },
    { name: "Gemini", highlight: true },
    { name: "Llama 3", highlight: false },
    { name: "Groq", highlight: false },
    { name: "Prompt Engineering", highlight: true },
    { name: "RAG Pipelines", highlight: false },
    { name: "Python", highlight: true },
    { name: "HuggingFace", highlight: false },
    { name: "NLP", highlight: false },
    { name: "Computer Vision", highlight: false },
    { name: "ChromaDB", highlight: false },
  ];

  const row2Skills = [
    { name: "TensorFlow", highlight: false },
    { name: "PyTorch", highlight: true },
    { name: "Keras", highlight: false },
    { name: "Scikit-Learn", highlight: false },
    { name: "Pandas", highlight: false },
    { name: "NumPy", highlight: false },
    { name: "FastAPI", highlight: true },
    { name: "Docker", highlight: false },
    { name: "Kubernetes", highlight: false },
    { name: "Helm", highlight: false },
    { name: "AWS", highlight: true },
    { name: "CI/CD", highlight: false },
    { name: "Kafka", highlight: false },
    { name: "NGINX", highlight: false },
  ];

  const row3Skills = [
    { name: "MySQL", highlight: false },
    { name: "PostgreSQL", highlight: true },
    { name: "MongoDB", highlight: false },
    { name: "Supabase", highlight: false },
    { name: "Prometheus", highlight: true },
    { name: "Grafana", highlight: false },
    { name: "Matplotlib", highlight: false },
    { name: "Model Serving", highlight: true },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#12161f] text-slate-900 dark:text-white relative overflow-hidden border-t border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300" id="skills">
      <div className="container mx-auto px-6 max-w-7xl z-10 relative space-y-8">
        
        {/* Header Section */}
        <div className="flex items-center gap-6">
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight" 
            style={{ fontFamily: "'Outfit', 'Space Grotesk', sans-serif" }}
          >
            <span className="text-slate-900 dark:text-white font-black">TECHNICAL </span>
            <span className="text-[#00C9A7] font-black">SKILLS</span>
          </h2>
          <div className="hidden sm:block flex-1 h-[1px] bg-slate-300 dark:bg-slate-800/80"></div>
        </div>

        {/* Row 1 — LLM/AI stack (Forward Marquee) */}
        <div className="skills-marquee-wrap select-none">
          <div className="skills-marquee-track">
            <div className="flex shrink-0 gap-3 items-center pr-3">
              {row1Skills.map((item, i) => (
                <span key={i} className={`skill-chip ${item.highlight ? "highlight" : ""}`}>
                  {item.name}
                </span>
              ))}
            </div>
            <div className="flex shrink-0 gap-3 items-center pr-3" aria-hidden="true">
              {row1Skills.map((item, i) => (
                <span key={`dup1-${i}`} className={`skill-chip ${item.highlight ? "highlight" : ""}`}>
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 — ML/Infra stack (Reverse Marquee) */}
        <div className="skills-marquee-wrap select-none">
          <div className="skills-marquee-track reverse">
            <div className="flex shrink-0 gap-3 items-center pr-3">
              {row2Skills.map((item, i) => (
                <span key={i} className={`skill-chip ${item.highlight ? "highlight" : ""}`}>
                  {item.name}
                </span>
              ))}
            </div>
            <div className="flex shrink-0 gap-3 items-center pr-3" aria-hidden="true">
              {row2Skills.map((item, i) => (
                <span key={`dup2-${i}`} className={`skill-chip ${item.highlight ? "highlight" : ""}`}>
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3 — Databases & Observability (Forward Marquee) */}
        <div className="skills-marquee-wrap select-none">
          <div className="skills-marquee-track">
            <div className="flex shrink-0 gap-3 items-center pr-3">
              {row3Skills.map((item, i) => (
                <span key={i} className={`skill-chip ${item.highlight ? "highlight" : ""}`}>
                  {item.name}
                </span>
              ))}
            </div>
            <div className="flex shrink-0 gap-3 items-center pr-3" aria-hidden="true">
              {row3Skills.map((item, i) => (
                <span key={`dup3-${i}`} className={`skill-chip ${item.highlight ? "highlight" : ""}`}>
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
