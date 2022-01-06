import logo from './logo.svg';
import './App.css';

const GuessYear = (props) => {
  const yearnow = new Date().getFullYear()
  const bornyear = yearnow - props.age
  console.log(`Current Year: ${yearnow}`)
  console.log(`Year Born: ${bornyear}`)
  return (
    <div>
      <p>
        Born: {bornyear}
      </p>
    </div>
  ) 
}

const Greet = (props) => {
  
  return (
    <div>
      <p>
        Name: {props.name}
      </p>
      <p>
        Age: {props.age}
      </p>
    </div>
  )
}

const App = () => {
  
  const name = "Axror";
  const age = 23;
  
  return (
    <div>
      <Greet name={name} age={age} />
      <GuessYear age={age} />
    </div>
  )  
}

export default App;
