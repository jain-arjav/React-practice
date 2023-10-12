import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 5;
  let [counter, setCounter] = useState(5);

  const addvalue = () => {
    if (counter === 20) return counter;
    setCounter(counter + 1);
    
  }
  const removevalue = () => {
    if (counter === 0) return counter;
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>I am Arjav</h1>
      <h2>I am {counter} </h2>
      <button onClick={addvalue}>
        Add
      </button>
      <button onClick={removevalue}>
        Remove
      </button>
    </>
  )
}

export default App
