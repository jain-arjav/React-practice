import { useState } from 'react'

import Card from './Components/Card'

import './App.css'

function App() {

  let myObj = {
    userName: "Arjav Jain",
    age: 22
  }

  let myArr = [1, 0, 3]
  
  return (
    <>
      <Card username="Arjav Jain" btnText = "Click me"/>
      <Card username="Chai aur Code" btnText = "Visit me" someObj={myObj} arr = {myArr} />
      <Card/>
      

    </>
  )
}

export default App
