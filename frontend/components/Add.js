/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useContext } from 'react';
import axios from 'axios';
import { TodoContext } from './TodoContext';

export default function Add() {
  const [note, setNote] = useState('');
  const { updateNotes } = useContext(TodoContext);

  async function addNote() {
    const api = `http://localhost:3001/api/notes`;
    const response = await axios.post(api, {
      note: note.toString(),
    });
    updateNotes();
  }

  return (
    <div>
      <label>Note: </label>
      <input id="addInput" type="text" value={note} onChange={e => setNote(e.target.value)} />
      <button type="button" onClick={e => addNote(e)}>
        Add
      </button>
    </div>
  );
}
