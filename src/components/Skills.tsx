import { motion } from 'framer-motion';
import { TiltedCard } from './TiltedCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    glowColor: "rgba(37, 99, 235, 0.2)" // Blue
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Python", "Express.js", "NestJS", "Django", "FastAPI", "REST APIs", "GraphQL"],
    glowColor: "rgba(124, 58, 237, 0.2)" // Purple
  },
  {
    title: "Database & Storage",
    skills: ["PostgreSQL", "SQL", "MongoDB", "Redis", "Elasticsearch"],
    glowColor: "rgba(16, 185, 129, 0.2)" // Green
  },
  {
    title: "Data Science & ML",
    skills: ["TensorFlow", "pandas", "NumPy", "OpenCV"],
    glowColor: "rgba(245, 158, 11, 0.2)" // Amber
  },
  {
    title: "DevOps & Cloud",
    skills: ["AWS", "Docker", "Git", "CI/CD", "GCP"],
    glowColor: "rgba(244, 63, 94, 0.2)" // Rose
  },
  {
    title: "Testing & QA",
    skills: ["Jest", "Cypress", "Selenium", "Unit Testing", "Integration Testing"],
    glowColor: "rgba(79, 70, 229, 0.2)" // Indigo
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            Capabilities
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-extrabold font-outfit text-slate-900 text-center">
            Integrated <span className="text-gradient-primary">Tech Stack</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary mt-8 rounded-full"
          ></motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <TiltedCard glowColor={category.glowColor} className="h-full">
                <div className="p-8 h-full flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                    <span className="text-9xl font-black text-slate-900 leading-none">{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-8 font-outfit">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2.5 mt-auto">
                    {category.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-4 py-2 rounded-2xl text-[11px] font-bold border border-slate-100 bg-white/60 text-slate-600 hover:border-primary/40 hover:text-primary transition-all duration-300"
                      >
                        {skill}
                      </span>
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
}
