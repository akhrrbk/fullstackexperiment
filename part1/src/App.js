import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService   from './services/nodes'

const App = () => {
  const [notes, setNotes] = useState([])  
  const [newNote, setNewNote] = useState('')  
  const [showAll, setShowAll] = useState(true)
  
  useEffect(()=> {
    noteService.getAll().then(initialNotes => setNotes(initialNotes))
  }, [])
  
  
  const toggleImportanceOf = (id) => {
    const note = notes.find(note=>note.id === id)
    const changedNote = {...note, important: !note.important}
    
    noteService.update(id, changedNote).then(returnedNote => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })
  }

  const addNote = (e) => {
    e.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: true,
    }

    noteService.create(noteObject).then(addingNotes => {
      setNotes(notes.concat(addingNotes))
      setNewNote  ('')
    })
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  const handleNoteChange = (e) => {
    e.preventDefault()
    setNewNote(e.target.value)
  }

  const toggleImportance = (id) => {}

  return (
    <div>

      <h1>here is the content</h1>
      <button onClick={()=> setShowAll(!showAll)}>show {showAll? 'important' : 'all'}</button>
      
      <ul>
        {notesToShow.map((note) => <Note key={note.id} note={note } toggleImportance={()=> toggleImportanceOf(note.id)} /> )}
      </ul>

      <form onSubmit={addNote}>
        {/* <label htmlFor="inputtext">content</label> */}
        <input id='inputtext' type="text" value={newNote} onChange={handleNoteChange} />
        <button type='submit'>submit</button>
      </form>

    </div>
  )
}

export default App