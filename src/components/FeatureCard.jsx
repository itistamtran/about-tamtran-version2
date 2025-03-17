import React, { useState } from "react";
import { Link } from "react-router-dom";

const FeatureCard = ({ title, description, link, image, external }) => {
  const [isHovered, setIsHovered] = useState(false);

  return external ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={cardLinkStyle}
    >
      <div
        style={{
          ...cardStyle,
          transform: isHovered ? "translateY(-5px)" : "translateY(0px)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={imageContainerStyle}>
          <img
            src={image}
            alt={title}
            style={{
              ...imageStyle,
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          />
        </div>
        <h3 style={titleStyle}>{title}</h3>
        <p style={descriptionStyle}>{description}</p>
      </div>
    </a>
  ) : (
    <Link to={link} style={cardLinkStyle}>
      <div
        style={{
          ...cardStyle,
          transform: isHovered ? "translateY(-5px)" : "translateY(0px)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={imageContainerStyle}>
          <img
            src={image}
            alt={title}
            style={{
              ...imageStyle,
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          />
        </div>
        <h3 style={titleStyle}>{title}</h3>
        <p style={descriptionStyle}>{description}</p>
      </div>
    </Link>
  );
};

// Card Styles
const cardStyle = {
  background: "rgb(67, 67, 67)", 
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
  transition: "0.3s ease-in-out",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.8)",
  overflow: "hidden",
  position: "relative",
};

// Image Hover Effect
const imageContainerStyle = {
  overflow: "hidden",
  borderRadius: "10px 10px 0 0",
};
const imageStyle = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  transition: "transform 0.3s ease-in-out",
};

// Title & Description Style 
const titleStyle = {
  color: "white", // 
  marginTop: "10px",
  fontSize: "1.2rem",
  fontWeight: "bold",
};

const descriptionStyle = {
  color: "white", 
  fontSize: "0.9rem",
};

// ✅ Link Style
const cardLinkStyle = {
  textDecoration: "none",
};

export default FeatureCard;
