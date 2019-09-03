import React from 'react';
import List from './List.js';

function App(prop) {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-List">
        <List />
      </div>
      {/* content goes here */}
    </main>
  );
}

export default App;