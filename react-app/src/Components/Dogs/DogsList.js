import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchDogs } from "./../../utils";

class DogsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: []
    };
  }

  componentDidMount() {
    fetchDogs().then(data => this.setState({ dogs: data }));
  }

  render() {
    return (
      <>
        <h1>Dogs list</h1>
        {this.state.dogs.map(dog => (
          <p key={dog.id}>
            <Link to={`/dogs/${dog.id}`}>{dog.name}</Link>
          </p>
        ))}

        <button>
          <Link to="/dogs/create">Create</Link>
        </button>
        <button>
          <Link to="/">Back</Link>
        </button>
      </>
    );
  }
}

export default DogsList;
