import { useEffect, useRef } from "react";
import "./GalaxyFallback.css";

export default function GalaxyFallback() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const stars = [];

    // Resize canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create stars with different colors
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? "#FFD700" : "#ADD8E6", // Yellow & Blue stars
      });
    }

    function drawGalaxy() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw a swirling galaxy effect
      ctx.strokeStyle = "rgba(138,43,226,0.3)"; 
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < Math.PI * 4; i += 0.1) {
        const x = canvas.width / 2 + Math.cos(i) * i * 5;
        const y = canvas.height / 2 + Math.sin(i) * i * 5;
        ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
        star.x += Math.sin(Date.now() / 1000) * star.speed;
        star.y += Math.cos(Date.now() / 1000) * star.speed;
      });

      requestAnimationFrame(drawGalaxy);
    }

    drawGalaxy();
  }, []);

  return <canvas ref={canvasRef} className="fallback-canvas"></canvas>;
}
