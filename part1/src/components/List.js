import React from "react";

const List = ({notes}) => {
    // console.log(notes);
    return (
      <div>
        {notes.map((note) => {return <li key={note.id}>{note.content}</li>})}
      </div>
    )
  }

export default List