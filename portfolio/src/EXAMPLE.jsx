import React from 'react'
import {Canvas, useFrame} from '@react-three/fiber';
import {meshBounds, OrbitControls, Sparkles, Stars} from '@react-three/drei';
import { Mesh, MeshLambertMaterial } from 'three';
import { useRef } from 'react';
const RotatingCube=()=>{
  const meshref=useRef(); 
  useFrame(()=>{
    if(meshref.current){
      meshref.current.rotation.x+=0.01;
      meshref.current.rotation.y+=0.01;
  }})
  return(
    <mesh ref={meshref}>
       <cylinderGeometry args={[1,1,1]}/>
       <meshLambertMaterial color="#458585" emissive="#458585"/>
       <Sparkles count={150} scale={1} speed={0.002} noise={0.2} color='orange'  size={6}/>
    </mesh>
  )
}
const EXAMPLE = () => {
  return (
    <Canvas style={{height: '100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <OrbitControls enableZoom enableDamping enablePan enableRotate></OrbitControls>
      <directionalLight position={[1,1,1]} intensity={10} color='#9CDBA6'></directionalLight>
      <color attach="background" args={['#F0F0F0']}></color>
      <RotatingCube/>



    </Canvas>
  )
}
export default EXAMPLE;