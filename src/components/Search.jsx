import React, { Component } from 'react';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: [],
      location: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.handleSearch(this.state.location);
    // this.props.history.push('/parks-by-zip')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={`search-${this.props.size}`}>
        <input
          name="location"
          className="location-input"
          value={this.state.location}
          placeholder="Enter location"
          onChange={this.handleChange}
        /> 
        <button>Submit</button>
      </form>
    )
  }
}

export default Search;