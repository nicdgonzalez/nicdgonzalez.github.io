"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface FadeUpOnScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

// This wraps everything in an additional div, but that can be fixed later.
export const FadeUpOnScroll = (
  { children, className }: FadeUpOnScrollProps,
) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    if (domRef.current === null) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (domRef.current === null || !entry.isIntersecting) {
          return;
        }

        setVisible(true);
        observer.unobserve(domRef.current);
      });
    }, { threshold: 0.3 });

    observer.observe(domRef.current);

    return () => observer.disconnect();
  });

  return (
    <div
      ref={domRef}
      className={cn(
        `${
          isVisible
            ? "opacity-100 animate-once animate-fade-up animate-ease-in"
            : "opacity-0"
        }`,
        className,
      )}
    >
      {children}
    </div>
  );
};
