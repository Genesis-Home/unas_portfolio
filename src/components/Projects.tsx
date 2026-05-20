import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiltedCard } from "./TiltedCard";
import { Github, ExternalLink, Cpu, Database, Server, Activity, Smartphone, Globe } from "lucide-react";

interface Metric {
  label: string;
  value: string;
}

interface PipelineStep {
  node: string;
  note: string;
}

interface Project {
  title: string;
  category: "web" | "mobile";
  subtitle: string;
  description: string;
  metrics: Metric[];
  tech: string[];
  glowColor: string;
  icon: React.ReactNode;
  url: string;
  flow: PipelineStep[];
}

const projectsList: Project[] = [
  {
    title: "USA Home Listings",
    category: "web",
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
    title: "InspeCasa",
    category: "web",
    subtitle: "Property & Inspection Management System",
    description: "A high-performance property audit and digital inspection platform. Streamlines building walkthroughs, automates compliance reporting, and manages offline-first data capture for auditors.",
    metrics: [
      { label: "Audits Run", value: "250k+ Done" },
      { label: "Report Gen", value: "< 2.5s" },
      { label: "Sync Reliability", value: "100.0% ACID" }
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Express", "MongoDB", "AWS S3"],
    glowColor: "rgba(16, 185, 129, 0.25)", // Emerald
    icon: <Cpu className="text-emerald-400" size={24} />,
    url: "https://appmash.org/",
    flow: [
      { node: "Audit Portal", note: "Auditor Interface" },
      { node: "Offline Store", note: "IndexedDB Cache" },
      { node: "Ingress Gateway", note: "Node.js REST API" },
      { node: "PDF Engine", note: "Dynamic Report Gen" },
      { node: "Storage Layer", note: "MongoDB & S3" }
    ]
  },
  {
    title: "REELConnect",
    category: "web",
    subtitle: "Film Production & Social Networking",
    description: "A social hub and collaboration platform tailored for filmmakers, cast, and crew. Facilitates role matching, production portfolio showcases, and real-time community chat.",
    metrics: [
      { label: "Active Crew", value: "12k+ Members" },
      { label: "Match Speed", value: "< 50ms" },
      { label: "Daily Messages", value: "100k+ Sent" }
    ],
    tech: ["React", "Redux", "WebSockets", "Node.js", "GraphQL", "PostgreSQL"],
    glowColor: "rgba(139, 92, 246, 0.25)", // Violet
    icon: <Database className="text-violet-400" size={24} />,
    url: "https://appmash.org/",
    flow: [
      { node: "Media Showcase", note: "Dynamic Reel Feed" },
      { node: "GraphQL Endpoint", note: "Optimized Schema" },
      { node: "WebSocket Hub", note: "Real-Time Messaging" },
      { node: "Matching Engine", note: "Crew Recommendation" },
      { node: "Database Store", note: "Postgres Replica" }
    ]
  },
  {
    title: "MYSUTRA",
    category: "web",
    subtitle: "Identity Mapping & Legacy Platform",
    description: "An enterprise-grade services ecosystem and secure identity mapping tool, providing advanced digital verification, custom workflows, and decentralized metadata management.",
    metrics: [
      { label: "Users Verified", value: "50k+ Active" },
      { label: "Token Match", value: "0% Collision" },
      { label: "SLA Guarantee", value: "99.95% SLA" }
    ],
    tech: ["React", "TypeScript", "NestJS", "Kafka", "Redis Cache", "Docker"],
    glowColor: "rgba(245, 158, 11, 0.25)", // Amber/Gold
    icon: <Activity className="text-amber-400" size={24} />,
    url: "https://appmash.org/",
    flow: [
      { node: "Auth Gateway", note: "JWT / OAuth2" },
      { node: "Verify Engine", note: "NestJS Service" },
      { node: "Event Stream", note: "Kafka Broker" },
      { node: "Fast Storage", note: "Redis Cache" },
      { node: "Relational Tier", note: "Postgres Storage" }
    ]
  },
  {
    title: "Finsusu",
    category: "mobile",
    subtitle: "Micro-Savings & Personal Wealth App",
    description: "A modern, gamified personal finance and micro-savings mobile application. Features auto-saves, custom saving pools, and secure banking-grade integrations to build smart financial habits.",
    metrics: [
      { label: "Avg. Savings", value: "+22% / User" },
      { label: "Bank Sync", value: "< 250ms" },
      { label: "App Store Rating", value: "4.9 / 5.0" }
    ],
    tech: ["React Native", "Expo", "Redux Toolkit", "Node.js", "Plaid API", "PostgreSQL"],
    glowColor: "rgba(16, 185, 129, 0.25)", // Emerald Green
    icon: <Smartphone className="text-emerald-400" size={24} />,
    url: "https://appmash.org/",
    flow: [
      { node: "Mobile Frontend", note: "React Native UI" },
      { node: "Plaid Integration", note: "Secure Bank Link" },
      { node: "Autosave Daemon", note: "Server-side Cron" },
      { node: "Ledger DB", note: "Double-Entry Postgres" },
      { node: "Push Notification", note: "Firebase (FCM)" }
    ]
  },
  {
    title: "Mudras",
    category: "mobile",
    subtitle: "Yoga Gestures & Wellness Application",
    description: "A highly engaging mobile wellness app focused on teaching yoga mudras (hand gestures). Features interactive 3D/image guides, session timers, progression logs, and fully offline-capable access.",
    metrics: [
      { label: "Wellness Streak", value: "15+ Days Avg" },
      { label: "Offline Mode", value: "100% Function" },
      { label: "Daily Active", value: "8k+ Yogis" }
    ],
    tech: ["React Native", "Expo", "SQLite Offline", "Tailwind Native", "Lottie Animations"],
    glowColor: "rgba(236, 72, 153, 0.25)", // Pink
    icon: <Activity className="text-pink-400" size={24} />,
    url: "https://appmash.org/",
    flow: [
      { node: "Yogi Frontend", note: "React Native / Expo" },
      { node: "Offline Sync", note: "SQLite Local Store" },
      { node: "Visual Guides", note: "Lottie Animations" },
      { node: "Meditation Timer", note: "High-Res Cron" },
      { node: "Local Notification", note: "Trigger System" }
    ]
  }
];

export function Projects() {
  const [activeTab, setActiveTab] = useState<"web" | "mobile">("web");

  const filteredProjects = projectsList.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-32 bg-background relative overflow-hidden tech-grid">
      <div className="absolute inset-0 tech-radial-glow pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center mb-20">
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

        {/* Tab Filters */}
        <div className="flex justify-center mb-16">
          <div className="relative flex p-1.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
            {/* Sliding Capsule Background */}
            <motion.div
              className="absolute top-1.5 bottom-1.5 rounded-xl bg-gradient-to-r from-primary to-accent pointer-events-none"
              layoutId="activeFilterTab"
              initial={false}
              animate={{
                left: activeTab === "web" ? "6px" : "calc(50% + 2px)",
                width: "calc(50% - 8px)"
              }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
            />

            <button
              onClick={() => setActiveTab("web")}
              className={`relative z-10 px-8 py-3 rounded-xl font-outfit text-xs font-bold tracking-widest transition-colors duration-300 uppercase flex items-center gap-2 font-mono ${activeTab === "web" ? "text-white" : "text-slate-400 hover:text-white"
                }`}
            >
              <Globe size={14} className={activeTab === "web" ? "text-white animate-spin-slow" : "text-slate-400"} />
              Web App
            </button>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`relative z-10 px-8 py-3 rounded-xl font-outfit text-xs font-bold tracking-widest transition-colors duration-300 uppercase flex items-center gap-2 font-mono ${activeTab === "mobile" ? "text-white" : "text-slate-400 hover:text-white"
                }`}
            >
              <Smartphone size={14} className={activeTab === "mobile" ? "text-white" : "text-slate-400"} />
              Mobile App
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4 }}
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
                          <a
                            href="https://github.com/appmashcode"
                            id={`project-git-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            <Github size={18} />
                          </a>
                          <a
                            href={project.url}
                            id={`project-link-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                            target={project.url.startsWith("http") ? "_blank" : "_self"}
                            rel="noreferrer"
                            className="hover:text-primary transition-colors"
                          >
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
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

