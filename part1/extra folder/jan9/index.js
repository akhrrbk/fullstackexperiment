import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'

axios
.get('http://localhost:3001/notes')
.then(response => {
  const notes = response.data
  console.log(notes);
})


const notes = [
  { name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
]

ReactDOM.render(
    <App notes={notes} />,
    document.getElementById('root')
  )
reportWebVitals();