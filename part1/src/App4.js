import React, {useState, useEffect} from 'react'
import Note from './components/Note'
import noteService from './services/nodes'

const App = () => {
  const [blogs, setBlogs] = useState([])  
  const [newTitle, setNewTitle] = useState('')  
  const [newAuthor, setNewAuthor] = useState('')  
  const [newUrl, setNewUrl] = useState('')  
  const [newLikes, setNewLikes] = useState('')  
  
  useEffect(()=> {
    noteService.getAll().then(initialNotes => setBlogs(initialNotes))
  }, [])
  
  const addBlog = (e) => {
    e.preventDefault()
    const noteObject = {
      title: newTitle,
      author: newAuthor,
      url: newUrl,
      likes: newLikes
    }

    noteService.create(noteObject).then(addingNotes => {
      setBlogs(blogs.concat(addingNotes))
      setNewTitle('')
      setNewAuthor('')
      setNewUrl('')
      setNewLikes('')
    })
  }

  const handleTitleChange = (e) => {
    e.preventDefault()
    setNewTitle(e.target.value)
  }

  const handleAuthorChange = (e) => {
    e.preventDefault()
    setNewAuthor(e.target.value)
  }

  const handleUrlChange = (e) => {
    e.preventDefault()
    setNewUrl(e.target.value)
  }

  const handleLikesChange = (e) => {
    e.preventDefault()
    setNewLikes(e.target.value)
  }

  return (
    <div>

      <h1>here is the content</h1>
      <ul>
        {blogs.map((note) => <Note key={note.id} note={note} /> )}
      </ul>

      <form onSubmit={addBlog}>
        <div>
          <label htmlFor="inputtext">title</label>
          <input id='inputtext' type="text" value={newTitle} onChange={handleTitleChange} />
        </div>
        <div>
          <label htmlFor="inputnumber">author</label>
          <input id='inputnumber' type="text" value={newAuthor} onChange={handleAuthorChange} />
        </div>
        <div>
          <label htmlFor="inputurl">url</label>
          <input id='inputurl' type="text" value={newUrl} onChange={handleUrlChange} />
        </div>
        <div>
          <label htmlFor="inputlikes">likes</label>
          <input id='inputlikes' type="text" value={newLikes} onChange={handleLikesChange} />
        </div>
        <div>
          <button type='submit'>submit</button>
        </div>
      </form>

    </div>
  )
}

export default App