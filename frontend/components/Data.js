import { useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { TodoContext } from './TodoContext';
import Todo from './Todo';

export default function Data() {
  const { notes } = useContext(TodoContext);
  return (
    <div>
      {notes.map(note => (
        <Todo value={note} key={note.id} />
      ))}
    </div>
  );
}
