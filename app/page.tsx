import Image from "next/image";
import {
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { AgeCounter } from "@/components/age-counter";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 pb-20 pt-14 sm:px-8 sm:pt-20">
      <header className="space-y-6">
        <div className="space-y-2">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl font-surfer">
              <EncryptedText
                text="Gaurav Gulati"
                revealDelayMs={35}
                flipDelayMs={35}
                className="inline-block"
                encryptedClassName="text-zinc-500"
                revealedClassName="text-zinc-50"
              />
            </h1>

            <div className="relative h-28 w-28 overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:h-32 sm:w-32">
              <Image
                src="/avatar.jpg"
                alt="Gaurav Gulati"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                priority
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-300">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-zinc-400" />
              Delhi, IN
            </span>
            <span className="text-zinc-500">|</span>
            <span>B.Tech (CSE)</span>
            <span className="text-zinc-500">|</span>
            <span>AI Engineer</span>
          </div>
        </div>

        <div className="max-w-2xl space-y-3 text-zinc-200">
          <p className="leading-relaxed">
            Hi, I am Gaurav Gulati. I am <AgeCounter /> years old. I build Retrieval-Augmented Generation (RAG)
            systems, scalable APIs, and production-ready ML/GenAI applications.
          </p>
          <p className="leading-relaxed text-zinc-300">
            I work with FastAPI, LangChain/LlamaIndex, vector databases, and modern
            MLOps tooling.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href="mailto:gauravrunsthis@gmail.com"
            aria-label="Email"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-100 transition hover:bg-white/10"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="tel:+919899559207"
            aria-label="Phone"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-100 transition hover:bg-white/10"
          >
            <Phone className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/gauravgulati619/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-100 transition hover:bg-white/10"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/GauravGulati06"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-100 transition hover:bg-white/10"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://gauravgulati06.github.io/resume/Gaurav_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-zinc-100 transition hover:bg-white/10"
          >
            <FileText className="h-4 w-4" />
            <span className="font-medium">Resume</span>
            <ExternalLink className="h-4 w-4 text-zinc-300" />
          </a>
          <a
            href="https://leetcode.com/u/natkhat/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-zinc-100 transition hover:bg-white/10"
          >
            <span className="font-medium">LeetCode</span>
            <ExternalLink className="h-4 w-4 text-zinc-300" />
          </a>
        </div>
      </header>

      <section className="mt-14 space-y-10">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-zinc-50">~/Experience</h2>

          <div className="space-y-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="text-base font-semibold text-zinc-50">
                  AI Engineer Intern
                </div>
                <div className="text-sm text-zinc-400">Aug 2025 – Oct 2025</div>
              </div>
              <div className="mt-1 text-sm text-zinc-300">
                Sopra Steria • Noida, India
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-300">
                <li>
                  Developed advanced Retrieval-Augmented Generation (RAG)
                  architectures for domain-specific chatbots.
                </li>
                <li>
                  Built and optimized scalable RAG pipelines using LlamaIndex,
                  LangChain, ChromaDB, and FAISS.
                </li>
                <li>
                  Implemented modular APIs with FastAPI and integrated dynamic
                  LLM workflows.
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="text-base font-semibold text-zinc-50">
                  Generative AI Intern
                </div>
                <div className="text-sm text-zinc-400">Jun 2024 – Aug 2024</div>
              </div>
              <div className="mt-1 text-sm text-zinc-300">
                Sansoftech Services Private Limited • New Delhi, India
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-300">
                <li>
                  Completed a 2-month Generative AI internship at IGDTUW in
                  partnership with Sansoftech Services Pvt. Ltd.
                </li>
                <li>
                  Engineered a Video Transcript Summariser and Audio Summariser
                  pipeline leveraging the Gemini API.
                </li>
                <li>
                  Built modular experimentation pipelines with OpenAI, Anthropic
                  Claude, Gemini, and Hugging Face Transformers.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-zinc-50">~/Projects</h2>

          <div className="grid gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="text-base font-semibold text-zinc-50">
                    MediVox: Medical AI Assistant
                  </div>
                  <div className="mt-1 text-sm text-zinc-300">
                    Patient speech + images + RAG over PDFs for context-aware
                    responses.
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://gauravgulati619-medivox.hf.space/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-100 transition hover:bg-white/10"
                  >
                    Live
                    <ExternalLink className="h-3.5 w-3.5 text-zinc-300" />
                  </a>
                  <a
                    href="https://github.com/GauravGulati06/MediVox"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-100 transition hover:bg-white/10"
                  >
                    GitHub
                    <Github className="h-3.5 w-3.5 text-zinc-300" />
                  </a>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "FastAPI",
                  "Gradio",
                  "LangChain",
                  "Groq",
                  "FAISS",
                  "Torch",
                  "Transformers",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="text-base font-semibold text-zinc-50">
                    Social Media API
                  </div>
                  <div className="mt-1 text-sm text-zinc-300">
                    REST API with CRUD, JWT auth, and voting/like system.
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://social-media-api-ztes.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-100 transition hover:bg-white/10"
                  >
                    Live
                    <ExternalLink className="h-3.5 w-3.5 text-zinc-300" />
                  </a>
                  <a
                    href="https://github.com/GauravGulati06/Social-media-api"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-100 transition hover:bg-white/10"
                  >
                    GitHub
                    <Github className="h-3.5 w-3.5 text-zinc-300" />
                  </a>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "FastAPI",
                  "PostgreSQL",
                  "SQLAlchemy",
                  "Alembic",
                  "JWT",
                  "GitHub Actions",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="text-base font-semibold text-zinc-50">
                    Vehicle Insurance MLOps Pipeline
                  </div>
                  <div className="mt-1 text-sm text-zinc-300">
                    Production-grade pipeline: ingestion → validation → training
                    → deployment.
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/GauravGulati06/mlops-proj"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-100 transition hover:bg-white/10"
                  >
                    GitHub
                    <Github className="h-3.5 w-3.5 text-zinc-300" />
                  </a>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "FastAPI",
                  "MongoDB Atlas",
                  "AWS S3",
                  "Docker",
                  "GitHub Actions",
                  "AWS EC2",
                  "ECR",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="text-base font-semibold text-zinc-50">
                    PersonaReview: AI-Powered Peer Review Platform
                  </div>
                  <div className="mt-1 text-sm text-zinc-300">
                    Multi-purpose AI feedback tool with persona-based analysis.
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://persona-review.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-100 transition hover:bg-white/10"
                  >
                    Live
                    <ExternalLink className="h-3.5 w-3.5 text-zinc-300" />
                  </a>
                  <a
                    href="https://github.com/GauravGulati06/PersonaReview"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-100 transition hover:bg-white/10"
                  >
                    GitHub
                    <Github className="h-3.5 w-3.5 text-zinc-300" />
                  </a>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Python", "FastAPI", "LangChain", "Google AI Studio"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="text-base font-semibold text-zinc-50">
                    Zero-Shot Learning Capabilities of LLMs
                  </div>
                  <div className="mt-1 text-sm text-zinc-300">
                    Evaluated zero-shot QA on BoolQ using Qwen2, Llama3.2, and Gemma with comparative accuracy analysis.
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/GauravGulati06/notebookZSL"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-100 transition hover:bg-white/10"
                  >
                    GitHub
                    <Github className="h-3.5 w-3.5 text-zinc-300" />
                  </a>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Python",
                  "Hugging Face",
                  "Transformers",
                  "Scikit-Learn",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="text-base font-semibold text-zinc-50">
                    "Attention is All You Need" Paper Implementation
                  </div>
                  <div className="mt-1 text-sm text-zinc-300">
                    Implemented an encoder-decoder Transformer in PyTorch with multi-head attention, positional encodings, and a training pipeline.
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/GauravGulati06/Transformers"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-100 transition hover:bg-white/10"
                  >
                    GitHub
                    <Github className="h-3.5 w-3.5 text-zinc-300" />
                  </a>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Python", "PyTorch", "NLP", "Transformers"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-zinc-50">~/Technical Skills</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                k: "Programming",
                v: "Python, Java, C/C++, SQL, HTML/CSS, R",
              },
              {
                k: "Web",
                v: "HTML, CSS, Flask, FastAPI",
              },
              {
                k: "Data/ML",
                v: "LangChain, Pandas, NumPy, Matplotlib, Seaborn, PyTorch",
              },
              {
                k: "DB/ORM",
                v: "MySQL, MongoDB, PostgreSQL, SQLAlchemy",
              },
              {
                k: "Misc",
                v: "Linux, Git, Docker, AWS, Streamlit, BeautifulSoup, Postman, Gradio",
              },
            ].map((row) => (
              <div key={row.k} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <div className="pointer-events-none absolute -inset-24 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_55%)]" />
                </div>
                <div className="relative">
                  <div className="text-sm font-medium text-zinc-100">{row.k}</div>
                  <div className="mt-1 text-sm leading-relaxed text-zinc-300">
                    {row.v}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-zinc-50">~/Certifications & Achievements</h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <ul className="space-y-3 text-sm leading-relaxed text-zinc-300">
              <li>
                Solved 200+ coding problems across LeetCode & GeeksforGeeks •{" "}
                <a
                  className="text-zinc-100 underline underline-offset-4 hover:text-white"
                  href="https://leetcode.com/u/natkhat/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Profile
                </a>
              </li>
              <li>
                NPTEL Elite + Silver in Introduction to Large Language Models •{" "}
                <a
                  className="text-zinc-100 underline underline-offset-4 hover:text-white"
                  href="https://drive.google.com/file/d/1RxKEj5VxiQb5v45iMxdelgRO7ViWfOyN/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Badge
                </a>
              </li>
              <li>
                IR4.0 Technologies - Programme of Microsoft, SAP, and Edunet
                Foundation •{" "}
                <a
                  className="text-zinc-100 underline underline-offset-4 hover:text-white"
                  href="https://drive.google.com/file/d/1UJndJtNr5AEmmvsZKnUoeuzgSvMNQNkG/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Certificate
                </a>
              </li>
              <li>
                Open-Source Models with Hugging Face - DeepLearning.ai •{" "}
                <a
                  className="text-zinc-100 underline underline-offset-4 hover:text-white"
                  href="https://learn.deeplearning.ai/accomplishments/5534d180-1738-4e6f-83dd-4ddac1348ceb?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Certificate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-zinc-400">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-center">
            © {new Date().getFullYear()} Gaurav Gulati — I vibe-code, but I don’t vibe-debug.
          </span>
        </div>
      </footer>
    </main>
  );
}
