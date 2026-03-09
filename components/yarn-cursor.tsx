"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function YarnCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.img
      src="/yarn.png"
      alt="cursor"
      width={32}
      height={32}
      className="pointer-events-none fixed z-9999  invert"
      style={{
        left: pos.x - 12,
        top: pos.y - 16,
      }}
    />
  );
}
