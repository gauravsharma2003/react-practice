import React from 'react'

function Event() {
    function handleDhakke(a,b){
        console.log('lun lelo');
        console.log(a+b);
    }
  return (
    // <button onClick={handleDhakke}> Click</button>
    <button onClick={()=>handleDhakke(10, 20)}> Click</button>
  )
}

export default Event