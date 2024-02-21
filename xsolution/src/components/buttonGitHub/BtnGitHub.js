import React, { Component } from 'react'

import githubIcon from './github.svg' 

import './style.css'

export class BtnGitHub extends Component {
  render() {
    return (
        <div>
            <a href="#!" className="btn-outline">
                <img src={githubIcon} alt="" />
                GitHub repo
            </a>
        </div>
    )
  }
}

export default BtnGitHub