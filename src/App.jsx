import React, { useState, useEffect } from "react";  
import SkyScene from "./components/SkyScene";
import { Canvas } from "@react-three/fiber";  
import { loadStarData, loadZodiacData } from "./utils/loadData"; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import './styles/global.css';

import TopBar from "./components/topbar";
import Footer from "./components/footer";
import FeatureCard from "./components/FeatureCard";
import Testimonials from "./components/Testimonials";
import SkillsTechnologies from "./components/SkillsTechnologies";
import TrailCursor from "./components/TrailCursor";
import ForSale from './containers/forsale';
import Contact from "./containers/contact";
import Resume from "./containers/resume";
import Projects from './containers/projects';
import SoftwareApplications from "./containers/projects/SoftwareApplications";
import OperationsResearch from "./containers/projects/OperationsResearch";
import MachineLearning from "./containers/projects/MachineLearning.jsx";
import AllProjects from "./containers/allprojects";
import CPPLibrary from "./containers/allprojects/CPPlibrary";
import NurseSchedule from "./containers/allprojects/NurseSchedule";
import KnapsackLogistics from "./containers/allprojects/KnapsackLogistics";
import BrainTumorDetected from "./containers/allprojects/BrainTumorDetected";
import MarketTrendLSTM from "./containers/allprojects/MarketTrendLSTM";
import ToxicCommentClassification from "./containers/allprojects/ToxicCommentClassification";
import "./App.css";

function isWebGLSupported() {
  try {
    const canvas = document.createElement("canvas");
    return !!window.WebGLRenderingContext && !!canvas.getContext("webgl");
  } catch (e) {
    return false;
  }
}

/* Responsive adjustments */
const responsiveStyles = `
@media (max-width: 1024px) {
    .grid-container { 
        grid-template-columns: repeat(4, 1fr);
        width: 100%
        max-width: 100vw
    }
    .image-container img {
        width: 100%; /* Scales down images proportionally */
    }
}

@media (max-width: 768px) {
    .grid-container { 
        grid-template-columns: repeat(4, 1fr); 
        width: 100vw;
        max-width: 100%
    }
    .image-container {
        width: 20vw; 
        max-width: 100%
    }
}
`;


