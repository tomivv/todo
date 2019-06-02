import { useState, useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import { TodoProvider } from './TodoContext';
import '../style.css';

export function useNotes() {
  const [note, setNote] = useState([]);

  async function updateNotes() {
    const api = 'http://localhost:3001/api/notes';
    const { data } = await axios.get(api);
    setNote(data);
  }

  useEffect(function() {
    updateNotes();
  }, []);

  return { note, updateNotes };
}

// eslint-disable-next-line react/prop-types
export default function Page({ children }) {
  const hook = useNotes();
  return (
    <TodoProvider value={hook}>
      <div className="container">{children}</div>
    </TodoProvider>
  );
}
