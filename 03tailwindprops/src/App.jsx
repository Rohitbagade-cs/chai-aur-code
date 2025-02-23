import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-3xl font-bold underline text-green-400 mb-4"> welcome to tailwind </h1>
      
      <Card userName = "Rohit"  info = "hehehe"/>
      <Card userName = "Bagade" info = "shutup "/>
    </>
  )
}

export default App
