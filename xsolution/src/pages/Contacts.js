import React, { Component } from 'react'

export class Contacts extends Component {
  render() {
    return (
      <div>
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Borisoglebsk, Russia</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+79229270146">+7 (922) 927-01-46</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:dokuchaevantoha@gmail.com">dokuchaevantoha@gmail.com</a></p>
                    </li>
                </ul>
            </div>
        </main>
      </div>
    )
  }
}

export default Contacts