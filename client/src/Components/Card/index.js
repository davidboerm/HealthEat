import React from 'react';
// import Recipe from '../Recipe';

const Card = (props) => {
    return (
<div className="card">
  <div className="card-body">
    <h5 className="card-title">{props.label}</h5>
    <h6 className="card-subtitle mb-2 text-muted"><a href={props.url}>Link</a></h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    )
}

export default Card;
