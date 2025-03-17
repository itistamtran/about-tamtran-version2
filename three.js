import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";

const checkWebGLSupport = () => {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("webgl2");
    return !!gl; // Returns true if WebGL is supported
  } catch {
    return false;
  }
};

const WebGLCheck = () => {
  const [webgl, setWebgl] = useState(true);

  useEffect(() => {
    setWebgl(checkWebGLSupport());
  }, []);

  if (!webgl) {
    return <h1>WebGL is not supported on your browser</h1>;
  }

  return (
    <Canvas gl={{ powerPreference: "high-performance", antialias: true, alpha: true }}>
      <OrbitControls />
      {/* Add a simple mesh for testing */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
};

export default WebGLCheck;
