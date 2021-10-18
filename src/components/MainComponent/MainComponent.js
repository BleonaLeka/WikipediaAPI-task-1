import React, { Component } from 'react';
import Card from '../Card/Card';

import SearchComponent from '../Search/SearchComponent/SearchComponent';
import './MainComponent.css';

class MainComponent extends Component {
  constructor(props){
  super(props);
      this.state = {

      };
  }

  


  render() {
    return (
      <div className="container">
        Welcome, Wikipedia Search
        <SearchComponent></SearchComponent>
        </div>
    );
  }
}

export default MainComponent;