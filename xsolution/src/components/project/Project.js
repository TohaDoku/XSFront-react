import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './Project.css'

export class Project extends Component {
  render() {
    return (
        <> 
            <NavLink to={`/project/${this.props.id}`}>
              <li className="project">
                  
                      <img src={this.props.img} alt={this.props.title} className="project__img" />
                      <h3 className="project__title">{this.props.title}</h3>
                  
              </li>
            </NavLink>
        </>
    )
  }
}

export default Project