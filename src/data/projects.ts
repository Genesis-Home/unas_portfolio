import InspeCasaScreens from "../components/PortfolioData/InspeCasa";
import MysturaScreens from "../components/PortfolioData/MysturaData";
import REELConnectScreens from "../components/PortfolioData/REELConnect";
import FinsususScreens from "../components/PortfolioData/Finsusu";
import TaxiCallerScreens from "../components/PortfolioData/TaxiCaller";
import CareConnectScreens from "../components/PortfolioData/CareConnect";
import PakistanBookingScreens from "../components/PortfolioData/PakistanBooking";

export interface Metric {
  label: string;
  value: string;
}

export interface PipelineStep {
  node: string;
  note: string;
}

export interface ScreenData {
  type: "mobile" | "laptop";
  variant: "left" | "right";
  heading: string;
  description: string;
  image: string;
  bgImage: string;
  hero?: boolean;
}

export interface Project {
  id?: string;
  title: string;
  category: "web" | "mobile";
  subtitle: string;
  detailedCategory: string;
  description: string;
  metrics: Metric[];
  tech: string[];
  glowColor: string;
  glowGradient: string;
  iconName: string;
  url: string;
  image: string;
  flow: PipelineStep[];
  screens?: ScreenData[];
}

export const projectsList: Project[] = [
  {
    title: "Waabi",
    category: "web",
    subtitle: "Autonomous Trucking & Physical AI Platform",
    detailedCategory: "Autonomous Mobility Platform",
    description:
      "A flagship corporate platform for Waabi's generative AI-powered autonomous driving technology. Features immersive product storytelling for Waabi Driver and Waabi World simulation, investor-grade content delivery, and high-performance media pipelines for autonomous trucking and robotaxi showcases.",
    metrics: [
      { label: "Capital Raised", value: "$1B+ Series" },
      { label: "Key Partners", value: "Uber / NVIDIA / Volvo" },
      { label: "Deployment", value: "Highway + Streets" },
    ],
    tech: ["Next.js", "React", "TypeScript", "DatoCMS", "GSAP", "TailwindCSS"],
    glowColor: "rgba(59, 130, 246, 0.25)",
    glowGradient: "from-blue-500/20 to-sky-500/20",
    iconName: "Cpu",
    url: "https://waabi.ai/",
    image: "/waabi.jpg",
    flow: [
      { node: "Marketing Frontend", note: "Next.js SSR" },
      { node: "Headless CMS", note: "DatoCMS Content API" },
      { node: "Media Pipeline", note: "Adaptive Video / CDN" },
      { node: "Motion Layer", note: "GSAP Scroll Scenes" },
      { node: "Edge Delivery", note: "Global Cache Network" },
    ],
  },
  {
    title: "NextSense",
    category: "web",
    subtitle: "Neurotech E-Commerce & Sleep Wellness Platform",
    detailedCategory: "Health & Neurotechnology Platform",
    description:
      "A premium e-commerce and brand experience platform for NextSense smart EEG earbuds. Showcases real-time brain-reading wearables with clinically validated sleep optimization, integrated checkout, subscription flows, and immersive product storytelling.",
    metrics: [
      { label: "Verified Users", value: "2,847+ Active" },
      { label: "Deep Sleep Gain", value: "Up to 2x" },
      { label: "EEG Sampling", value: "1,000 Hz" },
    ],
    tech: ["Shopify", "React", "Liquid", "Node.js", "Stripe", "TailwindCSS"],
    glowColor: "rgba(139, 92, 246, 0.25)",
    glowGradient: "from-violet-500/20 to-indigo-500/20",
    iconName: "Activity",
    url: "https://nextsense.io/",
    image: "/nextsense.png",
    flow: [
      { node: "Storefront UI", note: "Shopify + React" },
      { node: "Product Catalog", note: "Smartbuds & Accessories" },
      { node: "Checkout Engine", note: "Stripe / Shop Pay" },
      { node: "Subscription Layer", note: "Trial & Warranty Logic" },
      { node: "Analytics Tier", note: "Clinical Data Reporting" },
    ],
  },
  {
    title: "USA Home Listings",
    category: "web",
    subtitle: "Lead Gen & Marketing Automation Platform",
    detailedCategory: "Marketing Technology Platform",
    description:
      "Developed a real-time lead generation and marketing automation platform for moving companies featuring verified homeowner data, AI-based vacancy filtering, and automated outreach campaigns to improve lead quality.",
    metrics: [
      { label: "Supported Orgs", value: "500+ Companies" },
      { label: "Database Scale", value: "10M+ Listings" },
      { label: "System SLA", value: "99.99% Uptime" },
    ],
    tech: ["React", "Node.js", "Django", "Python", "Stripe API", "PostgreSQL"],
    glowColor: "rgba(59, 130, 246, 0.25)",
    glowGradient: "from-blue-500/20 to-cyan-500/20",
    iconName: "Server",
    url: "https://www.usahomelistings.com",
    image: "/why-choose-us-image-1.png",
    flow: [
      { node: "React Dashboard", note: "Search & Export" },
      { node: "RESTful Workflows", note: "Lead Management" },
      { node: "AI Recommendation", note: "Collaborative Filter" },
      { node: "Outreach Engine", note: "Direct Mail / Email" },
      { node: "Data Tier", note: "PostgreSQL Sync" },
    ],
  },
  {
    id: "1",
    title: "InspeCasa",
    category: "mobile",
    subtitle: "Property & Inspection Management System",
    detailedCategory: "Web Application UI",
    description:
      "A high-performance property audit and digital inspection platform. Streamlines building walkthroughs, automates compliance reporting, and manages offline-first data capture for auditors.",
    metrics: [
      { label: "Audits Run", value: "250k+ Done" },
      { label: "Report Gen", value: "< 2.5s" },
      { label: "Sync Reliability", value: "100.0% ACID" },
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "MongoDB",
      "AWS S3",
    ],
    glowColor: "rgba(16, 185, 129, 0.25)",
    glowGradient: "from-emerald-500/20 to-teal-500/20",
    iconName: "Cpu",
    url: "https://appmash.org/",
    image: "/project-1.png",
    flow: [
      { node: "Audit Portal", note: "Auditor Interface" },
      { node: "Offline Store", note: "IndexedDB Cache" },
      { node: "Ingress Gateway", note: "Node.js REST API" },
      { node: "PDF Engine", note: "Dynamic Report Gen" },
      { node: "Storage Layer", note: "MongoDB & S3" },
    ],
    screens: InspeCasaScreens as ScreenData[],
  },
  {
    id: "3",
    title: "REELConnect",
    category: "mobile",
    subtitle: "Film Production & Social Networking",
    detailedCategory: "Web Networking System",
    description:
      "A social hub and collaboration platform tailored for filmmakers, cast, and crew. Facilitates role matching, production portfolio showcases, and real-time community chat.",
    metrics: [
      { label: "Active Crew", value: "12k+ Members" },
      { label: "Match Speed", value: "< 50ms" },
      { label: "Daily Messages", value: "100k+ Sent" },
    ],
    tech: ["React", "Redux", "WebSockets", "Node.js", "GraphQL", "PostgreSQL"],
    glowColor: "rgba(139, 92, 246, 0.25)",
    glowGradient: "from-violet-500/20 to-fuchsia-500/20",
    iconName: "Database",
    url: "https://appmash.org/",
    image: "/project-3.png",
    flow: [
      { node: "Media Showcase", note: "Dynamic Reel Feed" },
      { node: "GraphQL Endpoint", note: "Optimized Schema" },
      { node: "WebSocket Hub", note: "Real-Time Messaging" },
      { node: "Matching Engine", note: "Crew Recommendation" },
      { node: "Database Store", note: "Postgres Replica" },
    ],
    screens: REELConnectScreens as ScreenData[],
  },
  {
    id: "2",
    title: "MYSUTRA",
    category: "mobile",
    subtitle: "Identity Mapping & Legacy Platform",
    detailedCategory: "Web Service Platform",
    description:
      "An enterprise-grade services ecosystem and secure identity mapping tool, providing advanced digital verification, custom workflows, and decentralized metadata management.",
    metrics: [
      { label: "Users Verified", value: "50k+ Active" },
      { label: "Token Match", value: "0% Collision" },
      { label: "SLA Guarantee", value: "99.95% SLA" },
    ],
    tech: ["React", "TypeScript", "NestJS", "Kafka", "Redis Cache", "Docker"],
    glowColor: "rgba(245, 158, 11, 0.25)",
    glowGradient: "from-amber-500/20 to-orange-500/20",
    iconName: "Activity",
    url: "https://appmash.org/",
    image: "/project-2.png",
    flow: [
      { node: "Auth Gateway", note: "JWT / OAuth2" },
      { node: "Verify Engine", note: "NestJS Service" },
      { node: "Event Stream", note: "Kafka Broker" },
      { node: "Fast Storage", note: "Redis Cache" },
      { node: "Relational Tier", note: "Postgres Storage" },
    ],
    screens: MysturaScreens as ScreenData[],
  },
  {
    id: "7",
    title: "Pakistan Booking",
    category: "web",
    subtitle: "Travel Reservation & Hotel System",
    detailedCategory: "Web Reservation Core",
    description:
      "A centralized travel booking, reservation, and management platform for stays, destinations, and rental properties across Pakistan, featuring live inventory and fast queries.",
    metrics: [
      { label: "Stays Listed", value: "1,200+ Hotels" },
      { label: "Search Latency", value: "< 80ms" },
      { label: "Total Bookings", value: "80k+ Completed" },
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
    glowColor: "rgba(16, 185, 129, 0.25)",
    glowGradient: "from-emerald-500/20 to-green-500/20",
    iconName: "Server",
    url: "https://appmash.org/",
    image: "/booking system.png",
    flow: [
      { node: "Web Frontend", note: "React / Vite App" },
      { node: "Geo Filter API", note: "Filtered Search" },
      { node: "Reserve Handler", note: "ACID Booking Transaction" },
      { node: "Payment Ingress", note: "Easypaisa & JazzCash" },
      { node: "SMS Dispatcher", note: "Auto Reservation OTP" },
    ],
    screens: PakistanBookingScreens as ScreenData[],
  },
  {
    id: "4",
    title: "Finsusu",
    category: "mobile",
    subtitle: "Micro-Savings & Personal Finance App",
    detailedCategory: "Mobile Application",
    description:
      "A modern, gamified personal finance and micro-savings mobile application. Features auto-saves, custom saving pools, and secure banking-grade integrations to build smart financial habits.",
    metrics: [
      { label: "Avg. Savings", value: "+22% / User" },
      { label: "Bank Sync", value: "< 250ms" },
      { label: "App Store Rating", value: "4.9 / 5.0" },
    ],
    tech: [
      "React Native",
      "Expo",
      "Redux Toolkit",
      "Node.js",
      "Plaid API",
      "PostgreSQL",
    ],
    glowColor: "rgba(16, 185, 129, 0.25)",
    glowGradient: "from-emerald-500/20 to-cyan-500/20",
    iconName: "Smartphone",
    url: "https://appmash.org/",
    image: "/finsusu.png",
    flow: [
      { node: "Mobile Frontend", note: "React Native UI" },
      { node: "Plaid Integration", note: "Secure Bank Link" },
      { node: "Autosave Daemon", note: "Server-side Cron" },
      { node: "Ledger DB", note: "Double-Entry Postgres" },
      { node: "Push Notification", note: "Firebase (FCM)" },
    ],
    screens: FinsususScreens as ScreenData[],
  },
  {
    id: "5",
    title: "Taxi Caller",
    category: "web",
    subtitle: "Real-Time Ride Dispatching Engine",
    detailedCategory: "Mobile Dispatch Software",
    description:
      "A low-latency, cross-platform ride-hailing and dispatch application featuring high-frequency geospatial tracking, driver match protocols, and real-time mapping dashboards.",
    metrics: [
      { label: "Geo Match Speed", value: "< 1.2s Broadcast" },
      { label: "Active Network", value: "5k+ Drivers" },
      { label: "Location Accuracy", value: "< 2m Variance" },
    ],
    tech: [
      "React Native",
      "Expo",
      "Google Maps API",
      "Socket.io",
      "Node.js",
      "Redis",
    ],
    glowColor: "rgba(245, 158, 11, 0.25)",
    glowGradient: "from-yellow-500/20 to-amber-500/20",
    iconName: "Smartphone",
    url: "https://appmash.org/",
    image: "/taxicaller.png",
    flow: [
      { node: "Client Mobile UI", note: "React Native App" },
      { node: "Socket Gateway", note: "Socket.io Ingest" },
      { node: "Dispatch Engine", note: "Geospatial Matching" },
      { node: "Transit Tracker", note: "Redis Pub/Sub Sync" },
      { node: "Stripe Ledger", note: "Double-Entry Checkout" },
    ],
    screens: TaxiCallerScreens as ScreenData[],
  },
  {
    id: "6",
    title: "Care Connect",
    category: "web",
    subtitle: "HIPAA Compliant Telehealth Portal",
    detailedCategory: "Mobile Health Platform",
    description:
      "A highly secure mobile healthcare application supporting encrypted video consultations, patient medical history tracking, digital prescriptions, and direct clinic integrations.",
    metrics: [
      { label: "Video Latency", value: "< 120ms Agora" },
      { label: "Provider Panel", value: "1.5k+ MDs" },
      { label: "Security Standard", value: "100% HIPAA" },
    ],
    tech: [
      "React Native",
      "Tailwind Native",
      "Agora RTC",
      "Express",
      "Node.js",
      "MongoDB",
    ],
    glowColor: "rgba(59, 130, 246, 0.25)",
    glowGradient: "from-blue-500/20 to-indigo-500/20",
    iconName: "Smartphone",
    url: "https://appmash.org/",
    image: "/careconnect.png",
    flow: [
      { node: "Patient Video App", note: "Agora Consult Platform" },
      { node: "Signaling Server", note: "WebSockets Connect" },
      { node: "Prescription Gen", note: "Express API -> PDF Mail" },
      { node: "EHR Ingress", note: "Secure Patient Sync" },
      { node: "Database Storage", note: "MongoDB Encrypted" },
    ],
    screens: CareConnectScreens as ScreenData[],
  },
];

export const getWebProjects = () =>
  projectsList.filter((p) => p.category === "web");
export const getMobileProjects = () =>
  projectsList.filter((p) => p.category === "mobile");
export const getProjectById = (id: string) =>
  projectsList.find((p) => p.id === id);
