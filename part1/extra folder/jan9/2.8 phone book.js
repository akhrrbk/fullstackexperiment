import React, {useState} from 'react'
import Note from './components/Note'

const Title = ({text}) => <h2>{text}</h2>

const App = (props) => {

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')

  const addNote = (e) => {
    e.preventDefault()
    // console.log('button clicked', e.target)
    
    var filtering = notes.filter((axror) => axror.name === newNote)
    console.log(filtering)
    if(filtering.length === 0){
      const newnoteobject = {
        name: newNote,
      }

      setNotes(notes.concat(newnoteobject))
      setNewNote('')
    } else {
      alert(`${newNote} already exists in our database`)
    }

    
  }

  const handleNoteChange = (e) => {
    // console.log(e.target.value);
    setNewNote(e.target.value)
  }

  return (
    <div>
      <Title text='Phonebook' />
      
      <form onSubmit={addNote}>
        <label htmlFor="name">Name</label>
        <input id='name' value={newNote} onChange={handleNoteChange}/>
        <button type='submit'>Save</button>
      </form>

      <Title text='Numbers' />

      <ul>
        {notes.map((note, i) => <Note key={i} note={note} /> )}
      </ul>

    </div>
  )
}

export default App