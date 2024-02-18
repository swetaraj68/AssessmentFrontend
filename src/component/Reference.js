import React , {memo, useEffect, useRef} from "react";

const Reference = () => {
    const pRef = useRef(null)
    console.log("JUST INITIALIZE----->>>",pRef)
    console.log("JUST INITIALIZE CURRENT----->>>",pRef?.current)
    
   function handleClick(){
    pRef.current.style.color === "red" ?  pRef.current.style.color = "white"  : pRef.current.style.color = "red" 
    pRef.current.innerHTML = "SWETA"
   }
   console.log("----------->>>render<<<-----------")
   useEffect(()=>{
    pRef.current.style.background = "black"
    pRef.current.style.color = "red"
 
   },[])
    return(
        <><h1 style={{color : "white"}} ref={pRef}>Reference Method </h1>
      <button onClick={handleClick}>Change Color</button>
        </>
    )
};

export default memo(Reference);
