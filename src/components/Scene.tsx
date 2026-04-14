import { useRef, useMemo } from "react";
import {
  Box,
  Sphere,
  MeshDistortMaterial,
  Points,
  PointMaterial,
  Html,
} from "@react-three/drei";
import * as THREE from "three";
import { CodeEditor } from "./CodeEditor";

export function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  // Generating random points for data particles
  const particles = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return positions;
  }, []);

  return (
    <group ref={groupRef}>
      <ambientLight intensity={1.0} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1.5}
        color="#2563eb"
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4f46e5" />

      {/* Static Workstation Group */}
      <group scale={0.65} position={[0, 0.8, 0]}>
        {/* Modern Ultra-Wide Monitor */}
        <group position={[0, 0, 0]}>
          {/* Screen Body */}
          <Box args={[4.6, 2.3, 0.1]}>
            <meshPhysicalMaterial
              color="#0d1117"
              roughness={0.5}
              metalness={0.7}
              clearcoat={1}
              clearcoatRoughness={0.1}
            />

            {/* Screen Front Surface (Correct Centered Position) */}
            <group position={[-0.72, -0.35, 1]}>
              <Html
                transform
                center
                distanceFactor={1.2}
                className="pointer-events-none select-none w-full h-full flex items-center justify-center"
              >
                <div style={{ width: "1280px", height: "640px" }}>
                  <CodeEditor />
                </div>
              </Html>
            </group>
          </Box>

          {/* Monitor Stand */}
          <Box
            args={[0.3, 1.2, 0.1]}
            position={[0, -1.2, -0.4]}
            rotation={[Math.PI / 10, 0, 0]}
          >
            <meshPhysicalMaterial
              color="#475569"
              metalness={1}
              roughness={0.2}
              clearcoat={1}
            />
          </Box>
          <Box args={[1.8, 0.05, 1.2]} position={[0, -1.8, -0.4]}>
            <meshPhysicalMaterial
              color="#475569"
              metalness={1}
              roughness={0.2}
              clearcoat={1}
            />
          </Box>
        </group>

        {/* Minimalist PC Tower */}
        <group position={[4.0, -0.5, -1.5]} rotation={[0, -0.4, 0]}>
          <Box args={[1.3, 3.2, 2.6]}>
            <meshPhysicalMaterial
              color="#020617"
              roughness={0.5}
              metalness={0.7}
              clearcoat={0.5}
            />

            {/* Front Vent Pattern */}
            {Array.from({ length: 12 }).map((_, i) => (
              <Box
                key={i}
                args={[0.8, 0.02, 0.02]}
                position={[0, 1.2 - i * 0.2, 1.31]}
              >
                <meshStandardMaterial color="#1e293b" />
              </Box>
            ))}

            {/* Side Circuit Glow Texture */}
            <Box args={[0.02, 0.05, 1.8]} position={[0.66, 0.5, 0]}>
              <meshStandardMaterial
                color="#2563eb"
                emissive="#3b82f6"
                emissiveIntensity={2}
              />
            </Box>

            {/* Side Glass Panel */}
            <Box args={[0.03, 2.8, 2.2]} position={[0.66, 0, 0]}>
              <meshPhysicalMaterial
                color="#0f172a"
                transparent
                opacity={0.3}
                roughness={0}
                metalness={1}
                transmission={0.5}
                thickness={0.1}
              />
            </Box>
          </Box>
        </group>

        {/* Sleek Mouse */}
        <group position={[-2.5, -1.6, 1]} rotation={[0, 0.5, 0]}>
          <Sphere args={[0.3, 32, 32]} scale={[1, 0.6, 1.5]}>
            <MeshDistortMaterial
              color="#ffffff"
              speed={1}
              distort={0.1}
              radius={1}
              roughness={0}
              metalness={0.5}
            />
          </Sphere>
        </group>

        {/* Floating Data Particles */}
        {/* <Points positions={particles}>
          <PointMaterial
            transparent
            color="#2563eb"
            size={0.04}
            sizeAttenuation={true}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </Points> */}
      </group>

      {/* Surface Reflection */}
      <mesh position={[0, -0.3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial
          color="#f8fafc"
          transparent
          opacity={0.3}
          roughness={0.05}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
}
