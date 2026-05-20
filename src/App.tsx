import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Github as GitHub,
  Linkedin as LinkedIn,
  Terminal,
  Activity
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Global Glow Lights */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Navigation Headers */}
      <Navbar />

      {/* Sections */}
      <Hero />

      <Skills />

      <Projects />

      <Experience />

      {/* Premium Obsidian Footer / Contact Protocol Section */}
      <footer
        id="contact"
        className="py-32 bg-[#050811] relative overflow-hidden border-t border-white/5 tech-grid"
      >
        <div className="absolute inset-0 tech-radial-glow pointer-events-none z-0" />

        <div className="container mx-auto px-6 relative z-10">
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
                <h2 className="text-5xl md:text-7xl font-extrabold font-outfit text-white mb-8 tracking-tight text-left">
                  Initialize <span className="text-gradient-primary">Connection</span>
                </h2>
                <p className="text-slate-400 text-lg mb-12 leading-relaxed font-light text-left">
                  Currently open to senior-level architectural opportunities, engineering leadership,
                  and high-impact full-stack consulting worldwide. Let's engineer something outstanding.
                </p>

                {/* Primary Sockets */}
                <div className="flex flex-col gap-6">

                  {/* Email Socket */}
                  <motion.div
                    whileHover={{ x: 6 }}
                    className="group flex items-center gap-5 p-6 rounded-[28px] bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white shadow-[0_0_10px_rgba(59,130,246,0.1)] group-hover:shadow-neon-blue transition-all duration-300">
                      <Mail size={20} />
                    </div>
                    <div className="text-left">
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1 font-mono">
                        Secure Email Socket
                      </p>
                      <a
                        href="mailto:Unas.engineer@gmail.com"
                        className="text-lg font-bold text-slate-200 hover:text-primary transition-colors"
                      >
                        Unas.engineer@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  {/* Location Socket */}
                  <motion.div
                    whileHover={{ x: 6 }}
                    className="group flex items-center gap-5 p-6 rounded-[28px] bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white shadow-[0_0_10px_rgba(99,102,241,0.1)] group-hover:shadow-neon-violet transition-all duration-300">
                      <MapPin size={20} />
                    </div>
                    <div className="text-left">
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1 font-mono">
                        Central Station
                      </p>
                      <p className="text-lg font-bold text-slate-200">
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
                    color: "group-hover:text-sky-400 group-hover:shadow-neon-blue",
                  },
                  {
                    label: "GitHub",
                    icon: <GitHub size={24} />,
                    link: "https://github.com/appmashcode",
                    color: "group-hover:text-white group-hover:shadow-neon-blue",
                  },
                  {
                    label: "Email",
                    icon: <Mail size={24} />,
                    link: "mailto:Unas.engineer@gmail.com",
                    color: "group-hover:text-blue-400 group-hover:shadow-neon-blue",
                  },
                  {
                    label: "Hotline Interface",
                    icon: <Terminal size={24} />,
                    link: "tel:+1-608-715-7408",
                    color: "group-hover:text-emerald-400 group-hover:shadow-neon-emerald",
                  },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    whileHover={{ y: -6, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="group h-44 flex flex-col items-center justify-center gap-4 bg-[#090d16]/70 border border-white/5 rounded-[36px] p-8 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-400 backdrop-blur-md"
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
              className="mt-20 bg-[#030712]/90 border border-white/5 rounded-2xl p-6 font-mono text-xs text-left max-w-6xl mx-auto shadow-2xl shadow-black/55 backdrop-blur-xl"
            >
              <div className="flex gap-1.5 mb-3.5 border-b border-white/5 pb-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                <span className="text-[8px] text-slate-500 ml-auto uppercase tracking-widest font-bold flex items-center gap-1.5">
                  <Activity size={10} className="text-emerald-400 animate-pulse" />
                  telemetry_handshake.log
                </span>
              </div>
              <div className="space-y-1.5 text-[10px] text-slate-400">
                <p className="text-primary font-bold">$ cat connection_handshake.json</p>
                <p className="text-slate-500">{"{"}</p>
                <p className="pl-4 text-slate-400">"status": <span className="text-emerald-400">"READY_FOR_COMMUNICATION"</span>,</p>
                <p className="pl-4 text-slate-400">"host_resolved": <span className="text-violet-400">"katy-tx-edge-01"</span>,</p>
                <p className="pl-4 text-slate-400">"ssl_negotiation": <span className="text-sky-400">"TLS_1.3_ECDHE_RSA"</span>,</p>
                <p className="pl-4 text-slate-400">"active_channels": ["email", "linkedin", "phone"]</p>
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
                  Deployments
                </a>
                <a
                  href="#experience"
                  className="hover:text-primary transition-colors"
                >
                  Operations
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
