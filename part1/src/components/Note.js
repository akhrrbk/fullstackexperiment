import React from "react";

const Note = ({note}) => {
    return (
        <li>
            title: {note.title} / author: {note.author} / url: {note.url} / likes: {note.likes}
        </li>
    )
}

export default Note