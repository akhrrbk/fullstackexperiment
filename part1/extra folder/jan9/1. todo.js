import React, {useState} from 'react'
import Note from './components/Note'

const Title = ({text}) => <h2>{text}</h2>

const App = (props) => {

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const notestoshow = showAll ? notes : notes.filter(note => note.important === true)
  console.log(notestoshow);

  const addNote = (e) => {
    e.preventDefault()
    // console.log('button clicked', e.target)

    const newnoteobject = {
      content: newNote,
      date: new Date().toISOString(),
      important: true,
      id: notes.length +1,
    }

    setNotes(notes.concat(newnoteobject))
    setNewNote('')
  }

  const handleNoteChange = (e) => {
    // console.log(e.target.value);
    setNewNote(e.target.value)
  }

  return (
    <div>
      <Title text='Notes' />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notestoshow.map((note, i) => <Note key={i} note={note} /> )}
      </ul>
      
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default App