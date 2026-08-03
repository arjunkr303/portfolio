import { Instagram, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/___walkman__/" },
    { icon: Github, label: "GitHub", url: "https://github.com/arjunkr303" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/arjun-k-r-/" },
    { icon: Mail, label: "Email", url: "mailto:arjunsreechakram@gmail.com" },
  ];

  return (
    <footer className="bg-white dark:bg-[#12161f] text-slate-900 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/60 transition-colors duration-300">
      {/* Moving Contributor & Collaboration Marquee */}
      <div className="contact-marquee-section border-t border-b border-slate-200 dark:border-slate-800 bg-[#1a1a1a] dark:bg-[#0d111a]" aria-hidden="true">
        <div className="contact-marquee-track">
          <div className="contact-marquee-item">
            <span className="marquee-text text-white dark:text-slate-100 font-extrabold">collaborate</span>
            <span className="marquee-star text-[#00C9A7]">✦</span>
            <span className="marquee-text text-white dark:text-slate-100 font-extrabold">open source contributor</span>
            <span className="marquee-star text-[#00C9A7]">✦</span>
            <span className="marquee-text text-white dark:text-slate-100 font-extrabold">build together</span>
            <span className="marquee-star text-[#00C9A7]">✦</span>
          </div>
          <div className="contact-marquee-item">
            <span className="marquee-text text-white dark:text-slate-100 font-extrabold">collaborate</span>
            <span className="marquee-star text-[#00C9A7]">✦</span>
            <span className="marquee-text text-white dark:text-slate-100 font-extrabold">open source contributor</span>
            <span className="marquee-star text-[#00C9A7]">✦</span>
            <span className="marquee-text text-white dark:text-slate-100 font-extrabold">build together</span>
            <span className="marquee-star text-[#00C9A7]">✦</span>
          </div>
        </div>
      </div>

      <div className="py-8 sm:py-12 container mx-auto px-4 sm:px-6 max-w-7xl space-y-6 sm:space-y-8">
        {/* Social Icons row */}
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 dark:bg-[#141a26] border border-slate-300 dark:border-slate-800 hover:border-[#00C9A7] text-slate-800 dark:text-slate-300 hover:text-[#00C9A7] flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
              aria-label={social.label}
            >
              <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          ))}
        </div>

        {/* Footer Bottom Row with responsive left offset for fixed ThemeToggle */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs font-['Halfre_Sans','Inter',sans-serif] pl-16 sm:pl-24 pr-2">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-[#00C9A7] animate-pulse flex-shrink-0"></span>
            <span>Open for collaborations & open-source contributions</span>
          </div>
          <div className="text-center sm:text-right text-slate-600 dark:text-slate-400 font-medium">
            © {new Date().getFullYear()} Arjun K R. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}