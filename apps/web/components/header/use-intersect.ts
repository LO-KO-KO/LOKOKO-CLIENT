import { useCallback, useEffect, useRef, useState } from 'react';

export const useIntersect = (
  initialVisible: boolean,
  options?: IntersectionObserverInit
) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(initialVisible);
  const lastScrollY = useRef(0);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (!entry) return;

    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
      setIsVisible(true);
      return;
    }

    if (!entry.isIntersecting) {
      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      }
    } else {
      if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }
    }

    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(callback, {
      ...options,
      threshold: 0,
    });
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options, callback]);

  return [ref, isVisible] as const;
};
