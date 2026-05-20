import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "hero", label: "Architecture" },
    { id: "skills", label: "Tech Stack" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
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
        className={`mx-auto flex justify-between items-center transition-all duration-500 rounded-3xl gap-4 sm:gap-6 ${
          scrolled
            ? "glass-nav py-3.5 px-4 sm:px-6 lg:px-8 max-w-6xl shadow-2xl shadow-black/40 border border-white/5"
            : "bg-transparent py-4 px-4 max-w-7xl border-none"
        }`}
      >
        {/* Logo - Always Visible */}
        <a
          href="#hero"
          onClick={() => handleNavClick("hero")}
          id="nav-brand-logo"
          className="group flex items-center gap-2 sm:gap-3 select-none flex-shrink-0"
        >
          <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 border border-primary/20 group-hover:border-primary/50 flex items-center justify-center text-primary group-hover:text-white transition-all shadow-[0_0_12px_rgba(59,130,246,0.1)] font-mono text-xs sm:text-sm font-bold flex-shrink-0">
            &lt;/&gt;
          </div>
          <span className="hidden sm:inline text-base sm:text-lg font-extrabold font-outfit text-white group-hover:text-primary transition-colors tracking-tight select-none whitespace-nowrap">
            Syed Unas
          </span>
        </a>

        {/* Desktop Nav Items - Hidden on smaller screens */}
        <div className="hidden xl:flex items-center gap-4 xl:gap-6 text-[11px] xl:text-[12px] font-bold uppercase tracking-widest leading-none flex-shrink-0">
          {navLinks.map((link) => (
            <motion.div key={link.id} className="relative group">
              <motion.a
                href={`#${link.id}`}
                onClick={() => handleNavClick(link.id)}
                id={`nav-link-${link.id}`}
                className="relative px-4 py-2.5 rounded-lg text-white font-black uppercase transition-all duration-300 block cursor-pointer"
                animate={{
                  color: activeSection === link.id ? "#ffffff" : "#94a3b8",
                }}
                whileHover={{
                  color: "#ffffff",
                  scale: 1.08,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 -z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  whileInView={activeSection === link.id ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Border glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg border border-primary/0"
                  whileHover={{ borderColor: "rgba(59,130,246,0.6)" }}
                  animate={activeSection === link.id ? { borderColor: "rgba(59,130,246,0.4)" } : { borderColor: "rgba(59,130,246,0)" }}
                  transition={{ duration: 0.3 }}
                />

                <span className="relative z-10">{link.label}</span>

                {/* Animated bottom indicator */}
                <motion.div
                  className="absolute bottom-0 left-2 right-2 h-1.5 bg-gradient-to-r from-primary via-blue-400 to-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={activeSection === link.id ? { scaleX: 1 } : { scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  style={{ originX: 0.5 }}
                />
              </motion.a>
            </motion.div>
          ))}
          {/* Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1x5c6jODLmzYdqkSqke9oXYEmdS0gI7zM/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-action-resume"
            className="px-3 sm:px-4 py-2.5 sm:py-3 border border-primary/20 hover:border-primary/60 bg-[#3b82f6]/5 hover:bg-[#3b82f6]/10 text-white rounded-lg sm:rounded-xl transition-all text-[10px] sm:text-xs font-bold uppercase tracking-wider items-center gap-1.5 cursor-pointer flex-shrink-0 flex"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 15px rgba(59,130,246,0.3)",
            }}
            whileTap={{ scale: 0.93 }}
          >
            <svg
              className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-primary flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="hidden lg:inline">Resume</span>
          </motion.a>

          {/* Phone Button */}
          <motion.a
            href="tel:+1-608-715-7408"
            id="nav-action-phone"
            className="px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-400/20 hover:border-primary/60 bg-slate-400/5 hover:bg-primary/10 text-slate-300 hover:text-primary rounded-lg sm:rounded-xl transition-all text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 cursor-pointer flex-shrink-0"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 15px rgba(59,130,246,0.2)",
            }}
            whileTap={{ scale: 0.93 }}
            title="+1-608-715-7408"
          >
            <Phone size={14} className="flex-shrink-0" />
            <span className="hidden lg:inline">+1-608-715-7408</span>
          </motion.a>

          {/* Contact Button */}
          <motion.a
            href="#contact"
            onClick={() => handleNavClick("contact")}
            id="nav-action-contact"
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg sm:rounded-xl transition-all text-[10px] sm:text-xs font-bold uppercase tracking-wider cursor-pointer flex-shrink-0 whitespace-nowrap"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 25px rgba(59,130,246,0.5)",
            }}
            whileTap={{ scale: 0.92 }}
          >
            Contact
          </motion.a>
        </div>

        {/* Mobile Menu Button - Visible on smaller screens */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-white/5 hover:border-primary/60 hover:bg-primary/10 text-slate-300 hover:text-primary transition-all cursor-pointer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
        >
          {mobileMenuOpen ? (
            <X size={20} className="text-primary" />
          ) : (
            <Menu size={20} />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 mt-2 mx-4 z-40 bg-[#090d16]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {/* Nav Links */}
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-3 rounded-lg font-bold uppercase text-sm tracking-wider transition-all ${
                    activeSection === link.id
                      ? "bg-primary/20 text-white border border-primary/40"
                      : "bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-primary hover:border-primary/40"
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.a>
              ))}

              <div className="h-px bg-white/5 my-2" />

              {/* Resume Button */}
              <motion.a
                href="https://drive.google.com/file/d/1x5c6jODLmzYdqkSqke9oXYEmdS0gI7zM/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-lg border border-primary/20 hover:border-primary/60 bg-[#3b82f6]/5 hover:bg-[#3b82f6]/10 text-white transition-all flex items-center gap-2 font-bold uppercase text-sm tracking-wider cursor-pointer"
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-4 h-4 text-primary flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Resume</span>
              </motion.a>

              {/* Phone Button */}
              <motion.a
                href="tel:+1-608-715-7408"
                className="px-4 py-3 rounded-lg border border-slate-400/20 hover:border-primary/60 bg-slate-400/5 hover:bg-primary/10 text-slate-300 hover:text-primary transition-all flex items-center gap-2 font-bold uppercase text-sm tracking-wider cursor-pointer"
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={16} className="flex-shrink-0" />
                <span>+1-608-715-7408</span>
              </motion.a>

              {/* Contact Button */}
              <motion.a
                href="#contact"
                onClick={() => handleNavClick("contact")}
                className="px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white transition-all font-bold uppercase text-sm tracking-wider cursor-pointer text-center"
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Futuristic Scroll Progress bar integrated into bottom of capsule */}
      <div className="max-w-5xl mx-auto px-8 relative">
        <motion.div
          className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-primary via-blue-400 to-cyan-400 shadow-[0_0_8px_#3b82f6]"
          style={{
            width: `calc(${scrollProgress}% - 64px)`,
            transformOrigin: "left",
          }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </motion.nav>
  );
}
