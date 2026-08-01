import { Instagram, Github, Linkedin, Mail, Home, User, PhoneCall } from "lucide-react";

export function Footer() {
  const navLinks = [
    { label: "Home", href: "#", icon: Home },
    { label: "About me", href: "#about", icon: User },
    { label: "Contact", href: "#contact", icon: PhoneCall },
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/___walkman__/" },
    { icon: Github, label: "GitHub", url: "https://github.com/arjunkr303" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/arjun-k-r-/" },
    { icon: Mail, label: "Email", url: "mailto:arjunsreechakram@gmail.com" },
  ];

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#10131b] text-slate-400 border-t border-slate-800/80 py-12">
      <div className="container mx-auto px-6 max-w-7xl space-y-8">

        {/* Social Icons row matching mockup */}
        <div className="flex items-center justify-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#18202d] border border-slate-800 hover:border-[#00C9A7]/60 text-slate-300 hover:text-[#00C9A7] flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-md"
              aria-label={social.label}
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Footer Bottom Row */}
        <div className="pt-6 border-t border-slate-800/60 flex items-center justify-center text-xs text-slate-500 font-['Halfre_Sans','Inter',sans-serif]">
          <div className="text-center">
            © {new Date().getFullYear()} Arjun K R. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}