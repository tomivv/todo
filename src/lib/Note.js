import React from 'react';

export default function Note({ text, id, set}) {
  
  let localNotes = JSON.parse(localStorage.getItem('notes'))
  async function deleteNote(noteId) {
    for (let i = 0; i < localNotes.length; i += 1) {
      if(localNotes[i].id === noteId) {
        localNotes.splice(i,1);
      }
    }
    localStorage.setItem('notes', JSON.stringify(localNotes))
    set(JSON.parse(localStorage.getItem('notes')))
  }
  return (
    <div id={id} className="row note-bg">
      <p className="col-xl-11 col-sm-10 col-md-10">
        {text}
      </p>
      <button type="button" className="btn col-xl-1 col-sm-2 col-md-2" onClick={() => deleteNote(id)}>
        Delete
      </button>
    </div>
  )
}