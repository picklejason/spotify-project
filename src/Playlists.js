import React from 'react'
import { useStateValue } from "./StateProvider";
import './Playlists.css'

function Playlists({name, url, image}) {
  return (
    <div className="playlist">
      <img className="playlist__image" src={image.url} alt={name}/>
      <h1 className="playlist__name"><a href={url} target="_blank" rel="noreferrer">{name}</a></h1>
    </div>
  )
}

export default Playlists