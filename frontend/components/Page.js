import { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-cycle
import { TodoProvider } from './TodoContext';
import '../style.css';

export function useNotes() {
  const [note, setNote] = useState([]);

  useEffect(function() {
    (async () => {
      const response = await fetch('http://localhost:3001/api/notes');
      const data = await response.json();
      setNote(data);
    })();
  }, []);

  return note;
}

// eslint-disable-next-line react/prop-types
export default function Page({ children }) {
  const notes = useNotes();
  return (
    <TodoProvider value={{ notes }}>
      <div className="container">{children}</div>
    </TodoProvider>
  );
}
