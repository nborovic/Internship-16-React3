import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchCats } from "../../utils";

class CatsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    };
  }

  componentDidMount() {
    fetchCats().then(data => this.setState({ cats: data }));
  }

  render() {
    return (
      <>
        <h1>Cats list</h1>
        {this.state.cats.map(cat => (
          <p key={cat.id}>
            <Link to={`/cats/${cat.id}`}>{cat.name}</Link>
          </p>
        ))}

        <button>
          <Link to="/cats/create">Create</Link>
        </button>
        <button>
          <Link to="/">Back</Link>
        </button>
      </>
    );
  }
}

export default CatsList;
