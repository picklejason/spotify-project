import React from 'react'
import { useStateValue } from "./StateProvider";
import './Header.css'

function Header() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <img src={user?.images[0].url} alt="" className="header__image" />
      <h1 className="header__name"><a href={user?.external_urls.spotify} target="_blank" rel="norefferer">{user?.display_name}</a></h1>
    </div>
  )
}

export default Header;