import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        windowHeight > 0 ? (window.scrollY / windowHeight) * 100 : 0;
      setScrollProgress(progress);

      // Detect which section is in view
      const sections = ["hero", "skills", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

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
    { id: "experience", label: "Operations" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#hero"
          onClick={() => handleNavClick("hero")}
          className="group flex items-center gap-3"
        >
          <div className="w-11 h-11 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-all font-outfit">
            <span className="text-xl font-black text-primary">SU</span>
          </div>
          <span className="text-xl font-extrabold font-outfit text-slate-900 group-hover:text-primary transition-colors tracking-tight">
            Syed Unas
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10 text-[13px] font-bold uppercase tracking-widest leading-none">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleNavClick(link.id)}
              className={`transition-all duration-300 ${
                activeSection === link.id
                  ? "text-primary font-black"
                  : "text-slate-500 hover:text-primary"
              }`}
              animate={{
                color: activeSection === link.id ? "#2563eb" : "#64748b",
              }}
              transition={{ duration: 0.2 }}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={() => handleNavClick("contact")}
            className="px-8 py-3.5 bg-primary text-white rounded-[20px] hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Build Project
          </motion.a>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-cyan-500 shadow-lg shadow-primary/50"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </motion.nav>
  );
}
