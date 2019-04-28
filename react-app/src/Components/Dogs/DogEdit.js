import React, { Component } from "react";
import DogForm from "./DogForm";
import { fetchDog, updateDog } from "../../utils";

class DogEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevDogId: 0,
      dog: {
        name: "",
        info: ""
      }
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { history } = this.props;

    fetchDog(id).then(data => {
      if (data.id) this.setState({ prevDogId: id, dog: data });
      else return history.push("/dogs/404");
    });
  }

  handleChange = event => {
    const target = event.target;
    this.setState(state => {
      return {
        dog: { ...state.dog, [target.name]: target.value }
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const dog = this.state.dog;
    const prevDogId = this.state.prevDogId;
    const { history } = this.props;

    updateDog(prevDogId, dog).then(response => {
      console.log(response.id);
      history.push(`/dogs/${response.id}`);
    });
  };

  render() {
    return (
      <>
        <h1>Dog edit</h1>
        <DogForm
          dog={this.state.dog}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export default DogEdit;
