import React, { useState } from 'react'

const Count = () => {


    const [val, setVal] = useState(1);

    function IncreaseCount(){
        setVal(val+1);
    }

    function DecreaseCount(){
        setVal(val-1);
    }
  return (
    <>
    <p>Counter Value: {val}</p>
    <button onClick={()=>IncreaseCount()}>+</button>
    <button onClick={()=>DecreaseCount()}>-</button>
    </>
  )
}

export default Count