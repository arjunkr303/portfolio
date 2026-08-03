import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Resources", href: "#resources" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 inset-x-0 z-50 pointer-events-none flex justify-center pt-0">
      <motion.nav
        layout
        transition={{
          type: "spring",
          stiffness: 240,
          damping: 26,
          mass: 0.8,
        }}
        className={`pointer-events-auto w-full transition-colors duration-300 ${
          isScrolled
            ? "mt-2 sm:mt-3 max-w-5xl mx-3 sm:mx-auto rounded-full bg-white/85 dark:bg-[#12161f]/85 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-2xl px-4 sm:px-6"
            : "mt-0 max-w-full rounded-none bg-white/90 dark:bg-[#12161f]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/60 px-4 sm:px-6"
        }`}
      >
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            layout
            className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-12 sm:h-14" : "h-16 sm:h-20"}`}
          >
            {/* Logo */}
            <motion.div
              layout
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className="text-slate-900 dark:text-white font-bold text-base sm:text-xl tracking-tight font-['Halfre_Sans','Inter',sans-serif]">
                Arjun K R
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-5 lg:gap-7 font-['Halfre_Sans','Inter',sans-serif]">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 text-xs sm:text-sm font-semibold transition-colors relative group py-1 font-['Halfre_Sans','Inter',sans-serif] cursor-pointer"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </motion.div>

          {/* Mobile Navigation Dropdown */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={`md:hidden py-4 border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#12161f] ${
                  isScrolled ? "rounded-b-3xl px-3" : ""
                }`}
              >
                <div className="flex flex-col gap-2.5 px-2 font-['Halfre_Sans','Inter',sans-serif]">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-left py-2 text-sm font-medium font-['Halfre_Sans','Inter',sans-serif] cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </div>
  );
}