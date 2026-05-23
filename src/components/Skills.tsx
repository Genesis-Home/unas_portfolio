import { motion } from "framer-motion";
import { TiltedCard } from "./TiltedCard";
import {
  Layers,
  Terminal,
  Database,
  Cloud,
  Brain,
  Smartphone,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 14,
    },
  },
};

const skillCategories = [
  {
    title: "Web Architecture",
    tagline: "System UI Core",
    icon: <Layers className="text-blue-400" size={20} />,
    skills: [
      "React",
      "Next.js",
      "Angular",
      "Tailwind CSS",
      "Redux Toolkit",
      "HTML5 / CSS3",
      "WebGL / Three.js",
    ],
    glowColor: "rgba(59, 130, 246, 0.2)", // Blue
  },
  {
    title: "Mobile Architecture",
    tagline: "Cross-Platform Hubs",
    icon: <Smartphone className="text-rose-400" size={20} />,
    skills: [
      "React Native",
      "Flutter Core",
      "Cross-Platform Dev",
      "iOS Deployment",
      "Android Sync",
      "Mobile State Sync",
      "Offline Storage",
    ],
    glowColor: "rgba(244, 63, 94, 0.2)", // Rose
  },
  {
    title: "Backend & Systems",
    tagline: "High-Throughput Core",
    icon: <Terminal className="text-violet-400" size={20} />,
    skills: [
      "Node.js",
      "NestJS",
      "Python / Django",
      "PHP",
      "Java Core",
      "ASP.NET Core",
      "Redis Caching",
      "RESTful APIs",
    ],
    glowColor: "rgba(139, 92, 246, 0.2)", // Purple
  },
  {
    title: "Databases & Sync",
    tagline: "Event Streaming & Storage",
    icon: <Database className="text-emerald-400" size={20} />,
    skills: [
      "PostgreSQL",
      "SQL Optimization",
      "MongoDB",
      "Elasticsearch",
      "Apache Kafka",
      "Distributed Sync",
      "ACID Transactions",
    ],
    glowColor: "rgba(16, 185, 129, 0.2)", // Green
  },
  {
    title: "Cloud & DevOps",
    tagline: "High-Availability Edge",
    icon: <Cloud className="text-amber-400" size={20} />,
    skills: [
      "AWS Services",
      "Azure Cloud",
      "GCP Platform",
      "Docker Containers",
      "Kubernetes Clusters",
      "Microservices Architecture",
      "CI/CD Pipelines",
      "Git / Version Control",
    ],
    glowColor: "rgba(245, 158, 11, 0.2)", // Amber
  },
  {
    title: "AI/ML & Data Science",
    tagline: "Predictive Intelligence",
    icon: <Brain className="text-indigo-400" size={20} />,
    skills: [
      "TensorFlow",
      "Pandas Library",
      "NumPy Module",
      "OpenCV Computer Vision",
      "Generative AI",
      "Predictive Modeling",
      "Data Science Pipelines",
    ],
    glowColor: "rgba(99, 102, 241, 0.2)", // Indigo
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-32 bg-background relative overflow-hidden tech-grid"
    >
      <div className="absolute inset-0 tech-radial-glow pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6 font-mono"
          >
            ENGINEERING CAPABILITIES
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-extrabold font-outfit text-white text-center">
            Integrated <span className="text-gradient-primary">Tech Stack</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-linear-to-r from-primary to-accent mt-8 rounded-full"
          />
        </div>

        {/* Certification Highlight Pod */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-20 p-4 sm:p-6 rounded-3xl bg-[#090d16]/80 border border-amber-500/25 hover:border-amber-500/50 shadow-lg shadow-amber-500/5 backdrop-blur-xl transition-all duration-300 flex flex-col sm:flex-row items-center gap-6 text-left"
        >
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_12px_rgba(245,158,11,0.15)]">
            <span className="text-2xl font-black font-outfit select-none">
              AI
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500 shadow-[0_0_6px_#f59e0b]"></span>
              </span>
              <span className="text-[9px] font-mono text-amber-400 uppercase tracking-widest font-bold">
                ACTIVE ENGINEERING CREDENTIAL
              </span>
            </div>
            <h4 className="text-lg font-black text-white font-outfit">
              AI Fluent Tech Professional
            </h4>
            <p className="text-slate-400 text-xs mt-1 leading-relaxed">
              Certified by{" "}
              <span className="text-amber-400 font-bold">Calyptus (2026)</span>.
              Proven capability in advanced LLM prompt engineering, agentic
              systems deployment, neural network libraries integration, and
              generative model engineering.
            </p>
          </div>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="h-full">
              <TiltedCard glowColor={category.glowColor} className="h-full">
                <div className="p-4 sm:p-8 h-full flex flex-col justify-between relative overflow-hidden rounded-[30px] sm:rounded-[40px] bg-[#090d16]/70 border border-white/5">
                  {/* Floating Graphic Indicator */}
                  <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-[0.06] transition-opacity select-none pointer-events-none">
                    <span className="text-9xl font-black text-white leading-none">
                      {idx + 1}
                    </span>
                  </div>

                  <div>
                    {/* Header Pod */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                        {category.icon}
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-bold text-white font-outfit leading-snug">
                          {category.title}
                        </h3>
                        <span className="text-[8px] font-bold text-primary font-mono uppercase tracking-widest leading-none">
                          {category.tagline}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2 mt-4 justify-start">
                    {category.skills.map((skill, sIdx) => (
                      <motion.span
                        key={sIdx}
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.96 }}
                        className="px-3 py-1.5 rounded-xl text-[10px] font-bold font-mono border border-white/5 bg-white/5 text-slate-400 hover:border-primary/50 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer text-left leading-none"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </TiltedCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
