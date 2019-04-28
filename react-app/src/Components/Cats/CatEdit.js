import React, { Component } from "react";
import CatForm from "./CatForm";
import { fetchCat, updateCat } from "../../utils";

class CatEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevCatId: 0,
      cat: {
        name: "",
        info: ""
      }
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { history } = this.props;

    fetchCat(id).then(data => {
      if (data.id) this.setState({ prevCatId: id, cat: data });
      else return history.push("/cats/404");
    });
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
    const prevCatId = this.state.prevCatId;
    const { history } = this.props;

    updateCat(prevCatId, cat).then(response => {
      console.log(response.id);
      history.push(`/cats/${response.id}`);
    });
  };

  render() {
    return (
      <>
        <h1>Cat edit</h1>
        <CatForm
          cat={this.state.cat}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export default CatEdit;
