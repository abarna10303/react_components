import React,{useEffect, useState} from 'react'

const Flifecycle = () => {
    const [name,setName]=useState("Abarna");
    useEffect(()=>{
        console.log("component Did mount using Function");
    },[name])
  return (
    <div>FUnction
        {name}
        <button onClick={()=>setName('Abarna Subramaniyan')}>set name</button>
    </div>
  )
}

export default Flifecycle