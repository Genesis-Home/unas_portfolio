import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiltedCard } from "./TiltedCard";
import { ExternalLink, Cpu, Database, Server, Activity, Smartphone, Globe, ArrowRight } from "lucide-react";

interface Metric {
  label: string;
  value: string;
}

interface PipelineStep {
  node: string;
  note: string;
}

interface Project {
  id?: string; // AppMash case study ID
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
  image: string; // Preview mockup image for project cards
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
    image: "/why-choose-us-image-1.png",
    flow: [
      { node: "React Dashboard", note: "Search & Export" },
      { node: "RESTful Workflows", note: "Lead Management" },
      { node: "AI Recommendation", note: "Collaborative Filter" },
      { node: "Outreach Engine", note: "Direct Mail / Email" },
      { node: "Data Tier", note: "PostgreSQL Sync" }
    ]
  },
  {
    id: "1",
    title: "InspeCasa",
    category: "mobile",
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
    image: "/project-1.png",
    flow: [
      { node: "Audit Portal", note: "Auditor Interface" },
      { node: "Offline Store", note: "IndexedDB Cache" },
      { node: "Ingress Gateway", note: "Node.js REST API" },
      { node: "PDF Engine", note: "Dynamic Report Gen" },
      { node: "Storage Layer", note: "MongoDB & S3" }
    ]
  },
  {
    id: "3",
    title: "REELConnect",
    category: "mobile",
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
    image: "/project-3.png",
    flow: [
      { node: "Media Showcase", note: "Dynamic Reel Feed" },
      { node: "GraphQL Endpoint", note: "Optimized Schema" },
      { node: "WebSocket Hub", note: "Real-Time Messaging" },
      { node: "Matching Engine", note: "Crew Recommendation" },
      { node: "Database Store", note: "Postgres Replica" }
    ]
  },
  {
    id: "2",
    title: "MYSUTRA",
    category: "mobile",
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
    image: "/project-2.png",
    flow: [
      { node: "Auth Gateway", note: "JWT / OAuth2" },
      { node: "Verify Engine", note: "NestJS Service" },
      { node: "Event Stream", note: "Kafka Broker" },
      { node: "Fast Storage", note: "Redis Cache" },
      { node: "Relational Tier", note: "Postgres Storage" }
    ]
  },
  {
    id: "7",
    title: "Pakistan Booking",
    category: "web",
    subtitle: "Travel Reservation & Hotel System",
    description: "A centralized travel booking, reservation, and management platform for stays, destinations, and rental properties across Pakistan, featuring live inventory and fast queries.",
    metrics: [
      { label: "Stays Listed", value: "1,200+ Hotels" },
      { label: "Search Latency", value: "< 80ms" },
      { label: "Total Bookings", value: "80k+ Completed" }
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
    glowColor: "rgba(16, 185, 129, 0.25)", // Emerald
    icon: <Server className="text-emerald-400" size={24} />,
    url: "https://appmash.org/",
    image: "/booking system.png",
    flow: [
      { node: "Web Frontend", note: "React / Vite App" },
      { node: "Geo Filter API", note: "Filtered Search" },
      { node: "Reserve Handler", note: "ACID Booking Transaction" },
      { node: "Payment Ingress", note: "Easypaisa & JazzCash" },
      { node: "SMS Dispatcher", note: "Auto Reservation OTP" }
    ]
  },
  {
    id: "4",
    title: "Finsusu",
    category: "mobile",
    subtitle: "Micro-Savings & Personal Finance App",
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
    image: "/finsusu.png",
    flow: [
      { node: "Mobile Frontend", note: "React Native UI" },
      { node: "Plaid Integration", note: "Secure Bank Link" },
      { node: "Autosave Daemon", note: "Server-side Cron" },
      { node: "Ledger DB", note: "Double-Entry Postgres" },
      { node: "Push Notification", note: "Firebase (FCM)" }
    ]
  },
  {
    id: "5",
    title: "Taxi Caller",
    category: "web",
    subtitle: "Real-Time Ride Dispatching Engine",
    description: "A low-latency, cross-platform ride-hailing and dispatch application featuring high-frequency geospatial tracking, driver match protocols, and real-time mapping dashboards.",
    metrics: [
      { label: "Geo Match Speed", value: "< 1.2s Broadcast" },
      { label: "Active Network", value: "5k+ Drivers" },
      { label: "Location Accuracy", value: "< 2m Variance" }
    ],
    tech: ["React Native", "Expo", "Google Maps API", "Socket.io", "Node.js", "Redis"],
    glowColor: "rgba(245, 158, 11, 0.25)", // Amber
    icon: <Smartphone className="text-amber-400" size={24} />,
    url: "https://appmash.org/",
    image: "/taxicaller.png",
    flow: [
      { node: "Client Mobile UI", note: "React Native App" },
      { node: "Socket Gateway", note: "Socket.io Ingest" },
      { node: "Dispatch Engine", note: "Geospatial Matching" },
      { node: "Transit Tracker", note: "Redis Pub/Sub Sync" },
      { node: "Stripe Ledger", note: "Double-Entry Checkout" }
    ]
  },
  {
    id: "6",
    title: "Care Connect",
    category: "web",
    subtitle: "HIPAA Compliant Telehealth Portal",
    description: "A highly secure mobile healthcare application supporting encrypted video consultations, patient medical history tracking, digital prescriptions, and direct clinic integrations.",
    metrics: [
      { label: "Video Latency", value: "< 120ms Agora" },
      { label: "Provider Panel", value: "1.5k+ MDs" },
      { label: "Security Standard", value: "100% HIPAA" }
    ],
    tech: ["React Native", "Tailwind Native", "Agora RTC", "Express", "Node.js", "MongoDB"],
    glowColor: "rgba(59, 130, 246, 0.25)", // Blue
    icon: <Smartphone className="text-blue-400" size={24} />,
    url: "https://appmash.org/",
    image: "/careconnect.png",
    flow: [
      { node: "Patient Video App", note: "Agora Consult Platform" },
      { node: "Signaling Server", note: "WebSockets Connect" },
      { node: "Prescription Gen", note: "Express API -> PDF Mail" },
      { node: "EHR Ingress", note: "Secure Patient Sync" },
      { node: "Database Storage", note: "MongoDB Encrypted" }
    ]
  }
];

