import React from "react";

const message = "🎉 Exciting Collaborations Await! Let's Build Something Amazing Together!";

export default function ResponsiveMarquee() {
  return (
<<<<<<< HEAD
    <>
      {/* Desktop Marquee */}
      <div className="marquee-desktop">
        <div style={{
          width: "100%",
          overflow: "hidden",
          background: "#FFB6C1",
          padding: "10px 0",
          boxSizing: "border-box",
          position: "relative",
        }}>
          <style>{`
            @keyframes marquee-desktop {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
            .marquee-content-desktop {
              display: inline-block;
              white-space: nowrap;
              font-weight: bold;
              font-size: 1.1rem;
              animation: marquee-desktop 18s linear infinite;
              padding-left: 0.5rem;
            }
            @media (max-width: 600px) {
              .marquee-desktop { display: none !important; }
            }
          `}</style>
          <span className="marquee-content-desktop">{message}</span>
=======
    <div
      ref={containerRef}
      style={{
        width: "100%",
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
        paddingLeft: "8px",
        paddingRight: "8px",
        boxSizing: "border-box",
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
        {messages[chain[chain.length - 1]?.index]}
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
>>>>>>> 5c7eaf9cbefa6d41ffd735390ad005d0ded1d233
        </div>
      </div>

      {/* Mobile Marquee */}
      <div className="marquee-mobile">
        <div style={{
          width: "100%",
          overflow: "hidden",
          background: "#FFB6C1",
          padding: "10px 0",
          boxSizing: "border-box",
          position: "relative",
        }}>
          <style>{`
            @keyframes marquee-mobile {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-110%); }
            }
            .marquee-content-mobile {
              display: inline-block;
              white-space: nowrap;
              font-weight: bold;
              font-size: 0.9rem;
              animation: marquee-mobile 15s linear infinite;
              padding-left: 0.5rem;
            }
            @media (min-width: 601px) {
              .marquee-mobile { display: none !important; }
            }
          `}</style>
          <span className="marquee-content-mobile">{message}</span>
        </div>
      </div>
    </>
  );
}
