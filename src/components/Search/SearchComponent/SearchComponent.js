import React, { Component } from 'react';
import Card from '../../Card/Card';
import './SearchComponent.css';

class SearchComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // Object to store data taken from fetch request.
      wikipediaResponseTitle: {},
      wikipediaResponseBody: {}

    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    let search_ = e.target.value
    //fetch(' https://api.allorigins.win/raw?url=https://en.wikipedia.org/w/api.php?action=query&titles=Albania&prop=extracts&format=json&exintro=1')
    fetch(`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&titles=${search_}&prop=extracts&format=json&exintro=2`)
      .then(response => response.json())
      .then(data => {
        const { pages } = data.query;
        this.setState({ wikipediaResponseTitle: Object.keys(pages).map(id => pages[id].title) });
        this.setState({ wikipediaResponseBody: Object.keys(pages).map(id => pages[id].extract) });
      })
      .catch(() => {
        var data = [
          {
            title: "Adem",
            extract: "This is some part of the extract"
          },
          {
            title: "Adem1",
            extract: "This is some part of the extract1"
          }
        ]
        this.setState({ wikipediaResponseTitle: data[0].title });
        this.setState({ wikipediaResponseBody: data[0].extract });
      });



  }

  //other way to render some data
  renderData() {
    if (this.state.wikipediaResponseTitle.length > 0) {
      return (
        <div className="searchlist-container">
          <h1>Results</h1>
          {/* <h2>{this.state.wikipediaResponse.query.title}</h2> */}
          <div className="cards">
            <Card
              title={this.state.wikipediaResponseTitle}
              body={this.state.wikipediaResponseBody}
            ></Card>
          </div>

        </div>
      )
    }

  }
  render() {
    return (
      <div className="search-field-container">
        <input
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type="search"
          placeholder="Search To Wikipedia"
          onChange={this.handleChange}
        />

        {this.renderData()}
      </div>
    );
  }
}

export default SearchComponent;