import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'


const App = () => {

  const [counter, setCounter] = useState(0)
  // setTimeout(
    //   () => setCounter(counter+1),
    //   1000
    // )
    
    // const mamMa = () => {
      //   console.log(`at second ${counter}`)
      // }
  const randomNumber = () =>{setCounter(counter + Math.floor(Math.random()*100))}
  const inscreaseByOne = () => setCounter(counter+1)
  const setToZero = () => setCounter(0)
  
  return (
    <div>
      <div>{counter}</div>
      {/* <button onClick={mamMa}>button</button> */}
      <button onClick={inscreaseByOne}>button</button>
      <button onClick={randomNumber}>+random number</button>
      <button onClick={setToZero}>reset</button>
    </div>
  )  
}

export default App;
