import React from 'react';
import BtnGitHub from '../components/buttonGitHub/BtnGitHub';
import { projects } from '../components/helpers/projectList';
import { useParams } from 'react-router-dom';

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <div>
      <main className="section">
        <div className="container">
          <div className="project-details">    
            <h1 className="title-1">{project.title}</h1>
            <img src={project.imgBig} alt="" className="project-details__cover" />
            <div className="project-details__desc">
              <p>{project.skills}</p>
            </div>
            {project.gitHubLink && (
              <BtnGitHub  />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Project;