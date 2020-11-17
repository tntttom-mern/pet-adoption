import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";

import axios from "axios";
import { navigate } from "@reach/router";

import PetForm from "../components/PetForm";

export default (props) => {
  const [errors, setErrors] = useState({});

  const createPet = ({
    name,
    type,
    description,
    skillOne,
    skillTwo,
    skillThree,
  }) => {
    axios
      .post("http://localhost:8000/api/pets/new", {
        name,
        type,
        description,
        skills: [skillOne, skillTwo, skillThree],
        likes: 0,
      })
      .then((res) => {
        if (res.data.errors) {
          setErrors(res.data.errors);
          console.log(errors);
        } else {
          navigate("/");
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Pet Shelter</h1>
        <Link to="/">back to home</Link>
      </div>
      <h3>Know a pet needing a home?</h3>

      <PetForm
        onSubmitProp={createPet}
        submitName="Add Pet"
        err={errors}
        initialName=""
        initialType=""
        initialDescription=""
        initialSkillOne=""
        initialSkillTwo=""
        initialSkillThree=""
      />
    </div>
  );
};
