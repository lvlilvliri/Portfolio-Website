import { Project } from "@/@types/project";

export const projectsDb: Record<string, Project> = {
  "next-pizza": {
    title: "Next Pizza",
    tagline:
      "Full-stack pizza delivery platform with real payments and authentication.",
    description:
      "A production-ready full-stack pizza delivery application that allows users to browse a dynamic product catalog, build custom pizzas, place orders, and pay online. The platform features authentication, a persistent shopping cart, checkout with address validation, and a lightweight admin panel for product and order management. Built with modern technologies like Next.js App Router, Prisma, PostgreSQL, and NextAuth to demonstrate scalable full-stack architecture.",
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&q=80&w=2070",
    date: "2026",
    role: "Full-Stack Developer",
    demoUrl: "https://next-pizza-lemon-chi.vercel.app/",
    githubUrl: "https://github.com/lvlilvliri/next-pizza",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth.js",
      "Zustand",
      "React Hook Form",
      "Zod",
      "WayForPay",
      "Resend",
    ],
    features: [
      "Interactive pizza builder with customizable sizes, crusts, and ingredients",
      "Persistent shopping cart powered by Zustand",
      "Secure authentication with NextAuth.js and OAuth providers",
      "Full checkout flow with address validation and Google Maps integration",
      "Online payment integration via WayForPay",
      "Automated order confirmation emails using Resend",
      "Admin dashboard with CRUD operations for products and order management",
      "Image upload system for product management",
    ],
    learnings:
      "Building this project helped me gain hands-on experience with modern full-stack architecture using Next.js App Router. One of the key challenges was coordinating server actions, database interactions via Prisma, and client-side state management while maintaining end-to-end type safety with TypeScript and Zod. I also learned how to structure a scalable project with clear separation between UI, business logic, and data access layers, while integrating external services such as payment gateways and email providers.",
  },
  "ai-prompt-manager": {
    title: "AI Prompt Manager",
    tagline: "An intelligent workspace for AI prompts.",
    description:
      "A tool for power users of LLMs to save, categorize, and execute complex prompt chains. Includes a beautiful drag-and-drop interface and offline-first support.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070",
    date: "March 2023",
    role: "Full-Stack Developer",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    stack: ["React", "Zustand", "Motion", "OpenAI API", "IndexedDB"],
    features: [
      "Offline-first architecture using IndexedDB",
      "Complex prompt chaining and variable interpolation",
      "Drag-and-drop folder organization",
      "One-click execution via OpenAI API integration",
    ],
    learnings:
      "Implementing an offline-first architecture taught me a lot about data synchronization strategies and handling eventual consistency. Managing complex local state with Zustand proved to be highly effective and scalable.",
  },
  "e-commerce-storefront": {
    title: "E-Commerce Storefront",
    tagline: "Headless commerce solution achieving perfect Lighthouse scores.",
    description:
      "A modern, edge-rendered storefront built on top of Shopify's Storefront API. Designed to provide sub-second page loads and a highly personalized shopping experience.",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=2070",
    date: "January 2024",
    role: "Frontend Developer",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    stack: ["Next.js", "Shopify API", "GraphQL", "Radix UI", "Tailwind CSS"],
    features: [
      "Edge-rendered product pages for sub-100ms TTFB",
      "Optimized custom checkout flow increasing conversion by 15%",
      "Dynamic personalization based on user browsing history",
      "Accessible, keyboard-navigable UI components",
    ],
    learnings:
      "Working heavily with GraphQL and edge computing shifted my perspective on modern web architecture. I learned how to balance aggressive caching with the need for real-time inventory updates using stale-while-revalidate patterns.",
  },
};
