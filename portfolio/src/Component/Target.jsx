import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Target = (props) => {
    const targetref=useRef();
    const { scene }=useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');
    useGSAP(()=>{
        gsap.to(targetref.current.position,{
            y:targetref.current.position.y+0.5,
            yoyo:true,
            duration:1.5,
            repeat:-1,
            
        })
    })
  return (
    <mesh {...props} ref={targetref} rotation={[0.2,-Math.PI/5,0]} >
        <primitive object={scene}/>
    </mesh>

   
  );
}

export default Target