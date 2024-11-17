import React from 'react'
import {Html, useProgress} from '@react-three/drei'
import { ReactThreeFiber } from '@react-three/fiber'
const CanvasLoader = () => {
    const Progress=useProgress();
  return (
    <Html
        as='div'
        center 
        style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
        }}>
            <span className='Canvas-loader'/>
            <p style={{fontSize:14,color:'#f1f1f1',fontWeight:800,marginTop:40}}/>
            (Progress!=0?`{$Progress.toFixed(2)}%`:"Loading...")
    </Html>
  )
}

export default CanvasLoader