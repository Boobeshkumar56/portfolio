import {Canvas} from "@react-three/fiber";
import Hackerroom from "../Component/Hackerroom";
import { Suspense } from "react";
import CanvasLoader from "../Component/CanvasLoader";
import { PerspectiveCamera } from "@react-three/drei";
import {Leva, useControls} from "leva"
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../Component/contants";
import Target from "../Component/Target";
import Reactlogo from "../Component/reactlogo";
import Laptop from "../Component/Laptop";
import Rings from "../Component/Rings";
import Cube  from "../Component/Cube";
import Herocamera from "../Component/Herocamera";
import Button from "../Component/button";
const Hero = () => {

    // const controls=useControls("Hackerroom",{
    //     positionX:{
    //         value:2.5,
    //         min:-10,
    //         max:10},
    //         positionY:{
    //             value:2.5,
    //             min:-10,
    //             max:10},
    //         positionZ:{
    //                 value:2.5,
    //                 min:-10,
    //                 max:10},
    //         rotationX:{
    //                 value:2.5,
    //                 min:-10,
    //                 max:10},
    //                 rotationY:{
    //                         value:2.5,
    //                         min:-10,
    //                         max:10},
    //                         rotationZ:{
    //                             value:2.5,
    //                             min:-10,
    //                             max:10}

    // },
   
        

        
    // ); 
    const small=useMediaQuery({maxWidth:440});
    const mobile=useMediaQuery({maxWidth:768});
    const tablet=useMediaQuery({minwidth:768,maxWidth:1024});
    const sizes=calculateSizes(mobile,tablet,small);
  return (
    <section className="min-h-screen w-full flex flex-col relative ">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 " >
            <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">Hi I'am Boobesh Kumar <span  className=" sm:text-3xl text-xl waving-hand">🖐️</span></p>
            <p className="hero_tag text-gray_gradient">Building Projects And Learning New Things</p>
        </div>
        {/* <Leva/> */}
        <div className="w-full h-full absolute inset-y-10 pb-90  ">
            <Canvas className="w-full h-full ">
                <Suspense fallback={CanvasLoader}>
                <PerspectiveCamera makeDefault position={[0,0,25]}/>
                <Herocamera isMobile={mobile}>

                <Hackerroom 
                scale={sizes.deskScale} 
                 position={sizes.deskPosition} 
                // position={[controls.positionX,controls.positionY,controls.positionZ]}
                 rotation={[-3.1,0.5,3.1]}
                // rotation={[controls.rotationX,controls.rotationY,controls.rotationZ]}
                />
                </Herocamera>
                <group>
                <Target position={sizes.targetPosition} scale={[2.1,2.3,2.3]}  />
                <Reactlogo position={sizes.reactLogoPosition} scale={[0.8,0.9,0.7]} />
                <Laptop position={sizes.laptopPosition} />
                <Rings position={sizes.ringPosition}/>
                <Cube position={sizes.cubePosition}/>
                </group>
               
                <ambientLight intensity={1} />
                <directionalLight position={[10,10,10]} intensity={0.5} />
                </Suspense>
               
            </Canvas>
           

        </div>
        <div className="absolute -bottom-16 left-0 right-0 w-full z-10 c-space pt-9  ">
            <a href="#about" className="w-fit">
            <Button name='Let"s work Together' isBeam containerClass='sm:w-fit w-full sm:min-w-96'/>
            </a>
        </div>

    </section>
  )
}

export default Hero