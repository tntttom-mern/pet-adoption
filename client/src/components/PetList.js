import React, { useState } from "react";
import { Link } from "@reach/router";
import axios from "axios";

export default (props) => {
  const [petList, setPetList] = useState(props.pets);

  console.log(props.pets);
  return (
    <table className="table table-striped mt-4">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {petList.map((pet, index) => (
          <tr key={index}>
            <td scope="row">{pet.name}</td>
            <td>{pet.type}</td>
            <td>
              <Link to={`/pets/${pet._id}`}>Detail</Link> |{" "}
              <Link to={`/pets/${pet._id}/edit`}>Edit</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
