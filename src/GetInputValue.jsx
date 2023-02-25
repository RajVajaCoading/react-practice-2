import React, { useState } from 'react'

const GetInputValue = () => {
    const [data,SetData] = useState("");
    const [print,setPrint] = useState(false);

    function getInputData(e){
        console.log(e.target.value);
        SetData(e.target.value);
        setPrint(null)
        
    }

  return (
    <div>
        <h1>name:- {data}</h1>
        {
            print ? <h6>{data}</h6> : ""
        }
        <input type="text" onChange={getInputData}/>
        <button onClick={()=>setPrint(true)}>Add</button>
    </div>
  )
}

export default GetInputValue