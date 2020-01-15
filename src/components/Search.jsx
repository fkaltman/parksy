import React, { Component } from 'react';

function Search(props) {
 
    return (
      <form onSubmit={props.handleSubmit} >
        <input
          name="location"
          className="location-input"
          placeholder="Enter location"
          value={props.locationVal}
          onChange={props.handleChange}
        />
        <button className="submit-button">Search</button>
      </form>
    )
}

export default Search;