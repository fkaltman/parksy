import React from "react";
import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import ParkCards from "./components/ParkCards";
import { Link } from "react-router-dom";
import { Route, withRouter } from "react-router-dom";
import { findParks } from "./services/api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: [],
      location: "",
      loading: false,
      error: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!this.state.location.trim()) {
      this.setState({ error: "Please enter a location" });
      return;
    }

    await this.handleSearch(this.state.location);
    this.props.history.push("/parks");
  };

  handleSearch = async (location) => {
    this.setState({ loading: true, error: null });

    try {
      const parks = await findParks(location);
      console.log(parks);
      this.setState({
        parks,
        loading: false,
        error: null,
      });
    } catch (error) {
      console.error("Search error:", error);
      this.setState({
        error: "Failed to search for parks. Please try again.",
        loading: false,
      });
    }
  };

  render() {
    return (
      <>
        <Link className="home" to="/"></Link>
        <Link className="location" to="/enter-location"></Link>

        <Route
          exact
          path="/"
          render={(props) => (
            <Home
              {...props}
              handleSearch={this.handleSearch}
              parks={this.state.parks}
            >
              <Search
                {...props}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                handleSearch={this.handleSearch}
                locationVal={this.state.location}
                loading={this.state.loading}
                error={this.state.error}
              />
            </Home>
          )}
        />
        <Route
          path="/parks"
          render={(props) => <ParkCards parks={this.state.parks} />}
        />
      </>
    );
  }
}

export default withRouter(App);
