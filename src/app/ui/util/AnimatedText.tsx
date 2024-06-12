"use client";
import { useState, useEffect } from "react";

const AnimatedText: React.FC<{ text: string; options: string[] }> = ({
  text,
  options,
}) => {
  const [animatedText, setAnimatedText] = useState<string>(text);
  const [wordIndex, setWordIndex] = useState<number>(0);

  useEffect(() => {
    const typingSpeed = 100;
    const pauseDuration = 1000;
    let isErasing = false;
    let charIndex = 0;

    const intervalId = setInterval(() => {
      const targetWord = options[wordIndex];

      if (!isErasing && charIndex <= targetWord.length) {
        setAnimatedText(targetWord.slice(0, charIndex));
        charIndex++;
      } else if (!isErasing && charIndex > targetWord.length) {
        isErasing = true;
        setTimeout(() => {
          charIndex--;
          setAnimatedText(targetWord.slice(0, charIndex));
        }, pauseDuration);
      } else if (isErasing && charIndex > 0) {
        charIndex--;
        setAnimatedText(targetWord.slice(0, charIndex));
      } else {
        isErasing = false;
        setWordIndex((prevIndex) => (prevIndex + 1) % options.length);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [wordIndex, options]);

  return (
    <h1 className="text-3xl italic font-bold dark:text-zinc-200">
      {animatedText}
    </h1>
  );
};

export default AnimatedText;