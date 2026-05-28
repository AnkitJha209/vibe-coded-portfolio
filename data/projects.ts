const projects = [
    {
        id: "prepedge",
        name: "PrepEdge",
        short: "AI voice interview platform",
        live: "https://prepedge-platform.devxforge.tech/",
        repo: "https://github.com/ankitjha209/prep-edge",
        description: `Real-time AI-powered voice interview platform.
WHAT IT DOES:
→ Conducts live AI voice interviews via WebSockets
→ Streams audio through ElevenLabs STT → Gemini AI
→ Adaptive TTS responses — end-to-end in <5s
→ AI resume screening system scores candidates automatically (PDF parsing + scoring)
→ Built as a Turborepo monorepo with shared Prisma package across services`,
        stack: [
            "TypeScript",
            "Express",
            "WebSockets",
            "Prisma",
            "PostgreSQL",
            "Gemini AI",
            "ElevenLabs",
            "Turborepo",
        ],
    },
    {
        id: "vedaai",
        name: "VedaAI",
        short: "AI assessment creator",
        live: "https://veda-ai.devxforge.tech/",
        repo: "https://github.com/ankitjha209/vedaai_assignment",
        description: `AI-powered assignment and question paper creator for educators.
WHAT IT DOES:
→ Teachers create assignments with custom question types, difficulty, marks, and instructions
→ Optional PDF upload — text extracted and fed into the AI prompt for contextual generation
→ Background workers (BullMQ + Redis) generate question papers asynchronously
→ Output delivered as downloadable PDF stored on S3
→ Email notifications on completion or failure`,
        stack: [
            "Next.js",
            "TypeScript",
            "Express",
            "MongoDB",
            "Redis",
            "BullMQ",
            "AWS S3",
            "Gemini AI",
        ],
    },
    {
        id: "financial",
        name: "Financial Backend",
        short: "REST API with RBAC + AI chat",
        live: "https://financial-data-processing-backend-2.onrender.com/api/docs",
        repo: "https://github.com/AnkitJha209/financial-data-processing-backend",
        description: `Production-deployed REST API for financial record management with AI natural-language querying.
WHAT IT DOES:
→ Full JWT auth + RBAC (ADMIN / ANALYST / VIEWER)
→ Gemini AI assistant converts natural language to SQL — ad-hoc queries in seconds
→ Dashboard analytics, CSV export pipelines, Swagger/OpenAPI docs
→ Docker Compose for reproducible local dev`,
        stack: [
            "TypeScript",
            "Express",
            "Prisma",
            "PostgreSQL",
            "Gemini AI",
            "Docker",
            "Zod",
            "Swagger",
        ],
    },
    {
        id: "querynest",
        name: "QueryNest",
        short: "RAG-powered PDF/web querier",
        repo: "https://github.com/ankitjha209/query-nest",
        description: `RAG-powered backend to intelligently query PDFs and web pages using vector search.
WHAT IT DOES:
→ Full LangChain pipeline: parse → chunk → embed → search → retrieve
→ Supports PDFs and web pages up to 50+ pages
→ QdrantDB indexing optimised to reduce query latency`,
        stack: ["React", "Node.js", "Express", "LangChain", "QdrantDB"],
    },
    {
        id: "vouch",
        name: "Vouch",
        short: "Video testimonial SaaS (WIP)",
        repo: "https://github.com/ankitjha209/vouch",
        description: `Full-stack SaaS for collecting and embedding video testimonials.
ARCHITECTURE:
→ Turborepo monorepo: Next.js frontend, Express API, BullMQ worker, embeddable JS widget
→ Uploads to S3 via presigned URLs → SNS → BullMQ transcode queue → ECS Fargate (ffmpeg)
→ Whisper transcription + Gemini sentiment analysis → CDN-hosted embed scripts`,
        stack: [
            "Next.js",
            "Express",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "Redis",
            "BullMQ",
            "AWS S3",
        ],
    },
];

export default projects;
