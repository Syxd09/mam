import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
};

const AnimatedCounter = ({ to, duration = 1600, suffix = "", prefix = "", decimals = 0, className }: Props) => {
  const [val, setVal] = useState(to);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const prevTo = useRef(to);

  useEffect(() => {
    // If the target value changes after initial animation, smoothly animate to the new target
    if (started.current && prevTo.current !== to) {
      const startVal = val;
      prevTo.current = to;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / 800);
        const eased = 1 - Math.pow(1 - t, 3);
        setVal(startVal + (to - startVal) * eased);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      return;
    }

    prevTo.current = to;

    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(to * eased);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
