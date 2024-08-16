import React from 'react'

function Satta() {
    let rn =Math.floor(Math.random()*10)
    let num=7;
    let el;



  return (
    <div>
   { 
    (rn===7)?<h1>Thala for a reason</h1>:<h1>lawde lagg gaye</h1>

   }
   
   </div>
  )
}

export default Satta