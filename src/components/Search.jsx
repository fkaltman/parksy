import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: [],
      location: ""
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input
          name="location"
          className="location-input"
          value={this.state.location}
          placeholder="Enter location"
          onChange={this.handleChange}
        />
        <button className="submit-button">Search</button>
      </form>
    )
  }
}

export default Search;