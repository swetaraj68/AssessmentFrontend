import React, { useState } from "react";
export default function Child(props){
    const [value, setValue]=useState("")
    function handleButton(){
        props.setHeading(value)
        setValue("")
    }
    return(
        <>

        <input value={value} onChange={(e)=>setValue(e.target.value)} />
        <button onClick={handleButton}>Send data to Parent</button>
        </>
    )
}