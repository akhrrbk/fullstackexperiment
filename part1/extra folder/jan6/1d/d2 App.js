import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'


const Button = ({onClick, text}) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

const App = () => {

  // version 1
  // const [leftcounter, setleftCounter] = useState(0)
  // const [rightcounter, setrightCounter] = useState(0)
  
  // version 2
  const [clicks, setLeftnRight] = useState({
    leftcounter : 0, rightcounter : 0
  })

  const handleLeftClick = () => setLeftnRight({...clicks, leftcounter: clicks.leftcounter+1})
  const handleRightClick = () => setLeftnRight({...clicks, rightcounter: clicks.rightcounter+1})

  return (
    <div>
      <div>left: {clicks.leftcounter}</div>
      <div>right: {clicks.rightcounter}</div>

      <Button onClick={handleLeftClick} text='left +1' />
      <Button onClick={handleRightClick} text="right+1 " />
    </div>
  )  
}

export default App;
