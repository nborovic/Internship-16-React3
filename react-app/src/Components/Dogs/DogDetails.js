import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchDog, deleteDog } from "./../../utils";

class DogDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: undefined
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { history } = this.props;

    fetchDog(id).then(data => {
      if (data.id) {
        this.setState({ dog: data });
      } else return history.push("/dogs/404");
    });
  }

  handleDeleteButtonClick = () => {
    const id = this.state.dog.id;
    const { history } = this.props;

    deleteDog(id).then(history.push("/dogs"));
  };

  render() {
    const dogDetails =
      this.state.dog !== undefined ? (
        <>
          <h1>Dog details</h1>
          <p>Id: {this.state.dog.id}</p>
          <p>Name: {this.state.dog.name}</p>
          <p>Info: {this.state.dog.info}</p>
          <button>
            <Link to={`/dogs/edit/${this.state.dog.id}`}>Edit</Link>
          </button>
          <button onClick={this.handleDeleteButtonClick}>Delete</button>
          <button>
            <Link to={"/dogs"}>Back</Link>
          </button>
        </>
      ) : (
        <></>
      );

    return dogDetails;
  }
}

export default DogDetails;
