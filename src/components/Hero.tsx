import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { SplitText } from "./SplitText";
import { ShinyText } from "./ShinyText";
import Waves from "./Waves";
import unasImage from "../assets/unas_profile.png";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background tech-grid"
    >
      {/* Radial Theme Glow */}
      <div className="absolute inset-0 tech-radial-glow pointer-events-none z-0" />
      <div className="absolute inset-0 tech-radial-glow-violet pointer-events-none z-0" />

      {/* Cyberpunk Tech Waves Background */}
      <Waves
        lineColor="rgba(59, 130, 246, 0.08)"
        backgroundColor="transparent"
        waveSpeedX={0.008}
        waveSpeedY={0.004}
        waveAmpX={25}
        waveAmpY={12}
      />

      {/* Dynamic Cursor Spotlight Blob */}
      {isMounted && (
        <motion.div
          className="absolute w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}

      <div className="container mx-auto px-6 z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center pt-28 pb-12">

        {/* Left Side: Professional Copy & Metrics */}
        <div className="flex flex-col justify-center order-1 relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Biometric Profile Tag Row */}
            <div className="flex items-center gap-5 mb-8">
              <div className="relative group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-30 blur-md group-hover:opacity-75 transition duration-500"></div>
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center bg-[#090d16]/80 p-0.5">
                  <img src={unasImage} alt="Syed Unas Systems Architect" className="w-full h-full object-cover rounded-[14px]" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#030712] flex items-center justify-center shadow-[0_0_8px_#10b981]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#030712] animate-pulse"></span>
                </div>
              </div>
              <div className="text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 shadow-sm backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-[0_0_6px_#3b82f6]"></span>
                  </span>
                  <ShinyText
                    text="Senior Systems Architect & Full-Stack Engineer"
                    className="text-[10px] font-bold uppercase tracking-widest text-slate-400"
                  />
                </div>
                <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mt-2 pl-1">
                  EDGE NODE: KATY-TX-77449 // SYNC_OK
                </p>
              </div>
            </div>

            {/* Impact Title */}
            <h1 className="text-5xl md:text-7xl font-black font-outfit mb-12 tracking-tight leading-[1.08] text-white">
              <SplitText
                text="I'm Syed Unas,"
                delay={40}
                className="text-white"
              />
            </h1>

            {/* Senior Core Pitch */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-slate-400 text-lg md:text-2xl max-w-xxl mb-16 leading-relaxed font-light"
            >
              A Senior Full-Stack Engineer & Systems Architect with <span className="text-primary font-bold">7+ years</span> of experience developing scalable enterprise solutions, real-time microservices, and AI/ML integrations across Real Estate, E-commerce, and Automotive domains.
            </motion.p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4 items-center mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              id="hero-action-contact"
              className="px-6 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-2xl font-bold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/45 transition-all duration-300 flex items-center gap-2.5"
            >
              <span>Initialize Connection</span>
              <span className="text-lg">→</span>
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1x5c6jODLmzYdqkSqke9oXYEmdS0gI7zM/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              id="hero-action-resume"
              className="px-6 py-4 bg-[#090d16]/80 hover:bg-[#3b82f6]/10 text-white border border-[#3b82f6]/30 hover:border-[#3b82f6]/70 rounded-2xl font-bold transition-all duration-300 shadow-md backdrop-blur-sm flex items-center gap-2.5 group"
            >
              <svg className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>View Resume</span>
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              id="hero-action-projects"
              className="px-6 py-4 bg-white/5 text-white border border-white/10 hover:border-primary/50 hover:bg-white/10 rounded-2xl font-bold transition-all duration-300 shadow-sm backdrop-blur-sm"
            >
              Inspect Deployments
            </motion.a>
          </motion.div>
          {/* Senior Telemetry Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-3 gap-4 mb-4 max-w-xl"
          >
            {[
              {
                label: "Total Experience",
                value: "7+ Years",
                color: "text-primary",
                shadow: "shadow-neon-blue",
              },
              {
                label: "System SLA",
                value: "99.99%",
                color: "text-emerald-400",
                shadow: "shadow-neon-emerald"
              },
              {
                label: "Companies Supported",
                value: "500+ Org",
                color: "text-violet-400",
                shadow: "shadow-neon-violet",
              },
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + i * 0.1, duration: 0.6 }}
                id={`hero-metric-${i}`}
                className={`group bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 hover:border-primary/40 transition-all duration-400 flex flex-col justify-between h-28 backdrop-blur-md`}
              >
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-none group-hover:text-primary transition-colors mb-2">
                  {metric.label}
                </p>
                <p
                  className={`text-xl font-black ${metric.color} leading-none group-hover:scale-105 transition-transform duration-300 origin-left`}
                >
                  {metric.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating Telemetry Terminal (Uncommented & Redesigned) */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="hidden xl:block absolute -left-36 bottom-6 w-72 bg-[#090d16]/95 rounded-2xl p-4 shadow-2xl border border-white/5 backdrop-blur-xl"
          >
            <div className="flex gap-1.5 mb-3 border-b border-white/5 pb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
              <span className="text-[8px] font-mono text-slate-500 ml-auto uppercase tracking-widest font-bold">system_daemon.sh</span>
            </div>
            <div className="font-mono text-[9px] space-y-1.5 text-slate-400 text-left">
              <p className="text-primary font-bold">$ nexus-cli telemetry --live</p>
              <p className="text-slate-500">Connecting node: katy-tx-edge-01...</p>
              <p className="text-violet-400">⚡ Distributed database sync: 100%</p>
              <p className="text-emerald-400">✓ Systems operational (Latency: 12ms)</p>
            </div>
          </motion.div> */}
        </div>

        {/* Right Side: Showcase Portrait Container (Replacing 3D Workspace Scene) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          className="relative w-full order-2 z-0 flex items-center justify-center py-6"
        >
          {/* Neon backlighting panels */}
          <div className="absolute w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0" />
          <div className="absolute w-[350px] h-[350px] bg-accent/10 rounded-full blur-[90px] pointer-events-none z-0" />

          {/* Premium Glassmorphic Frame with Unas's Actual Portrait */}
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[48px] overflow-hidden border border-white/10 bg-[#090d16]/80 p-3.5 shadow-2xl group z-10 backdrop-blur-xl">
            {/* Ambient Tech Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-accent/15 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 rounded-[48px] pointer-events-none" />

            {/* Floating Bezel Ambient Shadow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-accent rounded-[52px] blur-3xl opacity-10 group-hover:opacity-20 transition duration-1000" />

            {/* Inner Portrait Screen */}
            <div className="relative w-full h-full rounded-[36px] overflow-hidden border border-white/5 bg-[#030712]">
              <img
                src={unasImage}
                alt="Syed Unas - Senior Systems Architect & Full-Stack Engineer"
                className="w-full h-full object-cover scale-100 group-hover:scale-[1.04] transition-transform duration-[1200ms] ease-out"
              />

              {/* High-tech overlay filters */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />

              {/* Glowing horizontal scanline animation */}
              <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-40 shadow-[0_0_12px_#3b82f6] animate-[scanline_4s_linear_infinite] pointer-events-none" />
            </div>

            {/* Futuristic Tech Overlay HUD badges */}
            <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-2.5 z-20 text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-[#030712]/80 border border-white/10 shadow-lg backdrop-blur-md w-fit">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_6px_#10b981]"></span>
                </span>
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-slate-300">
                  SYSTEM STATUS: OPERATIONAL
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#030712]/85 border border-white/10 shadow-xl backdrop-blur-md">
                <p className="font-mono text-[8px] text-slate-500 uppercase tracking-widest leading-none mb-1.5 font-bold">CORE_ARCHITECT_IDENTITY</p>
                <h3 className="text-lg font-black text-white font-outfit leading-none mb-1">Syed Unas</h3>
                <p className="text-[10px] font-bold text-primary font-mono uppercase tracking-wider leading-none">Senior Full-Stack Engineer & Systems Architect</p>
              </div>
            </div>

            {/* Fine Corner Ornamental Brackets */}
            <div className="absolute top-7 left-7 w-5 h-5 border-t-2 border-l-2 border-primary/50 rounded-tl-sm pointer-events-none" />
            <div className="absolute top-7 right-7 w-5 h-5 border-t-2 border-r-2 border-primary/50 rounded-tr-sm pointer-events-none" />
            <div className="absolute bottom-7 left-7 w-5 h-5 border-b-2 border-l-2 border-primary/50 rounded-bl-sm pointer-events-none" />
            <div className="absolute bottom-7 right-7 w-5 h-5 border-b-2 border-r-2 border-primary/50 rounded-br-sm pointer-events-none" />
          </div>

          {/* Active Status Pod floating to the side */}
          <div className="hidden lg:block absolute top-[12%] -right-[3%] p-5 bg-[#090d16]/90 backdrop-blur-md rounded-2xl border border-white/5 shadow-2xl z-20 w-52 hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 text-left">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#3b82f6]"></div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                TELEMETRY LOG
              </span>
            </div>
            <div className="text-xs font-bold text-white mb-2 font-mono">
              AutoScaling Core Node
            </div>
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-3">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent"
                animate={{ width: ["0%", "92%"] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            </div>
            <div className="flex justify-between font-mono text-[8px] text-slate-500">
              <span>LOAD: OPTIMAL</span>
              <span>92% RESILIENCE</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Down Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer text-slate-500 hover:text-primary transition-colors z-20"
        onClick={() => {
          const target = document.getElementById("skills");
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[9px] uppercase tracking-[0.4em] mb-4 font-bold text-slate-500 font-mono">
          Inspect Infrastructure
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-1 h-8 rounded-full bg-white/5 border border-white/10 overflow-hidden"
        >
          <motion.div
            className="w-full h-1/2 bg-primary rounded-full shadow-[0_0_4px_#3b82f6]"
            animate={{ transform: ["translateY(0%)", "translateY(100%)"] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
