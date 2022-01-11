import React from "react";

const Note = ({note}) => <li>{note.content} {note.important}</li>

export default Note