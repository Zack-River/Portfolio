import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';

// Augment JSX namespace to recognize Three.js intrinsic elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      pointLight: any;
    }
  }
}

// Augment React.JSX namespace for newer React/TypeScript versions
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      pointLight: any;
    }
  }
}

const AnimatedCore = () => {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Rotate the sphere
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      
      // Subtle pulsing scale
      const scale = 1.8 + Math.sin(state.clock.getElapsedTime()) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere args={[1, 64, 64]} ref={meshRef}>
        <MeshDistortMaterial
          color="#d97706" // Amber 600
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.9}
          emissive="#78350f" // Amber 900
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
};

const Scene3D: React.FC = () => {
  return (
    <div className="w-full h-full bg-void">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* @ts-ignore */}
        <ambientLight intensity={0.5} />
        {/* @ts-ignore */}
        <pointLight position={[10, 10, 10]} intensity={1} color="#fbbf24" />
        {/* @ts-ignore */}
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        <AnimatedCore />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Scene3D;