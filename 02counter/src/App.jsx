import { useState } from 'react'
import './App.css'

function App() {

  // useState Hook
  let [counter, setCounter] = useState (2)

  // let counter = 2  -> bcoz in useState Hook we used counter 
  let addValue = () => {
    // counter = counter + 1
    if (counter < 20)
      setCounter(counter + 1)
    else
      alert("Counter value is 20")
  }
  let removeValue = () => {
    if (counter > 0)
      setCounter(counter - 1)
    else
      alert("Counter value is 0")
  }

  return (
    <>
      <h1> chai aur "02counter" </h1>
      <h2> counter valur : {counter} </h2>

      <button onClick={addValue} > Add value </button>
      <br/> <br/>
      <button onClick={removeValue}> Remove value </button>
    </>
  )
}

export default App
