import React from 'react';
import './CardList.css';

const CardList = ({cards, onCardClick}) => {

  return(
    <div>
      {cards.map(card => {
        
        return(
          card.status === 'inactive'
          ?
          <div 
            className="card ui inverted red segment"
            key={card.key}
            onClick={() => onCardClick(card.key, card.status)}
          >
          hi
          </div>
          :
          <div 
            className="card ui inverted green segment"
            key={card.key}
            onClick={() => onCardClick(card.key, card.status)}
          >
          hi
          </div>
        )
      })
    }

  </div>
  )}

export default CardList;
