"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { z } from "zod";

const TypewriterTextPropsSchema = z.object({
  words: z.array(
    z.object({
      text: z.string(),
      className: z.string().optional(),
    })
  ),
  className: z.string().optional(),
  cursorClassName: z.string().optional(),
  delayBetweenWords: z.number().optional(),
});

type TypewriterTextProps = z.infer<typeof TypewriterTextPropsSchema>;

export default function TypewriterText({
  words,
  className,
  cursorClassName,
  delayBetweenWords = 1000,
}: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[currentWordIndex]!.text || "";

  // Effect for handling the typing animation
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const type = () => {
      // If we're deleting, remove a character
      if (isDeleting) {
        if (currentText.length > 0) {
          // Remove one character
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Move to the next word when we've finished deleting
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
      // If we're typing
      else {
        if (currentText.length < currentWord.length) {
          // Add one character
          setCurrentText(currentText + currentWord.charAt(currentText.length));
        } else if (currentText.length === currentWord.length) {
          // Pause before deleting
          timeout = setTimeout(() => {
            setIsDeleting(true);
            type();
          }, delayBetweenWords);
        }
      }
    };

    // Start the typing effect
    timeout = setTimeout(type, 50);

    // Clean up the timeout on component unmount or when dependencies change
    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    currentWord,
    words.length,
    delayBetweenWords,
  ]);

  return (
    <span className={cn("inline-flex", className)}>
      <span className={cn(words[currentWordIndex]?.className)}>
        {currentText.length ? currentText : <>&nbsp;</>}
      </span>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block ml-1 rounded-sm w-[2px] h-fill align-center bg-chuva-white",
          cursorClassName
        )}
      ></motion.span>
    </span>
  );
}
