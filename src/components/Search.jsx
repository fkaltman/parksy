import React, { Component } from 'react';

class Search extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     parks: []
  //   }
  // }


  render() {
    return (
      <form onSubmit={this.props.handleSubmit} >
        <input
          name="location"
          className="location-input"
          placeholder="Enter location"
          value={this.props.locationVal}
          onChange={this.props.handleChange}
        />
        <button className="submit-button">Search</button>
      </form>
    )
  }
}

export default Search;