import React, { useState } from 'react'

const Validation = () => {
    const [name,setName] = useState('');
    const [nameErr,setNameErr] = useState(false);

    const nameValidation = (e) =>{
        // console.log(e.target.value.length)
        let name = e.target.value;
        if(name.length <3){
            setNameErr(true)
        }else{
            setNameErr(false)
        }
    }
  return (
    <div>
        <form>
            <input type="text" placeholder='enter name' onChange={nameValidation}/><br/>
            {
                nameErr ? <span style={{color:"red"}}>name is less than 3</span> : ""
            }<br/>
            <button>submit</button>
        </form>
    </div>
  )
}

export default Validation