interface ProjectsProps {
  onSelectProject: (id: string) => void;
}

export function Projects({ onSelectProject }: ProjectsProps) {
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
            
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab("web")}
              className={`relative z-10 px-8 py-3 rounded-xl font-outfit text-xs font-bold tracking-widest transition-all duration-300 uppercase flex items-center gap-2 font-mono cursor-pointer ${
                activeTab === "web" ? "text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              <Globe size={14} className={activeTab === "web" ? "text-white animate-spin-slow" : "text-slate-400"} />
              Web App
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab("mobile")}
              className={`relative z-10 px-8 py-3 rounded-xl font-outfit text-xs font-bold tracking-widest transition-all duration-300 uppercase flex items-center gap-2 font-mono cursor-pointer ${
                activeTab === "mobile" ? "text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              <Smartphone size={14} className={activeTab === "mobile" ? "text-white animate-pulse" : "text-slate-400"} />
              Mobile App
            </motion.button>
          </div>
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center animate-glow"
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
                  <div 
                    onClick={() => project.id ? onSelectProject(project.id) : window.open(project.url, "_blank")}
                    className="p-6 h-full flex flex-col justify-between relative bg-[#090d16]/80 backdrop-blur-xl border border-white/5 rounded-[40px] overflow-hidden group cursor-pointer hover:border-primary/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 text-left"
                  >
                    <div>
                      {/* Visual Showroom Area */}
                      <div className="relative aspect-[16/10] w-full bg-[#030712]/80 border border-white/5 rounded-3xl overflow-hidden mb-6 flex items-center justify-center">
                        {/* Background glow matching the project style */}
                        <div 
                          className="absolute inset-0 opacity-10 blur-xl transition-opacity group-hover:opacity-25 duration-500 pointer-events-none"
                          style={{ backgroundColor: project.glowColor }}
                        />
                        
                        {/* Floating Mockup Screen */}
                        <div className="relative z-10 w-[88%] h-[88%] flex items-center justify-center">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        
                        {/* Glass overlay badge for category */}
                        <span className="absolute top-3.5 left-3.5 z-20 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-xl border border-white/5 text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                          {project.category === "web" ? "Web App" : "Mobile App"}
                        </span>
                        
                        {/* Top right icon badge */}
                        <div className="absolute top-3.5 right-3.5 z-20 w-8 h-8 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 text-slate-300">
                          {project.icon}
                        </div>
                      </div>

                      {/* Project Info */}
                      <h3 className="text-2xl font-bold text-white mb-1.5 font-outfit">
                        {project.title}
                      </h3>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider font-mono mb-4">
                        {project.subtitle}
                      </p>

                      <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                        {project.description}
                      </p>
                    </div>

                    {/* Footer Panel */}
                    <div>
                      {/* Telemetry Metrics Panel */}
                      <div className="grid grid-cols-3 gap-2.5 py-4 border-y border-white/5 mb-6 text-left">
                        {project.metrics.map((metric, mIdx) => (
                          <div key={mIdx}>
                            <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1 leading-none">{metric.label}</p>
                            <p className="text-xs font-black text-white leading-none font-mono">{metric.value}</p>
                          </div>
                        ))}
                      </div>

                      {/* Dynamic CTA Button */}
                      {project.id ? (
                        <div
                          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-white/10 group-hover:border-primary/30 text-white font-outfit text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:shadow-neon-blue/20 mb-6"
                        >
                          View Case Study
                          <ArrowRight size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
                        </div>
                      ) : (
                        <div
                          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-white/10 group-hover:border-primary/30 text-white font-outfit text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:shadow-neon-blue/20 mb-6"
                        >
                          Visit Live Site
                          <ExternalLink size={14} className="text-primary" />
                        </div>
                      )}

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


