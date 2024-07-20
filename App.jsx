import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(0);
  
 
 //let counter=0
const addvalue=() => {
  setCounter(counter+1)
  
   
  }

  if (counter===11){
    setCounter(counter-1)
    console.log(counter)
      }


const removevalue=()=>{
  setCounter(counter-1)

}
if (counter===-1){
  setCounter(counter+1)
  console.log(counter);
    }
  return (
    <>
      <h1>Hello counter</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addvalue}>Addvalue{counter}</button>
      <br/>
      <button onClick={removevalue}>Remove value{counter}</button>
    </>
  )
  
}

export default App;
