import React from 'react';
import Note from './Note';

export default function Notes({ notes, set }) {

  const LocalNotes = JSON.parse(localStorage.getItem('notes'))
  
  if (LocalNotes === null) { return (<div></div>) }

  return (
    <div>
      {LocalNotes.map(note => (
        <Note text={note.text} key={note.id} id={note.id} set={set} />
      ))}
    </div>
  )
}
