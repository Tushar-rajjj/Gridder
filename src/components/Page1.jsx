import React from 'react'
import ControlPanel from './ControlPanel'
import Page1Container from './Page1Container'

function Page1() {
  return (
    <div className="page1 w-screen h-screen flex flex-col items-center justify-start">
      <ControlPanel/>
      <Page1Container/>
    </div>
  )
}

export default Page1
