import React from 'react'

const ClickEvent = () => {
    let data = "react click event";

    const clickAlert =()=>{
        alert("thanks for click")
    }
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={clickAlert}>Click me</button>
    </div>
  )
}

export default ClickEvent