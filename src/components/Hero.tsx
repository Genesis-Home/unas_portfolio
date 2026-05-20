import { Canvas } from "@react-three/fiber";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Scene } from "./Scene";
import { SplitText } from "./SplitText";
import { ShinyText } from "./ShinyText";
import Waves from "./Waves";

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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-50"
    >
      {/* Background Animation from React Bits */}
      <Waves
        lineColor="rgba(30, 41, 59, 0.15)"
        backgroundColor="transparent"
        waveSpeedX={0.01}
        waveSpeedY={0.005}
        waveAmpX={30}
        waveAmpY={15}
      />

      {/* Dynamic Cursor Blob */}
      {isMounted && (
        <motion.div
          className="absolute w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none z-0"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}

      <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-16 items-center pt-24 pb-12">
        <div className="flex flex-col justify-center order-1 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-slate-100 shadow-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <ShinyText
                text="System Architect & Full-Stack Engineer"
                className="text-xs font-bold uppercase tracking-widest text-slate-600"
              />
            </div>

            <h1 className="text-6xl md:text-8xl font-black font-outfit mb-6 tracking-tight leading-[1.05] text-slate-950">
              <SplitText
                text="Engineering"
                delay={50}
                className="text-slate-950"
              />{" "}
              <br />
              <SplitText text="Future Proof" delay={80} className="" /> <br />
              <SplitText
                text="Scalability"
                delay={100}
                className="text-slate-950"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-slate-600 text-xl max-w-xl mb-12 leading-relaxed font-light"
            >
              I'm <span className="text-slate-950 font-bold">Syed Unas</span>, a
              Senior Full-Stack Engineer with 7+ years of experience building
              scalable enterprise solutions. Specialized in microservices
              architecture, AI/ML integration, and cloud technologies.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-5 items-center mb-12"
          >
            <a
              href="#contact"
              className="px-10 py-5 bg-primary text-white rounded-3xl font-bold hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20 flex items-center gap-3 hover:-translate-y-1"
            >
              Start Building
            </a>
            <a
              href="#experience"
              className="px-10 py-5 bg-white text-slate-800 border border-slate-200 rounded-3xl font-bold hover:bg-slate-50 transition-all hover:-translate-y-1 shadow-sm"
            >
              View Architecture
            </a>
          </motion.div>

          {/* New Dashboard Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12"
          >
            {[
              { label: "Latency", value: "18ms", color: "text-green-500" },
              { label: "Uptime", value: "99.9%", color: "text-blue-500" },
              {
                label: "Deployment",
                value: "Active",
                color: "text-indigo-500",
              },
            ].map((metric, i) => (
              <div
                key={i}
                className="bg-white/50 border border-slate-100 p-4 rounded-2xl"
              >
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                  {metric.label}
                </p>
                <p className={`text-lg font-black ${metric.color}`}>
                  {metric.value}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Floating Terminal (Simplified for Desktop) */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:block absolute -left-32 top-1/2 -translate-y-1/2 w-64 bg-slate-900 rounded-2xl p-4 shadow-2xl border border-white/10"
          >
            <div className="flex gap-1.5 mb-3">
              <div className="w-2 h-2 rounded-full bg-rose-500"></div>
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            </div>
            <div className="font-mono text-[10px] space-y-1 text-slate-400">
              <p className="text-primary">$ npm run deploy</p>
              <p>Fetching assets...</p>
              <p>Optimizing bundle...</p>
              <p className="text-emerald-400">✓ Deployment ready</p>
            </div>
          </motion.div> */}
        </div>

        {/* 3D Model Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="relative h-[450px] lg:h-[700px] w-full order-2 z-0 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-[60px] blur-3xl lg:blur-none"></div>

          <div className="w-full h-full min-h-[450px] relative">
            <Canvas
              camera={{ position: [0, 0, 8], fov: 45 }}
              className="w-full h-full"
            >
              <Scene />
            </Canvas>
          </div>

          {/* Dashboard Status Cards */}
          <div className="hidden lg:block absolute top-[15%] -right-[5%] p-5 bg-white/90 backdrop-blur-md rounded-3xl border border-slate-100 shadow-2xl z-20 w-48 hover:-translate-y-1 transition-transform">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Active Process
              </span>
            </div>
            <div className="text-xs font-bold text-slate-800 mb-2">
              Architecting Scale
            </div>
            <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                animate={{ width: ["0%", "85%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

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
        <span className="text-[10px] uppercase tracking-[0.4em] mb-4 font-bold text-slate-500">
          Inspect Architecture
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-1 h-8 rounded-full bg-slate-200 overflow-hidden"
        >
          <motion.div
            className="w-full h-1/2 bg-primary rounded-full"
            animate={{ transform: ["translateY(0%)", "translateY(100%)"] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
