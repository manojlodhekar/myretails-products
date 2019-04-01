import React from 'react';
import { Icon } from 'semantic-ui-react';

export function getStarRating(ratingNum){
  let star = []
  const rating = parseInt(ratingNum, 10);
  for(var i = 0; i < rating; i++){
      star.push(<Icon name='star' size='small' key={i}/>)
  }
  if(ratingNum > rating){
      star.push(<Icon name='star half' size='small' key="icon" />)  
  }
  return star;
}