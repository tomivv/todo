import React, { useState } from 'react';


export default function Add({ set }) {
  const [note, setNote] = useState('');

  async function updateNotes() {
    let localNotes = JSON.parse(localStorage.getItem('notes'));
    if (localStorage.getItem('count') === 'NaN') {
      localStorage.setItem('count', 1);
    }
    let localCount = localStorage.getItem('count');

    if (localNotes === null) {
      const arr = [];
      arr.push({text: note, id: 0})
      localStorage.setItem('notes', JSON.stringify(arr));
      localStorage.setItem('count', parseInt(localCount) + 1)
    } else {
      localNotes.push({text: note, id: parseInt(localCount)})
      localStorage.setItem('notes', JSON.stringify(localNotes));
      localStorage.setItem('count', parseInt(localCount) + 1)
     }
    set(localNotes)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if(note !== '') {
      updateNotes();
    }
    setNote('');
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center">
      <div className="form-group row w-75">
        <div className="col-sm-8">
          <input type="text" className="form-control" placeholder="Lisää uusi tehtävä" value={note} onChange={e => setNote(e.target.value)} />
        </div>
        <div className="col-sm-2">
          <button type="submit" className="btn btn-primary">Lisää</button>
        </div>
      </div>
    </form>
  )
}