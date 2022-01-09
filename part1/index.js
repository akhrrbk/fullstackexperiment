const express = require('express')
const app = express()

app.use(express.json())

let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
  ]
  
  const generateid = () => {
    const maxId = persons.length > 0 ? Math.max(...persons.map(n => n.id)) : 0
    return maxId + 1
  }

  // const app = http.createServer((request, response) => {
//   response.writeHead(200, {'Content-Type': 'application/json'})
//   response.end(JSON.stringify(notes))
// })

app.get('/', (request, response) => {
  response.send('<h1>Hello Mother from express</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  let currenttime = new Date()
  response.send(`<p>phonebook has ${persons.length} people</p> <p>${currenttime}</p> `)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = persons.find(note => note.id === id)
  if(note) {
    response.json(note)
  } else response.send('<h1>404. page does not exist yet</h1>')
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(note => note.id !== id)

  response.status(204).end()
})

app.post('/api/persons', (request, response) => {

  const body = request.body
  console.log('hello');
  if(!body.name){
    return response.status(400).json({
      error: 'name missing'
    })
  }

  const note = {
    name: body.name,
    important: true,
    date: new Date(),
    id: generateid()
  }

  persons= persons.concat(note)

  response.json(note)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})