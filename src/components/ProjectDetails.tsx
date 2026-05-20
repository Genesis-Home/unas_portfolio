import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Smartphone, Globe, Terminal, ShieldAlert } from "lucide-react";

// Import all local PortfolioData files
import InspeCasa from "./PortfolioData/InspeCasa";
import MysturaData from "./PortfolioData/MysturaData";
import REELConnect from "./PortfolioData/REELConnect";
import Finsusu from "./PortfolioData/Finsusu";
import TaxiCaller from "./PortfolioData/TaxiCaller";
import CareConnect from "./PortfolioData/CareConnect";
import PakistanBooking from "./PortfolioData/PakistanBooking";

interface ScreenData {
  type: "mobile" | "laptop";
  variant: "left" | "right";
  heading: string;
  description: string;
  image: string;
  bgImage: string;
  hero?: boolean;
}

const dataMap: Record<string, ScreenData[]> = {
  "1": InspeCasa as ScreenData[],
  "2": MysturaData as ScreenData[],
  "3": REELConnect as ScreenData[],
  "4": Finsusu as ScreenData[],
  "5": TaxiCaller as ScreenData[],
  "6": CareConnect as ScreenData[],
  "7": PakistanBooking as ScreenData[],
};

const projectMeta: Record<
  string,
  { name: string; category: string; description: string; glow: string; type: "web" | "mobile" }
> = {
  "1": {
    name: "InspeCasa",
    category: "Web Application UI",
    description: "Property Inspections & Compliance Verification Core",
    glow: "from-emerald-500/20 to-teal-500/20",
    type: "web"
  },
  "2": {
    name: "MYSUTRA",
    category: "Web Service Platform",
    description: "Distributed Identity Mapping & Legacy Services Engine",
    glow: "from-amber-500/20 to-orange-500/20",
    type: "web"
  },
  "3": {
    name: "REELConnect",
    category: "Web Networking System",
    description: "Film Industry Creative Social & Casting Operations Hub",
    glow: "from-violet-500/20 to-fuchsia-500/20",
    type: "web"
  },
  "4": {
    name: "Finsusu",
    category: "Mobile Application",
    description: "Algorithmic Micro-Savings & Personal Financial Intelligence",
    glow: "from-emerald-500/20 to-cyan-500/20",
    type: "mobile"
  },
  "5": {
    name: "Taxi Caller",
    category: "Mobile Dispatch Software",
    description: "Geospatial Ride Matching & Driver Coordination Network",
    glow: "from-yellow-500/20 to-amber-500/20",
    type: "mobile"
  },
  "6": {
    name: "Care Connect",
    category: "Mobile Health Platform",
    description: "HIPAA-Compliant Video Telehealth & Encrypted EHR Conduit",
    glow: "from-blue-500/20 to-indigo-500/20",
    type: "mobile"
  },
  "7": {
    name: "Pakistan Booking",
    category: "Web Reservation Core",
    description: "Centralized Hospitality Inventory & Regional Booking Ingress",
    glow: "from-emerald-500/20 to-green-500/20",
    type: "web"
  },
};

interface ProjectDetailsProps {
  projectId: string;
  onClose: () => void;
}

