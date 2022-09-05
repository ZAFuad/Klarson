import React from 'react'
import images from '../../constants/images'

export default function Loading2() {
  return (
    <div style={{'display':"flex",'justifyContent':"center",'alignItems':"center",'height':"87vh"}}>
        <img src={images.loader2} alt="Loading"/>
    </div>
  )
}
