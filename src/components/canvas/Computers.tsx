"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Loader } from "./CanvasLoader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 425px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const ref = useRef<any>(null);
  const direction = useRef(1);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += direction.current * (delta / 5);
      if (ref.current.rotation.y > 0.5 || ref.current.rotation.y < -0.6) {
        direction.current *= -1;
      }
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor={"black"} />
      <pointLight position={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
      />
      <primitive
        ref={ref}
        object={computer.scene}
        scale={isMobile ? 0.5 : 1}
        position={[isMobile ? -2.5 : 0, isMobile ? -1.65 : -4.25, -1.5]}
        rotation={[-0.0, 0.0, -0.2]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [20, 3, 5], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
