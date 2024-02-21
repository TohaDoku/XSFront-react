import React, { Component } from 'react'

import "./Footer.css"

import vk from "../../img/icons/01.svg"
import inst from "../../img/icons/02.svg"
import twiter from "../../img/icons/03.svg"
import github from "../../img/icons/04.svg"
import linked from "../../img/icons/05.svg"

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={inst} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={twiter} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={github} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={linked} alt="Link" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 Doku Fullstack Developer</p>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    )
  }
}

export default Footer