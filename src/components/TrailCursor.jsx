import { useEffect, useRef } from "react";

const TrailCursor = () => {
  const trailCount = 30;
  const trailRefs = useRef([]);
  const colors = ["#a5f3fc", "#f9a8d4", "#c084fc", "#fcd34d"]; // cyan, pink, purple, gold

  useEffect(() => {
    const trailEls = trailRefs.current;
    const positions = new Array(trailCount).fill({ x: 0, y: 0 });

    const move = (e) => {
      positions.unshift({ x: e.clientX, y: e.clientY });
      positions.pop();

      trailEls.forEach((el, i) => {
        if (el) {
          const { x, y } = positions[i];
          el.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {Array.from({ length: trailCount }).map((_, i) => {
        const color = colors[i % colors.length];
        const blur = Math.random() * 2 + 1;
        const glow = Math.random() * 8 + 2;

        return (
          <div
            key={i}
            ref={(el) => (trailRefs.current[i] = el)}
            className="trail-cursor"
            style={{
              opacity: (1 - i / trailCount).toFixed(2),
              filter: `blur(${blur}px)`,
              backgroundColor: color,
              boxShadow: `0 0 ${glow}px ${color}`,
              transition: `transform 0.07s ease-out`,
            }}
          />
        );
      })}
    </>
  );
};

export default TrailCursor;
