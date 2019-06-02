import { useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { TodoContext } from './TodoContext';
import Todo from './Todo';

export default function Data() {
  const { note } = useContext(TodoContext);
  return (
    <div>
      {note.map(notes => (
        <Todo value={notes} key={notes.id} />
      ))}
    </div>
  );
}
