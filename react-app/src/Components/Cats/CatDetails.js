import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchCat, deleteCat } from "../../utils";

class CatDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: undefined
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { history } = this.props;

    fetchCat(id).then(data => {
      if (data.id) {
        this.setState({ cat: data });
      } else return history.push("/cats/404");
    });
  }

  handleDeleteButtonClick = () => {
    const id = this.state.cat.id;
    const { history } = this.props;

    deleteCat(id).then(history.push("/cats"));
  };

  render() {
    const catDetails =
      this.state.cat !== undefined ? (
        <>
          <h1>Cat details</h1>
          <p>Id: {this.state.cat.id}</p>
          <p>Name: {this.state.cat.name}</p>
          <p>Info: {this.state.cat.info}</p>
          <button>
            <Link to={`/cats/edit/${this.state.cat.id}`}>Edit</Link>
          </button>
          <button onClick={this.handleDeleteButtonClick}>Delete</button>
          <button>
            <Link to={"/cats"}>Back</Link>
          </button>
        </>
      ) : (
        <></>
      );

    return catDetails;
  }
}

export default CatDetails;
