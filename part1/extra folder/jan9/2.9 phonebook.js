import React, {useState} from 'react'
import Note from './components/Note'

const Title = ({text}) => <h2>{text}</h2>

const App = (props) => {

  const [notes, setNotes] = useState(props.notes)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const notestoshow = notes.filter(note => note.name.toLowerCase().includes(newSearch.toLowerCase()))
  // console.log(notestoshow)

  const addNote = (e) => {
    e.preventDefault()
    // console.log('button clicked', e.target)

    var filtering = notes.filter((axror) => axror.name === newName)
    // console.log(filtering)

    if(filtering.length === 0){
      const newnoteobject = {
        name: newName,
        number: newNumber,
        id: notes.length + 1,
      }

      setNotes(notes.concat(newnoteobject))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} already exists in our database`)
    }

    
  }

  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    // console.log(e.target.value);
    setNewNumber(e.target.value)
  }

  const searchByName = (e) => {
    console.log(e.target.value);
    setNewSearch(e.target.value)
  }

  return (
    <div>
      <Title text='Phonebook' />
      
      <div>
        <label htmlFor="search">search by name</label>
        <input type="search" id='search' onChange={searchByName} />
      </div>

      <Title text='add a new' />
      <form onSubmit={addNote}>
        <div>
          <label htmlFor="name">Name</label>
          <input id='name' value={newName} onChange={handleNameChange}/>
        </div>
        
        <div>
          <label htmlFor="number">Number</label>
          <input id='number' value={newNumber} onChange={handleNumberChange}/>
        </div>
        
        <div>
          <button type='submit'>Save</button>
        </div>
      </form>

      <Title text='Numbers' />

      <ul>
        {notestoshow.map((note, i) => <Note key={i} note={note} /> )}
      </ul>

    </div>
  )
}

export default App