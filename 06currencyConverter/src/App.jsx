import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center items-start h-screen w-screen bg-red-200'>
        <h1 className=' bg-yellow-300 p-2 rounded inline-block'>Currency App With Chai</h1>
      </div>
    </>
  )
}

export default App
