"use client";
import { Decal, Float, Preload, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { Loader } from "./CanvasLoader";

const Ball = ({ icon }: { icon: any }) => {
  const [decal] = useTexture([icon.src]);
  const ref = useRef<any>(null);
  const direction = useRef(1);
  useFrame(() => {
    if (ref.current) {
      if (ref.current.rotation.y > 0.2 || ref.current.rotation.y < -0.2) {
        direction.current *= -1;
      } else {
        direction.current *= 1;
      }
    }
    ref.current.rotation.y += direction.current * 0.0007;
  });
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} intensity={1} />
      <mesh
        ref={ref}
        castShadow
        receiveShadow
        rotation={[0, 0, 0]}
        scale={2.75}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
    </>
  );
};

const BallCanvas = ({ icon }: { icon: any }) => {
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <Ball icon={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default BallCanvas;
