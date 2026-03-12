"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import toast from "react-hot-toast";

interface Props {
  className?: string;
}

export const Contact: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // предотвратить перезагрузку страницы
    setSending(true);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("message", message);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/lvlilvliri@gmail.com",
        {
          method: "POST",
          body: formData,
        },
      );

      if (res.ok) {
        toast.success("Message sent!");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Error sending message");
      }
    } catch (err) {
      toast.error("Error sending message");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      className={`pt-24 border-t border-zinc-800/50 flex flex-col items-center justify-center text-center space-y-6 ${className}`}
      id="contact"
    >
      <h2 className="text-3xl font-bold tracking-tight">
        Let's build something together
      </h2>
      <p className="text-zinc-400 max-w-md">
        I'm currently looking for new opportunities. Whether you have a project
        to discuss or just want to say hi, my inbox is open.
      </p>
      <div className="mt-4 flex justify-center relative min-h-[220px]">
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.button
              key="button"
              layoutId="contact-card"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-zinc-100 text-zinc-950 px-8 py-4 rounded-md font-medium hover:bg-zinc-200 max-h-12"
            >
              Say Hello
            </motion.button>
          ) : (
            <motion.div
              key="form"
              layoutId="contact-card"
              className="absolute bg-zinc-900 border border-zinc-800 p-4 rounded-xl sm:w-80 md:w-96 lg:w-105 w-75"
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="flex flex-col gap-3"
              >
                <h3 className="text-zinc-200 font-medium">Send me a message</h3>

                <Input
                  autoFocus
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-zinc-800 text-white px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500  selection:bg-zinc-200 selection:text-zinc-900"
                  required
                />

                <Textarea
                  placeholder="Your message"
                  rows={3}
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-zinc-800 text-white px-3 py-2 rounded-md outline-none resize-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500 selection:bg-zinc-200 selection:text-zinc-900"
                  required
                />

                <div className="flex justify-end gap-4 mt-2">
                  <button
                    type="submit"
                    disabled={sending}
                    className="bg-zinc-100 text-zinc-900 px-4 py-2 rounded-md cursor-pointer disabled:opacity-50"
                  >
                    {sending ? "Sending..." : "Send"}
                  </button>
                </div>
              </motion.form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
