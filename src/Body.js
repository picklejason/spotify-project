import React from 'react'
import { useStateValue } from './StateProvider';
import Track from './Track';
import Header from './Header';

function Body() {
  
  const [{ topTracks }, dispatch] = useStateValue();

  return (
    <div>
      <Header />
      {topTracks?.items.map((item) => (
        <Track name={item.name} artists={item.artists} trackAlbum={item.album} />
      ))}
    </div>
  );
}

export default Body;
