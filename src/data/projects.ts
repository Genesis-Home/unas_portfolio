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

export type ProjectCategory = "web" | "mobile" | "ai" | "cloud" | "backend";

export interface Project {
  id?: string;
  title: string;
  category: ProjectCategory;
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
    title: "Fossify Calendar",
    category: "mobile",
    subtitle: "Open-Source Privacy-First Calendar",
    detailedCategory: "Android Productivity App",
    description:
      "A privacy-respecting, ad-free open-source calendar for Android. Offers customizable views, recurring events, widgets, CalDAV sync, and material-you theming — engineered for offline reliability and zero tracking.",
    metrics: [
      { label: "Play Installs", value: "100K+ Active" },
      { label: "Privacy Score", value: "0 Trackers" },
      { label: "License", value: "GPL-3.0 OSS" },
    ],
    tech: ["Kotlin", "Android SDK", "Material 3", "CalDAV", "Room DB", "Jetpack"],
    glowColor: "rgba(245, 158, 11, 0.25)",
    glowGradient: "from-amber-500/20 to-orange-500/20",
    iconName: "Smartphone",
    url: "https://play.google.com/store/apps/details?id=org.fossify.calendar",
    image: "/fossify-calendar.png",
    flow: [
      { node: "Native UI", note: "Kotlin / Jetpack" },
      { node: "Local Store", note: "Room SQLite" },
      { node: "Sync Layer", note: "CalDAV Protocol" },
      { node: "Widget Engine", note: "Home Screen Glance" },
      { node: "Notification Bus", note: "AlarmManager Reminders" },
    ],
  },
  {
    title: "Fossify File Manager",
    category: "mobile",
    subtitle: "Open-Source Secure File Browser",
    detailedCategory: "Android System Utility",
    description:
      "An open-source, lightweight file management application for Android with deep system integration. Supports root browsing, secure file vaults, ZIP handling, and granular permission controls — all without ads or trackers.",
    metrics: [
      { label: "Play Installs", value: "100K+ Active" },
      { label: "User Rating", value: "4.1 / 5.0" },
      { label: "Privacy Score", value: "0 Trackers" },
    ],
    tech: ["Kotlin", "Android SDK", "Material 3", "Storage Access", "Jetpack", "Coroutines"],
    glowColor: "rgba(59, 130, 246, 0.25)",
    glowGradient: "from-blue-500/20 to-cyan-500/20",
    iconName: "Smartphone",
    url: "https://play.google.com/store/apps/details?id=org.fossify.filemanager",
    image: "/fossify-filemanager.png",
    flow: [
      { node: "Native UI", note: "Kotlin / Jetpack" },
      { node: "Storage Bridge", note: "Scoped Storage API" },
      { node: "Vault Engine", note: "AES Encrypted Folder" },
      { node: "Archive Module", note: "ZIP / RAR Handler" },
      { node: "Permission Tier", note: "Granular Access Control" },
    ],
  },
  {
    title: "Binary Eye",
    category: "mobile",
    subtitle: "QR & Barcode Scanner Toolkit",
    detailedCategory: "Android Scanner Utility",
    description:
      "A high-precision QR code and barcode scanning app for Android with offline ZXing recognition, bulk history tracking, custom code generation, and clipboard automation — built for developers and power users.",
    metrics: [
      { label: "User Rating", value: "4.8 / 5.0" },
      { label: "Scan Engine", value: "ZXing Offline" },
      { label: "Format Support", value: "20+ Codes" },
    ],
    tech: ["Kotlin", "Android SDK", "ZXing", "CameraX", "Coroutines", "Material 3"],
    glowColor: "rgba(16, 185, 129, 0.25)",
    glowGradient: "from-emerald-500/20 to-teal-500/20",
    iconName: "Smartphone",
    url: "https://play.google.com/store/apps/details?id=de.markusfisch.android.binaryeye",
    image: "/binaryeye.png",
    flow: [
      { node: "Camera Surface", note: "CameraX Pipeline" },
      { node: "Decode Engine", note: "ZXing Recognition" },
      { node: "History Store", note: "Local Room DB" },
      { node: "Generator Tier", note: "Custom Code Output" },
      { node: "Action Bus", note: "Clipboard / Share Sheet" },
    ],
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
  {
    title: "NeuroSense Predictive Engine",
    category: "ai",
    subtitle: "Retail Customer Behavior AI",
    detailedCategory: "Machine Learning Pipeline",
    description:
      "A production-grade predictive ML pipeline forecasting demand, churn, and personalized recommendations for retail clients. Built on TensorFlow and Pandas with collaborative-filtering and time-series ensemble models served via FastAPI microservices.",
    metrics: [
      { label: "Model Accuracy", value: "92.4% AUC" },
      { label: "Inference Time", value: "< 80ms" },
      { label: "Models Deployed", value: "14+ Live" },
    ],
    tech: ["TensorFlow", "Python", "Pandas", "NumPy", "FastAPI", "Docker"],
    glowColor: "rgba(99, 102, 241, 0.25)",
    glowGradient: "from-indigo-500/20 to-violet-500/20",
    iconName: "Cpu",
    url: "https://appmash.org/",
    image: "/why-choose-us-image-1.png",
    flow: [
      { node: "Data Ingestion", note: "ETL via Pandas" },
      { node: "Feature Store", note: "Versioned Vectors" },
      { node: "Model Trainer", note: "TensorFlow GPU" },
      { node: "Inference API", note: "FastAPI / Docker" },
      { node: "Monitoring", note: "Drift Detection" },
    ],
  },
  {
    title: "VisionGuard CV Pipeline",
    category: "ai",
    subtitle: "Computer Vision Quality Inspection",
    detailedCategory: "Real-Time Vision System",
    description:
      "An industrial-grade computer vision platform for manufacturing QA — detects micro-defects across assembly lines using OpenCV preprocessing and TensorFlow CNN inference, with edge deployment via ONNX.",
    metrics: [
      { label: "Defect Recall", value: "99.1% Catch" },
      { label: "Edge Inference", value: "< 50ms" },
      { label: "Throughput", value: "5k+ items/min" },
    ],
    tech: ["Python", "OpenCV", "TensorFlow", "ONNX", "Redis", "AWS SageMaker"],
    glowColor: "rgba(139, 92, 246, 0.25)",
    glowGradient: "from-violet-500/20 to-fuchsia-500/20",
    iconName: "Activity",
    url: "https://appmash.org/",
    image: "/why-choose-us-image-1.png",
    flow: [
      { node: "Camera Stream", note: "GStreamer Capture" },
      { node: "Pre-Processor", note: "OpenCV Pipeline" },
      { node: "CNN Inference", note: "TensorFlow + ONNX" },
      { node: "Alert Engine", note: "Redis Pub/Sub" },
      { node: "Dashboard", note: "Real-Time Grafana" },
    ],
  },
  {
    title: "PromptForge Agent Studio",
    category: "ai",
    subtitle: "LLM Prompt Engineering Workbench",
    detailedCategory: "Generative AI Platform",
    description:
      "A multi-agent orchestration platform for advanced LLM workflows — features prompt versioning, chained agent execution, evaluation harness, and token-cost telemetry. Built around the Calyptus AI Fluent methodology.",
    metrics: [
      { label: "Active Workflows", value: "200+ Live" },
      { label: "Token Savings", value: "38% Reduction" },
      { label: "Eval Runs", value: "50k+ Logged" },
    ],
    tech: ["Next.js", "TypeScript", "LangChain", "OpenAI API", "Pinecone", "PostgreSQL"],
    glowColor: "rgba(245, 158, 11, 0.25)",
    glowGradient: "from-amber-500/20 to-orange-500/20",
    iconName: "Cpu",
    url: "https://appmash.org/",
    image: "/why-choose-us-image-1.png",
    flow: [
      { node: "Prompt IDE", note: "Next.js Editor" },
      { node: "Agent Runtime", note: "LangChain Chains" },
      { node: "Vector Memory", note: "Pinecone Index" },
      { node: "Eval Harness", note: "Scored Test Suite" },
      { node: "Telemetry Tier", note: "Token / Cost Logs" },
    ],
  },
  {
    title: "CloudFleet Analytics Hub",
    category: "cloud",
    subtitle: "Serverless Event-Driven Analytics",
    detailedCategory: "Multi-Cloud Data Platform",
    description:
      "A serverless analytics platform deployed across AWS Lambda and Azure Functions, delivering real-time dashboards for sales insights and customer behavior. Uses Pandas and Boto3 for high-volume event processing.",
    metrics: [
      { label: "Events Processed", value: "12M+ / day" },
      { label: "Cold Start", value: "< 300ms" },
      { label: "Cost Reduction", value: "41% Saved" },
    ],
    tech: ["AWS Lambda", "Azure Functions", "Python", "Boto3", "DynamoDB", "Chart.js"],
    glowColor: "rgba(245, 158, 11, 0.25)",
    glowGradient: "from-amber-500/20 to-yellow-500/20",
    iconName: "Server",
    url: "https://appmash.org/",
    image: "/why-choose-us-image-1.png",
    flow: [
      { node: "Event Ingress", note: "API Gateway" },
      { node: "Lambda Workers", note: "Python Pandas" },
      { node: "Azure Functions", note: "Cross-Cloud Sync" },
      { node: "Storage Tier", note: "DynamoDB / Blob" },
      { node: "Dashboard", note: "Chart.js Live" },
    ],
  },
  {
    title: "KubeOrbit Cluster Manager",
    category: "cloud",
    subtitle: "GitOps Kubernetes Orchestrator",
    detailedCategory: "Container Orchestration",
    description:
      "A Kubernetes deployment automation platform with GitOps workflow — handles multi-cluster rollouts, canary releases, automated rollback, and integrated observability for enterprise-grade reliability.",
    metrics: [
      { label: "Clusters Managed", value: "25+ Live" },
      { label: "Deploy Time", value: "< 90s" },
      { label: "Cluster SLA", value: "99.99% Uptime" },
    ],
    tech: ["Kubernetes", "ArgoCD", "Helm", "Terraform", "Prometheus", "Grafana"],
    glowColor: "rgba(59, 130, 246, 0.25)",
    glowGradient: "from-blue-500/20 to-cyan-500/20",
    iconName: "Server",
    url: "https://appmash.org/",
    image: "/why-choose-us-image-1.png",
    flow: [
      { node: "Git Source", note: "Manifest Repo" },
      { node: "ArgoCD Sync", note: "Declarative Apply" },
      { node: "Helm Charts", note: "Templated Deploy" },
      { node: "Canary Engine", note: "Progressive Rollout" },
      { node: "Observability", note: "Prometheus + Grafana" },
    ],
  },
  {
    title: "EdgeForge CDN Architect",
    category: "cloud",
    subtitle: "Multi-Region Edge Delivery Layer",
    detailedCategory: "Edge Computing Network",
    description:
      "A globally distributed CDN orchestration platform with intelligent routing, image optimization at the edge, smart cache invalidation, and Worker-based dynamic responses for ultra-low-latency delivery.",
    metrics: [
      { label: "Edge POPs", value: "180+ Global" },
      { label: "Cache Hit Rate", value: "98.6%" },
      { label: "Time to Byte", value: "< 40ms" },
    ],
    tech: ["Cloudflare Workers", "Node.js", "Redis", "S3", "Terraform", "Lua"],
    glowColor: "rgba(14, 165, 233, 0.25)",
    glowGradient: "from-sky-500/20 to-cyan-500/20",
    iconName: "Globe",
    url: "https://appmash.org/",
    image: "/why-choose-us-image-1.png",
    flow: [
      { node: "Edge Worker", note: "Cloudflare Runtime" },
      { node: "Cache Layer", note: "Redis Tier" },
      { node: "Origin Shield", note: "S3 Backed" },
      { node: "Image Optimizer", note: "Real-Time Resize" },
      { node: "Routing Tier", note: "Geo Aware Logic" },
    ],
  },
  {
    title: "StreamGate Event Bus",
    category: "backend",
    subtitle: "Kafka-Powered Event Streaming",
    detailedCategory: "Distributed Messaging Core",
    description:
      "A high-throughput event streaming gateway for distributed microservices — guarantees ordering, replay capability, and exactly-once delivery semantics. Built on Kafka with NestJS-based producers and Avro schema enforcement.",
    metrics: [
      { label: "Throughput", value: "1M+ events/s" },
      { label: "p99 Latency", value: "< 12ms" },
      { label: "Topics", value: "500+ Active" },
    ],
    tech: ["Kafka", "NestJS", "TypeScript", "Redis", "Avro", "Docker"],
    glowColor: "rgba(139, 92, 246, 0.25)",
    glowGradient: "from-violet-500/20 to-purple-500/20",
    iconName: "Database",
    url: "https://appmash.org/",
    image: "/why-choose-us-image-1.png",
    flow: [
      { node: "Producer SDK", note: "NestJS Client" },
      { node: "Kafka Broker", note: "Multi-Partition" },
      { node: "Schema Registry", note: "Avro Versioned" },
      { node: "Consumer Pool", note: "Parallel Workers" },
      { node: "Replay Engine", note: "Offset Rewind" },
    ],
  },
  {
    title: "PayLedger Transaction Core",
    category: "backend",
    subtitle: "Double-Entry Payments Engine",
    detailedCategory: "Financial Backend System",
    description:
      "An enterprise-grade NestJS payments processing core with Stripe integration, double-entry ledger architecture, idempotent retries, and full ACID guarantees. Handles authorizations, refunds, and reconciliation at scale.",
    metrics: [
      { label: "Volume Processed", value: "$80M+ Total" },
      { label: "API Latency", value: "< 45ms" },
      { label: "Idempotency", value: "100% Safe" },
    ],
    tech: ["NestJS", "TypeScript", "PostgreSQL", "Stripe", "Redis", "RabbitMQ"],
    glowColor: "rgba(16, 185, 129, 0.25)",
    glowGradient: "from-emerald-500/20 to-green-500/20",
    iconName: "Server",
    url: "https://appmash.org/",
    image: "/why-choose-us-image-1.png",
    flow: [
      { node: "API Gateway", note: "NestJS Endpoint" },
      { node: "Stripe Bridge", note: "Authorization Layer" },
      { node: "Ledger Tier", note: "Double-Entry Postgres" },
      { node: "Queue Worker", note: "RabbitMQ Retry" },
      { node: "Reconciler", note: "Scheduled Sweep" },
    ],
  },
  {
    title: "MeshAPI GraphQL Federation",
    category: "backend",
    subtitle: "Federated GraphQL Gateway",
    detailedCategory: "API Mesh Platform",
    description:
      "An Apollo Federation gateway unifying disparate microservice subgraphs into a single, type-safe GraphQL schema. Features field-level authorization, query cost limiting, automatic persisted queries, and schema-check CI gating.",
    metrics: [
      { label: "Subgraphs Unified", value: "18 Services" },
      { label: "Query Latency", value: "< 60ms" },
      { label: "Schema Checks", value: "5k+ / week" },
    ],
    tech: ["Apollo Federation", "Node.js", "GraphQL", "Redis", "JWT", "Docker"],
    glowColor: "rgba(244, 63, 94, 0.25)",
    glowGradient: "from-rose-500/20 to-pink-500/20",
    iconName: "Database",
    url: "https://appmash.org/",
    image: "/why-choose-us-image-1.png",
    flow: [
      { node: "Gateway Edge", note: "Apollo Router" },
      { node: "Subgraph Pool", note: "Federated Services" },
      { node: "Auth Filter", note: "JWT Field-Level" },
      { node: "Cost Guard", note: "Complexity Limiter" },
      { node: "Cache Tier", note: "Redis Persisted Queries" },
    ],
  },
];

export const getWebProjects = () =>
  projectsList.filter((p) => p.category === "web");
export const getMobileProjects = () =>
  projectsList.filter((p) => p.category === "mobile");
export const getProjectById = (id: string) =>
  projectsList.find((p) => p.id === id);
