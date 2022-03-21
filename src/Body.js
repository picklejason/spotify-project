import React from 'react'
import './Body.css';
import { useStateValue } from './StateProvider';
import Track from './Track';
import Header from './Header';
import Playlists from './Playlists';

function Body() {
  
  const [{ topTracks, playlists }, dispatch] = useStateValue();

  return (
    <div>
      <Header />
      <h3>Top Tracks</h3>
      {topTracks?.items?.map(item => 
        <Track name={item?.name} url={item?.external_urls.spotify} artists={item?.artists} trackAlbum={item?.album} />
      )}
      
      <h3>Playlists</h3>
      <div className="playlists">
        {playlists?.items?.map(item => {
          if (item?.public === true) {
            console.log(item.name);
            console.log(item.external_urls.spotify);
            return <Playlists name={item.name} url={item.external_urls.spotify} image={item.images[0]} />
          }
        })} 
      </div>
    </div>
  );
}

export default Body;
