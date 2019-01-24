import React, { Component } from 'react';
import { Segment} from 'semantic-ui-react';
import CardList from './CardList';
import './App.css';

class App extends Component {

    state = {
      cards: []
    }

  render() {
    return (
      <div className="App">
        <Segment >
          <h1>Developer Test</h1>
        </Segment>
        <Segment >
          <h3>Cards</h3>
          <CardList />

        </Segment>
      </div>
    );
  }
}

export default App;
