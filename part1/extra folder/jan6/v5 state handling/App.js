import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

const App = () => {

  const [counter, setCounter] = useState(10)
  setTimeout(
    () => setCounter(counter+1),
    1000
  )
  return (
    <div>{counter}</div>
  )  
}

export default App;
