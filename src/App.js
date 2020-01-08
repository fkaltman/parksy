import React from 'react';
import './App.css';
import Search from "./components/Search";
import ParkCards from "./components/ParkCards";
import { findParks } from './services/api';
import Noggin from './img/child-face.png'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: []
    }
  }

  handleSearch = async (location) => {
    const parks = await findParks(location);
    console.log(parks);
    this.setState({parks});
  }
  
  render() {
    return (
      <div>
        <img className="noggin" src={Noggin}></img>
        <h1>PARKS!</h1>
        <Search handleSearch={this.handleSearch} />
        {/* the first 'parks' below is what parks is called in ParkCards  */}
        {/* (in the other component)  the second 'park' is what it is called 
         in this file (hence the this)*/}
        <ParkCards parks={this.state.parks}/>
      </div>
    )
  }
}

export default App;
