import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Calculate scroll progress
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        windowHeight > 0 ? (window.scrollY / windowHeight) * 100 : 0;
      setScrollProgress(progress);

      // Detect which section is in view
      const sections = ["hero", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const navLinks = [
    { id: "hero", label: "Architecture" },
    { id: "skills", label: "Tech Stack" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Operations" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
    >
      {/* Floating Glass Capsule Wrapper */}
      <div
        className={`mx-auto flex justify-between items-center transition-all duration-500 rounded-3xl ${scrolled
            ? "glass-nav py-3.5 px-8 max-w-5xl shadow-2xl shadow-black/40 border border-white/5"
            : "bg-transparent py-4 px-4 max-w-7xl border-none"
          }`}
      >
        <a
          href="#hero"
          onClick={() => handleNavClick("hero")}
          id="nav-brand-logo"
          className="group flex items-center gap-3 select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-primary/20 group-hover:border-primary/50 flex items-center justify-center text-primary group-hover:text-white transition-all shadow-[0_0_12px_rgba(59,130,246,0.1)] font-mono text-sm font-bold">
            &lt;/&gt;
          </div>
          <span className="text-lg font-extrabold font-outfit text-white group-hover:text-primary transition-colors tracking-tight select-none">
            Syed Unas
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[12px] font-bold uppercase tracking-widest leading-none">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleNavClick(link.id)}
              id={`nav-link-${link.id}`}
              className={`transition-all duration-300 ${activeSection === link.id
                  ? "text-[#3b82f6] font-black"
                  : "text-slate-400 hover:text-white"
                }`}
              animate={{
                color: activeSection === link.id ? "#3b82f6" : "#94a3b8",
              }}
              transition={{ duration: 0.2 }}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="https://drive.google.com/file/d/1x5c6jODLmzYdqkSqke9oXYEmdS0gI7zM/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-action-resume"
            className="px-5 py-3 border border-primary/20 hover:border-primary/60 bg-[#3b82f6]/5 hover:bg-[#3b82f6]/10 text-white rounded-xl hover:shadow-[0_0_12px_rgba(59,130,246,0.15)] transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Resume</span>
          </motion.a>
          <motion.a
            href="tel:+1-608-715-7408"
            id="nav-action-phone"
            className="px-4 py-3 border border-slate-400/20 hover:border-primary/60 bg-slate-400/5 hover:bg-primary/10 text-slate-300 hover:text-primary rounded-xl hover:shadow-[0_0_12px_rgba(59,130,246,0.15)] transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={14} />
            <span>+1-608-715-7408</span>
          </motion.a>
          <motion.a
            href="#contact"
            onClick={() => handleNavClick("contact")}
            id="nav-action-contact"
            className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all text-xs font-bold uppercase tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Deploy Node
          </motion.a>
        </div>
      </div>

      {/* Futuristic Scroll Progress bar integrated into bottom of capsule */}
      <div className="max-w-5xl mx-auto px-8 relative">
        <motion.div
          className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-primary via-blue-400 to-cyan-400 shadow-[0_0_8px_#3b82f6]"
          style={{
            width: `calc(${scrollProgress}% - 64px)`,
            transformOrigin: "left"
          }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </motion.nav>
  );
}
