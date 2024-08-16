
import React, { useState } from 'react'
import Person from './components/Person'
import Car, {Cheetah, Level} from './components/Car'
import Sattu from './components/Sattu'
import Satta from './components/Satta'
import Property from './components/Property'
import Name from './components/Name'
import Cunts from './components/Cunts'
import Heroin from './components/Heroin'
import Timer from './components/Timer'
import MemoFn from './components/MemoFn'
import ControlledInput from './components/ControlledInput'
import {Routes,Route, Link , lazy} from 'react-router-dom'

function App() {

  // let [username, setUsername]= useState("gaurav")
  // function handleNaam(){
  //   setUsername("mai hoon gaurav")
  // }
  return (

    <div>
      <Link to='/timer'>Timer</Link>
      <Link to='/satta'>satta</Link>
    
      <Routes>
        <Route path='/timer' element={<Timer/>}>
        </Route>
        <Route path='/satta' element={<Satta/>}></Route>
      </Routes>
    </div>
  )
}

export default App