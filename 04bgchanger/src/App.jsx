import { useState } from 'react'

import ColorButton from './Components/ColorButton';

function App() {
  const [color, setColor] = useState("olive");
  
  return (
    <>
      <div className="w-screen h-screen flex duration-1000"
      style={{ backgroundColor: color}}
    >
      

      <div 
       
        className="fixed flex justify-center flex-wrap bottom-12 inset-x-0 px-2 py-2 m-auto text-center">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <ColorButton  color="orange" onClick={() => setColor("orange")} />
          
            <ColorButton color="red" onClick={() => setColor("red")} />
          
            <ColorButton color="blue" onClick={() => setColor("blue")} />

            <ColorButton color="black" onClick={() => setColor("black")} />
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full shadow-lg" style={{ backgroundColor: "red" }}> Red </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full shadow-lg" style={{ backgroundColor: "green" }}> Green </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full" style={{ backgroundColor: "blue" }}> Blue </button>
          <button
            onClick={() => setColor("lavender")}
            className="outline-none px-4 py-1 border-black rounded-full text-gray-500" style={{ backgroundColor: "lavender" }}> Lavender </button><button
            onClick={() => setColor("yellow")}
            className=" outline-none border-black px-4 py-1 rounded-full text-black" style={{ backgroundColor: "yellow" }}> Yellow </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full border-black text-black" style={{ backgroundColor: "pink" }}> Pink </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full" style={{ backgroundColor: "purple" }}> Purple </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1  border-black rounded-full text-black" style={{ backgroundColor: "white" }}> White </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full" style={{ backgroundColor: "black" }}> Black </button>
        </div>
      
      </div>
      
      </div>
    </>
    
      
  )
}

export default App
