import React, { useEffect, useState } from 'react'

function Timer() {
    
    let [time, setTime]=useState(0)
   
  useEffect(function(){
   let id= setInterval(()=>{
        setTime(time+1)
    },1000)
    return ()=>{
        clearInterval(id)
    }

  },[time])
    

  return (
    <div>{time}</div>
  )
}

export default Timer