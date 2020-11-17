import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";

import axios from "axios";

export default (props) => {
  const [pet, setPet] = useState({});
  const [likes, setLikes] = useState();
  const [active, setActive] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pets/${props.id}`)
      .then((res) => {
        setLikes(res.data[0].likes);
        setPet({
          ...res.data[0],
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const addLike = () => {
    setLikes(likes + 1);

    axios
      .put(`http://localhost:8000/api/pets/${pet._id}`, {
        likes: likes + 1,
      })
      .then((res) => {
        setActive(true);
      })
      .catch((err) => console.log(err));
  };

  const deletePet = () => {
    axios
      .delete(`http://localhost:8000/api/pets/${pet._id}`)
      .then(() => navigate("/"))
      .catch((err) => console.log("Error deleting pet", err));
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <h1>Pet Shelter</h1>
        <Link to="/">back to home</Link>
      </div>

      <div className="d-flex justify-content-between">
        <h3 className="mt-4">
          {pet.name ? `Details about ${pet.name}` : "Loading Name"}
        </h3>

        <button className="btn btn-sm btn-danger" onClick={deletePet}>
          Adopt {pet.name}
        </button>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <h5>
            <b>Pet Type: </b> {pet.type ? `${pet.type}` : "Loading Type"}{" "}
          </h5>

          <h5>
            <b>Description: </b>
            {pet.description ? pet.description : "Loading Description"}
          </h5>
          <div className="d-flex">
            <h5 className="font-weight-bold d-inline">Skills: </h5>
            <ul className="list-group">
              {pet.skills
                ? pet.skills.map((skill, index) => (
                    <li key={index} className="list-group-item border-0 pt-0">
                      <h5>{skill}</h5>
                    </li>
                  ))
                : ""}
            </ul>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between w-25">
        <button
          disabled={active}
          onClick={addLike}
          className="btn btn-lg btn-success mt-4"
        >
          Like {pet.name}
        </button>
        <p className="d-inline-block font-weight-bold m-0">{likes} likes</p>
      </div>
    </div>
  );
};
