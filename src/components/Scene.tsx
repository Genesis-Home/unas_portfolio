import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Box, Sphere, MeshDistortMaterial, Points, PointMaterial, Html } from '@react-three/drei';
import * as THREE from 'three';
import { CodeEditor } from './CodeEditor';

export function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const monitorRef = useRef<THREE.Mesh>(null);
  
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

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const mouseX = state.mouse.x;
    const mouseY = state.mouse.y;

    if (groupRef.current) {
      // Gentle tilt based on mouse
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouseX * 0.3, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouseY * 0.2, 0.05);
    }

    if (monitorRef.current) {
      // Subtle float
      monitorRef.current.position.y = Math.sin(t * 0.5) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={1.0} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} color="#2563eb" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4f46e5" />
      
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Modern Ultra-Wide Monitor */}
        {/* Modern Ultra-Wide Monitor */}
        <group position={[0, 0, 0]}>
          {/* Screen Body */}
          <Box args={[4.6, 2.3, 0.25]} ref={monitorRef}>
            <meshPhysicalMaterial 
              color="#0f172a" 
              roughness={0.4} 
              metalness={0.8} 
              clearcoat={1} 
              clearcoatRoughness={0.1}
            />
            
            {/* Front Screen Surface */}
            <Box args={[4.4, 2.1, 0.05]} position={[0, 0, 0.11]}>
              <meshStandardMaterial 
                color="#000000" 
                roughness={1} 
                metalness={0} 
              />
              
              {/* VS Code HTML Surface */}
              <Html
                transform
                distanceFactor={1.2}
                position={[0, 0, 0.03]}
                center
                className="pointer-events-none select-none w-[1200px] h-[550px] flex items-center justify-center"
              >
                <CodeEditor />
              </Html>
            </Box>
          </Box>
          
          {/* Monitor Stand (Textured Silver/Slate) */}
          <Box args={[0.3, 1.2, 0.1]} position={[0, -1.2, -0.4]} rotation={[Math.PI / 10, 0, 0]}>
            <meshPhysicalMaterial color="#475569" metalness={1} roughness={0.2} clearcoat={1} />
          </Box>
          <Box args={[1.8, 0.05, 1.2]} position={[0, -1.8, -0.4]}>
            <meshPhysicalMaterial color="#475569" metalness={1} roughness={0.2} clearcoat={1} />
          </Box>
        </group>

        {/* Minimalist PC Tower (With Vent Textures & Circuit Glows) */}
        <group position={[3.5, -0.5, -1.2]} rotation={[0, -0.4, 0]}>
          <Box args={[1.3, 3.2, 2.6]}>
            <meshPhysicalMaterial 
              color="#020617" 
              roughness={0.5} 
              metalness={0.7} 
              clearcoat={0.5}
            />
            
            {/* Front Vent Pattern (Multiple small boxes to create "texture") */}
            {Array.from({ length: 12 }).map((_, i) => (
              <Box key={i} args={[0.8, 0.02, 0.02]} position={[0, 1.2 - (i * 0.2), 1.31]}>
                <meshStandardMaterial color="#1e293b" />
              </Box>
            ))}

            {/* Side Circuit Glow Texture */}
            <Box args={[0.02, 0.05, 1.8]} position={[0.66, 0.5, 0]}>
              <meshStandardMaterial color="#2563eb" emissive="#3b82f6" emissiveIntensity={2} />
            </Box>
            <Box args={[0.02, 0.05, 1.2]} position={[0.66, 0.4, -0.3]}>
              <meshStandardMaterial color="#4f46e5" emissive="#4f46e5" emissiveIntensity={2} />
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
          <Box args={[0.01, 0.01, 3]} position={[0, 0, -1.5]} rotation={[0, 0, 0]}>
            <meshStandardMaterial color="#2563eb" emissive="#2563eb" emissiveIntensity={2} transparent opacity={0.3} />
          </Box>
        </group>

        {/* Floating Data Particles */}
        <Points positions={particles}>
          <PointMaterial
            transparent
            color="#2563eb"
            size={0.04}
            sizeAttenuation={true}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </Points>
      </Float>

      {/* Surface Reflection */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
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
