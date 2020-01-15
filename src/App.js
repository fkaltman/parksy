import React from 'react'
import './App.css';
import Home from "./components/Home"
import Search from "./components/Search"
import ParkCards from "./components/ParkCards";
import { Link } from "react-router-dom"
import { Route, withRouter } from "react-router-dom"
import { findParks } from './services/api'

class App extends React.Component {
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
    this.handleSearch(this.state.location);
    this.props.history.push('/parks')
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
          >
            <Search {...props}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              handleSearch={this.handleSearch}
              locationVal={this.state.location}
            />
          </Home>
        } />
        <Route path="/parks" render={(props) =>
          <ParkCards parks={this.state.parks}/>} />
      </>
    )
  }
}

export default withRouter(App);
