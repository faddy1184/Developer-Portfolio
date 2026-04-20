import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader.jsx";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("./planet/scene.gltf");
  const earthRef = useRef();

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0025;
    }
  });

  return (
    <primitive
      ref={earthRef}
      object={earth.scene}
      scale={isMobile ? 1.2 : 1.7} // ✅ unchanged
      position={[0, 0, 0]}         // ✅ centered
    />
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const handle = (e) => setIsMobile(e.matches);

    setIsMobile(media.matches);
    media.addEventListener("change", handle);

    return () => media.removeEventListener("change", handle);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas
        className="w-full h-full"
        shadows
        frameloop="always"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 500,
          position: isMobile ? [0, 0.2, 3.8] : [0, 0.3, 5.5],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>

          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={2} />

          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
          />

          <Earth isMobile={isMobile} />

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;