import React, {useState, useEffect} from 'react'
import Note from './components/Note'
import noteService from './services/nodes'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons)  
  const [newName, setNewName] = useState('')
  const [showAll, setShowAll] = useState(true)
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
  const notesToShow = showAll ? persons : persons.filter(note => note.important === true)


  return (
    <div>

      <h1>PhoneBook</h1>
      <button onClick={()=> setShowAll(!showAll)}>show {showAll? 'important' : 'all'}</button>
      {/* <ul>
        {notesToShow.map((person) => <Note key={person.id} person={person} /> )}
      </ul> */}
      <ul>
        {notesToShow.map((note) => <Note key={note.id} note={note} /> )}
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