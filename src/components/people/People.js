import React from "react";
import Person from "./Person";
import "./People.css";

export class People extends React.Component {
  constructor() {
    super();
    this.state = {
      getData: false,
      people: [],
      person: "",
    };
  }

  fetchPerson = () => {
      const { person } = this.state;
      console.log(person)
      
    fetch(`https://ghibliapi.herokuapp.com/people?name=${person.trim()}`)
      .then((response) => response.json())
      .then((data) => {
        const people = data;
        // const person = people.map(person => person)
        this.setState({
          person: person,
          people: people,
          getData: true,
        });
      });
  };

  componentDidMount() {
    this.fetchPerson();
  }

  userInput = (e) => {
    const {value }  = e.target
    this.setState({ person: value.slice(0,1).toUpperCase() + value.slice(1) });
  };
  
  render() {
    const { people, getData } = this.state;
    return (
      <div className="people">
        <h1>Search for a Person</h1>

        <input
          type="text"
          placeholder="Find Your Person"
          onChange={this.userInput}
          value={this.state.person}
        />
        <button onClick={this.fetchPerson}>Submit</button>
        {getData && <Person people={people} />}
      </div>
    );
  }
}

export default People;
