import React, { Component } from "react";
import DogForm from "./DogForm";
import { saveDog } from "../../utils";

class DogCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: {
        name: "",
        info: ""
      }
    };
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
    const { history } = this.props;

    saveDog(dog).then(response => {
      console.log(response.id);
      history.push(`/dogs/${response.id}`);
    });
  };

  render() {
    return (
      <>
        <h1>Dog create</h1>
        <DogForm
          dog={this.state.dog}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export default DogCreate;
