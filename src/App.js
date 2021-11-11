import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Body from './Body';
import { useStateValue } from './StateProvider';

const spotifyApi = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      spotifyApi.setAccessToken(_token);

      spotifyApi.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      });

      spotifyApi.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      });

      spotifyApi.getMyTopTracks({"limit" : 10, "time_range" : "short_term"}).then((tracks) => {
        dispatch({
          type: 'SET_TOP_TRACKS',
          topTracks: tracks
        })
        // console.log(tracks.items);
      });
    }
  }, [dispatch]);

  return (
    <div className="App">
      {!token && <Login />}
      {token && <Body />}
    </div>
  );
}

export default App;
