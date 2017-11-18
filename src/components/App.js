import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import Weather from '../containers/weather';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Weather />
      </div>
    );
  }
}

export default App;
