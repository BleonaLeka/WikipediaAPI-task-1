import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
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
      <div className="card-container">

          <div className="card card-item">
            <h2 className="card__title">{this.props.wikiList.title}</h2>
            <div className="card__extract" dangerouslySetInnerHTML={{__html: this.props.wikiList.snippet}}></div>
          </div>

        </div>
        
    );
  }
}

export default Card;