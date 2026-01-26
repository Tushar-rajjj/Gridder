import React from 'react'
import errorAnimation from '../../public/404-error-animation.mp4'

function NotFound() {
  return (
    <div>
      <video src={errorAnimation} autoPlay loop muted></video>
    </div>
  )
}

export default NotFound;