import React, { Component } from 'react';
import Card from '../../Card/Card';
import './SearchComponent.css';

class SearchComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // Object to store data taken from fetch request.
      searchText: "",
      wikipediaList: []

    };
  }

  handleSearchInputChange = (e) => {
    this.setState({searchText: e.target.value})
    let search_ = this.state.searchText
    if (search_.length > 3) {
      const WIKIPEDIA_API = `https://en.wikipedia.org/w/api.php?action=query&origin=*&list=search&srsearch=${e.target.value}&prop=info&inprop=url&utf8=&format=json&eilimit=5`;
      fetch(WIKIPEDIA_API)
        .then(response => response.json())
        .then(data => {
          this.setState({ wikipediaList: data.query.search });
        })
        .catch((e) => {
          //Display error in console if catches error
          console.log(e);
        });
    }

  }

 
  onSearch = () => {
    const WIKIPEDIA_API = `https://en.wikipedia.org/w/api.php?action=query&origin=*&list=search&srsearch=${this.state.searchText}&prop=info&inprop=url&utf8=&format=json&limit=5`;

    fetch(WIKIPEDIA_API)
      .then(response => response.json())
      .then(data => {
        this.setState({ wikipediaList: data.query.search });
      })
      .catch((e) => {
        //Display error in console if catches error
          console.log(e);
      });

  }


   //other way to render some data
   renderData() {
    if (this.state.wikipediaList.length > 0) {
      return (
        <div className="searchlist-container">
          <h1>Results</h1>
          <div className="cards">
            {this.state.wikipediaList.map(((item) => (
              <Card
                key={item.id}
                wikiList={item}
              ></Card>
            )))}

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
          onChange={this.handleSearchInputChange}
        />
        <button onClick={this.onSearch}> Search </button>

        {this.renderData()}
      </div>
    );
  }
}

export default SearchComponent;