import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Box,
  Sphere,
  Cylinder,
  Html,
  Points,
  PointMaterial,
} from "@react-three/drei";
import * as THREE from "three";
import { CodeEditor } from "./CodeEditor";

export function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const fanRef = useRef<THREE.Mesh>(null);
  const fan2Ref = useRef<THREE.Mesh>(null);

  // Generating random points for data particles purely
  const particles = useMemo(() => {
    let seed = 1;
    const seededRandom = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    const count = 250;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Create a cylindrical distribution around the workspace
      const angle = seededRandom() * Math.PI * 2;
      const radius = 3.0 + seededRandom() * 4.0;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (seededRandom() - 0.5) * 6;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return positions;
  }, []);

  // Frame animations loop
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Workstation floating idle
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.4) * 0.08 + 0.6;
      groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.03;
    }

    // Spin PC Tower fans
    if (fanRef.current) {
      fanRef.current.rotation.z = t * 8;
    }
    if (fan2Ref.current) {
      fan2Ref.current.rotation.z = t * 8;
    }

    // Spin data particles
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.02;
    }
  });

  return (
    <group>
      {/* Ambient Lighting */}
      <ambientLight intensity={0.4} />

      {/* Dramatic Backlight Wall Glow (Purple/Magenta) */}
      <spotLight
        position={[0, 2, -4]}
        angle={0.6}
        penumbra={1}
        intensity={3.5}
        color="#8b5cf6"
      />

      {/* Key Light (Cyan) */}
      <spotLight
        position={[-6, 6, 6]}
        angle={0.4}
        penumbra={1}
        intensity={3.0}
        color="#06b6d4"
        castShadow
      />

      {/* Warm Fill Light */}
      <pointLight position={[6, -4, 4]} intensity={0.6} color="#3b82f6" />

      {/* Active Workstation Group */}
      <group ref={groupRef} scale={0.7} position={[0, 0.6, 0]}>
        {/* Large Carbon Desk Surface */}
        <Box args={[11, 0.08, 5]} position={[0, -2.0, 0.5]}>
          <meshPhysicalMaterial
            color="#080c14"
            roughness={0.4}
            metalness={0.8}
            clearcoat={0.6}
            clearcoatRoughness={0.2}
          />
        </Box>

        {/* 1. Curved Ultra-Wide Monitor */}
        <group position={[0, 0.1, 0.2]}>
          {/* Monitor Screen Frame & Back Bezel */}
          <Box args={[4.84, 2.44, 0.08]} position={[0, 0, 0]}>
            <meshPhysicalMaterial
              color="#0b0f19"
              roughness={0.2}
              metalness={0.9}
              clearcoat={1}
            />
          </Box>

          {/* Glowing Back Bezel (LED backlight effect) */}
          <Box args={[4.88, 2.48, 0.02]} position={[0, 0, -0.05]}>
            <meshStandardMaterial
              color="#3b82f6"
              emissive="#3b82f6"
              emissiveIntensity={1.5}
            />
          </Box>

          {/* Screen Front Surface Panel */}
          <Box args={[4.8, 2.4, 0.02]} position={[0, 0, 0.041]}>
            <meshPhysicalMaterial
              color="#0d1117"
              roughness={0.1}
              metalness={0.2}
            />
          </Box>

          {/* FIX SCREEN ALIGNMENT: Pixel-perfect nested HTML screen */}
          {/* Pos Z is 0.052 (slightly in front of bezel/screen surface to prevent z-fighting) */}
          {/* Scale 0.00375 maps 1280px exactly to 4.8 units width: 1280 * 0.00375 = 4.8 */}
          {/* We do NOT set distanceFactor. This locks the component scale relative to 3D units. */}
          <group position={[0, 0, 0.052]} scale={[0.00375, 0.00375, 0.00375]}>
            <Html
              transform
              center
              className="pointer-events-none select-none w-full h-full flex items-center justify-center"
            >
              <div style={{ width: "1280px", height: "640px" }}>
                <CodeEditor />
              </div>
            </Html>
          </group>

          {/* Heavy Chrome Monitor Stand Column */}
          <Cylinder
            args={[0.08, 0.08, 1.4, 16]}
            position={[0, -1.3, -0.3]}
            rotation={[Math.PI / 16, 0, 0]}
          >
            <meshPhysicalMaterial
              color="#4b5563"
              metalness={1.0}
              roughness={0.1}
              clearcoat={1.0}
            />
          </Cylinder>

          {/* Sturdy Monitor Stand Base */}
          <Box args={[1.5, 0.04, 1.0]} position={[0, -1.96, -0.2]}>
            <meshPhysicalMaterial
              color="#374151"
              metalness={0.9}
              roughness={0.2}
            />
          </Box>
        </group>

        {/* 2. Premium Dual-Chamber PC Tower Case */}
        <group position={[3.6, -0.4, -0.6]} rotation={[0, -0.35, 0]}>
          {/* Outer Black Case Frame */}
          <Box args={[1.4, 3.0, 2.4]} position={[0, 0, 0]}>
            <meshPhysicalMaterial
              color="#090d16"
              roughness={0.3}
              metalness={0.8}
              clearcoat={0.5}
            />
          </Box>

          {/* High-Gloss Front Grille */}
          <Box args={[1.36, 2.9, 0.04]} position={[0, 0, 1.21]}>
            <meshPhysicalMaterial
              color="#020617"
              roughness={0.1}
              metalness={0.9}
            />
            {/* Front LED Accent Strip */}
            <Box args={[0.04, 2.8, 0.01]} position={[0, 0, 0.02]}>
              <meshStandardMaterial
                color="#06b6d4"
                emissive="#06b6d4"
                emissiveIntensity={3}
              />
            </Box>
          </Box>

          {/* Tempered Glass Side Window */}
          <Box args={[0.02, 2.8, 2.2]} position={[0.71, 0, 0]}>
            <meshPhysicalMaterial
              color="#0f172a"
              transparent
              opacity={0.25}
              roughness={0.0}
              metalness={1.0}
              transmission={0.95}
              thickness={0.2}
            />
          </Box>

          {/* PC Core Internal Component Board */}
          <Box args={[0.1, 2.6, 2.0]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#0f172a" />

            {/* Glowing Ram Sticks (Emissive Neon Blue) */}
            {Array.from({ length: 4 }).map((_, i) => (
              <Box
                key={i}
                args={[0.02, 0.5, 0.06]}
                position={[0.1, 0.6, 0.2 + i * 0.1]}
              >
                <meshStandardMaterial
                  color="#3b82f6"
                  emissive="#3b82f6"
                  emissiveIntensity={2.5}
                />
              </Box>
            ))}

            {/* Glowing CPU Liquid Cooler Pump Block */}
            <Cylinder
              args={[0.2, 0.2, 0.1, 16]}
              position={[0.1, 0.6, -0.4]}
              rotation={[0, 0, Math.PI / 2]}
            >
              <meshStandardMaterial
                color="#8b5cf6"
                emissive="#8b5cf6"
                emissiveIntensity={2}
              />
            </Cylinder>

            {/* PC Cooler Fan 1 (Active Spinning) */}
            <group position={[0.1, 0.6, -0.4]}>
              <mesh ref={fanRef}>
                <boxGeometry args={[0.01, 0.35, 0.04]} />
                <meshStandardMaterial color="#ffffff" />
              </mesh>
            </group>

            {/* PC Case Exhaust Fan 2 (Back Case - Active Spinning) */}
            <group position={[-0.1, 0.8, -1.0]}>
              <Cylinder
                args={[0.3, 0.3, 0.08, 16]}
                rotation={[0, 0, Math.PI / 2]}
              >
                <meshStandardMaterial color="#1e293b" />
              </Cylinder>
              <mesh ref={fan2Ref} position={[-0.05, 0, 0]}>
                <boxGeometry args={[0.01, 0.5, 0.05]} />
                <meshStandardMaterial
                  color="#06b6d4"
                  emissive="#06b6d4"
                  emissiveIntensity={1.5}
                />
              </mesh>
            </group>
          </Box>
        </group>

        {/* 3. Glowing Custom Mechanical Keyboard */}
        <group position={[0, -1.94, 1.1]}>
          {/* Brushed Metal Keyboard Base Frame */}
          <Box args={[2.6, 0.06, 1.0]}>
            <meshPhysicalMaterial
              color="#1f2937"
              roughness={0.3}
              metalness={0.7}
            />
          </Box>

          {/* Underglow LED strip (Cyan base underglow) */}
          <Box args={[2.64, 0.02, 1.04]} position={[0, -0.03, 0]}>
            <meshStandardMaterial
              color="#06b6d4"
              emissive="#06b6d4"
              emissiveIntensity={1.5}
            />
          </Box>

          {/* Keycap Rows (Individual tactile rows) */}
          {[-0.35, -0.18, 0, 0.18, 0.35].map((zPos, rowIdx) => (
            <Box
              key={rowIdx}
              args={[2.4, 0.05, 0.12]}
              position={[0, 0.05, zPos]}
            >
              {/* Emissive keyboard illumination */}
              <meshStandardMaterial
                color="#090d16"
                emissive={rowIdx % 2 === 0 ? "#3b82f6" : "#8b5cf6"}
                emissiveIntensity={1.2}
                roughness={0.6}
              />
            </Box>
          ))}
        </group>

        {/* 4. Ergonomic Gaming Mouse */}
        <group position={[2.0, -1.94, 1.1]} rotation={[0, -0.2, 0]}>
          {/* Main Mouse Body */}
          <Sphere args={[0.18, 16, 16]} scale={[1, 0.6, 1.6]}>
            <meshPhysicalMaterial
              color="#090d16"
              roughness={0.4}
              metalness={0.5}
            />
          </Sphere>

          {/* Glowing Active Scroll Wheel */}
          <Cylinder
            args={[0.04, 0.04, 0.02, 8]}
            position={[0, 0.07, 0.12]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <meshStandardMaterial
              color="#06b6d4"
              emissive="#06b6d4"
              emissiveIntensity={2.5}
            />
          </Cylinder>
        </group>
      </group>

      {/* Dynamic Floating Data Particles */}
      <Points ref={particlesRef} positions={particles}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* Sleek Ambient Studio Floor Reflection */}
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[25, 25]} />
        <meshStandardMaterial
          color="#030712"
          transparent
          opacity={0.6}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
}
