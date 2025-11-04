import React from 'react';

function Search(props) {
 
    return (
      <div>
        <form onSubmit={props.handleSubmit} >
          <input
            name="location"
            className="location-input"
            placeholder="Enter location"
            value={props.locationVal}
            onChange={props.handleChange}
            disabled={props.loading}
          />
          <button 
            className="submit-button"
            disabled={props.loading}
          >
            {props.loading ? 'Searching...' : 'Search'}
          </button>
        </form>
        {props.error && (
          <div style={{ color: 'red', marginTop: '10px' }}>
            {props.error}
          </div>
        )}
      </div>
    )
}

export default Search;