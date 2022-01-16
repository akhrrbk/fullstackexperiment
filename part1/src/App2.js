import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './services/nodes'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons)  
  const [newName, setNewName] = useState('')  
  const [newNumber, setNewNumber] = useState('')  
  
  useEffect(()=> {
    noteService.getAll().then(initialNotes => setPersons(initialNotes))
  }, [])

  const addNote = (e) => {
    e.preventDefault()
    const noteObject = {
      name: newName,
      number: newNumber
    }

    noteService.create(noteObject).then(addingNotes => {
      setPersons(persons.concat(addingNotes))
      setNewName('')
      setNewNumber('')
    })
  }

  const handleNameChange = (e) => {
    e.preventDefault()
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    e.preventDefault()
    setNewNumber(e.target.value)
  }


  return (
    <div>

      <h1>PhoneBook</h1>
      <ul>
        {persons.map((person) => <Note key={person.id} person={person} /> )}
      </ul>

      <form onSubmit={addNote}>
        <div>
          <label htmlFor="inputtext">name</label>
          <input id='inputtext' type="text" value={newName} onChange={handleNameChange} />
        </div>

        <div>
          <label htmlFor="numberinput">number</label>
          <input id='numberinput' type="number" value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>submit</button>
        </div>
      </form>

    </div>
  )
}

export default App