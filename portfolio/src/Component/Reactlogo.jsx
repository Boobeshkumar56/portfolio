import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Trail, Float, Line, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Reactlogo = (props) => {
  const atomRef = useRef();

  // GSAP animation for Atom's rotation
  
  useEffect(() => {
    if (atomRef.current) {
      gsap.to(atomRef.current.rotation, {
         y: Math.PI * 2,
      
        duration: 6,
        repeat: -1,
        ease: 'linear',
        yoyo:true,
      });
    }
  }, []);

  return (
    <Float floatIntensity={1}>
    <group {...props} ref={atomRef} scale={[0.5, 0.5, 0.5]}>
      <Atom />
    </group>
    </Float>
  );
};

function Atom(props) {
  const points = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
        100
      ),
    []
  );

  return (
    <group {...props}>
      <Line worldUnits points={points} color="turquoise" lineWidth={0.12} />
      <Line
        worldUnits
        points={points}
        color="turquoise"
        lineWidth={0.12}
        rotation={[0, 0, 1]}
      />
      <Line
        worldUnits
        points={points}
        color="turquoise"
        lineWidth={0.12}
        rotation={[0, 0, -1]}
      />
      <Electron position={[0, 0, 0.5]} speed={6} />
      <Electron position={[0, 0, 0.5]} rotation={[0, 0, Math.PI / 3]} speed={6.5} />
      <Electron position={[0, 0, 0.5]} rotation={[0, 0, -Math.PI / 3]} speed={7} />
      <Sphere args={[0.55, 64, 64]}>
        <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
      </Sphere>
    </group>
  );
}

function Electron({ radius = 2.75, speed = 6, ...props }) {
  const electronRef = useRef();

  // Electron circular motion animation
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    if (electronRef.current) {
      electronRef.current.position.set(
        Math.sin(t) * radius,
        (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
        0
      );
    }
  });

  return (
    <group {...props}>
     
        <mesh ref={electronRef} >
          <sphereGeometry args={[0.25]} />
          <meshBasicMaterial color={[2, 1, 10]} toneMapped={false} />
        </mesh>
     
    </group>
  );
}

export default Reactlogo;
