import { motion } from "framer-motion";
import { TiltedCard } from "./TiltedCard";
import { Github, ExternalLink, Cpu, Database, Server, Activity } from "lucide-react";

const projectsList = [
  {
    title: "USA Home Listings",
    subtitle: "Lead Gen & Marketing Automation Platform",
    description: "Developed a real-time lead generation and marketing automation platform for moving companies featuring verified homeowner data, AI-based vacancy filtering, and automated outreach campaigns to improve lead quality.",
    metrics: [
      { label: "Supported Orgs", value: "500+ Companies" },
      { label: "Database Scale", value: "10M+ Listings" },
      { label: "System SLA", value: "99.99% Uptime" }
    ],
    tech: ["React", "Node.js", "Django", "Python", "Stripe API", "PostgreSQL"],
    glowColor: "rgba(59, 130, 246, 0.25)", // Tech Blue
    icon: <Server className="text-blue-400" size={24} />,
    url: "https://www.usahomelistings.com",
    flow: [
      { node: "React Dashboard", note: "Search & Export" },
      { node: "RESTful Workflows", note: "Lead Management" },
      { node: "AI Recommendation", note: "Collaborative Filter" },
      { node: "Outreach Engine", note: "Direct Mail / Email" },
      { node: "Data Tier", note: "PostgreSQL Sync" }
    ]
  },
  {
    title: "Aegis AI",
    subtitle: "Real-Time Predictive Maintenance Engine",
    description: "Designed and implemented an IoT predictive maintenance platform that digests live machine sensor metrics and executes machine learning inference pipelines to detect component anomalies.",
    metrics: [
      { label: "Inference Speed", value: "< 18ms" },
      { label: "IoT Metric Scale", value: "10M+ daily events" },
      { label: "Model Accuracy", value: "99.4% F1-Score" }
    ],
    tech: ["Python", "FastAPI", "PyTorch", "GCP Vertex AI", "React", "Docker"],
    glowColor: "rgba(139, 92, 246, 0.25)", // Violet
    icon: <Cpu className="text-violet-400" size={24} />,
    url: "#contact",
    flow: [
      { node: "IoT Sensors", note: "MQTT Data" },
      { node: "FastAPI Ingestion", note: "Low-Latency" },
      { node: "GCP Vertex AI", note: "PyTorch Model" },
      { node: "Alert Engine", note: "WebSockets" },
      { node: "UI Dashboard", note: "React App" }
    ]
  },
  {
    title: "Quantum DB",
    subtitle: "Distributed Ledger & Asset Sync Core",
    description: "Engineered a low-latency, real-time distributed asset replication and ledger synchronization library. Built on top of WebSockets and Redis pub/sub clusters for financial asset ledger tracking.",
    metrics: [
      { label: "Sync Speed", value: "100k events/sec" },
      { label: "Data Drift", value: "0% Absolute" },
      { label: "Active Conns", value: "50,000+ WebSocket" }
    ],
    tech: ["TypeScript", "Node.js", "WebSockets", "Redis", "PostgreSQL", "Docker"],
    glowColor: "rgba(16, 185, 129, 0.25)", // Emerald
    icon: <Database className="text-emerald-400" size={24} />,
    url: "#contact",
    flow: [
      { node: "Clients", note: "WS Conns" },
      { node: "WS Gateway Cluster", note: "Node.js" },
      { node: "Redis Pub/Sub", note: "Sync Layer" },
      { node: "Ledger Core", note: "Strict ACID" },
      { node: "Read Replicas", note: "PgSQL Sync" }
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-background relative overflow-hidden tech-grid">
      <div className="absolute inset-0 tech-radial-glow pointer-events-none z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6 font-mono"
          >
            SYSTEM ARCHITECTURES
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-extrabold font-outfit text-white text-center">
            Selected <span className="text-gradient-primary">Deployments</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-accent mt-8 rounded-full"
          />
        </div>

        {/* Project Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projectsList.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="h-full"
            >
              <TiltedCard glowColor={project.glowColor} className="h-full">
                <div className="p-8 h-full flex flex-col justify-between relative bg-[#090d16]/80 backdrop-blur-xl border border-white/5 rounded-[40px] overflow-hidden">
                  
                  {/* Top Header */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                        {project.icon}
                      </div>
                      <div className="flex gap-3 text-slate-400">
                        <a href="https://github.com/appmashcode" id={`project-git-${idx}`} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                          <Github size={18} />
                        </a>
                        <a href={project.url} id={`project-link-${idx}`} target={project.url.startsWith("http") ? "_blank" : "_self"} rel="noreferrer" className="hover:text-primary transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 font-outfit">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider font-mono mb-4">
                      {project.subtitle}
                    </p>

                    <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                      {project.description}
                    </p>

                    {/* Visual Architecture Flow Panel */}
                    <div className="bg-[#030712] rounded-2xl p-4 border border-white/5 mb-6 font-mono text-[10px] text-left">
                      <div className="flex items-center gap-1.5 text-slate-500 mb-3 border-b border-white/5 pb-2">
                        <Activity size={10} className="text-primary animate-pulse" />
                        <span className="font-bold uppercase tracking-wider text-[8px]">Data Transit Pipeline</span>
                      </div>
                      
                      <div className="space-y-3.5 relative pl-4 border-l border-primary/20">
                        {project.flow.map((step, sIdx) => (
                          <div key={sIdx} className="relative">
                            {/* Bullet */}
                            <div className="absolute -left-[20.5px] top-1 w-2.5 h-2.5 rounded-full bg-primary/30 border border-primary flex items-center justify-center">
                              <div className="w-1 h-1 bg-primary rounded-full" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-slate-300 font-bold leading-none">{step.node}</span>
                              <span className="text-slate-500 text-[8px] mt-0.5">{step.note}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Telemetry Metrics Panel */}
                  <div>
                    <div className="grid grid-cols-3 gap-2.5 py-4 border-y border-white/5 mb-6 text-left">
                      {project.metrics.map((metric, mIdx) => (
                        <div key={mIdx}>
                          <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1 leading-none">{metric.label}</p>
                          <p className="text-xs font-black text-white leading-none font-mono">{metric.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 bg-white/5 text-slate-400 text-[9px] font-bold rounded-lg border border-white/5 font-mono uppercase"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </TiltedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
