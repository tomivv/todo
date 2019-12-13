import React, { useContext } from 'react';
import axios from 'axios';
import { TodoContext } from './TodoContext';
import '../style.css';

export default function Todo(note) {
  const { updateNotes } = useContext(TodoContext);

  function underLine(e) {
    if (e.target.classList.contains('line')) {
      e.target.classList.remove('line');
    } else {
      e.target.className = 'line';
    }
  }

  async function deleteNote(id) {
    const api = `http://localhost:3001/api/notes/${id}`;
    await axios.delete(api);
    updateNotes();
  }

  return (
    <div id={note.value.id} className="note">
      <p onClick={underLine} onKeyPress={underLine}>
        {note.value.note}
      </p>
      <button type="button" className="btn closeBtn" onClick={() => deleteNote(note.value.id)}>
        Delete
      </button>
    </div>
  );
}
