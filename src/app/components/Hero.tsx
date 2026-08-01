import { motion } from "motion/react";
import { ArrowDown, Code2, Cpu, ExternalLink, Activity, Database, GitBranch, Layers, Server, ShieldCheck, Terminal, Zap } from "lucide-react";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-[#12161f] text-white pt-24 pb-16 overflow-hidden">
      {/* Structural layout grid background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
        {/* Subtle horizontal grid lines */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-slate-800/40" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-800/40" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[70vh]">
          
          {/* Left Column: Headline & Action CTAs */}
          <div className="lg:col-span-6 space-y-8 relative">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-['Halfre_Sans','Inter',sans-serif] font-medium tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              <span>TEACHING MACHINES TO THINK, ACT, AND OPTIMIZE.</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-3"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none uppercase" style={{ fontFamily: "'Outfit', 'Space Grotesk', sans-serif" }}>
                <span className="block text-white font-extrabold">AI & LLM</span>
                <span className="block text-[#00C9A7] font-extrabold mt-1.5">ENGINEER</span>
              </h1>
            </motion.div>

          </div>

          {/* Right Column: High-Tech Enterprise AI Pipeline Architecture Card tailored to Arjun's profile */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative w-full max-w-xl mx-auto"
            >
              {/* Glow background accent */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 via-cyan-500/10 to-emerald-500/20 rounded-2xl blur-xl opacity-70"></div>

              {/* Main Architecture Window */}
              <div className="relative bg-[#0f131c] border border-slate-800/80 rounded-xl shadow-2xl overflow-hidden font-['Halfre_Sans','Inter',sans-serif]">
                
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#161b26] border-b border-slate-800/80 text-xs font-['Halfre_Sans','Inter',sans-serif]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="text-slate-300 text-xs font-['Halfre_Sans','Inter',sans-serif] ml-2 flex items-center gap-1.5 font-medium">
                      <Terminal className="w-3.5 h-3.5 text-teal-400" />
                      rag_pipeline.py
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-[11px] font-['Halfre_Sans','Inter',sans-serif] font-medium">
                    <span className="inline-block w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                    <span>LIVE PIPELINE</span>
                  </div>
                </div>

                {/* Pipeline Flow Visualization Body matching Arjun's profile */}
                <div className="p-5 space-y-4 text-xs font-['Halfre_Sans','Inter',sans-serif]">
                  
                  {/* Step 1: Vector Search & RAG Context (ChromaDB) */}
                  <div className="bg-[#141924] border border-slate-800 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20">
                        <Database className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-slate-200 font-semibold flex items-center gap-2 font-['Halfre_Sans','Inter',sans-serif]">
                          <span>Vector Search & RAG Context</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-teal-300 font-['Halfre_Sans','Inter',sans-serif]">ChromaDB</span>
                        </div>
                        <div className="text-slate-400 text-[11px] font-['Halfre_Sans','Inter',sans-serif]">Source Locator • Cosine Similarity &gt; 0.89</div>
                      </div>
                    </div>
                    <div className="text-right font-['Halfre_Sans','Inter',sans-serif] text-[11px] text-teal-400 font-medium">12ms</div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-2 text-slate-600">
                    <GitBranch className="w-4 h-4 rotate-180 text-teal-500/50" />
                  </div>

                  {/* Step 2: LLM Engine Inference (Llama 3.2 / Ollama) */}
                  <div className="bg-[#141924] border border-teal-500/30 rounded-lg p-3 flex items-center justify-between relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-400"></div>
                    <div className="flex items-center gap-3 pl-1">
                      <div className="p-2 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-slate-200 font-semibold flex items-center gap-2 font-['Halfre_Sans','Inter',sans-serif]">
                          <span>FastAPI LLM Streaming Engine</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 font-['Halfre_Sans','Inter',sans-serif]">Llama 3.2</span>
                        </div>
                        <div className="text-slate-400 text-[11px] font-['Halfre_Sans','Inter',sans-serif]">Ollama Local Inference • WebSockets & RBAC</div>
                      </div>
                    </div>
                    <div className="text-right font-['Halfre_Sans','Inter',sans-serif] text-[11px] text-cyan-400 font-medium">142 t/s</div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-2 text-slate-600">
                    <Layers className="w-4 h-4 text-emerald-500/50" />
                  </div>

                  {/* Step 3: Multi-Agent Evaluator & LangGraph Orchestrator */}
                  <div className="bg-[#141924] border border-slate-800 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-slate-200 font-semibold flex items-center gap-2 font-['Halfre_Sans','Inter',sans-serif]">
                          <span>LangGraph Multi-Agent Orchestrator</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-emerald-300 font-['Halfre_Sans','Inter',sans-serif]">Verified</span>
                        </div>
                        <div className="text-slate-400 text-[11px] font-['Halfre_Sans','Inter',sans-serif]">Diagnostic Repair Agents & Anti-Hack Grading</div>
                      </div>
                    </div>
                    <div className="text-right font-['Halfre_Sans','Inter',sans-serif] text-[11px] text-emerald-400 font-medium">Passed</div>
                  </div>

                  {/* Code snippet footer with Arjun's real code syntax */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 bg-[#0c0f17] rounded-md p-3 text-[11px] text-slate-300 space-y-1 font-['Halfre_Sans','Inter',sans-serif]">
                    <div className="text-slate-500"># LangGraph Multi-Agent Pipeline</div>
                    <div><span className="text-purple-400">@agent.task</span>(name=<span className="text-emerald-300">"rag_chatbot_agent"</span>)</div>
                    <div><span className="text-blue-400">async def</span> <span className="text-amber-300">run_pipeline</span>(query: <span className="text-teal-300">str</span>):</div>
                    <div className="pl-4 text-slate-400">docs = <span className="text-blue-400">await</span> chroma_db.<span className="text-amber-300">similarity_search</span>(query, k=<span className="text-emerald-300">5</span>)</div>
                    <div className="pl-4 text-slate-400">agent_graph = <span className="text-amber-300">LangGraph</span>(llm=<span className="text-amber-300">Ollama</span>(<span className="text-emerald-300">"llama3.2"</span>))</div>
                    <div className="pl-4 text-slate-400"><span className="text-blue-400">return await</span> agent_graph.<span className="text-amber-300">arun</span>(query, context=docs)</div>
                  </div>

                </div>

                {/* Real-time system metrics status bar matching Arjun's infra (Prometheus & Docker/K8s) */}
                <div className="bg-[#141924] border-t border-slate-800/80 px-4 py-2.5 flex items-center justify-between text-[11px] text-slate-300 font-['Halfre_Sans','Inter',sans-serif] font-medium">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-teal-400 font-['Halfre_Sans','Inter',sans-serif] font-semibold">
                      <Zap className="w-3.5 h-3.5" /> Latency: 24ms
                    </span>
                    <span className="flex items-center gap-1 text-cyan-400 font-['Halfre_Sans','Inter',sans-serif] font-semibold">
                      <Activity className="w-3.5 h-3.5" /> Prometheus / Grafana
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-200 font-['Halfre_Sans','Inter',sans-serif] font-semibold">
                    <Server className="w-3.5 h-3.5 text-emerald-400" /> Infra: Docker & K8s
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom Square Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center pt-10"
        >
          <button
            onClick={() => scrollToSection("#about")}
            className="w-12 h-12 bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-teal-400 border border-slate-700/60 rounded-lg flex items-center justify-center transition-all duration-200 group cursor-pointer shadow-lg"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}


