import React, { Component } from 'react';
import { Segment} from 'semantic-ui-react';
import CardList from './CardList';
import './App.css';

class App extends Component {

  state = {
    cards : 
      [
        { 
          status: 'inactive',
          key: 'card1'
        },
        { 
          status: 'inactive',
          key: 'card2'
        },
        { 
          status: 'inactive',
          key: 'card3'
        },
        { 
          status: 'inactive',
          key: 'card4'
        },
        { 
          status: 'inactive',
          key: 'card5'
        },
        { 
          status: 'inactive',
          key: 'card6'
        }
    ]
  }

  onCardClick = (key) => {
    console.log(this.state.cards[0]['key'])
    console.log(key)

    let newState = this.state.cards;
    console.log(newState)
    for (let i=0; i < newState.length; i++) {
      if (newState[i]['key'] === key) {

        newState[i]['status'] = 'active'

      }
    }
    this.setState({cards: newState})
  }

  render() {
    return (
      <div className="App">
        <Segment >
          <h1>Developer Test</h1>
        </Segment>
        <Segment >
          <h3>Cards</h3>
          <CardList cards={this.state.cards} onCardClick={this.onCardClick}/>

        </Segment>
      </div>
    );
  }
}

export default App;
