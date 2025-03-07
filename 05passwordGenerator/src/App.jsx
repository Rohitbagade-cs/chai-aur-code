import { useState , useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(5)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState(" ")

//useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = " "
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let num = "0123456789"
    let char = "!@#$%^&*()-_=+[{]}|;:'\",<.>/?"
    if(number) str += num
    if(character) str += char
    for(let i = 0; i < length; i++){
      let randomNum = (Math.floor(Math.random() * str.length))
      pass += str[randomNum]

    }
    setPassword(pass)

  }
  , [length, number, character]) 

  const copyToClipboard = useCallback (() => {
    passwordRef.current?.select();
    passwordRef  
    window.navigator.clipboard.writeText(passwordRef.current.value)

  }, [password])
  
  useEffect(() => {
    passwordGenerator()
  }, [length, number, character, passwordGenerator])
  return (
    <>
    <div className='flex  items-center flex-col h-screen w-screen bg-gray-800 p-4'>
      <h1 className='text-white italic text-2xl font-bold'>Password Generator </h1>
      <div className=' flex bg-gray-500 p-4 rounded my-10 mb-1'>
        <input 
        type="text"
        value={password}
        placeholder="Password" 
        readOnly
        className=' w-full bg-gray-300 rounded-md placeholder-gray-500'
        ref={passwordRef}
        /> 
        <button onClick={copyToClipboard}>Copy</button>
      </div>
      <div className='flex  bg-gray-500 p-4 rounded mx-2'>
        <div className='flex items-center mx-2'>
          <input
          type="range"
          value={length}
          min="5"
          max="15"
          className='cursor-pointer m-2 '
          onChange={(e) => setLength((e.target.value))}
          />
          <label className='text-white'> Length: {length}</label>
        </div>
        <div className='flex items-center mx-2'>
          <input
          type="checkbox"
          defaultChecked={number}
          id='numberInput'
          onChange={() => setNumber((prev) => !prev)}
          />
          <label className='text-white'> Number</label>

        </div>

        <div className='flex items-center'>
          <input
          type="checkbox"
          defaultChecked={character}
          id='numberInput'
          onChange={() => setCharacter((prev) => !prev)}
          />
          <label className='text-white'> Character</label>

        </div>
      </div>

    </div>
      
    </>
  )
}

export default App
 