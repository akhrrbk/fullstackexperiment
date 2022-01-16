import React, {useState, useEffect} from 'react'
import Note from './components/Note'
import noteService from './services/nodes'

const App = () => {
  const [persons, setNotes] = useState([])  
  const [newNote, setNewNote] = useState('')  
  const [newNumber, setNewNumber] = useState('')  
  
  useEffect(()=> {
    noteService.getAll().then(initialNotes => setNotes(initialNotes))
  }, [])
  
  const addNote = (e) => {
    e.preventDefault()
    const noteObject = {
      name: newNote,
      number: newNumber,
    }

    noteService.create(noteObject).then(addingNotes => {
      setNotes(persons.concat(addingNotes))
      setNewNote('')
      setNewNumber('')
    })
  }

  const handleNoteChange = (e) => {
    e.preventDefault()
    setNewNote(e.target.value)
  }

  const handleNumberChange = (e) => {
    e.preventDefault()
    setNewNumber(e.target.value)
  }

  return (
    <div>

      <h1>here is the content</h1>
      <ul>
        {persons.map((note) => <Note key={note.id} note={note} /> )}
      </ul>

      <form onSubmit={addNote}>
        <div>
          <label htmlFor="inputtext">name</label>
          <input id='inputtext' type="text" value={newNote} onChange={handleNoteChange} />
        </div>
        <div>
          <label htmlFor="inputnumber">number</label>
          <input id='inputnumber' type="text" value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>submit</button>
        </div>
      </form>

    </div>
  )
}

export default App