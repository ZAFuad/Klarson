import React from 'react'
import images from '../../constants/images'

export default function Loading() {
  return (
    <div style={{'display':"flex",'justifyContent':"center",'alignItems':"center",'height':"87vh"}}>
        <img src={images.loader} alt="Loading"/>
    </div>
  )
}
