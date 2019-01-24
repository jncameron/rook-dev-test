import React, { Component } from 'react';
import { Segment, Button} from 'semantic-ui-react';
import CardList from './CardList';
import Header from './Header';
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
    let activeCount = 0;

    for (let i=0; i < newState.length; i++) {
      if(newState[i]['status'] === 'active') {
        activeCount++
      }
      console.log(activeCount);
    }

    for (let i=0; i < newState.length; i++) {
      if (newState[i]['key'] === key) {

        if (newState[i]['status'] === 'inactive' && activeCount < 1) {
          newState[i]['status'] = 'active'
        } else if (newState[i]['status'] === 'active') {
          newState[i]['status'] = 'inactive'
        }

      }
    }
    this.setState({cards: newState})
  }

  kittenize = () => {
    //TODO!
  }

  addCard = () => {
    const newCard = {
      status: 'inactive',
      key: Date.now()
    }
    this.setState(prevState => {
      return {
        cards: prevState.cards.concat(newCard)
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Header kittenize={this.kittenize} addCard={this.addCard}/>
        <Segment >
          <h3>Cards</h3>       
          <CardList 
            cards={this.state.cards} 
            onCardClick={this.onCardClick}
          />
        </Segment>
      </div>
    );
  }
}

export default App;
