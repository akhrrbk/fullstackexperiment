import logo from './logo.svg';
import './App.css';

const GuessYear = (age) => {
  const yearnow = new Date().getFullYear()
  const bornyear = yearnow - age

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

const Greet = ({name, age}) => {
  return (
    <div>
      <p>
        Name: {name}
      </p>
      <p>
        Age: {age}
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
