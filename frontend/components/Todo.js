/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import axios from 'axios';
import '../style.css';

export default function Todo(note) {
  function underLine(e) {
    if (e.target.classList.contains('line')) {
      e.target.classList.remove('line');
    } else {
      e.target.className = 'line';
    }
    console.log(e.target.classList);
  }

  async function deleteNote(id) {
    const api = `http://localhost:3001/api/notes/${id}`;
    const resp = await axios.delete(api);
    console.log(resp);
  }

  return (
    // eslint-disable-next-line react/style-prop-object
    <div id={note.value.id} className="note">
      <p onClick={e => underLine(e)}>{note.value.note}</p>
      <button type="button" className="btn" onClick={e => deleteNote(note.value.id)}>
        X
      </button>
    </div>
  );
}
