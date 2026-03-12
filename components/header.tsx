"use client";

import React, { use, useEffect, useMemo } from "react";
import { useTypewriter } from "@/shared/hooks/useTypeWriter";
import Link from "next/link";
import { Cat } from "lucide-react";
import { KittySpring } from "./kitty-spring";
import { YarnCursor } from "./yarn-cursor";
import { useMedia } from "react-use";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const isMobile = useMedia("(max-width: 768px)", true);
  const [kittySpring, setKittySpring] = React.useState(false);

  useEffect(() => {
    if (kittySpring) {
      document.body.style.cursor = "none";
    } else {
      document.body.style.cursor = "auto";
    }

    return () => {
      document.body.style.cursor = "auto";
    };
  }, [kittySpring]);

  const text = useTypewriter([{ text: "Hello!", delay: 2000 }]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        {!isMobile && (
          <>
            {kittySpring && (
              <>
                <KittySpring />
                <YarnCursor />
              </>
            )}
            <button
              onClick={() => setKittySpring(!kittySpring)}
              className="text-sm font-semibold tracking-tight hover:text-zinc-300 transition-colors cursor-pointer"
            >
              <Cat />
            </button>
          </>
        )}

        <nav className="flex items-center gap-6 text-sm text-zinc-400 font-medium">
          <a
            href="/Viacheslav-Lukianets-Frontend-Developer.pdf"
            download
            className="hover:text-zinc-50 transition-colors"
          >
            CV
          </a>
          <Link
            href="/#home"
            onClick={(e) => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:text-zinc-50 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/#projects"
            className="hover:text-zinc-50 transition-colors"
          >
            Projects
          </Link>
          <Link href="/#about" className="hover:text-zinc-50 transition-colors">
            About
          </Link>
          <Link
            href="/#contact"
            className="hover:text-zinc-50 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};
