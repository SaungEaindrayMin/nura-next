import { useEffect, useRef, useState } from "react";

export default function useSlideScroll(totalSections) {
  const [index, setIndex] = useState(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!document.body.classList.contains("slide-mode")) return;

      e.preventDefault();

      if (isAnimating.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;

      setIndex((prev) => {
        const next = prev + direction;

        if (next < 0 || next >= totalSections) {
          document.body.classList.remove("slide-mode");
          return prev;
        }

        isAnimating.current = true;
        setTimeout(() => (isAnimating.current = false), 900);
        return next;
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [totalSections]);

  return index;
}
