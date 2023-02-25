import React, { useState } from 'react'

const UseStateExample = () => {
    const [count,setCount] = useState(0);

    function increment(){
        setCount(count +1)
        if (count > 10-1){
            setCount(0)
        }
        
    }

    function decrement(){
        setCount(count -1)
        if (count <= 0 ){
            setCount(0)
        }
        
    }
  return (
    <div>
        <h1>count increment {count}</h1>

        <button onClick={increment}>increment +</button>
        <button onClick={decrement}>decrement -</button>


    </div>
  )
}

export default UseStateExample