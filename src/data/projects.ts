import { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    id: "dronevision",
    slug: "dronevision",
    title: "DroneVision",
    subtitle: "First-Principles Custom CNN & FPN Object Detector",
    category: "PyTorch · Computer Vision · Defense AI",
    shortDescription: "A single-class object detector built from first principles in PyTorch implementing a custom CNN backbone, FPN, and CIoU loss for drone surveillance.",
    longDescription: "Developed during a 56-day research internship at IRDE, DRDO (Ministry of Defence, Govt. of India). Built DroneVision from first principles in PyTorch without relying on pretrained detection frameworks, implementing a custom CNN backbone, Feature Pyramid Network (FPN), multi-scale detection head, CIoU-based loss function, custom augmentation, NMS, training, and evaluation pipelines.",
    imageAlt: "DroneVision custom electro-optical object detector detecting UAV targets",
    tags: ["PyTorch", "Computer Vision", "Custom CNN", "FPN", "CIoU Loss", "Python"],
    status: "research",
    featured: true,
    year: "2026",
    githubUrl: "https://github.com/Shivanshu85/DroneVision",
    liveUrl: "https://huggingface.co/spaces/sam9507/DroneVision",
    metrics: [
      { label: "Framework", value: "PyTorch (From Scratch)" },
      { label: "Backbone", value: "Custom CNN + FPN" },
      { label: "Loss", value: "CIoU Loss" },
    ],
    problemStatement: "Small UAV targets in electro-optical surveillance feeds occupy minimal screen pixels and lack distinct features, making standard pretrained detectors ineffective for defense applications.",
    architectureDetails: [
      "Custom convolutional neural network backbone with Feature Pyramid Network (FPN)",
      "Multi-scale object detection head tuned for small-object UAV footprints",
      "Complete Intersection over Union (CIoU) loss calculation pipeline",
      "Non-Maximum Suppression (NMS) and custom data augmentation pipelines from scratch"
    ],
    keyDecisions: [
      "Avoided pretrained object detection weights to construct a lightweight custom architecture optimized specifically for electro-optical surveillance and low-footprint inference."
    ]
  },
  {
    id: "swarmtally",
    slug: "swarmtally",
    title: "SwarmTally",
    subtitle: "End-to-End Drone Detection & Multi-Target Counting Platform",
    category: "YOLOv8 · FastAPI · Next.js · Docker · CI/CD",
    shortDescription: "An end-to-end drone detection and counting platform achieving ~0.94 mAP@0.50, 0.94 precision, and 0.89 recall on validation runs.",
    longDescription: "Developed at IRDE, DRDO as an end-to-end drone detection and counting platform. Combines YOLOv8 real-time object detection with a FastAPI backend, Next.js frontend, Docker containerization, and CI/CD pipelines to deliver live target counts and electro-optical surveillance telemetry.",
    imageAlt: "SwarmTally multi-drone detection and counting dashboard displaying live counts and metrics",
    tags: ["YOLOv8", "FastAPI", "Next.js", "Docker", "CI/CD", "Real-Time ML"],
    status: "active",
    featured: true,
    year: "2026",
    githubUrl: "https://github.com/Shivanshu85/Swarmtally",
    liveUrl: "https://swarmtallycom-lovat.vercel.app",
    metrics: [
      { label: "mAP@0.50", value: "0.94" },
      { label: "Precision", value: "0.94" },
      { label: "Recall", value: "0.89" },
    ],
    problemStatement: "Electro-optical surveillance requires accurate real-time multi-target counting and low-latency inference across high-density aerial drone swarms.",
    architectureDetails: [
      "YOLOv8 deep learning detection pipeline optimized for UAV counting",
      "FastAPI asynchronous backend with REST endpoints for live stream processing",
      "Next.js dashboard with responsive metrics and real-time visualization",
      "Dockerized deployment with automated CI/CD pipeline"
    ],
    keyDecisions: [
      "Integrated YOLOv8 with custom tracking and multi-target counting modules to maintain precise target tallies across overlapping trajectories."
    ]
  },
  {
    id: "cinecurator",
    slug: "cinecurator",
    title: "CineCurator",
    subtitle: "Full-Stack AI Movie Discovery & Recommendation Platform",
    category: "Next.js · FastAPI · Scikit-learn · Supabase",
    shortDescription: "An AI-powered movie discovery platform combining a FastAPI recommendation service with a production-oriented Next.js experience.",
    longDescription: "CineCurator combines a Python FastAPI microservice for TF-IDF and cosine-similarity recommendations with a Next.js 14 application. The platform integrates TMDB and OMDb data, Supabase authentication and watchlists, and a four-tier fallback path for resilient recommendations.",
    imageAlt: "CineCurator AI movie discovery and recommendation platform",
    tags: ["Next.js", "FastAPI", "Scikit-learn", "TF-IDF", "Supabase", "TypeScript"],
    status: "active",
    featured: true,
    year: "2026",
    githubUrl: "https://github.com/Shivanshu85/Cinecurator",
    liveUrl: "https://cinecurator-one.vercel.app",
    metrics: [
      { label: "ML Engine", value: "TF-IDF + Cosine Similarity" },
      { label: "Architecture", value: "4-Tier Fallback" },
      { label: "Application", value: "Next.js + FastAPI" },
    ],
    problemStatement: "Movie discovery can be slow and impersonal when users must search across large catalogues without meaningful content-based suggestions.",
    architectureDetails: [
      "FastAPI recommendation microservice using Scikit-learn, Pandas, and NumPy",
      "Next.js 14 application with API proxying and client-side data caching",
      "TMDB and OMDb enrichment for metadata, artwork, ratings, and trailers",
      "Supabase authentication and watchlists with resilient local-session fallback"
    ],
    keyDecisions: [
      "Designed a multi-tier fallback path so the user experience remains useful when the dedicated ML service is unavailable."
    ]
  },
  {
    id: "mcp-doctor",
    slug: "mcp-doctor",
    title: "MCP Doctor",
    subtitle: "Evidence-Driven Diagnostics for MCP & AI Developer Tools",
    category: "Python · MCP · CLI · Developer Tooling",
    shortDescription: "An open-source, local-first CLI and MCP server for diagnosing broken AI-tool integrations and developer environments.",
    longDescription: "MCP Doctor inspects runtimes and MCP configurations across AI developer tools, then produces structured, evidence-based diagnostics. It prioritizes local execution, secret redaction, safe subprocess handling, and machine-readable JSON output for automation.",
    imageAlt: "MCP Doctor diagnostic toolkit for AI developer tool environments",
    tags: ["Python", "Model Context Protocol", "CLI", "Testing", "Developer Tools", "AI Agents"],
    status: "open-source",
    featured: true,
    year: "2026",
    githubUrl: "https://github.com/Shivanshu85/MCP-Doctor",
    metrics: [
      { label: "Runtime Probes", value: "8" },
      { label: "AI Clients", value: "5" },
      { label: "Test Coverage", value: "96%" },
    ],
    problemStatement: "MCP integrations often fail with vague errors across configuration, runtime, process, and transport layers, leaving developers without an actionable diagnosis.",
    architectureDetails: [
      "Local-first CLI and MCP server with structured JSON output",
      "Runtime probes for Python, Node.js, npm, Git, Docker, uv, and related tools",
      "MCP configuration discovery for Claude, Cursor, VS Code, and Codex environments",
      "Evidence-driven diagnostics with secret redaction and bounded subprocess execution"
    ],
    keyDecisions: [
      "Separated observation, evidence, diagnosis, and remediation so the tool can explain findings without guessing or exposing credentials."
    ]
  },
  {
    id: "google-flow-automation",
    slug: "google-flow-automation",
    title: "Google Flow Automation",
    subtitle: "Chrome Extension for Batch AI Media Generation",
    category: "JavaScript · Chrome Extension · AI Automation",
    shortDescription: "A Chrome extension that queues and automates batch image and video generation workflows in Google Flow.",
    longDescription: "Google Flow Automation streamlines prompt entry, asset matching, settings selection, and queue management for AI media creation. It supports multiple generation modes and includes error handling, retries, status tracking, and a self-mounting workflow panel.",
    imageAlt: "Google Flow Automation Chrome extension for AI media generation workflows",
    tags: ["JavaScript", "Chrome Extension", "AI Automation", "Veo", "Nano Banana", "Workflow Automation"],
    status: "open-source",
    featured: true,
    year: "2026",
    githubUrl: "https://github.com/Shivanshu85/Google-Flow-Automation",
    metrics: [
      { label: "Generation Modes", value: "5" },
      { label: "Platform", value: "Chrome Extension" },
      { label: "Workflow", value: "Queued Batch Processing" },
    ],
    problemStatement: "Manual prompt entry and configuration make high-volume AI image and video generation slow, repetitive, and difficult to manage.",
    architectureDetails: [
      "Queue-based prompt and asset management with drag-and-drop reordering",
      "Automation for text-to-video, frame-to-video, image-to-image, and related workflows",
      "Model, aspect-ratio, and output-count configuration synchronization",
      "Status tracking with retry handling for temporary platform failures"
    ],
    keyDecisions: [
      "Built the extension around robust browser-side automation and queue visibility to reduce repetitive work in creative AI workflows."
    ]
  }
];
