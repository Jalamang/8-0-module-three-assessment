import React from 'react';
import Person from "./Person";
import "./People.css";

 class People extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [],
      person: "",
      eachPerson:''
    };
  }

  fetchPerson = () => {
    fetch('https://ghibliapi.herokuapp.com/people/')
    .then((response) => response.json())
    .then(data => this.setState({
      people: data
    })
    )
  }

  componentDidMount() {
    this.fetchPerson();
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    const {people, person} = this.state
    if(person === "") return
    const eachPerson = people.find(parson => parson.name.includes(person))
    this.setState({person: ''})
    this.setState({eachPerson: eachPerson})
  
  }

  userInput = (e) => {
    const {value }  = e.target
    this.setState({ person: value.slice(0,1).toUpperCase() + value.slice(1).toLowerCase()});
  };
  
  render() {
    const { eachPerson, person } = this.state;
    return (
      <div className="people">
        <h1>Search for a Person</h1>

        <input
          type="text"
          placeholder="Find Your Person"
          onChange={this.userInput}
          value={this.state.person}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        { <Person eachPerson={eachPerson} />}
      </div>
    );
  }
}

export default People;