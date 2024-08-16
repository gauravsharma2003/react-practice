import React, { useState } from 'react'



function Heroin( handlenaam={handlenaam}) {
  return (
    <div>
        <Hero naam="{gaurav}"/>
        <button onClick={handlenaam}>naam badlo bawa</button>
        <Hero naam="gaurav"/>
        <Hero naam="gaurav"/>
        <Hero naam="gaurav"/>
        <Hero naam="gaurav"/>
    </div>
  )
}
function Hero() {
    let [myname, setMyname]=useState(naam)
    return (
      <div>
        naam : {myname}
      </div>
     
    )
  }
  function handlenaam(){
    setMyname("raju rastogi")
}

export default Heroin