import React from 'react';


const Records = ( props ) => {
  return (

    <div className="cards">
    <div className="releases">
    <h1>Releases from <a href="https://www.discogs.com/label/245-R-S-Records">R&S Records</a></h1>
    <select id="sort" onChange={props.onChange} >
      <option value="name">Name</option>
      <option value="year">Release Year</option>
    </select>
    </div>
      {props.data.length === 0? <div> Loading Records... </div> :
        props.data.map((release) => {
        return (
          <div className="card" key={release.id}>
          <a href={"http://discogs.com/release/" + release.id} target="_blank">
           <img src={release.thumb} alt={release.artist} />
          </a>
           <div className="overlay">
             <h5 className="title">{release.title}</h5>
             <h5 className="artist">{release.artist}</h5>
             <h5 className="year">{release.year}</h5>
             <h5 className="catno">{release.catno}</h5>
           </div>
          </div>
        )

      })
      }
    </div>
  )
};

export default Records;
