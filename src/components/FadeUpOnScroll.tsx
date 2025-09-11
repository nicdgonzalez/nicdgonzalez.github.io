"use client";

import { useEffect, useRef, useState } from "react";

// This wraps everything in an additional div, but that can be fixed later.
export const FadeUpOnScroll = ({ children }: { children: React.ReactNode }) => {
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
      className={`${
        isVisible
          ? "opacity-100 animate-once animate-fade-up animate-ease-in"
          : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};
