import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import project1 from './images/project1.png';
import project2 from './images/project2.png';
import project3 from './images/project3.jpg';
function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      image: project1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac arcu bibendum, vehicula nulla non, sollicitudin elit.",
    },
    {
      id: 2,
      title: "Project 2",
      image: project2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac arcu bibendum, vehicula nulla non, sollicitudin elit.",
    },
    {
      id: 3,
      title: "Project 3",
      image: project3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac arcu bibendum, vehicula nulla non, sollicitudin elit.",
    },
  ];

  return (
    
    <section className="projects">
      <h1>My Projects</h1>
      { console.log(projects)}
      <div className="project-list">
        {
        
        projects?.map((project) => (
         
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
