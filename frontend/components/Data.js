import { useContext } from 'react';
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
