import React, { createContext, useContext } from 'react'

let Datacontext=createContext(0);

function Drilling() {
    function A(){
        let drill =100;
        return <> 
        <Datacontext.Provider value={drill}>
            <div>A</div> <B p={drill}/>
            </Datacontext.Provider>
        
        </>
    }
    function B({p}){
       
        return <> <div>A</div> <C p={drill}/></>
    }
    function C({p}){
      
        return <> <div>A</div> <D p={drill}/></>
    }
    function D({p}){
        let samaan=useContext(Datacontext)
        return <> <div>A :{samaan}</div></>
    }
  return (
   <div></div>
  )
}

export default Drilling