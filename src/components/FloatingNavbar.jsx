import React, { useState, useRef, useEffect, useCallback } from 'react';
import './FloatingNavbar.css';

// Mini Arrow Up Right Icon for navigation links
const ArrowUpRightIcon = () => (
  <svg className="navbar-icon" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { id: 'sustainability', label: 'Sustainability', href: '#sustainability' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export function FloatingNavbar({ activeId = 'home', onItemSelect }) {
  const [currentActive, setCurrentActive] = useState(activeId);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);

  // DOM References
  const navbarRef = useRef(null);
  const menuRef = useRef(null);
  const indicatorRef = useRef(null);
  const itemRefs = useRef({});
  const clickTimerRef = useRef(null);
  const scrollTimerRef = useRef(null);

  /**
   * Calculates position and animates the single 52px orange circular indicator
   */
  const updateIndicatorPosition = useCallback((targetId, shouldEnlarge = false) => {
    const targetElement = itemRefs.current[targetId];
    const indicatorElement = indicatorRef.current;
    const navbarElement = navbarRef.current;

    if (!targetElement || !indicatorElement || !navbarElement) return;

    const navRect = navbarElement.getBoundingClientRect();
    const itemRect = targetElement.getBoundingClientRect();

    // Calculate center horizontal offset for 52px circle relative to item width
    const itemCenterX = (itemRect.left - navRect.left) + (itemRect.width / 2);
    const indicatorRadius = indicatorElement.offsetWidth / 2 || 26;
    const targetX = itemCenterX - indicatorRadius;

    // Apply scale(1.08) enlarge effect during click movement
    const scaleValue = shouldEnlarge ? 1.08 : 1.0;

    // Animate using transform: translateX()
    indicatorElement.style.transform = `translateX(${targetX}px) scale(${scaleValue})`;

    if (shouldEnlarge) {
      setIsEnlarged(true);
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);

      // Return to scale(1.0) after 500ms transition completes
      clickTimerRef.current = setTimeout(() => {
        setIsEnlarged(false);
        indicatorElement.style.transform = `translateX(${targetX}px) scale(1.0)`;
      }, 500);
    }
  }, []);

  // Update active item and trigger gliding animation
  const handleItemClick = (e, item) => {
    e.preventDefault();
    setCurrentActive(item.id);
    updateIndicatorPosition(item.id, true);

    if (onItemSelect) {
      onItemSelect(item.id);
    }

    const section = document.getElementById(item.id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sync state if activeId prop changes
  useEffect(() => {
    setCurrentActive(activeId);
    updateIndicatorPosition(activeId, false);
  }, [activeId, updateIndicatorPosition]);

  // Position indicator on mount and window resize via ResizeObserver
  useEffect(() => {
    updateIndicatorPosition(currentActive, false);

    const navbarElement = navbarRef.current;
    if (!navbarElement) return;

    const resizeObserver = new ResizeObserver(() => {
      updateIndicatorPosition(currentActive, false);
    });

    resizeObserver.observe(navbarElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, [currentActive, updateIndicatorPosition]);

  // Handle gentle 3px upward movement while scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);

      scrollTimerRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    };
  }, []);

  return (
    <div className="floating-navbar-wrapper">
      <nav
        ref={navbarRef}
        className={`floating-navbar ${isScrolling ? 'is-scrolling' : ''}`}
        aria-label="Floating Bottom Navigation"
      >
        {/* ONE Persistent Orange Circular Indicator (Never recreated) */}
        <div
          ref={indicatorRef}
          className={`active-indicator-circle ${isEnlarged ? 'is-enlarged' : ''}`}
          aria-hidden="true"
        />

        {/* Navigation Items List */}
        <ul ref={menuRef} className="navbar-menu">
          {NAV_ITEMS.map((item) => {
            const isActive = currentActive === item.id;

            return (
              <li
                key={item.id}
                ref={(el) => (itemRefs.current[item.id] = el)}
                className={`navbar-item ${isActive ? 'is-active' : ''}`}
              >
                <a
                  href={item.href}
                  className="navbar-link"
                  onClick={(e) => handleItemClick(e, item)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="navbar-content">
                    <span className="navbar-label">{item.label}</span>
                    <ArrowUpRightIcon />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default FloatingNavbar;
