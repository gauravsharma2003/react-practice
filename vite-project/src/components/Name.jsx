import React, { useState } from 'react'

const Name = (name) => {
 

    let [names, setname]=useState('gaurav')
    function handlename(){
        setname('daba diya')
    }
  return (
    
    <div>
        {/* {/* <div>{nashe}</div> */}
        <button onClick={handlename}>daba do naa</button>
        <h1>Naam : {names}</h1>
    

    </div>
  )
}

export default Name