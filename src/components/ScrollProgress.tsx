import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let rafId = 0;
    const update = () => {
      rafId = 0;
      const h = document.documentElement;
      const height = h.scrollHeight - h.clientHeight;
      setProgress(height > 0 ? (h.scrollTop / height) * 100 : 0);
    };
    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);
  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-[2px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-accent via-highlight to-accent transition-[width] duration-150 ease-out shadow-[0_0_12px_hsl(var(--accent))]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