export function ProjectDetails({ projectId, onClose }: ProjectDetailsProps) {
  const screens = dataMap[projectId];
  const meta = projectMeta[projectId];

  // Auto-scroll to top when screen loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectId]);

  if (!screens || !meta) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center p-8">
        <ShieldAlert size={64} className="text-rose-500 mb-6 animate-pulse" />
        <h2 className="text-3xl font-bold font-outfit text-white mb-2">Systems Pipeline Fault</h2>
        <p className="text-slate-400 mb-8 max-w-md">Project data node with ID "{projectId}" could not be resolved in central memory.</p>
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
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden tech-grid pb-24">
      {/* Global Background Ambient Glow Lights */}
      <div className={`fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b ${meta.glow} rounded-full blur-[140px] pointer-events-none z-0`} />

      {/* Futuristic Floating Navigation Header */}
      <header className="sticky top-6 z-50 max-w-5xl mx-auto px-6 mb-16">
        <div className="p-3 bg-[#090d16]/80 backdrop-blur-xl border border-white/5 rounded-2xl flex items-center justify-between shadow-2xl">
          <motion.button
            whileHover={{ scale: 1.05, x: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white font-mono text-xs uppercase cursor-pointer hover:border-primary/40 hover:shadow-neon-blue/20 transition-all duration-300"
          >
            <ArrowLeft size={14} className="text-primary" />
            System Hub
          </motion.button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block px-3 py-1 bg-white/5 rounded-lg border border-white/5 text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">
              Walkthrough Mode
            </span>
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-neon-emerald" />
            <span className="text-xs font-black text-white font-mono uppercase tracking-wider">{meta.name}</span>
          </div>
        </div>
      </header>

      {/* Hero Welcome Block */}
      <section className="container mx-auto px-6 relative z-10 max-w-6xl text-center mb-24 mt-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6 font-mono inline-flex items-center gap-1.5"
        >
          {meta.type === "web" ? <Globe size={12} /> : <Smartphone size={12} />}
          {meta.category}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-7xl font-extrabold font-outfit text-white tracking-tight leading-none mb-6"
        >
          Project <span className="text-gradient-primary">{meta.name}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
        >
          {meta.description}
        </motion.p>
      </section>

      {/* alternating sections walkthrough */}
      <div className="space-y-36 relative z-10 max-w-6xl mx-auto px-6">
        {screens.map((screen, idx) => {
          const isLaptop = screen.type === "laptop";
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
                
                <div className="bg-[#030712]/50 p-6 rounded-2xl border border-white/5 backdrop-blur-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light font-outfit">
                    {screen.description}
                  </p>
                  
                  {/* Cyber telemetry footprint */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Terminal size={10} className="text-primary animate-pulse" />
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
                {isLaptop ? (
                  /* GORGEOUS HIGH-FIDELITY MACBOOK FRAME MOCKUP */
                  <div className="w-full max-w-[520px] relative group">
                    {/* Shadow & Glow */}
                    <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    {/* MacBook Bezel */}
                    <div className="bg-[#0c101b] border-2 border-white/10 rounded-2xl p-3 shadow-2xl relative overflow-hidden group-hover:border-primary/30 transition-colors duration-300">
                      {/* Glossy Screen Reflection Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none z-10" />
                      
                      {/* Actual Screen Image */}
                      <div className="aspect-[16/10] bg-[#02050a] rounded-lg overflow-hidden relative border border-black/40">
                        <img
                          src={screen.image}
                          alt={screen.heading || meta.name}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                        />
                      </div>
                    </div>
                    {/* Metal base hinge */}
                    <div className="h-2 w-[90%] mx-auto bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-b-xl border-t border-black" />
                  </div>
                ) : (
                  /* GORGEOUS HIGH-FIDELITY IPHONE FRAME MOCKUP */
                  <div className="w-full max-w-[280px] relative group">
                    {/* Shadow & Glow */}
                    <div className="absolute inset-0 bg-accent/15 rounded-[48px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    {/* iPhone body frame */}
                    <div className="w-full aspect-[9/19.5] bg-[#05070c] border-[5px] border-slate-800 rounded-[44px] shadow-2xl p-2 relative overflow-hidden group-hover:border-accent/40 transition-colors duration-300">
                      {/* Physical Camera Notch (Dynamic Island) */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#000] rounded-full z-20 flex items-center justify-end px-3">
                        <div className="w-1.5 h-1.5 bg-slate-900 rounded-full border border-slate-950" />
                      </div>
                      
                      {/* Screen reflection */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent rounded-[38px] pointer-events-none z-10" />
                      
                      {/* Screen Content */}
                      <div className="w-full h-full bg-[#020408] rounded-[36px] overflow-hidden border border-black/60 relative">
                        <img
                          src={screen.image}
                          alt={screen.heading || meta.name}
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                        />
                      </div>
                      
                      {/* Home Indicator Bar */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-20" />
                    </div>
                  </div>
                )}
              </motion.div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
