import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";

import PetList from "../components/PetList";

import axios from "axios";

export default (props) => {
  const [petList, setPetList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets")
      .then((res) => {
        setPetList(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Pet Shelter</h1>
        <Link to="/pets/new">Add a pet to shelter</Link>
      </div>
      <h3>These pets are looking for a good home</h3>
      {loaded && <PetList pets={petList} />}
    </div>
  );
};
