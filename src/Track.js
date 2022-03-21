import React from 'react';
import './Track.css';

function Track({ name, url, artists, trackAlbum }) {

  return (
    <div className="track">
      <img className="track__album" src={trackAlbum.images[0].url} alt={name}/>
      <div className="track__info">
        <h1><a href={url} target="_blank" rel="noreferrer">{name}</a></h1> 
        <p>{artists.map((artist) => artist.name).join(", ")}</p>
      </div>   
    </div>
  )
}

export default Track;