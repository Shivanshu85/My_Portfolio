const { jsPDF } = require('jspdf');
const fs = require('fs');
const path = require('path');

const doc = new jsPDF({
  unit: 'pt',
  format: 'letter'
});

const pageWidth = doc.internal.pageSize.getWidth();
const margin = 40;
const contentWidth = pageWidth - margin * 2;
let y = 45;

function checkSpace(needed = 20) {
  if (y + needed > 750) {
    doc.addPage();
    y = 45;
  }
}

// Name Header
doc.setFont('times', 'bold');
doc.setFontSize(24);
doc.text('Shivanshu Tiwari', pageWidth / 2, y, { align: 'center' });
y += 18;

// Contact Line
doc.setFont('times', 'normal');
doc.setFontSize(9.5);
const contactText = '+91-8317035585 | tshivanshu48@gmail.com | linkedin.com/in/shivanshu-tiwari | github.com/Shivanshu85 | Lucknow, UP, India';
doc.text(contactText, pageWidth / 2, y, { align: 'center' });
y += 20;

function addSectionTitle(title) {
  checkSpace(30);
  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.text(title.toUpperCase(), margin, y);
  y += 4;
  doc.setLineWidth(0.75);
  doc.setDrawColor(100, 100, 100);
  doc.line(margin, y, margin + contentWidth, y);
  y += 12;
}

// 1. PROFESSIONAL SUMMARY
addSectionTitle('Professional Summary');
doc.setFont('times', 'normal');
doc.setFontSize(9.5);
const summaryText = "GenAI & LLM Engineer with hands-on experience building RAG systems, AI Agents, and end-to-end ML pipelines. Skilled in Python, LangChain, LangGraph, OpenAI API, Hugging Face Transformers, Vector Databases (FAISS, ChromaDB), FastAPI, Docker, and AWS. Currently contributing to AI research at DRDO, Ministry of Defence. Seeking roles in GenAI Engineering, LLM Engineering, and Machine Learning Engineering";
const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
doc.text(summaryLines, margin, y);
y += summaryLines.length * 12 + 8;

// 2. PROFESSIONAL EXPERIENCE
addSectionTitle('Professional Experience');

// DRDO
checkSpace(35);
doc.setFont('times', 'bold');
doc.setFontSize(10);
doc.text('DRDO, Ministry of Defence, Govt. of India', margin, y);
doc.setFont('times', 'normal');
doc.text('May 2026 – Present', margin + contentWidth, y, { align: 'right' });
y += 12;
doc.setFont('times', 'italic');
doc.text('Machine Learning Intern', margin, y);
doc.setFont('times', 'normal');
doc.text('Dehradun, India', margin + contentWidth, y, { align: 'right' });
y += 12;

doc.setFont('times', 'normal');
const drdoBullets = [
  'Working on AI/ML research and development projects for defence applications.',
  'Applying deep learning, computer vision, and NLP techniques in a research environment.'
];
drdoBullets.forEach(b => {
  const lines = doc.splitTextToSize('• ' + b, contentWidth - 10);
  doc.text(lines, margin + 10, y);
  y += lines.length * 11 + 2;
});
y += 4;

// Codec
checkSpace(35);
doc.setFont('times', 'bold');
doc.setFontSize(10);
doc.text('Codec Technologies India', margin, y);
doc.setFont('times', 'normal');
doc.text('Apr 2026 – May 2026', margin + contentWidth, y, { align: 'right' });
y += 12;
doc.setFont('times', 'italic');
doc.text('Artificial Intelligence Intern', margin, y);
doc.setFont('times', 'normal');
doc.text('Remote, India', margin + contentWidth, y, { align: 'right' });
y += 12;

const codecBullets = [
  'Spam Classifier: Naive Bayes + CountVectorizer; achieved high-accuracy email spam detection.',
  'Movie Recommendation System: Content-based filtering using TF-IDF Vectorization & Cosine Similarity.'
];
codecBullets.forEach(b => {
  const lines = doc.splitTextToSize('• ' + b, contentWidth - 10);
  doc.text(lines, margin + 10, y);
  y += lines.length * 11 + 2;
});
y += 8;

// 3. PROJECTS
addSectionTitle('Projects');

