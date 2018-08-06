import React, {Component} from 'react';
import {apiResponse} from '../data/data';
import Records from './Records';




class Releases extends Component {
  constructor() {
    super();
    this.state = {releases: []};

    this.sortReleases = this.sortReleases.bind(this);
  }

  async componentDidMount () {
    let promise = new Promise(resolve => {
  setTimeout(() => resolve(apiResponse), 1000)
});
    let data = await promise;
    data.releases.sort((a,b)=> {
      var nameA = a.title.toUpperCase(); // ignore upper and lowercase
      var nameB = b.title.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });


    this.setState({releases: data.releases});
    console.log(this.state.releases);
  };

  sortReleases = e => {
  const { value='name' } = e.target
  console.log('sorted', value);

  let response = this.state.releases;

  response.sort((a,b)=> {
    // sort by value
    if(value === 'year') {
      return a.year - b.year;
    }

    // sort by name

      var nameA = a.title.toUpperCase(); // ignore upper and lowercase
      var nameB = b.title.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
      })


  console.log(`${response.length} Releases`)
  this.setState({releases: response})
}


  render() {
    return (

        <Records
          data={this.state.releases}
          onChange={this.sortReleases}
        />

    )
  }
};

export default Releases;
