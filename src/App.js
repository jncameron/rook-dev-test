import React, { Component } from 'react';
import { Segment} from 'semantic-ui-react';
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
    ],
    kittens: false
  }

  onCardClick = (key) => {
    let newState = this.state.cards;
    let activeCount = 0;

    for (let i=0; i < newState.length; i++) {
      if(newState[i]['status'] === 'active') {
        activeCount++
      }
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
    if(!this.state.kittens) {
      this.setState({kittens: true})
    } else {
      this.setState({kittens: false})
    }
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
          <h3 className="card-list-segment-title">Cards</h3>       
          <CardList 
            cards={this.state.cards} 
            onCardClick={this.onCardClick}
            kittens={this.state.kittens}
          />
        </Segment>
      </div>
    );
  }
}

export default App;
