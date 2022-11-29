import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {NavBar} from './components/NavBar'
import {SideNav} from './components/SideNav'
import {Login} from './components/Login'
import {Registro} from './components/Registro'


function App() {
  
  const user = true

  return (
    <div className="App">
      {user ? <SideNav/> : <Registro/> }
    </div>
  )
}

export default App
