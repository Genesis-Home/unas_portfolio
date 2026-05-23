import { useEffect, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Magnet } from "./Magnet";
import {
  ArrowLeft,
  Smartphone,
  Globe,
  Terminal,
  ShieldAlert,
  ArrowUp,
} from "lucide-react";

// Import all local PortfolioData files
import InspeCasaScreens from "./PortfolioData/InspeCasa";
import MysturaScreens from "./PortfolioData/MysturaData";
import REELConnectScreens from "./PortfolioData/REELConnect";
import FinsususScreens from "./PortfolioData/Finsusu";
import TaxiCallerScreens from "./PortfolioData/TaxiCaller";
import CareConnectScreens from "./PortfolioData/CareConnect";
import PakistanBookingScreens from "./PortfolioData/PakistanBooking";

interface ScreenData {
  type: "mobile" | "laptop";
  variant: "left" | "right";
  heading: string;
  description: string;
  image: string;
  bgImage: string;
  hero?: boolean;
}

interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  glow: string;
  type: "web" | "mobile";
  screens: ScreenData[];
}

const projects: Project[] = [
  {
    id: "1",
    name: "InspeCasa",
    category: "Web Application UI",
    description: "Property Inspections & Compliance Verification Core",
    glow: "from-emerald-500/20 to-teal-500/20",
    type: "mobile",
    screens: InspeCasaScreens as ScreenData[],
  },
  {
    id: "2",
    name: "MYSUTRA",
    category: "Web Service Platform",
    description: "Distributed Identity Mapping & Legacy Services Engine",
    glow: "from-amber-500/20 to-orange-500/20",
    type: "mobile",
    screens: MysturaScreens as ScreenData[],
  },
  {
    id: "3",
    name: "REELConnect",
    category: "Web Networking System",
    description: "Film Industry Creative Social & Casting Operations Hub",
    glow: "from-violet-500/20 to-fuchsia-500/20",
    type: "mobile",
    screens: REELConnectScreens as ScreenData[],
  },
  {
    id: "4",
    name: "Finsusu",
    category: "Mobile Application",
    description: "Algorithmic Micro-Savings & Personal Financial Intelligence",
    glow: "from-emerald-500/20 to-cyan-500/20",
    type: "mobile",
    screens: FinsususScreens as ScreenData[],
  },
  {
    id: "5",
    name: "Taxi Caller",
    category: "Mobile Dispatch Software",
    description: "Geospatial Ride Matching & Driver Coordination Network",
    glow: "from-yellow-500/20 to-amber-500/20",
    type: "web",
    screens: TaxiCallerScreens as ScreenData[],
  },
  {
    id: "6",
    name: "Care Connect",
    category: "Mobile Health Platform",
    description: "HIPAA-Compliant Video Telehealth & Encrypted EHR Conduit",
    glow: "from-blue-500/20 to-indigo-500/20",
    type: "web",
    screens: CareConnectScreens as ScreenData[],
  },
  {
    id: "7",
    name: "Pakistan Booking",
    category: "Web Reservation Core",
    description: "Centralized Hospitality Inventory & Regional Booking Ingress",
    glow: "from-emerald-500/20 to-green-500/20",
    type: "web",
    screens: PakistanBookingScreens as ScreenData[],
  },
];

// Helper functions for easy filtering
export const getWebProjects = () => projects.filter((p) => p.type === "web");
export const getMobileProjects = () =>
  projects.filter((p) => p.type === "mobile");
export const getProjectById = (id: string) => projects.find((p) => p.id === id);

interface ProjectDetailsProps {
  projectId: string;
  onClose: () => void;
}

