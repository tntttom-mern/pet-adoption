import React, { useState } from "react";

export default (props) => {
  const {
    initialName,
    initialType,
    initialDescription,
    initialSkillOne,
    initialSkillTwo,
    initialSkillThree,
    err,
  } = props;

  const [name, setName] = useState(initialName);
  const [type, setType] = useState(initialType);
  const [description, setDescription] = useState(initialDescription);
  const [skillOne, setSkillOne] = useState(initialSkillOne);
  const [skillTwo, setSkillTwo] = useState(initialSkillTwo);
  const [skillThree, setSkillThree] = useState(initialSkillThree);

  const onSubmit = (e) => {
    e.preventDefault();

    props.onSubmitProp({
      name,
      type,
      description,
      skillOne,
      skillTwo,
      skillThree,
    });
  };

  return (
    <form className="container mt-4" onSubmit={onSubmit}>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label>Pet Name</label>{" "}
            {err.name ? (
              <span className="small text-danger">{err.name.message}</span>
            ) : null}
            <input
              className="form-control"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Pet Type</label>{" "}
            {err.type ? (
              <span className="small text-danger">{err.type.message}</span>
            ) : null}
            <input
              className="form-control"
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Pet Description</label>{" "}
            {err.description ? (
              <span className="small text-danger">
                {err.description.message}
              </span>
            ) : null}
            <input
              className="form-control"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="col">
          <h3>Skills (Optional)</h3>
          <div className="form-group">
            <label>Skill One</label>
            <input
              className="form-control"
              type="text"
              value={skillOne}
              onChange={(e) => setSkillOne(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Skill Two</label>
            <input
              className="form-control"
              type="text"
              value={skillTwo}
              onChange={(e) => setSkillTwo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Skill Three</label>
            <input
              className="form-control"
              type="text"
              value={skillThree}
              onChange={(e) => setSkillThree(e.target.value)}
            />
          </div>
        </div>
      </div>
      <input
        className="btn btn-md btn-success"
        type="submit"
        value={props.submitName}
      />
    </form>
  );
};
