import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notes from './lib/Notes';
import Add from './lib/Add';

function App() {
  const [notes, setNotes] = useState(null);

  return (
    <div className="App">
      <div className="container">
        <main className="col-12 py-md-3 pl-md-5 bd-content">
          <Add set={setNotes} />
          <Notes notes={notes} set={setNotes} />
        </main>
      </div>
    </div>
  );
}

export default App;
