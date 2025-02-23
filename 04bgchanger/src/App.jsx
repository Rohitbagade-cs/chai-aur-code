import { useState } from 'react'

function App() {
  // Initialize the color state with "skyblue"
  const [text, setText] = useState("Heyy Babeee...")
  const [color, setColor] = useState("#FBF3B9")
  const [image, setImage] = useState(null)

  return (
    // The div takes up the full width and height of the screen
    // The background color is set to the value of the color state
    // The transition duration for any changes is set to 200ms
    // <div className=" flex items-center justify-center w-screen h-screen duration-200" style={{ backgroundColor: color}}>
    //   <div className=" flex items-center justify-center px-2 py-2 gap-2 bg-white rounded-2xl"> 
        /* <div className="bg-red-700 h-7 px-4  text-white rounded-2xl" 
        onClick={() => setColor("red")}> 
        Red
        </div>
        <div className="bg-blue-700 h-7 px-4  text-white rounded-2xl"
        onClick={() => setColor("blue")}>
        Blue
        </div>
        <div className="bg-orange-700 h-7 px-4  text-white rounded-2xl"
        onClick={() => setColor("orange")}> 
        Orange
        </div>
        <div className="bg-violet-700 h-7 px-4  text-white rounded-2xl"
        onClick={() => setColor("violet")}> 
        Violet
        </div> */
        


        <div className=" flex flex-col items-center justify-center w-screen h-screen duration-200 " style={{ backgroundColor: color}}> 
        <div className='bg-white/40 backdrop-blur-md rounded-2xl px-15 p-10'>
        <div className=' flex items-center flex-col justify-center text-black text-lg font-bold font-serif'>{text}
        {image && (
        <img 
          src={image} 
          alt="Display" 
          className="w-48 h-48 object-cover rounded-lg mb-4"
        />
        )}
        </div>
          <div className='flex gap-2 py-9'>
            <button className=" text-white outline-none  rounded-full" style={{backgroundColor: "red"}}
            onClick={() => {setText("I"); setColor("#B7B1F2");setImage("https://i.pinimg.com/originals/24/85/d8/2485d82565a86696172d54ec1628f661.gif");}} >
            1
            </button>
            <button className=" text-white outline-none  rounded-full" style={{backgroundColor: "red"}}
            onClick={() => {setText("Love");setColor("#FDB7EA");setImage("https://i.pinimg.com/originals/8e/a2/59/8ea25986ad44f92320b32f4101fc06c0.gif")}} >
            2
            </button>
            <button className=" text-white outline-none  rounded-full" style={{backgroundColor: "red"}}
            onClick={() => {setText("You");setColor("#FFDCCC");setImage("https://c.tenor.com/RgU3Fsx6xGIAAAAC/emojify.gif")}}> 
            3
            </button>
          </div>
        </div>
        </div>
        
  )
}

export default App
