import React from 'react';
import {Button} from 'semantic-ui-react';
import './CardList.css';

const CardList = ({cards, onCardClick}) => {

  return(
    <div className="note-list ui equal width divided grid" >
      {cards.map(card => {
        
        return(
          card.status === 'inactive'
          ?
          <div 
            className="card ui inverted red segment"
            key={card.key}
            onClick={() => onCardClick(card.key, card.status)}
          >
          </div>
          :
          <div 
            className="card ui inverted green segment"
            key={card.key}
            onClick={() => onCardClick(card.key, card.status)}
          >
          </div>
        )
      })
    }

  </div>
  )}

export default CardList;
