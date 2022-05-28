import React, { Component } from "react";
import PROJECT from "../data/projects";

const Project = (props) => {
  const { title, description, image, link } = props.project;

  return (
    <div style={{ display: "inline-block", width: 400, margin: 10 }}>
      <h3>{title}</h3>
      <img
        src={image}
        alt={"Img not found"}
        style={{ width: 200, height: 120 }}
      />
      <p>{description}</p>
      <a href={link}>{link}</a>
    </div>
  );
};

const Projects = () => (
  <div>
    <h2>Highlighted Projects</h2>
    <div>
      {PROJECT.map((Proj) => {
        return <Project key={Proj.id} project={Proj} />;
      })}
    </div>
  </div>
);

export default Projects;
