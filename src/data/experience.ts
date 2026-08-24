import { ExperienceItem } from "../types";

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "drdo-intern",
    role: "ML Intern",
    organization: "DRDO, Ministry of Defence, Govt. of India (IRDE)",
    period: "May 2026 — July 2026",
    location: "Dehradun, India",
    summary: "Developed AI-based drone detection and multi-drone counting systems for electro-optical surveillance applications during a 56-day research internship at IRDE, DRDO.",
    highlights: [
      "Built DroneVision, a single-class object detector from first principles in PyTorch, implementing a custom CNN backbone, Feature Pyramid Network (FPN), multi-scale detection head, CIoU-based loss, data augmentation, NMS, training, and evaluation pipelines without relying on pretrained detection frameworks.",
      "Developed SwarmTally, an end-to-end drone detection and counting platform using YOLOv8, FastAPI, Next.js, Docker, and CI/CD.",
      "Achieved approximately 0.94 mAP@0.50, 0.94 precision, and 0.89 recall on the documented validation run.",
      "Explored defence-relevant challenges including small-object UAV detection, multi-target counting, electro-optical (EO) surveillance, real-time inference, and future EO/IR sensor fusion and tracking."
    ],
    technologies: ["PyTorch", "YOLOv8", "FastAPI", "Next.js", "Docker", "CI/CD", "Python", "Computer Vision", "FPN", "CIoU Loss"],
  },
  {
    id: "codec-technologies",
    role: "Artificial Intelligence Intern",
    organization: "Codec Technologies India",
    period: "April 2026 — May 2026",
    location: "India",
    summary: "Completed a 1-month intensive AI internship focused on building practical, data-driven solutions and strengthening proficiency in Python-based AI development.",
    highlights: [
      "Spam Email Classifier: Developed a machine learning model using Naive Bayes and CountVectorizer to detect spam messages accurately.",
      "AI Movie Recommendation System: Built a content-based filtering system using NLP techniques, utilizing TF-IDF Vectorization and Cosine Similarity.",
      "Rule-Based Chatbot: Created an interactive chatbot to handle user queries through pattern matching.",
      "Leveraged tools & concepts including Python, Pandas, Scikit-learn, Data Preprocessing & Visualization, Machine Learning Algorithms, and GitHub for version control."
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "NLP", "Naive Bayes", "TF-IDF", "Cosine Similarity", "GitHub"],
  }
];

