import React from 'react';

import './CardList.css';
import EachCard from './EachCard';

const CardList = ({cards, onCardClick, kittens}) => {

  return(
    <EachCard cards={cards} kittens={kittens} onCardClick={onCardClick} />
  )}

export default CardList;
