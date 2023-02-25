import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [imp,setImp] = useState([]);
    useEffect(()=>{
        const getData=async()=>{
            const data = await fetch("https://dummyjson.com/posts");
            const res =  await data.json();
            setImp(res.posts);
            console.log(res.posts);
        }
        getData();
    },[])
  return (
    <div>
        {
            imp.map((item)=>{
                console.log(item)
                return(
                    <h1>{item.title}</h1>
                )
            })
        }
    </div>
  )
}

export default FetchData