import { motion } from "motion/react";
import { Brain, Cpu, FileText, Mouse, ChevronUp } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function Hero() {
  const techIcons = [
    { 
      Icon: ({ className }: { className?: string }) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className} aria-label="Python">
          <path d="M14.4574875 4.5579375 10.23595 0.3364c-0.1132 -0.11306875 -0.2666875 -0.176525 -0.42668125 -0.1764H2.57235c-0.6661625 -0.00003125 -1.20615625 0.53999375 -1.20615625 1.20615625v5.72923125c0 0.16653125 0.135 0.3015375 0.3015375 0.3015375h9.64923125c0.1665375 0 0.3015375 0.135 0.3015375 0.3015375v7.84c0 0.1665375 0.135 0.30154375 0.3015375 0.3015375h1.50769375c0.66611875 -0.00003125 1.20615625 -0.54003125 1.20615625 -1.20615V4.98461875c0.000125 -0.16 -0.06333125 -0.31348125 -0.1764 -0.42668125Zm-4.64821875 0.42668125V1.66769375l3.316925 3.316925ZM3.175425 9.20615625H1.96926875c-0.33308125 -0.00001875 -0.603075 0.26999375 -0.603075 0.603075v4.20118125c-0.00514375 0.32345 0.24081875 0.59575625 0.563125 0.62343125 0.34855 0.02314375 0.64379375 -0.25375625 0.64303125 -0.603075v-0.603075h0.55784375c1.1488625 0 2.121325 -0.8985875 2.15524375 -2.04669375 0.03615625 -1.19039375 -0.91906875 -2.174975 -2.1100125 -2.17484375Zm-0.0263875 3.01538125h-0.5766875v-1.80923125h0.603075c0.53585 -0.00250625 0.95641875 0.45871875 0.9046125 0.9920625 -0.05451875 0.47100625 -0.45689375 0.8241875 -0.931 0.81716875Zm6.86 -2.07156875 -1.40591875 2.2442v1.61625c0.00434375 0.32286875 -0.24140625 0.59428125 -0.563125 0.62191875 -0.34855 0.02314375 -0.6438 -0.25375625 -0.64303125 -0.603075v-1.63509375l-1.40290625 -2.2442c-0.18010625 -0.27896875 -0.10829375 -0.65033125 0.16283125 -0.84204375 0.28290625 -0.18914375 0.66618125 -0.10689375 0.84656875 0.181675l0.99658125 1.5943875 0.9965875 -1.5943875c0.1803875 -0.28856875 0.5636625 -0.37081875 0.84656875 -0.181675 0.271125 0.1917125 0.3429375 0.563075 0.16283125 0.84204375Z" strokeWidth="0.0625" />
        </svg>
      ), 
      color: "", 
      label: "Python", 
      delay: 0 
    },
    { Icon: Cpu, color: "text-amber-400", label: "LLMs", delay: 0.1 },
    { Icon: FileText, color: "text-emerald-500", label: "RAG", delay: 0.2 },
    { Icon: Brain, color: "text-indigo-400", label: "AI Agents", delay: 0.3 },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-indigo-500/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8">
          {/* MERN Stack Icons */}
          <motion.div 
            className="flex justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {techIcons.map(({ Icon, color, label, delay }) => (
              <motion.div
                key={label}
                className="relative group"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                <div className="relative">
                  <Icon className={`w-12 h-12 ${color}`} />
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-amber-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-amber-400 bg-clip-text text-transparent animate-gradient" style={{ fontFamily: "'Halfre Sans', sans-serif" }}>
                Arjun K R
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-2">
              AI & LLMOps Engineer | LLM & Agent Specialist
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Teaching Machines to Think, Act, and Optimize.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white border-0"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
          >
            <div className="flex flex-col items-center group cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="relative">
                <Mouse className="w-8 h-12 text-indigo-500/50" />
                <motion.div 
                  className="absolute top-2 left-1/2 -translate-x-1/2"
                  animate={{ 
                    y: [0, 16, 0],
                    opacity: [1, 0, 1] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <ChevronUp className="w-4 h-4 text-indigo-400" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}