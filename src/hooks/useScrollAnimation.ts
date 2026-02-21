import { useEffect, useState, useRef, RefObject } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
}

interface UseScrollAnimationReturn {
  ref: RefObject<HTMLDivElement | null>;
  isVisible: boolean;
}

/**
 * Custom hook for scroll-triggered animations using IntersectionObserver.
 * Replaces duplicate IntersectionObserver implementations across components.
 * 
 * @param options.threshold - Visibility threshold (0 to 1) for triggering animation
 * @returns ref - Ref to attach to the element to animate
 * @returns isVisible - Boolean indicating if element is in viewport
 */
export function useScrollAnimation(
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn {
  const { threshold = 0.1 } = options;
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible };
}
