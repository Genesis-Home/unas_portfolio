import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Github as GitHub,
  Linkedin as LinkedIn,
  Terminal,
  Code2,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />

      {/* Premium Light Footer / Contact Section */}
      <footer
        id="contact"
        className="py-32 bg-slate-50 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20 items-center">
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-8 block"
                >
                  Contact Protocol
                </motion.span>
                <h2 className="text-5xl md:text-7xl font-extrabold font-outfit text-slate-900 mb-8 tracking-tight">
                  Let's <span className="text-gradient-primary">Connect</span>
                </h2>
                <p className="text-slate-600 text-lg mb-12 leading-relaxed font-light">
                  Currently open to senior-level opportunities and high-impact
                  architectural consultancy. Let's build something exceptional.
                </p>

                <div className="flex flex-col gap-6">
                  <div className="group flex items-center gap-5 p-6 rounded-[32px] bg-white border border-slate-200 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                        Email Terminal
                      </p>
                      <a
                        href="mailto:Unas.engineer@gmail.com"
                        className="text-lg font-bold text-slate-900"
                      >
                        Unas.engineer@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-center gap-5 p-6 rounded-[32px] bg-white border border-slate-200 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all">
                    <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-all">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                        Location
                      </p>
                      <p className="text-lg font-bold text-slate-900">
                        Katy, TX 77449 | Remote
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-6"
              >
                {[
                  {
                    label: "LinkedIn",
                    icon: <LinkedIn size={24} />,
                    link: "https://linkedin.com/in/unas/",
                    color: "hover:text-[#0077b5]",
                  },
                  {
                    label: "GitHub",
                    icon: <GitHub size={24} />,
                    link: "https://github.com/appmashcode",
                    color: "hover:text-black",
                  },
                  {
                    label: "Email",
                    icon: <Mail size={24} />,
                    link: "mailto:Unas.engineer@gmail.com",
                    color: "hover:text-primary",
                  },
                  {
                    label: "Phone",
                    icon: <Terminal size={24} />,
                    link: "tel:+1-608-715-7408",
                    color: "hover:text-indigo-600",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    className="group h-48 flex flex-col items-center justify-center gap-4 bg-white border border-slate-200 rounded-[48px] p-8 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500"
                  >
                    <div
                      className={`text-slate-500 ${social.color} transition-all duration-300 group-hover:scale-125`}
                    >
                      {social.icon}
                    </div>
                    <span className="text-sm font-bold text-slate-900 group-hover:tracking-[0.2em] transition-all">
                      {social.label}
                    </span>
                  </a>
                ))}
              </motion.div>
            </div>

            <div className="mt-32 pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                © 2026 Syed Unas — All rights reserved
              </p>
              <div className="flex gap-8 text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
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
                  href="#experience"
                  className="hover:text-primary transition-colors"
                >
                  Operations
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating tech elements in footer */}
        <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      </footer>
    </div>
  );
}

export default App;
