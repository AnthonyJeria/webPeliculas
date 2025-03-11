import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyRoutes } from './routers/routes'
import { MenuArriba } from './components/MenuArriba'
import { Footer } from './components/Footer'

function App() {

  return (
    <div>
      <MenuArriba/>
      <MyRoutes/>
      <Footer/>
    </div>
  )
}

export default App
