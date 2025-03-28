import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to set up scroll reveal observer
export function setupScrollReveal(ref: React.RefObject<HTMLElement>) {
  if (typeof window === 'undefined') return () => {};

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersect, observerOptions);

  if (ref.current) {
    const elements = ref.current.querySelectorAll('.scroll-reveal');
    elements.forEach(item => observer.observe(item));
  }

  return () => observer.disconnect();
}
