import React, { useContext } from 'react'
import { Appdata } from './ParentComponent'


const ComC = () => {
    const useData = useContext(Appdata);
  return (
    <div style={{backgroundColor:"pink"}}>ComC
        <h1>{useData}</h1>
       
    </div>
  )
}

export default ComC