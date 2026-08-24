export type PortfolioStage = "landing" | "workspace" | "closing";

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  imageAlt: string;
  tags: string[];
  status: "active" | "completed" | "research" | "open-source";
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  year: string;
  metrics?: { label: string; value: string }[];
  problemStatement?: string;
  architectureDetails?: string[];
  keyDecisions?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface CapabilityItem {
  title: string;
  subtitle: string;
  skills: string[];
  iconName: string;
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  verifyUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
  primary?: boolean;
}
