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

  // version 2.1 this will be updated later
  const handleLeftClick = () => {
    const newClicks = {
      leftcounter: clicks.leftcounter+1,
      // old version
      // rightcounter: clicks.rightcounter

      // new version
      ...clicks 
    }
    setLeftnRight(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = {
      // old version
      // leftcounter: clicks.leftcounter,
      
      // new version
      ...clicks,
      rightcounter: clicks.rightcounter+1
    }
    setLeftnRight(newClicks)
  }

  return (
    <div>
      <div>left: {clicks.leftcounter}</div>
      <div>right: {clicks.rightcounter}</div>
      
      {/* this was version 2.0 but we are using components out of the button */}

      {/* <button onClick={() => {
        const newClicks = {
          leftcounter: clicks.leftcounter+1,
          rightcounter: clicks.rightcounter
        }
        setLeftnRight(newClicks)
      }}>left counter +1</button>

      <button onClick={() => {
        const newClicks = {
          leftcounter: clicks.leftcounter,
          rightcounter: clicks.rightcounter+1
        }
        setLeftnRight(newClicks)
      }}>right counter +1</button> */}

      <Button onClick={handleLeftClick} text='left +1' />
      <Button onClick={handleRightClick} text="right+1 " />
    </div>
  )  
}

export default App;
