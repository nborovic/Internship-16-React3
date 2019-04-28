import React from "react";
import { Link } from "react-router-dom";

let DogForm = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={props.dog.name}
        name="name"
        onChange={props.onChange}
      />
      <br />
      <textarea
        name="info"
        placeholder="Info"
        value={props.dog.info}
        onChange={props.onChange}
      />
      <br />
      <input type="submit" value="Submit" />
      <button>
        <Link to={"/dogs"}>Back</Link>
      </button>
    </form>
  );
};

export default DogForm;
