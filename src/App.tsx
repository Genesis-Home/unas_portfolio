import { useState, lazy, Suspense, useCallback } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { motion, AnimatePresence } from "framer-motion";
const ProjectDetails = lazy(() =>
  import("./components/ProjectDetails").then((m) => ({
    default: m.ProjectDetails,
  })),
);
import {
  Mail,
  MapPin,
  Github as GitHub,
  Linkedin as LinkedIn,
  Activity,
} from "lucide-react";

const WhatsApp = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
  </svg>
);

function App() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);

  const handleSelectProject = useCallback((projectId: string) => {
    setSavedScrollPosition(window.scrollY);
    setActiveProjectId(projectId);
  }, []);

  const handleCloseProject = useCallback(() => {
    setActiveProjectId(null);
    setTimeout(() => {
      window.scrollTo({ top: savedScrollPosition, behavior: "smooth" });
    }, 0);
  }, [savedScrollPosition]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Global Glow Lights */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <AnimatePresence mode="wait">
        {activeProjectId ? (
          <motion.div
            key="project-details"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
              <ProjectDetails
                projectId={activeProjectId}
                onClose={handleCloseProject}
              />
            </Suspense>
          </motion.div>
        ) : (
          <motion.div
            key="landing-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Navigation Headers */}
            <Navbar />

            {/* Sections */}
            <Hero />

            <Skills />

            <Projects onSelectProject={handleSelectProject} />

            <Experience />

            {/* Premium Obsidian Footer / Contact Protocol Section */}
            <footer
              id="contact"
              className="py-32 bg-[#050811] relative overflow-hidden border-t border-white/5 tech-grid"
            >
              <div className="absolute inset-0 tech-radial-glow pointer-events-none z-0" />

              <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                  <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-20 items-center">
                    {/* Left Side: Contact Pitch and Info */}
                    <div>
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6 block font-mono"
                      >
                        CONTACT PROTOCOL
                      </motion.span>
                      <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold font-outfit text-white mb-8 tracking-tight text-left">
                        Initialize{" "}
                        <span className="text-gradient-primary">
                          Connection
                        </span>
                      </h2>
                      <p className="text-slate-400 text-sm sm:text-lg mb-12 leading-relaxed font-light text-left">
                        Currently open to senior-level architectural
                        opportunities, engineering leadership, and high-impact
                        full-stack consulting worldwide. Let's engineer
                        something outstanding.
                      </p>

                      {/* Primary Sockets */}
                      <div className="flex flex-col gap-6">
                        {/* Email Socket */}
                        <motion.div
                          whileHover={{
                            x: 8,
                            scale: 1.02,
                            boxShadow: "0 0 20px rgba(59,130,246,0.2)",
                          }}
                          whileTap={{ scale: 0.98 }}
                          className="group flex items-center gap-3 sm:gap-5 p-4 sm:p-6 rounded-2xl sm:rounded-[28px] bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                        >
                          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white shadow-[0_0_10px_rgba(59,130,246,0.1)] group-hover:shadow-neon-blue transition-all duration-300 shrink-0">
                            <Mail size={20} />
                          </div>
                          <div className="text-left min-w-0">
                            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1 font-mono">
                              Secure Email Socket
                            </p>
                            <a
                              href="mailto:Unas.engineer@gmail.com"
                              className="text-sm min-[360px]:text-base sm:text-lg font-bold text-slate-200 hover:text-primary transition-colors break-all"
                            >
                              Unas.engineer@gmail.com
                            </a>
                          </div>
                        </motion.div>

                        {/* Location Socket */}
                        <motion.div
                          whileHover={{
                            x: 8,
                            scale: 1.02,
                            boxShadow: "0 0 20px rgba(99,102,241,0.2)",
                          }}
                          whileTap={{ scale: 0.98 }}
                          className="group flex items-center gap-3 sm:gap-5 p-4 sm:p-6 rounded-2xl sm:rounded-[28px] bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                        >
                          <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white shadow-[0_0_10px_rgba(99,102,241,0.1)] group-hover:shadow-neon-violet transition-all duration-300 shrink-0">
                            <MapPin size={20} />
                          </div>
                          <div className="text-left min-w-0">
                            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1 font-mono">
                              Central Station
                            </p>
                            <p className="text-sm min-[360px]:text-base sm:text-lg font-bold text-slate-200 break-all">
                              Katy, TX 77449 | Remote
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Right Side: Glassmorphic Access Hub Grid */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="grid sm:grid-cols-2 gap-6"
                    >
                      {[
                        {
                          label: "LinkedIn",
                          icon: <LinkedIn size={24} />,
                          link: "https://linkedin.com/in/unas/",
                          color:
                            "group-hover:text-sky-400 group-hover:shadow-neon-blue",
                        },
                        {
                          label: "GitHub",
                          icon: <GitHub size={24} />,
                          link: "https://github.com/appmashcode",
                          color:
                            "group-hover:text-white group-hover:shadow-neon-blue",
                        },
                        {
                          label: "Email",
                          icon: <Mail size={24} />,
                          link: "mailto:Unas.engineer@gmail.com",
                          color:
                            "group-hover:text-blue-400 group-hover:shadow-neon-blue",
                        },
                        {
                          label: "WhatsApp",
                          icon: <WhatsApp size={24} />,
                          link: "https://wa.me/16087157408",
                          color:
                            "group-hover:text-emerald-400 group-hover:shadow-neon-emerald",
                        },
                      ].map((social, i) => (
                        <motion.a
                          key={i}
                          href={social.link}
                          whileHover={{
                            y: -10,
                            scale: 1.08,
                            boxShadow: "0 15px 40px rgba(59,130,246,0.3)",
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="group h-44 flex flex-col items-center justify-center gap-4 bg-[#090d16]/70 border border-white/5 rounded-[36px] p-8 hover:border-primary/40 transition-all duration-400 backdrop-blur-md cursor-pointer"
                        >
                          <div
                            className={`text-slate-400 ${social.color} transition-all duration-300 p-4 bg-white/5 rounded-2xl border border-white/5`}
                          >
                            {social.icon}
                          </div>
                          <span className="text-sm font-bold text-slate-200 group-hover:text-white group-hover:tracking-[0.15em] transition-all">
                            {social.label}
                          </span>
                        </motion.a>
                      ))}
                    </motion.div>
                  </div>

                  {/* Futuristic Telemetry Console Log */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-background/90 border border-white/5 rounded-2xl p-6 font-mono text-xs text-left max-w-6xl mx-auto shadow-2xl shadow-black/55 backdrop-blur-xl"
                  >
                    <div className="flex gap-1.5 mb-3.5 border-b border-white/5 pb-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                      <span className="text-[8px] text-slate-500 ml-auto uppercase tracking-widest font-bold flex items-center gap-1.5">
                        <Activity
                          size={10}
                          className="text-emerald-400 animate-pulse"
                        />
                        telemetry_handshake.log
                      </span>
                    </div>
                    <div className="space-y-1.5 text-[10px] text-slate-400">
                      <p className="text-primary font-bold">
                        $ cat connection_handshake.json
                      </p>
                      <p className="text-slate-500">{"{"}</p>
                      <p className="pl-4 text-slate-400">
                        "status":{" "}
                        <span className="text-emerald-400">
                          "READY_FOR_COMMUNICATION"
                        </span>
                        ,
                      </p>
                      <p className="pl-4 text-slate-400">
                        "host_resolved":{" "}
                        <span className="text-violet-400">
                          "katy-tx-edge-01"
                        </span>
                        ,
                      </p>
                      <p className="pl-4 text-slate-400">
                        "ssl_negotiation":{" "}
                        <span className="text-sky-400">
                          "TLS_1.3_ECDHE_RSA"
                        </span>
                        ,
                      </p>
                      <p className="pl-4 text-slate-400">
                        "active_channels": ["email", "linkedin", "phone"]
                      </p>
                      <p className="text-slate-500">{"}"}</p>
                    </div>
                  </motion.div>

                  {/* Copyright & Links */}
                  <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest font-mono">
                      © 2026 Syed Unas — All systems operational
                    </p>
                    <div className="flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] font-mono">
                      <a
                        href="#hero"
                        className="hover:text-primary transition-colors"
                      >
                        Architecture
                      </a>
                      <a
                        href="#skills"
                        className="hover:text-primary transition-colors"
                      >
                        Tech Stack
                      </a>
                      <a
                        href="#projects"
                        className="hover:text-primary transition-colors"
                      >
                        Projects
                      </a>
                      <a
                        href="#experience"
                        className="hover:text-primary transition-colors"
                      >
                        Experience
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
