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
            <ul className="loc">
             <button> <li key={i}>{loc.name}, {loc.climate}, {loc.terrain};</li>
             </button>
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
        <div>{showLoc ? locations : ""}</div>
      </div>
    );
  }
}

export default Locations;
