// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Navigation from "./Navigation"
import Home from "./Home"
import What from "./What"

function App() {
  // const [count, setCount] = useState(0)

  const nav=[
    'Home','About','Courses','Placements','Contact'
  ]

  const hom=[
    {
      imm:"../public/images/background-images/hero-bg.jpg",
      ttl:"WELCOME TO",
      ttl1:"WEB AGENCY",
      par:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      cont:"Contact us"
    }
  ]

  const what=[
    {
      img:"../public/images/illustration-images/who-img.jpg",
      head:"WHO WE ARE?",
      cont:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      red:"Read More"
    }
  ]


  return (
    <>
      <Navigation navi={nav}/>
      <Home homi={hom}/>
      <What wht={what}/>

    </>
  )
}

export default App
