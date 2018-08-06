import React, {Component} from 'react';


const Header = ( {data} ) => {
  return (
  <div className="releases">
  <h1>Releases from <a href="https://www.discogs.com/label/245-R-S-Records">R&S Records</a></h1>
  <select id="sort">
    <option value="name">Name</option>
    <option value="year">Release Year</option>
  </select>
  </div>
  )
};

export default Header;
