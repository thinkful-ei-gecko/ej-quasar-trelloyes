import React, {Component} from 'react';
import Card from './Card.js';
import List from './List.js';
import STORE from './store.js';
import './App.css';


class App extends Component {

  render(){
      return (
        <main className='App'>
          <header className="App-header">
            <h1>Trelloyes!</h1>
          </header>
          <div className="App-List">
            {STORE.lists.map(list => (
              <List 
                key={list.id}
                header={list.header}
                cards={list.cardIds.map(id => STORE.allCards[id])}
                />))}
          </div>
        </main>
      );
    }
  }

export default App;