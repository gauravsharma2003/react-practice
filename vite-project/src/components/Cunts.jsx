import React, { useState } from 'react'

function Cunts() {

    const [count, setcount ]=useState(0)
  return (
    //bathcing: componnent only re renders one time after all the change and set functions are async functions 
    <div>
        <button onClick={()=>setcount(count+1)}>Bada karo</button>
        <h1>count: {count}</h1>

        <button onClick={()=>setcount(count-1)}>Chota karo</button>
    </div>
  )
}

export default Cunts