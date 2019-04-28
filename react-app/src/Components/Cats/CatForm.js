import React from "react";
import { Link } from "react-router-dom";

let CatForm = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={props.cat.name}
        name="name"
        onChange={props.onChange}
      />
      <br />
      <textarea
        name="info"
        placeholder="Info"
        value={props.cat.info}
        onChange={props.onChange}
      />
      <br />
      <input type="submit" value="Submit" />
      <button>
        <Link to={"/cats"}>Back</Link>
      </button>
    </form>
  );
};

export default CatForm;
