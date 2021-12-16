import React, { Component } from "react";
import "./Locations.css";

export class Locations extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      showLoc: false,
    };
  }

  componentDidMount() {
    this.fetchLocations();
  }

  fetchLocations = () => {
    fetch(`https://ghibliapi.herokuapp.com/locations`)
      .then((response) => response.json())
      .then((data) => {
        const locations = data.map((loc, i) => {
          return (
            <ul>
              <li key={i}>{loc.name}</li>
            </ul>
          );
        });
        this.setState({ locations: locations });
      });
  };

  handleClick = () => {
    this.setState({
      showLoc: !this.state.showLoc,
    });
  };

  render() {
    const { showLoc, locations } = this.state;
    return (
      <div className="locations">
        <h1> List of Locations </h1>

        <button onClick={this.handleClick}>
          {showLoc ? "Hide Locations" : "Show Locations"}
        </button>
        <ul>{showLoc ? locations : ""}</ul>
      </div>
    );
  }
}

export default Locations;
