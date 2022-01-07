import React from 'react'
// import Course from "./components/Course"

const Course = ({courses}) => {
  // console.log(courses);

  const Header = ({ courses }) => {
    return (
      <div>
        <h1>{courses.name}</h1>
      </div>
    )
  }

  const Total = ({ courses }) => {
      // console.log(course);

  // const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises + course.parts[3].exercises
  // console.log(sum);
  const summ = courses.parts.reduce(function(sum, value){
      return sum + value.exercises
  }, 0)
  
      return(
       <p>Number of exercises {summ}</p>
      ) 
  }

  const Part = ({part}) => {
      return (
          <p>
              {part.name} {part.exercises}
          </p>    
      )
  }

  const Content = ({ course }) => {
      return (
          <div>
              <Part part={courses.parts[0]} />
              <Part part={courses.parts[1]} />
              <Part part={courses.parts[2]} />
              <Part part={courses.parts[3]} />
          </div>
      )
  }
  return (
      <div>
          <Header courses={courses} />
          <Content courses={courses} />
          <Total courses={courses} />
      </div>
  )
}
const App = () => {

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}

export default App