function App() {
  const [stars, setStars] = useState([]);
  const [constellations, setConstellations] = useState({});
  const webglSupported = isWebGLSupported();

  const [position, setPosition] = useState({ top: "50%", left: "50%" });

  const updatePosition = () => {
        if (window.innerWidth < 768) {
            setPosition({ top: "20%", left: "29%" }); // Mobile
        } else if (window.innerWidth < 1024) {
            setPosition({ top: "28%", left: "39%" }); // Tablet
        } else {
            setPosition({ top: "27%", left: "42%" }); // Desktop
        }
  };

  const [starsHeight, setStarsHeight] = useState("400px");

  const updateStarsHeight = () => {
    if (window.innerWidth < 768) {
        setStarsHeight("250px"); // Shorter height for mobile
    } else {
        setStarsHeight("400px"); // Default height for desktop
    }
  };
  

  useEffect(() => {
    loadStarData().then((data) => {
      console.log("Loaded Stars:", data.length, "stars.");
      if (data.length === 0) console.error("❌ No stars loaded!");
      setStars(data);
    });

    loadZodiacData().then((data) => {
      console.log("Loaded Constellations:", Object.keys(data).length, "signs.");
      if (Object.keys(data).length === 0) console.error("❌ No constellations loaded!");
      setConstellations(data);
    });

    if (!document.querySelector("#scroll-text-style")) {
      const styleTag = document.createElement("style");
      styleTag.id = "scroll-text-style";  
      styleTag.innerHTML = `
          @keyframes scrollText {
              from { transform: translateX(100%); }
              to { transform: translateX(-100%); }
          }
      `;
      document.head.appendChild(styleTag);
    }
    // Run the position and height functions
    updatePosition();
    updateStarsHeight(); // Set initial height
    // Add event listeners for window resize
    window.addEventListener("resize", updatePosition);
    window.addEventListener("resize", updateStarsHeight);
    // Cleanup event listeners when component unmounts
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("resize", updateStarsHeight);
    }
      

  }, []);

  return (
    <Router>
      <TrailCursor />
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "var(--bg-color)", color: "var(--text-color)", }}>
    

        <TopBar />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <div>
              {/* Star Background Section */}
            <div style={{ width: "100%", height: starsHeight, overflow: "auto", position: "relative", background: "black", display: "flex", justifyContent: "center", alignItems: "center"}}>
            {/* Centered Animated Text */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{
                position: "absolute",
                top: position.top,  
                left: position.left,
                fontSize: "clamp(5rem, 7vw, 7rem)",  
                fontFamily: "'Great Vibes', cursive",
                fontWeight: "400",
                WebkitTextStroke: "1px white",
                color: "white",
                textAlign: "center",       
                whiteSpace: "nowrap",
                zIndex: 999,
                pointerEvents: "none",
                textShadow: "0 1px 30px #FFB6C1",
              }}>
              tam tran
            </motion.div>
            {/* Centered Animated Subtitle */}
            <div style={{
              position: "absolute",
              top: "55%", 
              left: "50%", 
              transform: "translateX(-50%)",
              fontSize: "1rem",
              fontFamily: "'Outfit', sans-serif",
              color: "white",
              textAlign: "center",
              whiteSpace: "nowrap",
              zIndex: 999, 
              pointerEvents: "none",
              textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
              }}>
              Computer Science | Data Science | Mathematics
            </div>

            {/* Centered Animated Description */}
            <div style={{
              position: "absolute",
              top: "90%",  
              left: "50%",  
              transform: "translateX(-50%)",  
              maxWidth: "80%", 
              fontSize: "clamp(0.8rem, 2vw, 0.9rem)",  
              fontFamily: "Arial, sans-serif",
              color: "white",
              textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
              whiteSpace: "nowrap", 
              textAlign: "center",  
              overflow: "visible",
              pointerEvents: "none",
              zIndex: 100,
              }}> 
              Experience real-time stars—move your mouse to explore!
            </div>

            {/* Show Video if WebGL is NOT supported */}
            {!webglSupported && (
              <video autoPlay loop muted 
              playsInline 
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1
              }}>
                <source src="/media/4k-SPACE-Moving-Background.mp4" type="video/mp4" />
                Your browser does not support showing real-time stars.
              </video>
            )}

            {/* Show Real-Time Stars if WebGL is Supported */}
            {webglSupported && (
              <Canvas 
                style={{ width: "100vw", height: "100%", justifyContent: "center" }}
                camera={{ position: [5, 0, 5] }}>
                <SkyScene stars={stars} constellations={constellations} />
              </Canvas>
            )}
          </div>
          

          {/* Image Grid Section 
          
          */}
          

          {/* Pink rectangle below grid */}
          <div style={{
            width: "100%", 
            height: "40px", 
            backgroundColor: "#FFB6C1",
            margin: "10px 0px",
            borderRadius: "2px",
            whiteSpace: "nowrap",
            marginBottom: "40px"
            }}>
            <div style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              alignItems: "center", 
              paddingTop: "4px",
              animation: "scrollText 30s linear infinite", // Makes text loop continuously
              }}>
                🎉 Exciting Collaborations Await! Let's Build Something Amazing Together! 🎉 Exciting Collaborations Await! Let's Build Something Amazing Together! 🎉
            </div>
          </div>

          {/* About Me section: one side image, one side text */}
          <div style={{
            display: "flex",
            flexDirection: window.innerWidth < 768 ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            paddingLeft: "30px",
            paddingRight: "30px",
            gap: "30px",
            maxWidth: "1300px",
            overflow: "hidden",
            margin: "auto",
            textAlign: window.innerWidth < 768 ? "center" : "left",
            backgroundColor: "var(--bg-color)",
            color: "var(--text-color)",
            }}>

            {/* Left Side (Image) */}
            <div style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "600px",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingTop: "20px",
              }}>
              <img 
                src="/media/about-me.jpg" 
                alt="about me"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  objectFit: "cover",
                  borderTopLeftRadius: "35px",
                  borderBottomRightRadius: "35px",
                }}/>
            </div>

            {/* Right Side (Text) */}
            <div style={{
              flex: 1,
              textAlign: window.innerWidth < 768 ? "center" : "left", // Center text on mobile
              padding: "20px",
              paddingRight: "30px",
              }}>
              <h2 style={{
                fontSize: "clamp(1.2rem, 4vw, 2rem)",
                fontWeight: "bold",
                }}>
                About Me
              </h2>
              <p style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                lineHeight: "1.6",
                maxWidth: "800px",
                fontWeight: "300"
                }}>
                I'm often described as confident and brave—qualities that drive me to embrace new challenges and continuously grow. I'm currently pursuing a major in Computer Science with minors in Data Science and Mathematics at Cal Poly Pomona, where I'm sharpening my skills and expanding my knowledge.
                <br />
                To me, coding is more than just a technical skill—it's a powerful tool to bring innovative ideas to life and create meaningful impact. I'm passionate about collaborating with others to shape a brighter future filled with curiosity, creativity, and endless possibilities.
                <br />
                Let’s work together to bring our shared vision to life.
              </p>
    
              {/* Contact Button */}
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <button style={{
                  marginTop: "15px",
                  padding: "12px 24px",
                  backgroundColor: "black",
                  border: "2px solid #FFB6C1",
                  color: "#FFB6C1",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "25px",
                  cursor: "pointer",
                  transition: "0.3s ease-in-out",
                }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#FFB6C1";  
                    e.target.style.color = "black";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "black"; 
                    e.target.style.color = "#FFB6C1";         
                  }}
                >
                  CONTACT ME
                </button>
              </Link>
            </div>
          </div>    

          <div
            style={{
              width: "100%",
              padding: "40px 0",
              textAlign: "center",  
            }}>
            
            <SkillsTechnologies />
  
            {/* Features Section */}
            <div style={{maxWidth: "1200px", width: "90%", background: "#FFB6C1", margin: "auto", }}>
              {/* Features Title */}
              <h2 className="features-title">Feature Highlights</h2>
              {/* Feature Cards Grid */}
              <div className="features-grid">
                <FeatureCard title="Project" description="Check out my projects that showcase my problem-solving skills." link="/projects" image="/media/project-1.jpg" />
                <FeatureCard title="Experience" description="With hands-on experience, I apply my skills to deliver innovative solutions." link="/resume" image="/media/experience-1.jpg" />
                <FeatureCard title="For Sale" description="Explore the digital images I’ve created to find the perfect piece for your style." link="/forsale" image="/media/forsale-1.jpg" />
              </div>
            </div>

            {/* Responsive Styling */}
            <style>{`
              .features-title {
                font-size: clamp(1.2rem, 4vw, 2rem);
                font-weight: 800;
                color: black;
                margin-bottom: -5px;
                margin-top: 10px;
                text-align: center;
              }

              .features-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 30px;
                padding: 30px;
                max-width: 1200px;
                margin: auto;
              }

              /* Center "Features" title on smaller screens */
              @media (max-width: 768px) {
                .features-title {
                  margin-left: 0 !important;
                  text-align: center !important;
                }
              }
            `}</style>
          </div>

          <Testimonials /></div>
          } /> 

          <Route path="/contact" element={<Contact />} />
          <Route path="/forsale" element={<ForSale/>} />
          <Route path="/resume" element={<Resume/>} />
          
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/SoftwareApplications" element={<SoftwareApplications />} />
          <Route path="/projects/OperationsResearch" element={<OperationsResearch />} />
          <Route path="/projects/MachineLearning" element={<MachineLearning />} />
          
          {/* All Projects */}
          <Route path="/allprojects" element={<AllProjects />} />
          <Route path="/allprojects/CPPlibrary" element={<CPPLibrary/>} />
          <Route path="/allprojects/NurseSchedule" element={<NurseSchedule/>} />
          <Route path="/allprojects/KnapsackLogistics" element={<KnapsackLogistics/>} />
          <Route path="/allprojects/BrainTumorDetected" element={<BrainTumorDetected/>} />
          <Route path="/allprojects/MarketTrendLSTM" element={<MarketTrendLSTM/>} />
          <Route path="/allprojects/ToxicCommentClassification" element={<ToxicCommentClassification/>} />

        </Routes>      
        <Footer />    
      </div>
    </Router>
  );
}

export default App;
