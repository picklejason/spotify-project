import React from 'react';
import './Track.css';

function Track({ name, artists, trackAlbum }) {

  return (
    <div className="track">
      <img className="track__album" src={trackAlbum.images[0].url} alt={name}/>
      <div className="track__info">
        <h1>{name}</h1> 
        <p>{artists.map((artist) => artist.name).join(", ")}</p>
      </div>   
    </div>
  )
}

export default Track;