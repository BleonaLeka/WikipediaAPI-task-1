import React, { Component } from 'react';
import Card from '../Card/Card';
import SearchComponent from '../Search/SearchComponent/SearchComponent';
import './MainComponent.css';

class MainComponent extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

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