import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [hasNumber, sethasNumber] = useState(false)
  const [hasSymbol, sethasSymbol] = useState(false)
  const [password, setPassword] = useState("")

  const passwordref = useRef(null)
  const copyPasswordtoClipboard = useCallback(() => {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (hasNumber) str += "0123456789"
    
    if (hasSymbol) str += "!@#$%^&*()_+"
    
    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length ))
    }
    setPassword(pass)
    

  }, [length, hasNumber, hasSymbol, setPassword])

  
  useEffect(() => {
    passwordGenerator()
  }, [length, hasNumber, hasSymbol, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-3xl font-semibold text-center mb-4'>Password Generator</h1>
        <div className='<div className="flex shadow rounded-lg mb-4 overflow-auto">'>
          <input
            type='text'
            className='w-full px-4 py-2 focus:outline-none'
            placeholder='password'
            value={password}
            readOnly
            ref = {passwordref}
          />
          <button
            onClick={copyPasswordtoClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-orange-600'
        >copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
              onChange={e => setlength(e.target.value)}
            />
            <label>Length : {length}</label>
           
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              checked={hasNumber}
              onChange={e => sethasNumber(e.target.checked)}
            />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              checked={hasSymbol}
              onChange={() => {
                sethasSymbol(!hasSymbol)
              } }
            />
            <label>Symbol</label>
          </div>
          
          
        </div>
        
      </div>
    </>
  )
}

export default App
