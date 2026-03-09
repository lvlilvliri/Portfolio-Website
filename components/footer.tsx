import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Telegram from "@/public/telegram";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className="border-t border-white/5 bg-zinc-950/50 mt-24 py-12">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-zinc-500 text-sm">
          Loosely designed in Figma and coded in Visual Studio Code by yours
          truly. <br /> Built with Next.js and Tailwind CSS, deployed with
          Vercel.
        </p>
        <div className="flex items-center gap-4 text-zinc-400">
          <a
            href="https://github.com/lvlilvliri"
            className="hover:text-zinc-50 transition-colors"
            aria-label="GitHub"
            target="_blank"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://t.me/Delfnl"
            target="_blank"
            className="hover:text-zinc-50 transition-colors"
          >
            <Telegram />
          </a>
          <a
            href="https://www.linkedin.com/in/viacheslav-lukianets-9009aa388/"
            className="hover:text-zinc-50 transition-colors"
            aria-label="LinkedIn"
            target="_blank"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:lvlilvliri@gmail.com"
            className="hover:text-zinc-50 transition-colors"
            aria-label="Send email"
            target="_blank"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
