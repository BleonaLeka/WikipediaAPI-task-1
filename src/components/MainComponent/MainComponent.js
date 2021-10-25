import React, { Component } from 'react';
import Card from '../Card/Card';
import FooterComponent from '../Footer/FooterComponent';

import SearchComponent from '../Search/SearchComponent/SearchComponent';
import './MainComponent.css';

class MainComponent extends Component {
  constructor(props) {
  super(props);
      this.state = {

      };
  }

  render() {
    return (
      <div className="container">
        <SearchComponent username = "Bleona Leka" ></SearchComponent>
        {/* Can call the component like this too  */}
        <FooterComponent/> 
      </div>
    );
  }
}

export default MainComponent;