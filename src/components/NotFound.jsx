import React from 'react'
import errorAnimation from '../../public/404-error-animation.mp4'

function NotFound() {
  return (
    <div className='w-full bg-[#FFFFFF] h-auto mt-5 flex items-center justify-center absolute z-0'>
      <video src={errorAnimation} autoPlay loop muted className='h-[95vh]'></video>
    </div>
  )
}

export default NotFound;