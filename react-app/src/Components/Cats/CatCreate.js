import React, { Component } from "react";
import CatForm from "./CatForm";
import { saveCat } from "../../utils";

class CatCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: {
        name: "",
        info: ""
      }
    };
  }

  handleChange = event => {
    const target = event.target;
    this.setState(state => {
      return {
        cat: { ...state.cat, [target.name]: target.value }
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const cat = this.state.cat;
    const { history } = this.props;

    if (cat.info === "" || cat.name === "") {
      alert("All fields are required!");
      return;
    }

    saveCat(cat).then(response => {
      console.log(response.id);
      history.push(`/cats/${response.id}`);
    });
  };

  render() {
    return (
      <>
        <h1>Cat create</h1>
        <CatForm
          cat={this.state.cat}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export default CatCreate;
