"use client";

import React, { useRef } from "react";
import { frame, motion, useSpring, useTransform } from "motion/react";
import { useFollowPointer } from "@/shared/hooks/useFollowPointer";
import Image from "next/image";

interface Props {
  className?: string;
}

const cat = {
  width: 100,
  height: 100,
  backgroundColor: "#5686F5",
  borderRadius: "50%",
  position: "relative" as const,
};

const MotionImage = motion(Image);

export const KittySpring: React.FC<Props> = ({ className }) => {
  const ref = useRef<HTMLDivElement>(null);

  //   @ts-ignore
  const { x, y } = useFollowPointer(ref);

  return (
    <MotionImage
      // @ts-ignore
      ref={ref}
      src="/cat.png"
      alt="cat"
      width={100}
      height={100}
      style={{ x, y }}
      animate={{ rotate: 360 }}
      whileHover={{ rotate: 10, scale: 1.2 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
      className="absolute -z-10"
    />
  );
};
