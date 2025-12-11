import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const HexagonMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const plusRef = useRef<THREE.Group>(null);
  
  // Create hexagon shape
  const hexShape = useMemo(() => {
    const shape = new THREE.Shape();
    const size = 1.8;
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3 - Math.PI / 6;
      const x = Math.cos(angle) * size;
      const y = Math.sin(angle) * size;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();
    return shape;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
    if (plusRef.current) {
      plusRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      plusRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      plusRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <group>
      {/* Hexagon outline */}
      <mesh ref={meshRef}>
        <shapeGeometry args={[hexShape]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.1} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Hexagon edge glow */}
      <lineLoop ref={plusRef as any}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={6}
            array={new Float32Array([
              ...Array.from({ length: 6 }, (_, i) => {
                const angle = (i * Math.PI) / 3 - Math.PI / 6;
                return [Math.cos(angle) * 1.8, Math.sin(angle) * 1.8, 0];
              }).flat()
            ])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#a855f7" linewidth={2} />
      </lineLoop>

      {/* Plus sign - vertical */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[0.15, 1.2]} />
        <meshBasicMaterial color="#c084fc" transparent opacity={0.9} />
      </mesh>
      
      {/* Plus sign - horizontal */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[1.2, 0.15]} />
        <meshBasicMaterial color="#c084fc" transparent opacity={0.9} />
      </mesh>

      {/* Glow effect */}
      <pointLight position={[0, 0, 2]} color="#a855f7" intensity={2} distance={5} />
    </group>
  );
};

const FloatingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#a855f7" size={0.03} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

export const Hexagon3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <HexagonMesh />
        <FloatingParticles />
      </Canvas>
    </div>
  );
};

export default Hexagon3D;