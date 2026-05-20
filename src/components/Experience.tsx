import { motion } from "framer-motion";
import { Terminal, Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Muhammad Labs",
    role: "Senior Full-Stack Developer",
    period: "November 2024 - Present",
    description:
      "Delivering scalable enterprise solutions for Real Estate and Retail clients using React, Next.js, Node.js, Python, and cloud platforms (AWS, Azure). Implementing microservices architecture, RESTful APIs, and AI/ML capabilities to drive business efficiency.",
    achievements: [
      "Engineered real-time inventory management system with React, Node.js, and PostgreSQL for multi-warehouse tracking, reducing stockouts by 31% and optimizing supply chain operations",
      "Built cloud-based property management platform using React and NestJS with Stripe and Google Maps integration, reducing maintenance response time by 35% through modular API architecture",
      "Deployed event-driven analytics platform on AWS Lambda and Azure using Python (Pandas, Boto3), delivering real-time dashboards with Chart.js for sales insights and customer behavior analysis",
    ],
    color: "bg-blue-600",
    tech: ["React", "NestJS", "Node.js", "Python", "AWS", "Azure"],
  },
  {
    company: "Techneeqs",
    role: "Full-Stack Developer",
    period: "January 2021 - May 2024",
    description:
      "Architected enterprise-grade web solutions for global Automotive and E-commerce clients using React, TypeScript, Node.js, Python/Django, and PostgreSQL/MySQL databases.",
    achievements: [
      "Built a luxury e-commerce platform with React, TypeScript, and Node.js featuring member-only access, real-time inventory via WebSockets, and PostgreSQL-based loyalty system",
      "Developed automotive website with React, TypeScript, and Three.js including 3D vehicle configurator, Google Maps dealer locator, and Node.js backend for test drive bookings",
      "Designed a custom checkout system with React and Stripe API, implementing personalized pricing and AI-driven recommendations using Django and Python collaborative filtering",
    ],
    color: "bg-indigo-600",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Django",
      "Three.js",
      "PostgreSQL",
    ],
  },
  {
    company: "Freelance",
    role: "React & React Native Engineer",
    period: "January 2019 - November 2020",
    description:
      "Delivered cross-platform mobile applications for travel, fitness, and healthcare clients using React Native, JavaScript, and API integrations.",
    achievements: [
      "Developed reusable UI components and integrated third-party libraries, payment gateways, and APIs to enhance application scalability and performance",
      "Collaborated with cross-functional teams to implement features, conduct testing, and optimize user experience for enterprise-grade mobile applications across Android and iOS platforms",
    ],
    color: "bg-emerald-600",
    tech: ["React Native", "JavaScript", "REST APIs", "Redux"],
  },
  {
    company: "BluePeak Solutions",
    role: "React & React Native Intern",
    period: "July 2018 - November 2018",
    description:
      "Developed cross-platform web and mobile applications using React, React Native, JavaScript, and Redux. Integrated REST APIs and collaborated with senior developers.",
    achievements: [
      "Built reusable UI components and implemented new features based on design requirements, improving application responsiveness and user experience",
      "Conducted testing and debugging to ensure stable performance across Android and iOS platforms",
    ],
    color: "bg-slate-500",
    tech: ["React", "React Native", "JavaScript", "Redux"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 bg-slate-50 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm"
          >
            Operations Log
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-extrabold font-outfit text-slate-900 text-center">
            Professional <span className="text-gradient-primary">Timeline</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative mb-16 last:mb-0 group"
            >
              <div className="grid lg:grid-cols-[1fr_2.5fr] gap-8 bg-white p-8 md:p-12 rounded-[48px] border border-slate-200 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-primary/15 hover:border-primary/30 transition-all duration-500 group/card">
                <div className="flex flex-col">
                  <div
                    className={`w-14 h-14 ${exp.color} rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg`}
                  >
                    <Terminal size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2 font-outfit uppercase tracking-tight">
                    {exp.company}
                  </h3>
                  <p className="text-primary font-bold text-sm mb-4">
                    {exp.role}
                  </p>
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                    <Calendar size={12} />
                    {exp.period}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold rounded-lg border border-slate-100 uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 mb-8">
                    <div className="flex items-center gap-2 text-primary mb-3">
                      <Briefcase size={16} />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        Mission Briefing
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      {exp.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex gap-4 group/item">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/30 group-hover/item:bg-primary transition-colors shrink-0" />
                        <p className="text-slate-500 text-sm leading-relaxed group-hover/item:text-slate-800 transition-colors">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
