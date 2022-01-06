import './App.css';
import React, {useState} from 'react'

const History = (props) => {
  if(props.allClicks.length === 0){
    return (
      <div>
        press the button for a change
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join('')}
    </div>
  )
}

const Button = ({onClick, text}) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

const App = () => {

  const [clicks, setLeftnRight] = useState({
    leftcounter : 0, rightcounter : 0
  })
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeftnRight({...clicks, leftcounter: clicks.leftcounter+1})
  } 
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setLeftnRight({...clicks, rightcounter: clicks.rightcounter+1})
  }

  return (
    <div>
      <div>left: {clicks.leftcounter}</div>
      <div>right: {clicks.rightcounter}</div>

      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text="right" />
      <History allClicks={allClicks} />
    </div>
  )  
}

export default App;
