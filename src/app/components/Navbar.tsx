import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { HiChevronDoubleRight, HiChevronDoubleUp, HiChevronDoubleDown } from "react-icons/hi";

// Directional 60fps Rolling Text Odometer component
function RollingText({ text, direction = "down" }: { text: string; direction?: "down" | "up" }) {
  const isDown = direction === "down";
  return (
    <div className="relative overflow-hidden h-5 flex items-center pr-2 pl-0.5 min-w-max">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={text}
          initial={{ y: isDown ? "100%" : "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: isDown ? "-100%" : "100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-['Halfre_Sans','Inter',sans-serif] font-bold text-xs sm:text-sm tracking-tight text-slate-900 dark:text-white relative whitespace-nowrap block"
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

// Dynamic Left Icon Component with smooth morphing/flip transitions
function DynamicLeftIcon({ isExpanded, scrollDirection }: { isExpanded: boolean; scrollDirection: "down" | "up" }) {
  let IconComponent = HiChevronDoubleRight;
  let iconKey = "right";

  if (!isExpanded) {
    if (scrollDirection === "up") {
      IconComponent = HiChevronDoubleUp;
      iconKey = "up";
    } else {
      IconComponent = HiChevronDoubleDown;
      iconKey = "down";
    }
  }

  return (
    <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#FF5500] to-[#FF6600] text-white shadow-[0_4px_14px_rgba(255,85,0,0.4)] shrink-0 overflow-hidden ml-1">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={iconKey}
          initial={{ scale: 0.5, rotate: iconKey === "up" ? -90 : iconKey === "down" ? 90 : 0, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0.5, rotate: iconKey === "up" ? 90 : iconKey === "down" ? -90 : 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center"
        >
          <IconComponent className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");
  const lastScrollY = useRef(0);
  const touchTimerRef = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Resources", href: "#resources", id: "resources" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const currentItem = navItems.find((item) => item.id === activeSection) || navItems[0];

  // Auto compress when user scrolls down, expand when hovered or at top
  const isCompressed = isScrolled && !isHovered;

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Trigger automatic compression when scrolled past 100px
      setIsScrolled(currentY > 100);

      // Detect scroll direction with threshold to prevent flutter
      const diff = currentY - lastScrollY.current;
      if (Math.abs(diff) > 10) {
        if (diff > 0) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }
        lastScrollY.current = currentY;
      }

      const scrollPosition = currentY + 250;

      if (currentY < 100) {
        setActiveSection("home");
        return;
      }

      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const top = section.element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (touchTimerRef.current) clearTimeout(touchTimerRef.current);
    };
  }, []);

  const scrollToSection = (id: string, href: string) => {
    const currentIndex = navItems.findIndex((item) => item.id === activeSection);
    const targetIndex = navItems.findIndex((item) => item.id === id);
    if (targetIndex !== -1 && currentIndex !== -1) {
      setScrollDirection(targetIndex >= currentIndex ? "down" : "up");
    }

    setActiveSection(id);

    if (id === "home" || href === "#" || href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Auto collapse on touch mobile after selecting item
    setIsHovered(false);
  };

  const handleNavClick = () => {
    if (isCompressed) {
      setIsHovered(true);
      if (touchTimerRef.current) clearTimeout(touchTimerRef.current);
      touchTimerRef.current = setTimeout(() => {
        setIsHovered(false);
      }, 3500);
    }
  };

  return (
    <div className="fixed bottom-4 sm:bottom-7 pb-[env(safe-area-inset-bottom)] inset-x-0 z-[9999] flex justify-center pointer-events-none px-2 sm:px-4">
      <motion.nav
        layout
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          layout: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 },
          y: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleNavClick}
        className="pointer-events-auto bg-white/95 dark:bg-[#121620]/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.22),0_4px_20px_rgba(0,0,0,0.08)] rounded-full p-1 sm:p-2 max-w-[calc(100vw-1rem)] sm:max-w-max flex items-center gap-1 sm:gap-2 overflow-hidden"
      >
        {/* Animated Dynamic Left Icon */}
        <DynamicLeftIcon isExpanded={!isCompressed} scrollDirection={scrollDirection} />

        <AnimatePresence mode="popLayout" initial={false}>
          {isCompressed ? (
            /* AUTOMATIC COMPRESSED MODE: Shows Section Name Only with Rolling Text Animation */
            <motion.div
              key="compressed"
              layout="position"
              initial={{ opacity: 0, scale: 0.9, x: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -10 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center pr-2 sm:pr-2.5 py-0.5 cursor-pointer select-none"
            >
              <RollingText text={currentItem.label} direction={scrollDirection} />
            </motion.div>
          ) : (
            /* FULL NAVIGATION BAR MODE: Clean Text-Only Labels + Sliding Orange Pill */
            <motion.div
              key="expanded"
              layout="position"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-0.5 sm:gap-1.5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pr-1 py-0.5"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <motion.button
                    key={item.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToSection(item.id, item.href);
                    }}
                    whileHover={!isActive ? { y: -3, scale: 1.04 } : {}}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative flex items-center justify-center px-2 sm:px-4 py-1.5 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-semibold cursor-pointer select-none outline-none shrink-0 ${
                      isActive ? "text-white" : "text-slate-800 dark:text-slate-200"
                    }`}
                  >
                    {/* Sliding Orange Active Pill Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeBubbleIndicator"
                        className="absolute inset-0 bg-gradient-to-r from-[#FF5500] to-[#FF6600] rounded-full shadow-[0_6px_20px_rgba(255,85,0,0.4)]"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 28,
                        }}
                      />
                    )}

                    {/* Nav Item Text Label */}
                    <span className="relative z-10 font-['Halfre_Sans','Inter',sans-serif] tracking-tight">
                      {item.label}
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}