export const ProjectDetails = ({ projectId, onClose }: ProjectDetailsProps) => {
  const project = useMemo(() => getProjectById(projectId), [projectId]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const detailsSection = document.querySelector(".project-details-container");
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [projectId]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center p-8">
        <ShieldAlert size={64} className="text-rose-500 mb-6 animate-pulse" />
        <h2 className="text-3xl font-bold font-outfit text-white mb-2">
          Systems Pipeline Fault
        </h2>
        <p className="text-slate-400 mb-8 max-w-md">
          Project data node with ID "{projectId}" could not be resolved in
          central memory.
        </p>
        <button
          onClick={onClose}
          className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary text-white cursor-pointer transition-colors"
        >
          Return to Hub
        </button>
      </div>
    );
  }

  return (
    <div className="project-details-container min-h-screen bg-background text-foreground relative overflow-hidden tech-grid pb-24">
      {/* Global Background Ambient Glow Lights */}
      <div
        className={`fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b ${project.glow} rounded-full blur-[140px] pointer-events-none z-0`}
      />

      {/* Futuristic Floating Navigation Header */}
      <header className="sticky top-6 z-50 max-w-5xl mx-auto px-4 sm:px-6 mb-16">
        <div className="p-2.5 sm:p-3 bg-[#090d16]/80 backdrop-blur-xl border border-white/5 rounded-2xl flex items-center justify-between shadow-2xl">
          <motion.button
            whileHover={{
              scale: 1.08,
              x: -4,
              boxShadow: "0 0 20px rgba(59,130,246,0.3)",
            }}
            whileTap={{ scale: 0.93 }}
            onClick={onClose}
            className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-primary hover:border-primary/60 font-mono text-[10px] sm:text-xs uppercase cursor-pointer transition-all duration-300"
          >
            <ArrowLeft size={12} className="text-primary" />
            System Hub
          </motion.button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block px-3 py-1 bg-white/5 rounded-lg border border-white/5 text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">
              Walkthrough Mode
            </span>
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-neon-emerald" />
            <span className="text-xs font-black text-white font-mono uppercase tracking-wider">
              {project.name}
            </span>
          </div>
        </div>
      </header>

      {/* Hero Welcome Block */}
      <section className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl text-center mb-24 mt-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6 font-mono inline-flex items-center gap-1.5"
        >
          {project.type === "web" ? (
            <Globe size={12} />
          ) : (
            <Smartphone size={12} />
          )}
          {project.category}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-extrabold font-outfit text-white tracking-tight leading-none mb-6"
        >
          Project <span className="text-gradient-primary">{project.name}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
        >
          {project.description}
        </motion.p>
      </section>

      {/* alternating sections walkthrough */}
      <div className="space-y-36 relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {project.screens.map((screen: ScreenData, idx: number) => {
          const isLeft = screen.variant === "left";

          return (
            <section
              key={idx}
              className={`flex flex-col gap-12 lg:gap-20 items-center justify-between ${
                isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-[45%] text-left"
              >
                {screen.heading && (
                  <h3 className="text-2xl md:text-4xl font-extrabold font-outfit text-white mb-6 tracking-tight">
                    {screen.heading}
                  </h3>
                )}

                <div className="bg-[#030712]/50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 backdrop-blur-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />
                  <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light font-outfit">
                    {screen.description}
                  </p>

                  {/* Cyber telemetry footprint */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Terminal
                        size={10}
                        className="text-primary animate-pulse"
                      />
                      SECURE_RENDER_FOOTPRINT
                    </span>
                    <span>FRAME_0{idx + 1} // OK</span>
                  </div>
                </div>
              </motion.div>

              {/* Mockup Frame Screen Side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-[50%] flex justify-center"
              >
                {/* Direct Image Display - No Frames */}
                <Magnet padding={70} magnetStrength={2.8}>
                  <img
                    src={screen.image}
                    alt={screen.heading || project.name}
                    className="w-full max-w-3xl h-auto object-contain group-hover:scale-[1.02] transition-transform duration-700 rounded-2xl shadow-2xl"
                    loading="lazy"
                    decoding="async"
                  />
                </Magnet>
              </motion.div>
            </section>
          );
        })}
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
    </div>
  );
};
