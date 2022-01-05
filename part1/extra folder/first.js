// this code is from app.js but got deleted later
// did not really wanted to erase so i am keeping them here

import logo from './logo.svg';
import './App.css';

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old!
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <p>
      greeting app created by <a href="https://github.com/akhrrbk">akhrrbk</a> with love
      </p>
    </div>
  )
}

function App() {
  // const datentime = new Date();
  // console.log('hi')

  const name = 'Peter';
  const age = 10;

  return (
    // <p>current time: {datentime.toString()}</p>  

    <div>
      <h1>Greetings</h1>
      <Hello name='maya' age={26} />
      <Hello name={name} age={age} />
      <Hello />

      <Footer />
    </div>

  );
}

export default App;
