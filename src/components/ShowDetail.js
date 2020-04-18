import React from 'react';

const ShowDetail = (props) => {
  return (
    <div className="showCard">
      <li className="show" id={props.show.id}>
        <div className="pokemon-image">
          {/* <img src={props.show.image.medium} alt={props.show.name}/> */}
        </div>
        <div className="show-name">
          <h2>{props.show.name}</h2>
        </div>
      </li>
    </div>
  );
}

export default ShowDetail;