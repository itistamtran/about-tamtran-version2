import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { loadStarData, loadHoroscopeData } from "../utils/loadData";
import SkyScene from "./SkyScene";

export default function StarTracker() {
  const [stars, setStars] = useState([]);
  const [constellations, setConstellations] = useState({});

  useEffect(() => {
    loadStarData().then(setStars);
    loadHoroscopeData().then(setConstellations);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "500px", 
        overflow: "hidden", 
        background: "black",
        zIndex: -1, 
      }}
    >
      <Canvas>
        <SkyScene stars={stars} constellations={constellations} />
      </Canvas>
    </div>
  );
}
