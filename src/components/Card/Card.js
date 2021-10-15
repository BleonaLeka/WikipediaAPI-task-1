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

          <div className="card card-1">
            <p className="card__exit"><i className="fas fa-times"></i></p>
            <h2 className="card__title">{this.props.title}</h2>
            <div dangerouslySetInnerHTML={{__html: this.props.body}}></div>
          </div>

        </div>
    );
  }
}

export default Card;