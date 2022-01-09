import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => { 

  const [notes, setNotes] = useState([])
    // const [newNote, setNewNote] = useState('')
    // const [showAll, setShowAll] = useState(true)

  const hook = () => {
    // console.log('effect is working')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        // console.log('axios promise fulfilled')
        setNotes(response.data)
      })
  }
  
  useEffect(hook , [])
  console.log(`rendering ${notes.length} notes`);
  return (
    <div></div>
  )
}


export default App