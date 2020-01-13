import React from 'react';
import './App.css';
import Home from "./components/Home"
import Search from "./components/Search";
// import ParkCards from "./components/ParkCards";
// import Noggin from './img/child-face.png'
import { Link, } from "react-router-dom";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom"
import { findParks } from './services/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: []
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.handleSearch(this.state.location);
    // this.props.history.push('/parks-by-zip')
  }

  handleSearch = async (location) => {
    const parks = await findParks(location);
    console.log(parks);
    this.setState({ parks });
  }

  render() {
    return (
      <>
        <Link className="home" to="/"></Link>
        <Link className="location" to="/enter-location"></Link>

        <Route exact path="/" render={(props) =>
          <Home {...props}
            handleSearch={this.handleSearch}
            parks={this.state.parks}
          />} />
        <Route path="/enter-location" render={(props) =>
          <Search {...props}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            handleSearch={this.handleSearch}
            val={this.state.location} />} />
      </>
    )
  }
}

export default withRouter(App);
