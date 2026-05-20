import { motion } from "framer-motion";
import { Terminal, Briefcase, Calendar, CheckSquare } from "lucide-react";

const experiences = [
  {
    company: "Muhammad Labs",
    role: "Senior Full-Stack Developer",
    period: "Nov 2024 - Present",
    description:
      "Directing structural architectural plans and delivering highly scalable enterprise systems for Real Estate and Retail clients. Driving microservices synchronization, transactional integrity, and AI pipelines.",
    achievements: [
      "Engineered real-time inventory management backend with NestJS and PostgreSQL for multi-warehouse inventory, reducing stock discrepancies by 31% and automating supply logs.",
      "Built resilient cloud-based property gateway platform with React and NestJS featuring Stripe API and custom routing, cutting support tickets by 35% through modular API architecture.",
      "Deployed event-driven analytics pipelines on AWS Lambda and Azure with Python (Pandas, Boto3), delivering telemetry charts via React dashboards for commercial intelligence."
    ],
    glowColor: "border-blue-500/30 hover:border-blue-500/70 shadow-blue-500/5 hover:shadow-blue-500/15",
    color: "bg-blue-500 shadow-blue-500/50",
    tech: ["React", "NestJS", "Node.js", "Python", "AWS", "Azure"],
  },
  {
    company: "Techneeqs",
    role: "Full-Stack Developer",
    period: "Jan 2021 - May 2024",
    description:
      "Architected secure, enterprise-grade web backends and micro-frontends for global Automotive and E-commerce organizations using React, TypeScript, and Django.",
    achievements: [
      "Built a high-performance luxury e-commerce platform with React, TypeScript, and Node.js featuring real-time inventory via WebSockets and PostgreSQL-backed security layers.",
      "Developed interactive automotive configure engines with React and Three.js including 3D vehicle configurators, Google Maps nodes, and booking services.",
      "Designed a transactional custom checkout pipeline integrating Stripe billing and AI recommendation microservices powered by Django collaborative filtering."
    ],
    glowColor: "border-violet-500/30 hover:border-violet-500/70 shadow-violet-500/5 hover:shadow-violet-500/15",
    color: "bg-violet-500 shadow-violet-500/50",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Django",
      "Three.js",
      "PostgreSQL",
    ],
  },
  {
    company: "Freelance",
    role: "React & React Native Engineer",
    period: "Jan 2019 - Nov 2020",
    description:
      "Delivered production-grade cross-platform mobile systems for travel, fitness, and health clients using React Native and structured Redux pipelines.",
    achievements: [
      "Engineered highly reusable mobile components, integrating secure hardware bridges, merchant payment gateways, and resilient offline syncing protocols.",
      "Collaborated with remote distributed engineering squads to execute testing scripts and maximize user ratings across Android and iOS systems."
    ],
    glowColor: "border-emerald-500/30 hover:border-emerald-500/70 shadow-emerald-500/5 hover:shadow-emerald-500/15",
    color: "bg-emerald-500 shadow-emerald-500/50",
    tech: ["React Native", "JavaScript", "REST APIs", "Redux"],
  },
  {
    company: "BluePeak Solutions",
    role: "React & React Native Intern",
    period: "Jul 2018 - Nov 2018",
    description:
      "Supported core engineering teams by developing modular interface panels and testing cross-platform features across React and mobile targets.",
    achievements: [
      "Built interface modules and solved styling glitches based on design specifications, speeding up client delivery milestones.",
      "Conducted automated linting, troubleshooting, and debugging iterations to verify seamless rendering on mobile devices."
    ],
    glowColor: "border-slate-500/30 hover:border-slate-500/70 shadow-slate-500/5 hover:shadow-slate-500/15",
    color: "bg-slate-500 shadow-slate-500/50",
    tech: ["React", "React Native", "JavaScript", "Redux"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 bg-background relative overflow-hidden tech-grid">
      <div className="absolute inset-0 tech-radial-glow pointer-events-none z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm font-mono"
          >
            OPERATIONS LOG
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-extrabold font-outfit text-white text-center">
            Professional <span className="text-gradient-primary">Timeline</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-accent mt-8 rounded-full"
          />
        </div>

        {/* Timeline List */}
        <div className="max-w-5xl mx-auto relative pl-6 md:pl-10">
          
          {/* Vertical Glowing Connector Line */}
          <div className="absolute left-[30px] md:left-[38px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-primary via-accent to-slate-800 pointer-events-none" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative mb-16 last:mb-0 group"
            >
              
              {/* Timeline LED Checkpoint Node */}
              <div className="absolute -left-[30px] md:-left-[38px] top-7 z-20 flex items-center justify-center">
                <span className="relative flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-30"></span>
                  <span className={`relative inline-flex rounded-full h-5 w-5 border border-white/10 ${exp.color}`}></span>
                </span>
              </div>

              {/* Glassmorphic Project Brief Container */}
              <div className={`grid lg:grid-cols-[1fr_2.2fr] gap-8 bg-[#090d16]/75 border p-8 md:p-12 rounded-[40px] shadow-2xl transition-all duration-500 backdrop-blur-xl ${exp.glowColor}`}>
                
                {/* Left Block: Identity & Stack */}
                <div className="flex flex-col text-left">
                  <div
                    className={`w-14 h-14 ${exp.color} rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg`}
                  >
                    <Terminal size={26} />
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mb-1.5 font-outfit uppercase tracking-tight">
                    {exp.company}
                  </h3>
                  
                  <p className="text-primary font-bold text-sm mb-4 font-mono">
                    {exp.role}
                  </p>
                  
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider font-mono mb-6">
                    <Calendar size={12} className="text-slate-500" />
                    {exp.period}
                  </div>

                  {/* Technology Tags Pod */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {exp.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-white/5 text-slate-400 text-[9px] font-bold rounded-lg border border-white/5 font-mono uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Block: Telemetry and Key Achievements */}
                <div className="flex flex-col justify-center text-left">
                  
                  {/* Brief Terminal Box */}
                  <div className="bg-[#030712] p-6 rounded-3xl border border-white/5 mb-8">
                    <div className="flex items-center gap-2 text-primary mb-3">
                      <Briefcase size={15} />
                      <span className="text-[10px] font-bold uppercase tracking-wider font-mono">
                        MISSION BRIEFING
                      </span>
                    </div>
                    <p className="text-slate-300 leading-relaxed font-light text-sm">
                      {exp.description}
                    </p>
                  </div>

                  {/* Metric-Driven Achievements */}
                  <div className="space-y-4">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex gap-4 group/item items-start">
                        <div className="mt-1">
                          <CheckSquare size={13} className="text-primary/45 group-hover/item:text-primary transition-colors shrink-0" />
                        </div>
                        <p className="text-slate-400 text-xs md:text-sm leading-relaxed group-hover/item:text-slate-200 transition-colors font-light">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
