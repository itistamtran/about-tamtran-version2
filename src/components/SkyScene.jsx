import { useFrame } from "@react-three/fiber";
import { Stars, OrbitControls, Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// Convert Celestial Coordinates (RA, Dec) to 3D Cartesian
function celestialToCartesian(ra, dec, radius = 1000) {
  if (ra == null || dec == null || isNaN(ra) || isNaN(dec)) {
    console.warn("🚨 Invalid RA/Dec detected:", { ra, dec });
    return new THREE.Vector3(0, 0, 0); // Safe fallback
  }

  const radRA = (ra / 360) * (2 * Math.PI);
  const radDec = (dec / 360) * (2 * Math.PI);

  const x = radius * Math.cos(radDec) * Math.cos(radRA);
  const y = radius * Math.sin(radDec);
  const z = radius * Math.cos(radDec) * Math.sin(radRA);

  return new THREE.Vector3(
    isNaN(x) ? 0 : x,
    isNaN(y) ? 0 : y,
    isNaN(z) ? 0 : z
  );
}

export default function SkyScene({ stars = [], constellations = {} }) {
  const cameraRef = useRef();

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.rotation.y += 0.0005;
    }
  });  

  // Filter out invalid stars (NaN, undefined, Infinity)
  const filteredStars = stars
    .map((star, index) => ({
      index,
      ...star,
      valid:
        star &&
        typeof star.ra === "number" &&
        typeof star.dec === "number" &&
        !isNaN(star.ra) &&
        !isNaN(star.dec) &&
        isFinite(star.ra) &&
        isFinite(star.dec),
    }))
    .filter((star) => star.valid);

  // Map original index to filtered index
  const starIndexMap = new Map();
  filteredStars.forEach((star, newIndex) => {
    starIndexMap.set(star.index, newIndex);
  });

  console.log("🔍 Checking Star Positions:", filteredStars.slice(0, 5));

  return (
    <>
      {/* 🌌 Background Stars */}
      <Stars 
        radius={350} 
        depth={100} 
        count={20000} 
        factor={25} 
        fade 
        saturation={0.3} // Makes stars look softer (grayscale)
        size={5} // Adjusts the size of each star
        opacity={0.5} // Adds slight transparency for a blurred effect
        blending={THREE.AdditiveBlending} // Creates a glowing effect
      />

      {/* Render Only Valid Stars */}
      {filteredStars.map((star, index) => {
        const position = celestialToCartesian(star.ra, star.dec);
        return (
          <mesh key={index} position={[position.x / 1000, position.y / 1000, position.z / 1000]}>
            <sphereGeometry args={[Math.max(0.01, 0.3 - star.magnitude / 5), 8, 8]} />
            <meshBasicMaterial color="white" />
          </mesh>
        );
      })}

      {/* 🔗 Render Horoscope Constellation Lines */}
      {Object.keys(constellations).map((sign, i) => (
        <group key={i}>
          {constellations[sign]?.connections?.map(([startIdx, endIdx], j) => {
            // Check if referenced stars exist in filteredStars
            if (!starIndexMap.has(startIdx) || !starIndexMap.has(endIdx)) {
              console.warn(`🚨 Missing star data for ${sign} connection ${startIdx}-${endIdx}`);
              return null;
            }

            // Get correct indices in `filteredStars`
            const start = filteredStars[starIndexMap.get(startIdx)];
            const end = filteredStars[starIndexMap.get(endIdx)];

            if (!start || !end) {
              return null;
            }

            const startPos = celestialToCartesian(start.ra, start.dec);
            const endPos = celestialToCartesian(end.ra, end.dec);

            if (startPos.equals(new THREE.Vector3(0, 0, 0)) || endPos.equals(new THREE.Vector3(0, 0, 0))) {
              console.warn(`🚨 Skipping invalid constellation line: ${sign} ${startIdx}-${endIdx}`);
              return null;
            }

            const lineGeometry = new THREE.BufferGeometry().setFromPoints([
              startPos,
              endPos,
            ]);

            return (
              <line key={j} geometry={lineGeometry}>
                <lineBasicMaterial attach="material" color="cyan" linewidth={2} />
              </line>
            );
          })}
        </group>
      ))}

      {/* Debug Message for Empty Constellations */}
      {Object.keys(constellations).length === 0 && console.warn("⚠️ No constellations loaded!")}

      <OrbitControls enableZoom={false} />
    </>
  );
}
