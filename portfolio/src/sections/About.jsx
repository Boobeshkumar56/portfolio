import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../Component/button'

const About = () => {
    const[hascopied,setHasCopied]=useState(false);
  return (
    <section className='c-space my-20 mt-26 ' id='about'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
            <div className='col-span-1 row-span-3 h-fit'>
                <div className='grid-container'>
                    <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
                <p className='grid-headtext'>Hi There I'm Boobesh Kumar</p>
                <p className='grid-subtext'>WIth 2 Years of solid experience in Web Development and I have honed my skills in front-end and backend development, with advance 3D models and Animations and also Technologies</p>
                </div>
            </div>
        <div className='col-span-1 xl:row-span-3   '>
        <div className='grid-container'>
            <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:w-[276px] h-fit object-contain  ' />
            <p className='grid-headtext'>My TechStacks</p>
            <p className='grid-subtext'>I have a strong foundation in  JavaScript, React, Node.js, Three.js, MongoDB,Python,Solidity, MySQL,HTML, CSS and more.</p> 
        </div>
        </div>
        <div className='col-span-1 xl:row-span-4  '>
            <div className='grid-container'>
                <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                    <Globe
                    height={326}
                    width={326}
                    backgroundColor='rgba(0,0,0,0)'
                    backgroundImageOpacity={0.5}
                    showAtmosphere
                    showGraticules
                    globeImageUrl={"//unpkg.com/three-globe/example/img/earth-night.jpg"}
                    bumpImageUrl={"https://unpkg.com/three-globe/example/img/earth-topology.png"}
                    labelsData={[{
                        lat:11.0168, lng:76.9558,text:"I'm Here!",color:"#FF0000",size:9000,
                    }]}/>
                </div>
                <div>
                    
                    <p className='grid-headtext'>I'm Based in India</p>
                    <p className='grid-subtext'>I live in Coimbatore and work remotely and having good communication skills</p>
                    <Button name='Contact Me' isBeam containerClass='w-full mt-10'></Button>
                </div>
            </div>

            </div>
            <div className='xl:col-span-2 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                    <div>
                        <p className='grid-headtext'>My Passion in Coding</p>
                        <div className='grid-subtext items-center flex gap-5'>
                            <i class="fas fa-code item text-blue-500">
                                </i> <span>Coding is more than just a skill—it's my creative outlet and problem-solving playground.</span> </div>
                                 <div class="flex items-center gap-7 mt-2 grid-subtext" > <i class="fas fa-lightbulb text-yellow-500"></i> <span>I thrive on the challenge of turning ideas into reality through code.</span> </div> 
                                 <div class="flex items-center gap-5 mt-2 grid-subtext"> <i class="fas fa-laptop-code text-green-500"></i> <span>Driven to continuously learn, I love creating projects that make a difference.</span></div>
                    </div>
                </div>

            </div>
            <div className='xl:col-span-1 xl:row-span-2'>
            <div className='grid-container'>
                <img src="assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h[276px] h-fit object-cover sm:object-top' />
                <div className='space-y-2'>
                    <p className='grid-subtext text-center'>Contact Me</p>
                    <div className='copy-container' onClick={()=>{
                        navigator.clipboard.writeText("Boobeshkumar6109@gmail.com")
                        setHasCopied(true)
                        setTimeout(()=>{setHasCopied(false)
                        },2000)
                    }}>
                        <img src={hascopied ? "assets/tick.svg":"assets/copy.svg" }alt="copy" />
                        <p className='lg:text-1xl md:text-xl font-medium text-gray_gradient text-white'>Boobeshkumar6109@gmail.com</p>
                    </div>
                </div>
            </div>
            </div>
            
        
        </div>
        

    </section>
  )
}

export default About