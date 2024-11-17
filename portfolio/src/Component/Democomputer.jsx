import React, { useRef } from "react";
import { useVideoTexture, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useEffect } from "react";

const Democomputer = (props) => {
  const { nodes, materials } = useGLTF("/models/Computer.glb");
  const group = useRef();
  const videoTexture = useVideoTexture(props.texture?props.texture:"/textures/project/project1.mp4");

  // Animation for the group using GSAP
  useEffect(() => {
    if (group.current) {
      gsap.from(group.current.rotation, {
        y: Math.PI / 2, // Start rotation
        duration: 1, // Animation duration
        ease: "power3.out", // Easing function
      });
    }
  }, [videoTexture]);

  return (
    <group {...props} dispose={null} ref={group}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          {/* Mesh with video texture */}
          <group position={[14.637, 13.239, -20.589]} scale={0.197}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0352142150880.geometry}
              material={materials.MaterialFBXASC032FBXASC0352142150880}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0352142171324.geometry}
            >
              {/* Apply video texture */}
              <meshStandardMaterial map={videoTexture} />
            </mesh>
          </group>
          {/* Additional parts of the computer */}
          <group
            position={[15.084, 10.331, -17.551]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.137, 0.075, 0.127]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0352142150880_1.geometry}
              material={materials.MaterialFBXASC032FBXASC0352142150880}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0352142171812.geometry}
              material={materials.MaterialFBXASC032FBXASC0352142171812}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/Computer.glb");

export default Democomputer;
