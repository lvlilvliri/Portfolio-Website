"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  text: string;
  delay?: number;
};

type Options = {
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
  loop?: boolean;
};

/**
 *
 *
 *
 * @param messages
 * @param param1
 * @returns
 */
export function useTypewriter(
  messages: Message[],
  { speed = 50, deleteSpeed = 30, pause = 1000, loop = false }: Options = {},
) {
  const messagesRef = useRef(messages); // фиксируем массив
  const msgIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [displayed, setDisplayed] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const msgs = messagesRef.current;

    const run = () => {
      const current = msgs[msgIndex.current];
      if (!current) return;

      const text = current.text;

      if (!deleting.current) {
        charIndex.current++;

        setDisplayed(text.slice(0, charIndex.current));

        if (charIndex.current === text.length) {
          deleting.current = true;
          timeoutRef.current = setTimeout(run, pause);
          return;
        }

        timeoutRef.current = setTimeout(run, speed);
      } else {
        charIndex.current--;

        setDisplayed(text.slice(0, charIndex.current));

        if (charIndex.current === 0) {
          deleting.current = false;
          msgIndex.current++;

          if (msgIndex.current >= msgs.length) {
            if (!loop) return;
            msgIndex.current = 0;
          }

          const delay = msgs[msgIndex.current]?.delay ?? 0;

          timeoutRef.current = setTimeout(run, delay);
          return;
        }

        timeoutRef.current = setTimeout(run, deleteSpeed);
      }
    };

    timeoutRef.current = setTimeout(run, msgs[0]?.delay ?? 0);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return displayed + (cursorVisible ? "_" : " ");
}
