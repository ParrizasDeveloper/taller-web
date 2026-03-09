"use client";
import { Canvas } from "@react-three/fiber";
import { useGLTF, PresentationControls, Float, ContactShadows, Environment } from "@react-three/drei";
import { Suspense } from "react";

function EngineModel() {
  // Cuando tengas tu motor, cambia esta ruta por la de tu archivo .glb en /public
  // const { scene } = useGLTF("/models/engine-v8.glb");
  
  return (
    <mesh>
      {/* Placeholder: Una esfera técnica hasta que subas tu motor */}
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#ef4444" 
        wireframe 
        emissive="#ef4444" 
        emissiveIntensity={0.5} 
      />
      {/* Si usas el modelo real, descomenta: <primitive object={scene} scale={1.5} /> */}
    </mesh>
  );
}

export default function EngineCanvas() {
  return (
    <div className="absolute bottom-0 h-2/3 w-full">
      <Canvas shadows camera={{ position: [0, 0, 4], fov: 45 }}>
        <Suspense fallback={null}>
          {/* 1. Iluminación de Estudio */}
          <ambientLight intensity={0.2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ef4444" />
          
          {/* 2. Controles de Presentación (Inercia estilo Good Fella) */}
          <PresentationControls
            global
            snap
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]} // Limitación vertical
            azimuth={[-Math.PI / 2, Math.PI / 2]} // Limitación horizontal
          >
            {/* 3. Efecto de flotación suave */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
              <EngineModel />
            </Float>
          </PresentationControls>

          {/* 4. Sombras en el "Suelo" del taller */}
          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
            far={4.5}
          />
          
          {/* Reflejos industriales */}
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}