import React from 'react'
import PropsPassingComponent from './PropsPassingComponent'
const MainComponent = () => {
    const name = "raj";
  return (
    <>
        <PropsPassingComponent name={name} id={1} email={"rrr@gmail.com"}/>
    </>
  )
}

export default MainComponent