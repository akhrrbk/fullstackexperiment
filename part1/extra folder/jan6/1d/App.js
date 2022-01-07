import './App.css';
import React, {useState} from 'react'

const App = () => {

  const [value, setValue] = useState(0)

  const setToValue = (newValue) => () => {
    setValue(newValue)
  }

  return (
    <div>
      <div>{value}</div>
      <button onClick={setToValue(1000)} >+1000</button>
      <button onClick={setToValue(0)} >reset</button>
      <button onClick={setToValue(value + 1)} >+1</button>
    </div>
  )
  // const hello = (who) => console.log('hello', who)

  // return (
  //   <div>
  //     <button onClick={hello('mama')}>button1</button>
  //     <button onClick={hello('papa')}>button2</button>
  //     <button onClick={hello('ukachang')}>button3</button>
  //   </div>
  // )  
}

export default App;
