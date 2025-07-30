import React, { useEffect, useRef, useState } from "react";

const messages = [
  "🎉 Exciting Collaborations Await! Let's Build Something Amazing Together!",
];

export default function TrulyInfiniteChainMarquee() {
  const containerRef = useRef(null);
  const measureRef = useRef(null);
  const [duration, setDuration] = useState(15);
  const [chain, setChain] = useState([
    { index: 0, key: Date.now() }
  ]);
  const messageCounter = useRef(1); // tracks next message index

  const [fontSize, setFontSize] = useState("1rem");

  useEffect(() => {
  function handleResize() {
    if (window.innerWidth < 400) setFontSize("0.7rem");
    else if (window.innerWidth < 600) setFontSize("0.8rem");
    else setFontSize("1rem");
  }
  window.addEventListener("resize", handleResize);
  handleResize();
  return () => window.removeEventListener("resize", handleResize);
}, []);
  // Measure for animation duration
  useEffect(() => {
    const measure = measureRef.current;
    const container = containerRef.current;
    if (measure && container) {
      const textWidth = measure.offsetWidth;
      const containerWidth = container.offsetWidth;
      const pixelsPerSecond = 80;
      const fullDistance = textWidth + containerWidth;
      setDuration(fullDistance / pixelsPerSecond);
    }
  }, [chain[chain.length - 1]?.index]);

  // Run next message every duration/factor seconds infinity times
  useEffect(() => {
    const getFactor = () => {
    if (window.innerWidth < 500) return 2;
    if (window.innerWidth < 900) return 3;
    if (window.innerWidth < 1200) return 5;
    return 6;
  };
    const factor = getFactor();
    const interval = setInterval(() => {
      setChain(c => [
        ...c,
        { index: messageCounter.current % messages.length, key: Date.now() + Math.random() }
      ]);
      messageCounter.current += 1;
    }, (duration / factor) * 1500);

    return () => clearInterval(interval);
  }, [duration, messages.length]);

  // Remove each message after its full duration
  useEffect(() => {
    if (chain.length > 0) {
      const timers = chain.map((entry, i) =>
        setTimeout(() => {
          setChain(c => c.filter((_, idx) => idx !== i));
        }, duration * 1150)
      );
      return () => timers.forEach(clearTimeout);
    }
  }, [chain, duration]);

  // Reset counter when reload the component 
  useEffect(() => {
    messageCounter.current = 1;
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        height: "50px",
        position: "relative",
        background: "#FFB6C1",
        color: "black",
        borderRadius: "2px",
        margin: "10px 0 40px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        fontWeight: "bold",  
      }}
    >
      {/* For measuring only */}
      <span
        ref={measureRef}
        style={{
          position: "absolute",
          whiteSpace: "nowrap",
          visibility: "hidden",
          fontSize: "1rem",
          paddingRight: "80px",
          pointerEvents: "none",
        }}
      >
        {messages[chain[chain.length]?.index]}
      </span>
      <style>{`
        .chain-marquee {
          position: absolute;
          white-space: nowrap;
          top: 50%;
          transform: translateY(-50%);
          font-size: fontSize;
          padding-right: 80px;
          will-change: left;
        }
        .marquee-animate {
          animation: marqueeAnim linear forwards;
        }
        @keyframes marqueeAnim {
          from { left: 100%; }
          to { left: -100%; }
        }
      `}</style>
      {chain.map(entry => (
        <div
          key={entry.key}
          className="chain-marquee marquee-animate"
          style={{
            animationDuration: `${duration}s`,
            animationDelay: "0s",
            left: "100%",
            fontSize: fontSize,
          }}
        >
          <span>{messages[entry.index]}</span>
        </div>
      ))}
    </div>
  );
}