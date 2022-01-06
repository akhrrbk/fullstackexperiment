import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

const Display = ({counter}) => counter

const Button = ({onClick, text}) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

const App = () => {

  const [counter, setCounter] = useState(0)
  
  const randomNumber = () => {
    const hereisoutput = Math.floor(Math.random()*100)
    setCounter(counter + hereisoutput)
    console.log(`random output was: ${hereisoutput}`)
  }
  const inscreaseByOne = () => setCounter(counter+1)
  const setToZero = () => setCounter(0)
  
  return (
    <div>
      <Display counter={counter} />
      <Button onClick={inscreaseByOne} text='+1 button' />
      <Button onClick={randomNumber} text='+ random button' />
      <Button onClick={setToZero} text='reset button' />
    </div>
  )  
}

export default App;
