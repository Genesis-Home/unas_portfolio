import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiltedCard } from "./TiltedCard";
import { Magnet } from "./Magnet";
import {
  ExternalLink,
  Cpu,
  Database,
  Server,
  Activity,
  Smartphone,
  Globe,
  ArrowUp,
  ArrowRight,
  Brain,
  Cloud,
} from "lucide-react";

import { projectsList, type ProjectCategory } from "../data/projects";

const PROJECT_TABS: {
  key: ProjectCategory;
  label: string;
  shortLabel: string;
  icon: typeof Globe;
  iconAnim: string;
}[] = [
  { key: "web", label: "Web App", shortLabel: "Web", icon: Globe, iconAnim: "animate-spin-slow" },
  { key: "mobile", label: "Mobile App", shortLabel: "Mobile", icon: Smartphone, iconAnim: "animate-pulse" },
  { key: "ai", label: "AI / ML", shortLabel: "AI/ML", icon: Brain, iconAnim: "animate-pulse" },
  { key: "cloud", label: "Cloud / DevOps", shortLabel: "Cloud", icon: Cloud, iconAnim: "animate-pulse" },
];

const getCategoryLabel = (category: ProjectCategory) =>
  PROJECT_TABS.find((t) => t.key === category)?.label ?? category;

const getProjectIcon = (iconName: string, glowColor: string) => {
  const colorClass = glowColor.includes("rgba(59, 130, 246")
    ? "text-blue-400"
    : glowColor.includes("rgba(16, 185, 129")
      ? "text-emerald-400"
      : glowColor.includes("rgba(139, 92, 246")
        ? "text-violet-400"
        : glowColor.includes("rgba(245, 158, 11")
          ? "text-amber-400"
          : "text-slate-400";

  switch (iconName) {
    case "Server":
      return <Server className={colorClass} size={24} />;
    case "Cpu":
      return <Cpu className={colorClass} size={24} />;
    case "Database":
      return <Database className={colorClass} size={24} />;
    case "Activity":
      return <Activity className={colorClass} size={24} />;
    case "Smartphone":
      return <Smartphone className={colorClass} size={24} />;
    case "Globe":
    default:
      return <Globe className={colorClass} size={24} />;
  }
};

interface ProjectsProps {
  onSelectProject: (id: string) => void;
}

export const Projects = ({ onSelectProject }: ProjectsProps) => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("web");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const filteredProjects = useMemo(
    () => projectsList.filter((p) => p.category === activeTab),
    [activeTab],
  );

  const handleTabChange = useCallback((tab: ProjectCategory) => {
    setActiveTab(tab);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="projects"
      className="py-32 bg-background relative overflow-hidden tech-grid"
    >
      <div className="absolute inset-0 tech-radial-glow pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
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
            Selected <span className="text-gradient-primary">Projects</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-accent mt-8 rounded-full"
          />
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center mb-16 px-2">
          <div
            className="relative flex p-1 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md overflow-x-auto max-w-full [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {PROJECT_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <motion.button
                  key={tab.key}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleTabChange(tab.key)}
                  className={`relative px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl font-outfit text-[10px] sm:text-xs font-bold tracking-widest transition-all duration-300 uppercase flex items-center gap-1.5 sm:gap-2 font-mono cursor-pointer shrink-0 ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterTab"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-accent pointer-events-none"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                    <Icon
                      size={14}
                      className={
                        isActive ? `text-white ${tab.iconAnim}` : "text-slate-400"
                      }
                    />
                    <span className="sm:hidden">{tab.shortLabel}</span>
                    <span className="hidden sm:inline">{tab.label}</span>
                  </span>
                </motion.button>
              );
            })}
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
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="h-full cursor-pointer"
              >
                <TiltedCard glowColor={project.glowColor} className="h-full">
                  <motion.div
                    onClick={() =>
                      project.id
                        ? onSelectProject(project.id)
                        : window.open(project.url, "_blank")
                    }
                    className="p-4 sm:p-6 h-full flex flex-col justify-between relative bg-[#090d16]/80 backdrop-blur-xl border border-white/5 rounded-[40px] overflow-hidden group cursor-pointer hover:border-primary/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 text-left"
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
                          <Magnet padding={60} magnetStrength={3}>
                            <img
                              src={project.image}
                              alt={project.title}
                              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
                            />
                          </Magnet>
                        </div>

                        {/* Glass overlay badge for category */}
                        <span className="absolute top-3.5 left-3.5 z-20 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-xl border border-white/5 text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                          {getCategoryLabel(project.category)}
                        </span>

                        {/* Top right icon badge */}
                        <div className="absolute top-3.5 right-3.5 z-20 w-8 h-8 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 text-slate-300">
                          {getProjectIcon(project.iconName, project.glowColor)}
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
                            <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1 leading-none">
                              {metric.label}
                            </p>
                            <p className="text-xs font-black text-white leading-none font-mono">
                              {metric.value}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Dynamic CTA Button */}
                      {project.id ? (
                        <div className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-white/10 group-hover:border-primary/30 text-white font-outfit text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:shadow-neon-blue/20 mb-6">
                          View Case Study
                          <ArrowRight
                            size={14}
                            className="text-primary group-hover:translate-x-1 transition-transform"
                          />
                        </div>
                      ) : (
                        <div className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-white/10 group-hover:border-primary/30 text-white font-outfit text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:shadow-neon-blue/20 mb-6">
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
                  </motion.div>
                </TiltedCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{
              scale: 1.15,
              y: -5,
              boxShadow: "0 0 30px rgba(59,130,246,0.5)",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer"
          >
            <ArrowUp size={20} className="text-white animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};
