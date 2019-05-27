import { useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { TodoContext } from './TodoContext';

export default function Data() {
  const { notes } = useContext(TodoContext);
  return (
    <div>
      <ul>
        {notes.map(note => (
          <li key={note.id}>{note.note}</li>
        ))}
      </ul>
    </div>
  );
}
