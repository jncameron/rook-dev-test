import React from 'react';

const EachCard = ({cards, onCardClick, kittens}) => {

  return (
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
          {kittens === true
            ?
            <img className="card-kitten" src={`http://placekitten.com/${150+cards.indexOf(card)}/250`} alt='kitten'/>
            :
            <div></div>}
          </div>
          :
          <div 
            className="card ui inverted green segment"
            key={card.key}
            
            onClick={() => onCardClick(card.key, card.status)}
          >
            <h1 className="card-title">{cards.indexOf(card) + 1}</h1>
            {kittens === true
            ?
            <img className="card-kitten" src={`http://placekitten.com/${150+cards.indexOf(card)}/250`} alt='kitten'/>
            :
            <div></div>}
          </div>
        )
      })
    }

  </div>
  )
}

export default EachCard;