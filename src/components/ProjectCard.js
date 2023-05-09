import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaLink } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    console.log("  project value is :"+project)
  const { title, description, technologies, githubLink, liveLink, image } = project;
    console.log("title ==:"+title)
    console.log("description ==:"+description)
    console.log("technologies ==:"+technologies)
    console.log("githubLink ==:"+githubLink)
    console.log("liveLink ==:"+liveLink)
    console.log("image ==:"+image)
  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-card-info">
        <h3>{title}</h3>
        <p>{description}</p>
        {
         <div className="project-card-links"></div>
        /* <ul>
          {technologies.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
        <div className="project-card-links">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub className="project-card-icon" />
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <FaLink className="project-card-icon" />
            </a>
          )}
        </div> */}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubLink: PropTypes.string,
    liveLink: PropTypes.string,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
