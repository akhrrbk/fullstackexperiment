import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

const randomnumber = () =>{
  return Math.floor(Math.random()*100)
}

const App = () => {

  const [counter, setCounter] = useState(10)
  // setTimeout(
  //   () => setCounter(counter+1),
  //   1000
  // )

  // const mamMa = () => {
  //   console.log(`at second ${counter}`)
  // }
  return (
    <div>
      <div>{counter}</div>
      {/* <button onClick={mamMa}>button</button> */}
      <button onClick={() => {
        const randomnum = randomnumber()
        setCounter(counter + randomnum)
        console.log(randomnum)
      }}>button2</button>
      <button onClick={() => {setCounter(0)}}>reset</button>
    </div>
  )  
}

export default App;
