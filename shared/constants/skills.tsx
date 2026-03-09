import {
  Bug,
  ChartCandlestick,
  Code2,
  Database,
  Figma,
  Github,
  LayoutTemplate,
  Terminal,
} from "lucide-react";

export const skills = [
  // Frontend
  { name: "TypeScript", icon: <Code2 className="w-4 h-4" /> },
  { name: "JavaScript", icon: <Code2 className="w-4 h-4" /> },
  { name: "React", icon: <LayoutTemplate className="w-4 h-4" /> },
  { name: "Next.js", icon: <LayoutTemplate className="w-4 h-4" /> },
  { name: "Tailwind CSS", icon: <LayoutTemplate className="w-4 h-4" /> },

  // State Management
  { name: "RTK Query", icon: <ChartCandlestick className="w-4 h-4" /> },
  { name: "Zustand", icon: <ChartCandlestick className="w-4 h-4" /> },
  { name: "TanStack Ecosystem", icon: <Code2 className="w-4 h-4" /> },

  // Backend / DB
  { name: "Node.js", icon: <Terminal className="w-4 h-4" /> },
  { name: "Express.js", icon: <Terminal className="w-4 h-4" /> },
  { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
  { name: "Prisma", icon: <Database className="w-4 h-4" /> },
  { name: "Supabase", icon: <Database className="w-4 h-4" /> },

  { name: "MongoDB", icon: <Database className="w-4 h-4" /> },

  // Tools / DevOps
  { name: "Git / GitHub", icon: <Github className="w-4 h-4" /> },
  { name: "Docker", icon: <Terminal className="w-4 h-4" /> },

  // Design / UX
  { name: "Figma", icon: <Figma className="w-4 h-4" /> },

  // Testing
  { name: "Jest / Vitest", icon: <Bug className="w-4 h-4" /> },
];
