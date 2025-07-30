import React from "react";

const message = "🎉 Exciting Collaborations Await! Let's Build Something Amazing Together!";

export default function ResponsiveMarquee() {
  return (
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
