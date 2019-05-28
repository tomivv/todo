/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import axios from 'axios';

export default function Add() {
  const [note, setNote] = useState('');

  async function addNote() {
    const api = `http://localhost:3001/api/notes`;
    const response = await axios.post(api, {
      note: note.toString(),
    });
    console.log(response);
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
