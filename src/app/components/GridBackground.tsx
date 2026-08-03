export function GridBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Soft Ambient Spotlight Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-teal-500/10 via-cyan-500/5 to-transparent rounded-full blur-[160px] opacity-40 dark:opacity-25" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/5 via-teal-400/5 to-transparent rounded-full blur-[140px] opacity-35 dark:opacity-20" />

      {/* Reduced Density & Ultra-Subtle Dot Spot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:36px_36px] opacity-15 dark:opacity-15" />
    </div>
  );
}
