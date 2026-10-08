import { useEffect, useRef, useState } from "react";

type RevealOptions = {
  threshold?: number;
  rootMargin?: string;
};

/**
 * Reveals an element once it scrolls into view. Fires a single time, then
 * stops observing so the element simply settles and stays put.
 */
export const useReveal = <T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) => {
  const { threshold = 0.15, rootMargin = "0px 0px -8% 0px" } = options;
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, visible };
};
