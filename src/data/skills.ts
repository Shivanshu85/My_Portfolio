import { CapabilityItem, TechCategory, Certification } from "../types";

export const CAPABILITIES: CapabilityItem[] = [
  {
    title: "Build RAG & AI Agents",
    subtitle: "Generative AI & LLM Engineering",
    skills: ["RAG Systems", "AI Agents", "LangChain & LangGraph", "OpenAI & Hugging Face", "Vector Databases", "Data Pipelines"],
    iconName: "Cpu",
  },
  {
    title: "Train & Apply Vision/ML Models",
    subtitle: "Machine Learning & Deep Learning",
    skills: ["PyTorch", "YOLOv8", "Custom CNNs & FPNs", "Object Detection & Counting", "Scikit-Learn", "Naive Bayes & TF-IDF"],
    iconName: "Eye",
  },
  {
    title: "Build Scalable Data Systems",
    subtitle: "Data Pipelines & Backend",
    skills: ["Apache Airflow", "Data Pipelines", "FastAPI", "Vector Databases", "REST APIs", "Docker & AWS"],
    iconName: "Database",
  },
  {
    title: "Ship Full-Stack AI Solutions",
    subtitle: "Full-Stack Development & CI/CD",
    skills: ["Next.js & React", "FastAPI", "Docker", "CI/CD Workflows", "Python", "GitHub Version Control"],
    iconName: "Layers",
  },
];

export const TECH_STACK: TechCategory[] = [
  {
    category: "AI & Machine Learning",
    items: ["Python", "PyTorch", "YOLOv8", "Scikit-Learn", "Pandas", "Deep Learning", "Computer Vision", "OpenCV"],
  },
  {
    category: "LLM & GenAI",
    items: ["LangChain", "LangGraph", "RAG Systems", "Vector Databases", "OpenAI API", "Hugging Face"],
  },
  {
    category: "Data Pipelines & Backend",
    items: ["Apache Airflow", "Data Pipelines", "FastAPI", "REST APIs", "SQL & Vector Stores"],
  },
  {
    category: "Frontend & Full-Stack",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "AWS", "CI/CD", "Git / GitHub", "Linux"],
  },
];

export const CURRENTLY_EXPLORING: string[] = [
  "Building autonomous AI Agents with LangGraph & persistent memory",
  "Production-grade RAG evaluation & hallucination mitigation",
  "Apache Airflow automated data ingestion and vector embedding pipelines",
  "Low-latency real-time inference optimization for vision models",
  "EO/IR sensor fusion & multi-target trajectory tracking",
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle Cloud Infrastructure",
    year: "2025",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle Cloud Infrastructure",
    year: "2025",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle Cloud Infrastructure",
    year: "2025",
  },
  {
    title: "Generative AI Certification",
    issuer: "Professional Certification",
    year: "2025",
  },
  {
    title: "Artificial Intelligence Intern Certification",
    issuer: "Codec Technologies India",
    year: "2026",
  },
];

export const HOW_I_BUILD_STEPS = [
  {
    num: "01",
    title: "Understand",
    desc: "Start with the real problem and requirements, not the model or hype.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Choose the simplest architecture that can reliably solve it.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Turn the concept into a modular, clean, working production system.",
  },
  {
    num: "04",
    title: "Evaluate",
    desc: "Rigorously measure accuracy, latency, edge-cases, and failure modes.",
  },
  {
    num: "05",
    title: "Ship",
    desc: "Deploy cleanly so it is usable, scalable, and repeatable.",
  },
];

