import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Tunnel() {
  const group = useRef();

  const shapes = [];
  const depth = 80;

  for (let i = 0; i < depth; i++) {
    const z = -i * 0.25;
    const w = 2.8;
    const h = 1.6;
    const r = 0.35;

    const pts = [];

    // rounded rectangle path
    const steps = 32;
    for (let a = 0; a <= Math.PI * 2; a += Math.PI / steps) {
      const x = Math.cos(a);
      const y = Math.sin(a);

      pts.push([
        Math.sign(x) * (w / 2 - r) + x * r,
        Math.sign(y) * (h / 2 - r) + y * r,
        z,
      ]);
    }

    shapes.push(pts);
  }

  useFrame((state) => {
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      state.mouse.x * 0.3,
      0.05,
    );

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -state.mouse.y * 0.2,
      0.05,
    );
  });

  return (
    <group ref={group}>
      {shapes.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="white"
          lineWidth={1}
          transparent
          opacity={0.25}
        />
      ))}
    </group>
  );
}

export default function HeroTunnel() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <Tunnel />
      </Canvas>
    </div>
  );
}
