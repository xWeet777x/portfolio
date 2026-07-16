"use client";

import { useCallback, useEffect, useRef, useState, type AnchorHTMLAttributes } from "react";

type RandomSwapLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  text: string;
};

export function RandomSwapLink({ text, className = "", ...props }: RandomSwapLinkProps) {
  const [displayText, setDisplayText] = useState(text);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const finishRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stop = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (finishRef.current) clearTimeout(finishRef.current);
    timerRef.current = null;
    finishRef.current = null;
    setDisplayText(text);
  }, [text]);

  const play = useCallback(() => {
    stop();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const original = Array.from(text);
    const movable = original.map((character, index) => character === " " ? -1 : index).filter(index => index >= 0);
    let frame = 0;

    timerRef.current = setInterval(() => {
      const next = [...original];
      const swaps = frame < 4 ? 2 : 1;
      for (let count = 0; count < swaps; count += 1) {
        const first = movable[Math.floor(Math.random() * movable.length)];
        const second = movable[Math.floor(Math.random() * movable.length)];
        [next[first], next[second]] = [next[second], next[first]];
      }
      setDisplayText(next.join(""));
      frame += 1;
      if (frame >= 7 && timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }, 46);

    finishRef.current = setTimeout(() => {
      setDisplayText(text);
      finishRef.current = null;
    }, 390);
  }, [stop, text]);

  useEffect(() => () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (finishRef.current) clearTimeout(finishRef.current);
  }, []);

  return (
    <a
      {...props}
      className={`random-swap ${className}`.trim()}
      aria-label={text}
      onPointerEnter={play}
      onPointerLeave={stop}
      onFocus={play}
      onBlur={stop}
      onTouchStart={play}
    >
      <span className="random-swap__visual" aria-hidden="true">{displayText}</span>
    </a>
  );
}
