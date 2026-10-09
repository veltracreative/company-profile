"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  width = "100%",
  direction = "up",
  delay = 0,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const hiddenTransform: Record<
    NonNullable<RevealProps["direction"]>,
    string
  > = {
    up: "translateY(24px)",
    down: "translateY(-24px)",
    left: "translateX(-24px)",
    right: "translateX(24px)",
  };

  return (
    <div
      ref={ref}
      style={{ width, maxWidth: "100%" }}
      className={`relative min-w-0 ${className}`}
    >
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translate3d(0, 0, 0)"
            : hiddenTransform[direction],
          transitionProperty: "opacity, transform",
          transitionDuration: "700ms",
          transitionTimingFunction: "ease-out",
          transitionDelay: `${delay}s`,
          willChange: isVisible ? "auto" : "opacity, transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};