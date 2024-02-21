import React, { Component } from 'react'
import Project from '../components/project/Project'
import {projects} from './../components/helpers/projectList'

export class Projects extends Component {
  render() {
    return (
      <div>
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    
                {projects.map((project) => {
                    return <Project key={project.id} id={project.id} title={project.title} img={project.img} />
                })}
                
                </ul>
            </div>
        </main>
      </div>
    )
  }
}

export default Projects