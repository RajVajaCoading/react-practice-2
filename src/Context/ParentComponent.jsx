import React, { createContext, useState } from 'react'
import ComA from './ComA'
const Appdata = createContext();
const ParentComponent = () => {
  
    let name = "raj";
    const [data,setData] = useState({name:"raaa",id:1});
   
  return (
    <div>
        <Appdata.Provider value={name}>
        <h1>Parent Componeent</h1>
        <ComA />
        </Appdata.Provider>
    </div>
  )
}

export default ParentComponent

export {Appdata}