const projects = [
  {
    title: 'RAG-Powered QA System',
    tech: 'LangChain, FAISS, OpenAI, FastAPI',
    bullets: [
      'Built end-to-end Retrieval-Augmented Generation (RAG) pipeline with document chunking, embedding generation, and FAISS vector store for semantic similarity search over custom document corpora.',
      'Grounded LLM responses in retrieved context to minimize hallucination; deployed via FastAPI REST API for low-latency, scalable inference.'
    ]
  },
  {
    title: 'AI Agent with LangGraph',
    tech: 'LangGraph, LangChain, OpenAI, Python',
    bullets: [
      'Engineered LangGraph stateful agentic workflow with multi-step reasoning, tool calling (web search, DB lookup), short- and long-term memory, prompt engineering, and conditional decision-making.'
    ]
  },
  {
    title: 'Automated Data Pipeline',
    tech: 'Apache Airflow, Python, AWS S3, Docker',
    bullets: [
      'Orchestrated fully automated ETL pipeline with Apache Airflow DAGs; ingested, transformed, and loaded data from multiple sources into PostgreSQL, containerized with Docker and hosted on AWS EC2/S3.'
    ]
  },
  {
    title: 'Deep Learning Image Classifier',
    tech: 'CNN, TensorFlow/Keras, Python',
    bullets: [
      'CNN-based image classification model with data augmentation and transfer learning techniques.'
    ]
  }
];

projects.forEach(p => {
  checkSpace(30);
  doc.setFont('times', 'bold');
  doc.setFontSize(10);
  doc.text(p.title, margin, y);
  const titleWidth = doc.getTextWidth(p.title);
  doc.setFont('times', 'italic');
  doc.setFontSize(9.5);
  doc.text(' | ' + p.tech, margin + titleWidth, y);
  y += 12;

  doc.setFont('times', 'normal');
  p.bullets.forEach(b => {
    const lines = doc.splitTextToSize('• ' + b, contentWidth - 10);
    doc.text(lines, margin + 10, y);
    y += lines.length * 11 + 2;
  });
  y += 4;
});

// 4. TECHNICAL SKILLS
addSectionTitle('Technical Skills');
doc.setFont('times', 'normal');
doc.setFontSize(9.5);

const skills = [
  { cat: 'Languages & Frameworks: ', val: 'Python, FastAPI, REST APIs' },
  { cat: 'AI/ML: ', val: 'LangChain, LangGraph, Hugging Face, Scikit-learn, TensorFlow, PyTorch, RAG, AI Agents' },
  { cat: 'Data Engineering: ', val: 'Apache Airflow, Pandas, NumPy, Data Preprocessing' },
  { cat: 'Vector Databases: ', val: 'ChromaDB, Pinecone' },
  { cat: 'DevOps & Cloud: ', val: 'Docker, AWS (S3, EC2), Git, GitHub' },
  { cat: 'Backend & APIs: ', val: 'FastAPI, REST APIs' },
  { cat: 'Concepts: ', val: 'LLMs, Prompt Engineering, NLP, CNN, ANN, Transfer Learning, Computer Vision' }
];

skills.forEach(s => {
  checkSpace(14);
  doc.setFont('times', 'bold');
  doc.text(s.cat, margin, y);
  const catWidth = doc.getTextWidth(s.cat);
  doc.setFont('times', 'normal');
  const lines = doc.splitTextToSize(s.val, contentWidth - catWidth);
  doc.text(lines, margin + catWidth, y);
  y += lines.length * 11 + 2;
});
y += 6;

// 5. EDUCATION
addSectionTitle('Education');
checkSpace(25);
doc.setFont('times', 'bold');
doc.setFontSize(10);
doc.text('Veer Bahadur Singh Purvanchal University', margin, y);
doc.setFont('times', 'normal');
doc.text('2023 – Present', margin + contentWidth, y, { align: 'right' });
y += 12;
doc.setFont('times', 'italic');
doc.text('B.Tech in Information Technology', margin, y);
doc.setFont('times', 'normal');
doc.text('Jaunpur, UP, India', margin + contentWidth, y, { align: 'right' });
y += 16;

// 6. CERTIFICATIONS
addSectionTitle('Certifications');
doc.setFont('times', 'normal');
doc.setFontSize(9.5);

const certs = [
  'Artificial Intelligence Intern 2026 – Certified Artificial Intelligence Intern',
  'Oracle Cloud Infrastructure 2025 – Certified Generative AI Professional',
  'Oracle Cloud Infrastructure 2025 – Certified Data Science Professional',
  'Oracle Cloud Infrastructure 2025 – Certified AI Foundations Associate',
  'Generative AI 2026 – Certified Generative Artificial Intelligence'
];

certs.forEach(c => {
  checkSpace(12);
  doc.text(c, margin, y);
  y += 12;
});

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const outputPath = path.join(publicDir, 'Shivanshu_Tiwari_Resume.pdf');
const pdfBytes = doc.output('arraybuffer');
fs.writeFileSync(outputPath, Buffer.from(pdfBytes));

console.log('Resume PDF generated successfully at:', outputPath);
