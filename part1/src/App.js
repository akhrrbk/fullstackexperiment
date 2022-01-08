import React, {useState} from 'react'
import Note from './components/Note'

const Title = ({text}) => <h2>{text}</h2>
const App = (props) => {

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')

  const handleNoteChange = (e) => {
    console.log(e.target.value)
    setNewNote(e.target.value)
  }

  const addNote = (e) => {
    e.preventDefault()
    console.log('button clicked', e.target)
    const noteObject = {
      content: newNote,
      data: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length +1,
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }
  return (
    <div>
      <Title text='Notes' />
      <ul>
        {notes.map((note) => <Note key={note.id} note={note} /> )}
      </ul>
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={handleNoteChange} />
        <button type='submit'>addNote</button>
      </form>
    </div>
  )
}

export default App