import React, { useEffect, useState } from "react";
import { navigate, Link } from "@reach/router";

import PetForm from "../components/PetForm";

import axios from "axios";

export default (props) => {
  const [pet, setPet] = useState();
  const { id } = props;
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skillOne, setSkillOne] = useState("");
  const [skillTwo, setSkillTwo] = useState("");
  const [skillThree, setSkillThree] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pets/${id}`)
      .then((res) => {
        console.log(res.data);
        setPet(res.data[0]);
        setName(res.data[0].name);
        setType(`${res.data[0].type}`);
        setDescription(res.data[0].description);
        setSkillOne(res.data[0].skills[0]);
        setSkillTwo(res.data[0].skills[1]);
        setSkillThree(res.data[0].skills[2]);
        setLoaded(true);
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  const updateHandler = ({
    name,
    type,
    description,
    skillOne,
    skillTwo,
    skillThree,
  }) => {
    axios
      .put(`http://localhost:8000/api/pets/${id}`, {
        name,
        type,
        description,
        skills: [skillOne, skillTwo, skillThree],
      })
      .then((res) => {
        if (res.data.errors) {
          setErrors(res.data.errors);
          setName(pet.name);
          setType(`${pet.type}`);
          setDescription(pet.description);
          setSkillOne(pet.skills[0]);
          setSkillTwo(pet.skills[1]);
          setSkillThree(pet.skills[2]);
        } else {
          navigate(`/`);
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <h1>Pet Shelter</h1>
        <Link to="/">back to home</Link>
      </div>
      <h3>Edit {name}</h3>
      {loaded && (
        <PetForm
          onSubmitProp={updateHandler}
          submitName="Edit Pet"
          err={errors}
          initialName={pet.name}
          initialType={pet.type}
          initialDescription={pet.description}
          initialSkillOne={pet.skills[0]}
          initialSkillTwo={pet.skills[1]}
          initialSkillThree={pet.skills[2]}
        />
      )}
    </div>
  );
};
